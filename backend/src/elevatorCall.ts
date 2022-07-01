import { elevators } from "./elevators";

export const elevatorCall = (level: number) => {

  for (let i = 0; i < elevators.length; i++) {
      elevators[i].timeout = 0;
      if (!elevators[i].isAvailable) {
        elevators[i].levelDifference = 21;
      } else {
        elevators[i].levelDifference = Math.abs(elevators[i].currentLevel - level);
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

  if (activeElevator.levelDifference === 21) {
    return "All elevators are unavailable";
  } else {
    return elevators.sort(({id: a}, {id: b}) => a - b);
  }
}