import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'SeungMin Chae',
	title: 'Hello I\'m SeungMin Chae',
	subTitle: emoji("Build CarefreeLife ❤"),
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
		{fontAwesome: "fab fa-java", text: "Java,Spring(+Boot)", proficiency: 80},
		{fontAwesome: "fas fa-database", text: "MySQL", proficiency: 70},
		{fontAwesome: "far fa-file-code", text: "Couchbase, Redis", proficiency: 60},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 40},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 30},
		{fontAwesome: "fab fa-jira", text: "Jira", proficiency: 70},
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
				"네트워크 기본부터 가상화, 퍼블릭 클라우드, K8s 기반의 MSA, 오케스트레이션 학습 및 실제 CJ 사례기반 클라우드 프로젝트 진행.\n" +
				"프로젝트 명:\n" +
				"CGV - Fast Order Application\n" +
				"주요 기술:\n" +
				"AWS Cloud Infra, IaC(Terraform, Terraform Cloud), Container Orchestration(Docker, EKS), Spring Boot 2.7.3, AWS Aurora DB(MySQL)\n" +
				"프로젝트 설명:\n" +
				"CGV - Fast Order 프로젝트는 현재 CGV 에서 운영중인 Fast Order 앱의 실제 클라우드 인프라 환경을 기반으로 IaC 를 사용, 더 효율적인 클라우드 인프라를 구축한 후 고객사의 요구사항에 맞추어 Java Spring Boot 를 활용한 Fast Order 앱을 CI/CD Pipeline 위에서 개발, 대규모의 사용자가 동시에 사용해도 문제가 없도록 해당 인프라의 Container Orchestration (EKS) 으로 배포하는 경험이 주 목적입니다.\n" +
				"해당 프로젝트에서 주로 사용한 서비스 및 기술은 다음과 같습니다.\n" +
				"담당 역할:\n" +
				"해당 프로젝트에서 저는 가장 흥미로웠던 다음과 같은 파트에 자원하여 진행하였습니다.\n" +
				"클라우드 인프라를 코드로서 구축할 수 있는 IaC(Terraform), 기존에 흥미를 가지고 진행해왔던 Spring boot 를 활용한 Web Application 개발 및 개발한 서비스가 인프라에서 Container Orchestration System 으로서 배포되어 대규모 트래픽을 고가용성을 가지고 처리할 수 있는 솔루션인 K8s(EKS), 그리고 제가 속한 팀이 더욱 효율적인 작업을 할 수 있도록 CI/CD Pipeline 구축 및 다방면으로서의 자동화를 구축하였습니다.\n",
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