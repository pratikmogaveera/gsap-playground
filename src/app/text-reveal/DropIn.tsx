"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType, { TargetElement } from 'split-type'

const DropIn = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const split = document.querySelectorAll('#drop')

        split.forEach((char, i) => {
            const text = new SplitType(char as TargetElement, { types: 'chars,words' },)

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: 1,
                    // markers: true,
                },
                scaleY: 0,
                y: -20,
                transformOrigin: 'top',
                stagger: 0.05
            })
        })
    }, [])

    return (
        <section className='h-screen grid place-items-center px-4'>
            <div className='flex flex-col gap-8 w-fit px-4'>
                <h1 className='text-5xl font-extrabold underline'>Drop In</h1>
                <p className='font-bold text-justify text-xl md:text-3xl lg:w-[50vw]' id="drop">This text drops down in its place from top.</p>
            </div>
        </section>
    )
}

export default DropIn