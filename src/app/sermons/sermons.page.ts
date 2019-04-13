import { Component, OnInit, Input } from '@angular/core';
import { VideoDirectoryService, VideoDirectory } from '../services/video-directory.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage implements OnInit {
  content: VideoDirectory;

  constructor(private route: ActivatedRoute, private videoDirectoryService: VideoDirectoryService, private nav: NavController) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.content = this.videoDirectoryService.lookup(params.get('id'))
    );
  }

  goToDirectory(vid) {
      this.nav.navigateForward(`/sermons/${vid}`);
  }

  goToVideoPlay(vid) {
		// It doesn't work so far
		// this.nav.navigateForward(`/videoplay/${vid}`);
	}

	goBack() {
    this.nav.back();
  }
}
