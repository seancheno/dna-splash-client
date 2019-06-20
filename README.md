# Dna Splash 

Visualize the genome by adding a splash of color to each base pair (A C G T). 

* This is the client-side repo  powered by react. 

* The back-end repo can be found [here](https://github.com/seancheno/dna-splash-server).

* Visit the live demo at [dnasplash.com](https://dnasplash.com).

## How it works 

Dna Splash allows a user to asign a color value to each of the four base pairs for a segment of dna. The coloring algorthm runs through the sequence of base pairs starting with the first four and calculates a color based on the frequency of each base pair. The mixed color is converted into a pixel and this process then shifts over 1 base pair and repeats until the end of the dna sequence is reached. The result is an image representing a visual representation of the dna sequence.

![alt text](http://dnasplash.com/images/diagram1.jpg)

## Installation

    git clone https://github.com/seancheno/dna-splash-client/
    cd dna-splash
    npm i
    npm run start:dev
    open localhost:8080
    # To build the app for production, run the following command:
    npm run build

## Notes

In order for the app to do its colorful magic, the back-end repo must be running on a local or production server and the `config.js` file must be configured with the servers address.  You will also need to supply an amazon S3 bucket url where the server is storing the generated images. More details can be found inside the [dna-splash-server repo](https://github.com/seancheno/dna-splash-server).

The genome sequence for each species are provided by the University of California Santa Cruz and can be found [here](http://hgdownload.cse.ucsc.edu/downloads.html).

