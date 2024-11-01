import { eventHandler, send } from 'h3';

export default eventHandler(async (req) => {
    const books = [
        {
            title: "A propos d'amour",
            author: "Bell Hooks",
            summary:
                "Bell Hooks explore les différentes facettes de l'amour et ses implications pour la vie individuelle et collective. Cet essai traite de l'importance de l'amour pour la justice sociale, le développement personnel et les relations.",
            color: "blue",
            tags: [
                "féminisme",
                "justice sociale",
                "développement personnel",
                "essai",
                "relations",
            ],
            link: "https://www.amazon.ca/All-About-Love-New-Visions/dp/0060959479",
        },
        {
            title: "L'an 01",
            author: "Gébé",
            summary:
                "Un classique de la bande dessinée française qui imagine un monde où la société se réinvente pour mieux vivre ensemble. 'L'an 01' est un cri de liberté et une utopie collective.",
            color: "blue",
            tags: [
                "bande dessinée",
                "utopie",
                "société alternative",
                "politique",
                "contestation",
            ],
            link: "https://www.planetebd.com/bd/l-association/l-an-1/-/27892.html",
        },
        {
            title: "Croire aux fauves",
            author: "Natassja Martin",
            summary:
                "Dans ce récit autobiographique, l'anthropologue Natassja Martin partage son expérience d'une rencontre avec un ours au Kamtchatka et la manière dont cet événement a bouleversé sa vision du monde.",
            color: "green",
            tags: [
                "anthropologie",
                "nature sauvage",
                "autobiographie",
                "survie",
                "relation homme-animal",
            ],
            link: "https://www.leslibraires.ca/livres/croire-aux-fauves-nastassja-martin-9782072849787.html",
        },
        {
            title: "Ethnographie des mondes à venir",
            author: "Philippe Descola",
            summary:
                "Descola explore comment les différentes cultures imaginent et façonnent le futur. Une réflexion anthropologique sur les visions du monde de demain.",
            color: "blue",
            tags: [
                "anthropologie",
                "futurisme",
                "sociologie",
                "cultures",
                "prospective",
            ],
            link: "https://www.amazon.ca/s?k=Ethnographie+des+mondes+à+venir+Descola",
        },
        {
            title: "La lumière vacillante",
            author: "Nino Haratischwili",
            summary:
                "Une saga familiale traversant les grands bouleversements du XXe siècle. Ce roman explore les thèmes de la mémoire, de la famille et de l'identité.",
            color: "purple",
            tags: ["saga familiale", "histoire", "mémoire", "identité", "XXe siècle"],
            link: "https://www.leslibraires.ca/livres/la-lumiere-vacillante-nino-haratischwili-9782072996016.html",
        },
        {
            title: "La Longue Route",
            author: "Bernard Moitessier",
            summary:
                "Moitessier raconte son incroyable voyage en solitaire autour du monde en voilier, un périple empreint de philosophie et de quête spirituelle.",
            color: "purple",
            tags: [
                "voyage",
                "mer",
                "aventure",
                "spiritualité",
                "récit autobiographique",
            ],
            link: "https://www.amazon.ca/-/fr/Bernard-Moitessier-ebook/dp/B07FY7PRCC",
        },
        {
            title: "Comme si nous étions déjà libres",
            author: "David Graeber",
            summary:
                "Graeber explore les mouvements sociaux modernes et les possibilités d'une liberté radicale, inspirant à repenser la société et les luttes contemporaines.",
            color: "blue",
            tags: [
                "anarchisme",
                "politique",
                "mouvements sociaux",
                "liberté",
                "activisme",
            ],
            link: "https://www.amazon.ca/s?k=Comme+si+nous+étions+déjà+libres+Graeber",
        },
        {
            title: "La vague montante",
            author: "Marion Zimmer Bradley",
            summary:
                "Un roman de science-fiction qui aborde la question du féminisme et des luttes pour l'égalité dans un monde futuriste.",
            color: "purple",
            tags: ["science-fiction", "féminisme", "dystopie", "égalité", "futur"],
            link: "https://www.amazon.ca/s?k=La+vague+montante+Marion+Zimmer+Bradley",
        },
        {
            title: "Là où le feu et l'ours",
            author: "Corinne Morel Darleux",
            summary:
                "Ce roman écologiste suit un groupe d'individus dans leur quête de rédemption et d'engagement face aux crises environnementales.",
            color: "green",
            tags: [
                "écologie",
                "engagement",
                "militantisme",
                "environnement",
                "fiction climatique",
            ],
            link: "https://www.leslibraires.ca/livres/la-ou-le-feu-et-l-corinne-morel-darleux-9782377292028.html",
        },
        {
            title: "Les Racines du ciel",
            author: "Romain Gary",
            summary:
                "Un roman philosophique et engagé sur la protection des éléphants et la sauvegarde de la nature, abordant des thèmes de lutte et de conservation.",
            color: "green",
            tags: [
                "écologie",
                "protection animale",
                "Afrique",
                "engagement",
                "conservation",
            ],
            link: "https://www.babelio.com/livres/Gary-Les-Racines-du-ciel/1616",
        },
        {
            title: "L'Art de la joie",
            author: "Goliarda Sapienza",
            summary:
                "Un roman puissant et féministe où l'héroïne, Modesta, cherche à vivre une vie libre et épanouie malgré les conventions de son époque.",
            color: "purple",
            tags: [
                "féminisme",
                "émancipation",
                "Italie",
                "roman historique",
                "liberté",
            ],
            link: "https://www.leslibraires.ca/livres/l-art-de-la-joie-goliarda-sapienza-9782370551023.html",
        },
        {
            title: "Les Yeux dans les arbres",
            author: "Barbara Kingsolver",
            summary:
                "L'histoire d'une famille missionnaire en Afrique qui découvre les complexités culturelles et environnementales du Congo.",
            color: "green",
            tags: ["Afrique", "colonialisme", "environnement", "culture", "mission"],
            link: "https://www.amazon.ca/Poisonwood-Bible-Novel-Barbara-Kingsolver/dp/0060786507",
        },
        {
            title: "Le Mas Théotime",
            author: "Henri Bosco",
            summary:
                "Un roman pastoral et poétique dans lequel Bosco explore la relation de l'homme avec la terre et la ruralité provençale.",
            color: "green",
            tags: ["Provence", "ruralité", "terroir", "nature", "poésie"],
            link: "https://www.leslibraires.ca/livres/le-mas-theotime-henri-bosco-9782070361687.html",
        },
        {
            title: "Le Pays des marées",
            author: "Amitav Ghosh",
            summary:
                "Un roman évocateur sur la vie des habitants des Sundarbans, entre lutte pour la survie et adaptation face aux défis environnementaux.",
            color: "green",
            tags: [
                "Inde",
                "environnement",
                "changement climatique",
                "traditions",
                "survie",
            ],
            link: "https://www.amazon.ca/Hungry-Tide-Amitav-Ghosh/dp/0670082198",
        },
        {
            title: "La trahison d'Einstein",
            author: "Éric-Emmanuel Schmitt",
            summary:
                "Une exploration des dilemmes moraux d'Einstein, confronté aux conséquences de la bombe atomique et de la trahison de ses idéaux pacifistes.",
            color: "blue",
            tags: ["science", "éthique", "histoire", "physique", "pacifisme"],
            link: "https://www.renaud-bray.com/Livre_Numerique_Produit.aspx?id=1515674&def=Trahison+d%27Einstein(La)%2cSCHMITT%2c+%c3%89RIC-EMMANUEL%2c9782226302199",
        },
        {
            title: "Le Vagabond des étoiles",
            author: "Jack London",
            summary:
                "L'histoire captivante d'un homme emprisonné qui échappe à sa réalité en voyageant mentalement dans le temps et l'espace.",
            color: "purple",
            tags: ["prison", "voyage mental", "aventure", "spiritualité", "évasion"],
            link: "https://www.amazon.ca/-/fr/JACK-LONDON/dp/2859406816",
        },
        {
            title: "La Fête au bouc",
            author: "Mario Vargas Llosa",
            summary:
                "Un roman intense et historique qui dépeint la dictature de Trujillo en République Dominicaine à travers les yeux de plusieurs personnages.",
            color: "purple",
            tags: ["dictature", "Amérique latine", "politique", "histoire", "pouvoir"],
            link: "https://www.renaud-bray.com/Livres_Produit.aspx?id=562193&def=F%c3%aate+au+bouc(La)%2cVARGAS+LLOSA%2c+MARIO%2c9782070314126",
        },
        {
            title: "Aucune bête aussi féroce",
            author: "Edward Bunker",
            summary:
                "Les mémoires d'un ancien criminel qui plonge dans les rouages de la criminalité et de la rédemption, offrant un regard brut et réaliste.",
            color: "purple",
            tags: ["crime", "prison", "rédemption", "autobiographie", "société"],
            link: "https://www.amazon.ca/No-Beast-Fierce-Edward-Bunker/dp/1842432664",
        },
    ];

    const { limit } = getQuery(req)
    if (!isNaN(limit) && limit > 0) {
        return books.sort(() => 0.5 - Math.random()).slice(0, limit);
    }

    return send(req, JSON.stringify(responseBooks));
});

