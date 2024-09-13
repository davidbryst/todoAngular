import { RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import {TestComponent} from './components/test.component';
import {NavComponent} from './components/sections/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent, NavComponent, RouterModule, CommonModule],
  template: `
    <main>
      <div
          class="relative bg-violet-50 dark:bg-violet-950 w-screen h-screen pattern"
      >
        <a [routerLink]="['/']" class="absolute z-10 top-[3.5vh] left-1/2 font-extrabold text-xl dark:text-gray-50 text-slate-900 rounded-lg">
          <header>
            <span class="text-violet-600 dark:text-violet-600">t<span class="text-violet-950 dark:text-violet-200">ud</span>u.</span>
          </header>
        </a>
        <app-nav/>
        <section class="content">
          <router-outlet/>
      </section>
      </div>
    </main>
  `,
})
export class AppComponent {
  title = 'tudu';
}
