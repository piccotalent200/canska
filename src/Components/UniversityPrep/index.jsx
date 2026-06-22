"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';
import Breadcrumb from '../Reusable/Breadcrumb';
import Link from 'next/link';
import { useState } from "react";
import { Tabs } from "flowbite-react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ScrollAnimatedElement from '../Reusable/ScrollAnimatedElement';

const breadcrumbLinks = [
    { label: 'Home', href: '/' },
    { label: 'University Prep', href: '/university-prep?activeTab=0' }
];


const customTabsTheme = {
    tablist: {
        base: "sticky top-[80px] z-[20] whitespace-nowrap !flex-nowrap flex items-center gap-2 p-[16px] sm:p-[16px_32px] lg:p-[16px_56px] bg-[rgba(251,250,255,0.9)] border-y border-[#EDE7FB] backdrop-blur-[12px] overflow-x-auto",
        tabitem: {
            base: "p-0 !bg-transparent hover:!bg-transparent",
        },
    },
};

const universityData = [
    {
        "id": 1,
        "rank": "01",
        "name": "The Massachusetts Institute of Technology (MIT)",
        "url": "https://www.mit.edu",
        "logoSrc": "/img/Massachusetts-Institute-of-Technology.jpg",
        "highlight": "MIT remains the world leader in technical and scientific innovation, maintaining its rank through unparalleled research output and employer reputation.",
        "description": "For students aspiring to secure its prestigious funding packages, which can exceed US$400,000 over four years, a portfolio must clearly demonstrate the practical application of theoretical concepts. MIT particularly values applicants who have patented inventions, led engineering teams, developed impactful research, or contributed to open source software projects. MIT’s need-blind admissions policy for international students further strengthens its reputation as a foremost institution for exceptional global scholars. The admissions committee places significant emphasis on grit, initiative, and collaborative problem solving, favouring evidence of “making” and “doing” over passive academic achievement alone. A portfolio featuring a working prototype, independent research, or a substantial technical capstone project can often become the defining factor in securing admission and unlocking generous scholarship."
    },
    {
        "id": 2,
        "rank": "02",
        "name": "Imperial College London",
        "url": "https://www.imperial.ac.uk",
        "logoSrc": "/img/Imperial-College-London.jpg",
        "highlight": "Imperial College London has risen to become one of the world’s leading universities through its intense focus on STEMB disciplines, encompassing Science, Technology, Engineering, Medicine, and Business.",
        "description": "It is a key destination for high achieving school students pursuing prestigious awards such as the Imperial President’s Scholarship, which provides substantial tuition support and research funding. Portfolios submitted to Imperial must demonstrate strong industrial relevance and transnational research potential. Successful applicants naturally showcase a deep academic and practical focus within a specialised field such as renewable energy, artificial intelligence, or biomedical engineering. The university’s location in London offers exceptional global networking opportunities, making evidence of internships, collaborative projects, or research partnerships with worldwide organisations particularly valuable. Admissions officers seek students who combine sustained academic excellence with an articulated ambition to create research driven impact on industries and the global economy."
    },
    {
        "id": 3,
        "rank": "03",
        "name": "Stanford University",
        "url": "https://www.stanford.edu",
        "logoSrc": "/img/Stanford-University.jpg",
        "highlight": "Stanford University is universally regarded as the world epicentre of interdisciplinary invention and entrepreneurial thinking.",
        "description": "For students aiming to secure prestigious funding opportunities such as the Knight Hennessy Scholars programme, which can exceed US$300,000 in value, a portfolio must demonstrate purposeful leadership and meaningful impact. Stanford actively seeks the unconventional scholar, students who bridge disciplines in innovative ways, such as combining computer science with urban mobility systems or philosophy with ethical artificial intelligence. The strongest student portfolios document not only accomplishments, but also the broader significance of the work and its contribution to communities or society. Stanford’s renowned holistic review process places exceptional importance on intellectual vitality, curiosity, and the pursuit of knowledge beyond the classroom. For scholarship applicants, portfolios that present a compelling narrative of systemic change, social innovation, or a successfully executed mission driven enterprise are often highly competitive for the university’s top merit based and need based scholarship awards."
    },
    {
        "id": 4,
        "rank": "04",
        "name": "University of Oxford",
        "url": "https://www.ox.ac.uk",
        "logoSrc": "/img/University-of-Oxford.jpg",
        "highlight": "University of Oxford represents the pinnacle of tutorial based enquiry and traditional academic rigour.",
        "description": "For students pursuing prestigious scholarship opportunities such as the Clarendon Fund or the Rhodes Scholarship, a portfolio should emphasise primary research, intellectual depth, and advanced subject mastery. Unlike the broader college admissions model commonly associated with countless American universities, Oxford strongly rewards applicants who demonstrate an exceptional academic “spike” within a single discipline. Competitive portfolios often include evidence of high level debating, published academic work, original research projects, or outstanding performance in internationally recognised Olympiads and competitions. Admissions decisions are heavily influenced by the interview process, where students are evaluated on their capability to think critically, respond analytically, and engage in sophisticated academic dialogue. As a result, student portfolios that include reflection on independent reading, detailed research explorations, or a substantial project or thesis are particularly highly valuable. Obtaining a high-value scholarship eventually requires demonstrating the potential to become a future world class academic capable of producing independent and groundbreaking research within a chosen field."
    },
    {
        "id": 5,
        "rank": "05",
        "name": "Harvard University",
        "url": "https://www.harvard.edu",
        "logoSrc": "/img/Harvard-University.jpg",
        "highlight": "Harvard University continues to define universal leadership and institutional prestige on a global scale.",
        "description": "As a need-blind institution for all applicants, including international students, Harvard can provide financial aid packages that exceed US$350,000 for students with demonstrated need. A competitive Harvard portfolio must communicate transformative potential and a very clear capacity for future impact. The admissions committee consistently seeks students who show the potential to reshape fields such as politics, science, business, technology, or the arts through originality, leadership, and intellectual influence. Strong portfolios often demonstrate citizen leadership by presenting tangible contributions to local, national, or global communities. Harvard also places very significant value on diversity of thought, intellectual courage, and a willingness to challenge conventional ideas. For students aiming to secure high value scholarships and financial support, the overall narrative of the portfolio should connect a distinct academic or extracurricular “spike” with a captivating theory of change, clearly explaining how a Harvard education will enable the student to address a major global challenge with long-term impact."
    },
    {
        "id": 6,
        "rank": "06",
        "name": "University of Cambridge",
        "url": "https://www.cam.ac.uk",
        "logoSrc": "/img/University-of-Cambridge.jpg",
        "highlight": "University of Cambridge is globally renowned for its collegiate system and its enduring commitment to real scholarly excellence.",
        "description": "For students pursuing prestigious funding opportunities, the Gates Cambridge Scholarship remains one of the distinguished postgraduate awards in the world, while undergraduate applicants often compete for selective college specific scholarships and bursaries. A strong Cambridge portfolio should emphasise academic focus, intellectual rigour, and sustained excellence within a specialised discipline. Unlike institutions that prioritise broad extracurricular profiles, Cambridge places greater value on academic intensity and evidence of deep subject mastery. Competitive applicants frequently establish success within highly demanding curricula such as the International Baccalaureate (IB) or Advanced Placement (AP) programmes, alongside exceptional performance in international Olympiads, research competitions, or advanced academic projects. Portfolios that disclose a profound and sustained engagement with major subjects such as theoretical physics, mathematics, philosophy, or classical history are particularly compelling to Cambridge academics and admissions tutors. High value scholarship opportunities are typically awarded to students who can convincingly demonstrate that they possess the potential to become global leaders within their chosen academic field."
    },
    {
        "id": 7,
        "rank": "07",
        "name": "Eidgenössische Technische Hochschule Zurich (ETH Zurich)",
        "url": "https://ethz.ch/en.html",
        "logoSrc": "/img/eth-zurich.jpg",
        "highlight": "ETH Zurich is one of Europe’s leading technological universities, globally recognised for its groundbreaking contributions to physics, engineering, and applied sciences.",
        "description": "While tuition fees are relatively low compared to many global peers, highly competitive cost of living scholarships and research grants remain sought after by international students. A strong ETH Zurich portfolio should be highly data driven and technically rigorous, emphasising quantitative precision and innovation centric with clear societal relevance. Successful applicants typically showcase advanced projects in areas such as robotics, sustainable architecture, machine learning, or data science. ETH places strong value on evidence of technical depth and problem solving aptitude, especially work that demonstrates innovation grounded in real world constraints. For students targeting high value research funding, portfolios should include thorough technical documentation, structured laboratory reports, and evidence of sustained development work such as GitHub repositories or engineering design iterations. The institution looks for candidates who can thrive in a demanding, self-directed academic environment, where independent inquiry and long term project building are essential. Demonstrating technical resilience, iterative improvement, and the competence to manage multi-year scientific or engineering challenges significantly strengthens both admission prospects and eligibility for scholarships and research grants."
    },
    {
        "id": 8,
        "rank": "08",
        "name": "National University of Singapore (NUS)",
        "url": "https://www.nus.edu.sg",
        "logoSrc": "/img/National-University-of-Singapore.jpg",
        "highlight": "National University of Singapore has solidified its position as Asia’s leading global university, widely recognised for its distinctive global Asian perspective.",
        "description": "For students aiming to secure competitive funding such as the ASEAN or Science and Technology Scholarships, which can exceed US$250,000 in support, a portfolio must demonstrate regional leadership and strong technological fluency. The university places particular emphasis on applicants who can evidently bridge Eastern and Western academic and professional methodologies, reflecting NUS’s role as a universal connector institution. Competitive portfolios habitually highlight cross cultural collaboration, entrepreneurial initiatives within Asian countries, or advanced STEM research with strong real world applications. Admissions officers value pragmatic innovation, especially solutions that are scalable, economically viable, and responsive to regional challenges. A particularly strong application will show that the student has already initiated or contributed to a product, research project, or venture addressing a clearly defined societal or industrial problem, as this demonstrates both initiative and the potential for meaningful impact within the university ecosystem and beyond."
    },
    {
        "id": 9,
        "rank": "09",
        "name": "University College London (UCL)",
        "url": "https://www.ucl.ac.uk",
        "logoSrc": "/img/University-College-London.jpg",
        "highlight": "University College London is known as “London’s Global University”, distinguished by its strong interdisciplinary approach and commitment to social impact.",
        "description": "For students targeting competitive awards such as the UCL Global Undergraduate Scholarship, a portfolio should demonstrate cosmopolitan engagement and a sustained commitment to global issues. UCL particularly rewards applicants who can meaningfully connect distinct academic fields, such as urban planning and public health, or law and artificial intelligence ethics, into coherent problem solving approaches. Strong portfolios often include evidence of social activism, international volunteering work, community based initiatives, or interdisciplinary research projects with measurable impact or outcomes. The university places high value on disruptive thinking and intellectual independence, especially when directed toward improving core systems and challenging established norms. For high value scholarship consideration, applicants are expected to present themselves as globally minded individuals who will actively contribute to UCL’s diverse academic community. A portfolio that undoubtedly demonstrates engagement with the United Nations Sustainable Development Goals, supported by concrete projects or research, is particularly effective in strengthening scholarship competitiveness."
    },
    {
        "id": 10,
        "rank": "10",
        "name": "California Institute of Technology (Caltech)",
        "url": "https://www.caltech.edu",
        "logoSrc": "/img/caltech.jpg",
        "highlight": "California Institute of Technology is one of the most research intensive institutions in the world, with a small student body and an outsized focus on scientific discovery.",
        "description": "For students seeking admission and financial aid packages that can be highly substantial, a portfolio should clearly demonstrate exceptional capability in mathematics, physics, engineering, or computational science. Caltech places little importance on general breadth and instead prioritises deep depth, looking for applicants who show sustained engagement with complex scientific issues. Strong student portfolios typically include original research, advanced projects, rigorous mathematical proofs, or experimental work developed over many years. Admissions officers value intellectual fearlessness, particularly the willingness to engage with unsolved or highly challenging questions in science and engineering. For scholarship and financial aid consideration, it is highly important to demonstrate long-term commitment to a particular scientific question or research direction, supported by proof of iterative experimentation, laboratory work, or technical development carried out over time."
    },

    {
        "id": 11,
        "rank": "11",
        "name": "The University of Hong Kong (HKU)",
        "url": "https://www.hku.hk",
        "logoSrc": "/img/The-University-of-Hong-Kong.jpg",
        "highlight": "The University of Hong Kong serves as a major academic gateway between East and West, with particular strengths in international business, medicine, and architecture.",
        "description": "Its Entrance Scholarships can reach up to US$250,000, covering both tuition and living expenses for highly competitive candidates. To be considered competitive, a student’s portfolio should demonstrate strong academic versatility alongside evidence of global networking and cross-border engagement. The university values applicants who have participated in various international exchange programmes, global competitions, or collaborative initiatives that span multiple countries and cultural contexts. A strong application reflects a transnational mindset, showing the aptitude to operate effectively across different national, cultural, and legal environments. For high value scholarship consideration, HKU places emphasis on a clear leadership spike in extracurricular activities that demonstrate measurable impact or outcome in the Asia-Pacific region. Additional advantages are given to applicants who validate bilingual or multilingual proficiency, particularly when paired with meaningful engagement in Asian markets, policy issues, or community focused initiatives."
    },
    {
        "id": 12,
        "rank": "12",
        "name": "Nanyang Technological University (NTU)",
        "url": "https://www.ntu.edu.sg",
        "logoSrc": "/img/Nanyang-Technological-University.jpg",
        "highlight": "Nanyang Technological University is internationally recognised for its leadership in engineering innovation and sustainability research.",
        "description": "Its Nanyang Scholarship is among the most generous in Asia, often providing a full tuition and living expenses package for outstanding students. A good NTU applicant portfolio should strongly emphasise technical creativity and environmental stewardship, reflecting the university’s focus on real world problem solving. NTU particularly values “makers” and applied thinkers who use technology to address pressing global challenges such as climate change, urban planning, and sustainable infrastructure. Strong applications typically include design thinking projects, green technology prototypes, or substantive STEM research with demonstrable outcomes. The university also places importance on digital literacy and adaptableness, particularly in rapidly developing technological fields. For scholarship consideration, a standout portfolio will show evidence of leadership in technical teams, with clear documentation of managing a project from ideation through development to final implementation, demonstrating both engineering competence and the capability to execute complex, end to end solutions."
    },
    {
        "id": 13,
        "rank": "13",
        "name": "The University of Chicago",
        "url": "https://www.uchicago.edu",
        "logoSrc": "/img/The-University-of-Chicago.jpg",
        "highlight": "The University of Chicago is defined by intellectual rigour and a deep commitment to inquiry based learning.",
        "description": "Its Odyssey Scholarship programme provides considerable support for high potential students, with awards that can exceed US$400,000 in total value. A strong University of Chicago portfolio should demonstrate unconventional thinking alongside analytical depth, reflecting the institution’s distinctive academic culture. The university is well-known for its imaginative and often challenging essay prompts, and successful applicants typically mirror this creative intellectual spirit in their own work and personal reflections. Competitive portfolios may include evidence of sustained engagement in philosophical debate, advanced social science research, or artistic projects that push beyond traditional disciplinary boundaries. UChicago places particular emphasis on students who are driven by curiosity and the pursuit of ideas for their own sake, often described as “thinkers for thinking’s sake”. For high value scholarship consideration, applicants must show that they will actively contribute to the university’s “Life of the Mind”, participating in and enriching its rigorous, debate oriented academic environment through sustained engagement and original thought."
    },
    {
        "id": 14,
        "rank": "14",
        "name": "Peking University (PKU)",
        "url": "https://english.pku.edu.cn",
        "logoSrc": "/img/Peking-University.jpg",
        "highlight": "Peking University is widely regarded as a premier institution for humanities and social sciences in China, while also maintaining a rapidly growing reputation in STEM fields.",
        "description": "For international students, programmes such as the Yenching Academy and various government funded scholarships provide comprehensive financial support that can exceed US$150,000. A competitive Peking University portfolio should foreground Sino global relations and strong cultural fluency, reflecting the university’s key emphasis on global engagement with China’s development and international relations. Successful applicants typically demonstrate sustained academic and personal interest in China’s position in the 21st century through Chinese language, research on Chinese history, politics, economics, or Chinese society, and meaningful intercultural experiences. The university places particular value on students who can act as bridges between China and the rest of the world, combining analytical ability with cultural understanding. For scholarship consideration, a strong student portfolio will show long term commitment to understanding Chinese society alongside consistent academic excellence in the applicant’s home education system, supported by evidence of intercultural leadership, research, and a narrative of global engagement."
    },
    {
        "id": 15,
        "rank": "15",
        "name": "University of Pennsylvania (UPenn)",
        "url": "https://www.upenn.edu",
        "logoSrc": "/img/University-of-Pennsylvania.jpg",
        "highlight": "University of Pennsylvania is known for its philosophy of practical idealism, where Ivy League academic tradition is closely connected with real world application, particularly through institutions such as the Wharton School.",
        "description": "For students pursuing prestigious opportunities such as the Benjamin Franklin Scholars programme and substantial need-based financial aid packages that can exceed US$300,000, a portfolio should clearly demonstrate entrepreneurial impact and interdisciplinary capabilities. UPenn values applicants who actively apply their knowledge within the “marketplace of ideas”, transforming academic interests into actual outcomes. Strong student portfolios often include evidence of business ventures, policy research, social enterprises, community based initiatives, or innovative projects that bridge multiple disciplines. Admissions officers frequently seek what may be described as the “professional scholar”, a student capable of excelling in both intellectual and professional environments. For high value scholarship and aid consideration, applicants must demonstrate that they are already emerging as high impact leaders who have created measurable influence within their chosen field through strategic thinking and execution."
    },
    {
        "id": 16,
        "rank": "16",
        "name": "Cornell University",
        "url": "https://www.cornell.edu",
        "logoSrc": "/img/Cornell-University.jpg",
        "highlight": "Cornell University is distinguished by its “Any Person, Any Study” philosophy, offering one of the broadest academic ecosystems in the world, spanning disciplines from hotel administration to theoretical physics.",
        "description": "Through its need blind admissions and generous financial aid policies, Cornell could provide funding packages exceeding US$350,000 for qualified applicants. A competitive Cornell portfolio should clearly demonstrate both intellectual breadth and a clearly defined area of deep expertise. The university places strong emphasis on applied research and experiential learning, rewarding students who take major academic concepts beyond the classroom and test them in practical environments. Whether in agricultural innovation, hospitality leadership, architecture, sustainability, or advanced engineering, strong portfolios consistently showcase hands on excellence and proof of real world implementation. Cornell also highly values grit, resilience, and engagement across both rural and urban contexts, reflecting its land grant heritage and interdisciplinary culture. For merit based recognition and high value institutional scholarships, applicants benefit from presenting substantial capstone style projects, such as sustainable green farming systems, social innovation initiatives, or technically sophisticated design and engineering work that demonstrates long term commitment, creativity, and measurable impact."
    },
    {
        "id": 17,
        "rank": "17",
        "name": "Tsinghua University",
        "url": "https://www.tsinghua.edu.cn/en",
        "logoSrc": "/img/Tsinghua-University.jpg",
        "highlight": "Tsinghua University is widely regarded as China’s “Silicon Valley University”, holding a global reputation for excellence in engineering, computer science, and technological innovation.",
        "description": "Prestigious programmes such as the Schwarzman Scholars initiative offer some of the world’s most well-funded fellowships, with aid support usually exceeding US$150,000. A competitive Tsinghua portfolio should present the student as a growing technological visionary with both technical depth and strategic awareness of emerging global trends. Strong applications typically highlight advanced work in fields such as artificial intelligence, quantum computing, semiconductors, robotics, or green energy systems. The university places considerable emphasis on national and international influence, seeking students with the great potential to become future industry leaders, influential researchers, or startup founders within the global technology ecosystem. Successful portfolios often document leadership within technical teams, evidence of innovation driven execution, and a sophisticated understanding of the rapidly evolving global technology landscape. For international students, demonstrating adaptability within China’s high intensity innovation environment is particularly valuable. Evidence of high level coding ability, patented technologies, advanced research contributions, or outstanding achievements in major STEM competitions can significantly strengthen eligibility for admission and scholarship opportunities at Tsinghua University."
    },
    {
        "id": 18,
        "rank": "18",
        "name": "University of California, Berkeley (UCB)",
        "url": "https://www.berkeley.edu",
        "logoSrc": "/img/University-of-California-Berkeley.jpg",
        "highlight": "University of California, Berkeley is widely recognised as the world’s leading public research university, distinguished by its culture of radical innovation and longstanding tradition of social activism.",
        "description": "Although it is a public institution, Berkeley provides highly prestigious merit based awards such as the Regents’ and Chancellor’s Scholarships for exceptional students. A competitive Berkeley portfolio should demonstrate both social impact and academic originality, reflecting the university’s primary emphasis on intellectual independence and public impact purpose. Berkeley consistently rewards applicants who have challenged most established norms, whether through scientific innovation, policy advocacy, entrepreneurship, or grassroots community organising. Strong portfolios often highlight a clear public mission orientation, showing how a student has used their skills and knowledge to create meaningful benefit for broader communities. Admissions officers place significant value on key intellectual wisdom, especially the willingness to boldly engage with difficult societal, scientific, or ethical questions. For scholarship consideration, highly effective student portfolios frequently document impactful research work or projects, civic initiatives, or large scale social movements that demonstrate measurable influence and sustained leadership. The strongest applicants position themselves as global changemakers who combine elite academic capability with a genuine commitment to advancing the public good."
    },
    {
        "id": 19,
        "rank": "19",
        "name": "The University of Melbourne",
        "url": "https://www.unimelb.edu.au",
        "logoSrc": "/img/The-University-of-Melbourne.jpg",
        "highlight": "University of Melbourne is Australia’s highest ranked university and is internationally recognised for the “Melbourne Model”, which actively combines broad undergraduate education with later professional specialisation.",
        "description": "Prestigious programmes such as the Hansen Scholarship and the Melbourne Chancellor’s Scholarship can provide support packages exceeding US$200,000 for outstanding students. A competitive Melbourne portfolio should emphasise academic breadth, intellectual curiosity, and a very strong global outlook, reflecting the university’s interdisciplinary educational philosophy. The institution values applicants who can meaningfully connect different fields of study while also demonstrating leadership across diverse environments. Strong portfolios often include evidence of community engagement, multicultural collaboration, and sustained leadership in areas such as social initiatives, student organisations, the arts, athletics, or civic projects. Melbourne particularly seeks well rounded high achievers who combine academic excellence with the ability to contribute positively to broader society. For scholarship consideration, applicants benefit from presenting a portfolio that balances elite classroom performance with considerable involvement beyond academics, particularly where there is strong evidence of initiative, resilience, and influence. High value scholarships are most often awarded to students who obviously demonstrate the potential to become leaders in Australia and the Asia Pacific region."
    },
    {
        "id": 20,
        "rank": "20",
        "name": "The University of New South Wales (UNSW)",
        "url": "https://www.unsw.edu.au",
        "logoSrc": "/img/The-University-of-New-South-Wales.jpg",
        "highlight": "UNSW Sydney is a global powerhouse in engineering, solar energy research, and business innovation, with a strong reputation for producing some of Australia’s most successful technology entrepreneurs and startup founders.",
        "description": "Prestigious opportunities such as the Scientia Scholarship provide substantial funding and mentorship support, with packages that can exceed US$200,000. A competitive UNSW portfolio should demonstrate entrepreneurial drive alongside strong technical excellence, reflecting the university’s emphasis on innovation with real world application. Strong applicants often showcase profitable ventures, engineering prototypes, commercial research projects, or scalable technology solutions developed through independent or collaborative work. UNSW places significant value on practical problem solving and the ability to translate technical ideas into measurable outcomes. For scholarship consideration, portfolios that include advanced STEM projects, success in business or innovation competitions, or recognised proof of high impact technical leadership are particularly compelling. The university aggressively seeks future ready students who are already contributing to the development of emerging technologies and industries. A strong industry connected profile, including global internships, startup experience, research collaborations, or partnerships with corporate organisations, is highly beneficial when competing for scholarship awards at UNSW Sydney."
    },

    {
        "id": 21,
        "rank": "21",
        "name": "Yale University",
        "url": "https://www.yale.edu",
        "logoSrc": "/img/Yale-University.jpg",
        "highlight": "Yale University is often regarded as the quintessential American liberal arts Ivy League institution, celebrated for its emphasis on creative expression, civic engagement, and intellectual exploration across disciplines.",
        "description": "As a need blind university for all applicants, including international students, Yale offers some of the most generous financial aid packages in the world, with full support that can exceed US$400,000 for students with demonstrated need. A competitive Yale portfolio must communicate humanistic depth and a clear sense of intellectual and personal individuality. The admissions committee seeks the “scholar citizen”, a student who actively combines academic excellence with meaningful involvement in areas such as the arts, activism, public service, or creative leadership. Strong portfolios typically move beyond listing achievements and instead demonstrate reflective leadership, showing how the applicant has influenced ideas, communities, or cultural conversations. Yale places particular importance on originality of voice, intellectual authenticity, and the capability to engage deeply with social and human questions. For students aiming to stand out in Yale’s highly competitive global applicant pool and secure high value financial aid, portfolios that include substantial creative capstone projects, long term community justice initiatives, or deeply personal intellectual explorations are especially compelling."
    },
    {
        "id": 22,
        "rank": "22",
        "name": "École Polytechnique Fédérale de Lausanne (EPFL)",
        "url": "https://www.epfl.ch/en",
        "logoSrc": "/img/epfl.jpg",
        "highlight": "École Polytechnique Fédérale de Lausanne is a global leader in technical innovation and life sciences, internationally recognised for its forte in engineering, computational research, and applied scientific discovery.",
        "description": "Although tuition fees are relatively very low, EPFL’s research grants and Excellence Fellowships for Master’s students are highly prestigious and intensely competitive. A strong EPFL portfolio should be distinctly engineering centric, with very clear emphasis on technical depth and applied problem solving in areas such as sustainable technology, artificial intelligence, biotechnology, robotics, or computational systems. The institution places significant value on core experimental rigour and the aptitude to transform theoretical concepts into functional laboratory or engineering outcomes. Competitive portfolios often include exhaustive project work documentation, technical schematics, software repositories, research notebooks, or evidence of iterative engineering development. EPFL particularly seeks self-starting technologists who very much thrive in demanding and fast paced research environments while demonstrating initiative, precision, and collaborative work. For applicants aiming research funding and fellowships, it is particularly very important to present strong mathematical proficiency alongside evidence of STEM collaborations, multidisciplinary teamwork, and technical execution across complex projects."
    },
    {
        "id": 23,
        "rank": "23",
        "name": "Technical University of Munich (TUM)",
        "url": "https://www.tum.de/en",
        "logoSrc": "/img/Technical-University-of-Munich.jpg",
        "highlight": "Technical University of Munich (TUM) is generally recognised as Germany’s leading entrepreneurial university, with global strengths in automotive engineering, aerospace, robotics, and digital technology.",
        "description": "To secure competitive merit based grants and industry sponsored scholarships, a student’s portfolio should clearly demonstrate industrial aptitude and strong technical discipline. TUM values a distinctly professional and core innovation driven mindset, rewarding applicants who combine engineering precision with practical execution and long term problem solving capability. Strong portfolios frequently highlight internships or collaborative work with major international firms such as BMW, Siemens, Airbus, or Bosch, alongside advanced technical certifications, research work experience, and substantial engineering projects. The university places particular emphasis on systems thinking, seeking students who fully understand how technology interacts with industry, society, infrastructure, and economic development. For scholarship consideration, portfolios that document successful technology transfer initiatives, entrepreneurial engineering ventures, or key achievements in international STEM competitions are especially compelling. While not always mandatory, evidence of German language proficiency can significantly strengthen an applicant’s alignment with local industry ecosystems and increase competitiveness for regional scholarships and research opportunities."
    },
    {
        "id": 24,
        "rank": "24",
        "name": "Johns Hopkins University (JHU)",
        "url": "https://www.jhu.edu",
        "logoSrc": "/img/Johns-Hopkins-University.jpg",
        "highlight": "Johns Hopkins University is globally recognised as a leader in public health, medicine, biomedical research, and international relations, supported by one of the largest research budgets in higher education.",
        "description": "Through its generous financial aid policies and extensive institutional resources, funding packages for eligible students can exceed US$400,000 over the course of study. A competitive Johns Hopkins portfolio should strongly emphasise research excellence and data driven problem solving, reflecting the university’s rigorous analytical culture. Successful applicants typically showcase original laboratory research, clinical shadowing experiences, public policy analysis, epidemiological studies, or global health initiatives with measurable outcomes. The institution values inquiry paired with perceptible impact, seeking students who can translate intellectual curiosity into key contributions that improve human wellbeing or address major humanity challenges. For scholarship consideration, portfolios that include published academic papers, advanced independent research, or substantial involvement in medical, scientific, or political project works are particularly compelling. Johns Hopkins also looks for proof of long-term resilience, discipline, and sustained academic intensity, favouring applicants who demonstrate the ability to thrive within its demanding academic environment while producing real world contributions."
    },
    {
        "id": 25,
        "rank": "25",
        "name": "The University of Sydney",
        "url": "https://www.sydney.edu.au",
        "logoSrc": "/img/university-of-sydney.jpg",
        "highlight": "University of Sydney is widely recognised for its leadership legacy and strong global impact, with a growing reputation across research, civic engagement, and professional education.",
        "description": "Its Vice-Chancellor’s International Scholarship offers up to US$55,000 per year for highly competitive international students. A strong Sydney portfolio should emphasise civic leadership and international ambition, reflecting the university’s focus on shaping globally minded undergraduates with regional awareness, particularly in Australia’s Indo-Pacific context. The institution values applicants who demonstrate the qualities of global citizens who can engage meaningfully across various cultures and disciplines. Competitive portfolios often include evidence of social entrepreneurship, high level achievement in sports or the arts, and sustained academic excellence across rigorous curricula. The university looks for what might be described as “multi hyphenate high achievers”, individuals who combine multiple forms of excellence while maintaining depth in each area. For scholarship consideration, it is very important to demonstrate leadership in significant community projects, national or international competitions, or initiatives that have created measurable social or educational impact. Strong candidates also clearly articulate how they will contribute to the university’s diverse campus life and broader community, linking their achievements to a forward looking vision of impact within Australia and abroad."
    },
    {
        "id": 26,
        "rank": "26",
        "name": "Princeton University",
        "url": "https://www.princeton.edu",
        "logoSrc": "/img/Princeton-University.jpg",
        "highlight": "Princeton University is distinguished by its strong undergraduate focus and the central role of the senior thesis, making it one of the most academically intensive Ivy League institutions.",
        "description": "It is need blind for all applicants, including international students, and it’s no loan financial aid policy can result in support packages that approach US$400,000 for eligible students. A competitive Princeton portfolio should clearly demonstrate pure intellectual curiosity and a sustained commitment to independent examination. The university seeks “the independent researcher”, a student who engages deeply with ideas through long-form essays, original mathematical or scientific exploration, historical analysis, or other rigorous forms of scholarly investigation. Princeton also places strong emphasis on service, reflected in its guiding principle of “In the Nation’s Service and the Service of Humanity”, encouraging applicants to connect intellectual work with wide-ranging civic responsibilities. For high value scholarship and admission consideration, the strongest student portfolios show evidence of post graduate level independent research capability combined with a clear orientation, demonstrating both academic depth and a commitment to using knowledge in service of country."
    },
    {
        "id": 27,
        "rank": "27",
        "name": "McGill University",
        "url": "https://www.mcgill.ca",
        "logoSrc": "/img/McGill-University.jpg",
        "highlight": "McGill University is often referred to as the “Harvard of the North”, with internationally recognised strengths in medicine, law, engineering, math, and the sciences.",
        "description": "Its Major Entrance Scholarships can reach up to US$60,000 yearly and may include additional tuition support for exceptional international students. A competitive McGill portfolio should emphasise global resilience and sustained academic rigour, reflecting the university’s demanding and highly international learning environment. McGill places strong value on grit and adaptability, particularly in students who can thrive within Montreal’s bilingual and culturally diverse environment. Strong applications typically highlight bilingual proficiency in English and French, advanced research capability, and meaningful community leadership experience. The university is very interested in applicants who demonstrate the profile of a global polymath, combining excellence across multiple domains while maintaining depth in a fundamental academic focus. For scholarship consideration, portfolios that show sustained commitment to social justice initiatives, scientific innovation, or globally oriented project work are particularly compelling. Ultimately, McGill seeks high achieving global minded students who can contribute to both its academic excellence and its university campus culture."
    },
    {
        "id": 28,
        "rank": "28",
        "name": "Université PSL (Paris Sciences et Lettres)",
        "url": "https://psl.eu/en",
        "logoSrc": "/img/universite-psl.jpg",
        "highlight": "Université PSL is a collegiate powerhouse in the heart of Paris, bringing together some of France’s most elite institutions, including École Normale Supérieure and Mines Paris.",
        "description": "Its scholarships for international students can often cover full tuition along with a living stipend, making it highly competitive at the global level. A strong PSL portfolio should project European intellectualism, characterised by theoretical engagement and rigorous academic thinking across disciplines. The university values both academic purity and creative innovation, rewarding students who demonstrate originality in their core approach to complex intellectual problems. Competitive portfolios often include evidence of highly advanced philosophical inquiry, high level mathematical research, scientific modelling, or substantial artistic or literary projects with conceptual depth. PSL places strong emphasis on interdisciplinary agility, seeking applicants who can move fluidly between domains such as physics and music theory, philosophy and data science, or mathematics and art. For scholarship consideration, it is very important to demonstrate a meaningful connection to European intellectual traditions, alongside a clear vision for contributing to the future of European science, culture, and scholarship through sustained interdisciplinary engagement and thought."
    },
    {
        "id": 29,
        "rank": "29",
        "name": "University of Toronto (U of T)",
        "url": "https://www.utoronto.ca",
        "logoSrc": "/img/University-of-Toronto.jpg",
        "highlight": "University of Toronto (U of T) is Canada’s leading research university, internationally recognised for its strengths in artificial intelligence, medicine, and urban studies.",
        "description": "Its Lester B. Pearson International Scholarship is among the prestigious undergraduate awards internationally, offering a full-ride that covers tuition, books, incidental fees, residence, food, and travel expenses. A competitive University of Toronto portfolio should clearly demonstrate exceptional leadership and sustained community impact, reflecting the university’s emphasis on students who have meaningfully influenced their schools or wider communities. The institution values original thinking, particularly when applicants take familiar problems and develop innovative, contextually grounded solutions. Strong portfolios often highlight projects that combine academic insight with practical implementation, such as social enterprises, research driven initiatives, or community based interventions with measurable outcomes. U of T places significant importance on global diversity and cross cultural understanding, seeking students who can contribute to its very diverse international academic environment. For scholarship consideration, the most compelling applications typically present evidence of a high impact capstone project or sustained leadership initiative, fully supported by strong academic achievement, and a clear trajectory toward becoming a future global leader capable of creating scalable and meaningful change."
    },
    {
        "id": 30,
        "rank": "30",
        "name": "Fudan University",
        "url": "https://www.fudan.edu.cn/en",
        "logoSrc": "/img/Fudan-University.jpg",
        "highlight": "Fudan University is generally recognised as one of China’s leading liberal arts and research universities, with a strong international academic environment and growing global influence.",
        "description": "For international students, scholarship opportunities such as the Shanghai Government Scholarship and Fudan’s own merit based awards provide significant financial support for highly competitive applicants. A strong Fudan portfolio should focus on economic and cultural diplomacy, reflecting the university’s emphasis on China’s integration within international systems. Successful applicants typically demonstrate a sustained interest in China’s global role through academic research, language proficiency in Mandarin, and meaningful engagement with cross border or intercultural collaboration. The university particularly values what may be described as the cosmopolitan scholar, an individual who can function effortlessly across cultural, economic, and intellectual frameworks. For scholarship consideration, portfolios that include prior engagement with Chinese business environments, cultural institutions, internships, or high level research projects are especially compelling. Applicants who articulate how they will serve as international envoys for Fudan University, contributing to international cooperation, is strongest in securing competitive scholarship offers."
    },
    {
        "id": 31,
        "rank": "31",
        "name": "King's College London (KCL)",
        "url": "https://www.kcl.ac.uk",
        "logoSrc": "/img/Kings-College-London.jpg",
        "highlight": "King’s College London is a global leader in war studies, global health, and law, with a strong reputation for research that directly engages with contemporary international challenges.",
        "description": "Its Global Leaders Scholarship clearly targets high potential international students who fully demonstrate both academic excellence and real world impact. A competitive KCL portfolio should very-well demonstrate policy impact and strategic thinking, reflecting the university’s focus on applying rigorous academic insight to pressing global issues. The institution values what might be described as the practical intellectual, someone who is able to bridge theory and application in contexts such as international relations, public health systems, or legal frameworks. Strong portfolios often include evidence of participation in Model United Nations (MUN), political or civic activism, or community based health and development initiatives. KCL particularly seeks global problem solvers who can analyse complex international crises while also proposing actionable solutions grounded in evidence. For scholarship consideration, portfolios that demonstrate deep engagement with current geopolitical conflicts, global health emergencies, or systemic inequalities, combined with a clearly articulated vision are compelling. Leadership demonstrated in challenging or adverse circumstances is usually a significant factor in securing the most prestigious scholarship awards."
    },
    {
        "id": 32,
        "rank": "32",
        "name": "Australian National University (ANU)",
        "url": "https://www.anu.edu.au",
        "logoSrc": "/img/Australian-National-University.jpg",
        "highlight": "Australian National University is Australia’s national research university, with a strong focus on global policy, security studies, and Asian and Pacific regional affairs.",
        "description": "Its Chancellor’s International Scholarship can provide tuition support of up to US$200,000 for outstanding international students. A competitive ANU portfolio should emphasise strategic research capability and evidence of regional leadership, reflecting the university’s role in shaping national and international policy discourse. ANU particularly values students who participate with large scale challenges such as climate change, geopolitical security, economic development, and public governance. Strong student applications often demonstrate high level policy analysis, participation in national or international organisations, and sustained academic excellence in relevant fields. The university seeks what may be described as the policy architect, an individual capable of synthesising complex information into actionable frameworks that address real world problems. For scholarship consideration, student portfolios that show a deep understanding of the Indo-Pacific economic region, combined with a clear and credible commitment to public service, are especially compelling. Applicants who can articulate how their work will generate meaningful benefits for both Australia and the wider global community are the most strongest candidates for competitive scholarships."
    },
    {
        "id": 33,
        "rank": "33",
        "name": "The Chinese University of Hong Kong (CUHK)",
        "url": "https://www.cuhk.edu.hk",
        "logoSrc": "/img/The-Chinese-University-of-Hong-Kong.jpg",
        "highlight": "The Chinese University of Hong Kong is a research led institution well-known for its collegiate system and strong abstract strengths in Chinese studies, alongside growing international academic influence.",
        "description": "Its transnational admission scholarships can reach up to US$150,000 for outstanding international students. A competitive CUHK portfolio should clearly demonstrate strong academic prowess alongside cultural appreciation, reflecting the university’s core emphasis on balanced personal development. CUHK is known for its “complete person” philosophy, valuing students who combine academic excellence with meaningful engagement in areas such as the arts, sports, leadership, and community service. Strong applications typically highlight bicultural or multicultural experiences and a continued interest in Sino global incorporation, particularly where students can demonstrate meaningful engagement with both local and international contexts. The university places very significant value on applicants who will actively contribute to its collegiate life style, participating in residential societies and campus activities. For scholarship consideration, portfolios that display very significant cross cultural projects, leadership in community initiatives, or consistent achievement across multiple domains are particularly effective. CUHK seeks active community participants who pair academic drive with engagement in cultural exchange and campus life."
    },
    {
        "id": 34,
        "rank": "34",
        "name": "The University of Edinburgh",
        "url": "https://www.ed.ac.uk",
        "logoSrc": "/img/university-of-editburgh.jpg",
        "highlight": "University of Edinburgh is one of the world’s ancient British universities, internationally recognised for its leadership in artificial intelligence, informatics, and historical studies.",
        "description": "Its Global Undergraduate Mathematics Scholarship and other subject specific awards provide substantial financial support for high achieving students. A very competitive Edinburgh portfolio should reflect both intellectual heritage and future oriented vision, aligning with the university’s long standing global tradition of scholarly excellence and contemporary research innovation culture. The institution places strong emphasis on originality of thought, valuing applicants who demonstrate independent inquiry and creative academic engagement. Strong portfolios often include evidence of research driven work, advanced coding projects in areas such as artificial intelligence, or high level creative and analytical writing that demonstrates depth of thinking. Edinburgh seeks what may be described as the “innovative scholar”, an individual capable of contributing to its established research inheritance while also bringing fresh, globally informed perspectives. For scholarship consideration, top portfolios that demonstrate early leadership in research, publication of academic work, or successful technical or scientific projects are particularly very compelling. Eventually, the university rewards students who combine rigorous academic ability with a forward looking approach to solving complex intellectual and real world problems."
    },
    {
        "id": 35,
        "rank": "35",
        "name": "The University of Manchester",
        "url": "https://www.manchester.ac.uk",
        "logoSrc": "/img/university-of-manchester.jpg",
        "highlight": "The University of Manchester is a civic powerhouse, internationally recognised for breakthroughs in graphene research, economics, and socially responsible innovation.",
        "description": "Its Global Futures Scholarship targets high achieving international students, primarily from developing countries, and provides substantial financial support for exceptional candidates. A strong Manchester portfolio should emphasise social responsibility alongside industrial and academic innovation, reflecting the university’s commitment to research with real world impact. The institution places strong value on measurable contribution to local communities, especially where students have used their skills to address community, economic, or environmental challenges. Competitive applications often highlight social entrepreneurship, sustained volunteering, and strong academic performance in STEM fields or economics. Manchester looks for what may be defined as the ethical innovator, an individual who combines technical or analytical excellence with a clear commitment to the greater good. For scholarship consideration, portfolios that demonstrate a strong academic “spike” alongside evidence of resilience and long term community impact are particularly effective. Eventually, the university prioritises candidates who can show they are capable of becoming change makers who drive meaningful economic progress at global level."
    },
    {
        "id": 36,
        "rank": "36",
        "name": "Monash University",
        "url": "https://www.monash.edu",
        "logoSrc": "/img/Monash-University.jpg",
        "highlight": "Monash University is Australia’s global network university, with campuses across multiple continents and a strong institutional focus on large scale problem solving.",
        "description": "Its International Leadership Scholarship provides full tuition support for outstanding international students. A competitive Monash portfolio should clearly demonstrate global ambition alongside practical impact, reflecting the university’s emphasis on innovation with purpose. The institution values applicants who can translate ideas into scalable solutions across fields such as climate technology, global health, engineering, international law, and social innovation. Strong portfolios typically include evidence of large scale social projects that extend beyond local contexts and show measurable outcomes across communities or systems. Monash particularly seeks highly disruptive leaders who can challenge conventional approaches and implement new frameworks for addressing complex global issues. For scholarship consideration, it is especially important to demonstrate experience leading initiatives with international scalability, supported by collaboration across borders, major disciplines, or institutions. Ultimately, Monash awards its competitive scholarships to international students who combine leadership, technical or analytical skills, and a track record of driving change on scale."
    },
    {
        "id": 37,
        "rank": "37",
        "name": "The University of Tokyo",
        "url": "https://www.u-tokyo.ac.jp/en",
        "logoSrc": "/img/university-of-tokyo.jpg",
        "highlight": "The University of Tokyo is Japan’s premier institution, internationally recognised for excellence in physics, robotics, and East Asian studies.",
        "description": "For international students, the PEAK Scholarship provides comprehensive support covering tuition and living costs, with total value regularly exceeding US$190,000. A competitive University of Tokyo portfolio should clearly project precision and depth, reflecting the institution’s strong emphasis on rigorous academic training and advanced research capabilities. The university prioritises intellectual seriousness above breadth, rewarding applicants who demonstrate sustained excellence in a focused academic discipline. Strong portfolios typically include high level STEM research, evidence of mathematical or scientific mastery, and sustained engagement with complex theoretical or applied problems. UTokyo also values applicants who show a thoughtful engagement with Japanese modernity, including its modern scientific, technological, and cultural dimensions. For scholarship consideration, it is particularly important to demonstrate a clearly defined academic “spike” supported by meaningful cross cultural communication skills and adaptability within Japan’s distinctive academic environment. Eventually, the university seeks international students who show potential to become world class researchers, capable of contributing knowledge and innovation."
    },
    {
        "id": 38,
        "rank": "38",
        "name": "Columbia University",
        "url": "https://www.columbia.edu",
        "logoSrc": "/img/Columbia-University.jpg",
        "highlight": "Columbia University is widely regarded as the “Global Ivy”, situated in the heart of New York City and distinguished by its Core Academic Curriculum, as well as its leadership in journalism, finance, and the humanities.",
        "description": "As a need-blind institution, Columbia offers financial aid packages that can exceed US$350,000 for students with demonstrated need. A competitive Columbia portfolio should reflect strong urban intelligence and global awareness, aligning with the university’s emphasis on engaging directly with the intellectual and institutional resources of New York City. The university seeks “the intellectual in the city”, students who actively use the urban environment as a living laboratory for research, inquiry, and impact. Strong portfolios naturally demonstrate real world engagement through journalism projects, policy internships, research initiatives, or logical work addressing complex societal challenges. Columbia places a strong emphasis on critical inquiry, encouraging students to interrogate global issues such as human rights, climate change, inequality, and urban progress. For scholarship consideration, portfolios that demonstrate sustained engagement with global issues and evidence of meaningful, real world impact are especially compelling. Ultimately, Columbia values cosmopolitan scholars who can thrive in the intensity of Manhattan while contributing original insight and analysis to pressing global conversations."
    },
    {
        "id": 39,
        "rank": "39",
        "name": "Seoul National University (SNU)",
        "url": "https://en.snu.ac.kr",
        "logoSrc": "/img/Seoul-National-University.jpg",
        "highlight": "Seoul National University is widely regarded as the “Harvard of Korea”, with leading strengths in technological innovation, economics, and cultural studies, including the global rise of K-culture.",
        "description": "Its SNU Global Scholarship provides full tuition coverage and living expenses for highly competitive international students. A strong SNU portfolio should demonstrate both technological prowess and cultural agility, reflecting the university’s dual emphasis on advanced innovation and contextual understanding of Korean society. The institution values students who can bridge traditional values with a high tech future, particularly in fields where Korea plays a global leadership role such as electronics, AI, robotics, and creative industries. Competitive applications typically include evidence of deep STEM research, advanced technical projects, or meaningful involvement in Korea related academic or cultural initiatives. SNU looks for future tech leaders who can demonstrate not only academic excellence but also the capacity to operate within Korea’s evolving innovation ecosystem. For scholarship consideration, portfolios that demonstrate mastery of complex technological skills, leadership in innovation projects, and a clear understanding of Korea’s global role are especially compelling. Eventually, the university seeks global envoys for Korean innovation who can contribute to both national advancement and international collaboration through research, entrepreneurship, or interdisciplinary impact."
    },
    {
        "id": 40,
        "rank": "40",
        "name": "The University of British Columbia (UBC)",
        "url": "https://www.ubc.ca",
        "logoSrc": "/img/university-of-british-columbia.jpg",
        "highlight": "University of British Columbia is a global leader in sustainability, Indigenous studies, forestry, and environmental-focused research, with a strong international reputation for research-driven social and ecological impact.",
        "description": "Its International Scholars Program, including the Karen McKellin International Leader of Tomorrow Award, offers full-ride scholarships that can exceed US$250,000 for outstanding students. A competitive UBC portfolio should demonstrate strong community leadership alongside a clear and sustained commitment to environmental responsibility, reflecting the university’s main mission of advancing global sustainability and social good. The institution looks for what may be described as the altruistic high-achiever, a student who truly combines academic excellence with meaningful, long-term service to others. Strong applications typically document sustained social impact through initiatives such as climate action projects, Indigenous community engagement, volunteering work, or major advocacy for marginalised groups. UBC places substantial emphasis on grit and resilience, especially when applicants can demonstrate how personal challenges have shaped a deeper commitment to serving communities. For scholarship consideration, portfolios that present a coherent narrative of overcoming adversity while driving measurable social or environmental change are particularly compelling. Ultimately, the university values heart-centred leaders who pair academic performance with a demonstrated capacity to create lasting, positive impact in both national and global contexts."
    },

    {
        "id": 41,
        "rank": "41",
        "name": "Institut Polytechnique de Paris",
        "url": "https://www.ip-paris.fr/en",
        "logoSrc": "/img/Institut-Polytechnique-de-Paris.jpg",
        "highlight": "Institut Polytechnique de Paris is an exclusive consortium of French Grandes Écoles, internationally recognised for excellence in mathematics, data science, and advanced engineering disciplines such as product manufacturing and systems engineering.",
        "description": "Its competitive excellence scholarships for international Master’s and PhD students are highly selective and reward exceptional academic and research potential. A strong Institut Polytechnique de Paris portfolio must be technically elite, reflecting the depth and rigor of European engineering education at its highest level. The institution places strong emphasis on quantitative mastery and industrial scalability, seeking candidates whose work can translate from theoretical foundations into large scale technical or industrial applications. Competitive admission applications typically include advanced mathematical research, complex engineering projects, and core evidence of sustained collaborative innovation across technical teams or research groups. The institution looks for what may be described as the strategic technologist, an individual capable of integrating mathematical rigor, engineering insight, and systems thinking to address high impact technological challenges. For scholarship consideration, it is particularly important to demonstrate readiness for the demanding academic environment of the Grandes Écoles system, alongside clear ambition to contribute to Europe’s high tech and industrial sectors through research or leadership in advanced engineering fields."
    },
    {
        "id": 42,
        "rank": "42",
        "name": "Northwestern University",
        "url": "https://www.northwestern.edu",
        "logoSrc": "/img/Northwestern-University.jpg",
        "highlight": "Northwestern University is widely known for its strengths in journalism through Medill, business education through Kellogg, and a deeply interdisciplinary academic culture that encourages collaboration across fields.",
        "description": "With need blind financial aid policies for international students, its scholarship packages can exceed US$350,000 for eligible applicants. A good Northwestern portfolio should demonstrate strong communication excellence together with authentic interdisciplinary curiosity, reflecting the university’s emphasis on bridging concepts across domains. The institution values what may be described as the multi hyphenate thinker, a student capable of integrating disciplines such as journalism and economics, music and computer science, or engineering and public policy into coherent, impactful work. Strong portfolios typically highlight cross field projects where communication is widely used as a tool for driving understanding, innovation, or social change. Northwestern places a strong importance on creative problem solving, particularly when students can display how they translate complex ideas into accessible narratives or actionable insights. For scholarship consideration, portfolios that demonstrate sustained experience as an effective storyteller of complex ideas, supported by collaborative initiatives and interdisciplinary achievements, are particularly compelling. Eventually, the university values students who will dynamically contribute to its collaborative intellectual campus culture by connecting disciplines and communicating ideas with precision and purpose."
    },
    {
        "id": 43,
        "rank": "43",
        "name": "The University of Queensland (UQ)",
        "url": "https://www.uq.edu.au",
        "logoSrc": "/img/university-of-queensland.jpg",
        "highlight": "The University of Queensland is a global leader in marine science, mining engineering, and pharmacy, with a strong reputation for translating academic research into real world applications.",
        "description": "Its Destination Australia Scholarship and other merit based awards can provide up to US$55,000 annually for outstanding students. A competitive UQ portfolio should clearly demonstrate applied scientific excellence alongside regional leadership, reflecting the university’s focus on solving practical challenges relevant to Queensland, Australia, and the wider Indo-Pacific region. The institution places strong value on research with impact, particularly when students can show how laboratory discoveries are extended into actual fieldwork, industry applications, or community outcomes. Strong portfolios usually include evidence of environmental stewardship, public health initiatives, or engineering innovation with measurable benefits. UQ seeks what may be described as the sustainable leader, a student who combines technical expertise with a strong commitment to long term ecological and social wellbeing. For scholarship consideration, portfolios that clearly demonstrate meaningful contributions to projects such as Great Barrier Reef conservation, community health programmes, or applied engineering solutions are especially compelling. Ultimately, the university values grounded high achievers who can show both academic excellence and a clear ability to contribute to the development of Queensland through their research work."
    },
    {
        "id": 44,
        "rank": "44",
        "name": "The Hong Kong University of Science and Technology (HKUST)",
        "url": "https://hkust.edu.hk",
        "logoSrc": "/img/hong-kong-university-of-science-and-technology.jpg",
        "highlight": "The Hong Kong University of Science and Technology is broadly regarded as Asia’s innovation powerhouse, with leading strengths in artificial intelligence, engineering, and business.",
        "description": "Its Asian Future Leaders Scholarship and other entrance awards can provide full funding for outstanding international students. A very competitive HKUST portfolio should obviously present the applicant as an entrepreneurial technologist, reflecting the university’s strong emphasis on core innovation, agility, and real world scalability. The institution places high value on makerspace work experience, startup activity, and advanced STEM research that demonstrates both technical depth and practical application. Strong portfolios typically include clear evidences of technical leadership, such as leading engineering teams, building software platform or hardware prototypes, or contributing to research with commercial or societal potential. HKUST also prioritises what may be described as the startup mindset, seeking students who can operate effectively in fast paced, high growth environments and contribute to the emerging digital economy. For scholarship consideration, portfolios that show concrete achievements such as launching a tech product, winning international hackathons, or developing scalable innovations are especially compelling. Eventually, the university looks for high energy innovators who combine strong technical capacity with a clear vision for how technology can shape the future of business, society, and global trade."
    },
    {
        "id": 45,
        "rank": "45",
        "name": "University of Michigan-Ann Arbor",
        "url": "https://umich.edu",
        "logoSrc": "/img/University-of-Michigan-Ann-Arbor.jpg",
        "highlight": "University of Michigan is a quintessential American public research university, widely recognised for excellence in engineering, medicine, and the social sciences.",
        "description": "While merit aid for non-resident students is highly competitive, prestigious awards such as the Stamps Scholarship can provide full ride support for exceptional applicants. A strong University of Michigan portfolio should clearly demonstrate collective impact and broad research engagement, reflecting the university’s interdisciplinary and public service oriented undertaking. The institution looks for what may be described as the collaborative scholar, a student who thrives in cross disciplinary environments and contributes meaningfully to large scale problem solving efforts. Competitive portfolios typically include evidence of leadership in large teams, research with public utility, and sustained academic excellence across multiple domains. Michigan places very strong value on intellectual diversity, encouraging applicants who can connect engineering, health sciences, public policy, and social research in meaningful ways. For scholarship consideration, portfolios that document significant community initiatives or research projects with measurable impact or outcomes are particularly compelling. In the end, the university seeks “Maize and Blue” leaders who combine academic strength with a clear ability to drive impact at local, national, and global levels through collaboration."
    },
    {
        "id": 46,
        "rank": "46",
        "name": "University of California, Los Angeles (UCLA)",
        "url": "https://www.ucla.edu",
        "logoSrc": "/img/University-of-California-Los-Angeles.jpg",
        "highlight": "University of California, Los Angeles (UCLA) is the most applied-to university in the USA, widely recognised for its strengths in film, medicine, and athletics, as well as its broader excellence across the arts, sciences, and public life.",
        "description": "Its UCLA Achievement Scholarship and other merit based awards are designed to support high achieving non-resident students. A competitive UCLA portfolio should project creative leadership alongside resilience, reflecting the university’s dynamic culture at the intersection of academia and entertainment. The institution looks for what may be described as the optimistic change maker, a student who uses talent and initiative to positively influence their communities and broader society. Strong portfolios typically include evidence of artistic or scientific breakthroughs, meaningful community building efforts, and clear examples of overcoming significant personal or academic challenges. UCLA values what might be called the “Hollywood Scale” ambition grounded in grassroots impact, encouraging students to think boldly while remaining deeply connected to real world communities. For scholarship consideration, portfolios that demonstrate a different creative or scientific “spike” paired with a compelling personal narrative are especially effective. Eventually, the university seeks Bruin leaders who will actively contribute to the intellectual, cultural, and social vibrancy of Los Angeles while maintaining a strong record of academic performance, extracurricular achievement, growth, and service."
    },
    {
        "id": 47,
        "rank": "47",
        "name": "Delft University of Technology (TU Delft)",
        "url": "https://www.tudelft.nl/en",
        "logoSrc": "/img/Delft-University-of-Technology.jpg",
        "highlight": "Delft University of Technology is widely recognised as Europe’s engineering hub, with global leadership in aerospace engineering, water management, and industrial design.",
        "description": "Its Justus & Louise van Effen Excellence Scholarship provides full tuition coverage along with a living stipend for exceptional international students. A competitive TU Delft portfolio should be both design heavy and technologically accurate, reflecting the university’s strong emphasis on applied engineering and real world problem solving. The institution places particular importance on systems engineering and sustainable design, inspiring students to think in terms of integrated solutions rather than isolated components. Strong student portfolios often include complete design documentation, engineering prototypes, and recorded evidence of collaborative problem solving within multidisciplinary teams. TU Delft highly values what may be described as the Dutch pragmatist, a student who combines innovative thinking with practical feasibility and strong execution. For scholarship consideration, portfolios that demonstrate significant green technology projects, participation in engineering competitions, or substantial applied research are especially compelling. Ultimately, the university seeks candidates who can show capability to take a project from concept to construction, demonstrating both technical mastery and the capacity to deliver scalable engineering solutions."
    },
    {
        "id": 48,
        "rank": "48",
        "name": "Shanghai Jiao Tong University (SJTU)",
        "url": "https://en.sjtu.edu.cn",
        "logoSrc": "/img/Shanghai-Jiao-Tong-University.jpg",
        "highlight": "Shanghai Jiao Tong University is generally recognised as a technical powerhouse in China, with major strengths in engineering, naval architecture, and medicine.",
        "description": "For international students, major funding opportunities such as the Chinese Government Scholarship and SJTU’s own merit based awards provide substantial financial support. A competitive SJTU portfolio should focus on industrial innovation and Sino global research collaboration, reflecting the university’s close ties to China’s rapidly evolving manufacturing and technology sectors. The institution places strong emphasis on awareness of China’s current role in global tech leadership, particularly in advanced engineering, applied sciences, and industrial systems. Strong student portfolios often include evidence of advanced STEM projects, meaningful industrial internships, or collaborative research project experiences, particularly those involving international laboratories or cross border teams. SJTU also values applicants who demonstrate proficiency in Mandarin Chinese, as this supports deeper integration into its academic and professional ecosystem. The university seeks what may be described as the high tech professional, a student capable of combining full technical expertise with global perspective and practical execution. For scholarship consideration, portfolios that very clearly demonstrate engagement with high level engineering or medical research, alongside a strong alignment with global scientific mission, are especially compelling."
    },
    {
        "id": 49,
        "rank": "49",
        "name": "Zhejiang University (ZJU)",
        "url": "https://www.zju.edu.cn/english",
        "logoSrc": "/img/Zhejiang-University.jpg",
        "highlight": "Zhejiang University is one of China’s “Big Three” universities, located in the technology hub of Hangzhou, home to major digital economy players such as Alibaba.",
        "description": "Its Zhejiang University Scholarship targets top international talent and offers competitive funding for outstanding students. A strong ZJU portfolio should clearly project e-commerce innovation and digital business intelligence, reflecting the university’s deep integration with China’s fast evolving digital economy. The institution highly values what may be described as the tech entrepreneur, a student who understands how technology, data, and markets intersect within the broader business framework of the Digital Silk Road. Competitive applications typically include evidence of startup experience, digital marketing projects, advanced computer science research, or data driven business initiatives. ZJU places strong emphasis on adaptive innovation, rewarding students who can quickly apply their technical skills to changing market and technological environments. For scholarship consideration, portfolios that demonstrate mastery of a technical domain alongside leadership in e-commerce or digital platform projects are particularly compelling. Eventually, the university seeks future leaders in the digital economy who could operate successfully within China’s innovation ecosystem and contribute significantly to technology and business development."
    },
    {
        "id": 50,
        "rank": "50",
        "name": "Yonsei University",
        "url": "https://www.yonsei.ac.kr/en_sc",
        "logoSrc": "/img/Yonsei-University.jpg",
        "highlight": "Yonsei University is usually regarded as the global gateway to Korea, with leading academic strengths in business, global leadership, and Korean studies.",
        "description": "Its Underwood International College (UIC) Scholarship offers full ride packages for highly competitive international students. A Yonsei portfolio should clearly demonstrate transnational leadership and interdisciplinary capability, reflecting the university’s globally oriented academic environment. The institution values what may be described as the global Asian scholar, a student who can operate across cultural, academic, and professional contexts while engaging deeply with South Korea’s role in global affairs. Competitive applications typically include clear evidence of international debate experience, cross cultural research, entrepreneurial initiatives, or leadership in globally oriented projects. Yonsei places strong emphasis on social responsibility combined with global ambition, encouraging students to connect personal achievement with broader societal impact. For scholarship consideration, portfolios that demonstrate leadership in international initiatives, recognition through international awards, or sustained engagement in cross border collaboration are especially compelling. Ultimately, the university seeks cultural bridge builders who can contribute to South Korea’s global integration while excelling in interdisciplinary focused academic and research pathways."
    },
    {
        "id": 51,
        "rank": "51",
        "name": "University of Bristol",
        "url": "https://www.bristol.ac.uk",
        "logoSrc": "/img/University-of-Bristol.jpg",
        "highlight": "University of Bristol is a leading research university with strengths in climate science, social sciences, and information science, and a strong reputation for addressing global challenges through interdisciplinary research.",
        "description": "It’s Think Big Scholarship is among the most generous for international students, providing awards of up to US$60,000. A competitive Bristol portfolio should clearly demonstrate forward-thinking social impact alongside strong research ambition, reflecting the university’s commitment to tackling complex global problems. The institution values students who participate deeply with issues such as sustainability, inequality, and technological revolution, and who can translate academic insights into meaningful real-world actions. Strong applications typically include evidence of environmental activism, social justice advocacy, or high-level STEM research with demonstrable outcomes. Bristol looks for what may be described as the conscious intellectual, a student who combines analytical strength with a strong ethical orientation and commitment to positive change. For scholarship consideration, portfolios that show sustained engagement with sustainable futures and community leadership are especially compelling. Eventually, the university seeks bold thinkers who are prepared to use their academic aptitudes to drive meaningful social and environmental change at national and international levels."
    },
    {
        "id": 52,
        "rank": "52",
        "name": "Carnegie Mellon University (CMU)",
        "url": "https://www.cmu.edu",
        "logoSrc": "/img/carnegie-mellon.jpg",
        "highlight": "Carnegie Mellon University is a global leader in computer science, robotics, and the performing arts, distinctively positioned at the intersection of technical innovation and creative expression.",
        "description": "While merit based scholarships and aid are very competitive, its research fellowships and departmental awards are widely respected and often linked to cutting edge work across disciplines. A strong CMU portfolio should clearly be both technical and creative, reflecting the university’s philosophy where logical rigour and artistic practice reinforce one another. The institution values what may be described as the technical virtuoso, a student who demonstrates mastery in domains such as artificial intelligence, robotics, software engineering, or performance arts. Competitive applications usually include full project documentation, active GitHub repositories, AI or robotics builds, or recordings of performances that demonstrate sustained craft and refinement. CMU particularly looks for the proficient maker, someone who not only understands theory but consistently builds, tests, and iterates real systems or creative works. For scholarship consideration, portfolios that show a high level of mastery in a chosen craft, combined with a clear drive to solve complex, real world problems, are especially compelling. The university seek out innovators who bridge technical depth and creative insight to produce original work across both engineering and the arts."
    },
    {
        "id": 53,
        "rank": "53",
        "name": "University of Amsterdam (UvA)",
        "url": "https://www.uva.nl/en",
        "logoSrc": "/img/University-of-Amsterdam.jpg",
        "highlight": "University of Amsterdam is widely regarded as Europe’s social science and media powerhouse, with leading core strengths in communication science, psychology, and cultural studies.",
        "description": "Its Amsterdam Merit Scholarship is designed to attract international students with strong academic and analytical profiles. A competitive UvA portfolio should clearly demonstrate important global engagement and cultural intelligence, reflecting the university’s main emphasis on understanding complex modern societies through rigorous academic inquiry. The institution values what may be described as the independent critical thinker, a student who can analyse media, society, and culture with intellectual depth and methodological care. Strong applications typically include clear evidence of media literacy projects, sociological or psychological research, and leadership in multicultural or international contexts. UvA particularly seeks what may be described as the cosmopolitan critic, someone who can engage with global media trends, urban social dynamics, and cultural transformation while maintaining a strong analytical foundation. For scholarship consideration, portfolios that demonstrate a clear analytical “spike” in fields such as media studies, urban sociology, or global communication, combined with continuous reflective engagement with global issues, are especially compelling. The university values international students who can thrive in diverse academic environment and contribute to critical debates about society."
    },
    {
        "id": 54,
        "rank": "54",
        "name": "The Hong Kong Polytechnic University (PolyU)",
        "url": "https://www.polyu.edu.hk",
        "logoSrc": "/img/The-Hong-Kong-Polytechnic-University.jpg",
        "highlight": "The Hong Kong Polytechnic University (PolyU) is widely regarded as a professional powerhouse, with strong international recognition in design, hospitality, engineering, and applied sciences.",
        "description": "Its entry scholarships can provide full tuition coverage along with a monthly stipend for outstanding international students. A competitive PolyU portfolio should demonstrate professional practicality alongside design innovation, reflecting the university’s strong focus on industry aligned education and applied research. The institution places very significant value on research with social impact, especially when students can show how their work improves real world conditions in areas such as urban living, healthcare, accessibility, or service industries. Strong applications typically include design portfolios, hospitality related projects, applied engineering solutions, or other practice based work that demonstrates both creativity and technical competence. PolyU looks for what may be described as the practical visionary, a student who can translate ideas into functional, user focused solutions with societal benefit. For scholarship consideration, portfolios that show a sustained commitment to improving human life through design or engineering innovation are especially compelling. Ultimately, the university seeks high potential professionals who can contribute directly to Hong Kong’s development as a global tech hub for applied research, innovation, service, and design driven impactful solutions."
    },
    {
        "id": 55,
        "rank": "55",
        "name": "New York University (NYU)",
        "url": "https://www.nyu.edu",
        "logoSrc": "/img/New-York-University.jpg",
        "highlight": "New York University (NYU) is generally recognised as a “Global Network University” because of its extensive international presence and strong commitment to cross cultural education. The university is particularly renowned for programs in film through Tisch School of the Arts, business through NYU Stern School of Business, and interdisciplinary fields such as global studies and international relations.",
        "description": "Scholarships such as the AnBryce Scholarship Program are aimed at supporting first generation college students and other high achieving applicants with extraordinary leadership potential, sometimes covering most or all tuition expenses. A strong NYU portfolio should reflect global ambition, intellectual curiosity, and imaginative resilience while demonstrating the ability to thrive in diverse cultural and academic environments. The university values students who show individual initiative through international projects, leadership experiences, creative activities, and meaningful community impact. NYU also greatly appreciates what many describe as “urban fearlessness”, meaning the confidence to engage with the dynamic and fast paced environment of New York City. For scholarship applicants, presenting a distinguishing global perspective alongside a proven history of perseverance, adaptability, and leadership can greatly strengthen the application and prove the potential to contribute meaningfully to the community."
    },
    {
        "id": 56,
        "rank": "56",
        "name": "The London School of Economics (LSE)",
        "url": "https://www.lse.ac.uk",
        "logoSrc": "/img/london-school-of-economics.jpg",
        "highlight": "London School of Economics and Political Science (LSE) is globally recognised as a leading institution in the fields of social sciences, politics, international relations, and economics. The university is particularly respected for its influence on global policy, economic research, and political thought, attracting students who are deeply engaged with good understanding and solving complex international challenges.",
        "description": "Financial aid initiatives such as the LSE Undergraduate Support Scheme are designed to assist high potential students, including many international applicants who demonstrate both academic excellence and financial requirement. A strong LSE portfolio should reflect analytical rigour, intellectual depth, and a very clear commitment to policy and social impact. The university highly values what may be described as “the thinking leader”, someone capable of interpreting data, evaluating global systems, and understanding the deeper economic and political forces behind current events. Applicants should highlight advanced economic analysis, research work or project, political engagement, debate, leadership in social initiatives, and evidence of critical thinking. LSE especially values students who show a sophisticated understanding of issues such as global inequality, governance, or economic development, combined with a representative and compelling vision for reform. For scholarship applicants, demonstrating academic excellence alongside a commitment to meaningful global progress can significantly strengthen the application and position the student as a future policy maker."
    },
    {
        "id": 57,
        "rank": "57",
        "name": "Kyoto University",
        "url": "https://www.kyoto-u.ac.jp/en",
        "logoSrc": "/img/Kyoto-University.jpg",
        "highlight": "Kyoto University is widely regarded as one of Japan’s leading research institutions, particularly respected for its research contributions to theoretical sciences, advanced mathematics, engineering, and traditional Japanese cultural studies. The university has produced several distinguished researchers and Nobel Prize winners, reinforcing its reputation for deep intellectual inquiry and long term academic excellence.",
        "description": "For international students, programs such as the Kyoto iUP Program provide substantial financial support, including full tuition fees coverage and living stipends for selected students over several years of study. A strong Kyoto University portfolio should reflect academic purity, intellectual perseverance, and a sustained commitment to mastering a specific field of knowledge. The university values what can be described as “deep, quiet excellence”, rewarding qualified students who demonstrate disciplined curiosity, independent thinking, and scholarly emphasis rather than superficial achievement. Applicants should highlight advanced mathematical or scientific research, original academic projects, participation in top Olympiads or research competitions, cultural immersion experiences, and evidence of consistent academic dedication over time. Kyoto University also values students who combine scientific ability with philosophical reflection and an appreciation for Japanese traditions and culture. For scholarship applicants, demonstrating a powerful academic “spike” in a specialised area together with intellectual dimensions, cultural openness, and the potential for groundbreaking research can strengthen the application and position the student as a future leader."
    },
    {
        "id": 58,
        "rank": "58",
        "name": "Ludwig-Maximilians-Universität München",
        "url": "https://www.lmu.de/en",
        "logoSrc": "/img/ludwig-maximilians-universitat.jpg",
        "highlight": "Ludwig Maximilian University of Munich (LMU Munich) is widely regarded as one of Germany’s premier research universities and is internationally well-recognised for excellence in physics, medicine, law, and the natural sciences. The university is very closely connected to Europe’s leading research institutions and has a long tradition of producing influential scholars, scientists, and innovators.",
        "description": "Although tuition costs in Germany are relatively low compared to many other countries, opportunities such as research stipends, merit funding, and programs connected to the Bavarian Elite Network provide substantial support for outstanding students. A strong LMU portfolio should reflect academic excellence, professionalism, and intellectual discipline while demonstrating the capability to engage deeply with complex theoretical concepts. The university values systematic thinking, analytical precision, and sustained scholarly commitment rather than superficial achievements alone. Applicants should present evidence of scientific research, advanced academic projects, high level debating or analytical writing, internships, lab work, and meaningful engagement with industry or research environments. LMU also appreciates students who can communicate very effectively across cultures and contribute to international academic collaboration within Europe’s research system. For scholarship applicants, demonstrating an academic “spike” in a specialised field, combined with intellectual maturity, research potential, and intercultural communication skills, can significantly strengthen the application and position the student as a future leader within the European research community."
    },
    {
        "id": 59,
        "rank": "59",
        "name": "Universiti Malaya (UM)",
        "url": "https://www.um.edu.my",
        "logoSrc": "/img/Universiti-Malaya.jpg",
        "highlight": "University of Malaya (UM) is widely recognised as Malaysia’s leading university and is especially respected for its core strengths in engineering, social sciences, medicine, business, and Islamic studies. As one of the Southeast Asia’s most internationally connected institutions, UM places very strong emphasis on regional cooperation, multicultural engagement, and academic leadership within the ASEAN community.",
        "description": "Scholarship opportunities such as the University of Malaya International Student Scholarship are designed to attract high achieving international students who clearly demonstrate academic excellence and leadership potential. A strong UM portfolio should highlight developing nations leadership, cultural diplomacy, and a meaningful understanding of ASEAN’s growing role in international affairs. The university values students who combine academic performance with social awareness, intercultural communication skills, and active community involvement. Applicants should present documented proof of social leadership projects, cross cultural research, volunteer initiatives, academic accomplishments, and key contributions to social or educational development. UM also appreciates students who demonstrate engagement with topics such as South Asia cooperation, sustainable development, Islamic finance, or regional economic alliance through research, entrepreneurship, or public service activities. For scholarship applicants, showing the aptitude to balance academic achievement with cultural understanding and leadership can significantly strengthen the application and position the student as a future global ambassador for international cooperation."
    },
    {
        "id": 60,
        "rank": "60",
        "name": "KU Leuven",
        "url": "https://www.kuleuven.be/english",
        "logoSrc": "/img/KU-Leuven.jpg",
        "highlight": "KU Leuven is widely regarded as one of Europe’s most innovative universities and is internationally recognised for excellence in biomedical sciences, law, engineering, theology, and interdisciplinary research. The university has a very good reputation for combining advanced scientific inquiry with social responsibility, ethical reflection, and practical innovation.",
        "description": "Scholarship opportunities such as the Master Mind Scholarships support outstanding international students by helping cover tuition expenses and living costs. A strong KU Leuven portfolio should be deeply research oriented while also demonstrating intellectual adaptability and interdisciplinary thinking. The university values applicants who can connect scientific, legal, ethical, and social perspectives to address complex global challenges. Students should highlight advanced research projects, policy analysis, laboratory work, publications, debate, innovation initiatives, or problem solving experiences that show analytical depth and academic maturity. KU Leuven also appreciates engagement with broader ethical questions and the inclusive intellectual traditions associated with the Catholic higher education, particularly where science, technology, law, medicine, and society intersect. For scholarship applicants, demonstrating a meaningful ethical or scientific contribution to a field, combined with the ability to navigate complex interdisciplinary issues, can significantly strengthen the application and position the student as a future trailblazer in research, innovation, and socially responsible international development."
    }
]


