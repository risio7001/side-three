import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

export const scrollEvent = (data) => {
    const {camera} = data;

    gsap.registerPlugin(ScrollTrigger);

    const e1 = gsap.timeline({
        scrollTrigger:{
            trigger:".scrollElement",
            scrub:1,
            markers:true,
            start:"0px",
            end:()=>{
                return`${document.documentElement.clientHeight/2}px`
            },
        },
    })

    e1.to(camera.position, {
        x:8,
        onUpdate:()=>{
            camera.lookAt(0,4,0);
        }
    });


    const test1 = {
        trigger:".scrollElement",
        scrub:1,
        markers:true,
        start:()=>{
            return `${document.documentElement.clientHeight/2}px`
        },
        end:()=>{
            return`+=${document.documentElement.clientHeight/2}px`
        },
    }

    gsap.to(camera.position, {
        scrollTrigger:test1
    })

}