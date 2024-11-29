// questions.js
const questions = {
  javascript: [
    {
      question: "JavaScript näme?",
      options: [
        "Programmirleme dili",
        "Stil dizaýn dili",
        "Bellik dili",
        "Maglumatlar bazasy",
      ],
      correctAnswer: "Programmirleme dili",
    },
    {
      question: "JavaScript haýsy kompaniýa tarapyndan döredildi?",
      options: ["Microsoft", "Mozilla", "Netscape", "Oracle"],
      correctAnswer: "Netscape",
    },
    {
      question: "'DOM' näme diýmegi aňladýar?",
      options: [
        "Resminama Obýekt Modeli",
        "Obýekt Görnüş Dolandyryşy",
        "Sanly Ulgam Modeli",
        "Şahsy Kompýuter Ulgam Tertibi",
      ],
      correctAnswer: "Resminama Obýekt Modeli",
    },
    {
      question: "JavaScript-de kommentariýalar üçin haýsy nyşan ulanylýar?",
      options: ["//", "/*", "<!--", "#"],
      correctAnswer: "//",
    },
    {
      question: "ES6-da üýtgeýjini yglan etmek üçin haýsy açar söz ulanylýar?",
      options: ["var", "let", "const", "int"],
      correctAnswer: "let",
    },
    {
      question:
        "Süzgüçli görnüşde teksti butluga öwürmek üçin haýsy usul ulanylýar?",
      options: ["parseInt()", "parseFloat()", "Number()", "String()"],
      correctAnswer: "parseInt()",
    },
    {
      question: "JavaScript-de HTML elementlerine nädip girip bolýar?",
      options: [
        "getElementById()",
        "querySelector()",
        "getElementsByClassName()",
        "Bularyň hemmesi",
      ],
      correctAnswer: "Bularyň hemmesi",
    },
    {
      question: "'typeof NaN' näme çykdajy berýär?",
      options: ["kesgitlemesiz", "san", "NaN", "obýekt"],
      correctAnswer: "san",
    },
    {
      question:
        "Belirli bir aralykdan soň funksiýa çagyrmak üçin haýsy JavaScript funksiýasy ulanylýar?",
      options: ["setInterval()", "setTimeout()", "setIntervalLoop()", "wait()"],
      correctAnswer: "setTimeout()",
    },
    {
      question:
        "JavaScript-de hemişelik üýtgeýji üçin haýsy açar söz ulanylýar?",
      options: ["var", "const", "let", "define"],
      correctAnswer: "const",
    },
    {
      question: "JavaScript-de 'this' näme?",
      options: ["Üýtgeýji", "Obýekt", "Funksiýa", "Häzirki obýekte salgylanma"],
      correctAnswer: "Häzirki obýekte salgylanma",
    },
    {
      question: "JSON näme diýmegi aňladýar?",
      options: [
        "JavaScript Obýekt Notasiýasy",
        "Java Ýagdaý Obýekt Notasiýasy",
        "JavaScript Uýgunlaşma Notasiýasy",
        "Java Seriýalaşma Obýekti",
      ],
      correctAnswer: "JavaScript Obýekt Notasiýasy",
    },
    {
      question: "JavaScript-de wada näme?",
      options: [
        "Ýerleşýän ýeri",
        "Asinkron amallar üçin obýekt",
        "Funksiýa",
        "Döwran",
      ],
      correctAnswer: "Asinkron amallar üçin obýekt",
    },
    {
      question: "JavaScript-de '===' näme diýmegi aňladýar?",
      options: ["Bellige almak", "Deňlik", "Strict deňlik", "Deň däl"],
      correctAnswer: "Strict deňlik",
    },
    {
      question: "Massiwiň ahyryna element goşmak üçin haýsy usul ulanylýar?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      question: "JavaScript-de dogry funksiýa sintaksisi näme?",
      options: [
        "function myFunction()",
        "def myFunction()",
        "function:myFunction()",
        "fun myFunction()",
      ],
      correctAnswer: "function myFunction()",
    },
    {
      question: "'0.1 + 0.2 == 0.3' näme bolýar?",
      options: ["hakykat", "ýalan", "kesgitlemesiz", "NaN"],
      correctAnswer: "ýalan",
    },
    {
      question: "'let' üýtgeýjisiniň ulanyş çäkleri näme?",
      options: ["Global", "Blok", "Funksiýa", "Ýerli"],
      correctAnswer: "Blok",
    },
    {
      question:
        "Obýekti JSON teksti görnüşine öwürmek üçin haýsy usul ulanylýar?",
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
        "Programmirleme dili",
        "Stilize etmek dili",
        "Markirovka dili",
        "Databazasy",
      ],
      correctAnswer: "Programmirleme dili",
    },
    {
      question: "Pythonyň ösdürijisi kim?",
      options: [
        "Guido van Rossum",
        "Brendan Eich",
        "Mark Zuckerberg",
        "Bill Gates",
      ],
      correctAnswer: "Guido van Rossum",
    },
    {
      question: "Pythonda paketleri gurnamak üçin haýsy buýruk ulanylýar?",
      options: ["install", "pip", "npm", "apt"],
      correctAnswer: "pip",
    },
    {
      question: "Pythonda sanaw näme?",
      options: [
        "Üýtgeşik maglumat görnüşi",
        "Üýtgewsiz maglumat görnüşi",
        "Bir funksiýa",
        "Bir dolanşyk",
      ],
      correctAnswer: "Üýtgeşik maglumat görnüşi",
    },
    {
      question: "Pythonda funksiýalar üçin haýsy açar söz ulanylýar?",
      options: ["function", "func", "define", "def"],
      correctAnswer: "def",
    },
    {
      question:
        "Aşakdakylardan haýsy biri Pythonda üýtgewsiz maglumat görnüşidir?",
      options: ["list", "set", "tuple", "dict"],
      correctAnswer: "tuple",
    },
    {
      question: "'len' funksiýasy Pythonda näme dönderýär?",
      options: [
        "Stiriniň uzynlygyny",
        "Faylda belgiler sany",
        "Sanawdaky elementleriň sany",
        "Above-däki hemmesi",
      ],
      correctAnswer: "Above-däki hemmesi",
    },
    {
      question: "Pythonda kommentariýa nädip ýazylyp bilner?",
      options: ["//", "#", "/* */", "<!-- -->"],
      correctAnswer: "#",
    },
    {
      question: "Aşakdaky koduň netijesi näme bolar: print(2 + 3 * 5)?",
      options: ["17", "25", "15", "5"],
      correctAnswer: "17",
    },
    {
      question:
        "Pythonda sözlük (dictionary) döretmek üçin haýsy sygyn (symbol) ulanylýar?",
      options: ["{}", "[]", "()", "<>"],
      correctAnswer: "{}",
    },
    {
      question:
        "Pythonda istisnalar (exceptions) ulanmak üçin haýsy operator ulanylýar?",
      options: ["try/except", "catch/throw", "error/handle", "if/else"],
      correctAnswer: "try/except",
    },
    {
      question: "Pythonda modul import etmek üçin dogry sintaksis näme?",
      options: ["import module", "include module", "use module", "load module"],
      correctAnswer: "import module",
    },
    {
      question:
        "Pythonda bir üýtgeýjiň görnüşini almak üçin haýsy funksiýa ulanylýar?",
      options: ["type()", "id()", "isinstance()", "gettype()"],
      correctAnswer: "type()",
    },
    {
      question: "Pythonda set döretmek üçin dogry ýol näme?",
      options: ["[]", "{}", "()", "set[]"],
      correctAnswer: "{}",
    },
    {
      question: "'self' açar sözüniň maksady näme?",
      options: [
        "Klasyň nusgasyna (instance) salgylanmak",
        "Klasa özüne salgylanmak",
        "Statik funksiýa kesgitlemek",
        "Yokarydakylaryň hiç biri däl",
      ],
      correctAnswer: "Klasyň nusgasyna (instance) salgylanmak",
    },
    {
      question: "'break' beýannamasy Pythonda näme edýär?",
      options: [
        "Häzirki dolanşygyň öňüni alýar",
        "Programma goýbolsun edilýär",
        "Funksiýany togtadýar",
        "Yokarydakylaryň hiç biri däl",
      ],
      correctAnswer: "Häzirki dolanşygyň öňüni alýar",
    },
    {
      question: "Pythonda eksponentasiýa üçin haýsy operator ulanylýar?",
      options: ["^", "*", "**", "//"],
      correctAnswer: "**",
    },
    {
      question: "Aşakdaky kod näme çap eder? print('Python'[-1])",
      options: ["P", "y", "n", "Hata"],
      correctAnswer: "n",
    },
    {
      question: "Pythonda faýly açmak üçin haýsy funksiýa ulanylýar?",
      options: ["open()", "read()", "write()", "load()"],
      correctAnswer: "open()",
    },
    {
      question:
        "Pythonda return beýanaty bolmadyk funksiýanyň kesgitlenen haýsy ýa-da nädogry aýratynlykly bolupdyr?",
      options: ["None", "0", "False", "null"],
      correctAnswer: "None",
    },
  ],
  c: [
    {
      question: "C dili kim tarapyndan döredildi?",
      options: [
        "Bjarn Stroustrup",
        "Dennis Riççi",
        "Jeýms Gosling",
        "Ken Tompson",
      ],
      correctAnswer: "Dennis Riççi",
    },
    {
      question:
        "C dilinde giriş we çykış funksiýalary üçin haýsy faýl ulanylýar?",
      options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
      correctAnswer: "stdio.h",
    },
    {
      question: "C dilinde 'char' ölçegi näçe?",
      options: ["1 bait", "2 bait", "4 bait", "8 bait"],
      correctAnswer: "1 bait",
    },
    {
      question: "C dilinde konstantany nädip yglan edýäris?",
      options: ["const", "final", "immutable", "define"],
      correctAnswer: "const",
    },
    {
      question:
        "C dilinde gurluş agzalaryna elýeterlilik üçin haýsy operator ulanylýar?",
      options: [".", "->", "&", "::"],
      correctAnswer: ".",
    },
    {
      question: "'sizeof' operatory näme edýär?",
      options: [
        "Üýtgeýjiniň ölçegini yzyna gaýtarýar",
        "Üýtgeýjiniň gymmatyny yzyna gaýtarýar",
        "Üýtgeýjiniň ölçegini kesgitleýär",
        "Üýtgeýji üçin ýatlaýyş üpjün edýär",
      ],
      correctAnswer: "Üýtgeýjiniň ölçegini yzyna gaýtarýar",
    },
    {
      question: "C dilinde hatlary okamak üçin haýsy funksiýa ulanylýar?",
      options: ["scanf()", "gets()", "fgets()", "read()"],
      correctAnswer: "fgets()",
    },
    {
      question: "C dilinde dogry setir literaly haýsy?",
      options: ["'Hello'", "'Hello World!'", '"Hello World!"', "Hello World!"],
      correctAnswer: '"Hello World!"',
    },
    {
      question: "C dilinde görkeziji (pointer) barada dogry maglumat haýsy?",
      options: [
        "Görkeziji üýtgeýjiniň ýadynda saklanýan salgysyny saklaýar",
        "Görkeziji üýtgeýjiniň gymmatyny saklaýar",
        "Görkeziji null bolup bilmez",
        "Görkezijiler diňe sanawlar bilen ulanylýar",
      ],
      correctAnswer:
        "Görkeziji üýtgeýjiniň ýadynda saklanýan salgysyny saklaýar",
    },
    {
      question: "main() funksiýasyndaky 'return 0;' näme aňladýar?",
      options: [
        "Programma üstünlikli ýerine ýetirildi",
        "Programmada ýalňyşlyk bar",
        "Programmanyň ýerine ýetirilişi tamamlanmady",
        "Programma gijikdirildi",
      ],
      correctAnswer: "Programma üstünlikli ýerine ýetirildi",
    },
    {
      question:
        "C dilinde dinamik ýatlamany bölmek üçin haýsy funksiýa ulanylýar?",
      options: ["malloc()", "new()", "calloc()", "alloc()"],
      correctAnswer: "malloc()",
    },
    {
      question: "C dilinde faýl açmak üçin haýsy funksiýa ulanylýar?",
      options: ["open()", "create()", "fopen()", "file_open()"],
      correctAnswer: "fopen()",
    },
    {
      question: "C dilinde hatlary ýazmak üçin haýsy funksiýa ulanylýar?",
      options: ["puts()", "write()", "fputs()", "printf()"],
      correctAnswer: "fputs()",
    },
    {
      question:
        "C dilinde strukturanyň ýa-da unionyň görnüşini belläp bilýän keyword?",
      options: ["struct", "type", "union", "enum"],
      correctAnswer: "struct",
    },
    {
      question: "C dilinde birleşdirilen programmalary nädip döretmeli?",
      options: ["linker", "compiler", "assembler", "preprocessor"],
      correctAnswer: "linker",
    },
    {
      question: "C dilinde wektory dolandyrmak üçin haýsy tip ulanylýar?",
      options: ["vector", "array", "list", "deque"],
      correctAnswer: "array",
    },
    {
      question: "C dilinde funksiýanyň deklarasiýasy nädip ýazylýar?",
      options: [
        "funksiýa ady we parametrler",
        "funksiýa ady, parametrler, we täsir edýän görnüşi",
        "funksiýa ady we türler",
        "funksiýa ady we argumentler",
      ],
      correctAnswer: "funksiýa ady, parametrler, we täsir edýän görnüşi",
    },
    {
      question: "C dilinde yzygiderli operatory haýsy?",
      options: ["++", "--", "+", "="],
      correctAnswer: "++",
    },
    {
      question: "C dilinde 'int' we 'long' arasynda tapawut nämede?",
      options: [
        "'int' hasaplamalar üçin, 'long' has köp sanly maglumat üçin",
        "'int' has köp sanly maglumat üçin",
        "'long' has ýokary sanly maglumat üçin",
        "'long' has ýükli programmalar üçin",
      ],
      correctAnswer:
        "'int' hasaplamalar üçin, 'long' has köp sanly maglumat üçin",
    },
    {
      question: "C dilinde düýp operatory haýsy?",
      options: ["%", "^", "&", "~"],
      correctAnswer: "%",
    },
  ],
  cplusplus: [
    {
      question: "C++ dilini kim döretdi?",
      options: [
        "Bjarn Stroustrup",
        "Dennis Riççi",
        "Jeýms Gosling",
        "Ken Tompson",
      ],
      correctAnswer: "Bjarn Stroustrup",
    },
    {
      question: "C++ diliniň çeşme faýlynyň giňeltmesi haýsy?",
      options: [".c", ".cpp", ".class", ".java"],
      correctAnswer: ".cpp",
    },
    {
      question: "C++ dilinde üýtgeýjini nädip yglan edýäris?",
      options: ["var x = 10;", "int x = 10;", "int 10 = x;", "x : int = 10;"],
      correctAnswer: "int x = 10;",
    },
    {
      question: "C++ dilinde görkeziji nädip yglan edilýär?",
      options: ["int *p;", "int p*;", "pointer int p;", "p : int*;"],
      correctAnswer: "int *p;",
    },
    {
      question: "C++ dilinde giriş/çykmak funksiýalary üçin haýsy faýl gerek?",
      options: ["<stdio.h>", "<iostream>", "<stdlib.h>", "<math.h>"],
      correctAnswer: "<iostream>",
    },
    {
      question:
        "C++ dilinde obýekt ugruna gönükdirilen programmalaşdyrmagyň aýratynlyklary haýsy?",
      options: [
        "Inkapsulýasiýa",
        "Miras alma",
        "Polimorfizm",
        "Bularyň hemmesi",
      ],
      correctAnswer: "Bularyň hemmesi",
    },
    {
      question: "C++ dilinde 'private' elýeterlilik derejesi nämäni aňladýar?",
      options: [
        "Synp içinde elýeterli",
        "Hemme ýerde elýeterli",
        "Miras alýan synp üçin elýeterli",
        "Hiç ýerde elýeterli däl",
      ],
      correctAnswer: "Synp içinde elýeterli",
    },
    {
      question:
        "C++ dilinde dinamik ýatlamany bölmek üçin haýsy funksiýa ulanylýar?",
      options: ["malloc()", "calloc()", "new", "free"],
      correctAnswer: "new",
    },
    {
      question: "C++ dilinde 'this' görkeziji näme edýär?",
      options: [
        "Häzirki obýektiň salgysyny görkezýär",
        "Ýatlamany boşadýar",
        "Faýly açýar",
        "Funksiýanyň adyny görkezýär",
      ],
      correctAnswer: "Häzirki obýektiň salgysyny görkezýär",
    },
    {
      question: "C++ dilinde miras almak näme?",
      options: [
        "Synpyň beýleki synpdaky aýratynlyklaryny miras almagy",
        "Funksiýany çagyrmak",
        "Üýtgeýji yglan etmek",
        "Faýlyň mazmunyny çap etmek",
      ],
      correctAnswer: "Synpyň beýleki synpdaky aýratynlyklaryny miras almagy",
    },
    {
      question: "C++ dilinde görkeziji (pointer) näme?",
      options: [
        "Üýtgeýjiniň ýadynda saklanýan salgysy",
        "Üýtgeýjiniň gymmaty",
        "Faýlyň ady",
        "Funksiýanyň tipi",
      ],
      correctAnswer: "Üýtgeýjiniň ýadynda saklanýan salgysy",
    },
    {
      question: "C++ dilinde 'virtual' açar sözi näme üçin ulanylýar?",
      options: [
        "Polimorfizmi üpjün etmek üçin",
        "Miras almak üçin",
        "Ýatlamany boşatmak üçin",
        "Üýtgeýji yglan etmek üçin",
      ],
      correctAnswer: "Polimorfizmi üpjün etmek üçin",
    },
    {
      question: "C++ dilinde 'cout' näme üçin ulanylýar?",
      options: [
        "Çykaryş üçin",
        "Giriş üçin",
        "Ýatlamany bölmek üçin",
        "Ýatlamany boşatmak üçin",
      ],
      correctAnswer: "Çykaryş üçin",
    },
    {
      question: "C++ dilinde 'try-catch' näme üçin ulanylýar?",
      options: [
        "Ýalňyşlyklary dolandyrmak üçin",
        "Funksiýa çagyrmak üçin",
        "Miras almak üçin",
        "Synpy yglan etmek üçin",
      ],
      correctAnswer: "Ýalňyşlyklary dolandyrmak üçin",
    },
    {
      question: "C++ dilinde 'const' näme aňladýar?",
      options: [
        "Üýtgeýji üýtgemez",
        "Üýtgeýji dinamiki",
        "Funksiýa statiki",
        "Ýatlama boş",
      ],
      correctAnswer: "Üýtgeýji üýtgemez",
    },
    {
      question: "C++ dilinde 'friend' açar sözi nämäni aňladýar?",
      options: [
        "Synpyň beýleki synp bilen dostlukly elýeterligini üpjün edýär",
        "Miras almaýar",
        "Ýalňyşlyk çykarýar",
        "Ýatlama üpjün edýär",
      ],
      correctAnswer:
        "Synpyň beýleki synp bilen dostlukly elýeterligini üpjün edýär",
    },
    {
      question: "C++ dilinde 'namespace' näme üçin ulanylýar?",
      options: [
        "Ad çaknyşyklarynyň öňüni almak üçin",
        "Funksiýalary yglan etmek üçin",
        "Miras almak üçin",
        "Ýatlamany bölmek üçin",
      ],
      correctAnswer: "Ad çaknyşyklarynyň öňüni almak üçin",
    },
    {
      question: "C++ dilinde 'sizeof' näme edýär?",
      options: [
        "Üýtgeýjiniň ölçegini yzyna berýär",
        "Faýly açýar",
        "Synpy ýatyrmak",
        "Görkezijini kesgitleýär",
      ],
      correctAnswer: "Üýtgeýjiniň ölçegini yzyna berýär",
    },
    {
      question: "C++ dilinde 'default' açar sözi nämäni aňladýar?",
      options: [
        "Standard ýagdaý",
        "Üýtgeýji",
        "Miras almak",
        "Ýalňyşlyk dolandyryşy",
      ],
      correctAnswer: "Standard ýagdaý",
    },
    {
      question: "C++ dilinde 'delete' operatory näme edýär?",
      options: [
        "Ýatlamany boşadýar",
        "Ýatlamany üpjün edýär",
        "Funksiýany çagyrýar",
        "Obýekti çap edýär",
      ],
      correctAnswer: "Ýatlamany boşadýar",
    },
  ],
  go: [
    {
      question: "Go programmirleme dilini kim işläp düzdi?",
      options: [
        "Robert Griesemer, Rob Paýk we Ken Tompson",
        "Dennis Riççi",
        "Guido wan Rossum",
        "Jeýms Gosling",
      ],
      correctAnswer: "Robert Griesemer, Rob Paýk we Ken Tompson",
    },
    {
      question: "Go dilinde üýtgeýjini yglan etmek üçin haýsy nyşan ulanylýar?",
      options: ["=", "var", ":", ":="],
      correctAnswer: ":=",
    },
    {
      question: "Go dilinde näsazlyk bilen işlemek üçin haýsy ulanýarlar?",
      options: ["try-catch", "throws", "defer", "panic"],
      correctAnswer: "panic",
    },
    {
      question: "Go dilinde yglan edilmedik üýtgeýjiniň standart gymmaty näme?",
      options: ["null", "0", "anyk däl", "nil"],
      correctAnswer: "nil",
    },
    {
      question:
        "Go dilinde bir tizlikli ýüze çykarýan san üçin haýsy maglumat görnüşi ulanylýar?",
      options: ["float32", "float64", "double", "float"],
      correctAnswer: "float32",
    },
    {
      question: "Täze Goroutine başlatmak üçin haýsy nyşan ulanylýar?",
      options: ["go()", "start()", "goroutine()", "run()"],
      correctAnswer: "go()",
    },
    {
      question: "'defer' söz düzüminiň maksady näme?",
      options: [
        "Funksiýany goroutin gutarýança gijikdirýär",
        "Programma gutarýança funksiýany gijikdirýär",
        "Baş funksiýa dolanýança funksiýany gijikdirýär",
        "Programmanyň başlangyç nokadynda funksiýany gijikdirýär",
      ],
      correctAnswer: "Funksiýany goroutin gutarýança gijikdirýär",
    },
    {
      question: "Go dilinde 'main' funksiýasynyň maksady näme?",
      options: [
        "Programmanyň başlangyç nokadyny dolandyrýan funksiýa",
        "Ýatlaýyş üpjünçiligi üçin funksiýa",
        "Näsazlyklar bilen işlemek üçin funksiýa",
        "Ulanyjy girişleri üçin funksiýa",
      ],
      correctAnswer: "Programmanyň başlangyç nokadyny dolandyrýan funksiýa",
    },
    {
      question:
        "Go dilinde I/O operasiýalary formatlamak üçin haýsy paket ulanylýar?",
      options: ["fmt", "io", "os", "sys"],
      correctAnswer: "fmt",
    },
    {
      question: "Go dilinde haýsy maglumat görnüşi esasy maglumat görnüşi DÄL?",
      options: ["string", "float", "map", "channel"],
      correctAnswer: "float",
    },
    {
      question: "Go dilinde massiw nädip yglan edilýär?",
      options: [
        "var arr [10]int",
        "arr := [10]int{}",
        "array arr[]",
        "arr int[10]",
      ],
      correctAnswer: "var arr [10]int",
    },
    {
      question:
        "Go dilinde funkcional maglumat görnüşini haýsy nyşan görkezýär?",
      options: ["func", "fn", "def", "function"],
      correctAnswer: "func",
    },
    {
      question: "Go dilinde 'slice' näme üçin ulanylýar?",
      options: [
        "Dinamiki massiwleri dolandyrmak",
        "Statiw maglumatlary saklamak",
        "Maglumat görnüşlerini öwürmek",
        "Funksiýa çagyrmak",
      ],
      correctAnswer: "Dinamiki massiwleri dolandyrmak",
    },
    {
      question: "Go dilinde 'map' näme?",
      options: [
        "Açar-gymmat bilen baglanyşykly maglumatlar struktury",
        "Sanlaryň tertipli toplumy",
        "Sanlar bilen maglumatlaryň sanawy",
        "Müňlükler bilen işlemek üçin maglumat görnüşi",
      ],
      correctAnswer: "Açar-gymmat bilen baglanyşykly maglumatlar struktury",
    },
    {
      question: "Go dilinde 'goroutine' näme?",
      options: [
        "Ýeňil agramly iş akymyny dolandyrýan funksiýa",
        "Wirtual maşyn",
        "Hasaplamanyň ýüküni paýlaýan algoritm",
        "Fiziki maşynyň prosessory",
      ],
      correctAnswer: "Ýeňil agramly iş akymyny dolandyrýan funksiýa",
    },
    {
      question: "Go dilinde synag etmek üçin haýsy kitap ulanylýar?",
      options: ["testing", "testify", "check", "assert"],
      correctAnswer: "testing",
    },
    {
      question: "Go dilinde gysga görnüşli yglan nädip amala aşyrylýar?",
      options: ["a := 5", "a = 5", "var a = 5", "let a = 5"],
      correctAnswer: "a := 5",
    },
    {
      question: "Go dilinde 'package' näme üçin ulanylýar?",
      options: [
        "Kod bölümlerini toparlamak üçin",
        "Maglumatlary saklamak üçin",
        "Maglumatlary köçelerine paýlamak üçin",
        "Kod formatyny üýtgetmek üçin",
      ],
      correctAnswer: "Kod bölümlerini toparlamak üçin",
    },
    {
      question: "Go dilinde kanallar näme üçin ulanylýar?",
      options: [
        "Goroutinleriň arasynda maglumat paýlaşmak üçin",
        "Funksiýalaryň arasynda maglumat geçirmek üçin",
        "Kompilyasiýa prosesini başlatmak üçin",
        "Ýatlamany dolandyrmak üçin",
      ],
      correctAnswer: "Goroutinleriň arasynda maglumat paýlaşmak üçin",
    },
    {
      question: "Go dilinde 'struct' näme?",
      options: [
        "Ulanyjy tarapyndan kesgitlenen maglumat gurluşy",
        "Sanlaryň sanawy",
        "Maglumat görnüşini üýtgetmek üçin",
        "Ýatlamany dolandyrmak üçin",
      ],
      correctAnswer: "Ulanyjy tarapyndan kesgitlenen maglumat gurluşy",
    },
  ],
};

export default questions;
