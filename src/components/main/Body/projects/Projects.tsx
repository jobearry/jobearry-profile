import todo from '../../../../assets/todo.png'
import employee_mgt from '../../../../assets/employee-mgt.png'
import { Project, projects } from '../../../../models/project'

const Projects: React.FC<Project> = ({id}) => {
  const projectImg = [todo, employee_mgt]
  return (
    <div id={id.toString()} className='flex flex-col lg:flex-row justify-center items-center bg-slate-800'>
      {projects.map((project, index) =>
        <div className='max-w-sm m-2 border border-slate-300 rounded overflow-hidden shadow-lg my-8 bg-slate-600'>
          <img className='w-full' src={projectImg[index]} alt='Project Image' />
          <div className='px-6 py-4'>
            <div className='text-orange-500 font-bold text-xl mb-2'>
              <a href={project.link}>{project.item}</a>
            </div>
            <p className='text-gray-300 text-base'>
              {project.description}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
              {project.tags.map((tag, index) =>
                <span className={`
                  inline-block bg-slate-700 rounded-full px-3 py-1 text-sm font-semibold
                  text-gray-300 mr-2 mb-2`} key={index}>
                    {tag}
                </span>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;