console.log('Good Luck Saurabh, You are great !!')


class Graph{
    constructor(){
        this.data={};
    }

    addVertex(value){
        if(!this.data[value]){
            this.data[value] =[];
        }else{
            console.log('This vertex is already available')
        }
    }

}

const g1 =new Graph();
console.log(g1.data);
g1.addVertex('A');
console.log(g1.data);