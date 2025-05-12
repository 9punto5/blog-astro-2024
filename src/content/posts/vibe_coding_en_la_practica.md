---
title: "Vibe Coding: Cómo organicé mi proyecto para hablar con la IA y construir software real"
description: "Cómo pasé de modificar HTML a crear funcionalidades completas con Vibe Coding. Mi método para organizar proyectos por funcionalidades y comunicarme eficazmente con la IA para construir software real."
date: 2025-04-29T13:37:36-04:00
image: "/blog/images/posts/vibe_coding_implementar.webp"
categories: ["Tecnología"]
authors: ["fabian-acuna"]
tags: ["Vibe Coding", "Inteligencia Artificial"]
draft: false
---

Siempre me ha gustado la tecnología, pero nunca aprendí a codear. Creo que a lo sumo era un "usuario avanzado" que podía realizar algunas configuraciones complejas.

Ahora, puedo actualizar o construir funcionalidades completas de una web usando lo que se conoce como "Vibe Coding", una forma de programar usando lenguaje natural con IA.

El post [**Vibe Coding: Antes de usar v0, Lovable, Replit, Bolt o Cursor, crea esto**](/blog/vibe_coding), destaca la importancia de tener una visión general del proyecto antes de pedirle algo a la IA, y hoy quiero mostrar cómo sigue ese camino.

## El genio en la botella digital

En la película "Three Thousand Years of Longing" de George Miller, Tilda Swinton libera a un Djinn o Genio de la botella (Idris Elba). Él ofrece sus tres deseos, pero ella sabe que pedir deseos a un genio suele ser una trampa, así que desconfía.

Trabajar con herramientas de Vibe Coding como v0, Lovable, Replit, Bolt, Cursor o Windsurf me recuerda a esa película. Tienes un "genio digital" dispuesto a concederte lo que pidas, pero si no formulas bien tu deseo, el resultado puede ser muy diferente a lo que esperabas.

## Mi flujo de trabajo actual

Después de varios meses experimentando, este es mi flujo de trabajo actual:

