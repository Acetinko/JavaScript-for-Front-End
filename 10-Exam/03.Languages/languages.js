function renderHtml() {
    // Render .top
    let topFragment = document.createDocumentFragment();

    $("<div>")
        .addClass("languages")
        .append(
            $("<span>")
                .attr("id", "bg")
                .text("BG"),
            $("<span>").text(" / "),
            $("<span>")
                .attr("id", "en")
                .addClass("hidden")
                .text("EN")
        )
        .appendTo(topFragment);

    $("<h1>")
        .attr("id", "heading")
        .text("The most used programming languages")
        .appendTo(topFragment);

    $(".top").append(topFragment);

    // First Article
    let firstArticleFragment = document.createDocumentFragment();

    $("<h2>")
        .addClass("article-header")
        .text("JavaScript")
        .appendTo(firstArticleFragment);

    $("<div>")
        .addClass("js-container")
        .append(
            $("<img>")
                .addClass("js-logo")
                .attr({
                    src: "js.png",
                    alt: "js"
                }),
            $("<p>")
                .addClass("js-info")
                .text(
                    "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. It is used to make dynamic webpages interactive and provide online programs, including video games. The majority of websites employ it[citation needed], and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA."
                )
        )
        .appendTo(firstArticleFragment);

    $(".first-article").append(firstArticleFragment);

    // Second Article
    let secondArticleFragment = document.createDocumentFragment();

    $("<h2>")
        .addClass("article-header")
        .text("C#")
        .appendTo(secondArticleFragment);

    $("<div>")
        .addClass("csharp-container")
        .append(
            $("<p>")
                .addClass("csharp-info")
                .text(
                    "C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative,functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with Visual Studio 2017 version 15.5."
                ),
            $("<img>").attr({
                src: "csharp.jpg",
                alt: "csharp-logo"
            })
        )
        .appendTo(secondArticleFragment);

    $(".second-article").append(secondArticleFragment);

    // Last  Article
    let lastArticleFragment = document.createDocumentFragment();

    $("<h2>")
        .addClass("article-header")
        .text("Java")
        .appendTo(lastArticleFragment);

    $("<div>")
        .addClass("java-container")
        .append(
            $("<img>")
                .addClass("js-logo")
                .attr({
                    src: "java-logoo.png",
                    alt: "java-logo"
                }),
            $("<p>")
                .addClass("java-info")
                .text(
                    'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use, particularly for client-server web applications, with a reported 9 million developers. Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems\' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.'
                )
        )
        .appendTo(lastArticleFragment);

    $(".last-article").append(lastArticleFragment);
}

function loadEvents() {
    $("#bg").click(function() {
        // Change Styles
        $("#bg").css({
            color: "purple",
            "font-style": "italic"
        });
        $("#en").css({
            color: "black",
            "font-style": "normal"
        });

        // Change Contents
        $("#heading").text("Най-използваните езици за програмиране");
        $(".js-info").text(
            "JavaScript (чете се джаваскрипт) е интерпретируем език за програмиране, разпространяван с повечето Уеб браузъри. Поддържа обектно-ориентиран и функционален стил на програмиране. Създаден е в Netscape през 1995 г. Най-често се прилага към HTML-а на Интернет страница с цел добавяне на функционалност и зареждане на данни. Може да се ползва също за писане на сървърни скриптове JSON, както и за много други приложения. JavaScript не трябва да се бърка с Java, съвпадението на имената е резултат от маркетингово решение на Netscape. Javascript е стандартизиран под името EcmaScript."
        );
        $(".csharp-info").text(
            "C# (C Sharp, произнася се Си Шарп) е обектно-ориентиран език за програмиране, разработен от Microsoft, като част от софтуерната платформа .NET. Стремежът още при създаването на C# езика е бил да се създаде един прост, модерен, обектно-ориентиран език с общо предназначение. Основа за C# са C++, Java и донякъде езици като Delphi, VB.NET и C. Той е проектиран да балансира мощност (C++) с възможност за бързо разработване (Visual Basic и Java). Те представляват съвкупност от дефиниции на класове, които съдържат в себе си методи, а в методите е разположена програмната логика – инструкциите, които компютърът изпълнява. Програмите на C# представляват един или няколко файла с разширение .cs., в които се съдържат дефиниции на класове и други типове. Тези файлове се компилират от компилатора на C# (csc) до изпълним код и в резултат се получават асемблита – файлове със същото име, но с различно разширение (.exe или .dll)."
        );
        $(".java-info").text(
            "Java или Джава е обектно-ориентиран език за програмиране. Кодът, написан на Java, не се компилира до машинен код за определен процесор, а до специфичен за езика код, наречен байт код. Поради това за изпълнението на програма, написана на Java, е необходима т. нар. виртуална машина (на английски: Java Virtual Machine)."
        );
    });

    $("#en").click(function() {
        // Change Styles
        $("#en").css({
            color: "purple",
            "font-style": "italic"
        });
        $("#bg").css({
            color: "black",
            "font-style": "normal"
        });

        // Change Contents
        $("#heading").text("The most used programming languages");
        $(".js-info").text(
            "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. It is used to make dynamic webpages interactive and provide online programs, including video games. The majority of websites employ it[citation needed], and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA."
        );
        $(".csharp-info").text(
            "C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative,functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with Visual Studio 2017 version 15.5."
        );
        $(".java-info").text(
            'Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use, particularly for client-server web applications, with a reported 9 million developers. Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems\' Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.'
        );
    });
}

$(document).ready(function() {
    renderHtml();
    loadEvents();
});
