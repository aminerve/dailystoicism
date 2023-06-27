import React, { useEffect, useState } from 'react'

export default function Quotes() {
    const [quote, setQuote] = useState('')

    useEffect(() => {
        const fetchSingleQuote = async() => {
            try {
                const res = await fetch(`https://stoic-quotes.com/api/quote`)
                const data = res.json()
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchSingleQuote()
    }, [])

    let fetchNewQuote = async() => {
        try {
            const res = await fetch(`https://stoic-quotes.com/api/quote`)
            const data = res.json()
            console.log(data)
            setQuote(data)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>
        <button >Get New Quote:</button>
        <h1></h1>
    </div>
  )
}
