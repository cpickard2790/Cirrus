import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { School } from '../School';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  startLat = 35.782169;
  startLng = -80.793457;
  zoom = 7;
  greenMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png';
  yellowMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/yellow-dot.png';
  redMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png';
  orangeMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/orange-dot.png';

  schools: School[];
  school: School;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.getSchools();
    this.getIcon(this.school);
  }

  getSchools() {
    this.schoolService.getSchools()
      .subscribe((schoolList: School[]) => {
        this.schools = schoolList;
      });
  }

  getIcon(school: School) {
    if (school) {
      if (school.marker === 1) {
        return this.greenMarker;
      } else if (school.marker === 2) {
        return this.yellowMarker;
      } else if (school.marker === 3) {
        return this.redMarker;
      } else if (school.marker === 4) {
        return this.orangeMarker;
      }
    }
  }
}
