
const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data.json'); 
    request.setRequestHeader('Content-type', 'application/json');


    
    request.addEventListener('load', () => {   
            const peoples = JSON.parse(request.response)


    

            peoples.forEach((person) => {
                
                const personCard = document.createElement('div')

                personCard.setAttribute('class', 'person-card')

                
                

                personCard.innerHTML = `         
                    <h3>Name: ${person.name}</h3>
                    <span>Age: ${person.death}</span>
                    <span>Biography: ${person.biography}</span>
                `
                
                const image = document.createElement('img')
                image.src = person.image
                personCard.append(image)



                wrapper.append(personCard)
                console.log(peoples);
            })
        
    });
    
    request.send()

});
