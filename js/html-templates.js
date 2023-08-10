
/* ============== Templates for settengs menu =============== */


/**
 * Template for settings.
 * @returns The Html code for the first setting page
 */
function createHtmlOpenSettings() {
    return /*html*/ `
    <div class="overview" id="overview">
        <h2>Settings</h2>
        <span class="headline-volume">volume</span>
        <div class="slider-container">
           <img class="sound-icon" id="sound-icon" src="img/assests/sound_on.png" alt="Sound">
           <input type="range" id="volume-slider" min="0" max="100" value="50" step="1">
           <output id="volume-value">50</output>
        </div>
        <div onclick="backToStart()" class="back-to-start-container" >
            <img src="img/assests/back-to-start.png" alt="Exit">
            <p>Back to start</p>
        </div>
        <div onclick="toggleFullscreen()" class="fullscreen-container" id="fullscreen-setting">
           <img src="img/assests/fullscreen-enter.png" alt="Fullscreen">
           <p>Enter Fullscreen</p>
        </div>
        <div onclick="openInstruction()" class="instruction-container">
           <img src="img/assests/info.png" alt="Info">
           <p>Instruction</p>
        </div>
        <div onclick="openCredits()" class="credits-container">
           <img src="img/assests/copyright.png" alt="Copyright">
           <p>Credits</p>
        </div>
    </div>`;
}


/**
 * Template for settings/instruction.
 * @returns  The Html for the first instruction page
 */
function createHtmlOpenInstruction() {
    return /*html*/`
    <div class="instruction-menu">
        <div class="button-menu">
            <button class="instruction-button" onclick="showStory()">Story</button>
            <button class="instruction-button" onclick="showAttack()">Attack</button>
            <button class="instruction-button" onclick="showGather()">Gather</button>
            <button class="instruction-button" onclick="showKeys()">Keys</button>
        </div>
        <div class="instruction-info" id="instruction-info">
            <h2>Story</h2>
            <div>Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch attacks.
            On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale.
            Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his defenses.
            With each hit, the whale becomes more and more vulnerable.
            In the end, Sharke triumphs, restoring the balance of the ocean.
            </div>
        </div>
    </div>`;
}


/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/story
 */
function createhtmlShowStory() {
    return /*html*/`
    <div>
        <h2>Story</h2>
        <div>Sharke, the brave shark, swims through the sea. He fights jellyfish and puffer fish with bubble and fin punch attacks.
            On his mission he collects gift bottles and coins. Finally, he faces the fearsome final boss, a whale.
            Sharkie cleverly uses the poison bottles as weapons by shooting him with poison bubbles and weakening his defenses.
            With each hit, the whale becomes more and more vulnerable.
            In the end, Sharke triumphs, restoring the balance of the ocean.
        </div>
    </div>`
}



/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/attack
 */
function createHtmlShowAttack() {
    return /*html*/`
    <div class="attack-container">
        <h2>Attack</h2>
        <div class="attack">
            <img  src="img/assests/sharkie-normal-bubble.png" alt="poisoned-bubble">
            <span>Use the bubble attack against <br> the jellyfish</span></div>
        <div class="attack">
             <img  src="img/assests/sharkie-fin-slap.png" alt="Fin-slap">
            <span>Use the fin slap attack against <br> the bubble fishes</span></div>
        <div class="attack">
            <img src="img/assests/sharkie-posion-bubble.png" alt="poisoned-bubble">
            <span> Use the poisoned bubble attack <br> against the whale</span>
        </div>
    </div>`
}


/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/gather
 */
function createHtmlShowGather() {
    return /*html*/`
    <div class="gather-container">
        <h2>Gather</h2>         
        <h3>Coins</h3>
        <div class="gather">
            <img src="img/4. Marcadores/1. Coins/4.png" alt="coin">
            <span>collect at least 5 coins <br> for an extra life</span>
        </div>
        <h3>poisoned bottles</h3>
        <div class="gather">
            <img src="img/4. Marcadores/Posión/Animada/1.png" alt="bottle">
            <span>Collecting bottles to blow <br> poisoned bubbles</span>
        </div>  
    </div>`
}


/**
 *  Template for settings/instruction.
 * @returns The Html for instrution info/story
 */
