import React from 'react'
import Link from 'next/link'

const Disclaimer = () => {
  return (
    <>
      <div className="disclaimer-wrapper m-auto w-full max-w-[1200px] space-y-6 px-2 py-4">
        <h1 className="text-center text-2xl font-bold">Disclaimer</h1>
        <Link href="/" className="legal-link mb-8 block text-center">
          Zurück zur Homepage
        </Link>
        <div>
          <h2>1. Warnhinweis zu Inhalten</h2>
          <p>
            Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden
            mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite
            übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der
            bereitgestellten kostenlosen und frei zugänglichen journalistischen
            Ratgeber und Nachrichten. Die Nutzung dieser Webseiteninhalte
            erfolgt auf eigene Gefahr. Allein durch den Aufruf dieser
            kostenlosen und frei zugänglichen Inhalte kommt keinerlei
            Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande,
            insoweit fehlt es am Rechtsbindungswillen des Anbieters.
          </p>
        </div>
        <div>
          <h2>2. Verlinkungen</h2>
          <p>
            Die Webseite enthält Verlinkungen zu anderen Webseiten
            (&quot;externe Links&quot;). Diese Webseiten unterliegen der Haftung
            der jeweiligen Seitenbetreiber. Bei Verknüpfung der externen Links
            waren keine Rechtsverstöße ersichtlich. Auf die aktuelle und
            künftige Gestaltung der verlinkten Seiten hat der Anbieter keinen
            Einfluss. Die permanente Überprüfung der externen Links ist für den
            Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar.
            Bei Bekanntwerden von Rechtsverstößen werden die betroffenen
            externen Links unverzüglich gelöscht.
          </p>
        </div>
        <div>
          <h2>3. Urheberrecht / Leistungsschutzrecht</h2>
          <div className="space-y-2">
            <p>
              Die auf dieser Webseite durch den Anbieter veröffentlichten
              Inhalte unterliegen dem deutschen Urheberrecht und
              Leistungsschutzrecht. Alle vom deutschen Urheber- und
              Leistungsschutzrecht nicht zugelassene Verwertung bedarf der
              vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
              Rechteinhabers. Dies gilt vor allem für Vervielfältigung,
              Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw.
              Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen
              Medien und Systemen. Dabei sind Inhalte und Rechte Dritter als
              solche gekennzeichnet. Das unerlaubte Kopieren der
              Webseiteninhalte oder der kompletten Webseite ist nicht gestattet
              und strafbar. Lediglich die Herstellung von Kopien und Downloads
              für den persönlichen, privaten und nicht kommerziellen Gebrauch
              ist erlaubt.
            </p>
            <p>
              Diese Website darf ohne schriftliche Erlaubnis nicht durch Dritte
              in Frames oder iFrames dargestellt werden.
            </p>
          </div>
        </div>
        <div>
          <h2>4. Keine Werbung</h2>
          <p>
            Die Verwendung der Kontaktdaten des Impressums zur gewerblichen
            Werbung ist ausdrücklich nicht erwünscht, es sei denn der Anbieter
            hatte zuvor seine schriftliche Einwilligung erteilt oder es besteht
            bereits eine Geschäftsbeziehung. Der Anbieter und alle auf dieser
            Website genannten Personen widersprechen hiermit jeder kommerziellen
            Verwendung und Weitergabe ihrer Daten.
          </p>
        </div>
        <div>
          <h2>5. Besondere Nutzungsbedingungen</h2>
          <p>
            Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
            von den vorgenannten Nummern 1. bis 4. abweichen, wird an
            entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem
            Falle gelten im jeweiligen Einzelfall die besonderen Bedingungen.
          </p>
        </div>
        <p>
          Erstellt mit{' '}
          <a
            href="https://www.fachanwalt.de/disclaimer-vorlage/"
            target="_blank"
          >
            Disclaimer Vorlage von fachanwalt.de
          </a>
        </p>
      </div>
    </>
  )
}

export default Disclaimer
