"use client"

import React from 'react'
import Image from 'next/image'

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className='py-18 space-y-16 h-screen relative overflow-hidden'>
            <div className='mx-auto md:max-w-3xl text-center space-y-5 px-4'>
                <h1 className='text-3xl lg:text-5xl font-semibold'>
                    AI-Powered Revolution in Piped Water Operations & Maintenance.
                </h1>
                <p className='text-muted-foreground text-sm'>
                    Transforming water management with intelligent solutions for efficiency, sustainability, and reliability.
                </p>
            </div>
            <div className='rounded-2xl absolute left-1/2 -translate-x-1/2 px-6'>
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='rounded-2xl hero-image w-xs sm:w-xl md:w-3xl lg:w-4xl xl:w-6xl py-72'
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 400 }}
                    animate={{ opacity: 1,x: 0}}
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