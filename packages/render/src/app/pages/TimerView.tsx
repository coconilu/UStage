import { observer } from "mobx-react"
import React from "react"
import { Timer } from "../mobx/timer"


const TimerView = observer(({ timer }: {timer: Timer}) => (
  <button onClick={() => timer.reset()}>已过秒数：{timer.secondsPassed}</button>
))

export default TimerView