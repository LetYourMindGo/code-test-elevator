import * as React from "react";
import {IElevator} from "../../types";
import * as css from "./Elevator.module.scss";

interface IProps {
  elevator: IElevator
}

export default class elevator extends React.Component<IProps> {
  render() {
    let elevatorStyle = {
      transform: `translateY(-${this.props.elevator.currentLevel * 3}rem)`,
      top: `-${this.props.elevator.currentLevel * 3}rem`,
      right: `${this.props.elevator.id * 5}rem`,
      transition: `${this.props.elevator.levelDifference * 2}s`
    }

    return (
      <div className={css.elevator} style={elevatorStyle}>
        <div className={css.elevator_info}>
          <p>{this.props.elevator.currentLevel}</p>
        </div>
      </div>
    )
  }
}
