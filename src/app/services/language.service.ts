import { Injectable } from "@angular/core";
import i18next from 'i18next';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {
    selectedLng = i18next;

    header: { [key: string]: string } = {
        aboutMe: '',
        contact: '',
    };

    aboutMe: { [key: string]: string } = {
        header: '',
        p1: '',
        p2: '',
        p3: '',
    };

    skills: { [key: string]: string } = {
        header: '',
        p1: '',
    };

    portfolio: { [key: string]: string } = {
        p1: '',
    };

    contact: { [key: string]: string } = {
        header: '',
        p1: '',
        p2: '',
        p3: '',
        p3bold: '',
        placeholder1: '',
        placeholder2: '',
        placeholder3: '',
        warn1: '',
        warnRequire1: '',
        warn2: '',
        warnRequire2: '',
        warn3: '',
        warnRequire3: '',
        policy1: '',
        policy2: '',
        policy3: '',
    };

    footer: { [key: string]: string } = {
        imprint: '',
    };

    imprint: { [key: string]: string } = {
        header: '',
        contact: '',
        phone: '',
        mail: '',
        source: '',
    };

    privacyPolicy: { [key: string]: string } = {
        header1: '',
        header2: '',
        header3: '',
        p1: '',
        subheader1: '',
        subheader2: '',
        p2: '',
        subheader3: '',
        p3: '',
        p4: '',
        subheader4: '',
        p5: '',
        subheader5: '',
        p6: '',
        p7: '',
        subheader6: '',
        p8: '',
        p9: '',
        p10: '',
        p11: '',
        p12: '',
        subheader9: '',
        p13: '',
        subheader10: '',
        subheader11: '',
        p14: '',
        p15: '',
        p16: '',
        subheader12: '',
        p17: '',
        phone: '',
        mail: '',
        p18: '',
        subheader13: '',
        p19: '',
        subheader14: '',
        p20: '',
        subheader15: '',
        p21: '',
        subheader16: '',
        p22: '',
        subheader17: '',
        p23: '',
        p24: '',
        subheader18: '',
        p25: '',
        subheader19: '',
        p26: '',
        subheader20: '',
        p27: '',
        subheader21: '',
        p28: '',
        li1: '',
        li2: '',
        li3: '',
        li4: '',
        p29: '',
        subheader22: '',
        p30: '',
        p31: '',
        subheader23: '',
        p32: '',
        subheader24: '',
        subheader25: '',
        p34: '',
        p35: '',
        p36: '',
        subheader26: '',
        p37: '',
        p38: '',
        p39: '',
        source: '',
    };

    constructor() {
        i18next.init({
            lng: 'en',
            debug: false,
            resources: {
                en: {
                    translation: {
                        header: {
                            aboutMe: 'About me',
                            contact: 'Contact',
                        },
                        aboutMe: {
                            header: 'About me',
                            p1: 'Hi there! I am a Frontend Developer with solid experience in Angular and JavaScript. In early 2023, I decided to turn my fascination for programming into a profession by enrolling in training at the Developer Akademie in Munich. It was time to turn my visions into reality!',
                            p2: 'I continuously improved my programming skills by developing various web apps and websites, both independently and as part of a team. In total, I completed more than 10 projects during my time at the Developer Akademie.',
                            p3: 'My experience in the textile industry from 2021 to 2024 equipped me with the systematic approach necessary for managing complex projects with diverse inputs.',
                        },
                        skills: {
                            header: 'My skills',
                            p1: 'I have gained experience in building projects with various frontend technologies and concepts.',
                        },
                        portfolio: {
                            p1: 'The following is a selection of my work - let´s bring it to life!',
                        },
                        contact: {
                            header: 'Contact',
                            p1: 'Got a problem to solve?',
                            p2: 'Contact me through this form. I am interested in hearing from you and contributing to your projects with my work.',
                            p3: 'Need a Frontend developer?',
                            p3bold: 'Contact me!',
                            placeholder1: 'Your name',
                            placeholder2: 'Your e-mail',
                            placeholder3: 'Your message',
                            warn1: 'Your name is required',
                            warnRequire1: 'Please enter 2 or more characters',
                            warn2: 'Your e-mail address is required',
                            warnRequire2: 'Invalid e-mail address',
                            warn3: 'Please enter your message',
                            warnRequire3: 'Please enter 4 or more characters',
                            policy1: 'I´ve read the',
                            policy2: 'privacy policy',
                            policy3: 'and agree to the processing of my data as outlined.',
                        },
                        footer: {
                            imprint: 'Imprint',
                        },
                        imprint: {
                            header: 'Imprint',
                            contact: 'Contact',
                            phone: 'Phone',
                            mail: 'E-mail',
                            source: 'Source',
                        },
                        privacyPolicy: {
                            header1: 'Privacy Policy',
                            header2: '1. Data protection at a glance',
                            header3: 'General Information',
                            p1: 'The following information provides a simple overview of what happens to your personal data when you visit this website.Personal data is any data that can be used to personally identify you.For detailed information on the subject of data protection, please refer to our privacy policy listed below this text.',
                            subheader1: 'Data collection on this website',
                            subheader2: 'Who is responsible for data collection on this website?',
                            p2: 'The data processing on this website is carried out by the website operator. You can find their contact information in the "Information about the responsible party" section of this privacy policy.',
                            subheader3: 'How do we collect your data?',
                            p3: 'Your data is collected by you providing it to us. This may include data such as what you enter into a contact form.',
                            p4: 'Other data is collected automatically or with your consent when you visit the website through our IT systems. These primarily consist of technical data (e.g., internet browser, operating system, or the time of page access). The collection of this data occurs automatically as soon as you enter this website.',
                            subheader4: 'For what purpose do we use your data?',
                            p5: 'A part of the data is collected to ensure the error- free provision of the website.Other data may be used for analyzing your user behavior.',
                            subheader5: 'What rights do you have regarding your data?',
                            p6: 'You have the right to obtain information about the origin, recipients, and purpose of your stored personal data at any time, free of charge. Additionally, you have the right to request the correction or deletion of this data. If you have given consent for data processing, you can revoke that consent at any time for the future. Furthermore, under certain circumstances, you have the right to request the restriction of the processing of your personal data. You also have the right to file a complaint with the relevant supervisory authority.',
                            p7: 'For this purpose, as well as for any further questions regarding data protection, you can contact us at any time.',
                            subheader6: 'Analysis tools and third-party tools',
                            p8: 'During your visit to this website, your surfing behavior may be statistically evaluated.This is primarily done with so - called analysis programs.',
                            p9: 'Detailed information about these analysis programs can be found in the following privacy policy.',
                            p10: 'We host the content of our website with the following provider:',
                            p11: 'Provider is ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf (hereinafter referred to as All-Inkl). For details, please refer to the privacy policy of All-Inkl: ',
                            p12: 'The use of All-Inkl is based on Art. 6(1)(f) GDPR. We have a legitimate interest in presenting our website as reliably as possible. If the corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25(1) TTDSG, insofar as the consent includes the storage of cookies or access to information on the user´s end device(e.g., device fingerprinting) in the sense of TTDSG.The consent can be revoked at any time.',
                            subheader9: 'Order processing',
                            p13: 'We have concluded a contract for order processing(AVV) for the use of the above- mentioned service.This is a legally required agreement that ensures that the provider processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.',
                            subheader10: '3. General and Mandatory Information',
                            subheader11: 'Data Protection',
                            p14: 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the applicable data protection regulations and this privacy policy.',
                            p15: 'When you use this website, various personal data is collected. Personal data refers to information that can personally identify you. This privacy policy explains what data we collect and how we use it.It also clarifies how and for what purpose this occurs.',
                            p16: 'We would like to point out that data transmission over the Internet (e.g., when communicating via email) may have security vulnerabilities. Complete protection of data from access by third parties is not possible.',
                            subheader12: 'Note regarding the responsible entity',
                            p17: 'The responsible entity for data processing on this website is:',
                            phone: 'Phone',
                            mail: 'E-mail',
                            p18: 'The responsible entity is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.).',
                            subheader13: 'Storage duration',
                            p19: 'Unless a more specific storage duration is mentioned within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to exist.If you make a legitimate deletion request or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data(e.g., tax or commercial retention periods); in the latter case, deletion will occur after the expiration of these reasons.',
                            subheader14: 'General information about the legal bases of data processing on this website',
                            p20: 'If you have given consent for data processing, we process your personal data based on Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special categories of data under Art. 9(1) GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, data processing is also based on Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or access to information on your end device (e.g., via device fingerprinting), data processing is additionally based on § 25(1) TTDSG. The consent can be revoked at any time. If your data is necessary for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data based on Art. 6(1)(b) GDPR. Furthermore, we process your data if it is necessary to fulfill a legal obligation based on Art. 6(1)(c) GDPR. Data processing can also be carried out based on our legitimate interest according to Art. 6(1)(f) GDPR. The relevant legal bases for each specific case are provided in the following paragraphs of this privacy policy.',
                            subheader15: 'Recipients of personal data',
                            p21: 'In the course of our business activities, we collaborate with various external entities.In some cases, the transmission of personal data to these external entities is necessary.We only disclose personal data to external entities when it is necessary for contract fulfillment, when legally obligated to do so(e.g., sharing data with tax authorities), when we have a legitimate interest according to Art. 6(1)(f) GDPR in the disclosure, or when another legal basis allows data transfer.When using data processors, we disclose personal data of our customers only based on a valid contract for order processing.In the case of joint processing, a contract for joint processing is concluded.',
                            subheader16: 'Revocation of your consent to data processing',
                            p22: 'Many data processing operations are only possible with your explicit consent. You can revoke your consent at any time. The legality of data processing carried out before the revocation remains unaffected by the revocation.',
                            subheader17: 'Right to object to data collection in specific cases and against direct advertising (Art. 21 GDPR)',
                            p23: 'IF DATA PROCESSING IS BASED ON ART. 6(1)(E) OR(F) GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS.YOU CAN FIND THE RESPECTIVE LEGAL BASIS FOR PROCESSING IN THIS PRIVACY POLICY.IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR THE PROCESSING SERVES TO ASSERT, EXERCISE, OR DEFEND LEGAL CLAIMS(OBJECTION PURSUANT TO ART. 21(1) GDPR).',
                            p24: 'IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR SUCH MARKETING, INCLUDING PROFILING RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).',
                            subheader18: 'Right to lodge a complaint with the supervisory authority',
                            p25: 'In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, especially in the member state of their habitual residence, place of work, or the place of the alleged violation.The right to lodge a complaint is without prejudice to other administrative or judicial remedies.',
                            subheader19: 'Right to data portability',
                            p26: 'You have the right to receive the personal data that we process based on your consent or in fulfillment of a contract in a structured, commonly used, and machine-readable format. If you request the direct transfer of the data to another controller, this will only be done to the extent that it is technically feasible.',
                            subheader20: 'Information, correction, and deletion',
                            p27: 'You have the right, within the framework of the applicable legal provisions, to obtain information about your stored personal data, its origin and recipients, and the purpose of the data processing at any time and free of charge. You also have the right to correct or delete this data, if applicable. For this purpose, as well as for any further questions regarding personal data, you can contact us at any time.',
                            subheader21: 'Right to restriction of processing',
                            p28: 'You have the right to request the restriction of the processing of your personal data. You can contact us at any time to exercise this right. The right to restrict processing exists in the following cases: ',
                            li1: 'If you dispute the accuracy of your personal data stored with us, we usually need time to verify this.During the verification period, you have the right to request the restriction of the processing of your personal data.',
                            li2: 'If the processing of your personal data was/ is done unlawfully, you can request the restriction of data processing instead of deletion.',
                            li3: 'If we no longer need your personal data, but you need it for the exercise, defense, or assertion of legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.',
                            li4: 'If you have objected pursuant to Art. 21(1) GDPR, a balance must be struck between your interests and ours.Until it is determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.',
                            p29: 'If you have restricted the processing of your personal data, except for storage, these data may only be processed with your consent or for the establishment, exercise, or defense of legal claims, or for the protection of the rights of another natural or legal person, or for reasons of important public interest of the European Union or a member state.',
                            subheader22: 'SSL or TLS encryption',
                            p30: 'For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the website operator, this site uses SSL or TLS encryption.You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.',
                            p31: 'When SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.',
                            subheader23: 'Objection to promotional emails',
                            p32: 'The use of contact data published in the context of the imprint obligation for sending unsolicited advertising and information materials is hereby objected to.The operators of the website expressly reserve the right to take legal action in the event of unsolicited sending of promotional information, such as spam emails.',
                            subheader24: '4. Data collection on this website',
                            subheader25: 'Contact form',
                            p34: 'If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provide, will be stored with us for the purpose of processing the inquiry and in case of follow- up questions.We do not disclose this data without your consent.',
                            p35: 'The processing of this data is based on Art. 6(1)(b) GDPR if your inquiry is related to the performance of a contract or is necessary for the implementation of pre- contractual measures.In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries directed to us(Art. 6(1)(f) GDPR) or on your consent(Art. 6(1)(a) GDPR) if it has been requested; the consent can be revoked at any time.',
                            p36: 'The data you enter in the contact form will remain with us until you request deletion, revoke your consent for storage, or the purpose for data storage no longer applies(e.g., after completing the processing of your inquiry).Mandatory legal provisions – especially retention periods – remain unaffected.',
                            subheader26: 'Inquiry via email, telephone, or fax',
                            p37: 'If you contact us by email, telephone, or fax, your inquiry including all resulting personal data(name, inquiry) will be stored and processed by us for the purpose of handling your request.We do not disclose this data without your consent.',
                            p38: 'The processing of this data is based on Art. 6(1)(b) GDPR if your inquiry is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries directed to us (Art. 6(1)(f) GDPR) or on your consent (Art. 6(1)(a) GDPR) if it has been requested; the consent can be revoked at any time.',
                            p39: 'The data you send to us via contact inquiries will remain with us until you request deletion, revoke your consent for storage, or the purpose for data storage no longer applies(e.g., after completing the processing of your inquiry).Mandatory legal provisions – especially legal retention periods – remain unaffected.',
                            source: 'Source',
                        }
                    },
                },

                de: {
                    translation: {
                        header: {
                            aboutMe: 'Über mich',
                            contact: 'Kontakt',
                        },
                        aboutMe: {
                            header: 'Über mich',
                            p1: 'Hallo! Ich bin Frontend Entwicklerin mit fundierten Kenntnissen in Angular und JavaScript. Anfang 2023 habe ich beschlossen, meine Faszination für das Programmieren zum Beruf zu machen, indem ich mich für die Weiterbildung der Developer Akademie in München angemeldet habe. Es war Zeit, meine Visionen in die Realität umzusetzen!',
                            p2: 'Ich habe meine Programmierkenntnisse kontinuierlich verbessert, indem ich sowohl selbstständig als auch im Team verschiedene Web-Apps und Websites entwickelt habe. Insgesamt habe ich während meiner Zeit bei der Developer Akademie mehr als 10 Projekte gebaut.',
                            p3: 'Meine Erfahrung in der Textilindustrie von 2021 bis 2024 hat mir den systematischen Ansatz vermittelt, der für das Managen komplexer Projekte mit verschiedenen Inputs erforderlich ist.',
                        },
                        skills: {
                            header: 'Meine Skills',
                            p1: 'Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen Frontend-Technologien und -Konzepten gesammelt.',
                        },
                        portfolio: {
                            p1: 'Das Folgende ist eine Sammlung meiner Arbeit - erwecken wir sie zum Leben!',
                        },
                        contact: {
                            header: 'Kontakt',
                            p1: 'Gibt es ein Problem zu lösen?',
                            p2: 'Kontaktieren Sie mich über dieses Formular. Ich freue mich darauf, von Ihnen zu hören und mit meiner Arbeit zu Ihren Projekten beizutragen.',
                            p3: 'Frontend Entwicklerin gesucht?',
                            p3bold: 'Kontaktieren Sie mich!',
                            placeholder1: 'Ihr Name',
                            placeholder2: 'Ihre E-Mail',
                            placeholder3: 'Ihre Nachricht',
                            warn1: 'Ihr Name ist erforderlich',
                            warnRequire1: 'Bitte 2 oder mehr Zeichen eingeben',
                            warn2: 'Ihre E-Mail ist erforderlich',
                            warnRequire2: 'Ungültige E-Mail Adresse',
                            warn3: 'Bitte Nachricht eingeben',
                            warnRequire3: 'Bitte 4 oder mehr Zeichen eingeben',
                            policy1: 'Ich habe die',
                            policy2: 'Datenschutzrichtlinien',
                            policy3: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
                        },
                        footer: {
                            imprint: 'Impressum',
                        },
                        imprint: {
                            header: 'Impressum',
                            contact: 'Kontakt',
                            phone: 'Telefon',
                            mail: 'E-Mail',
                            source: 'Quelle',
                        },
                        privacyPolicy: {
                            header1: 'Datenschutz­erklärung',
                            header2: '1. Datenschutz auf einen Blick',
                            header3: 'Allgemeine Hinweise',
                            p1: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
                            subheader1: 'Datenerfassung auf dieser Website',
                            subheader2: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
                            p2: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
                            subheader3: 'Wie erfassen wir Ihre Daten?',
                            p3: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
                            p4: 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
                            subheader4: 'Wofür nutzen wir Ihre Daten?',
                            p5: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
                            subheader5: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
                            p6: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
                            p7: 'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
                            subheader6: 'Analyse-Tools und Tools von Dritt­anbietern',
                            p8: 'Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.',
                            p9: 'Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.',
                            p10: 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:',
                            p11: 'Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf (nachfolgend All-Inkl). Details entnehmen Sie der Datenschutzerklärung von All-Inkl: ',
                            p12: 'Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.',
                            subheader9: 'Auftragsverarbeitung',
                            p13: 'Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.',
                            subheader10: '3. Allgemeine Hinweise und Pflicht­informationen',
                            subheader11: 'Datenschutz',
                            p14: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
                            p15: 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
                            p16: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
                            subheader12: 'Hinweis zur verantwortlichen Stelle',
                            p17: 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
                            phone: 'Telefon',
                            mail: 'E-Mail',
                            p18: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',
                            subheader13: 'Speicherdauer',
                            p19: 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',
                            subheader14: 'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
                            p20: 'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',
                            subheader15: 'Empfänger von personenbezogenen Daten',
                            p21: 'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',
                            subheader16: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
                            p22: 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
                            subheader17: 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
                            p23: 'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
                            p24: 'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).',
                            subheader18: 'Beschwerde­recht bei der zuständigen Aufsichts­behörde',
                            p25: 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',
                            subheader19: 'Recht auf Daten­übertrag­barkeit',
                            p26: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
                            subheader20: 'Auskunft, Berichtigung und Löschung',
                            p27: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',
                            subheader21: 'Recht auf Einschränkung der Verarbeitung',
                            p28: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: ',
                            li1: 'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
                            li2: 'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
                            li3: 'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
                            li4: 'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
                            p29: 'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',
                            subheader22: 'SSL- bzw. TLS-Verschlüsselung',
                            p30: 'Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
                            p31: 'Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.',
                            subheader23: 'Widerspruch gegen Werbe-E-Mails',
                            p32: 'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.',
                            subheader24: '4. Datenerfassung auf dieser Website',
                            subheader25: 'Kontaktformular',
                            p34: 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
                            p35: 'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.',
                            p36: 'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
                            subheader26: 'Anfrage per E-Mail, Telefon oder Telefax',
                            p37: 'Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
                            p38: 'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.',
                            p39: 'Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.',
                            source: 'Quelle',
                        }
                    },
                },
            },
        });

        this.setAreaLang(this.header, 'header');
        // this.setAreaLang(this.aboveTheFold, 'aboveTheFold');
        this.setAreaLang(this.aboutMe, 'aboutMe');
        this.setAreaLang(this.skills, 'skills');
        this.setAreaLang(this.portfolio, 'portfolio');
        this.setAreaLang(this.contact, 'contact');
        this.setAreaLang(this.footer, 'footer');
        this.setAreaLang(this.imprint, 'imprint');
        this.setAreaLang(this.privacyPolicy, 'privacyPolicy');
    }


    setAreaLang(area: { [key: string]: string }, langArea: string) {
        for (let key in area) {
            area[key] = i18next.t(`${langArea}.${key}`);
        }
    }


    changeLang(language: string) {
        i18next.changeLanguage(language);
        this.setAreaLang(this.header, 'header');
        // this.setAreaLang(this.aboveTheFold, 'aboveTheFold');
        this.setAreaLang(this.aboutMe, 'aboutMe');
        this.setAreaLang(this.skills, 'skills');
        this.setAreaLang(this.portfolio, 'portfolio');
        this.setAreaLang(this.contact, 'contact');
        this.setAreaLang(this.footer, 'footer');
        this.setAreaLang(this.imprint, 'imprint');
        this.setAreaLang(this.privacyPolicy, 'privacyPolicy');
    }


}