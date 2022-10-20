const a  = [1,5,2,7,3,2,4,5,8,7,3,4,5,22,6,7,3,8,4,1]

const b = [...new Set(a.sort((a,b)=>{
    if(a<b){
        return -1;
    }
}))]

console.log(b);


