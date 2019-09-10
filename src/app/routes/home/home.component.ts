import { Component, OnInit } from '@angular/core';

@Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

      is_modal_show: boolean = false

      toggle_options: Array<string> = [
            "Center",
            "Vertical Center",
            "Horizontal Center",
            "Float",
            "Interval",
            "Font",
            "Color",
            "Position",
            "Display"
      ]

      selected_option: string = "Center"

      onSelect(obj) {
            this.selected_option = obj
      }

      handleClickContact() {
            this.is_modal_show = true
      }

      handleClickClose() {
            this.is_modal_show = false
      }

      constructor() { }

      ngOnInit() { }
}
