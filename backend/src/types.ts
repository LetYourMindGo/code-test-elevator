export interface IElevator {
  id: number;
  currentLevel: number;
  isAvailable: boolean;
  timeout: number;
  levelDifference: number;
}