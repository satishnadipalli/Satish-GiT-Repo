const storingTODo =[];
const  displayElement = document.querySelector('.display-result');
const inputElement = document.querySelector('.input-holder');
const calenderElement= document.querySelector('.calender-selector'); 
const addElement = document.querySelector('.Add');
addElement.addEventListener('click',()=>{
    storing();
});

function storing(){
    let element = inputElement.value;
    let element2 = calenderElement.value;
    storingTODo.push({
        work : element,
        dateOfWork :element2
    });
    addArray();
    inputElement.value = '';
    
}


function addArray(){
    let addHTML='';
    storingTODo.forEach((arrayElementObject,index)=>{
       let html = `
            <div>
                ${arrayElementObject.work}
            </div >
            <div>
                ${arrayElementObject.dateOfWork}
            </div>

            <div>
             <button onclick='
                storingTODo.splice(${index},1);
                addArray();
                ' class='js-button'>Delete</button> 
            </div>
            `; 

                                                                 
        addHTML += html;
        console.log(addHTML);
    });
    displayElement.innerHTML = addHTML;
}

document.addEventListener('DOMContentLoaded',()=>{
    var clickElement=true;
    var buttonElement =  document.querySelector('.but');
    buttonElement.addEventListener('click',()=>{    
        if(clickElement){
            document.querySelector('.nav-button').classList.remove('nav-button');
            clickElement=false;
        }else if(false) {
            document.querySelector('.nav-button').classList.add('nav-elmeent');
            clickElement=true;
        }
    });
});
