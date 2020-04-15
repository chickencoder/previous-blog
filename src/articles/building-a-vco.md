---
layout: layouts/post
tags: article
title: Let's Build a VCO module
date: 2020-04-14
---

I'm currently in the process of designing an homemade mini-modular synth. The idea is to put a few custom modules, such as VCOs, a sequencer etc. into a single enclousure that I can play. I'm going to be using mainly CMOS integrated circuits to do most of the synthesis work. I find this is probably a good balance between pure analog (lots of transistors) and pure digital (just microcontrollers).

## What is a VCO?

VCO stands for **Voltage Controlled Oscillator**. In analog synthesis, this is simply a circuit that generates a signal at a particular frequency. This frequency is determined by a _control_ voltage (often referred to as CV).

The first module I'm desiging is a VCO. The famous [CD4046](https://en.wikipedia.org/wiki/Phase-locked_loop) chip is a perfect place to start for building a VCO module. It's what is described as a Phase-Locked Loop (PLL) meaning a very high precision oscillator.

With only a few other external components, we can create a Voltage-Controller Oscillator.

![A simple VCO](/img/schematics/cd4046-vco-l.png)
