$( window ).on( "load", function() {

var questions = [
	{question: "The First World War saw the destruction of many long reigning Royal Houses across Europe. Which of the following monarchs survived the war?",
	answers: [
		{text: "Kaiser Wilhelm II",
		 value: false,},
		{text: "King George V",
		 value: true,},
		{text: "Tsar Nicholas II",
		 value: false,},
		{text: "President Woodrow Wilson",
		 value: false}]
	},
	{question: "Garvilo Princip, the man who shot Archduke Frans Ferdinad and sent Europe to war, was the member of a Slavic terrorist organization. Which of the following groups did he belong to?",
	answers: [
		{text: "The Black Hand",
		 value: true,},
		{text: "The White Rose",
		 value: true,},
		{text: "The Marguis",
		 value: false,},
		{text: "The Bolsheviks",
		 value: false}]
	},
	{question: "When Germany moved it's troops toward France, they avoided a straight path across the boarder, prefering to swing North through Belgium.  What was the name of this military strategy?",
	answers: [
		{text: "North Route",
		 value: false,},
		{text: "Belgium Plan",
		 value: true,},
		{text: "Normandy Swing",
		 value: false,},
		{text: "The Schlieffen Plan",
		 value: false}]
	},
	{question: "During the first month of the war, Germany delve deep into France, almost capturing Paris.  However, the efforts of one group of Parisans helped keep them at bay.  What profession is attributed with making sure French soliders were in position to protect Paris?",
	 answers: [
	 	{text: "Barristas",
	 	value: false},
	 	{text: "Train Conductors",
	 	value: false},
	 	{text: "Militray Truck Drivers",
	 	value: false},
	 	{text: "Taxi Drivers",
	 	value: true}]
	},
	{question: "Christmas of 1914 is remembered by a famous stopage in hostilities, as troops from both sides left their tenches and mingled. What did they famously do?",
	 answers: [
	 	{text: "Soccer",
	 	value: true},
	 	{text: "Cricket",
	 	value: false},
	 	{text: "Stones",
	 	value: false},
	 	{text: "Roulette",
	 	value: false}]
	 },
	 {question: "Currently known for his role in the popular movie Wonder Woman, this man became one of the co-leaders, along with Paul vn Hindenberg, of Germany's military efforts throughout the war.",
	 answers: [
	 	{text: "Erich Ludendorff",
	 	value: true},
	 	{text: "Kaiser Wilhelm II",
	 	value: false},
	 	{text: "Rasputin",
	 	value: false},
	 	{text: "Adolf Hitler",
	 	value: false}]
	},
	{question: "One of the more famous military vehicles of the First World War, the German Zepplin began bombing London almost 30 years before Nazi Germany. Which of the following was a critcle compent of its construction?",
	answers: [
		{text: "50,000 Tons Aluminium",
		value: false},
		{text: "250,000 Cows",
		value: true},
		{text: "2 sqk Fabric",
		value: false},
		{text: "Helium. Like a lot",
		value: false}]
	},
	{question: "The Western Front is most famous for the trenches which weaved across the contient.  At the height, what was the length of this front?",
	answers: [
		{text: "12,300 km",
		value: false},
		{text: "1,100 kc",
		value: false},
		{text: "625 km",
		value: false},
		{text: "700 km",
		value: true}]
	},
	{question: "Sitting on the sidelines for most of the war, the United States entered on the side of the Allies in 1917.  What event finally pushed America into the conflict?",
	answers: [
		{text: "50,000 Tons Steel",
		value: false},
		{text: "250,000 Cows",
		value: true},
		{text: "2 sqk Polyester",
		value: false},
		{text: "Helium. Like a lot",
		value: false}]
	},
	{question: "On 11 AM on November 11th, 1918, all was quiet on the Western Front.  Every year, the United Kingdom remembers the ceasefire by encircling the Tower of London with which flower?",
	answers: [
		{text: "Roses",
		value: false},
		{text: "Lillies",
		value: false},
		{text: "Edelweiss",
		value: false},
		{text: "Poppies",
		value: true}]
	}];

var score = 0;

$("#start").click(function game() {

	var questionCounter = questions[0]
	var currentQuestion = questionCounter;

	var counter = 20;

	function reset(){
		counter = 20;
		questionCounter++;
		//game();
	}

	setInterval(function(){
		counter --;
		if (counter >= 0){
			span = $("#count");
			span.html(counter);
		}
		if (counter <= 0){
			reset();
		}
	}, 1000);

	$("#question").empty();

	$("#question").text(currentQuestion.question);

	for (var i = 0; i < currentQuestion.answers.length; i++) {
		console.log(currentQuestion.answers.length);
		var answers = $("<btn/>")
		.addClass("btn btn-success")
		.addClass("answerButtons")
		.attr("data-name", currentQuestion.answers[i].text)
		.attr("data-value", currentQuestion.answers[i].value)
		.text(currentQuestion.answers[i].text);
		$("#a1").append(answers);
	};

	$(".answerButtons").on("click", function(){
		console.log($(this).attr("data-value"));

		if ($(this).attr("data-value") = true) {
				reset();
				score++;
		}else{
				reset();
		}
		
	});



	});






});