const roadmapData = [
    {
        id: "01",
        title: "Selecting the Right Path",
        subtitle: "Choosing the correct undergraduate trajectory is the first decisive step of a professional career.",
        content: "At Canska, choosing a program is never just picking a major. It is a smart way to align a student's \"Angular Spike\" with what the future world will need. Our mentors look deep into the student's 12-year record to find fields where their true talents meet global prospects. By looking at world trends, we make sure the chosen undergraduate program acts as a powerful launchpad for their professional career."
    },
    {
        id: "02",
        title: "Target university selection",
        subtitle: "Picking the right university requires a deep plan — not just chasing brand names.",
        content: "Canska focuses on the Top 50 universities across the world and matches the student's unique profile with the scholarship objectives of elite institutions. We reject the \"shotgun method\" of applying to too many universities. Instead, we build a precise shortlist where the student's ten years of hard work will have the most impact — ensuring every application goes to an institution where the student is seen as an important asset."
    },
    {
        id: "03",
        title: "The Marathon model — starting early",
        subtitle: "Early action is the main secret. Applications are finished years before the deadline.",
        content: "While other students struggle in Class 12, Canska students already have a verified \"Digital Portfolio\" of wins and leadership roles. We deliberately build marks, letters of support, and activity lists during the \"Risers\" stage so every document is proof of long-term growth. This early action stops last-minute stress entirely and turns the final year into a calm period for focus and strategy."
    },
    {
        id: "04",
        title: "The essay — Voice of Influence",
        subtitle: "Years of real stories turned into a compelling narrative of successes and growth.",
        content: "Canska does not simply \"write\" essays for students. We take years of real experiences and shape them into a powerful story of growth. By using special projects and \"Micro Builds\" recorded since age 8, our students produce personal statements that no one else can copy. These essays go far beyond filling up space — they show a person who takes action and carries a clear, original story. Every word is engineered to link achievements with ambitions."
    },
    {
        id: "05",
        title: "Personal statement crafting",
        subtitle: "Showing curiosity, community impact, and the Angular journey to admissions officers.",
        content: "Personal statements are the main vehicle to show a student's intellectual curiosity and social contribution to admissions officers. We guide students to explain their \"Angular\" journey and show how their activities have already helped local communities through Canska Capstone projects. Our mentors help students find the right balance between pride and humility so their unique perspective stands out clearly among hundreds of identical \"well-rounded\" profiles."
    },
    {
        id: "06",
        title: "Application audit by Master Architects",
        subtitle: "A high-level review ensuring the entire story stays coherent from start to finish.",
        content: "Our \"Master Architects\" review the full application to ensure the entire story remains consistent across every component. Every section must reinforce the student's core \"Spike.\" We read the application through the eyes of an admissions officer to find any gaps in the 12-year story — ensuring every proof is not just impressive but real, verified, and part of a winning narrative."
    },
    {
        id: "07",
        title: "Scholarship and financial aid strategy",
        subtitle: "Engineered for a \"Zero Debt\" outcome — every win mapped to maximum scholarship value.",
        content: "Since Canska aims for a \"Zero Debt\" result, we meticulously analyse how each student's achievements earn them the best possible scholarships. We study what each Top 50 university values most and ensure the application positions the student as a low-risk, high-reward choice. This close review turns the application into a powerful tool for securing a full-ride scholarship — making the university see the student as a must-have on their campus."
    },
    {
        id: "08",
        title: "Financial planning and affordability",
        subtitle: "Guidance on tuition, scholarships, and financial aid — so no opportunity is missed.",
        content: "Financial planning is an aspect of university admissions that families often overlook until it is too late. Canska provides clear guidance on tuition costs, scholarships, and financial aid opportunities. By helping students fully understand their options, we ensure well-informed decisions about their education. With a clear financial strategy in place, students can pursue their academic goals without unnecessary stress or ambiguity about affordability."
    },
    {
        id: "09",
        title: "Well-rounded application profile",
        subtitle: "Beyond academics — extracurriculars, leadership, and community involvement presented with precision.",
        content: "Canska emphasises building a well-rounded application profile. Beyond academics, students are guided to highlight key extracurricular activities, leadership experiences, and community involvement. We ensure these achievements are presented effectively so they add genuine value to the application. This holistic approach helps students demonstrate diverse skills and contributions — appealing to universities seeking individuals who will enrich their academic community."
    },
    {
        id: "10",
        title: "Final submission support",
        subtitle: "The outcome of 12 years of work — submitted with technical precision and \"Planned Calm.\"",
        content: "Helping with the final submission is the culmination of twelve years of long-term planning. Canska understands the technical requirements of international admission portals across the US, UK, and beyond. We ensure every file is uploaded correctly and on time. This stage is defined by \"Planned Calm\" — because the student has already earned their credentials years ago. We simply provide the final safety check so the marathon ends without a single mistake."
    },
    {
        id: "11",
        title: "Interview preparation and offer analysis",
        subtitle: "Mock interviews, real admissions veterans, and a clear-eyed look at every offer received.",
        content: "Even after submission, Canska stays with the student to manage what comes next. Students prepare for major interviews — and because they have practised speaking and thinking since age eight, these feel like natural conversations rather than high-stakes tests. We also analyse every admission offer and scholarship to help families make the best choice, ensuring the transition from high school to a global university campus is smooth and worry-free."
    },
    {
        id: "12",
        title: "University networking and alumni bridges",
        subtitle: "Building meaningful ties with universities long before the student arrives on campus.",
        content: "Beyond the application, Canska builds connections with universities and alumni networks. We guide students to engage meaningfully with the academic community early — reaching out to professors whose research aligns with the student's Capstone project or connecting with student ambassadors to understand campus culture. These bridges transform the student from an unknown name on a page to a recognised individual, opening doors to niche research opportunities and mentorships well before lectures begin."
    },
    {
        id: "13",
        title: "Visa and international travel logistics",
        subtitle: "Embassy requirements, financial documentation, and visa interviews — handled with total care.",
        content: "Canska provides dedicated support for student visa applications and international travel logistics. Navigating embassy requirements and financial documentation can be daunting for most families. Our team ensures all paperwork is meticulously prepared and filed according to the latest global regulations. We guide parents through verification of funds and scheduling of visa interviews — fully removing the final administrative barriers to a child's global education."
    },
    {
        id: "14",
        title: "University Readiness orientation",
        subtitle: "Local laws, banking, academic etiquette, and social norms so students truly thrive.",
        content: "Every student is fully prepared for the cultural shift of living in a new country. Canska's \"University Readiness\" orientation covers local laws, banking, academic etiquettes, and social norms in the US, UK, and Australia. True success in a Top 50 university requires the social confidence to navigate a diverse environment. By addressing these practical life skills, we ensure the student does not just gain entry to a great university — they thrive there."
    },
    {
        id: "15",
        title: "On-campus support through Flyers",
        subtitle: "Peer-to-peer connections in the first semester because the foundation must lead to graduation.",
        content: "Our commitment continues even after the student lands on campus. Canska connects new students with \"Flyers\" peers already excelling at the same university. This peer-to-peer support helps navigate academic challenges and social integration with ease. By maintaining this connection beyond the application, we ensure that the foundation built over twelve years leads to a successful graduation and a high-impact global career. We stay invested in your child's success."
    }
];