function createHTMLShowKeys() {
    return /*html*/`
    <div class="key-container">
        <h2>Keys</h2>
        <figure class="arrow-keys">
            <div>
                <div class="key-top" >
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-up.png" alt="Key up"></div>
                </div>
                <div class="key-bottom">
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-left.png" alt="key left"></div>
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-down.png" alt="Key down"></div>
                    <div class="instruction-key"><img src="img/assests/settings/in-arrow-right.png" alt="Key right"></div>
                </div>
            </div>
            <figcaption>Use the arrow-Keys <br> to move Sharkie</figcaption>  
        </figure>
        <figure>
            <div class="instruction-key">Space</div>
            <figcaption>Press <kbd>Space</kbd> for fin slap attack</figcaption>
        </figure>
        <figure>
            <div class="instruction-key">D</div>
            <figcaption>Press <kbd>D</kbd> for normal bubble attack </figcaption>
        </figure>
        <figure>
            <div class="instruction-key">F</div>
            <figcaption>Press <kbd>F</kbd> for poisened bubble attack</figcaption>
        </figure>
    </div>`
}


/**
 *  Template for media credits.
 * @returns the Html for media credits
 */
function createHtmlOpenCredits() {
    return /*html*/`
    <div class="credits-content">
        <p>Music: Aquatic Ambiance by Thunder Hawk (Official)</p>
        <p>Source: <a href="https://soundcloud.com/thunder_hawk/aquatic-ambiance">https://soundcloud.com/thunder_hawk/aquatic-ambiance</a></p>
        <p>License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported (CC BY 3.0)</a></p>
        <p>Music obtained for free with a link from <a href="https://starfrosch.com">https://starfrosch.com</a></p>
        <p>Background image: <a href="https://freepik.com">https://freepik.com</a></p>
    </div>`
}


/**
 *  Template for fullscreen setting point.
 * @returns The Html for setting point normal screen/exit fullscreen
 */
function createHtmlEnterFullscreen() {
    return /*html*/ `
    <img src="img/assests/fullscreen-exit.png" alt="Fullscreen ">
     <p>Exit fullscreen</p>`
}


/**
 *  Template for fullscreen setting point.
 * @returns The Html for setting point normal screen/enter fullscreen
 */
function createHtmlExitFullscreen() {
    return /*html*/ `
    <img src="img/assests/fullscreen-enter.png" alt="Normalscreen">
      <p>Enter fullscreen</p>`;
}


/**
 * Template for Imprint
 * @returns the Html for the Imprint
 */

function createHtmlImprint() {
    return /*html*/`
    <div class="imprint-container">
        <div class="imprint-headline">
            <h1>Impressum</h1>
            <img onclick="closeLegalNotice()" src="img/assests/x-mark.png" alt="X-Mark">
        </div>
        <p>Angaben gemäß § 5 TMG</p>
        <p>Christoph Haase <br>
            Eiserweg 9<br>
            34576 <br>
        </p>
        <p> <strong>Vertreten durch: </strong><br>
            Christoph Haase<br>
        </p>
        <p><strong>Kontakt:</strong> <br>
            Telefon: 0176-20594195<br>
            E-Mail: <a href='mailto:max@muster.de'>christophhaase2@gmx.de</a><br></p>
            Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a
            href="https://www.kanzlei-hasselbach.de/standorte/frankfurt/" rel="nofollow">Kanzlei Hasselbach,
            Frankfurt</a>
    </div>`
}


/**
 * Template for privacy policy
 * @returns the Html for the privacy policy
 */
