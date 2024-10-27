import './Navbar.css'

function Navbar(){
	return (
		<>
			<nav className='container mx-auto flex place-content-between border-2'>
				<div className='container mx-auto flex items-center'>
					<img
							className='h-14' 
							src='src\assets\joby-logo.svg' alt="joby-logo"  />
							<p>
									<strong>Jonathan</strong>
									<p className='text-sm text-gray-400'>is Jobearry</p>
							</p>
				</div>

				<div className='container mx-auto flex justify-end items-center'>
					<ul className='container mr-4 w-60 flex justify-between '>
							<li><a href="#">Home</a></li>
							<li><a href="#">Projects</a></li>
							<li><a href="#">About Me</a></li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar