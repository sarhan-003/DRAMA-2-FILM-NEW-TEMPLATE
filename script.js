document.addEventListener('DOMContentLoaded', () => {
  // Initialize App Modules
  initLanguageSwitcher();
  initMobileMenu();
  initNavbarScroll();
  initScrollAnimations();
  initCounters();
  initVideoPlayers();
  initContactForm();
  initBackToTop();
  initWhatsAppFloating();
});

/* ==========================================================================
   MULTI-LANGUAGE DICTIONARY & TRANSLATION ENGINE
   ========================================================================== */
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_programs: "Our Programs",
    nav_gallery: "Gallery",
    nav_videos: "Videos",
    nav_donate: "Donate",
    nav_contact: "Contact Us",
    
    // Hero
    hero_sub: "Ajanta School of Drama and Film Trust",
    hero_title: "Artistic Expression. Social Transformation.",
    hero_tagline: "Empowering society through drama, film, culture, and social awareness campaigns. Nurturing creative minds and making a difference.",
    btn_donate: "Donate Now",
    btn_volunteer: "Join Volunteer",
    
    // About
    about_title: "Who We Are",
    about_subtitle: "About Ajanta School of Drama & Film",
    about_intro: "Ajanta School of Drama and Film Trust (Chhatrapati Sambhajinagar) is a dedicated non-profit organization registered with the goal of using performance arts as a tool for community development.",
    about_desc: "We believe that theatre, street plays, and cinematic storytelling have unparalleled power to inspire human empathy, educate the underprivileged, and voice critical social concerns. Through our free workshops, training programs, and awareness drives, we provide a creative platform to local youth and address vital social causes in the community.",
    about_mission_title: "Our Mission",
    about_mission_desc: "To foster social change, empower local talent, and uplift marginalized youth by training them in performing arts and media literacy.",
    about_vision_title: "Our Vision",
    about_vision_desc: "A culturally vibrant society where every individual has a voice, and art serves as a catalyst for awareness, equality, and development.",
    about_years_exp: "Years of Art & Activism",
    
    // Live Counters
    counter_volunteers: "Volunteers",
    counter_events: "Events Organized",
    counter_students: "Students Trained",
    
    // Programs
    programs_title: "Our Key Programs",
    programs_desc: "Discover how we translate art into impact through structured workshops and social initiatives.",
    prog_tag_art: "Performance Art",
    prog_tag_media: "Media Skills",
    prog_tag_culture: "Heritage",
    prog_tag_social: "Advocacy",
    
    prog_drama_title: "Drama & Theatre Workshops",
    prog_drama_desc: "Comprehensive training in acting, stage design, scripting, and direction. We host regular community plays and theatre therapy sessions.",
    prog_film_title: "Film & Cinema Training",
    prog_film_desc: "Empowering aspiring filmmakers from rural and semi-urban backgrounds with camera work, screenwriting, editing, and sound design skills.",
    prog_cultural_title: "Cultural Preservation",
    prog_cultural_desc: "Promoting local folk music, traditional dance, and heritage arts of Maharashtra to keep our rich cultural legacy alive for future generations.",
    prog_awareness_title: "Social Awareness Campaigns",
    prog_awareness_desc: "Utilizing Nukkad Natak (Street Plays) to tackle critical issues like education rights, sanitation, gender equality, and health awareness.",
    prog_learn_more: "Learn More",
    
    // Gallery
    gallery_title: "Glimpses of Our Journey",
    gallery_desc: "Capturing moments from our stage plays, training workshops, and community campaigns.",
    gallery_img1_title: "Street Play Campaign",
    gallery_img1_desc: "Spreading awareness in rural slums.",
    gallery_img2_title: "Acting Workshop",
    gallery_img2_desc: "Students practicing vocal dynamics.",
    gallery_img3_title: "Film Production",
    gallery_img3_desc: "A practical session on DSLR setups.",
    gallery_img4_title: "Annual Stage Event",
    gallery_img4_desc: "Performers at the cultural trust drama.",
    gallery_img5_title: "Community Class",
    gallery_img5_desc: "Free education through visual arts.",
    gallery_img6_title: "Youth Volunteers",
    gallery_img6_desc: "Team distribution camp.",
    
    // Videos
    videos_title: "Videos & Showcase",
    videos_desc: "Watch our stage performances, student projects, and campaign documentaries.",
    video_1_title: "Nukkad Natak on Right to Education",
    video_1_desc: "A powerful street play performed by our volunteers in local villages.",
    video_2_title: "Behind The Scenes: Drama Camp",
    video_2_desc: "Watch the journey of 50 students learning the art of expression.",
    
    // Donation
    donate_title: "Support Our Mission",
    donate_desc: "Every contribution helps us provide free artistic education, buy stage materials, and organize social awareness plays.",
    donate_msg_title: "Why Donate to Us?",
    donate_msg_desc: "Your support enables us to provide a safe space and career path for youth while addressing social evils through artistic performance. We are completely run by volunteers and donations.",
    donate_impact1_title: "Sponsor Art Education",
    donate_impact1_desc: "Sponsor a month's worth of free acting and film materials for a student.",
    donate_impact2_title: "Fund a Street Play Drive",
    donate_impact2_desc: "Enable our volunteers to travel and perform social plays in remote rural areas.",
    donate_impact3_title: "Improve Technical Gear",
    donate_impact3_desc: "Help us purchase sound equipment, stage lighting, and camera accessories.",
    donate_scan_qr: "Scan QR Code to Pay",
    donate_bank_header: "Direct Bank Transfer Details",
    donate_bank_holder: "Account Name",
    donate_bank_name: "Bank Name",
    donate_bank_no: "Account Number",
    donate_bank_ifsc: "IFSC Code",
    donate_bank_branch: "Branch",
    donate_cta: "Notify Donation via WhatsApp",
    
    // Contact
    contact_title: "Get In Touch",
    contact_desc: "Have queries or want to join us? Send us a message or visit our trust center.",
    contact_info_title: "Contact Details",
    contact_addr_title: "Address",
    contact_addr_val: "Ajanta School of Drama and Film Trust, CIDCO Area, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra - 431003, India",
    contact_phone_title: "Phone Number",
    contact_email_title: "Email Address",
    contact_social_title: "Follow Our Work",
    
    contact_form_title: "Send Us a Message",
    form_name: "Full Name",
    form_email: "Email Address",
    form_msg: "Your Message",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_success_msg: "Thank you! Your message has been sent successfully. We will get back to you soon.",
    form_error_msg: "Please fill out all fields correctly.",
    
    // Footer
    footer_quick_links: "Quick Links",
    footer_info_title: "About The Trust",
    footer_info_desc: "Registered NGO in Chhatrapati Sambhajinagar. Committed to social upliftment through theatre, film art, and cultural activities.",
    footer_rights: "Ajanta School of Drama and Film Trust. All Rights Reserved."
  },
  hi: {
    // Navigation
    nav_home: "होम",
    nav_about: "हमारे बारे में",
    nav_programs: "हमारे कार्यक्रम",
    nav_gallery: "गैलरी",
    nav_videos: "वीडियो",
    nav_donate: "दान करें",
    nav_contact: "संपर्क करें",
    
    // Hero
    hero_sub: "अजंता स्कूल ऑफ ड्रामा एंड फिल्म ट्रस्ट",
    hero_title: "कलात्मक अभिव्यक्ति। सामाजिक बदलाव।",
    hero_tagline: "नाटक, फिल्म, संस्कृति और सामाजिक जागरूकता अभियानों के माध्यम से समाज को सशक्त बनाना। रचनात्मक दिमागों को तराशना।",
    btn_donate: "अभी दान करें",
    btn_volunteer: "स्वयंसेवक बनें",
    
    // About
    about_title: "हम कौन हैं",
    about_subtitle: "अजंता स्कूल ऑफ ड्रामा एंड फिल्म के बारे में",
    about_intro: "अजंता स्कूल ऑफ ड्रामा एंड फिल्म ट्रस्ट (छत्रपति संभाजीनगर) एक समर्पित गैर-लाभकारी संगठन है जिसका उद्देश्य प्रदर्शन कलाओं के माध्यम से सामुदायिक विकास करना है।",
    about_desc: "हमारा मानना है कि रंगमंच, नुक्कड़ नाटक और फिल्म निर्माण में लोगों को प्रेरित करने, वंचितों को शिक्षित करने और महत्वपूर्ण सामाजिक मुद्दों को उठाने की अद्वितीय शक्ति होती है। हमारी मुफ्त कार्यशालाओं, प्रशिक्षण कार्यक्रमों और अभियानों के माध्यम से हम स्थानीय युवाओं को एक मंच प्रदान करते हैं और समाज की भलाई के लिए काम करते हैं।",
    about_mission_title: "हमारा मिशन",
    about_mission_desc: "प्रदर्शन कला और मीडिया साक्षरता में प्रशिक्षण देकर सामाजिक बदलाव लाना, स्थानीय प्रतिभाओं को सशक्त बनाना और वंचित युवाओं को ऊपर उठाना।",
    about_vision_title: "हमारा दृष्टिकोण",
    about_vision_desc: "एक सांस्कृतिक रूप से समृद्ध समाज जहाँ हर व्यक्ति के पास अपनी आवाज़ हो, और कला जागरूकता, समानता और विकास के लिए एक माध्यम बने।",
    about_years_exp: "कला और सक्रियता के वर्ष",
    
    // Live Counters
    counter_volunteers: "स्वयंसेवक",
    counter_events: "आयोजित कार्यक्रम",
    counter_students: "प्रशिक्षित छात्र",
    
    // Programs
    programs_title: "हमारे प्रमुख कार्यक्रम",
    programs_desc: "जानें कि हम कार्यशालाओं और सामाजिक पहलों के माध्यम से कला को प्रभाव में कैसे बदलते हैं।",
    prog_tag_art: "प्रदर्शन कला",
    prog_tag_media: "मीडिया कौशल",
    prog_tag_culture: "सांस्कृतिक विरासत",
    prog_tag_social: "वकालत",
    
    prog_drama_title: "ड्रामा और रंगमंच कार्यशालाएं",
    prog_drama_desc: "अभिनय, मंच सज्जा, पटकथा लेखन और निर्देशन में व्यापक प्रशिक्षण। हम नियमित रूप से सामुदायिक नाटकों और थिएटर थेरेपी सत्रों का आयोजन करते हैं।",
    prog_film_title: "फिल्म और सिनेमा प्रशिक्षण",
    prog_film_desc: "कैमरा वर्क, स्क्रीन राइटिंग, एडिटिंग और साउंड डिजाइन सिखाकर ग्रामीण और अर्ध-शहरी क्षेत्रों के महत्वाकांक्षी फिल्म निर्माताओं को सशक्त बनाना।",
    prog_cultural_title: "सांस्कृतिक संरक्षण",
    prog_cultural_desc: "महाराष्ट्र के स्थानीय लोक संगीत, पारंपरिक नृत्य और कला रूपों को बढ़ावा देना ताकि हमारी समृद्ध सांस्कृतिक विरासत को भविष्य की पीढ़ियों के लिए जीवित रखा जा सके।",
    prog_awareness_title: "सामाजिक जागरूकता अभियान",
    prog_awareness_desc: "शिक्षा के अधिकार, स्वच्छता, लैंगिक समानता और स्वास्थ्य जागरूकता जैसे महत्वपूर्ण मुद्दों से निपटने के लिए नुक्कड़ नाटक (स्ट्रीट प्ले) का उपयोग करना।",
    prog_learn_more: "और अधिक जानें",
    
    // Gallery
    gallery_title: "हमारी यात्रा की झलकियाँ",
    gallery_desc: "हमारे नाटकों, प्रशिक्षण कार्यशालाओं और सामुदायिक अभियानों के खूबसूरत पल।",
    gallery_img1_title: "नुक्कड़ नाटक अभियान",
    gallery_img1_desc: "ग्रामीण झुग्गी बस्तियों में जागरूकता फैलाना।",
    gallery_img2_title: "अभिनय कार्यशाला",
    gallery_img2_desc: "छात्र आवाज़ के उतार-चढ़ाव का अभ्यास करते हुए।",
    gallery_img3_title: "फिल्म निर्माण",
    gallery_img3_desc: "डीएसएलआर सेटअप पर व्यावहारिक सत्र।",
    gallery_img4_title: "वार्षिक रंगमंच कार्यक्रम",
    gallery_img4_desc: "सांस्कृतिक ट्रस्ट नाटक में कलाकार।",
    gallery_img5_title: "सामुदायिक कक्षा",
    gallery_img5_desc: "दृश्य कला के माध्यम से मुफ्त शिक्षा।",
    gallery_img6_title: "युवा स्वयंसेवक",
    gallery_img6_desc: "सेवा वितरण शिविर के दौरान टीम।",
    
    // Videos
    videos_title: "वीडियो और प्रदर्शन",
    videos_desc: "हमारे मंच प्रदर्शन, छात्र परियोजनाओं और अभियान वृत्तचित्रों को देखें।",
    video_1_title: "शिक्षा के अधिकार पर नुक्कड़ नाटक",
    video_1_desc: "स्थानीय गांवों में हमारे स्वयंसेवकों द्वारा प्रस्तुत एक प्रभावशाली नाटक।",
    video_2_title: "पर्दे के पीछे: ड्रामा कैंप",
    video_2_desc: "अभिव्यक्ति की कला सीख रहे 50 छात्रों की खूबसूरत यात्रा देखें।",
    
    // Donation
    donate_title: "हमारे मिशन का समर्थन करें",
    donate_desc: "आपका हर योगदान हमें मुफ्त कलात्मक शिक्षा देने, मंच की सामग्री खरीदने और सामाजिक नाटकों का आयोजन करने में मदद करता है।",
    donate_msg_title: "हमें दान क्यों करें?",
    donate_msg_desc: "आपका समर्थन हमें युवाओं के लिए एक सुरक्षित मंच प्रदान करने में सक्षम बनाता है, साथ ही कला के माध्यम से सामाजिक बुराइयों को दूर करने की ताकत देता है।",
    donate_impact1_title: "कला शिक्षा को प्रायोजित करें",
    donate_impact1_desc: "किसी जरूरतमंद छात्र के लिए एक महीने की मुफ्त अभिनय और फिल्म सामग्री का खर्च उठाएं।",
    donate_impact2_title: "नुक्कड़ नाटक अभियान का वित्तपोषण",
    donate_impact2_desc: "हमारे स्वयंसेवकों को दूरदराज के क्षेत्रों में सामाजिक नाटक प्रस्तुत करने में सक्षम बनाएं।",
    donate_impact3_title: "तकनीकी गियर में सुधार",
    donate_impact3_desc: "साउंड उपकरण, स्टेज लाइटिंग और कैमरा एक्सेसरीज़ खरीदने में हमारी मदद करें।",
    donate_scan_qr: "भुगतान के लिए क्यूआर कोड स्कैन करें",
    donate_bank_header: "सीधा बैंक ट्रांसफर विवरण",
    donate_bank_holder: "खाताधारक का नाम",
    donate_bank_name: "बैंक का नाम",
    donate_bank_no: "खाता संख्या",
    donate_bank_ifsc: "आईएफएससी कोड",
    donate_bank_branch: "शाखा",
    donate_cta: "व्हाट्सएप द्वारा दान की सूचना दें",
    
    // Contact
    contact_title: "हमसे संपर्क करें",
    contact_desc: "कोई प्रश्न हैं या हमसे जुड़ना चाहते हैं? हमें संदेश भेजें या हमारे ट्रस्ट केंद्र पर आएं।",
    contact_info_title: "संपर्क विवरण",
    contact_addr_title: "पता",
    contact_addr_val: "अजंता स्कूल ऑफ ड्रामा एंड फिल्म ट्रस्ट, सिडको एरिया, छत्रपति संभाजीनगर (औरंगाबाद), महाराष्ट्र - 431003, भारत",
    contact_phone_title: "फ़ोन नंबर",
    contact_email_title: "ईमेल पता",
    contact_social_title: "हमारे काम को फॉलो करें",
    
    contact_form_title: "हमें संदेश भेजें",
    form_name: "पूरा नाम",
    form_email: "ईमेल पता",
    form_msg: "आपका संदेश",
    form_submit: "संदेश भेजें",
    form_sending: "भेजा जा रहा है...",
    form_success_msg: "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।",
    form_error_msg: "कृपया सभी फ़ील्ड सही तरीके से भरें।",
    
    // Footer
    footer_quick_links: "त्वरित लिंक्स",
    footer_info_title: "ट्रस्ट के बारे में",
    footer_info_desc: "छत्रपति संभाजीनगर में पंजीकृत एनजीओ। थिएटर, फिल्म कला और सांस्कृतिक गतिविधियों के माध्यम से सामाजिक उत्थान के लिए प्रतिबद्ध।",
    footer_rights: "अजंता स्कूल ऑफ ड्रामा एंड फिल्म ट्रस्ट। सर्वाधिकार सुरक्षित।"
  },
  mr: {
    // Navigation
    nav_home: "होम",
    nav_about: "आमच्याबद्दल",
    nav_programs: "आमचे कार्यक्रम",
    nav_gallery: "गॅलरी",
    nav_videos: "व्हिडिओ",
    nav_donate: "दान करा",
    nav_contact: "संपर्क साधा",
    
    // Hero
    hero_sub: "अजिंठा स्कूल ऑफ ड्रामा अँड फिल्म ट्रस्ट",
    hero_title: "कलात्मक अभिव्यक्ती। सामाजिक बदल।",
    hero_tagline: "नाटक, चित्रपट, संस्कृती आणि सामाजिक जनजागृती मोहिमांच्या माध्यमातून समाजाचे सक्षमीकरण करणे. नवनिर्मितीला वाव देणे.",
    btn_donate: "आत्ताच दान करा",
    btn_volunteer: "स्वयंसेवक व्हा",
    
    // About
    about_title: "आम्ही कोण आहोत",
    about_subtitle: "अजिंठा स्कूल ऑफ ड्रामा अँड फिल्मबद्दल",
    about_intro: "अजिंठा स्कूल ऑफ ड्रामा अँड फिल्म ट्रस्ट (छत्रपती संभाजीनगर) ही एक समर्पित बिगर-नफा संस्था आहे जी कला सादरीकरणाचा वापर समुदाय विकासाचे साधन म्हणून करण्यासाठी स्थापन केली आहे.",
    about_desc: "थिएटर, पथनाट्य आणि चित्रपटांमध्ये मानवी सहसंवेदना जागृत करण्याची, वंचितांना शिक्षित करण्याची आणि सामाजिक समस्यांवर आवाज उठवण्याची अफाट ताकद असते, असा आमचा विश्वास आहे. आमच्या मोफत कार्यशाळा, प्रशिक्षण आणि जनजागृती मोहिमांद्वारे आम्ही स्थानिक तरुणांना एक व्यासपीठ उपलब्ध करून देतो.",
    about_mission_title: "आमचे ध्येय",
    about_mission_desc: "परफॉर्मिंग आर्ट्स आणि मीडिया साक्षरतेमध्ये प्रशिक्षण देऊन सामाजिक बदल घडवणे, स्थानिक कलागुणांना वाव देणे आणि वंचित तरुणांना सक्षम करणे.",
    about_vision_title: "आमचे उद्दिष्ट",
    about_vision_desc: "सांस्कृतिकदृष्ट्या समृद्ध समाज जिथे प्रत्येक व्यक्तीला स्वतःचे मत मांडण्याचा अधिकार असेल आणि कला ही जनजागृती आणि समानतेचे माध्यम बनेल.",
    about_years_exp: "कला आणि चळवळीची वर्षे",
    
    // Live Counters
    counter_volunteers: "स्वयंसेवक",
    counter_events: "आयोजित कार्यक्रम",
    counter_students: "प्रशिक्षित विद्यार्थी",
    
    // Programs
    programs_title: "आमचे प्रमुख उपक्रम",
    programs_desc: "कार्यशाळा आणि सामाजिक उपक्रमांच्या माध्यमातून आम्ही कलात्मकतेला प्रत्यक्ष प्रभावात कसे बदलतो ते पहा.",
    prog_tag_art: "परफॉर्मिंग आर्ट",
    prog_tag_media: "मीडिया कौशल्ये",
    prog_tag_culture: "सांस्कृतिक वारसा",
    prog_tag_social: "समर्थन",
    
    prog_drama_title: "नाटक आणि रंगमंच कार्यशाळा",
    prog_drama_desc: "अभिनय, नेपथ्य, पटकथा लेखन आणि दिग्दर्शनाचे सर्वसमावेशक प्रशिक्षण. आम्ही नियमितपणे नाटकांचे आणि थिएटर थेरपी सत्रांचे आयोजन करतो.",
    prog_film_title: "चित्रपट आणि सिनेमा प्रशिक्षण",
    prog_film_desc: "ग्रामीण आणि निमशहरी भागातील होतकरू दिग्दर्शक, कॅमेरामन आणि एडिटरना कॅमेरा वर्क, स्क्रीनप्ले आणि साऊंड डिझाइनचे मोफत शिक्षण देणे.",
    prog_cultural_title: "सांस्कृतिक वारसा जतन",
    prog_cultural_desc: "महाराष्ट्रातील स्थानिक लोकसंगीत, पारंपरिक नृत्य आणि कला प्रकारांना प्रोत्साहन देऊन आपली समृद्ध सांस्कृतिक परंपरा भावी पिढ्यांसाठी जतन करणे.",
    prog_awareness_title: "सामाजिक जनजागृती मोहिमा",
    prog_awareness_desc: "शिक्षणाचा अधिकार, स्वच्छता, लिंग समानता आणि आरोग्य जनजागृती यांसारख्या गंभीर समस्या मांडण्यासाठी पथनाट्यांचा (स्ट्रीट प्ले) वापर करणे.",
    prog_learn_more: "अधिक जाणून घ्या",
    
    // Gallery
    gallery_title: "आमच्या प्रवासाची झलक",
    gallery_desc: "आमची नाटके, प्रशिक्षण कार्यशाळा आणि सामाजिक मोहिमांमधील काही महत्त्वाचे क्षण.",
    gallery_img1_title: "पथनाट्य मोहीम",
    gallery_img1_desc: "ग्रामीण भागात जनजागृती करताना.",
    gallery_img2_title: "अभिनय कार्यशाळा",
    gallery_img2_desc: "विद्यार्थी आवाजाच्या चढ-उतारांचा सराव करताना.",
    gallery_img3_title: "चित्रपट निर्मिती",
    gallery_img3_desc: "डीएसएलआर कॅमेरा सेटअपचे प्रात्यक्षिक सत्र.",
    gallery_img4_title: "वार्षिक रंगमंच कार्यक्रम",
    gallery_img4_desc: "सांस्कृतिक ट्रस्ट नाटकात सादर करणारे कलाकार.",
    gallery_img5_title: "कम्युनिटी क्लास",
    gallery_img5_desc: "व्हिज्युअल आर्ट्सच्या माध्यमातून मोफत शिक्षण.",
    gallery_img6_title: "तरुण स्वयंसेवक",
    gallery_img6_desc: "सेवा वाटप शिबिरा दरम्यानची टीम.",
    
    // Videos
    videos_title: "व्हिडिओ आणि सादरीकरण",
    videos_desc: "आमचे रंगमंच सादरीकरण, विद्यार्थी प्रकल्प आणि मोहिमेचे माहितीपट पहा.",
    video_1_title: "शिक्षणाच्या अधिकारावर पथनाट्य",
    video_1_desc: "स्थानिक गावांमध्ये आमच्या स्वयंसेवकांनी सादर केलेले एक प्रबोधनात्मक पथनाट्य.",
    video_2_title: "पडद्यामागे: ड्रामा कॅम्प",
    video_2_desc: "अभिव्यक्तीची कला शिकणाऱ्या ५० विद्यार्थ्यांचा सुंदर प्रवास पहा.",
    
    // Donation
    donate_title: "आमच्या कार्यास हातभार लावा",
    donate_desc: "तुमची छोटीशी मदत आम्हाला मोफत कला शिक्षण देण्यास, रंगमंचाचे साहित्य खरेदी करण्यास आणि प्रबोधनात्मक नाटके आयोजित करण्यास मदत करते.",
    donate_msg_title: "आम्हाला दान का करावे?",
    donate_msg_desc: "तुमचे सहकार्य आम्हाला तरुणांना सुरक्षित व्यासपीठ आणि करिअरची वाट मिळवून देण्यास मदत करते, तसेच कलेद्वारे सामाजिक प्रबोधन करण्याचे बळ देते.",
    donate_impact1_title: "कला शिक्षणाचे प्रायोजकत्व",
    donate_impact1_desc: "एका विद्यार्थ्यासाठी महिनाभराचे मोफत अभिनय आणि चित्रपट साहित्याचे प्रायोजकत्व घ्या.",
    donate_impact2_title: "पथनाट्य मोहिमेला मदत",
    donate_impact2_desc: "आमच्या स्वयंसेवकांना दुर्गम ग्रामीण भागात जाऊन प्रबोधनात्मक नाटके सादर करण्यास सक्षम करा.",
    donate_impact3_title: "तांत्रिक साधनांचे आधुनिकीकरण",
    donate_impact3_desc: "आवाज यंत्रणा (Sound equipment), स्टेज लाइट्स आणि कॅमेरा साहित्याची खरेदी करण्यास मदत करा.",
    donate_scan_qr: "पेमेंटसाठी क्यूआर कोड स्कॅन करा",
    donate_bank_header: "थेट बँक हस्तांतरण तपशील",
    donate_bank_holder: "खातेदाराचे नाव",
    donate_bank_name: "बँकेचे नाव",
    donate_bank_no: "खाते क्रमांक",
    donate_bank_ifsc: "आयएफएससी कोड",
    donate_bank_branch: "शाखा",
    donate_cta: "व्हॉट्सॲपद्वारे देणगीची माहिती द्या",
    
    // Contact
    contact_title: "आमच्याशी संपर्क साधा",
    contact_desc: "काही प्रश्न आहेत की आमच्याशी जोडले जायचे आहे? आम्हाला संदेश पाठवा किंवा आमच्या केंद्राला भेट द्या.",
    contact_info_title: "संपर्क तपशील",
    contact_addr_title: "पत्ता",
    contact_addr_val: "अजिंठा स्कूल ऑफ ड्रामा अँड फिल्म ट्रस्ट, सिडको परिसर, छत्रपती संभाजीनगर (औरंगाबाद), महाराष्ट्र - ४३१०MD, भारत",
    contact_phone_title: "फोन नंबर",
    contact_email_title: "ईमेल पत्ता",
    contact_social_title: "आमचे काम फॉलो करा",
    
    contact_form_title: "आम्हाला संदेश पाठवा",
    form_name: "पूर्ण नाव",
    form_email: "ईमेल पत्ता",
    form_msg: "तुमचा संदेश",
    form_submit: "संदेश पाठवा",
    form_sending: "पाठवत आहे...",
    form_success_msg: "धन्यवाद! तुमचा संदेश यशस्वीरीत्या पाठवला गेला आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.",
    form_error_msg: "कृपया सर्व रकाने योग्य रीतीने भरा.",
    
    // Footer
    footer_quick_links: "द्रुत लिंक्स",
    footer_info_title: "ट्रस्टबद्दल",
    footer_info_desc: "छत्रपती संभाजीनगरमधील नोंदणीकृत संस्था (NGO). रंगमंच, चित्रपट कला आणि सांस्कृतिक उपक्रमांद्वारे सामाजिक प्रगतीसाठी कटिबद्ध.",
    footer_rights: "अजिंठा स्कूल ऑफ ड्रामा अँड फिल्म ट्रस्ट. सर्व हक्क राखीव."
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Read saved language from localStorage if available
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  
  // Set initial active state in HTML buttons
  langButtons.forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    
    btn.addEventListener('click', () => {
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setLanguage(btn.dataset.lang);
    });
  });
  
  // Apply initial translations
  setLanguage(currentLang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('selectedLanguage', lang);
  
  // Update HTML lang attribute for SEO and accessibility
  document.documentElement.lang = lang;

  // Translate all text elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // Preserve HTML structure if any child elements exist (e.g. icon spans)
      const icon = el.querySelector('i');
      if (icon) {
        // Simple helper to keep FontAwesome icon and change adjacent text
        el.innerHTML = '';
        el.appendChild(icon);
        el.appendChild(document.createTextNode(' ' + translations[lang][key]));
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Translate form placeholders
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(input => {
    const key = input.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      input.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-item a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

/* ==========================================================================
   NAVBAR SCROLL STYLE & ACTIVE NAV ANCHOR HIGHLIGHT
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.header-nav');
  const sections = document.querySelectorAll('section, header');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    // 1. Scrolled class styling
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // 2. Active menu anchor highlighting
    let currentActiveId = '';
    const scrollPosition = window.scrollY + 120; // offset for nav bar

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentActiveId = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.querySelector('a').getAttribute('href');
      if (href === `#${currentActiveId}` || (currentActiveId === 'home' && href === '#')) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after animating once
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/* ==========================================================================
   LIVE STAT COUNTERS
   ========================================================================== */
function initCounters() {
  const counterSection = document.querySelector('.about-counters');
  const counters = document.querySelectorAll('.counter-number');
  
  if (!counterSection || counters.length === 0) return;

  let hasStarted = false;

  const countUp = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      let current = 0;
      // Calculate stepping speed based on target size
      const duration = 2000; // ms
      const stepTime = Math.max(Math.floor(duration / target), 15);
      
      const timer = setInterval(() => {
        current += Math.ceil(target / (duration / stepTime));
        if (current >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = current + suffix;
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStarted) {
        countUp();
        hasStarted = true;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counterSection);
}

/* ==========================================================================
   DYNAMIC YOUTUBE VIDEO LOADER (IMPROVES PAGE LOAD SPEED)
   ========================================================================== */
function initVideoPlayers() {
  const placeholders = document.querySelectorAll('.video-placeholder');
  
  placeholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
      const videoId = placeholder.getAttribute('data-video-id');
      const container = placeholder.parentElement;
      
      // Create actual YouTube iframe
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
      iframe.setAttribute('title', 'YouTube video player');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', 'true');
      
      // Empty container and append iframe
      container.innerHTML = '';
      container.appendChild(iframe);
    });
  });
}

/* ==========================================================================
   CONTACT FORM VALIDATION & DUMMY SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('formToast');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const messageInput = document.getElementById('formMessage');
    const submitBtn = form.querySelector('.form-submit-btn');
    
    // Simple Validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim() || !emailInput.checkValidity()) {
      showToast(translations[currentLang].form_error_msg, 'error');
      return;
    }
    
    // Visual Loading Feedback
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = translations[currentLang].form_sending;
    submitBtn.disabled = true;
    
    // Simulate API request delay
    setTimeout(() => {
      showToast(translations[currentLang].form_success_msg, 'success');
      form.reset();
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }, 1200);
  });

  function showToast(message, type) {
    toast.textContent = message;
    toast.className = `toast-msg ${type}`;
    
    // Hide toast after 6 seconds
    setTimeout(() => {
      toast.className = 'toast-msg';
      toast.textContent = '';
    }, 6000);
  }
}

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   WHATSAPP FLOATING INTEGRATION
   ========================================================================== */
function initWhatsAppFloating() {
  const floatBtn = document.getElementById('whatsappFloatBtn');
  if (!floatBtn) return;

  floatBtn.addEventListener('click', () => {
    const phoneNumber = "919000000000"; // Replace with actual NGO Phone number (with country code, e.g. 91 for India)
    const englishText = "Hello Ajanta School of Drama and Film Trust! I would like to get more information about your workshops and volunteer opportunities.";
    const marathiText = "नमस्कार अजिंठा स्कूल ऑफ ड्रामा अँड फिल्म ट्रस्ट! मला आपल्या कार्यशाळा आणि स्वयंसेवक उपक्रमांबद्दल अधिक माहिती हवी आहे.";
    const hindiText = "नमस्ते अजंता स्कूल ऑफ ड्रामा एंड फिल्म ट्रस्ट! मुझे आपकी कार्यशालाओं और स्वयंसेवक गतिविधियों के बारे में अधिक जानकारी चाहिए।";
    
    let text = englishText;
    if (currentLang === 'mr') text = marathiText;
    if (currentLang === 'hi') text = hindiText;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
}
