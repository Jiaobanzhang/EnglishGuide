import { sidebar } from "vuepress-theme-hope";

const primary = ["README", "grade-3-fall", "grade-3-spring", "grade-4-fall", "grade-4-spring", "grade-5-fall", "grade-5-spring", "grade-6-fall", "grade-6-spring"];
const middle = ["README", "grammar-system", "study-plans", "improvement-route", "common-mistakes"];
const high = ["README", "study-plan", "grammar-overview", "reading-cloze-writing"];
const overview = ["README", "cefr-levels", "ket-pet-fce-comparison", "school-vs-cambridge"];
const ketPet = ["README", "preparation-route", "vocabulary-system", "grammar-points", "four-skills", "registration-and-pitfalls"];
const fce = ["README", "learning-route"];
const cet = ["README", "preparation-route", "vocabulary-reading-writing", "common-mistakes"];
const postgraduate = ["README", "english-one-two", "yearly-plan", "long-sentences", "reading-logic", "writing"];
const abroad = ["README", "ielts-route", "gre-introduction"];

export default sidebar({
  "/school-english/primary/": [{ text: "小学英语", children: primary }],
  "/school-english/middle-school/": [{ text: "初中英语体系", children: middle }],
  "/school-english/high-school/": [{ text: "高中英语体系", children: high }],
  "/school-english/": [
    { text: "校内英语体系", children: ["README"] },
    { text: "小学英语", prefix: "primary/", children: primary.slice(1) },
    { text: "初中英语体系", prefix: "middle-school/", children: middle.slice(1) },
    { text: "高中英语体系", prefix: "high-school/", children: high.slice(1) },
  ],
  "/cambridge-english/overview/": [{ text: "通用五级总介绍", children: overview }],
  "/cambridge-english/ket/": [{ text: "KET 专区", children: ketPet }],
  "/cambridge-english/pet/": [{ text: "PET 专区", children: ketPet }],
  "/cambridge-english/fce/": [{ text: "FCE 轻量专区", children: fce }],
  "/cambridge-english/": [
    { text: "剑桥英语体系", children: ["README"] },
    { text: "通用五级总介绍", prefix: "overview/", children: overview.slice(1) },
    { text: "KET 专区", prefix: "ket/", children: ketPet.slice(1) },
    { text: "PET 专区", prefix: "pet/", children: ketPet.slice(1) },
    { text: "FCE 轻量专区", prefix: "fce/", children: fce.slice(1) },
  ],
  "/advanced-exams/cet/": [{ text: "大学四六级", children: cet }],
  "/advanced-exams/postgraduate-english/": [{ text: "考研英语", children: postgraduate }],
  "/advanced-exams/study-abroad/": [{ text: "留学英语", children: abroad }],
  "/advanced-exams/": [
    { text: "高阶考试体系", children: ["README"] },
    { text: "大学四六级", prefix: "cet/", children: cet.slice(1) },
    { text: "考研英语", prefix: "postgraduate-english/", children: postgraduate.slice(1) },
    { text: "留学英语", prefix: "study-abroad/", children: abroad.slice(1) },
  ],
  "/": [{ text: "EnglishGuide", children: ["/home.md"] }],
});
