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

function updateAge(){
    const currentTime = new Date();
    const birthday = new Date('April 7, 2004, 09:30:00');
    const ageElement = document.getElementById('age');
    const millisecondInYear = 31557600000;
    ageElement.textContent = ((currentTime - birthday) / millisecondInYear).toFixed(9);
}

setInterval(updateAge, 50)

