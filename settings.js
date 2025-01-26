// Wenn das Dokument geladen ist, überprüfen wir, ob Einstellungen gespeichert wurden
document.addEventListener("DOMContentLoaded", function() {
    const settings = JSON.parse(localStorage.getItem("settings")) || {};

    // Voreinstellungen eintragen
    document.getElementById("displayMode").value = settings.displayMode || "both";
    document.getElementById("numTasks").value = settings.numTasks || 25;
    document.getElementById("timePerTask").value = settings.timePerTask || 30;
    document.getElementById("maxAdd").value = settings.maxAdd || 3000;
    document.getElementById("maxSub").value = settings.maxSub || 3000;
    document.getElementById("maxMultiplier").value = settings.maxMultiplier || 99;
    document.getElementById("maxDividend").value = settings.maxDividend || 999;
    document.getElementById("maxDivisor").value = settings.maxDivisor || 99;
    document.getElementById("maxSquare").value = settings.maxSquare || 30;
    document.getElementById("maxCube").value = settings.maxCube || 10;
    document.getElementById("maxSquareRoot").value = settings.maxSquareRoot || 30;
    document.getElementById("maxCubeRoot").value = settings.maxCubeRoot || 10;

    // Aktivierung der verschiedenen Aufgabentypen
    document.getElementById("ShowTimer").checked = settings.includeAdd !== undefined ? settings.includeAdd : false;
    document.getElementById("ShowResult").checked = settings.includeAdd !== undefined ? settings.includeAdd : false;
    document.getElementById("includeAdd").checked = settings.includeAdd !== undefined ? settings.includeAdd : true;
    document.getElementById("includeSub").checked = settings.includeSub !== undefined ? settings.includeSub : true;
    document.getElementById("includeMultiplication").checked = settings.includeMultiplication !== undefined ? settings.includeMultiplication : true;
    document.getElementById("includeDivision").checked = settings.includeDivision !== undefined ? settings.includeDivision : true;
    document.getElementById("includeSquare").checked = settings.includeSquare !== undefined ? settings.includeSquare : true;
    document.getElementById("includeCube").checked = settings.includeCube !== undefined ? settings.includeCube : true;
    document.getElementById("includeSquareRoot").checked = settings.includeSquareRoot !== undefined ? settings.includeSquareRoot : true;
    document.getElementById("includeCubeRoot").checked = settings.includeCubeRoot !== undefined ? settings.includeCubeRoot : true;
});

// Beim Absenden des Formulars speichern wir die Einstellungen
document.getElementById("settings-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Standard-Absenden des Formulars

    const settings = {
        displayMode: document.getElementById("displayMode").value,
        numTasks: document.getElementById("numTasks").value,
        timePerTask: document.getElementById("timePerTask").value,
        maxAdd: document.getElementById("maxAdd").value,
        maxSub: document.getElementById("maxSub").value,
        maxMultiplier: document.getElementById("maxMultiplier").value,
        maxDividend: document.getElementById("maxDividend").value,
        maxDivisor: document.getElementById("maxDivisor").value,
        maxSquare: document.getElementById("maxSquare").value,
        maxCube: document.getElementById("maxCube").value,
        maxSquareRoot: document.getElementById("maxSquareRoot").value,
        maxCubeRoot: document.getElementById("maxCubeRoot").value,
        ShowTimer: document.getElementById("ShowTimer").checked,
        ShowResult: document.getElementById("ShowResult").checked,
        includeAdd: document.getElementById("includeAdd").checked,
        includeSub: document.getElementById("includeSub").checked,
        includeMultiplication: document.getElementById("includeMultiplication").checked,
        includeDivision: document.getElementById("includeDivision").checked,
        includeSquare: document.getElementById("includeSquare").checked,
        includeCube: document.getElementById("includeCube").checked,
        includeSquareRoot: document.getElementById("includeSquareRoot").checked,
        includeCubeRoot: document.getElementById("includeCubeRoot").checked,
    };

    localStorage.setItem("settings", JSON.stringify(settings)); // Speichern der Einstellungen
    window.location.href = "exercise.html"; // Weiterleiten zur Übung
});
