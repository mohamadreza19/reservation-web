import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { BtnComponent } from '../../buttons/btn.component';
import { IconsModule } from '../../icons/icons.module';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [BtnComponent, IconsModule, NgTemplateOutlet, NgFor],
  template: `
    <table class="w-full border-collapse border-black py-4">
      <thead class="border border-black text-sm font-semibold text-neutral-600">
        <tr>
          <th
            *ngFor="let headerLabel of headerLabels; let i = index"
            class="py-3 ps-4 pe-4 ps-7 text-start min-h-[63px]"
          >
            {{ headerLabel }}
          </th>
          <!-- <th class="py-3 ps-4 pe-3 text-start">رمز عبور</th> -->
          @if(onClickEdit.observers.length > 0){
          <th class="py-3 ps-4 pe-3 text-start">
            <div class="w-24">
              <app-btn
                class="gap-x-1"
                [type]="'outline'"
                [size]="'auto'"
                (buttonClicked)="hayHi()"
              >
                <div class="flex justify-center gap-1">
                  <img src="/assets/svgs/pen.svg" />
                  <p class="text-sm text-neutral-600">ویرایش</p>
                </div>
              </app-btn>
            </div>
          </th>
          }
        </tr>
      </thead>
      <tbody class="border border-black">
        <ng-content />
        <tr>
          <!-- <td class="p-4">
            <input
              class="min-h-10 py-y px-3 border border-black bg-slate-200"
              placeholder="علی رضایی"
            />
          </td>

          <td class="p-4">
            <input
              type="password"
              class="min-h-10 py-y px-3 border border-black bg-slate-200"
              value="sdadadasdadad"
            />
          </td> -->
          <!-- <td class="p-4 ps-0">
            <ng-icon name="faSolidEye" />
          </td> -->
        </tr>
      </tbody>
    </table>
  `,
})
export class TableComponent implements OnInit {
  ngOnInit() {}

  @Input({
    required: true,
  })
  headerLabels!: string[];

  @Output() onClickEdit = new EventEmitter<void>();

  hayHi() {
    this.onClickEdit.emit();
  }
}
