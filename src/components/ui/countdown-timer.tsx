"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 text-sidebar-primary-foreground">
        <Clock className="h-4 w-4" />
        <span className="text-sm xl:text-lg font-medium">
          Oferta Limitada: 20% Off Termina En
        </span>
      </div>
      <div className="flex gap-2 text-center xl:mt-4">
        <div className="bg-primary text-primary-foreground rounded-md px-3 py-2 min-w-[64px] xl:min-w-[84px] xl:h-auto">
          <div className="text-2xl xl:text-3xl font-bold ">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs uppercase">Horas</div>
        </div>
        <div className="text-xl font-bold pt-2">:</div>
        <div className="bg-primary text-primary-foreground rounded-md px-3 py-2 min-w-[64px] xl:min-w-[84px] xl:h-auto">
          <div className="text-2xl xl:text-3xl font-bold">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-xs uppercase">Minutos</div>
        </div>
        <div className="text-xl font-bold pt-2">:</div>
        <div className="bg-primary text-primary-foreground rounded-md px-3 py-2 min-w-[64px] xl:min-w-[84px] xl:h-auto">
          <div className="text-2xl xl:text-3xl font-bold">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs uppercase">Segundos</div>
        </div>
      </div>
    </div>
  );
}

