document.addEventListener('DOMContentLoaded', () =>{
    const buttons = document.querySelectorAll('.buttons-item button');
    const projects = document.querySelectorAll('.projects-item');
    
    buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.getAttribute('data-filter');
                    projects.forEach(project => {
                        if (!project.classList.contains(filter)){
                            project.classList.add('hidden');
                        }
                        else{
                            project.classList.remove('hidden');
                        }
                    });
                });
            });
});
