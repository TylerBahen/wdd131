var character = {
    name: 'Snortleblat',
    class:'Swamp Beast Diplomat',
    level: 7,
    health: 60,
    attacked: function(){
        this.health-=20
        renderCharacter(this)
        if (this.health<=0){
            setTimeout(() => {
            alert(`${this.name} has died.`)
            },1)
        }
    },
    levelUp: function(){
        this.level++
        renderCharacter(this)
    }
}

function renderCharacter(char){
    const div = document.querySelector('.stats')
    div.innerHTML = `<p>Class: ${char.class}</p><p>Level: ${char.level}</p><p>Health: ${char.health}</p>`
}