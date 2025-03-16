export class Project {
  constructor(
    public id: number,
    public tags: string[],
    public item: string,
    public description: string,
    public link: string,
  ){}
}

export const projects: Project[] = [
  new Project(
    1,
    ['#react', '#tailwindcss'],
    'Todo List',
    'Simple to do list app built with React',
    'https://jb-todo-list.vercel.app/'
  ),
  new Project(
    2,
    ['#angular', '#aspnet', '#bootstrap'],
    'Employee Management',
    'Employee management system built with Angular and ASP.NET WebAPI (+Bootsrap)',
    'https://ng-employee-management.vercel.app/'
  )
]

export const fem_projects: Project[] = [
  
]