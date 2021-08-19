const inquirer = require("inquirer");
const fs = require("fs");
const { exec } = require('child_process');
const config = require("../.cz-config.js");

if (!fs.existsSync(".git")) {
  console.log("不是一个 git 仓库!");
  return;
}

process.on("uncaughtException", function (err) {
  console.error(err.message || err);
  process.exit(1);
});

inquirer
  .prompt([
    {
      name: "type",
      message: "请选择提交类型",
      choices: config.types,
      type: "list",
    },
    {
      type: "input",
      name: "scope",
      message: "改动范围(0~20字)",
      default: getDefaultScope(),
      validate(input) {
        return input.length < 20;
      },
    },
    {
      type: "input",
      name: "brief",
      message: "一句话描述这次改动(0~100字)\n",
      validate(input) {
        return input.length > 0 && input.length < 100;
      },
    },
    {
      type: "input",
      name: "description",
      message: '详细的描述这次改动(非必填，最多200字),使用"|"换行\n',
    },
    {
      type: "confirm",
      name: "confirm",
      default: true,
      message: answers =>
        `${generateMsgPreview(answers)} \n提交信息如上所示，请确认`,
    },
  ])
  .then(answers => {
    if (answers.confirm) {
      exec(`git commit -m "${generateMsg(answers)}"`, (err, stdout, stderr) => {
        console.log(stderr || stdout);
       });
    }
  });

function getDefaultScope() {
  try {
    const p = process.cwd();
    const gitHeadPath = `${p}/.git/HEAD`;
    const ary = fs.readFileSync(gitHeadPath, "utf-8").trim().split("/");
    const scope = ary[ary.length - 1];

    if (scope === "master") {
      return null;
    }

    return scope;
  } catch (e) {
    return "";
  }
}

function generateMsgPreview(answers) {
  const line = "--------------------------------------------------------";
  return "\n" + line + "\n" + generateMsg(answers) + "\n" + line;
}

function generateMsg(answers) {
  const scope = answers.scope ? `(${answers.scope})` : "";
  const description = answers.description
    ? "\n" + answers.description.replace(/\|/g, "\n")
    : "";
  return `${answers.type}${scope}: ${answers.brief}${description}`;
}
