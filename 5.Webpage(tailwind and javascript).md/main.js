document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('hidden-nav');
    document.getElementById('menu-button').classList.add('hidden-nav');
    document.getElementById('close-button').classList.remove('hidden-nav');
});

document.getElementById('close-button-top').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.add('hidden-nav');
    document.getElementById('menu-button').classList.remove('hidden-nav');
    document.getElementById('close-button').classList.add('hidden-nav');
});

document.addEventListener("DOMContentLoaded",function(){
    let text="Explore the beauty of deserts with our expert guides and tailored travel packages.";
    let typing=document.getElementById("typing-text");
    let index=0;

    function type(){
        if (index < text.length) {
            typing.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50);
        } 
    }
    type();
});