import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-todo-section',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="flex items-center justify-between mb-5">
    <span>To do</span>
    <span>50%</span>
  </div>
  <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
    <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
      </svg>
    </div>
    <div>
      <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        My Blog Posts
      </p>
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
        10
      </p>
    </div>
  </div>
  `
})

export class TodoSectionComponent {

}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoSectionComponent],
  template: `
    <div class="py-5 flex justify-center items-center  h-screen overflow-y-auto">
          <div class="container  mx-auto h-[75vh] grid ">


            <!-- Cards -->
            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <!-- Card -->

              @for (item of ",,,".split(","); track $index) {
                <app-todo-section />
              }
            </div>

          </div>
  </div>
  `,
})
export class HomeComponent {

}
