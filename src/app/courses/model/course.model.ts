export enum CourseType {
  Online,
  Workshop,
}

export interface Course {
  id: string;
  title: string;
  type: CourseType;
  price: number;
}
