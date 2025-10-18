"use client"

import React from 'react'
import Image from 'next/image'

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className='py-18 space-y-16 h-screen relative overflow-hidden'>
            <div className='mx-auto md:max-w-3xl text-center space-y-5 px-4'>
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='text-3xl lg:text-5xl font-semibold'
                >
                    AI-Powered Revolution in Piped Water Operations & Maintenance.
                </motion.h1>
                <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='text-muted-foreground text-sm'
                >
                    Transforming water management with intelligent solutions for efficiency, sustainability, and reliability.
                </motion.p>
            </div>
            <div className='rounded-2xl absolute left-1/2 -translate-x-1/2 px-6'>
                <Image
                    src={'/Hero/clouds.png'}
                    alt='Background Pattern'
                    width={1920}
                    height={1080}
                    className='hero-cloud-animation opacity-70 absolute top-0 right-0 translate-x-[40%] -translate-y-[40%] w-96 object-cover object-top -z-999'
                />
                <Image
                    src={'/Hero/clouds.png'}
                    alt='Background Pattern'
                    width={1920}
                    height={1080}
                    className='hero-cloud-animation opacity-70 hidden lg:block rotate-180 absolute bottom-0 left-0 -translate-x-[40%] translate-y-[40%] w-96 object-cover object-top -z-999'
                />
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='rounded-2xl hero-image w-xs sm:w-xl md:w-3xl lg:w-4xl xl:w-6xl py-72'
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='hero-image-two rounded-2xl h-56 w-56 hidden lg:block absolute top-2/3 -translate-y-1/2 translate-x-1/2 right-0'
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='hero-image-three rounded-2xl h-56 w-40 hidden lg:block absolute top-1/3 -translate-y-1/2 -translate-x-1/2 left-0'
                >
                </motion.div>
            </div>
        </section>
    )
}

export default Hero