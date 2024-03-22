import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import { model_1 } from "./model";

export const scrollEvent = (data) => {
    const {camera, scene, models} = data;

    gsap.registerPlugin(ScrollTrigger);

    const scroll_1 = {
        trigger:".scrollElement",
        scrub:1,
        markers:true,
        start:()=>{
            return `0px`
        },
        end:()=>{
            return `+=${document.documentElement.clientHeight}px`
        },
    }

    gsap.to(camera.position, {
        immediateRender:false,
        scrollTrigger:scroll_1,
        x:8,
        onUpdate:()=>{
            camera.lookAt(0,4,0);
        },
    })

    const scroll_2 = {
        trigger:".scrollElement",
        scrub:1,
        markers:true,
        start:()=>{
            return `${document.documentElement.clientHeight*2}px`
        },
        end:()=>{
            return `+=${document.documentElement.clientHeight}px`
        }
    }

    gsap.to(camera.position, {
        immediateRender:false,
        scrollTrigger:scroll_2,
        x:0,
        z:-8,
        onUpdate:()=>{
            camera.lookAt(0, 4, 0)
        }
    })

    gsap.to(models.position, {
        scrollTrigger:scroll_2,
        x:4
    })


    const scroll_3 = {
        trigger:".scrollElement",
        scrub:1,
        markers:true,
        start:()=>{
            return `${document.documentElement.clientHeight * 4}px`
        },
        end:()=>{
            return `+=${document.documentElement.clientHeight}px`
        }
    }

    gsap.to(camera.position, {
        immediateRender:false,
        scrollTrigger:scroll_3,
        x:-8,
        z:0,
        onUpdate:()=>{
            camera.lookAt(0, 4, 0)
        }
    })

}