const scholarshipSupport = [
    {
        "id": 1,
        "title": "Selecting the Right Scholarships",
        "subtitle": "Map scholarships against Spike, eligibility, and probability chase those that fit not those that flatter.",
        "content": "Most students apply to scholarships randomly and exhaust themselves on awards they have low probability of winning. Canaka mentor's curate a strategic scholarship calendar that matches each student's Spike, demographic eligibility, financial profile, and historical award trends concentrating effort on the awards where the candidate is genuinely competitive and where the rubric rewards what the Cariska portfolio has been building."
    },
    {
        "id": 2,
        "title": "Early Preparation",
        "subtitle": "Begin scholarship calendaring in Risers phase- never start in the application year.",
        "content": "Scholarship-grade evidence (publications, competition wins, leadership roles, sustained service) takes 24-36 months to build credibly, Canska students begin scholarship calendaring in the Risers phase (ages 14-16), so by the application year every required line of the rubric is already substantiated by years of documented work never assembled in panic during the senior year"
    },
    {
        "id": 3,
        "title": "Understanding Scholarship Requirements",
        "subtitle": "Decode rubrics, criteria, and unspoken priorities of each awarding body.",
        "content": "Each scholarship has a public rubric and a private one. Canska mentors deconstruct both what the awarding body says it wants, and what its past laureates actually represent. We map essays recommendations, and supporting evidence directly against those priorities, ensuring every submission speaks the awarding body's own language"
    },
    {
        "id": 4,
        "title": "Scholarship Essays",
        "subtitle": "Story-led essays that translate Spike into mission-aligned narrative.",
        "content": "A scholarship essay is not a list of achievemente it is a story that proves alignment between the student's mission and the awarding body's. Canska essay coaches help students surface a single transformative narrative origin, conflict, action, reflection, and forward arcthat converts a profile into a compelling case for funding"
    },
    {
        "id": 5,
        "title": "Writing a Scholarship Essay",
        "subtitle": "Hook, evidence, transformation, future-arca tested four-beat structure.",
        "content": "We use a tested four-beat structure: a precise hook (specific moment or image), credible evidence (data quotes, outcomes) genuine transformation (what changed in the student), and forward arc (what this scholarship enables next). Essays drafted with this structure consistently outperform abstract \"passion essays and eam higher rubric scores"
    },
    {
        "id": 6,
        "title": "Reviewing the Entire Application",
        "subtitle": "Cross-check coherence across forms recommendations, transcripts, and essays.",
        "content": "Reviewers don't read in isolation, they triangulate. A confident essay paired with a tepid recommendation, or a transcript that contradicts an extracurricular claim, kills credibility instantly. Canska runs a complete cross-document audit before submission every fact, date, and claim verified across forms, recommendation drafts transcripts, and supplementary evidence"
    },
    {
        "id": 7,
        "title": "Constructive Feedback",
        "subtitle": "Multiple expert passes-refining fire, not vague good job",
        "content": "Real feedback hurts and helps. Canska essays go through structural critique (does the narrative architecture work?) evidentiary critique (is every claim substantiated?) linguistic critique (is every sentence necessary and precise?) and tonal critique (does it sound like the student, not an Al). Three to five refinement passes is standard: vague encouragement is not"
    },
    {
        "id": 8,
        "title": "Time Management",
        "subtitle": "Calendar with two months of buffer before each deadline",
        "content": "Procrastination is the silent assassin of scholarship dreams. Cansks mentors enforce a calendar where the first usable draft is complete sixty days before the deedline, allowing for refinement, peer review, recommendation chasing, and the inevitable last-minute additions without panic, without compromise."
    },
    {
        "id": 9,
        "title": "Submission Process",
        "subtitle": "Document checks, technical uploads, video supplements zero last-minute paric",
        "content": "The hours before deadline are when applications quietty fail-file too large, supporting document missing, supplemental form forgotten Canaka runs a final pre-submission checklist 72 hours before each deadline, verifying portal logins, file formats, character counts, video lengths, and notarized documents converting submission day into a non-event"
    },
    {
        "id": 10,
        "title": "Increased Confidence",
        "subtitle": "Students leave the process more articulate, more self-aware, and more resilient.",
        "content": "By the time a Canska student submits their tenth scholarship application, they have articulated their identity, defended their Spike, navigated rejection, and refined their voice more thoroughly than most adults manage in a career. They leave the process not just as scholarship candidates but as articulate, self-aware, resillent communicators"
    },
    {
        "id": 11,
        "title": "Strategic Approach to Applications",
        "subtitle": "Portfolio narrative financial modelling compounded probability of award.",
        "content": "We treat scholarships like a portfolio of investments a balanced mix of high-probability local awards, medium-probability international merit awards, and a few moonshat full-ride scholarships Combined with a coherent narrative and accurate financisi modelling, this compounded approach typically delivers multiple wins instead of one all-or-nothing bet"
    },
    {
        "id": 12,
        "title": "Long-Term Skills",
        "subtitle": "Writing, research, and self-presentation that pay dividends for life.",
        "content": "Long after the cheques are cashed the skills built during scholarship season-sharp writing, defensible research, rigorous self-presentation, calin under deadlines-keep paying dividends. Canska alumni report that scholarship season was the single most useful professional skills bootcamp of their lives"
    },
    {
        "id": 13,
        "title": "Overall Support",
        "subtitle": "Mentors as co-architects-students never apply alone",
        "content": "From shortlisting through draft, edit, submission and decision-day strategy, a Canska scholarship mentor is a co-architect never a substitute for the student, but always a steady hand at the wheel. The student dues the thinking and writing, the mentor ensures the work is structured, strategic, and submitted on time."
    }
];


