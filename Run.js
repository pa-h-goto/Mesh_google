'use strict'
import { View } from "./View.js";


export class Run {
    // 引数にpanoramaを渡す
    static goFunc(panorama, location) {
        const view = new View();
        go.addEventListener('click', () => {
            let link = panorama.getLinks();
            let val = 360;
            let target = 0;
            let currentPov = panorama.getPov();
            link.forEach(function (element, index) {
                let ans = Math.abs(currentPov.heading - element.heading);
                if (val > ans) {
                    val = ans;
                    target = index;
                }
            });
            panorama.setPov({
                heading: link[target].heading,
                pitch: 0
            });
            let pa = link[target]['pano'];
            panorama.setPano(pa);
            // streetview オブジェクトを作成しcontainerに格納する
            new google.maps.StreetViewPanorama(container, {
                position: location,
                pov: {
                  heading: 180,
                  pitch: 10
                }
              });
            view.counter();
            // view.modal();
        });
    };
    static turnFunc(panorama) {
        right.addEventListener('click', () => {
          var currentPov = panorama.getPov();
          var newPov = currentPov.heading + 30;
          panorama.setPov({
            heading: newPov,
            pitch: 0
          });
        })
      };
}