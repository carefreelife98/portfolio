import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'SeungMin Chae',
	title: 'Hello, I\'m SeungMin Chae',
	image: "profile.jpeg",
	role: "Backend Engineer",
	subTitle: emoji("Build CarefreeLife 🧑🏻‍💻"),
	resumeLink: "https://drive.google.com/file/d/1lEI_W4_c3j4yjEcMcwXbcDttE_t0kQSw/view?usp=sharing",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/carefreelife98',
	linkedin: 'https://www.linkedin.com/in/seung-min-chae-608004285',
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
		{fontAwesome: "fab fa-git", text: "Git", proficiency: 70},
		{fontAwesome: "fab fa-jira", text: "Jira", proficiency: 70},
		{fontAwesome: "fab fa-python", text: "Python", proficiency: 60},
		{fontAwesome: "far fa-file-code", text: "Couchbase, Redis", proficiency: 60},
		{fontAwesome: "far fa-envelope", text: "Kafka", proficiency: 50},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 40},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 40},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 30},
	],
	view: true
};

export const experience = {
	title: "Work / Education Experience",
	lists: [
		// image: public/assets/image/company 폴더 내부 이미지 명 (확장자 포함).
		{
			image: "cloud-wave.png",
			company: "CJ Olivenetworks - Cloud Wave 1st",
			role: "Public Cloud Education",
			date: "2023.07 ~ 2023.09",
		},
		{
			image: "tmon.gif",
			company: "Qoo10 Technologies - TMON",
			role: "Channel Service Dev. Team, Backend Engineer",
			date: "2024.01 ~ now",
		},
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("[Github] Best Repositories 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "Recent Projects",
	lists: [
		// image: public/assets/image/project 폴더 내부 이미지 명 (확장자 포함).
		{
			image: "smart_barricade.png",
			title: "Smart Barricade",
			type: "개인 프로젝트",
			desc: "우회전 교통사고 방지를 위한 전자 방지턱 시스템",
			url: "https://carefreelife98.github.io/inu-capstone/capstone-admin-server/"
		},
		{
			image: "cgv-fastorder.png",
			title: "[CJ Olivenetworks - Cloud Wave 1기] CGV Fast Order",
			type: "팀 프로젝트",
			desc: "[패스트오더] 서비스의 AWS 인프라 현황을 기반으로 대규모 사용자가 동시에 사용하는데 무리가 없는 인프라 아키텍처를 설계.",
			url: "https://carefreelife98.github.io/Cloud-Wave-Project/"
		},
		{
			image: "ocr.png",
			title: "Carefree OCR v2: 우체국 등기 영수증 / 사업자 등록증 자동 관리 시스템",
			type: "개인 프로젝트",
			desc: "AWS / NCP 퍼블릭 클라우드 서비스를 활용하여 우체국 등기 영수증 / 사업자 등록증 자동 관리 시스템 구축",
			url: "https://carefreelife98.github.io/toy-project/carefreeOCR2/"
		},
		{
			image: "tmon.gif",
			title: "Couchbase 를 통한 문서 관리 및 통합 데이터 유효성 검증 프로젝트",
			type: "실무 프로젝트",
			desc: "규모: 약 10 개 팀 관여. 기술 스택: Java / Spring / MySQL, MyBatis / Couchbase / Ehcache, Memcached ...etc 담당 업무: 비즈니스 로직에 따른 DB 접근 시 CB 문서 존재 여부 확인 및 유효성 검증 후 결과 값의 캐싱.",
			url: ""
		},
		{
			image: "tmon.gif",
			title: "비즈니스 로직에 따른 메인 페이지 전시 데이터 외부 연동 및 가공",
			type: "실무 프로젝트",
			desc: "규모: 10 개 미만 팀 참여. 기술 스택: Java / Spring / MySQL, MyBatis 담당 업무: MSA 아키텍쳐에서 비즈니스 로직에 의한 트리거 발생 및 데이터 인입 시 데이터 검증, 추가, 가공, 저장 후 스케줄링 설정.",
			url: ""
		},
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
			title: "[AWS] Public Cloud / Cloud Architecture",
			desc: "퍼블릭 클라우드와 AWS Cloud Architecture",
			url: "https://carefreelife98.github.io/cloud-wave-public/Public/"
		},
		{
			title: "Cloud Native & Kubernetes 시작하기",
			desc: "쿠버네티스 (Kubernetes, K8s) 란 무엇이며, 사용하는 이유와 기본 구성",
			url: "https://carefreelife98.github.io/cloud-wave-kubernetes/Day23-Kubernetes/"
		},
		{
			title: "[Data Structure] 선택 정렬(Selection Sort) / 삽입 정렬(Insertion Sort) / 버블 정렬(Bubble Sort)",
			desc: "정렬의 정의 및 선택 / 삽입 / 버블 정렬에 대한 학습 내용",
			url: "https://carefreelife98.github.io/cloud-wave-project/project2_ci_githubActions_docker/"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "Thank you for your time !",
	name: emoji("Seung-Min Chae | 채승민 "),
	role: emoji("Backend Engineer, Dev Unit / Channel Service Dev. team"),
	address: emoji("N Tower, 13F, 129, Teheran-ro, Gangnam-Gu, Seoul, 06133 Republic of Korea."),
	tel: emoji("M. 010-2532-4903  l  E. carefreelife@qoo10.com / carefreelife@wemakeprice.com / carefreelife@tmon.co.kr / carefreelife@interparkshop.com\n"),
	view: true
}