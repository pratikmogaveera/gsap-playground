"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType, { TargetElement } from 'split-type'

const DropIn = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const split = document.querySelectorAll('#text')

        split.forEach((char, i) => {
            const text = new SplitType(char as TargetElement, { types: 'chars' },)

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 70%',
                    end: 'top 40%',
                    scrub: 1,
                    toggleActions: 'play none one reverse',
                    // markers: true,
                },
                scaleY: 0,
                y: -20,
                transformOrigin: 'top',
                stagger: 0.1
            })
        })
    }, [])

    return (
        <section className='h-screen grid place-items-center px-4 lg:px-20'>
            <div className='flex flex-col gap-8 px-4'>
                <h1 className='text-5xl font-extrabold underline'>Drop In</h1>
                <p className='font-bold text-3xl' id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit!</p>
            </div>
        </section>
    )
}

export default DropIn