function ProjectList({projects}) {
    let index = 0;

    return (
        <div className="images">
            {projects.map((item) => (
                <div className='image' key={index++}>
                    <img src={item.img} alt=''/>
                </div>
                ))
            }
        </div>   
    );
}

export default ProjectList;
