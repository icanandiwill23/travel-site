import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints.min";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader{
  constructor(){
    this.lazySizes = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTrigger = $(".large-hero__title");
    this.createHeaderWayPoints();
    this.pageSection = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWayPoints();
    this.pageSmoothScroll();
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazySizes.on("load", function(){
      Waypoint.refreshAll();
    });
  }

  pageSmoothScroll(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWayPoints(){
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction){
        if(direction == "down"){
          that.siteHeader.addClass("site-header--darker");
        }
        else{
          that.siteHeader.removeClass("site-header--darker");
        }
      }
    });
  }

  createPageSectionWayPoints(){
    var that = this;
    this.pageSection.each(function(){
      var currentPage = this;
      new Waypoint({
        element: currentPage,
        handler: function(direction){
          if(direction == "down"){
            var matchingLink = currentPage.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPage,
        handler: function(direction){
          if(direction == "up"){
            var matchingLink = currentPage.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    })
  }
}

export default StickyHeader;
