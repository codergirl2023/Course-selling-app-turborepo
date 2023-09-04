import { CourseProps } from '../../../types/src/index';
import {atom} from "recoil";


export const courseState = atom<CourseProps>({
  key: 'courseState',
  default: {
    isLoading: true,
    course: null
  },
});