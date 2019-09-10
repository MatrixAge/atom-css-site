import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
      selector: 'app-document',
      templateUrl: './document.component.html',
      styleUrls: ['./document.component.scss']
})
      
export class DocumentComponent implements OnInit {

      class_items: object
      is_classes_ready: boolean = false
      is_modal_show: boolean = false
      bracket_start: string = '{'
      bracket_end: string = '}'

      current_class: object = {
            "name": "flex",
            "value": [
                  "display: -webkit-box;",
                  "display: -ms-flexbox;"
            ]
      }

      getClasses() {
            if (JSON.parse(sessionStorage.getItem('class_items'))) {
                  this.class_items = JSON.parse(sessionStorage.getItem('class_items'))
                  this.is_classes_ready = true
            } else {
                  this
                        .http
                        .get('assets/data/classes.json')
                        .subscribe(
                              data => {
                                    this.class_items = data
                                    sessionStorage.setItem('class_items', JSON.stringify(data))
                                    setTimeout(() => {
                                          this.is_classes_ready = true
                                    }, 300)
                              }
                        )
            }
      }

      handleClickClose() {
            this.is_modal_show = false
      }

      handleClickClass(obj) {
            this.current_class = obj
            this.is_modal_show = true
      }

      constructor(private http: HttpClient) { }

      ngOnInit() {
            this.getClasses()
      }

}
