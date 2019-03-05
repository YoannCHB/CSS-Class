class css{
    constructor(json){
        this.system = Object.keys(json);
        this.val = Object.values(json);
        this.hoverE = false;
    }
}

css.prototype.hover = function(json){
    this.hoverE = {};
    this.hoverE.system = Object.keys(json);
    this.hoverE.val = Object.values(json);
}

css.prototype.add = function(e){
    if(!e){
        console.error('Error for the element !');
    }
    try{
        e.style = ""; //Vérifie l'élément
        let el = this.constructor.name;
        for(var n in this.system){
                eval("e.style."+this.system[n]+" = this.val[n]");
        }
        e.setAttribute('onmouseover', "");
        if(this.hoverE){
        e.setAttribute('dataClass', "");
        e.dataClass = JSON.stringify(this);
        //MOUSE HOVER
        e.onmouseover = function(){
                var cache = JSON.parse(this.dataClass);
                this.style = "";
                for(var n in cache.hoverE.system){
                    eval('this.style.'+cache.hoverE.system[n]+' = cache.hoverE.val[n]');
                }
        }
        e.setAttribute('onmouseout', "");
        //MOUSE OUT
        e.onmouseout = function(){
                var cache = JSON.parse(this.dataClass);
                this.style = "";
                for(var n in cache.system){
                    eval('this.style.'+cache.system[n]+" = cache.val[n]");
                }
            }
        }
    }
    catch(e){
        console.error('Error occured !');
        console.error(e);
    }
}

/*PARTIE TESTE
var myClass = new css({
    background: "Red",
    transition: "1s ease"
});
myClass.hover({
    background: "Yellow"
});
myClass.add(document.body);
*/