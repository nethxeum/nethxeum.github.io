/**
 * NETHXEUM OFFICIAL WEBSITE - MAIN JAVASCRIPT
 * Animations, Multilingual System, Interactions
 */

// ============================================
// LANGUAGE SYSTEM
// ============================================

const translations = {
  en: {
    // Navigation
    nav_getting_started: "Getting Started",
    nav_download: "Downloads",
    nav_library: "Library",
    nav_blog: "Blog",
    nav_community: "Community",
    nav_resources: "Resources",
    nav_what_is: "What is Nethxeum?",
    nav_contribute: "Contribute",
    nav_mining: "Mining",
    nav_faq: "FAQ",
    nav_security: "Security",
    nav_docs: "Docs",
    nav_about: "About",
    nav_whitepaper: "Whitepaper",
    nav_vocab: "Vocabulary",
    nav_user_guides: "User Guides",
    nav_dev_guides: "Developer Guides",
    nav_scams: "Avoid Scams",
    nav_legal: "Legal",
    nav_privacy: "Privacy Policy",
    
    // Hero
    hero_badge: "Private · Scarce · Untraceable",
    hero_title: "The Future of Private Finance",
    hero_subtitle: "Nethxeum combines Bitcoin-like scarcity with Monero-grade privacy. 42 million coins. No premine. No ICO. Pure privacy by design.",
    btn_about: "About Nethxeum",
    btn_community: "Join Community",
    
    // Stats
    stat_supply: "Max Supply",
    stat_reward: "Block Reward",
    stat_time: "Block Time",
    stat_algo: "Algorithm",
    
    // Features
    features_label: "Why Nethxeum",
    features_title: "The Perfect Synthesis",
    features_desc: "What Bitcoin would be if Satoshi had built privacy in from day one.",
    feature_privacy_title: "Absolute Privacy",
    feature_privacy_desc: "Ring signatures, RingCT, and stealth addresses make every transaction completely untraceable. Privacy is mandatory, not optional.",
    feature_scarcity_title: "True Scarcity",
    feature_scarcity_desc: "Hard-capped at 42 million NTU with Bitcoin-style halving every 420,000 blocks. No tail emission. No inflation.",
    feature_fungible_title: "Perfect Fungibility",
    feature_fungible_desc: "Every NTU is equal. No tainted coins. No blacklist. Perfect interchangeability ensures true digital cash.",
    feature_mining_title: "Democratic Mining",
    feature_mining_desc: "RandomX algorithm optimized for CPUs. Mine with any computer. No ASICs. No industrial farms needed.",
    
    // Comparison
    compare_label: "Comparison",
    compare_title: "How Nethxeum Compares",
    compare_desc: "The only cryptocurrency combining hard supply cap with mandatory full privacy.",
    
    // Technical
    tech_label: "Technical Architecture",
    tech_title: "Built for Security & Scale",
    tech_desc: "Forked from Monero v0.18.3.3 with Bitcoin-inspired parameters. Battle-tested cryptography meets sound money.",
    
    // CTA
    cta_title: "Join the Private Financial Network",
    cta_desc: "Download the wallet, run a node, or start mining. Be part of the future of private finance.",
    cta_download: "Download Wallet",
    cta_docs: "Read Documentation",
    
    // Navigation extra
    nav_pool: "Mining Pool",

    // Get Started Section
    start_label: "Start Now",
    start_title: "Get Started in 3 Steps",
    start_desc: "From zero to mining in minutes. Everything you need is free and open source.",
    start_step1_title: "Download Wallet",
    start_step1_desc: "Download the GUI or CLI wallet to store and manage your NTU securely on your computer.",
    start_step1_btn: "Download",
    start_step2_title: "Join the Pool",
    start_step2_desc: "Connect your miner to pool.nethxeum.com — PPLNS rewards, 1% fee, instant payouts as blocks unlock.",
    start_step2_btn: "Open Pool",
    start_step3_title: "Start Mining",
    start_step3_desc: "Point XMRig or any RandomX miner at stratum.nethxeum.com:3333. CPU mining — no GPU or ASIC needed.",
    start_step3_btn: "Mining Guide",

    // Pool stats
    pool_stat_fee: "1%",
    pool_stat_fee_label: "Pool Fee",
    pool_stat_payout: "1 NTU",
    pool_stat_payout_label: "Min Payout",
    pool_stat_method: "PPLNS",
    pool_stat_method_label: "Reward Method",
    pool_stat_algo: "RandomX",
    pool_stat_algo_label: "Algorithm",
    pool_stat_reward: "50 NTU",
    pool_stat_reward_label: "Block Reward",

    // CTA extra
    cta_mine: "Start Mining",

    // Footer
    footer_desc: "Nethxeum (NTU) - A decentralized, privacy-preserving cryptocurrency. Founded by Rony Katie.",
    footer_getting_started: "GETTING STARTED",
    footer_resources: "RESOURCES",
    footer_mining: "MINING",
    footer_pool_stats: "Pool Stats",
    footer_start_mining: "Start Mining",
    footer_other: "OTHER",
    footer_copyright: "Nethxeum Project 2026. Released under the MIT license.",
  },
  
  fr: {
    // Navigation
    nav_getting_started: "Commencer",
    nav_download: "Téléchargements",
    nav_library: "Bibliothèque",
    nav_blog: "Blog",
    nav_community: "Communauté",
    nav_resources: "Ressources",
    nav_what_is: "Qu'est-ce que Nethxeum ?",
    nav_contribute: "Contribuer",
    nav_mining: "Exploitation minière",
    nav_faq: "FAQ",
    nav_security: "Sécurité",
    nav_docs: "Documentation",
    nav_about: "À propos",
    nav_whitepaper: "Whitepaper",
    nav_vocab: "Vocabulaire",
    nav_user_guides: "Guides d'utilisation",
    nav_dev_guides: "Guides du développeur",
    nav_scams: "Évitez les arnaques",
    nav_legal: "Légal",
    nav_privacy: "Politique de confidentialité",
    
    // Hero
    hero_badge: "Privé · Rare · Intraçable",
    hero_title: "Le Futur de la Finance Privée",
    hero_subtitle: "Nethxeum combine la rareté de Bitcoin avec la confidentialité de Monero. 42 millions de coins. Pas de premine. Pas d'ICO. Une confidentialité absolue.",
    btn_about: "À propos de Nethxeum",
    btn_community: "Rejoindre la communauté",
    
    // Stats
    stat_supply: "Supply Max",
    stat_reward: "Récompense",
    stat_time: "Temps de bloc",
    stat_algo: "Algorithme",
    
    // Features
    features_label: "Pourquoi Nethxeum",
    features_title: "La Synthèse Parfaite",
    features_desc: "Ce que Bitcoin serait si Satoshi avait intégré la confidentialité dès le premier jour.",
    feature_privacy_title: "Confidentialité Absolue",
    feature_privacy_desc: "Les signatures en anneau, RingCT et les adresses furtives rendent chaque transaction complètement intraçable. La confidentialité est obligatoire.",
    feature_scarcity_title: "Véritable Rareté",
    feature_scarcity_desc: "Plafonnée à 42 millions de NTU avec un halving tous les 420 000 blocs. Pas d'émission résiduelle. Pas d'inflation.",
    feature_fungible_title: "Fongibilité Parfaite",
    feature_fungible_desc: "Chaque NTU est égal. Pas de coins souillés. Pas de liste noire. Une interchangeabilité parfaite garantit un véritable cash numérique.",
    feature_mining_title: "Minage Démocratique",
    feature_mining_desc: "Algorithme RandomX optimisé pour les CPUs. Minez avec n'importe quel ordinateur. Pas d'ASICs requis.",
    
    // Comparison
    compare_label: "Comparaison",
    compare_title: "Comparaison avec les Autres",
    compare_desc: "La seule cryptomonnaie combinant un supply cap fixe avec une confidentialité totale obligatoire.",
    
    // Technical
    tech_label: "Architecture Technique",
    tech_title: "Conçu pour la Sécurité",
    tech_desc: "Fork de Monero v0.18.3.3 avec des paramètres inspirés de Bitcoin. Une cryptographie éprouvée rencontre une monnaie saine.",
    
    // CTA
    cta_title: "Rejoignez le Réseau Financier Privé",
    cta_desc: "Téléchargez le portefeuille, exécutez un nœud, ou commencez à miner. Faites partie du futur de la finance privée.",
    cta_download: "Télécharger le Portefeuille",
    cta_docs: "Lire la Documentation",
    
    // Navigation extra
    nav_pool: "Pool de Minage",

    // Get Started Section
    start_label: "Commencer",
    start_title: "Démarrez en 3 Étapes",
    start_desc: "Du zéro au minage en quelques minutes. Tout ce dont vous avez besoin est gratuit et open source.",
    start_step1_title: "Télécharger le Portefeuille",
    start_step1_desc: "Téléchargez le portefeuille GUI ou CLI pour stocker et gérer vos NTU en toute sécurité.",
    start_step1_btn: "Télécharger",
    start_step2_title: "Rejoindre le Pool",
    start_step2_desc: "Connectez votre mineur à pool.nethxeum.com — récompenses PPLNS, frais 1%, paiements instantanés.",
    start_step2_btn: "Ouvrir le Pool",
    start_step3_title: "Commencer à Miner",
    start_step3_desc: "Pointez XMRig ou tout mineur RandomX vers stratum.nethxeum.com:3333. Minage CPU — pas de GPU ni d'ASIC.",
    start_step3_btn: "Guide de Minage",

    // Pool stats
    pool_stat_fee: "1%",
    pool_stat_fee_label: "Frais du Pool",
    pool_stat_payout: "1 NTU",
    pool_stat_payout_label: "Paiement Min",
    pool_stat_method: "PPLNS",
    pool_stat_method_label: "Méthode de Récompense",
    pool_stat_algo: "RandomX",
    pool_stat_algo_label: "Algorithme",
    pool_stat_reward: "50 NTU",
    pool_stat_reward_label: "Récompense de Bloc",

    // CTA extra
    cta_mine: "Commencer à Miner",

    // Footer
    footer_desc: "Nethxeum (NTU) - Une cryptomonnaie décentralisée préservant la confidentialité. Fondée par Rony Katie.",
    footer_getting_started: "COMMENCER",
    footer_resources: "RESSOURCES",
    footer_mining: "MINAGE",
    footer_pool_stats: "Stats du Pool",
    footer_start_mining: "Commencer à Miner",
    footer_other: "AUTRE",
    footer_copyright: "Projet Nethxeum 2026. Publié sous licence MIT.",
  },
  
  es: {
    nav_getting_started: "Empezar",
    nav_download: "Descargas",
    nav_library: "Biblioteca",
    nav_blog: "Blog",
    nav_community: "Comunidad",
    nav_resources: "Recursos",
    nav_what_is: "¿Qué es Nethxeum?",
    nav_contribute: "Contribuir",
    nav_mining: "Minería",
    nav_faq: "Preguntas Frecuentes",
    nav_security: "Seguridad",
    nav_docs: "Documentación",
    nav_about: "Acerca de",
    nav_whitepaper: "Whitepaper",
    nav_vocab: "Vocabulario",
    nav_user_guides: "Guías de Usuario",
    nav_dev_guides: "Guías de Desarrollador",
    nav_scams: "Evitar Estafas",
    nav_legal: "Legal",
    nav_privacy: "Política de Privacidad",
    
    hero_badge: "Privado · Escaso · Intraçable",
    hero_title: "El Futuro de las Finanzas Privadas",
    hero_subtitle: "Nethxeum combina la escasez de Bitcoin con la privacidad de Monero. 42 millones de monedas. Sin premine. Sin ICO. Privacidad pura.",
    btn_about: "Acerca de Nethxeum",
    btn_community: "Unirse a la Comunidad",
    
    stat_supply: "Suministro Máx",
    stat_reward: "Recompensa",
    stat_time: "Tiempo de Bloque",
    stat_algo: "Algoritmo",
    
    features_label: "Por qué Nethxeum",
    features_title: "La Síntesis Perfecta",
    features_desc: "Lo que Bitcoin sería si Satoshi hubiera construido privacidad desde el primer día.",
    feature_privacy_title: "Privacidad Absoluta",
    feature_privacy_desc: "Firmas en anillo, RingCT y direcciones sigilosas hacen que cada transacción sea completamente intrazable.",
    feature_scarcity_title: "Escasez Verdadera",
    feature_scarcity_desc: "Capado en 42 millones de NTU con halving cada 420,000 bloques. Sin emisión de cola. Sin inflación.",
    feature_fungible_title: "Fungibilidad Perfecta",
    feature_fungible_desc: "Cada NTU es igual. Sin monedas manchadas. Sin lista negra. Intercambiabilidad perfecta.",
    feature_mining_title: "Minería Democrática",
    feature_mining_desc: "Algoritmo RandomX optimizado para CPUs. Mine con cualquier computadora. Sin ASICs.",
    
    compare_label: "Comparación",
    compare_title: "Cómo se Compara Nethxeum",
    compare_desc: "La única criptomoneda que combina límite de suministro con privacidad total obligatoria.",
    
    tech_label: "Arquitectura Técnica",
    tech_title: "Construido para Seguridad y Escala",
    tech_desc: "Fork de Monero v0.18.3.3 con parámetros inspirados en Bitcoin.",
    
    cta_title: "Únase a la Red Financiera Privada",
    cta_desc: "Descargue la billetera, ejecute un nodo, o comience a minar. Sea parte del futuro.",
    cta_download: "Descargar Billetera",
    cta_docs: "Leer Documentación",
    
    footer_desc: "Nethxeum (NTU) - Una criptomoneda descentralizada que preserva la privacidad. Fundada por Rony Katie.",
    footer_getting_started: "EMPEZAR",
    footer_resources: "RECURSOS",
    footer_other: "OTRO",
    footer_copyright: "Proyecto Nethxeum 2026. Publicado bajo licencia MIT.",
  },
  
  de: {
    nav_getting_started: "Beginnen",
    nav_download: "Downloads",
    nav_library: "Bibliothek",
    nav_blog: "Blog",
    nav_community: "Gemeinschaft",
    nav_resources: "Ressourcen",
    nav_what_is: "Was ist Nethxeum?",
    nav_contribute: "Mitwirken",
    nav_mining: "Mining",
    nav_faq: "FAQ",
    nav_security: "Sicherheit",
    nav_docs: "Dokumentation",
    nav_about: "Über",
    nav_whitepaper: "Whitepaper",
    nav_vocab: "Vokabular",
    nav_user_guides: "Benutzerhandbücher",
    nav_dev_guides: "Entwicklerhandbücher",
    nav_scams: "Betrug vermeiden",
    nav_legal: "Rechtliches",
    nav_privacy: "Datenschutz",
    
    hero_badge: "Privat · Knapp · Unauffindbar",
    hero_title: "Die Zukunft der Privatfinanzen",
    hero_subtitle: "Nethxeum vereint Bitcoin-ähnliche Knappheit mit Monero-Grad Datenschutz. 42 Millionen Coins. Kein Premine. Kein ICO.",
    btn_about: "Über Nethxeum",
    btn_community: "Community beitreten",
    
    stat_supply: "Max Versorgung",
    stat_reward: "Blockbelohnung",
    stat_time: "Blockzeit",
    stat_algo: "Algorithmus",
    
    features_label: "Warum Nethxeum",
    features_title: "Die Perfekte Synthese",
    features_desc: "Was Bitcoin wäre, wenn Satoshi Datenschutz vom ersten Tag an eingebaut hätte.",
    feature_privacy_title: "Absolute Privatsphäre",
    feature_privacy_desc: "Ringsignaturen, RingCT und Stealth-Adressen machen jede Transaktion vollständig unauffindbar.",
    feature_scarcity_title: "Wahre Knappheit",
    feature_scarcity_desc: "Hard-capped bei 42 Millionen NTU mit Bitcoin-ähnlichem Halving. Keine Tail Emission.",
    feature_fungible_title: "Perfekte Fungibilität",
    feature_fungible_desc: "Jeder NTU ist gleich. Keine verschmutzten Coins. Keine Blacklist. Perfekte Austauschbarkeit.",
    feature_mining_title: "Demokratisches Mining",
    feature_mining_desc: "RandomX-Algorithmus für CPUs optimiert. Mit jedem Computer minen. Keine ASICs.",
    
    compare_label: "Vergleich",
    compare_title: "Wie sich Nethxeum Vergleicht",
    compare_desc: "Die einzige Kryptowährung mit harter Obergrenze und obligatorischem vollen Datenschutz.",
    
    tech_label: "Technische Architektur",
    tech_title: "Für Sicherheit & Skalierung Gebaut",
    tech_desc: "Geforkt von Monero v0.18.3.3 mit Bitcoin-inspirierten Parametern.",
    
    cta_title: "Treten Sie dem Privaten Finanznetzwerk bei",
    cta_desc: "Laden Sie die Wallet herunter, betreiben Sie einen Node, oder beginnen Sie mit dem Mining.",
    cta_download: "Wallet Herunterladen",
    cta_docs: "Dokumentation Lesen",
    
    footer_desc: "Nethxeum (NTU) - Eine dezentralisierte, datenschutzfreundliche Kryptowährung. Gegründet von Rony Katie.",
    footer_getting_started: "BEGINNEN",
    footer_resources: "RESSOURCEN",
    footer_other: "ANDERE",
    footer_copyright: "Nethxeum Projekt 2026. Veröffentlicht unter der MIT-Lizenz.",
  },
  
  ja: {
    nav_getting_started: "始める",
    nav_download: "ダウンロード",
    nav_library: "ライブラリ",
    nav_blog: "ブログ",
    nav_community: "コミュニティ",
    nav_resources: "リソース",
    nav_what_is: "Nethxeumとは？",
    nav_contribute: "貢献する",
    nav_mining: "マイニング",
    nav_faq: "よくある質問",
    nav_security: "セキュリティ",
    nav_docs: "ドキュメント",
    nav_about: "について",
    nav_whitepaper: "ホワイトペーパー",
    nav_vocab: "用語集",
    nav_user_guides: "ユーザーガイド",
    nav_dev_guides: "開発者ガイド",
    nav_scams: "詐欺を防ぐ",
    nav_legal: "法的事項",
    nav_privacy: "プライバシーポリシー",
    
    hero_badge: "プライベート · 希少 · 追跡不可能",
    hero_title: "プライベートファイナンスの未来",
    hero_subtitle: "NethxeumはBitcoinのような希少性とMonero級のプライバシーを組み合わせます。4200万コイン。プレマインなし。ICOなし。",
    btn_about: "Nethxeumについて",
    btn_community: "コミュニティに参加",
    
    stat_supply: "最大供給量",
    stat_reward: "ブロック報酬",
    stat_time: "ブロック時間",
    stat_algo: "アルゴリズム",
    
    features_label: "なぜNethxeumか",
    features_title: "完璧な統合",
    features_desc: "もしSatoshiが最初からプライバシーを組み込んでいたら、Bitcoinはこうなっていたでしょう。",
    feature_privacy_title: "絶対的なプライバシー",
    feature_privacy_desc: "リング署名、RingCT、ステルスアドレスにより、すべてのトランザクションが完全に追跡不可能になります。",
    feature_scarcity_title: "真の希少性",
    feature_scarcity_desc: "4200万NTUのハードキャップ。420,000ブロックごとにハービング。テールエミッションなし。",
    feature_fungible_title: "完璧な代替性",
    feature_fungible_desc: "すべてのNTUは平等。汚染されたコインなし。ブラックリストなし。完璧な交換可能性。",
    feature_mining_title: "民主的なマイニング",
    feature_mining_desc: "CPU向けに最適化されたRandomXアルゴリズム。どのコンピュータでもマイニング可能。",
    
    compare_label: "比較",
    compare_title: "Nethxeumの比較",
    compare_desc: "ハードサプライキャップと強制完全プライバシーを組み合わせた唯一の暗号通貨。",
    
    tech_label: "技術アーキテクチャ",
    tech_title: "セキュリティとスケールのために構築",
    tech_desc: "Monero v0.18.3.3をフォークし、Bitcoinにインスパイアされたパラメータを適用。",
    
    cta_title: "プライベートファイナンスネットワークに参加",
    cta_desc: "ウォレットをダウンロードし、ノードを実行するか、マイニングを開始してください。",
    cta_download: "ウォレットをダウンロード",
    cta_docs: "ドキュメントを読む",
    
    footer_desc: "Nethxeum (NTU) - プライバシーを保護する分散型暗号通貨。Rony Katieによって設立。",
    footer_getting_started: "始める",
    footer_resources: "リソース",
    footer_other: "その他",
    footer_copyright: "Nethxeum Project 2026. MITライセンスの下でリリース。",
  },
  
  "zh-CN": {
    nav_getting_started: "入门",
    nav_download: "下载",
    nav_library: "文库",
    nav_blog: "博客",
    nav_community: "社区",
    nav_resources: "资源",
    nav_what_is: "什么是Nethxeum？",
    nav_contribute: "贡献",
    nav_mining: "挖矿",
    nav_faq: "常见问题",
    nav_security: "安全",
    nav_docs: "文档",
    nav_about: "关于",
    nav_whitepaper: "白皮书",
    nav_vocab: "词汇表",
    nav_user_guides: "用户指南",
    nav_dev_guides: "开发者指南",
    nav_scams: "防范诈骗",
    nav_legal: "法律",
    nav_privacy: "隐私政策",
    
    hero_badge: "私密 · 稀缺 · 不可追踪",
    hero_title: "私人金融的未来",
    hero_subtitle: "Nethxeum结合比特币的稀缺性与门罗币级别的隐私。4200万枚币。无预挖。无ICO。纯粹的隐私设计。",
    btn_about: "关于Nethxeum",
    btn_community: "加入社区",
    
    stat_supply: "最大供应量",
    stat_reward: "区块奖励",
    stat_time: "区块时间",
    stat_algo: "算法",
    
    features_label: "为什么选择Nethxeum",
    features_title: "完美的融合",
    features_desc: "如果中本聪从一开始就构建了隐私，比特币就会是这样的。",
    feature_privacy_title: "绝对隐私",
    feature_privacy_desc: "环签名、RingCT和隐形地址使每笔交易完全不可追踪。隐私是强制性的。",
    feature_scarcity_title: "真正的稀缺性",
    feature_scarcity_desc: "硬上限4200万NTU，每42万个区块比特币式减半。无尾部排放。无通胀。",
    feature_fungible_title: "完美的可替代性",
    feature_fungible_desc: "每个NTU都是平等的。无污点币。无黑名单。完美的可互换性。",
    feature_mining_title: "民主挖矿",
    feature_mining_desc: "针对CPU优化的RandomX算法。用任何电脑都能挖矿。无需ASIC。",
    
    compare_label: "对比",
    compare_title: "Nethxeum的对比优势",
    compare_desc: "唯一结合硬供应上限与强制全面隐私的加密货币。",
    
    tech_label: "技术架构",
    tech_title: "为安全与扩展而构建",
    tech_desc: "从Monero v0.18.3.3分叉，采用受比特币启发的参数。",
    
    cta_title: "加入私人金融网络",
    cta_desc: "下载钱包，运行节点，或开始挖矿。成为私人金融未来的一部分。",
    cta_download: "下载钱包",
    cta_docs: "阅读文档",
    
    footer_desc: "Nethxeum (NTU) - 保护隐私的去中心化加密货币。由Rony Katie创立。",
    footer_getting_started: "入门",
    footer_resources: "资源",
    footer_other: "其他",
    footer_copyright: "Nethxeum项目 2026。基于MIT许可证发布。",
  },
  
  "zh-TW": {
    nav_getting_started: "入門",
    nav_download: "下載",
    nav_library: "文庫",
    nav_blog: "部落格",
    nav_community: "社區",
    nav_resources: "資源",
    nav_what_is: "什麼是Nethxeum？",
    nav_contribute: "貢獻",
    nav_mining: "挖礦",
    nav_faq: "常見問題",
    nav_security: "安全",
    nav_docs: "文檔",
    nav_about: "關於",
    nav_whitepaper: "白皮書",
    nav_vocab: "詞彙表",
    nav_user_guides: "用戶指南",
    nav_dev_guides: "開發者指南",
    nav_scams: "防範詐騙",
    nav_legal: "法律",
    nav_privacy: "隱私政策",
    
    hero_badge: "私密 · 稀缺 · 不可追蹤",
    hero_title: "私人金融的未來",
    hero_subtitle: "Nethxeum結合比特幣的稀缺性與門羅幣級別的隱私。4200萬枚幣。無預挖。無ICO。純粹的隱私設計。",
    btn_about: "關於Nethxeum",
    btn_community: "加入社區",
    
    stat_supply: "最大供應量",
    stat_reward: "區塊獎勵",
    stat_time: "區塊時間",
    stat_algo: "算法",
    
    features_label: "為什麼選擇Nethxeum",
    features_title: "完美的融合",
    features_desc: "如果中本聰從一開始就構建了隱私，比特幣就會是這樣的。",
    feature_privacy_title: "絕對隱私",
    feature_privacy_desc: "環簽名、RingCT和隱形地址使每筆交易完全不可追蹤。隱私是強制性的。",
    feature_scarcity_title: "真正的稀缺性",
    feature_scarcity_desc: "硬上限4200萬NTU，每42萬個區塊比特幣式減半。無尾部排放。無通脹。",
    feature_fungible_title: "完美的可替代性",
    feature_fungible_desc: "每個NTU都是平等的。無污點幣。無黑名單。完美的可互換性。",
    feature_mining_title: "民主挖礦",
    feature_mining_desc: "針對CPU優化的RandomX算法。用任何電腦都能挖礦。無需ASIC。",
    
    compare_label: "對比",
    compare_title: "Nethxeum的對比優勢",
    compare_desc: "唯一結合硬供應上限與強制全面隱私的加密貨幣。",
    
    tech_label: "技術架構",
    tech_title: "為安全與擴展而構建",
    tech_desc: "從Monero v0.18.3.3分叉，採用受比特幣啟發的參數。",
    
    cta_title: "加入私人金融網絡",
    cta_desc: "下載錢包，運行節點，或開始挖礦。成為私人金融未來的一部分。",
    cta_download: "下載錢包",
    cta_docs: "閱讀文檔",
    
    footer_desc: "Nethxeum (NTU) - 保護隱私的去中心化加密貨幣。由Rony Katie創立。",
    footer_getting_started: "入門",
    footer_resources: "資源",
    footer_other: "其他",
    footer_copyright: "Nethxeum項目 2026。基於MIT許可證發布。",
  },
  
  ko: {
    nav_getting_started: "시작하기",
    nav_download: "다운로드",
    nav_library: "라이브러리",
    nav_blog: "블로그",
    nav_community: "커뮤니티",
    nav_resources: "리소스",
    nav_what_is: "Nethxeum이란?",
    nav_contribute: "기여하기",
    nav_mining: "채굴",
    nav_faq: "자주 묻는 질문",
    nav_security: "보안",
    nav_docs: "문서",
    nav_about: "소개",
    nav_whitepaper: "백서",
    nav_vocab: "용어집",
    nav_user_guides: "사용자 가이드",
    nav_dev_guides: "개발자 가이드",
    nav_scams: "사기 방지",
    nav_legal: "법률",
    nav_privacy: "개인정보 정책",
    
    hero_badge: "프라이빗 · 희소 · 추적 불가",
    hero_title: "프라이빗 파이낸스의 미래",
    hero_subtitle: "Nethxeum은 Bitcoin과 같은 희소성과 Monero급 프라이버시를 결합합니다. 4200만 코인. 프리마인 없음. ICO 없음.",
    btn_about: "Nethxeum 소개",
    btn_community: "커뮤니티 참여",
    
    stat_supply: "최대 공급량",
    stat_reward: "블록 보상",
    stat_time: "블록 시간",
    stat_algo: "알고리즘",
    
    features_label: "왜 Nethxeum인가",
    features_title: "완벽한 통합",
    features_desc: "만약 사토시가 처음부터 프라이버시를 구축했다면 Bitcoin은 이런 모습이었을 것입니다.",
    feature_privacy_title: "절대적 프라이버시",
    feature_privacy_desc: "링 서명, RingCT, 스텔스 주소로 모든 거래를 완전히 추적 불가능하게 만듭니다.",
    feature_scarcity_title: "진정한 희소성",
    feature_scarcity_desc: "4200만 NTU 하드캡. 420,000블록마다 반감기. 꼬리 배출 없음. 인플레이션 없음.",
    feature_fungible_title: "완벽한 대체 가능성",
    feature_fungible_desc: "모든 NTU는 평등합니다. 오염된 코인 없음. 블랙리스트 없음. 완벽한 상호 교환성.",
    feature_mining_title: "민주적 채굴",
    feature_mining_desc: "CPU에 최적화된 RandomX 알고리즘. 모든 컴퓨터로 채굴 가능. ASIC 불필요.",
    
    compare_label: "비교",
    compare_title: "Nethxeum 비교",
    compare_desc: "하드 공급 한도와 의무적 완전 프라이버시를 결합한 유일한 암호화폐.",
    
    tech_label: "기술 아키텍처",
    tech_title: "보안 및 확장성을 위해 구축",
    tech_desc: "Monero v0.18.3.3을 포크하고 Bitcoin에서 영감을 받은 매개변수 적용.",
    
    cta_title: "프라이빗 금융 네트워크 참여",
    cta_desc: "지갑을 다운로드하고 노드를 실행하거나 채굴을 시작하세요.",
    cta_download: "지갑 다운로드",
    cta_docs: "문서 읽기",
    
    footer_desc: "Nethxeum (NTU) - 프라이버시를 보호하는 탈중앙화 암호화폐. Rony Katie가 설립.",
    footer_getting_started: "시작하기",
    footer_resources: "리소스",
    footer_other: "기타",
    footer_copyright: "Nethxeum 프로젝트 2026. MIT 라이선스 하에 릴리스.",
  },
  
  ru: {
    nav_getting_started: "Начало",
    nav_download: "Загрузки",
    nav_library: "Библиотека",
    nav_blog: "Блог",
    nav_community: "Сообщество",
    nav_resources: "Ресурсы",
    nav_what_is: "Что такое Nethxeum?",
    nav_contribute: "Внести вклад",
    nav_mining: "Майнинг",
    nav_faq: "Частые вопросы",
    nav_security: "Безопасность",
    nav_docs: "Документация",
    nav_about: "О проекте",
    nav_whitepaper: "Whitepaper",
    nav_vocab: "Словарь",
    nav_user_guides: "Руководства",
    nav_dev_guides: "Для разработчиков",
    nav_scams: "Избегать мошенничества",
    nav_legal: "Правовая информация",
    nav_privacy: "Политика конфиденциальности",
    
    hero_badge: "Приватный · Дефицитный · Неотслеживаемый",
    hero_title: "Будущее Приватных Финансов",
    hero_subtitle: "Nethxeum сочетает дефицит Bitcoin с конфиденциальностью уровня Monero. 42 миллиона монет. Без премайна. Без ICO.",
    btn_about: "О Nethxeum",
    btn_community: "Присоединиться к сообществу",
    
    stat_supply: "Макс эмиссия",
    stat_reward: "Награда за блок",
    stat_time: "Время блока",
    stat_algo: "Алгоритм",
    
    features_label: "Почему Nethxeum",
    features_title: "Идеальный Синтез",
    features_desc: "Тем, чем был бы Bitcoin, если бы Сатоши встроил конфиденциальность с первого дня.",
    feature_privacy_title: "Абсолютная Конфиденциальность",
    feature_privacy_desc: "Кольцевые подписи, RingCT и стелс-адреса делают каждую транзакцию полностью неотслеживаемой.",
    feature_scarcity_title: "Истинная Дефицитность",
    feature_scarcity_desc: "Жесткий лимит 42 млн NTU с халвингом каждые 420 000 блоков. Без хвостовой эмиссии.",
    feature_fungible_title: "Идеальная Взаимозаменяемость",
    feature_fungible_desc: "Каждый NTU равен. Нет запятнанных монет. Нет черного списка. Идеальная взаимозаменяемость.",
    feature_mining_title: "Демократичный Майнинг",
    feature_mining_desc: "Алгоритм RandomX, оптимизированный для CPU. Майните на любом компьютере. Без ASIC.",
    
    compare_label: "Сравнение",
    compare_title: "Сравнение Nethxeum",
    compare_desc: "Единственная криптовалюта с жестким лимитом эмиссии и обязательной полной конфиденциальностью.",
    
    tech_label: "Техническая Архитектура",
    tech_title: "Построен для Безопасности и Масштаба",
    tech_desc: "Форк Monero v0.18.3.3 с параметрами, вдохновленными Bitcoin.",
    
    cta_title: "Присоединяйтесь к Сети Приватных Финансов",
    cta_desc: "Загрузите кошелек, запустите ноду или начните майнинг. Станьте частью будущего.",
    cta_download: "Скачать Кошелек",
    cta_docs: "Читать Документацию",
    
    footer_desc: "Nethxeum (NTU) - Децентрализованная криптовалюта, сохраняющая конфиденциальность. Основана Рони Кэти.",
    footer_getting_started: "НАЧАЛО",
    footer_resources: "РЕСУРСЫ",
    footer_other: "ДРУГОЕ",
    footer_copyright: "Проект Nethxeum 2026. Выпущено под лицензией MIT.",
  },
  
  ar: {
    nav_getting_started: "البدء",
    nav_download: "التنزيلات",
    nav_library: "المكتبة",
    nav_blog: "المدونة",
    nav_community: "المجتمع",
    nav_resources: "الموارد",
    nav_what_is: "ما هو Nethxeum؟",
    nav_contribute: "المساهمة",
    nav_mining: "التعدين",
    nav_faq: "الأسئلة الشائعة",
    nav_security: "الأمان",
    nav_docs: "المستندات",
    nav_about: "حول",
    nav_whitepaper: "ورقة بيضاء",
    nav_vocab: "المفردات",
    nav_user_guides: "أدلة المستخدم",
    nav_dev_guides: "أدلة المطور",
    nav_scams: "تجنب الاحتيال",
    nav_legal: "قانوني",
    nav_privacy: "سياسة الخصوصية",
    
    hero_badge: "خاص · نادر · غير قابل للتتبع",
    hero_title: "مستقبل التمويل الخاص",
    hero_subtitle: "يجمع Nethxeum بينندرة Bitcoin وخصوصية Monero. 42 مليون عملة. لا预挖. لا ICO.",
    btn_about: "حول Nethxeum",
    btn_community: "انضم إلى المجتمع",
    
    stat_supply: "العرض الأقصى",
    stat_reward: "مكافأة الكتلة",
    stat_time: "وقت الكتلة",
    stat_algo: "الخوارزمية",
    
    features_label: "لماذا Nethxeum",
    features_title: "التركيبة المثالية",
    features_desc: "ما كان سيكون عليه Bitcoin لو كان ساتوشي قد بنى الخصوصية من اليوم الأول.",
    feature_privacy_title: "خصوصية مطلقة",
    feature_privacy_desc: "التوقيعات الحلقية وRingCT والعناوين المخفية تجعل كل معاملة غير قابلة للتتبع تمامًا.",
    feature_scarcity_title: "ندرة حقيقية",
    feature_scarcity_desc: "سقف صلب عند 42 مليون NTU مع انقسام كل 420,000 كتلة. بدون انبعاث ذيلي.",
    feature_fungible_title: "قابلية استبدال مثالية",
    feature_fungible_desc: "كل NTU متساوٍ. لا عملات ملوثة. لا قائمة سوداء. قابلية تبادل مثالية.",
    feature_mining_title: "تعدين ديمقراطي",
    feature_mining_desc: "خوارزمية RandomX محسّنة لوحدات المعالجة المركزية. تعدين بأي كمبيوتر. بدون ASIC.",
    
    compare_label: "مقارنة",
    compare_title: "كيف يقارن Nethxeum",
    compare_desc: "العملة الرقمية الوحيدة التي تجمع بين سقف العرض الثابت والخصوصية الكاملة الإلزامية.",
    
    tech_label: "البنية التقنية",
    tech_title: "بني للأمان والتوسع",
    tech_desc: "مشتق من Monero v0.18.3.3 مع معلمات مستوحاة من Bitcoin.",
    
    cta_title: "انضم إلى شبكة التمويل الخاص",
    cta_desc: "قم بتنزيل المحفظة، وتشغيل عقدة، أو بدء التعدين. كن جزءًا من المستقبل.",
    cta_download: "تنزيل المحفظة",
    cta_docs: "قراءة المستندات",
    
    footer_desc: "Nethxeum (NTU) - عملة رقمية لامركزية تحافظ على الخصوصية. أسسها روني كاتي.",
    footer_getting_started: "البدء",
    footer_resources: "الموارد",
    footer_other: "أخرى",
    footer_copyright: "مشروع Nethxeum 2026. تم الإصدار بموجب ترخيص MIT.",
  }
};

