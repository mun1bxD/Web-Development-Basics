//call back hell
//asynchronus function output is dependent on other.
//Example1

function print1(callback){
    setTimeout(() => {
        console.log("First statement");
        callback();
    }, 1000);
}
function print2(callback){
    setTimeout(() => {
        console.log("Second statement");
        callback();
    }, 1000);
}
function print3(callback){
    setTimeout(() => {
        console.log("Third statement");
        callback();
    }, 1000);
}

print1(()=>{
    print2(()=>{
        print3(()=>{
            console.log("All messages printed :)");
        })
    })
})


//Example2

function SaveToDataBase(information,saved,error){
        let num=Math.floor(Math.random()*(10-1+1)+1);
        if (num>5){
            console.log(`Saving ${information}`);
            saved();
        }
        else{
            console.log(`Error saving ${information}`);
            error();
        }

    }

    function saved(){
        console.log("Value Saved");
    }
    function error(){
        console.log("Error in saving data");
    }

    SaveToDataBase("heading1",
        ()=>{
            saved();
            SaveToDataBase("heading2",
                ()=>{
                    saved();
                    SaveToDataBase("heading3",
                        ()=>{
                            saved();
                        },
                        ()=>{
                            error();
                    });
                },
                ()=>{
                    error();
                });
        },
        ()=>{
            error();
         }
    );

    