1. **Organizo mi proyecto por features**: Esto ha sido clave para trabajar con IA.
2. **Unifico el código**: Creé un programa muy simple en Python para unificar código en un solo archivo, lo que me permite exportar todo el proyecto o solo partes específicas (sin datos sensibles como variables de entorno, ni datos innecesarios, etc.)
3. **Uso Gemini 2.5 Pro para analizar y planificar el código**: Le paso todo el código unificado (o una porción) para que entienda el contexto y le pido una guía detallada para implementar **un feature** a la vez usando [aistudio.google.com](https://aistudio.google.com) (es gratis).
4. **Implemento con Claude 3.7 en Windsurf**: Le entrego la guía de implementación a Claude 3.7 para que implemente el código.

**Una nota sobre Claude 3.7**: Aunque varias personas reportan que muchas veces Claude 3.7 hace lo que quiere, con una guía detallada y paso a paso se comporta súper bien (y lo que es importante entre todos los agentes actuales, me ha dado buenos resultados al escribir y editar código).

## La estructura que me ayuda a hacer esto

Así es como está organizado parte del código de 9punto5.cl:

```text
    ├── app
    │   ├── (dashboard)           # AGRUPACIÓN LÓGICA
    │   │   ├── dashboard         # Feature: Dashboard
    │   │   │   ├── mentorias     # Feature: Mentorías
    │   │   │   │   ├── components
    │   │   │   │   ├── utils
    │   │   │   │   ├── layout.tsx
    │   │   │   │   └── page.tsx
    │   │   │   ├── referral      # Feature: Programa de referidos
    │   │   │   │   ├── _components
    │   │   │   │   └── page.tsx
    │   │   │   ├── sponsorship   # Feature: Sponsorships
    │   │   │   │   ├── _components
    │   │   │   │   └── page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   └── layout.tsx       # Layout común del dashboard
    │   ├── (marketing)           # OTRA AGRUPACIÓN LÓGICA
    │   │   ├── checkout          # Feature: Proceso de Pago
    │   │   │   ├── _steps
    │   │   │   └── page.tsx
    │   │   ├── mentorias         # Feature: Landing de Mentorías
    │   │   │   ├── components
    │   │   │   └── page.tsx
    │   │   └── page.tsx          # Landing principal
    # ... resto de la estructura ...
    ├── lib                       # Lógica compartida
    │   ├── db
    │   │   └── schema.ts         # Esquema de BD (¡Fuente de verdad!)
    │   └── utils
    ├── components                # Componentes UI compartidos
    │   └── ui                    # Componentes base (usando Shadcn)
```

En otro proyecto, manejo también _Server Actions_ dentro del feature:

```text
analysis/[cvId]/       # FEATURE: Análisis de CV
├── _components/       # 
│   ├── actions.ts     # Server actions para análisis
│   ├── analysis-results.tsx  # Mostrar resultados
│   ├── guest-migration.tsx   # Migrar usuarios invitados
│   └── initial-analysis.tsx  # Análisis inicial
└── page.tsx           # Página principal del análisis
```

Esta estructura **por features** me permite:

1. Exportar solo el código relevante para un feature específico
2. Pasarle a la IA un contexto más pequeño y manejable
3. Obtener respuestas más precisas y código más coherente

Es como pedirle al genio un deseo muy específico en lugar de uno vago y general.

Este enfoque además ayuda a resolver un desafío importante que actualmente tiene la IA: el problema de encontrar ["la aguja en el pajar"](https://cloud.google.com/blog/products/ai-machine-learning/the-needle-in-the-haystack-test-and-how-gemini-pro-solves-it?utm_source=chatgpt.com), cuando el modelo tiene que encontrar información específica en un contexto muy grande.

## Lo que he aprendido en el camino

Aunque no tengo formación formal ni tradicional en programación, este proceso me ha enseñado montones:

- **TypeScript es tu amigo**: Proporciona estructura y evita errores
- **Modelar bien la base de datos es crucial**: Es el fundamento de todo
- **No dejes que la IA invente tipos**: Siempre referencia el esquema de la base de datos
- **Divide y vencerás**: Trabajar feature por feature es más manejable

## ¿Es esto realmente programar?

Como dijo Demis Hassabis de Google DeepMind y ganador del Premio Nobel:

> Estamos entrando en una nueva era de programación... donde básicamente estás programando con lenguaje natural. Podemos verlo como la evolución natural de subir cada vez más en la pila de abstracción de los lenguajes de programación.

Hace décadas se programaba en Assembler, muy cerca del hardware. Luego, surgieron lenguajes con más abstracción como Fortran, COBOL, Pascal y C. Posteriormente, lenguajes como C++, Java y Python.

Es como ha evolucionado la programación, y es un proceso que se repite.

Pero bueno, digamos que lo que hago no se llama "programar". Pero sí estoy creando software que funciona, resolviendo problemas reales y aprendiendo sobre arquitectura, seguridad y diseño de sistemas en el proceso.

Antes, mi rol en todo este proceso era completamente diferente: conceptualizar ideas, compartir necesidades, pedir features, testear y dar feedback. Ahora puedo construir directamente.

## Un nuevo tipo de superpoder

Esta forma de trabajar ha desbloqueado algo que siempre quise hacer pero que nunca me di el tiempo de aprender. Ahora puedo explorar ideas, crear prototipos, o derechamente crear soluciones que usan otras personas.

> **¿Es perfecto? Para nada**. Y varias veces he necesitado la ayuda de programadores con experiencia.

El código generado no es perfecto y a menudo requiere depuración. 

Sé también que solo estoy rascando la superficie de lo que significa aprender a hacer software, y que seguramente esta manera de trabajar no será la que use en el futuro. Esto que comparto no es una receta, es más una bitácora pública, algo que quizá te pueda servir si tú también quieres experimentar con esto.

**El punto es que la barrera de entrada se ha reducido dramáticamente**. Y eso, para alguien que siempre estuvo al margen del desarrollo, se siente como un superpoder.

Si estás en una posición similar, te animo a probar este enfoque. Organiza tu proyecto por features, usa instrucciones específicas, y aprende a "pedir deseos" claros a tu genio digital.
