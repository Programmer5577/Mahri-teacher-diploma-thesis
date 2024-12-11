// questions.js
const questions = {
  javascript: [
    {
      question: "JavaScript näme?",
      options: [
        "Programmirleme dili",
        "Stil dili",
        "Bellik dili",
        "Merdanalar",
      ],
      correctAnswer: "Programmirleme dili",
    },
    {
      question: "JavaScript-i haýsy kompaniýa işläp düzdi?",
      options: ["Microsoft", "Mozilla", "Netscape", "Oracle"],
      correctAnswer: "Netscape",
    },
    {
      question: "'DOM' nämäni aňladýar?",
      options: [
        "Resminama Obýekt Modeli",
        "Görkezme Obýekt Dolandyryşy",
        "Sanly Ordinat Modeli",
        "Ekran Ugurly Režim",
      ],
      correctAnswer: "Resminama Obýekt Modeli",
    },
    {
      question: "JavaScript-de düşündirişler üçin haýsy nyşan ulanylýar?",
      options: ["//", "/*", "<!--", "#"],
      correctAnswer: "//",
    },
    {
      question: "ES6-da üýtgeýjini yglan etmek üçin haýsy açar söz ulanylýar?",
      options: ["var", "let", "const", "int"],
      correctAnswer: "let",
    },
    {
      question: "Satyryň san görnüşine öwrülmegi üçin haýsy usul ulanylýar?",
      options: ["parseInt()", "parseFloat()", "Number()", "String()"],
      correctAnswer: "parseInt()",
    },
    {
      question:
        "JavaScript-de HTML elementlerine girmek üçin haýsy usul ulanylýar?",
      options: [
        "getElementById()",
        "querySelector()",
        "getElementsByClassName()",
        "Ýokardakylaryň hemmesi",
      ],
      correctAnswer: "Ýokardakylaryň hemmesi",
    },
    {
      question: "'typeof NaN' näme çykarýar?",
      options: ["undefined", "number", "NaN", "object"],
      correctAnswer: "number",
    },
    {
      question:
        "Haýsy JavaScript funksiýasy interwalyň dowamynda çagyrmaga niýetlenendir?",
      options: ["setInterval()", "setTimeout()", "setIntervalLoop()", "wait()"],
      correctAnswer: "setTimeout()",
    },
    {
      question:
        "JavaScript-de üýtgewsiz üýtgeýjini kesgitlemek üçin haýsy açar söz ulanylýar?",
      options: ["var", "const", "let", "define"],
      correctAnswer: "const",
    },
    {
      question: "JavaScript-de 'this' açar sözi nämäni aňladýar?",
      options: ["Üýtgeýän", "Obýekt", "Funksiýa", "Häzirki obýekte salgylanma"],
      correctAnswer: "Häzirki obýekte salgylanma",
    },
    {
      question: "JSON nämäni aňladýar?",
      options: [
        "JavaScript Obýekt Bellikleri",
        "Java Çeşmesi Obýekt Bellikleri",
        "JavaScript Ugurlary Bellikleri",
        "Java Serýalaşdyrylan Obýekt",
      ],
      correctAnswer: "JavaScript Obýekt Bellikleri",
    },
    {
      question: "JavaScript-de wada nämäni aňladýar?",
      options: [
        "Ýerine goýmak",
        "Asinkron operasiýalar üçin obýekt",
        "Funksiýa",
        "Aýlaw",
      ],
      correctAnswer: "Asinkron operasiýalar üçin obýekt",
    },
    {
      question: "JavaScript-de '===' nämäni aňladýar?",
      options: ["Berme", "Deňlik", "Çynlakaý deňlik", "Deň däl"],
      correctAnswer: "Çynlakaý deňlik",
    },
    {
      question: "Haýsy massiv usuly massiwiň ahyryna element goşýar?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      question: "JavaScript-de funksiýanyň dogry sintaksisy näme?",
      options: [
        "function myFunction()",
        "def myFunction()",
        "function:myFunction()",
        "fun myFunction()",
      ],
      correctAnswer: "function myFunction()",
    },
    {
      question: "'0.1 + 0.2 == 0.3' näme çykarýar?",
      options: ["true", "false", "undefined", "NaN"],
      correctAnswer: "false",
    },
    {
      question: "'let' üýtgeýjisiniň meýdany näme?",
      options: ["Global", "Block", "Funksiýa", "Ýerli"],
      correctAnswer: "Block",
    },
    {
      question: "Obýekti JSON setirine öwürmek üçin haýsy usul ulanylýar?",
      options: [
        "JSON.parse()",
        "JSON.stringify()",
        "objectToString()",
        "toJsonString()",
      ],
      correctAnswer: "JSON.stringify()",
    },
    {
      question: "ES6-da modullary import etmek üçin haýsy açar söz ulanylýar?",
      options: ["require", "import", "include", "load"],
      correctAnswer: "import",
    },
  ],
  python: [
    {
      question: "Python näme?",
      options: [
        "Programmalaşdyryş dili",
        "Bezegi düzmek üçin dil",
        "Bellik dili",
        "Maglumatlar bazasy",
      ],
      correctAnswer: "Programmalaşdyryş dili",
    },
    {
      question: "Python-y kim işläp düzdi?",
      options: [
        "Guido van Rossum",
        "Brendan Eich",
        "Mark Zuckerberg",
        "Bill Gates",
      ],
      correctAnswer: "Guido van Rossum",
    },
    {
      question: "Python-da paketleri gurmak üçin haýsy buýruk ulanylýar?",
      options: ["install", "pip", "npm", "apt"],
      correctAnswer: "pip",
    },
    {
      question: "Python-da 'list' näme?",
      options: [
        "Üýtgedilip bilinýän maglumat görnüşi",
        "Üýtgedip bolmaýan maglumat görnüşi",
        "Funksiýa",
        "Döwran",
      ],
      correctAnswer: "Üýtgedilip bilinýän maglumat görnüşi",
    },
    {
      question: "Python-da funksiýa ýazmak üçin haýsy açar söz ulanylýar?",
      options: ["function", "func", "define", "def"],
      correctAnswer: "def",
    },
    {
      question:
        "Python-da aşakdakylaryň haýsy biri üýtgedip bolmaýan maglumat görnüşidir?",
      options: ["list", "set", "tuple", "dict"],
      correctAnswer: "tuple",
    },
    {
      question:
        "Python-da aşakdakylaryň haýsy biri içgin gurlan maglumat görnüşi däldir?",
      options: ["list", "tuple", "queue", "set"],
      correctAnswer: "queue",
    },
    {
      question: "Python-da 'len' funksiýasy näme berýär?",
      options: [
        "Stringiň uzynlygy",
        "Faýldaky harplaryň sany",
        "Sanawyň elementleriniň sany",
        "Ýokardakylar hem ählisi",
      ],
      correctAnswer: "Ýokardakylar hem ählisi",
    },
    {
      question: "Python-da kommentariýa nähili döredilýär?",
      options: ["//", "#", "/* */", "<!-- -->"],
      correctAnswer: "#",
    },
    {
      question: "Aşakdaky kodyň netijesi näme bolar: print(2 + 3 * 5)?",
      options: ["17", "25", "15", "5"],
      correctAnswer: "17",
    },
    {
      question: "Python-da sözlük (dictionary) nähili kesgitlenýär?",
      options: ["{}", "[]", "()", "<>"],
      correctAnswer: "{}",
    },
    {
      question: "Python-da istisnalary tutmak üçin haýsy sözler ulanylýar?",
      options: ["try/except", "catch/throw", "error/handle", "if/else"],
      correctAnswer: "try/except",
    },
    {
      question: "Python-da modul import etmek üçin dogry ýazuw haýsy?",
      options: ["import module", "include module", "use module", "load module"],
      correctAnswer: "import module",
    },
    {
      question:
        "Python-da üýtgäniň görnüşini anyklamak üçin haýsy funksiýa ulanylýar?",
      options: ["type()", "id()", "isinstance()", "gettype()"],
      correctAnswer: "type()",
    },
    {
      question: "Python-da set (toplum) nädip döreýär?",
      options: ["[]", "{}", "()", "set[]"],
      correctAnswer: "{}",
    },
    {
      question: "Python-da 'self' açar sözüniň maksady näme?",
      options: [
        "Klasyň nusgasyny görkezmek",
        "Klasyň özüni görkezmek",
        "Statik funksiýa kesgitlemek",
        "Ýokardakylaryň hiç biri",
      ],
      correctAnswer: "Klasyň nusgasyny görkezmek",
    },
    {
      question: "Python-da 'break' operator näme edýär?",
      options: [
        "Häzirki döwranadan çykýar",
        "Programmany togtadýar",
        "Funksiýany saklaýar",
        "Ýokardakylaryň hiç biri",
      ],
      correctAnswer: "Häzirki döwranadan çykýar",
    },
    {
      question:
        "Python-da eksponentiýa (derejä çykarmak) üçin haýsy operator ulanylýar?",
      options: ["^", "*", "**", "//"],
      correctAnswer: "**",
    },
    {
      question: "Aşakdaky kodyň netijesi näme bolar? print('Python'[-1])",
      options: ["P", "y", "n", "Ýalňyşlyk"],
      correctAnswer: "n",
    },
    {
      question: "Python-da faýly açmak üçin haýsy funksiýa ulanylýar?",
      options: ["open()", "read()", "write()", "load()"],
      correctAnswer: "open()",
    },
  ],
  c: [
    {
      question: "C programmalaşdyrmak diliniň kakasy hökmünde kim tanalýar?",
      options: [
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "James Gosling",
        "Ken Thompson",
      ],
      correctAnswer: "Dennis Ritchie",
    },
    {
      question: "C dilinde `char`-yň ululygy näçe?",
      options: ["1 byte", "2 byte", "4 byte", "8 byte"],
      correctAnswer: "1 byte",
    },
    {
      question: "C dilinde üýtgemezi nädip yglan edýärler?",
      options: ["const", "final", "immutable", "define"],
      correctAnswer: "const",
    },
    {
      question:
        "C dilinde strukturanyň agzalaryna elýeterlilik üçin haýsy operator ulanylýar?",
      options: [".", "->", "&", "::"],
      correctAnswer: ".",
    },
    {
      question: "`sizeof` operatory C dilinde näme edýär?",
      options: [
        "Üýtgeýjiniň ululygyny berýär",
        "Üýtgeýjiniň bahasyny berýär",
        "Üýtgeýjiniň ululygyny yglan edýär",
        "Üýtgeýji üçin ýat berilýär",
      ],
      correctAnswer: "Üýtgeýjiniň ululygyny berýär",
    },
    {
      question: "C dilinde string okamak üçin haýsy funksiýa ulanylýar?",
      options: ["scanf()", "gets()", "fgets()", "read()"],
      correctAnswer: "fgets()",
    },
    {
      question: "Aşakdakylardan haýsy biri C dilinde dogry string ýazgysydyr?",
      options: ["'Hello'", "'Hello World!'", '"Hello World!"', "Hello World!"],
      correctAnswer: '"Hello World!"',
    },
    {
      question: "C dilinde görkeziji (pointer) barada näme dogry?",
      options: [
        "Gösteriji bir üýtgeýjiniň ýadynda saklanýan salgysyny saklaýar",
        "Gösteriji gönüden-göni üýtgeýjileri saklamak üçin ulanylýar",
        "Gösteriji null bolup bilmeýär",
        "Gösterijiler diňe massiwler bilen ulanylýar",
      ],
      correctAnswer:
        "Gösteriji bir üýtgeýjiniň ýadynda saklanýan salgysyny saklaýar",
    },
    {
      question: "`main()` funksiýasynda `return 0;` näme görkezýär?",
      options: [
        "Programma üstünlikli tamamlandy",
        "Programmanyň ýalňyşlygy bar",
        "Programmanyň doly däl",
        "Programmanyň ýerine ýetirilişi gijikdirildi",
      ],
      correctAnswer: "Programma üstünlikli tamamlandy",
    },
    {
      question: "C dilinde dinamik ýady bölmek üçin haýsy funksiýa ulanylýar?",
      options: ["malloc()", "new()", "calloc()", "alloc()"],
      correctAnswer: "malloc()",
    },
    {
      question: "`main()` funksiýasynyň standart gaýdyp gelen görnüşi näme?",
      options: ["int", "void", "char", "float"],
      correctAnswer: "int",
    },
    {
      question: "C dilinde `break` operatorynyň maksady näme?",
      options: [
        "Programmanyň ýerine ýetirilmegini bes edýär",
        "Häzirki sikli ýa-da switç blokdan çykýar",
        "Funksiýany tamamlaýar",
        "Sikl başyna bökýär",
      ],
      correctAnswer: "Häzirki sikli ýa-da switç blokdan çykýar",
    },
    {
      question:
        "C dilinde kommentariýany tamamlamak üçin haýsy simwol ulanylýar?",
      options: ["*/", "//", "#", ":END"],
      correctAnswer: "*/",
    },
    {
      question: '`printf("%d", 5 + 3 * 2);` C dilinde näme netijäni görkezýär?',
      options: ["16", "11", "8", "5"],
      correctAnswer: "11",
    },
    {
      question:
        "C dilinde iki string deňeşdirmek üçin haýsy funksiýa ulanylýar?",
      options: ["strcmp()", "strcomp()", "compare()", "strcompare()"],
      correctAnswer: "strcmp()",
    },
    {
      question: "C dilinde integer üçin görkezijini nädip yglan edýärler?",
      options: ["int *ptr;", "pointer int ptr;", "ptr int;", "int ptr*;"],
      correctAnswer: "int *ptr;",
    },
    {
      question: "C dilinde bir massiwiň iň uly ululygy näme?",
      options: ["Sistemanyň ýady bilen bagly", "1000", "1024", "2048"],
      correctAnswer: "Sistemanyň ýady bilen bagly",
    },
    {
      question:
        "Aşakdakylardan haýsy biri C dilinde dogry maglumat görnüşi däldir?",
      options: ["int", "float", "string", "double"],
      correctAnswer: "string",
    },
    {
      question: "`continue` operatory C dilindäki siklde näme edýär?",
      options: [
        "Siklden çykýar",
        "Häzirki iterasiýany geçýär we indiki iterasiýa dowam edýär",
        "Programmanyň başyna dolanýar",
        "Sikly gaýtalaýar",
      ],
      correctAnswer:
        "Häzirki iterasiýany geçýär we indiki iterasiýa dowam edýär",
    },
    {
      question: "C dilinde strukturany yglan etmek üçin haýsy söz ulanylýar?",
      options: ["struct", "class", "structure", "array"],
      correctAnswer: "struct",
    },
  ],
  cplusplus: [
    {
      question: "C++'y kim yaratdy?",
      options: [
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "James Gosling",
        "Ken Thompson",
      ],
      correctAnswer: "Bjarne Stroustrup",
    },
    {
      question: "C++ çeşme faýly üçin uzanty näme?",
      options: [".c", ".cpp", ".class", ".java"],
      correctAnswer: ".cpp",
    },
    {
      question:
        "C++'da bir üýtgeýjini beýan etmek üçin dogry sintaksis nähili?",
      options: ["var x = 10;", "int x = 10;", "int 10 = x;", "x : int = 10;"],
      correctAnswer: "int x = 10;",
    },
    {
      question: "C++'da bir synpyň agzalaryna girmeli operator haýsy?",
      options: ["->", ".", "&", "|"],
      correctAnswer: ".",
    },
    {
      question: "C++'da görkeziji beýan etmek üçin dogry sintaksis haýsy?",
      options: ["int *p;", "int p*;", "pointer int p;", "p : int*;"],
      correctAnswer: "int *p;",
    },
    {
      question:
        "C++'da giriş/çykyş funksiýalaryny ulanmak üçin haýsy başlyk faýly gerek?",
      options: ["<stdio.h>", "<iostream>", "<stdlib.h>", "<math.h>"],
      correctAnswer: "<iostream>",
    },
    {
      question:
        "Aşakdakylardan haýsy biri obýektleriň ugrunda programmalaşdyrmaga degişli aýratynlykdyr?",
      options: [
        "Kaplama",
        "Mirasy alýş",
        "Polimorfizm",
        "Ýokaryda bellendirilenleriň hemmesi",
      ],
      correctAnswer: "Ýokaryda bellendirilenleriň hemmesi",
    },
    {
      question: "Aşakdakylardan haýsy biri C++'da girizme/çykaryş synpy däl?",
      options: ["private", "public", "protected", "accessible"],
      correctAnswer: "accessible",
    },
    {
      question: "`new` operator C++'da näme edýär?",
      options: [
        "Bir obýektiň ýady üçin bölek berýär",
        "Bir obýektiň ýadyny boşadýar",
        "Obýekti çap edýär",
        "Yokarydakylaryň hiç biri",
      ],
      correctAnswer: "Bir obýektiň ýady üçin bölek berýär",
    },
    {
      question: "C++'da dinamik ýady ýazmak üçin haýsy operator ulanylýar?",
      options: ["malloc", "calloc", "new", "free"],
      correctAnswer: "new",
    },
    {
      question:
        "C++'da inizializirlenmedik statik üýtgeýjiniň standart bahasy näme?",
      options: ["0", "null", "undefined", "garbage value"],
      correctAnswer: "0",
    },
    {
      question: "C++'da konstruktor döretmek üçin dogry sintaksis haýsy?",
      options: [
        "void Constructor() {}",
        "Constructor() {}",
        "Class() {}",
        "Class Constructor() {}",
      ],
      correctAnswer: "Constructor() {}",
    },
    {
      question: "C++'da valid bir aýlaw (loop) haýsy?",
      options: [
        "while",
        "for",
        "do-while",
        "Ýokaryda bellendirilenleriň hemmesi",
      ],
      correctAnswer: "Ýokaryda bellendirilenleriň hemmesi",
    },
    {
      question: "`virtual` açar sözü C++'da näme maksat bilen ulanylýar?",
      options: [
        "Virtual funksiýa beýan etmek",
        "Synpy abstrakt etmek",
        "Funksiýa çagyryşyny polimorfik etmek",
        "Yokarydakylaryň hiç biri",
      ],
      correctAnswer: "Funksiýa çagyryşyny polimorfik etmek",
    },
    {
      question: "`delete` operator C++'da näme edýär?",
      options: [
        "Dinamik obýektiň ýadyny boşadýar",
        "Dinamik obýektiň ýady üçin bölek berýär",
        "Funksiýany pozýar",
        "Yokarydakylaryň hiç biri",
      ],
      correctAnswer: "Dinamik obýektiň ýadyny boşadýar",
    },
    {
      question: "`friend` açar sözü C++'da näme maksat bilen ulanylýar?",
      options: [
        "Hususy maglumatlara girmäge ygtyýarly funksiýa beýan etmek",
        "Hususy usul beýan etmek",
        "Hususy synp beýan etmek",
        "Daşarky funksiýany beýan etmek",
      ],
      correctAnswer:
        "Hususy maglumatlara girmäge ygtyýarly funksiýa beýan etmek",
    },
    {
      question: "C++'da dinamik ýady ýazmak üçin haýsy operator ulanylýar?",
      options: ["malloc()", "new", "calloc()", "realloc()"],
      correctAnswer: "new",
    },
    {
      question: "C++'da pura virtual funksiýa näme?",
      options: [
        "Esasy synpda amalyýet berilmedik funksiýa",
        "Üýtgetmek mümkün bolmaýan funksiýa",
        "Standard argümentleri bolan funksiýa",
        "Birnäçe jogaplary bolan funksiýa",
      ],
      correctAnswer: "Esasy synpda amalyýet berilmedik funksiýa",
    },
    {
      question: "C++'da synp nädip beýan edilýär?",
      options: [
        "class MyClass {}",
        "class MyClass[] {}",
        "MyClass class {}",
        "Ýokaryda bellendirilenleriň hiç biri",
      ],
      correctAnswer: "class MyClass {}",
    },
    {
      question: "C++'da haýsy görnüşler dost funksiýa bolup bilýär?",
      options: [
        "Funksiýa",
        "Synp",
        "Funksiýa we synp",
        "Ýokaryda bellendirilenleriň hiç biri",
      ],
      correctAnswer: "Funksiýa we synp",
    },
  ],
  go: [
    {
      question: "Go programmirleme dili ni kim ösüş etdi?",
      options: [
        "Robert Griesemer, Rob Pike we Ken Thompson",
        "Dennis Ritchie",
        "Guido van Rossum",
        "James Gosling",
      ],
      correctAnswer: "Robert Griesemer, Rob Pike we Ken Thompson",
    },
    {
      question:
        "Go dilinde üýtgeýjini yglan etmek üçin haýsy simwol ulanylyp bilner?",
      options: ["=", "var", ":", ":="],
      correctAnswer: ":=",
    },
    {
      question:
        "Go dilinde erredirlikleri dolandyrmak üçin haýsy görnüş ulanylýar?",
      options: ["try-catch", "throws", "defer", "panic"],
      correctAnswer: "panic",
    },
    {
      question:
        "Go dilinde inizializasiýa edilmedik üýtgeýjiniň töweregi näme bolar?",
      options: ["null", "0", "undefined", "nil"],
      correctAnswer: "nil",
    },
    {
      question:
        "Go dilinde bir gezekli nokatlyk aýlanýan san üçin ýasalan gurluşyň ady haýsy?",
      options: ["float32", "float64", "double", "float"],
      correctAnswer: "float32",
    },
    {
      question: "Täze Goroutine başlatmak üçin haýsy funksiýa ulanylýar?",
      options: ["go()", "start()", "goroutine()", "run()"],
      correctAnswer: "go()",
    },
    {
      question: "'defer' açar sözüniň Go dilindäki maksady näme?",
      options: [
        "Ol funksiýany programmanyň ahyryna çenli ýönekeýleşdirýär",
        "Ol funksiýany programma başlansoň wagtlaýyn defer edýär",
        "Ol funksiýany esasy funksiýa yzyna gaýdyp gelende defer edýär",
        "Ol funksiýany goroutine tamamlanyp bolansoň defer edýär",
      ],
      correctAnswer: "Ol funksiýany goroutine tamamlanyp bolansoň defer eder",
    },
    {
      question: "Go dilindäki 'main' funksýasy näme?",
      options: [
        "Programma başlatmagyň funksiýasy",
        "Ýaddan ulanyş üçin funksiýa",
        "Erredirlik dolandyrmak üçin funksiýa",
        "Ulanyjydan maglumat almak üçin funksiýa",
      ],
      correctAnswer: "Programma başlatmagyň funksiýasy",
    },
    {
      question:
        "Go dilinde I/O amallaryny formatlamak üçin haýsy paket ulanylýar?",
      options: ["fmt", "io", "os", "sys"],
      correctAnswer: "fmt",
    },
    {
      question:
        "Aşakdaky görnüşlerden haýsy Go diliniň built-in görnüşi däldir?",
      options: ["string", "float", "map", "channel"],
      correctAnswer: "float",
    },
    {
      question: "Go interfeýslary barada aşakdaky ýazgylardan haýsy dogrudyr?",
      options: [
        "Go dilinde interfeýs görnüşi ýagdaýynda ýerine ýetirilýär",
        "Bir görnüş interfeýs ýerine ýetirilýändigini anyk beýan etmeli",
        "Go interfeýslary goldaýar",
        "Bir görnüş birnäçe interfeýslary ýerine ýetirip biler",
      ],
      correctAnswer:
        "Go dilinde interfeýs görnüşi ýagdaýynda ýerine ýetirilýär",
    },
    {
      question: "Go dilinde sabit deklarasiýasy nähili edilmeli?",
      options: [
        "const PI = 3.14",
        "constant PI = 3.14",
        "let PI = 3.14",
        "PI := 3.14",
      ],
      correctAnswer: "const PI = 3.14",
    },
    {
      question:
        "Go dilinde üýtgewsiz bahany görkezmek üçin haýsy görnüş ulanylýar?",
      options: ["constant", "var", "static", "immutable"],
      correctAnswer: "constant",
    },
    {
      question: "'select' beýanatynyň Go dilinde ulanylyşy näme?",
      options: [
        "Kanallaryň operasiýalary üçin birnäçe ýagdaýy dolandyrmak",
        "Eňňit kanaly saýlamak",
        "Birnäçe gaýtalanyşlar üçin saýlama",
        "Birnäçe massiwleri dolandyrmak",
      ],
      correctAnswer:
        "Kanallaryň operasiýalary üçin birnäçe ýagdaýy dolandyrmak",
    },
    {
      question:
        "Aşakdaky Go maglumat görnüşlerinden haýsy deňeşdiriş amallaryny goldamaýar?",
      options: ["int", "float64", "string", "slice"],
      correctAnswer: "slice",
    },
    {
      question:
        "Go dilinde görkeziji üýtgeýjisini nähili deklarasiýa etmek bolar?",
      options: ["var ptr *int", "ptr int", "pointer int", "ptr := *int"],
      correctAnswer: "var ptr *int",
    },
    {
      question:
        "Go dilinde ýapylan kanal arkaly maglumat ibermek mümkinçiligini synanşsaňyz, näme bolar?",
      options: [
        "Programma işden çykýar",
        "Maglumat ignorirlenýär",
        "Panik (panic) döredilýär",
        "Programma kanaly awtomatiki ýagdaýda täzeden açar",
      ],
      correctAnswer: "Panik (panic) döredilýär",
    },
    {
      question:
        "Go dilinde gaýtalanýan ýazgynyň ýa-da switch beýanatynyň ýatyrmagynyň açar sözi haýsy?",
      options: ["break", "exit", "stop", "continue"],
      correctAnswer: "break",
    },
    {
      question: "Go dilinde birnäçe netijeleri nähili dolandyrmak bolar?",
      options: [
        "Tuples ulanyp",
        "Massiwler ulanyp",
        "Strukturalar ulanyp",
        "Birnäçe üýtgeýjiler ulanyp",
      ],
      correctAnswer: "Birnäçe üýtgeýjiler ulanyp",
    },
    {
      question: "Eger-de Go funksiýasy baha bermese, näme bolar?",
      options: [
        "Ol ýalňyşlyk (error) berer",
        "Ol 'nil' yzyna gaýtarar",
        "Ol daşky bahany yzyna gaýtarar",
        "Ol hiç zady yzyna gaýtarmaz",
      ],
      correctAnswer: "Ol hiç zady yzyna gaýtarmaz",
    },
  ],
};

export default questions;
