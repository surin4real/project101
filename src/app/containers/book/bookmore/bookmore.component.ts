import { Component, OnInit, ViewChild, Input, OnChanges, NgZone, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {FormGroup, FormBuilder, Validators, NgModel, FormControl} from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ElementRef,Renderer2} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { Observable }        from 'rxjs/Observable';
import { DataService } from './../../../shared/data.service';
import { AuthService } from './../../../shared/auth/auth.service';
import { StripeService } from './../../../shared/stripe/stripe.service';
import { environment } from '../../../../environments/environment';
import {Http, Headers, Response, Jsonp} from '@angular/http';

declare var Stripe:any;
declare var configure: any;
declare var StripeCheckout:any;
@Component({
  selector: 'app-book',
  templateUrl: './bookmore.component.html',
  styleUrls: ['./bookmore.component.css']
})
export class BookmoreComponent implements OnInit {
@ViewChild('someVar') el:ElementRef;
kids: number = 0;
adults: number = 0;
 id:any;
tours: any;
tour: any;
bookForm : FormGroup;
infoForm : FormGroup;
t_available;
total_price: number = 0.00;
checkoutOk:boolean = false;
checkoutOkay:boolean =false;
keepsafe: boolean = true;
message;
messageAlmost;
msg: string = "";
price: any;
extra00: number = 0;
bookname: string;
bookemail: string;
private cardToken:any;

handler: any;
 amount = 500;
  constructor(private meta: Meta, private http: Http, 
    private title: Title,  private router: Router, private route: ActivatedRoute,
     private dataService: DataService, private fb: FormBuilder, private _zone: NgZone, private stripeSvc: StripeService , public auth: AuthService) {
    
   
   }

 

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: './assets/logo.png',
      locale: 'auto',
      token: token => {
        this.stripeSvc.processPayment(token, this.amount)
      }
    });



    this.setUpCard();
    this.route.params.subscribe(params => {
        this.id = params['id'];
       
        
        this.dataService.getJSON2().subscribe(data => {
         this.tour = data.filter(function(node) {
                return node.t_id === params['id'];
          });
           this.tour = this.tour[0]; 
            this.title.setTitle('Book '+ this.tour["t_name"]);
            
            this.meta.addTags([ 
            {
              name: 'author', content: 'Book '+ this.tour["t_name"]
            },
            {
              name: 'keywords', content: this.tour["t_name"]
            },
            {
              name: 'description', content: this.tour["t_desc"]
            },
          ]);
    

      this.bookForm = this.fb.group({
      'bookdate': [null,  Validators.required],
      'bookadults': [null, Validators.required],
      'bookkids': ['']
    });
   
  if(this.auth.currentUser){
    console.log(this.auth.currentUserId);
  
     this.infoForm = this.fb.group({
      'firstname': [{value: this.auth.currentUserDisplayName.substr(0,this.auth.currentUserDisplayName.indexOf(' ')), disabled: true},  Validators.required],
      'lastname': [{value: this.auth.currentUserDisplayName.substr(this.auth.currentUserDisplayName.indexOf(' ')+1), disabled: true}, Validators.required],
      'email': [{value: this.auth.currentUser.email, disabled: true},, Validators.compose([Validators.required, <any>Validators.email])],
      'confirmemail': [{value: this.auth.currentUser.email, disabled: true}, Validators.compose([Validators.required, <any>Validators.email])]
    });
   
  }
    
   this.bookForm.valueChanges.subscribe(data => {
      this.adults = data.bookadults;
      this.kids = data.bookkids;
      var adultcost =  data.bookadults * this.tour["t_price"];
      var kidscost = data.bookkids * this.tour["t_kid_price"];
      this.total_price = adultcost + kidscost;
    })
 

        });
    });
    
  }
   setUpCard() {
    //here we setup the stripe publish key.
    //notice that this is a test key for my account so replace with production key(live)
    Stripe.setPublishableKey('pk_test_vV4J1xv4Erxp0qbd6zhAjZmo');
  }

  getCardData(number, month, year, cvc) {
    //I get the card data typed in here and pass it to the getCardToken method
    this.getCardToken(number, month, year, cvc);
    this.msg = 'Checking Card! be patient!';
  }
    getCardToken(number, month, year, cvc) {
    //set up the card data as an object
    var dataObj = {"number": number, "exp_month": month, "exp_year": year, "cvc": cvc};

    // Request a token from Stripe:
    Stripe.card.createToken(dataObj,
      (status, response) => { //I'm using an arrow function instead of stripeResponseHandler(a function also) cos it's kickass!
        // basically you can do anything here with the reponse that has your token
        // you can hit your backend api and initialize a charge etc
      // Wrapping inside the Angular zone
      this._zone.run(() => {
        if (status === 200) {
          console.log("the card response: ", response);
          this.cardToken = response.id;
          console.log("the caard token: ", this.cardToken);
          this.msg = 'Secure payment gateway processing...';


        let headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
           let data = {
             'token': this.cardToken,
             'amount': this.total_price,
             'title': this.tour.t_name
           }
          /*this.http.post('https://lawless-rigging.000webhostapp.com/charge.php', data, {
              headers: headers
          }).subscribe(res => {
              console.log('post result %o', res.json().message);
              this.msg = res.json().message;
              this.router.navigateByUrl('booking/paid/success');
          });*/

        }
       
        else {
          console.log("error in getting card data: ", response.error);
        }
         });
      }
    );

  }


  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
      locale: 'auto',
      token: (token: any) => {
         // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        //https://lawless-rigging.000webhostapp.com/
      
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: this.price
    });
  }

  submitForm(value){
    this.message = "Please wait....";
    setTimeout(()=>{
    if(value.bookadults){
      if(value.bookdate){
      this.checkoutOk = true;
      }
    }
    }, 4000);
  }
 

  submitInfo(value){
    this.bookemail = value.confirmemail;
    this.bookname = value.firstname;
    this.messageAlmost = "Please wait! Almost done....";
    setTimeout(()=>{
      if(value){
      this.checkoutOk = false;
      this.keepsafe = false;
      this.checkoutOkay = true;
      }
    }, 4000);
  }


   handlePayment() {
    this.handler.open({
      name: 'Glo Thai Tour',
      description: this.tour.t_name,
      amount: this.total_price + '' + 0 +''+0
    });
  }

  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }
}

