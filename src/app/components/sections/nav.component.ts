import { NavItemType } from './../../interfaces/navItemType';
import { CommonModule,NgOptimizedImage } from '@angular/common';
import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <a
        href="#profile"
        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-violet-100  text-violet-600 dark:bg-sky-900 dark:text-sky-50"
    >
        <img ngSrc="iconSvg/{{ navItem.icon }}.svg" alt="Angular {{ navItem.text }}" width="32" height="32" />
        <small class="text-center text-xs font-medium"> {{ navItem.text }} </small>
    </a>
  `,
})

export class NavItemComponent {
  @Input() navItem!: NavItemType;
}


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  template: `
    <nav
      class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
      >
      @for (single of navs; track $index; let i = $index ) {
        @if (i === 3) {
          <hr class="dark:border-violet-50/60 border-violet-700/60" />
        }
        <app-nav-item [navItem]="single"/>
      }
      </nav>
  `,
})

export class NavComponent {
  navs: NavItemType[] = [
    {
      icon: "profile",
      text: "profile",
    },
    {
      icon: "home",
      text: "home",
    },
    {
      icon: "analytics",
      text: "analytics",
    },
    {
      icon: "settings",
      text: "settings",
    },
  ];
}
