# Ionic 4 Tutorial Course Project

This is the project based on the following crash course:
[Ionic 4 Crash Course for Beginners - Build an App](https://youtu.be/qTdwUpQRptc)

## More Awesome Content

Do me a big ol' favor and check out these awesome links. I release new video tutorials on full stack development Monday-Thursday @ 10:30 AM ET!

* Subscribe to the [DesignCourse YouTube Channel](http://youtube.com/designcourse)
* Check out the associated website [Coursetro Full Stack Development Training](https://coursetro.com)
* Chat with me and others on Discord: [DesignCourse Discord Server](https://discord.gg/a27CKAF)
* [Twitter](https://twitter.com/designcoursecom)
* [Facebook](https://facebook.com/coursetro)

Enjoy!



# ionic salt ride

IonSaltRide is a PWA exercise project for demonstrating Stephen's fullstack skills in web development.  The design is inspired by Parkable, which is an awesome app to create a community to help people to share and use carparks in city.  It has such an awesome user experience as well, that I like it very much and followed all the UI design and workflow in my exercise, while I implemented in Angular 7 for the frontend and and ASP.NET Core for the backend.

It is deployed at https://ionsaltride.firebaseapp.com/home.  As a PWA, you don't need to download and install it from App Store or Google Play Store, but simply open it in your browser add it to you mobile desktop from your browser and then you can run it like a native app later.

However, please notice before you use it that all the accounts and carparks in this PWA are fake and used for demo purpose only, therefore please feel free to sign up a new account or login with my account (stephen.wu.chaohui@gmail.com) to have a deep dive without any worry about your car or your money.  If you do like to use an app to find a car park, please download Parkable instead.

After you sign up or login to WekaHelp, It will show you all hosted carparks, in a google maps centered in your current location.  If you are in Auckland or Christchurch, there will a few car parks I created for testing purpose.  You can also click on the top right corner and choose 'Create Park' in the sider menu and host a new car park with your spare bays.  As a demo, it needn't be a real space.

And then you can find a car park by clicking it in the map.  You can read the information of available bays, hourly price, daily price and parking instructions.  You can reserve a bay or start a parking.  WekaHelp will maintain all your requests and calculate the total fee based on the parking price.

A salepoint is the use of SignalR in WekaHelp synchrounizes the remains of bays of all car parks when people are parking and leaving the park.  The updates are instantly even before you click on 'start parking' button.  Another salepoint is different clients logged with the same account can keep the state changes such as parking and leaving synchronized.

The backend is written in .NET Core 2.1 and hosted on https://stephen-api.azurewebsites.net (which you can't access from web browser).  It supports the web api for CRUD operations of accounts, car parks and parking events, connecting with an Azure SQL Server using Entity Framework Core 2.1.

