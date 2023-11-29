import { PolutionColor } from '../enums/polution-color.enum';
import { PolutionName } from '../enums/polution-name.enum';
import { PolutionRanges } from '../enums/polution-ranges.enum';
import { GeneratedData } from './generated-data';

export const generateDataByAqi = (aqi: number): GeneratedData => {
  switch (true) {
    case PolutionRanges.GoodLow <= aqi && aqi <= PolutionRanges.GoodHigh:
      return {
        color: PolutionColor.Green,
        name: PolutionName.Good,
        textColor: '#50b012',
        icon: 'icons8-face-smile-64-Green.png',
      };
    case PolutionRanges.ModerateLow <= aqi &&
      aqi <= PolutionRanges.ModerateHigh:
      return {
        color: PolutionColor.Yellow,
        name: PolutionName.Moderate,
        textColor: '#cc9232',
        icon: 'icons8-face-64-Yellow.png',
      };
    case PolutionRanges.UnhealthySGLow <= aqi &&
      aqi <= PolutionRanges.UnhealthySGHigh:
      return {
        color: PolutionColor.Orange,
        name: PolutionName.UnhealthySG,
        textColor: '#cc851e',
        icon: 'icons8-face-64-Orange.png',
      };
    case PolutionRanges.UnhealthyLow <= aqi &&
      aqi <= PolutionRanges.UnhealthyHigh:
      return {
        color: PolutionColor.Pink,
        name: PolutionName.Unhealthy,
        textColor: '#ba184f',
        icon: 'icons8-face-64-Pink.png',
      };
    case PolutionRanges.VeryUnheltyLow <= aqi &&
      aqi <= PolutionRanges.VeryUnheltyHigh:
      return {
        color: PolutionColor.Purple,
        name: PolutionName.VeryUnhelty,
        textColor: '#883896',
        icon: 'icons8-protection-mask-64-Purple.png',
      };
    case PolutionRanges.Hazardous <= aqi:
      return {
        color: PolutionColor.DeepPurple,
        name: PolutionName.Hazardous,
        textColor: '#3b1070',
        icon: 'icons8-protection-mask-64-DeepPurple.png',
      };
    default:
      return {
        color: PolutionColor.Grey,
        name: PolutionName.Unknown,
        textColor: '',
        icon: '',
      };
  }
};
