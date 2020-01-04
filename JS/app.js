$(document).ready(function(){
    $('.ba-hero-slider').slick();

    $('.ba-news__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            dots: true,
            adaptiveHeight: true
    });
        
    
     //Рабочий фиксированный header
    /*$(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    }); */

    $(function () {
      $("#menu a.scrollto").click(function () {
       let elementClick = $(this).attr("href")
       let destination = $(elementClick).offset().top;
       $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 3000);
       return false;
      });
    });

    $(function () {
      $("#hero a.scrollto").click(function () {
       let elementClick = $(this).attr("href")
       let destination = $(elementClick).offset().top;
       $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 3000);
       return false;
      });
    });

    $('.ba-gallery__img').on('click', function() {
        let imgSrc = $(this).attr('src'),
            $modalImage = $('<img>');

            $modalImage.attr('src', imgSrc);

        $('.ba-modal-content-wrapper').append( /* '<p>' + $(this).attr('src') + '</p>' */ $modalImage);
        openModal();
    });

    let openModal = function() {
        $('.ba-modal').addClass('ba-modal--open');
        $('body').addClass('ba-modal-is-open');
    
        $(document).on('keydown', function(e) {
            if (e.keyCode == 27) {
                closeModal();
            }
        })
    }
    
    let closeModal = function () {
        $('.ba-modal').removeClass('ba-modal--open');
        $('body').removeClass('ba-modal-is-open');
        $('.ba-modal-content-wrapper').empty();
        $(document).off('keydown', closeModal);
    }
    
    $('.ba-modal-close').on('click', closeModal);
    
    $('.ba-modal').on('click', function(e) {
        let modalContent = $('.ba-modal-content');
    
        if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
                closeModal();
        }
    
    });

        let $map = $('.location');
        let coordinates = {lat: 40.679864, lng: -73.9011827};
        const map = new google.maps.Map(
            $map[0],
            {
                center: {lat: 40.679864, lng: -73.9011827},
                zoom: 14,
                styles: [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]
            }
        );

        const image = {
            url: 'Img/marker.png',
            scaledSize: new google.maps.Size(64, 64)
        };
        
        const marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            title: '91 Nolan Extensions Suite 670',
            icon: image
        });

});
