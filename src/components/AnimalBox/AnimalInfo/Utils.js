
	const animalMap = ( chosenAnimal ) => {
		let x = {
			speciesName: null,
			subText: null,
			chromosomes: null,
			pairs: null,
			origin: null,
			status: null
		};
		switch (chosenAnimal) {
			case "human":
				x.name = "Human";
				x.speciesName = "(Homo sapiens)";
				x.chromosomes = "46";
				x.pairs = "~ 3 billion";
				x.origin = "Africa";
				x.status = "Least Convern";

				break;
			case "panda":
				x.name = "Panda";
				x.speciesName = "(Ailuropoda melanoleuca)";
				x.chromosomes = "21";
				x.pairs = "~ 2.4 billion";
				x.origin = "China";
				x.status = "Vulnerable";

				break;
			case "turtle":
				x.name = "Turtle";
				x.speciesName = "(Testudines)";
				x.chromosomes = "28–66";
				x.pairs = "~ 2.5 billion";
				x.origin = "Unknown";
				x.status = "Endangered";

				break;
			case "cat":
				x.name = "Cat";
				x.speciesName = "(Felis catus)";
				x.chromosomes = "38";
				x.pairs = "~ 2.35 billion";
				x.origin = "Egypt";
				x.status = "Least Convern";

				break;
			case "dog":
				x.name = "Dog";
				x.speciesName = "(Canis lupus familiaris)";
				x.chromosomes = "39";
				x.pairs = "~ 3 billion";
				x.origin = "Europe/Asia";
				x.status = "Least Convern";

				break;
			case "gorilla":
				x.name = "Gorilla";
				x.speciesName = "(beringei graueri)";
				x.chromosomes = "48";
				x.pairs = "~ 3 billion";
				x.origin = "Africa";
				x.status = "Endangered";

				break;
			case "monkey":
				x.name = "Monkey";
				x.speciesName = "(Ateles)";
				x.chromosomes = "48";
				x.pairs = "~ 3 billion";
				x.origin = "South America";
				x.status = "Least Convern";

				break;
			case "dolphin":
				x.name = "Dolphin";
				x.speciesName = "(Delphinus)";
				x.chromosomes = "44";
				x.pairs = "~ 2.3 billion";
				x.origin = "Eocene epoch";
				x.status = "Least Convern";

				break;
			case "lion":
				x.name = "Lion";
				x.speciesName = "(Panthera leo)";
				x.chromosomes = "38";
				x.pairs = "~ 2.9 billion";
				x.origin = "Africa";
				x.status = "Vulnerable";

				break;
			case "elephant":
				x.name = "Elephant";
				x.speciesName = "(Loxodonta)";
				x.chromosomes = "46";
				x.pairs = "~ 2.7 billion";
				x.origin = "Africa";
				x.status = "Vulnerable";

				break;
			default:
				x.name = "Human";
				x.speciesName = "Homo sapiens";
				x.chromosomes = "46";
				x.pairs = "~ 3 billion";
				x.origin = "Africa";
				x.status = "Least Convern";

				break;
		}
		return x;
    };
    
    export default animalMap