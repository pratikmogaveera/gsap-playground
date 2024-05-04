"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType, { TargetElement } from 'split-type'

const FadeIn = () => {


    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const split = document.querySelectorAll('#fadeIn')

        split.forEach((char, i) => {
            const text = new SplitType(char as TargetElement, { types: 'chars' },)

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 60%',
                    end: 'top 40%',
                    scrub: 1,
                    toggleActions: 'play none one reverse',
                    markers: true,
                },
                opacity: 0.3,
                stagger: 0.1
            })
        })
    }, [])

    return (
        <section className='h-screen grid place-items-center px-4 lg:px-20'>
            <p className='font-bold text-justify px-8 text-xl md:text-3xl lg:w-1/2' id="fadeIn">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ad tempore blanditiis quos reiciendis modi quae iste aliquid doloribus delectus!
            </p>
        </section>
    )
}

export default FadeIn