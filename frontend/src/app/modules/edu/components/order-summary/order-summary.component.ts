import { Component ,HostListener} from '@angular/core';
import { DatePipe } from '@angular/common';
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import {AuthpaymentService} from '../../../../services/authpayment.service';

declare var Razorpay: any;
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  faIndianRupeeSign=faIndianRupeeSign;
  dateAndTime:any;
 
  constructor(public datepipe: DatePipe ,  private router: Router ,private auth:AuthpaymentService){
    let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  
    this.dateAndTime=currentDateTime;
  }

  message:any = "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "",
    "amount": "200",
    "name": "Abhijit Gatade",
    "description": "Web Development",
    "image": "https://www.abhijitgatade.com/assets/img/favicon.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  paynow() {
    this.paymentId = '';
    this.error = '';
    this.options.amount = "200"; //paise
    this.options.prefill.name = "Abcd";
    this.options.prefill.email = "abcd@gmail.com";
    this.options.prefill.contact = "9999999999";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
  }
  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
  }

onhey(){}
onChekOut(){}

}

