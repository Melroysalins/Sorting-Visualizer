let grid=document.querySelector('.grid')
let timeout=1000;
let squares=[]

for(let i=0; i < 100; i++){
    let square = document.createElement('div')
    square.setAttribute('id',i)
    square.innerHTML=100 - i 
    grid.append(square);
    squares.push(square)

}
//fucntion declaration
function  buublesort(){
    //10 numbers in the array so we have n-1 passes for the array

    for( let i=0; i < squares.length;i++){

        for(let j=0; j < (squares.length - i-1); j++){

            setTimeout(()=> {
                if(parseInt(squares[j].innerHTML) > parseInt(squares[j+1].innerHTML)){
                    if(j > 0){
                        squares[j-1].classList.remove('exchange')
                        squares[j].classList.remove('exchange')
                    }

                    //toput color to adjacent side
                    squares[j].classList.add('exchange')
                    squares[j+1].classList.add('exchange')
                    setTimeout(() => {
                        //swapping
                        let temp=squares[j].innerHTML
                        squares[j].innerHTML=squares[j+1].innerHTML
                        squares[j+1].innerHTML = temp

                    },1000)

                   if( j === squares.length -i-2){
                        setTimeout(() => {
                            squares[j].classList.remove('exchange')
                            squares[j+1].classList.remove('exchange')

                        },2000)
                    }

                }
            },timeout)


            timeout +=2000;

        }


    }
}
buublesort();