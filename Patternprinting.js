let printStar=(n)=>{
    //checks if n is even or odd and if even n is made odd by adding one
    if(n%2==0){
    n=n+1;
    }
    //this outer for loop is the number of rows of half the diamond pattern
    for(let i=1;i<=Math.floor(n/2)+1;i++){
        let pttrn='';//an empty string is assigned to patten 
        const numofSpace=(Math.floor(n/2)-i)+1;//numofspace stores the space to be printed . half of n is taken and rounded it to  small nearest integr and each time i is subracted as the num of space 
        // decreace gradually and becomes 0 for last row of first half of pattern
        const numofStar=n-2*numofSpace;//numofStar calculates stars to be printed by subracting 2 times space from n.
        //loop to print spaces for each row in first half of pattern
        for(let j=1;j<=numofSpace;j++){
           pttrn+=" ";
        }
        //loop to print stars for each row in first half of pattern
        for(let s=1;s<=numofStar;s++){
            pttrn+='*';
        }
        //to print each row
        console.log(pttrn);

    }
    //for the second half of the pattern a c var is created that has initial value of one less than half of n's rounded value
    let c=Math.floor(n/2)-1;
    for(let i=Math.floor(n/2)+2;i<=n;i++){//loop for next half of pattern
        let pttrn='';
        const numofSpace=(Math.floor(n/2)-c);//c is reduced from half of rounded n value
        const numofStar=n-2*numofSpace;//num of stars to be printed
        //same loops for creating row pattern
        for(let j=1;j<=numofSpace;j++){
           pttrn+=" ";
        }
        for(let s=1;s<=numofStar;s++){
            pttrn+='*';
        }
        console.log(pttrn);//each row is printed
        c--;// for each row space increases and num of stars becomes 1 so c is subracted by 1 each time executing row loop

    }

    }
    printStar(5);
    
    
