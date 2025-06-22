let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=5
    text_speak.volume=5
    text_speak.lang="fr-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours= day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Anshika")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Anshika")
    }
    else{
        speak("Good Evening Anshika")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechrecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechrecognition()
recognition.onresult=(event)=>{
    let currentIndex =event.resultIndex
    let transcript= event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am an virtual assitant, created by Anshika ")
    }
    else if(message.includes("how are you")){
        speak("i am fine,what about you? ")
    }
    else if(message.includes("also fine")){
        speak("ohh that's good, how can i help you ")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.linkedin.com")
    }
    else if(message.includes("open amazon")){
        speak("opening amazon")
        window.open("https://www.amazon.in/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time= new Date().toLocaleString(undefined,{hour:"numeric" , minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date= new Date().toLocaleString(undefined,{day:"numeric" , month:"short"})
        speak(date)
    }
    // else{
    //     speak(this is what i found on internet regarding ${message.replace("vidhi","")})
    //     window.open(https://www.google.com/search?q=${message.replace("vidhi","")})
    // }
    else {
        speak(`This is what I found on the internet regarding ${message.replace("vidhi", "")}`);
        window.open(`https://www.google.com/search?q=${message.replace("vidhi", "")}`);
    }
    
}