let currentLang = localStorage.getItem('nethxeum-lang') || 'en';

// Enhanced setLanguage with data-i18n-html support and page translations
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('nethxeum-lang', lang);
  
  const t = translations[lang] || translations.en;
  
  // Handle data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  
  // Handle data-i18n-html (innerHTML - preserves inline formatting)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  
  // Update current-lang display
  const currentLangEl = document.querySelector('.current-lang');
  if (currentLangEl) {
    currentLangEl.textContent = lang.toUpperCase();
  }
  
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  
  document.documentElement.lang = lang;
  
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
}

// Load page-specific translations from JSON
async function loadPageTranslations() {
  try {
    // Auto-detect the correct path for translations.json
    const isInPagesFolder = window.location.pathname.includes('/pages/');
    const jsonPath = isInPagesFolder ? '../js/translations.json' : 'js/translations.json';
    
    const response = await fetch(jsonPath);
    if (response.ok) {
      const pageTranslations = await response.json();
      // Merge page translations into main translations
      for (const [lang, trans] of Object.entries(pageTranslations)) {
        if (translations[lang]) {
          Object.assign(translations[lang], trans);
        }
      }
      // Re-apply current language after loading
      setLanguage(currentLang);
    }
  } catch (e) {
    console.log('Translation file not found or error loading, using built-in translations');
  }
}

