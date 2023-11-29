import { PolutionColor } from '../enums/polution-color.enum';
import { PolutionName } from '../enums/polution-name.enum';
import { PolutionRanges } from '../enums/polution-ranges.enum';

export const polutionLimit = [
  {
    name: PolutionName.Good,
    range: `${PolutionRanges.GoodLow} - ${PolutionRanges.GoodHigh}`,
    color: PolutionColor.Green,
  },
  {
    name: PolutionName.Moderate,
    range: `${PolutionRanges.ModerateLow} - ${PolutionRanges.ModerateHigh}`,
    color: PolutionColor.Yellow,
  },
  {
    name: PolutionName.UnhealthySG,
    range: `${PolutionRanges.UnhealthySGLow} - ${PolutionRanges.UnhealthySGHigh}`,
    color: PolutionColor.Orange,
  },
  {
    name: PolutionName.Unhealthy,
    range: `${PolutionRanges.UnhealthyLow} - ${PolutionRanges.UnhealthyHigh}`,
    color: PolutionColor.Pink,
  },
  {
    name: PolutionName.VeryUnhelty,
    range: `${PolutionRanges.VeryUnheltyLow} - ${PolutionRanges.VeryUnheltyHigh}`,
    color: PolutionColor.Purple,
  },
  {
    name: PolutionName.Hazardous,
    range: `${PolutionRanges.Hazardous} +`,
    color: PolutionColor.DeepPurple,
  },
];
