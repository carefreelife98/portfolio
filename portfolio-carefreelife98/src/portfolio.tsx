import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'SeungMin Chae',
	title: 'Hello I\'m SeungMin Chae',
	subTitle: emoji("Build CarefreeLife 🧑🏻‍💻"),
	role: "Backend Engineer",
	resumeLink: "https://drive.google.com/file/d/1KogEXwOAXCfdr5SEKkr2GpSnG8CndqkU/view?usp=sharing",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/carefreelife98',
	linkedin: 'www.linkedin.com/in/seung-min-chae-608004285',
	email: 'csm12180318@gmail.com',
	facebook: '',
	twitter: "",
	instagram: "https://www.instagram.com/carefreelife._.98/",
	medium: 'https://carefreelife98.github.io/',
	stackoverflow: ''
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "Interested in overall IT technologies",
	describeSkills: [
		emoji("✔ Java / Spring, Spring Boot"),
		emoji("✔ RDBMS / MySQL"),
		emoji("✔ Storage / Couchbase, Redis"),
		emoji("✔ React, Typescript"),
		emoji("✔ Public Cloud / AWS, GCP, NCP"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-java", text: "Java / Spring", proficiency: 80},
		{fontAwesome: "fas fa-database", text: "MySQL", proficiency: 70},
		{fontAwesome: "fa-brands fa-git", text: "Git", proficiency: 70},
		{fontAwesome: "fab fa-jira", text: "Jira", proficiency: 70},
		{fontAwesome: "fa-brands fa-python", text: "Python", proficiency: 60},
		{fontAwesome: "far fa-file-code", text: "Couchbase, Redis", proficiency: 60},
		{fontAwesome: "fa-regular fa-envelope", text: "Kafka", proficiency: 50},
		{fontAwesome: "fa-brands fa-js", text: "JS", proficiency: 40},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 40},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 30},
	],
	view: true
};

export const experience = {
	title: "Work / Education Experience",
	lists: [
		{
			date: "2023.07 ~ 2023.09",
			company: "CJ Olivenetworks - Cloud Wave 1st",
			role: "Public Cloud Education",
		},
		{
			date: "2024.01 ~ now",
			company: "Qoo10 Technologies - TMON",
			role: "Channel Service Dev. Team, Backend Engineer",
		},
		// {
		// 	date: "test",
		// 	company: "test",
		// 	role: "test",
		// },
		// {
		// 	date: "test",
		// 	company: "test",
		// 	role: "test",
		// },
		// {
		// 	date: "test",
		// 	company: "test",
		// 	role: "test",
		// }
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻 (Github API 연결 대기중입니다.)"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "Recent Projects",
	lists: [
		{
			title: "Couchbase 기반의 Validation 용 문서 관리",
			desc: "작성 예정입니다.",
			url: "#"
		},
		{
			title: "홈 화면의 배너 이미지 외부 연동",
			desc: "작성 예정입니다.",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "",
	lists: [
		{
			img: require("./assets/cloud_wave1.png"),
			alt: "cloud_wave1",
			title: "[CJ Olivenetworks] Cloud Wave 수료",
			desc: "교육명:\n" +
				"Cloud Wave 1기 (CJ Olivenetworks 주관)\n" +
				"교육 내용:\n" +
				"네트워크 기본부터 가상화, 퍼블릭 클라우드, K8s 기반의 MSA, 오케스트레이션 학습 및 실제 CJ 사례기반 클라우드 프로젝트 진행.\n"
		},
		{
			img: require("./assets/toeic.png"),
			alt: "toeic",
			title: "TOEIC",
			desc: "Total: 910 (Expired on December 15, 2020)"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "Hosted by Github Pages",
	lists: [
		{
			title: "Smart Barricade",
			desc: "2024 INU CSE 졸업작품",
			url: "https://carefreelife98.github.io/inu-capstone/capstone-admin-server/"
		},
		{
			title: "Carefree OCR v2: 우체국 등기 영수증 / 사업자 등록증 자동 관리 시스템",
			desc: "퍼블릭 클라우드 서비스를 활용하여 우체국 등기 영수증 / 사업자 등록증 자동 관리 시스템 구축",
			url: "https://carefreelife98.github.io/toy-project/carefreeOCR2/"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "Thank you for your time !",
	introduce: emoji("Seung-Min Chae | 채승민 \n" +
		"Backend Engineer, Dev Unit / Channel Service Dev. team\n" +
		"------------------------------------------------------------------------------\n" +
		"N Tower, 13F, 129, Teheran-ro, Gangnam-Gu, Seoul, 06133 Republic of Korea\n" +
		"M. 010-2532-4903  l  E. carefreelife@qoo10.com / carefreelife@wemakeprice.com / carefreelife@tmon.co.kr / carefreelife@interparkshop.com\n"),
	view: true
}