// Load translations on startup
loadPageTranslations();

// Language dropdown toggle
document.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.lang-dropdown');
  const btn = document.querySelector('.lang-btn');
  
  if (btn && btn.contains(e.target)) {
    dropdown.classList.toggle('active');
  } else if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});

// Language option click
document.addEventListener('click', (e) => {
  const option = e.target.closest('.lang-option');
  if (option) {
    setLanguage(option.dataset.lang);
  }
});

// Mobile language selector toggle
document.addEventListener('click', (e) => {
  const mobileDropdown = document.querySelector('.mobile-lang-dropdown');
  const mobileBtn = document.querySelector('.mobile-lang-btn');
  
  if (mobileBtn && mobileBtn.contains(e.target)) {
    mobileDropdown.classList.toggle('active');
  } else if (mobileDropdown && !mobileDropdown.contains(e.target)) {
    mobileDropdown.classList.remove('active');
  }
});

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ============================================
// MOBILE MENU
// ============================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
  mobileMenuOverlay.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
if (mobileMenuClose) mobileMenuClose.addEventListener('click', toggleMobileMenu);
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      toggleMobileMenu();
    }
  });
});

// ============================================
// ACCORDION
// ============================================

document.addEventListener('click', (e) => {
  const header = e.target.closest('.accordion-header');
  if (!header) return;
  
  const item = header.closest('.accordion-item');
  const wasActive = item.classList.contains('active');
  
  // Close all
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
  
  // Toggle clicked
  if (!wasActive) {
    item.classList.add('active');
  }
});

