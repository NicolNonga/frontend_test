import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public subscriptions = [];
  public showOverlay = true;
  public layout = {
    customLayout: false,
    layoutNavigationTop: true
  }
  constructor(private route:ActivatedRoute,
    private router: Router,
    private routingService: RoutingService) { 

  }

  ngOnInit(): void {

    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })

/*     this.titleTag = this.titleService.getTitle(); */

    this.subscriptions.push(this.routingService.onChange.subscribe((value: any) => {
      if (value && value[value.length - 1]) {
      /*   this.titleService.setTitle(this.getTitle(value[value.length - 1].data['title']));
        this.header = value[value.length - 1].data['title']; */
        const layout = value[value.length - 1].data['layout'];
        if (layout != undefined) {
          this.layout = layout;
        }
     /*    this.description = value[value.length - 1].data['description']; */
      }
    /*   this.changeDetectorRef.markForCheck(); */
    }));

    this.subscriptions.push(this.router.events.subscribe((routeEvent: RouterEvent) => {
      if (routeEvent instanceof NavigationStart) {
      /*   this.navigationEnd = false; */
      }
      if (routeEvent instanceof NavigationEnd) {
      /*   this.navigationEnd = true; */
      }
    }));
  }

  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.showOverlay = true;
     // this.spinner.show();
    }

    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

    if (event instanceof NavigationError) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

  }
}
