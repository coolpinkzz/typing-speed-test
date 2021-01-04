const setofwords = [
    "The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own. It gets its light from the Sun. The Moo keeps changing its shape as it moves round the Earth. It spins on its axis in 27.3 days stars were named after the Edwin Aldrin were the first ones to set their foot on the Moon on 21 July 1969 They reached the Moon in their space craft named Apollo II.",
    "The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas. The surface of the Sun is known as the photosphere. The photosphere is surrounded by a thin layer of gas known as the chromospheres. Without the Sun, there would be no life on Earth. There would be no plants, no animals and no human beings. As, all the living things on Earth get their energy from the Sun for their survival.",
    "The Solar System consists of the Sun Moon and Planets. It also consists of comets, meteoroids and asteroids. The Sun is the largest member of the Solar System. In order of distance from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto; the dwarf planet. The Sun is at the centre of the Solar System and the planets, asteroids, comets and meteoroids revolve around it.",
    "The Mahabharata is a story about a great battle between the Kauravas and the Pandavas. The battle was fought in Kurukshetra near Delhi. Many kings and princes took part in the battle. The Pandavas defeated the Kauravas. The Bhagvad Gita is a holy book of the Hindus. It is a part of the Mahabharata. Then, Lord Rama, with the help of It is a book of collection of teachings of Lord Krishna to Arjuna in the battlefield. It is the longest epic in the world.",
    "The Ramayana is a story of Lord Rama written by the SageValmiki. Lord Rama, the prince of Ayodhya, in order to help his father Dasharatha went to exile for fourteen years. His wife, Sita and his younger brother Lakshmana also went with him. He went through many difficulties in the forest. One day Ravana, the king of Lanka carried away Sita with him. Then, Lord Rama, with the help of Hanumana, defeated and killed Ravana; Sita, Rama and Lakshmana returned to Ayod hya after their exile.",
    "The Taj Mahal is a beautiful monument built in 1631 by an Emperor named Shah Jahan in memory of his wife Mumtaz Mahal. It is situated on the banks of river Yamuna at Agra. It looks beautiful in the moonlight. The Taj Mahal is made up of white marble. In front of the monument, there is a beautiful garden known as the Charbagh. Inside the monument, there are two tombs. These tombs are of Shah Jahan and his wife Mumtaz Mahal. The Taj Mahal is considered as one of the Seven Wonders of the World. Many tourists come to see this beautiful structure from different parts of the world.",
    "Delhi is the capital of India. It is situated on the banks of the river Yamuna. It is surrounded by Haryanaand Uttar Pradesh. It has some of the famous buildings and monuments such as the Qutub Minar, Reu Fort, Lotus Temple, Akshardham Temple etc. Some of the monuments are hundreds of years old. Apart from this, there is the Parliament House, the Central Secretariat and the famous Connaught place. Delhi is a beautiful city. But, it is becoming very crowded and polluted. I love Delhi a lot.",
    "A snake charmer is a person who moves the streets with different types of the banks of the river Yamuna. It is snakes in his basket. He goes from one place to another to show various types of snakes and their tricks. He carries a pipe with which he plays music and snakes dance to his tune. He usually wears a colourful dress. The job of a snake charmer is quite dangerous. Some snakes are quite poisonous and can even bite him. It is not an easy task to catch and train them for the shows.",
    "A street beggar can be seen everywhere; at the bus stop, railway stations, religious places, markets etc. Some beggars are crippled, lame and some are blind. They are unable to earn their livelihood. Whereas some are healthy and they do not deserve our sympathy. We should see that they take up some profession. They should not be allowed to beg. On my way to school I see a beggar daily. He wears old rags. He is partially blind. I feel pity seeing him but I can’t help it I can only pray to God to help him to earn his livelihood.",
    "The doctor is a person who looks after the sick people and prescribes medicines so that the patient recovers fast. In order to become a doctor, a person has to study medicine. Doctors lead a hard life. Their life is very busy. They get up early in the morning and go to the hospital. They work without taking a break. They always remain polite so that patients feel comfortable with them. Since doctors work so hard we must realise their value.",

]


const msg = document.getElementById("msg")
const typedword = document.getElementById("mywords")
const btn = document.getElementById("btn")

const wpm = document.getElementById("wpm")
const accuracy = document.getElementById("accuracy")
const correctWords = document.getElementById("correctWords")
const error = document.getElementById("error")
const success = document.getElementById("success")

let StartTime, EndTime;


const PlayGame = () => {
    typedword.value = "";
    let randomnumber = Math.floor(Math.random() * setofwords.length)
    msg.innerText = setofwords[randomnumber];
    StartTime = new Date().getTime();
    btn.innerText = "Done"
    msg.style.display = "block"
    document.getElementById("btn").className = "btn btn-success btn-lg m-3";

}

const CompareWords = (str1, str2) => {


    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;


    word1.forEach(function (item, index) {
        if (item == word2[index]) {
            count++
        }
    })


    let errorWord = word1.length - count;


    let accuracyresult = Math.ceil((count / word2.length) * 100) + " %";

    accuracy.innerText = accuracyresult;
    correctWords.innerHTML = count;
    error.innerText = errorWord;



}

const EndGame = () => {
    EndTime = new Date().getTime();

    TotalTime = ((EndTime - StartTime) / 1000);
    // console.log(TotalTime);
    totalStr = typedword.value;

    CountWord = totalStr.split(" ").length;
    console.log(typedword.value.length)



    let speedpermin = Math.round((CountWord / TotalTime) * 60)

    if (typedword.value.length == 0) {
        success.className = "alert alert-danger"
        success.innerText = "Please Type Something Dude 😞"
        wpm.innerText = "--"
    }
    else {
        success.className = "alert alert-success"
        success.innerText = "Successfully..! 🎉🎉 completed the Test. Your results are shown below !"
        wpm.innerText = speedpermin
    }



    btn.innerText = "Start";
    document.getElementById("btn").className = "btn btn-primary btn-lg m-3";

    CompareWords(msg.innerText, totalStr);

}



btn.addEventListener('click', function () {
    // console.log(this);
    if (this.innerText == "Start") {
        // typedword.disabled = false;
        wpm.innerText = "--"
        accuracy.innerText = "--"
        correctWords.innerText = "--"
        error.innerText = "--"
        success.style.display = "none"
        PlayGame();
    }
    else if (this.innerText == "Done") {
        success.style.display = "block"

        EndGame();
    }
})


var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var classname = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);

}