function createHtmlPrivacyPolicy() {
    return/*html*/` 
    <div class="privacy-container">
        <div class="privacy-headline">
            <h1>Datenschutzerklärung</h1>
            <img onclick="closeLegalNotice()" src="img/assests/x-mark.png" alt="X-Mark">
        </div>
        <p>
            Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
            EU-Datenschutzgrundverordnung (DSGVO), ist:
        </p>
        <p>Christoph Haase</p>
        <h2>Ihre Betroffenenrechte</h2>
        <p>
            Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
            können Sie jederzeit folgende Rechte ausüben:
        </p>
        <ul>
            <li>
                Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung
                (Art. 15 DSGVO),
            </li>
            <li>
                Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),
            </li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
            <li>
                Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund
                gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),
            </li>
            <li>
                Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)
                und
            </li>
            <li>
                Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt
                haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).
            </li>
        </ul>
        <p>
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
            jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
        <p>
            Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde
            wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres
            Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige
            Behörde.
        </p>
        <p>
            Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit
            Anschrift finden Sie unter:
            <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" target="_blank"
                rel="noopener nofollow">https://www.bfdi.bund.de</a>.
        </p>
        <p></p>
        <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
        <h3>Art und Zweck der Verarbeitung:</h3>
        <p>
            Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht
            registrieren oder anderweitig Informationen übermitteln, werden
            automatisch Informationen allgemeiner Natur erfasst. Diese Informationen
            (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das
            verwendete Betriebssystem, den Domainnamen Ihres
            Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
        </p>
        <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
        <ul>
            <li>
                Sicherstellung eines problemlosen Verbindungsaufbaus der Website,
            </li>
            <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
            <li>zur Optimierung unserer Website.</li>
        </ul>
        <p>
            Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu
            ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert
            statistisch ausgewertet, um unseren Internetauftritt und die
            dahinterstehende Technik zu optimieren.
        </p>
        <h3>Rechtsgrundlage und berechtigtes Interesse:</h3>
        <p>
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
            unseres berechtigten Interesses an der Verbesserung der Stabilität und
            Funktionalität unserer Website.
        </p>
        <h3>Empfänger:</h3>
        <p>
            Empfänger der Daten sind ggf. technische Dienstleister, die für den
            Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig
            werden.
        </p>
        <p></p>
        <h3>Speicherdauer:</h3>
        <p>
            Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht
            mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung
            der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung
            beendet ist.
        </p>
        <p>
            Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens
            14 Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In
            diesem Fall werden die IP-Adressen der Nutzer anonymisiert, sodass eine
            Zuordnung des aufrufenden Clients nicht mehr möglich ist.
        </p>
        <p></p>
        <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
        <p>
            Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder
            gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist
            jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht
            gewährleistet. Zudem können einzelne Dienste und Services nicht
            verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch
            ausgeschlossen.
        </p>
        <p></p>
        <h2>Kontaktformular</h2>
        <h3>Art und Zweck der Verarbeitung:</h3>
        <p>
            Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen
            Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer
            validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der
            Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die
            Angabe weiterer Daten ist optional.
        </p>
        <h3>Rechtsgrundlage:</h3>
        <p>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
            auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f
            DSGVO).
        </p>
        <p>
            Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine
            unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben
            werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche
            Anschlussfragen gespeichert.
        </p>
        <p>
            Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen,
            erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten
            zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b
            DSGVO).
        </p>
        <h3>Empfänger:</h3>
        <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
        <p></p>
        <h3>Speicherdauer:</h3>
        <p>
            Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.
        </p>
        <p>
            Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den
            gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach
            Ablauf dieser Fristen.
        </p>
        <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
        <p>
            Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir
            können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen,
            Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.
        </p>
        <p></p>
        <h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
        <p>
            Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend
            darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der
            Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA;
            nachfolgend „Google“) zur Darstellung von Schriften.
        </p>
        <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            <a href="https://developers.google.com/fonts/faq" rel="noopener nofollow"
                target="_blank">developers.google.com</a>
            und in der Datenschutzerklärung von Google:
            <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow"
                target="_blank">www.google.com</a>.
        </p>
        <p></p>
        <h2>SSL-Verschlüsselung</h2>
        <p>
            Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden
            wir dem aktuellen Stand der Technik entsprechende
            Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
        </p>
        <p></p>
        <hr />
        <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
        <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
        <p>
            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender
            personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO
            (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt,
            Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung
            gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
        </p>
        <p>
            Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht
            mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe
            für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
            Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen.
        </p>
        <h3>Empfänger eines Widerspruchs</h3>
        <p></p>
        <hr />
        <h2>Änderung unserer Datenschutzbestimmungen</h2>
        <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
            stets den aktuellen rechtlichen Anforderungen entspricht oder um
            Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
            z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt
            dann die neue Datenschutzerklärung.
        </p>
        <h2>Fragen an den Datenschutzbeauftragten</h2>
        <p>
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
            E-Mail oder wenden Sie sich direkt an die für den Datenschutz
            verantwortliche Person in unserer Organisation:
        </p>
        <p></p>
        <p>
            <em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für
                <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank"
                    rel="noopener">externe Datenschutzbeauftragte</a>(Version #2020-09-30).
            </em>
        </p>
    </div>`
}


/**
 * Template for mobile buttons
 * @returns the html for mobile buttons
 */
function createHtmlMobileButtons() {
    return/*html*/`
    <div class="mobile-button-container">
         <div class="key-block">
            <button class="mobile-button" id="btn-up"><img src="img/assests/arrow-up.png"> </button>
            <button class="mobile-button" id="btn-down"><img src="img/assests/arrow-down.png"></button>
        </div>
        <div class="key-block">
            <button class="mobile-button" id="btn-bubble">
                <img src="img/1.Sharkie/4.Attack/Bubble trap/Bubble.png" alt="">
            </button>
            <button class="mobile-button" id="btn-fin-slap">
                <img src="img/assests/fin-slap-icon.png" alt="">
            </button>
            <button class="mobile-button" id="btn-poison-bubble">
                <img src="img/assests/poison-icon.png" alt="">
            </button>
        </div>
        <div class="key-block">
            <button class="mobile-button" id="btn-left">
                <img src="img/assests/arrow-left.png" alt="">
            </button>
            <button class="mobile-button" id=btn-right>
                <img src="img/assests/arrow-right.png" alt="">
            </button>
        </div>
    </div>`

}