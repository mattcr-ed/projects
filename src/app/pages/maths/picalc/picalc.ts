import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-picalc',
  imports: [FormsModule],
  templateUrl: './picalc.html',
  styleUrl: './picalc.css'
})
export class Picalc {
  protected textbox: any;
  protected user_digits = 0;
  protected digits = "";
  protected iter = calculatePi();
  protected isError = false;

  ngOnInit() {
    this.textbox = document.getElementById('digits-box');
  }

  updateDigits() {
    this.user_digits = Number.parseInt(this.textbox.value);
    this.iter = calculatePi();
    if (this.user_digits <= 0) {
      this.isError = true;
      return;
    } else {
      this.isError = false;
      this.digits = "";
      for (let i = 0; i < this.user_digits + 1; i++) {
        this.digits += this.iter.next().value;
        if (i % 10 == 0 && i != 0)
          this.digits += " ";
      }
      this.digits = "3." + this.digits.slice(1);
    }
  }
}

//Formula taken from https://stackoverflow.com/a/64286624
function * calculatePi() {
    let q = 1n;
    let r = 180n;
    let t = 60n;
    let i = 2n;
    while (true) {
        let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
        yield Number(digit);
        let u = i * 3n;
        u = (u + 1n) * 3n * (u + 2n);
        r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
        q *= 10n * i * (i++ * 2n - 1n);
        t *= u;
    }
  }