const studentVisa = [
    {
        "id": "01",
        "title": "Visa Eligibility Criteria",
        "subtitle": "Country-by-country eligibility framework decoded with current rules..",
        "content": "Every country sets distinct eligibility rules around financial sponsorship, academic prerequisites, language thresholds, and dependent provisions and each rule changes annually. Canska maintains a live, country-by-country eligibility matrix and walks every family through the precise checklist their target country requires, eliminating surprises at the consulate."
    },
    {
        "id": "02",
        "title": "Visa Documentation Standards",
        "subtitle": "Originals, copies, formats, notarisations fully verified before submission.",
        "content": "A single missing notarisation or wrongly formatted document can void months of work. Canska runs a structured documentation audit verifying originals, certified copies, translation accuracy, notarisation seals, and consular formatting requirements. so the visa packet that lands on an officer's desk is impeccable."
    },
    {
        "id": "03",
        "title": "Visa Rules & Regulations",
        "subtitle": "Latest policy updates monitored continuously never apply on outdated rules.",
        "content": "Immigration policy shifts quickly sometimes by ministerial circular, sometimes after national elections. Canska's policy desk monitors USCIS, UKVI, IRCC, DHA Australia, and other authorities continuously, so families never submit applications using outdated criteria or missed updates that could trigger rejection."
    },
    {
        "id": "04",
        "title": "Visa Requirements & Timelines",
        "subtitle": "Realistic timelines mapped backward from semester start.",
        "content": "Visa appointments fill months in advance during peak season. We map the entire timeline backwards from semester start appointment slots, biometric submissions, financial document validity windows, medical exams, and police clearance turnarounds so nothing collides with travel dates or course start."
    },
    {
        "id": "05",
        "title": "Financial Documentation",
        "subtitle": "Sponsor letters, statements, GIC/blocked accounts bank-grade preparation.",
        "content": "Financial proof is where visa applications most often fail. Canska helps families compile sponsor affidavits, bank statements covering required look-back periods, GIC certificates, blocked-account confirmations, and tax returns formatted to the precise standards consular officers expect, eliminating the most common cause of refusal."
    },
    {
        "id": "06",
        "title": "SOP & Interview Prep",
        "subtitle": "Statement of Purpose and consular interview rehearsals tuned to the target country.",
        "content": "The SOP and visa interview test the same thing: \"Is this student a genuine, returning, financially-supported student?\" Canska coaches the SOP to the target country's narrative preferences (UK favours academic precision; USA favours intent clarity; Canada favours ties to home), and runs full mock interviews until answers are crisp, honest, and consistent."
    },
    {
        "id": "07",
        "title": "Application Assembly",
        "subtitle": "Organisation, formatting, translations, verification application-ready packets.",
        "content": "We assemble the final packet in the exact order each consulate expects covering letter, SOP, financial set, academic set, identity set, sponsor set with tabbed indexes and a packet-level summary that helps officers process the application faster and more favourably."
    },
    {
        "id": "08",
        "title": "Post-Approval Onboarding",
        "subtitle": "Flights, housing, insurance, onboarding checklists a soft landing abroad.",
        "content": "Approval is the start, not the finish line. Canska's post-approval checklist covers flight booking strategy (multi-city, baggage allowances), university housing or off-campus rental selection, mandatory health insurance, SIM cards, bank account setup, and orientation calendar ensuring the student's first week abroad is calm, organised, and confidence-building."
    }
];


