
      // Get your shorts on - this is an array workout!
      // ## Array Cardio Day 1

      // Some data we can work with

      const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];

      const people = [
        'Beck, Glenn',
        'Becker, Carl',
        'Beckett, Samuel',
        'Beddoes, Mick',
        'Beecher, Henry',
        'Beethoven, Ludwig',
        'Begin, Menachem',
        'Belloc, Hilaire',
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William'
      ];

      const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck'
      ];

      //Excercise 1
      console.log(inventors.filter((item) => item.year > 1500));
      //la callback function retorna los elementos deseados

      //Excercise 2
      console.log(inventors.map((el) => el.first + " " + el.last ));
      //se forma un nuevo array segun la callback function

      //Excercise 3
      console.log(inventors.sort((a,b) => a.year - b.year));
      //toma el resultado de la op., si da <0, lo coloca 1 en el array
      //si da >0 lo coloca decuè

      //Excercise 4
      console.log(inventors.reduce((a,c) => a + (c.passed - c.year), 0));
      //usa un acumulador y un curren value. El resultado d la op. pasa al acum.
      //Se debe inicializar el acum. en 0 y se agraga 0 al acum. (no muy seguro d esto
      // pero tampoco tan perdido)

      //Ejemplo de Sulav
      // const arr1 = [1,2,3,4,5]
      // let sum =0
      // for(let item of arr1) {
       
      //   sum = sum + item
      // }
      // console.log("sum = " + sum)

      //Excercise 5
      console.log(inventors.sort((a,b) => (a.passed - a.year) - (b.passed - b.year)));
      //el tipo q haya vivido menos pasa el 1er elemento del array