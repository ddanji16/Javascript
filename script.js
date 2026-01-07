alert('yo');
console.log("hello world");


    //JavaScript Functions

    function remove(){
        let remove = document.getElementById('box1');
        remove.style.display = 'none'

        /*
        remove.style.backgroundColor = 'Red';
        */
    }




    // Javascript While Loops

        let i = 0;

        while(i<210){
            console.log(i);
            i++;

         //if the i == to 10 then the loop will break or stop even the condition is true   

        if(i == 10){
            console.log("break");
            break;
        }
        }



        //JavaScript Array with While Loops
        // Iterate Array using while Loops


        let fruits = ['apple','mango','banana','orange','grapes'];
        let j = 0;

        /*
        let j = fruits.length-1;
        */

        while(fruits[j]){
            console.log(fruits[j]);
            j++;
            /*
            j--;
            */
        }



            //DO WHILE LOOP IN JAVASCRIPS

        let g = 0;

        do{
            console.log(g);
            g++;
        }while(g<4);




        // loop challenge add all numbers using loopp


        let num = [70,60,50,10,40,30,20];
        let k = 0;
        let sum = 0;
       

        while(num[k]){
            sum += num[k];
             k++;  
          

        }
        console.log(sum);
        

        