const UniversityPrep = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Convert string parameter to an integer safely, fallback to 0
    const urlTab = searchParams.get('activeTab');
    const initialTab = urlTab ? parseInt(urlTab, 10) : 0;

    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (urlTab !== null) {
            const parsed = parseInt(urlTab, 10);
            if (!isNaN(parsed)) setActiveTab(parsed);
        }
    }, [urlTab]);

    const handleTabChange = (index) => {
        setActiveTab(index);

        const params = new URLSearchParams(searchParams.toString());
        params.set('activeTab', index.toString());

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    console.log("activeTab", activeTab);

    const renderTabTitle = (number, text, index) => {
        const isActive = activeTab === index;
        return (
           <div className={`flex items-center gap-2.5 p-[10px_20px] rounded-[999px] cursor-pointer transition-all duration-200 border border-solid ${isActive
        ? "bg-[#5E17EB] border-[#5E17EB] shadow-[0_4px_6px_-4px_rgba(94,23,235,0.25),0_10px_15px_-3px_rgba(94,23,235,0.25)] text-[#FFFFFF] "
        : "bg-[#FFFFFF] text-[#0A0A0ABF] border-[#EDE7FB] rounded-[999px]"
        }`}>
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold transition-all duration-200 ${isActive
            ? "bg-[#FFB433] text-[#2D0B70]"
            : "bg-[#F4F1FE] text-[#5E17EB]"
            }`}
        >
          {number}
        </span>
        <span>{text}</span>
      </div>
        );
    };


    return (

        <div className='font-dm'>
            <section className={`relative w-full flex items-center overflow-hidden bg-[url('/img/university-prep.svg')] bg-cover bg-center  p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[100px_61px_105px]`}>

                {/* Gradient Overlay 1: Left-to-Right Depth */}
                <div
                    className="absolute inset-0 w-full h-full top-0 left-0 z-10"
                    style={{
                        background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.70) 0%, rgba(45, 11, 112, 0) 50%, rgba(45, 11, 112, 0) 100%)'
                    }}
                />

                {/* Gradient Overlay 2: Vertical Ambient Glow */}
                <div
                    className="absolute inset-0 w-full h-full top-0 left-0 z-20"
                    style={{
                        background: 'linear-gradient(90deg, rgba(45, 11, 112, 0.85) 0%, rgba(45, 11, 112, 0.60) 50%, rgba(45, 11, 112, 0.30) 100%)'
                    }}
                />



                {/* Main Content Container */}
                <div className="relative z-40 w-full flex flex-col gap-[34px]">

                    {/* Breadcrumb - Instant or standalone load depending on preference */}
                    <Breadcrumb items={breadcrumbLinks} />

                    {/* Info Block wrapped for smooth layout animation */}
                    <ScrollAnimatedElement direction="up" delay={0.1}>
                        <div className="max-w-[852px] flex flex-col gap-[20px]">

                            {/* Subtitle / Tagline */}
                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-4">
                                -Top 50 Admissions, Scholarships, Visas
                            </span>

                            {/* Main Heading */}
                            <h1 className="text-white text-5xl md:text-[64px] font-extrabold leading-[64px] tracking-[-1.6px]">
                                University <span className="text-[#FFB433]"> Prep</span>
                            </h1>

                            {/* Description Paragraph */}
                            <p className="text-white text-[18px] font-medium leading-7 text-left">
                                From the world's top 50 universities to scholarship architecture and visa precision — a complete preparation system that turns ambition into acceptance letters and full-ride awards.
                            </p>

                        </div>
                    </ScrollAnimatedElement>

                </div>
            </section>


            <div className="w-full">
                <Tabs
                    variant="pills"
                    theme={customTabsTheme}
                    onActiveTabChange={handleTabChange}
                    className='[&>div:last-child>div]:p-0 gap-0'
                >
                    <Tabs.Item active={activeTab === 0} title={renderTabTitle("01", "TOP 50 Universities", 0)}>
                        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

                            {/* 1. Header & Intro Banner Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.1}>
                                {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
                                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                                    <Image
                                        src="/img/whycanska-banner.svg"
                                        alt="Graduating students throwing caps against city skyline"
                                        fill
                                        priority
                                        className="object-cover object-center absolute w-full h-full"
                                    />
                                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>TOP 50 Universities</h1>
                                    {/* Deep Violet Overlay Layer matching the aesthetic */}
                                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                                </div>

                                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[54px] max-w-[896px]'>
                                    Discover the unique value propositions, scholarship opportunities, and portfolio attributes of the world's top 50 universities and colleges — each one with its own personality, priorities, and pathway to a full-ride scholarship.
                                </p>
                            </ScrollAnimatedElement>

                            {/* 2. Feature Blocks Stack (University Cards) */}
                            <div className="flex flex-col gap-[20px] mb-[40px] xl:mb-[69px]">
                                {universityData.map((uni, index) => (
                                    <ScrollAnimatedElement
                                        key={uni.id}
                                        direction="up"
                                        delay={0.1 + (index % 3) * 0.1} // Staggers the initial visible cards slightly
                                    >
                                        <article className="rounded-2xl border border-[#5E17EB66] bg-white p-[24px_24px_34px_24px] text-[#0A0A0A]">
                                            {/* Header Container */}
                                            <div className="flex flex-col gap-4 md:flex-row md:items-center">

                                                {/* Dynamic Rank Badge */}
                                                <div className="flex h-12 w-12 flex-col self-start items-center justify-center rounded-xl border border-[#D4AF3780] bg-[#D4AF3726] shadow-[2px_2px_2px_rgba(0,0,0,0.1)]">
                                                    <span className="text-[9px] font-extrabold leading-none tracking-[1.35px] text-[#D4AF37]">
                                                        RANK
                                                    </span>
                                                    <span className="text-base font-bold leading-6 text-[#D4AF37]">
                                                        {uni.rank}
                                                    </span>
                                                </div>

                                                {/* Dynamic Logo Card */}
                                                <div className="flex h-[69px] w-[220px] items-center justify-center rounded-xl border border-[#EAE2FC] bg-white px-4">
                                                    <div className="relative h-13 w-full flex items-center justify-center">
                                                        <Image
                                                            src={uni.logoSrc}
                                                            alt={`${uni.name} Logo`}
                                                            width={200}
                                                            height={52}
                                                            className="object-contain w-full h-full"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Dynamic Title and Website Link */}
                                                <div className="flex flex-col justify-center">
                                                    <h2 className="text-2xl font-medium leading-5 text-[#0A0A0A]">
                                                        {uni.name}
                                                    </h2>
                                                    <Link
                                                        href={uni.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-3 inline-flex items-center gap-[10px] text-sm font-normal leading-5 text-[#5E17EB] hover:underline"
                                                    >
                                                        Official site
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.75 0.75H2.41667C1.97464 0.75 1.55072 0.925595 1.23816 1.23816C0.925595 1.55072 0.75 1.97464 0.75 2.41667V12.4167C0.75 12.8587 0.925595 13.2826 1.23816 13.5952C1.55072 13.9077 1.97464 14.0833 2.41667 14.0833H12.4167C12.8587 14.0833 13.2826 13.9077 13.5952 13.5952C13.9077 13.2826 14.0833 12.8587 14.0833 12.4167V9.08333M7.41667 7.41667L14.0833 0.75M9.91667 0.75H14.0833V4.91667" stroke="#5E17EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Dynamic Highlighted Banner Paragraph */}
                                            <div className="mt-[26px] rounded-xl bg-[#5E17EB1A] px-[13px] py-2.5">
                                                <p className="text-sm font-bold leading-[23px]">
                                                    {uni.highlight}
                                                </p>
                                            </div>

                                            {/* Dynamic Main Body Paragraph */}
                                            <div className="mt-[17px] pt-[23px] border-t border-solid border-[#EDE7FB]">
                                                <p className="text-sm font-medium leading-[22px] text-[#0A0A0A]">
                                                    {uni.description}
                                                </p>
                                            </div>
                                        </article>
                                    </ScrollAnimatedElement>
                                ))}
                            </div>

                            {/* 3. Next Up / CTA Section Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.15}>
                                <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                                    {/* Decorative Blur Object (Top Right) */}
                                    <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                                        {/* Left Column: Context Texts */}
                                        <div className="flex flex-col max-w-[880px] gap-[12px]">
                                            {/* Section Marker */}
                                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                                Next Up
                                            </span>

                                            {/* Heading with styled dynamic context highlight */}
                                            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal tracking-[-1.92px]">
                                                Continue to <span className=" text-[#FFB433]">For Parents</span>
                                            </h2>

                                            {/* Context Body */}
                                            <p className="max-w-[576px] text-white/80 text-base font-normal leading-[26px]">
                                                Parenting is the ultimate long-term investment. This is your map — the strategic value, the real ROI, the admissions insights, the commitments expected, and the workload philosophy that protects childhood while building greatness.
                                            </p>
                                        </div>

                                        {/* Right Column: CTA Pill Action Component */}
                                        <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                                            <Link
                                                href="/quad-lesson"
                                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] min-w-[232px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                                            >
                                                <span className="flex-1 text-left">Read For Parents</span>
                                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </section>
                            </ScrollAnimatedElement>

                        </section>
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 1} title={renderTabTitle("02", "University Admissions", 1)}>
                        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

                            {/* 1. Header Hero Banner Scroll Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.1}>
                                {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
                                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                                    <Image
                                        src="/img/university-admissions.svg"
                                        alt="Graduating students throwing caps against city skyline"
                                        fill
                                        priority
                                        className="object-cover object-center absolute w-full h-full"
                                    />
                                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>University Admissions</h1>
                                    {/* Deep Violet Overlay Layer matching the aesthetic */}
                                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                                </div>

                                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[80px] max-w-[896px]'>
                                    Canska guides students towards the right undergraduate path — aligning talent with future global needs and producing the "Angular Spike" that elite universities can no longer ignore.
                                </p>
                            </ScrollAnimatedElement>

                            {/* Outer Wrapper with exact desktop constraints */}
                            <div className="relative mb-[60px]">

                                {/* Continuous Timeline Vertical Line Indicator */}
                                <div className="absolute left-[18px] top-0 h-full bottom-4 w-[2px] bg-[#5E17EB1A] z-0 hidden md:block" />

                                {/* Steps Stack */}
                                <div className="flex flex-col gap-10 relative z-10">
                                    {roadmapData.map((step, index) => (
                                        <ScrollAnimatedElement
                                            key={step.id}
                                            direction="up"
                                            delay={0.1 + (index % 2) * 0.1} // Contextual staggered entry optimization
                                        >
                                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-11 w-full">

                                                {/* Left Column: Number Badges */}
                                                <div className="flex items-center justify-center md:sticky md:top-10 shrink-0">
                                                    <div className="w-9 h-9 bg-white border-[1.6px] border-[#5E17EB80] rounded-full flex items-center justify-center">
                                                        <span className="text-[13px] leading-[19px] font-extrabold text-[#5E17EB] tracking-tighter">
                                                            {step.id}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Right Column: Outer Content Frame Container */}
                                                <div className="w-full border border-[#5E17EB66] rounded-2xl bg-white p-7 sm:p-8 hover:border-[#5E17EB]/80 transition-colors duration-300">
                                                    <div className="flex flex-col">

                                                        {/* Step Title */}
                                                        <h3 className="text-xl font-extrabold text-[#0A0A0A] leading-tight mb-[12px]">
                                                            {step.title}
                                                        </h3>

                                                        {/* Step Subtitle Banner */}
                                                        <p className="text-base font-medium text-[#0A0A0A] leading-[24px] mb-[16px]">
                                                            {step.subtitle}
                                                        </p>

                                                        {/* Step Inner Descriptive Copy Body */}
                                                        <p className="text-sm font-medium text-[#0A0A0A] leading-[25px] pt-[20px] border-t border-solid border-[#5E17EB]">
                                                            {step.content}
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                        </ScrollAnimatedElement>
                                    ))}
                                </div>

                            </div>

                            {/* 3. Next Up CTA Target Block Scroll Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.15}>
                                <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                                    {/* Decorative Blur Object (Top Right) */}
                                    <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                                        {/* Left Column: Context Texts */}
                                        <div className="flex flex-col max-w-[880px] gap-[12px]">

                                            {/* Section Marker */}
                                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                                Next Up
                                            </span>

                                            {/* Heading with styled dynamic context highlight */}
                                            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal tracking-[-1.92px]">
                                                Continue to  <span className=" text-[#FFB433]">For Parents</span>
                                            </h2>

                                            {/* Context Body */}
                                            <p className="max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                                                Parenting is the ultimate long-term investment. This is your map — the strategic value, the real ROI, the admissions insights, the commitments expected, and the workload philosophy that protects childhood while building greatness.
                                            </p>
                                        </div>

                                        {/* Right Column: CTA Pill Action Component */}
                                        <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                                            <Link
                                                href="/quad-lesson"
                                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                                            >
                                                <span className="flex-1 text-left">Read For Parents</span>
                                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </section>
                            </ScrollAnimatedElement>

                        </section>
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 2} title={renderTabTitle("03", "Scholarship Support", 2)}>
                        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

                            {/* 1. Top Header Banner Scroll Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.1}>
                                {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
                                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                                    <Image
                                        src="/img/scholarship-support.svg"
                                        alt="Graduating students throwing caps against city skyline"
                                        fill
                                        priority
                                        className="object-cover object-center absolute w-full h-full"
                                    />
                                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Scholarship Support</h1>
                                    {/* Deep Violet Overlay Layer matching the aesthetic */}
                                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                                </div>

                                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[80px] max-w-[896px]'>
                                    Scholarship support can feel overwhelming. Structured guidance helps students approach the process with precision and a well-defined strategy.
                                </p>
                            </ScrollAnimatedElement>

                            {/* Outer Wrapper with exact desktop constraints */}
                            <div className="relative mb-[60px]">

                                {/* Continuous Timeline Vertical Line Indicator */}
                                <div className="absolute left-[18px] top-0 h-full bottom-4 w-[2px] bg-[#5E17EB1A] z-0 hidden md:block" />

                                {/* Steps Stack with Staggered Visual Entry */}
                                <div className="flex flex-col gap-10 relative z-10">
                                    {scholarshipSupport.map((step, index) => (
                                        <ScrollAnimatedElement
                                            key={step.id}
                                            direction="up"
                                            delay={0.1 + (index % 2) * 0.1} // Dynamically staggers neighboring nodes sequentially
                                        >
                                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-11 w-full">

                                                {/* Left Column: Number Badges */}
                                                <div className="flex items-center justify-center md:sticky md:top-10 shrink-0">
                                                    <div className="w-9 h-9 bg-white border-[1.6px] border-[#5E17EB80] rounded-full flex items-center justify-center">
                                                        <span className="text-[13px] leading-[19px] font-extrabold text-[#5E17EB] tracking-tighter">
                                                            {step.id}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Right Column: Outer Content Frame Container */}
                                                <div className="w-full border border-[#5E17EB66] rounded-2xl bg-white p-7 sm:p-8 hover:border-[#5E17EB]/80 transition-colors duration-300">
                                                    <div className="flex flex-col">

                                                        {/* Step Title */}
                                                        <h3 className="text-xl font-extrabold text-[#0A0A0A] leading-tight mb-[12px]">
                                                            {step.title}
                                                        </h3>

                                                        {/* Step Subtitle Banner */}
                                                        <p className="text-base font-medium text-[#0A0A0A] leading-[24px] mb-[16px]">
                                                            {step.subtitle}
                                                        </p>

                                                        {/* Step Inner Descriptive Copy Body */}
                                                        <p className="text-sm font-medium text-[#0A0A0A] leading-[25px] pt-[20px] border-t border-solid border-[#5E17EB]">
                                                            {step.content}
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                        </ScrollAnimatedElement>
                                    ))}
                                </div>

                            </div>

                            {/* 3. Next Up / CTA Block Scroll Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.15}>
                                <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                                    {/* Decorative Blur Object (Top Right) */}
                                    <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">

                                        {/* Left Column: Context Texts */}
                                        <div className="flex flex-col max-w-[880px] gap-[12px]">

                                            {/* Section Marker */}
                                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                                Next Up
                                            </span>

                                            {/* Heading with styled dynamic context highlight */}
                                            <h2 className="max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal tracking-[-1.92px]">
                                                Continue to <span className=" text-[#FFB433]">For Parents</span>
                                            </h2>

                                            {/* Context Body */}
                                            <p className="max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                                                Parenting is the ultimate long-term investment. This is your map — the strategic value, the real ROI, the admissions insights, the commitments expected, and the workload philosophy that protects childhood while building greatness.
                                            </p>
                                        </div>

                                        {/* Right Column: CTA Pill Action Component */}
                                        <div className="flex-shrink-0 self-start md:self-auto pt-4 md:pt-0">
                                            <Link
                                                href="/quad-lesson"
                                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                                            >
                                                <span className="flex-1 text-left">Read For Parents</span>
                                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </section>
                            </ScrollAnimatedElement>

                        </section>
                    </Tabs.Item>

                    <Tabs.Item active={activeTab === 3} title={renderTabTitle("04", "Student Visa", 3)}>
                        <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[30px_61px_99px] bg-[#FAFAFC]">

                            {/* 1. Header Hero Banner Scroll Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.1}>
                                {/* Top Banner Image with Rounded Corners and Gradient Overlay */}
                                <div className="relative w-full h-[200px] md:h-[220px] rounded-3xl overflow-hidden mb-[24px] grid items-center p-[86px_48px]">
                                    <Image
                                        src="/img/student-visa.svg"
                                        alt="Graduating students throwing caps against city skyline"
                                        fill
                                        priority
                                        className="object-cover object-center absolute w-full h-full"
                                    />
                                    <h1 className='text-[48px] leading-[48px] font-bold text-[#FFFFFF] relative z-[1]'>Student Visa</h1>
                                    {/* Deep Violet Overlay Layer matching the aesthetic */}
                                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0)),linear-gradient(90deg,rgba(45,11,112,0.85)_0%,rgba(45,11,112,0.55)_50%,rgba(45,11,112,0.15)_100%)] mix-blend-multiply" />
                                </div>

                                <p className='text-base leading-[24px] font-normal text-[#0A0A0A] mb-[80px] max-w-[896px]'>
                                    Navigating student visas requires meticulous attention to detail. Even minor oversights can derail an admission. Canska offers comprehensive support to manage every aspect confidently.
                                </p>
                            </ScrollAnimatedElement>

                            {/* Outer Wrapper with exact desktop constraints */}
                            <div className="relative mb-[60px]">

                                {/* Continuous Timeline Vertical Line Indicator */}
                                <div className="absolute left-[18px] top-0 h-full bottom-4 w-[2px] bg-[#5E17EB1A] z-0 hidden md:block" />

                                {/* Steps Stack */}
                                <div className="flex flex-col gap-10 relative z-10">
                                    {studentVisa.map((step, index) => (
                                        <ScrollAnimatedElement
                                            key={step.id}
                                            direction="up"
                                            delay={0.1 + (index % 2) * 0.1} // Contextual staggered entry optimization
                                        >
                                            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-11 w-full">

                                                {/* Left Column: Number Badges */}
                                                <div className="flex items-center justify-center md:sticky md:top-10 shrink-0">
                                                    <div className="w-9 h-9 bg-white border-[1.6px] border-[#5E17EB80] rounded-full flex items-center justify-center">
                                                        <span className="text-[13px] leading-[19px] font-extrabold text-[#5E17EB] tracking-tighter">
                                                            {step.id}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Right Column: Outer Content Frame Container */}
                                                <div className="w-full border border-[#5E17EB66] rounded-2xl bg-white p-7 sm:p-8 hover:border-[#5E17EB]/80 transition-colors duration-300">
                                                    <div className="flex flex-col">

                                                        {/* Step Title */}
                                                        <h3 className="text-xl font-extrabold text-[#0A0A0A] leading-tight mb-[12px]">
                                                            {step.title}
                                                        </h3>

                                                        {/* Step Subtitle Banner */}
                                                        <p className="text-base font-medium text-[#0A0A0A] leading-[24px] mb-[16px]">
                                                            {step.subtitle}
                                                        </p>

                                                        {/* Step Inner Descriptive Copy Body */}
                                                        <p className="text-sm font-medium text-[#0A0A0A] leading-[25px] pt-[20px] border-t border-solid border-[#5E17EB]">
                                                            {step.content}
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                        </ScrollAnimatedElement>
                                    ))}
                                </div>

                            </div>

                            {/* 3. Next Up CTA Target Block Scroll Animation */}
                            <ScrollAnimatedElement direction="up" delay={0.15}>
                                <section className="w-full p-[20px_16px_60px_16px] sm:p-[29px_32px_80px_32px] lg:p-[56px] flex items-center bg-[#5E17EB] text-white rounded-[24px] relative overflow-hidden">
                                    {/* Decorative Blur Object (Top Right) */}
                                    <div className="absolute w-[400px] h-[400px] -top-[12px] -left-[200px] bg-[#FFFFFF1A] blur-[64px] rounded-full z-30 pointer-events-none" />
                                    <div className="w-full flex flex-col lg:flex-row justify-between items-start md:items-center gap-8 lg:gap-12">

                                        {/* Left Column: Context Texts */}
                                        <div className="flex flex-col lg:max-w-[880px] gap-[12px]">

                                            {/* Section Marker */}
                                            <span className="text-[#FFB433] text-sm font-bold tracking-[2.42px] uppercase leading-[16px]">
                                                Next Up
                                            </span>

                                            {/* Heading with styled dynamic context highlight */}
                                            <h2 className="lg:max-w-[926px] text-4xl sm:text-5xl md:text-[36px] font-bold leading-normal md:leading-[40px] tracking-[-1.92px]">
                                                Continue to  <span className=" text-[#FFB433]">For Parents</span>
                                            </h2>

                                            {/* Context Body */}
                                            <p className="lg:max-w-[576px] text-white/80 text-[15px] font-normal leading-[22px]">
                                                Parenting is the ultimate long-term investment. This is your map — the strategic value, the real ROI, the admissions insights, the commitments expected, and the workload philosophy that protects childhood while building greatness.
                                            </p>
                                        </div>

                                        {/* Right Column: CTA Pill Action Component */}
                                        <div className="flex-shrink-0 flex max-sm:flex-col gap-[12px] self-start md:self-auto pt-4 md:pt-0 max-lg:w-full max-lg:justify-start">
                                            <Link
                                                href="/"
                                                className="inline-flex items-center gap-2.5 bg-[#FFB433] text-[#2D0B70] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#e09d2a] transition-all duration-200 group"
                                            >
                                                <span className="flex-1 text-left">Read For Parents</span>
                                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.588 10.926V9.4H8.022L4.354 6.04L5.404 4.976L10.388 9.666V10.646L5.404 15.336L4.34 14.258L7.994 10.926H0.588Z" fill="#2D0B70" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <Link
                                                href="/"
                                                className="inline-flex items-center gap-2.5 bg-[#00000000] text-[#FFFFFF] px-[25.8px] py-[13.8px] h-[50.6px] rounded-full font-semibold text-base leading-[24px] tracking-[-0.14px] hover:bg-[#FFFFFF4D] transition-all duration-200 group border border-solid border-[#FFFFFF4D]"
                                            >
                                                <span className="flex-1 text-left">Create Account</span>
                                                <span className="text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_885_2853)">
                                                            <path d="M4.66602 4.66675H11.3327V11.3334" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.66602 11.3334L11.3327 4.66675" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_885_2853">
                                                                <rect width="16" height="16" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                </section>
                            </ScrollAnimatedElement>

                        </section>
                    </Tabs.Item>
                </Tabs>
            </div>

        </div>
    )
}


export default UniversityPrep
