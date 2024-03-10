import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    resources: {
        en: {
            translation: {
                home: "Home",
                announcement: "Announcement",
                about_us: "About us",
                administration: "Administration",
                academics: "Academics",
                admission: "Admissions",
                people: "People",
                research: "Research",
                t_p: "Training and Placements",
                outreach: "Outreach Activities",
                nirf: "NIRF",
                alumni: "Alumni",
                feepay: "Fee Payment",
                dept: "Departments",
                mis: "MIS Portal",
                search: "Search...",
                gian: "G.I.A.N",
                login: "Login",
                news_events: "News and Events",
                quicklink: "Quick Links",
                notice: "Notice Board",
                placement_stat: "Placement Statistics",
                synapse: "Synapse",
                tweet: "Tweets",
                info: "Information",
                natpor: "National Portals",
                contact_us: "Contact Us",
                visit: "Visit Count",
                announcement_content: "All nine eligible B.Tech. programmes have been accredited by the NBAAll nine eligible B.Tech. programmes have been accredited by the NBAAll nine eligible B.Tech. programmes have been accredited by the NBAAll nine eligible B.Tech. programmes have been accredited by theAll nine eligible B.Tech. programmes have been accredited by the",
                history: "History",
                history_content: "NIT Goa was established in 2010 as one of the 31 NITs in India under the NIT Act 2007 (Amended 2012). It was mentored by NIT Karnataka, Surathkal and received full funding support from the Ministry of Human Resource Development, Government of India. It admitted its first batch of students in 2010-11 and started academic activities in a temporary campus at Goa Engineering College, Farmagudi. It faced some challenges in acquiring land for its permanent campus, but finally got 300 acres of land at Cuncolim in 2013. It is expected to move to its permanent campus by January 2024.",
                campus_admin: "Campus Administration",
                campus_admin_content: "NIT Goa is governed by a Board of Governors, chaired by Dr. V. K. Aatre, a former scientific adviser to the Defence Minister of India. The Director of the institute is Prof. O. R. Jaiswal, who is assisted by four Deans and eight Heads of Departments. The institute also has a Senate, a Finance Committee and a Building & Works Committee to oversee academic, financial and infrastructural matters respectively. The Registrar of the institute is Mr. S. K. Das, who is responsible for the administration and management of the institute.",
                achievements: "Achievements",
                achievement_content: "NIT Goa offers undergraduate, postgraduate and doctoral programs in five engineering disciplines: Computer Science and Engineering, Electrical and Electronics Engineering, Electronics and Communication Engineering, Civil Engineering and Mechanical Engineering. It also offers PhD programs in Physics, Chemistry, Mathematics, Economics and English. The institute has a faculty strength of 56 and a student strength of about 1000. The institute has been ranked among the top engineering colleges in India by various agencies such as NIRF, Outlook, The Week, etc. The institute has also received several research grants and awards from various funding agencies such as DST, DRDO, ISRO, etc. The institute has also established collaborations with several national and international institutions and industries for academic and research purposes. Some of the notable achievements of the institute are:",
                achievement_sub_1: "Developing a low-cost ventilator prototype for COVID-19 patients in collaboration with BITS Pilani, Goa.",
                achievement_sub_2: " Developing a smart helmet for motorcycle riders that can detect drowsiness and alert the rider.",
                achievement_sub_3: "Developing a solar-powered water purifier that can produce potable water from seawater.",
                achievement_sub_4: "Winning the first prize in the Smart India Hackathon 2019 for developing a solution for detecting fake news using machine learning.",
                achievement_sub_5: "Winning the second prize in the e-Yantra Robotics Competition 2018 for developing a robot that can perform agricultural tasks",
                reach_us: "How to Reach us",
                reach_us_content: "NIT Goa Campus is located at Farmagudi, Ponda, Goa.Farmagudi is located on a plateau 3 km from the main Ponda City on the way towards Panaji. Ponda is a city and a municipal council in North Goa district in the Indian state of Goa. It is located in the central part of Goa. Ponda city lies about 28 km south-east of Panaji and 17 km north-east of Margao and is also the capital of Ponda Taluka. Ponda is well connected by road to the Panaji (Capital of Goa) and main railway junction of Margao.",
                Air: "Air",
                Rail: "Rail",
                Air_content: "Goa’s sole airport, the ‘Dabolim Airport’ in Vasco, caters to domestic and international airlines that stop en route to other Indian destinations. It is at a distance of around 30 Km (45 Minute ride) from the institute.",
                Rail_content: "Goa has two rail lines-one run by the South Western Railway and the other by the Konkan Railway. Closest major railway station is ‘Madgaon Railway Station’ which is around 20 Km (30 Minute ride) from the institute.",
                location: "NIT Goa Location",
                bog: "Board of Governers",
                director: "Director",
                registrar: "Registrar",
                senate: "Senate",
                dean: "Deans",
                bwc: "Building and Works Committee",
                finance: "Finance",
                reports: "Reports",
                academic_calender: "Academic Calendar",
                dissertation: "Dissertation",
            }
        },

        hi: {
            translation: {
                home: "होम",
                announcement: "सूचना",
                about_us: "हमारा परिचय",
                administration: "प्रशासन",
                academics: "अकादमिक",
                admission: "दाखिला",
                people: "लोग",
                research: "शोध",
                t_p: "प्रशिक्षण एवं नियोजन",
                outreach: "आउटरीच गतिविधियां",
                nirf: "एन. आई. आर. एफ.",
                alumni: "पूर्व छात्र",
                feepay: "शुल्क भुगतान",
                dept: "विभाग",
                mis: "एम.आई.एस पोर्टल",
                search: "खोजें...",
                gian: "जी. आई. ए. एन",
                login: "लॉगइन",
                news_events: "समाचार और कार्यक्रम",
                quicklink: "त्वरित लिंक",
                notice: "सूचना पट्ट",
                placement_stat: "प्लेसमेंट सांख्यिकी",
                synapse: "सूत्रयुग्मन",
                tweet: "ट्वीट्स",
                info: "जानकारी",
                natpor: "राष्ट्रीय पोर्टल",
                contact_us: "संपर्क करें",
                visit: "आगंतुक गणना",
                announcement_content: "सभी नौ पात्र बी.टेक. कार्यक्रमों को एनबीए द्वारा मान्यता प्राप्त है, सभी नौ पात्र बी.टेक. कार्यक्रमों को एनबीए द्वारा मान्यता प्राप्त है, सभी नौ पात्र बी.टेक. कार्यक्रमों को एनबीए द्वारा मान्यता प्राप्त है, सभी नौ पात्र बी.टेक. कार्यक्रमों को सभी नौ पात्र बी.टेक. द्वारा मान्यता प्राप्त है। कार्यक्रमों को मान्यता दी गई है",
                history: "इतिहास",
                history_content: "एनआईटी गोवा की स्थापना 2010 में एनआईटी अधिनियम 2007 (संशोधित 2012) के तहत भारत के 31 एनआईटी में से एक के रूप में की गई थी। इसका मार्गदर्शन एनआईटी कर्नाटक, सुरथकल द्वारा किया गया था और इसे भारत सरकार के मानव संसाधन विकास मंत्रालय से पूर्ण वित्त पोषण सहायता प्राप्त हुई थी। इसने 2010-11 में छात्रों के अपने पहले बैच को प्रवेश दिया और गोवा इंजीनियरिंग कॉलेज, फ़ार्मागुडी में एक अस्थायी परिसर में शैक्षणिक गतिविधियाँ शुरू कीं। इसे अपने स्थायी परिसर के लिए भूमि प्राप्त करने में कुछ चुनौतियों का सामना करना पड़ा, लेकिन अंततः 2013 में कुनकोलिम में 300 एकड़ जमीन मिल गई। जनवरी 2024 तक इसके अपने स्थायी परिसर में स्थानांतरित होने की उम्मीद है।",
                campus_admin: "परिसर प्रशासन",
                campus_admin_content: "एनआईटी गोवा एक बोर्ड ऑफ गवर्नर्स द्वारा शासित होता है, जिसके अध्यक्ष भारत के रक्षा मंत्री के पूर्व वैज्ञानिक सलाहकार डॉ. वी.के. आत्रे होते हैं। संस्थान के निदेशक प्रोफेसर ओ.आर.जायसवाल हैं, जिनकी सहायता के लिए चार डीन और आठ विभागाध्यक्ष हैं। संस्थान में क्रमशः शैक्षणिक, वित्तीय और ढांचागत मामलों की देखरेख के लिए एक सीनेट, एक वित्त समिति और एक भवन एवं निर्माण समिति भी है। संस्थान के रजिस्ट्रार श्री एस.के. दास हैं, जो संस्थान के प्रशासन और प्रबंधन के लिए जिम्मेदार हैं।",
                achievements: "उपलब्धियाँ",
                achievements_content: "एनआईटी गोवा पांच इंजीनियरिंग विषयों में स्नातक, स्नातकोत्तर और डॉक्टरेट कार्यक्रम प्रदान करता है: कंप्यूटर विज्ञान और इंजीनियरिंग, इलेक्ट्रिकल और इलेक्ट्रॉनिक्स इंजीनियरिंग, इलेक्ट्रॉनिक्स और संचार इंजीनियरिंग, सिविल इंजीनियरिंग और मैकेनिकल इंजीनियरिंग। यह भौतिकी, रसायन विज्ञान, गणित, अर्थशास्त्र और अंग्रेजी में पीएचडी कार्यक्रम भी प्रदान करता है। संस्थान की संकाय संख्या 56 है और छात्र संख्या लगभग 1000 है। संस्थान को एनआईआरएफ, आउटलुक, द वीक आदि जैसी विभिन्न एजेंसियों द्वारा भारत के शीर्ष इंजीनियरिंग कॉलेजों में स्थान दिया गया है। संस्थान को कई शोध अनुदान भी प्राप्त हुए हैं। और विभिन्न फंडिंग एजेंसियों जैसे डीएसटी, डीआरडीओ, इसरो आदि से पुरस्कार। संस्थान ने शैक्षणिक और अनुसंधान उद्देश्यों के लिए कई राष्ट्रीय और अंतर्राष्ट्रीय संस्थानों और उद्योगों के साथ सहयोग भी स्थापित किया है। संस्थान की कुछ उल्लेखनीय उपलब्धियाँ हैं:",
                achievement_sub_1: "बिट्स पिलानी, गोवा के सहयोग से COVID-19 रोगियों के लिए कम लागत वाला वेंटिलेटर प्रोटोटाइप विकसित करना।",
                achievement_sub_2: "मोटरसाइकिल सवारों के लिए एक स्मार्ट हेलमेट विकसित किया जा रहा है जो उनींदापन का पता लगा सकता है और सवार को सचेत कर सकता है।",
                achievement_sub_3: "एक सौर ऊर्जा संचालित जल शोधक का विकास करना जो समुद्री जल से पीने योग्य पानी का उत्पादन कर सकता है।",
                achievement_sub_4: "मशीन लर्निंग का उपयोग करके फर्जी खबरों का पता लगाने के लिए एक समाधान विकसित करने के लिए स्मार्ट इंडिया हैकथॉन 2019 में पहला पुरस्कार जीता।",
                achievement_sub_5: "कृषि कार्य करने में सक्षम रोबोट विकसित करने के लिए ई-यंत्र रोबोटिक्स प्रतियोगिता 2018 में दूसरा पुरस्कार जीता",
                reach_us: "हम तक कैसे पहुंचे",
                reach_us_content: "एनआईटी गोवा कैंपस फरमागुडी, पोंडा, गोवा में स्थित है। फरमागुडी पणजी की ओर जाने वाले रास्ते पर मुख्य पोंडा शहर से 3 किमी दूर एक पठार पर स्थित है। पोंडा भारत के गोवा राज्य के उत्तरी गोवा जिले में एक शहर और नगरपालिका परिषद है। यह गोवा के मध्य भाग में स्थित है। पोंडा शहर पणजी से लगभग 28 किमी दक्षिण-पूर्व और मडगांव से 17 किमी उत्तर-पूर्व में स्थित है और यह पोंडा तालुका की राजधानी भी है। पोंडा पणजी (गोवा की राजधानी) और मडगांव के मुख्य रेलवे जंक्शन से सड़क मार्ग द्वारा अच्छी तरह से जुड़ा हुआ है।",
                Air: "हवाई यात्रा",
                Rail: "रेल",
                Air_content: "गोवा का एकमात्र हवाई अड्डा, वास्को में 'डाबोलिम हवाई अड्डा', घरेलू और अंतरराष्ट्रीय एयरलाइनों को सेवाएं प्रदान करता है जो अन्य भारतीय गंतव्यों के रास्ते में रुकती हैं। यह संस्थान से लगभग 30 किमी (45 मिनट की सवारी) की दूरी पर है।",
                Rail_content: "गोवा में दो रेल लाइनें हैं- एक दक्षिण पश्चिम रेलवे द्वारा और दूसरी कोंकण रेलवे द्वारा। निकटतम प्रमुख रेलवे स्टेशन 'मडगांव रेलवे स्टेशन' है जो संस्थान से लगभग 20 किमी (30 मिनट की सवारी) दूर है।",
                location: "एनआईटी गोवा का स्थान", 
                bog: "गवर्नर्स बोर्ड",
                director: "निदेशक",
                registrar: "रजिस्ट्रार",
                senate: "व्यवस्थापिका सभा",
                dean: "डीन",
                bwc: "भवन एवं कार्य समिति",
                finance: "आर्थिक प्रबन्ध",
                reports: "प्रतिवेदन",
                academic_calender: "शैक्षणिक कैलेंडर",
                dissertation: "विवरण",

            }
        }
    }
})

export default i18n