(()=>{function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.selected=document.querySelectorAll(".selected"),this.donationValue=document.querySelector(".donate__value"),this.donateButton=document.querySelector(".donate__submit"),this.events()}var n,o;return n=t,(o=[{key:"events",value:function(){var e=this;this.selected.forEach((function(t){t.addEventListener("click",(function(){return e.result(t)}))})),this.donateButton.addEventListener("click",(function(t){return e.submitDonation(t)}))}},{key:"result",value:function(e){this.donationValue.value=e.value}},{key:"submitDonation",value:function(e){e.preventDefault(),this.donationValue.value=""}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}())})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9uYXRpb25fZm9ybS42ZTRmOWYxNTgyOTRmYjRjMGNhMi5qcyIsIm1hcHBpbmdzIjoiNEtBMEJBLElBMUJNQSxXQUNKLGMsNEZBQWMsU0FDWkMsS0FBS0MsU0FBV0MsU0FBU0MsaUJBQWlCLGFBQzFDSCxLQUFLSSxjQUFnQkYsU0FBU0csY0FBYyxrQkFDNUNMLEtBQUtNLGFBQWVKLFNBQVNHLGNBQWMsbUJBQzNDTCxLQUFLTyxTLDJDQUdQLFdBQVMsV0FDUFAsS0FBS0MsU0FBU08sU0FBUSxTQUFBQyxHQUNwQkEsRUFBT0MsaUJBQWlCLFNBQVMsa0JBQU0sRUFBS0MsT0FBT0YsU0FHckRULEtBQUtNLGFBQWFJLGlCQUFpQixTQUFTLFNBQUFFLEdBQUMsT0FBSSxFQUFLQyxlQUFlRCxRLG9CQUd2RSxTQUFPSCxHQUNMVCxLQUFLSSxjQUFjVSxNQUFRTCxFQUFPSyxRLDRCQUdwQyxTQUFlRixHQUNiQSxFQUFFRyxpQkFDRmYsS0FBS0ksY0FBY1UsTUFBUSxRLHNFQXRCekJmLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLTUtc3RhcnRlci8uL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL0RvbmF0aW9uRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEb25hdGlvbkZvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0ZWRcIik7XHJcbiAgICB0aGlzLmRvbmF0aW9uVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvbmF0ZV9fdmFsdWVcIik7XHJcbiAgICB0aGlzLmRvbmF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9uYXRlX19zdWJtaXRcIik7XHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZC5mb3JFYWNoKGFtb3VudCA9PiB7XHJcbiAgICAgIGFtb3VudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5yZXN1bHQoYW1vdW50KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRvbmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB0aGlzLnN1Ym1pdERvbmF0aW9uKGUpKTtcclxuICB9XHJcblxyXG4gIHJlc3VsdChhbW91bnQpIHtcclxuICAgIHRoaXMuZG9uYXRpb25WYWx1ZS52YWx1ZSA9IGFtb3VudC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdERvbmF0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZG9uYXRpb25WYWx1ZS52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5uZXcgRG9uYXRpb25Gb3JtKCk7XHJcbiJdLCJuYW1lcyI6WyJEb25hdGlvbkZvcm0iLCJ0aGlzIiwic2VsZWN0ZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkb25hdGlvblZhbHVlIiwicXVlcnlTZWxlY3RvciIsImRvbmF0ZUJ1dHRvbiIsImV2ZW50cyIsImZvckVhY2giLCJhbW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwiZSIsInN1Ym1pdERvbmF0aW9uIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=