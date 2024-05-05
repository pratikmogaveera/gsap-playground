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
            const text = new SplitType(char as TargetElement, { types: 'chars,words' },)

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 60%',
                    end: 'top 40%',
                    scrub: 1,
                    // markers: true,
                },
                opacity: 0.3,
                stagger: 0.1
            })
        })
    }, [])

    return (
        <section className='h-screen grid place-items-center px-4'>
            <div className='flex flex-col gap-8 w-fit px-4'>
                <h1 className='text-5xl font-extrabold underline'>Fade In</h1>
                <p className='font-bold text-justify md:text-3xl lg:w-[50vw]' id="fadeIn">
                    This text starts with low opacity and gets its full opacity as you scroll down. Its a good technicque for display paras you want your users to read.
                </p>
            </div>
        </section>
    )
}

export default FadeIn