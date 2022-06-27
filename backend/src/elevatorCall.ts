import { elevators } from "./elevators";

export const elevatorCall = (level: number) => {

  for (let i = 0; i < elevators.length; i++) {
      elevators[i].timeout = 0;
      if (elevators[i].isAvailable) {
        elevators[i].levelDifference = Math.abs(elevators[i].currentLevel - level);
      } else {
        continue;
      }
  }

  const activeElevator = elevators.sort(({levelDifference: a}, {levelDifference: b}) => a - b)[0];
  
  activeElevator.currentLevel = level;
  activeElevator.isAvailable = false;
  activeElevator.timeout = 2 * activeElevator.levelDifference;

  setTimeout(() => {
      activeElevator.isAvailable = true
      return elevators.sort(({id: a}, {id: b}) => a - b);
  }, 2000 * activeElevator.levelDifference)

  return elevators.sort(({id: a}, {id: b}) => a - b);
}