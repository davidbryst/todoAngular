import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-screen h-screen flex flex-col items-center justify-center text-center text-violet-800 font-black text-2xl gap-5"><span class="text-8xl">404</span> Page not found</div>
  `,
})
export class P404Component {

}