// ============================================
// PARTICLE CLICK EFFECTS
// ============================================

const particlesCanvas = document.getElementById('particles-canvas');
let pCtx = null;
let particles = [];

if (particlesCanvas) {
  pCtx = particlesCanvas.getContext('2d');
  
  function resizeParticlesCanvas() {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
  }
  resizeParticlesCanvas();
  window.addEventListener('resize', resizeParticlesCanvas);
  
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 12;
      this.vy = (Math.random() - 0.5) * 12;
      this.life = 1;
      this.decay = Math.random() * 0.02 + 0.01;
      this.size = Math.random() * 4 + 2;
      const colors = ['#00D4FF', '#7B2FF7', '#E040FB', '#0077FF'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.3; // gravity
      this.life -= this.decay;
      this.size *= 0.98;
    }
    
    draw(ctx) {
      ctx.globalAlpha = this.life;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
  
  function animateParticles() {
    pCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
      p.update();
      p.draw(pCtx);
    });
    
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
  
  document.addEventListener('click', (e) => {
    for (let i = 0; i < 12; i++) {
      particles.push(new Particle(e.clientX, e.clientY));
    }
  });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = '0';
  revealObserver.observe(el);
});

// ============================================
// THREE.JS HERO ANIMATION
// ============================================

function initHeroAnimation() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    // Fallback: create CSS gradient animation
    canvas.style.background = 'radial-gradient(ellipse at 30% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(123, 47, 247, 0.15) 0%, transparent 50%)';
    return;
  }
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Create network nodes
  const nodes = [];
  const nodeCount = 80;
  const geometry = new THREE.SphereGeometry(0.05, 8, 8);
  const material = new THREE.MeshBasicMaterial({ color: 0x00D4FF });
  
  for (let i = 0; i < nodeCount; i++) {
    const mesh = new THREE.Mesh(geometry, material.clone());
    mesh.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 10
    );
    mesh.material.color.setHSL(
      0.5 + Math.random() * 0.3, // cyan to purple range
      0.8,
      0.5 + Math.random() * 0.3
    );
    mesh.userData = {
      vx: (Math.random() - 0.5) * 0.01,
      vy: (Math.random() - 0.5) * 0.01,
      vz: (Math.random() - 0.5) * 0.005
    };
    scene.add(mesh);
    nodes.push(mesh);
  }
  
  // Create connections
  const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0x00D4FF, 
    transparent: true, 
    opacity: 0.15 
  });
  
  camera.position.z = 8;
  
  // Mouse interaction
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });
  
  function animate() {
    requestAnimationFrame(animate);
    
    nodes.forEach(node => {
      node.position.x += node.userData.vx;
      node.position.y += node.userData.vy;
      node.position.z += node.userData.vz;
      
      // Boundary bounce
      if (Math.abs(node.position.x) > 10) node.userData.vx *= -1;
      if (Math.abs(node.position.y) > 6) node.userData.vy *= -1;
      if (Math.abs(node.position.z) > 5) node.userData.vz *= -1;
      
      // Mouse repulsion
      const dx = node.position.x - mouseX * 5;
      const dy = node.position.y - mouseY * 3;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2) {
        node.position.x += dx * 0.01;
        node.position.y += dy * 0.01;
      }
    });
    
    // Draw connections
    scene.children = scene.children.filter(child => !(child instanceof THREE.Line));
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = node.position.distanceTo(nodes[j].position);
        if (dist < 2.5) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([node.position, nodes[j].position]);
          const line = new THREE.Line(lineGeo, lineMaterial.clone());
          line.material.opacity = 0.15 * (1 - dist / 2.5);
          scene.add(line);
        }
      }
    });
    
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  // Initialize Three.js if available
  if (typeof THREE !== 'undefined') {
    initHeroAnimation();
  } else {
    // CSS fallback
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
      canvas.style.background = 'radial-gradient(ellipse at 30% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(123, 47, 247, 0.15) 0%, transparent 50%)';
    }
  }
});

// Export for inline scripts
window.setLanguage = setLanguage;
window.currentLang = currentLang;
