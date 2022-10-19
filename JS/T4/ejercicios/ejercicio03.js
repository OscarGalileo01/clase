const a  = [1,5,2,7,3,2,4,5,8,7,3,4,5,6,7,3,8,4,1]
const b = []


for (let i = 0; i < a.length; i++) a[i]%2==0 && b.push(a[i]) && a.splice(i,1)


b.push(...a)
console.log(b);


