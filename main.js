
const container=document.querySelector('.container')


function genGrid(){
   const count= prompt("Enter the dimension of the grid between 1 and 100"); // we collect the specified dimensions the user enters

   container.replaceChildren() //this clears the container before a new grid is even generated
    let size;
    if (count<25)                 // if the size of the dimension is less than 25 we set the size(height and width) of the container to 640px
        { size=640;
        container.style.height='640px';
        container.style.width='640px'; }
    else if (count>=25 & count <60) // if the size of the user's dimension is between 25 and 65 we set the size(width and height) of the container to 2000px
        {{size=2000;
        container.style.height='2000px';
        container.style.width='2000px';}
         }
    else if (count>=60 & count <101)                            // if the size of the container is beyond 60  but less than 100 we set the size(width and height) of the container to 3500px
        { size=3500;
        container.style.height='3500px';
        container.style.width='3500px';}

    else
        alert('Invalid size')

    for(i=1;i<=(count**2);i++){
    const div=document.createElement('div');
    div.classList.add('block');
    div.innerText=" ";         
    div.style.height=`${size/count}px`;  // the heigt of every div witin the container will be the size of the container divided by the number of rows
    div.style.width=`${size/count}px`;   // the width of every div witin the container will be the size of the container divided by the number of rows
    container.appendChild(div);
    

}

}


