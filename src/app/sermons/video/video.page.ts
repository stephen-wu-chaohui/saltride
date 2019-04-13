import { Component, OnInit } from '@angular/core';
import { VideoDirectory } from 'src/app/services/video-directory.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  video: VideoDirectory;

  constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
  }

  playVideo() {
    this.youtube.openVideo('myvideoid');
  }
}
