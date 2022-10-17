import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  text_to_id(location:any) {
    const location_table:any = {
      CITY_FR_6455259: "Paris",
      RESARAIL_STA_FRABA: "Dijon Ville"
    }

    let keys = Object.keys(location_table)

    let values = keys.map(k => location_table[k])
    if (values.includes(location)) {
      const found_at = values.indexOf(location)
      return keys[found_at]
    } else {
      return false
    }

  }

  async onClickSubmit(result:any) {
    console.log(result.date);
    console.log(result.depart);
    console.log(result.destination);

    const depart_id = await this.text_to_id(result.depart)
    const destination_id = await this.text_to_id(result.destination)

    const body = {
      date: result.date+ 'T11:01:16.879Z',
      origin_id: depart_id,
      origin_label: result.depart,
      destination_id: destination_id,
      destination_label: result.destination,
      user_id: "1934893434"
    }
    console.log(body)
    this.http.post<any>('http://localhost:3001/definetrip',body, ).subscribe({
      next: data => {
        console.log(data)
      },
    error: error => {
        console.error('There was an error!', error);
    }
  })

 }
 destinations = ["Dijon Ville", "Paris"]

}
