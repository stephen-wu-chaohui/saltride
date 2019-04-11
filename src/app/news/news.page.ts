import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news = [{
    img: '/assets/news/sm-mf-1.jpg',
    title: '2019年4月至9月心灵更新事工',
    lines: [
      '多添 Zoom Cell 服事选项',
      '语言：所有服事以华语为主',
      '地点：丰盛生命教会圣堂'
    ]
  }, {
    img: '/assets/news/sm-mf-2.jpg',
    title: '复活节敬拜赞美节庆',
    lines: [
      '复活节敬拜赞美节庆 @ 大堂',
      '4/19 （五）7:00pm-9:30pm',
      '4/20 （六）9:30am-12:00pm, 2:30pm-5:00pm',
      '4/21 （日）10:00am 圣餐、受洗主日',
      '欢迎弟兄姐妹参加'
    ]
  }, {
    img: '/assets/news/sm-mf-3.jpg',
    title: '基要真理班',
    lines: [
      '请小家长鼓励将要受洗的慕道友或者想对基要真理有更多更深认识的弟兄姐妹参加。',
    ]
  }, {
    img: '/assets/news/sm-mf-4.jpg',
    title: '家庭事工婚前婚后辅导开放报名',
    lines: [
      '帮助情侣/夫妻了解彼此关系中的长处及待成长处。',
      '协助透过实际练习，学习有效沟通及解决冲突，使彼此关系更加稳固成长。',
    ]
  }];

  constructor() { }

  ngOnInit() {
  }

}
