import { execSync } from "node:child_process";

export default () => {
  const result = execSync("ls");
  console.log("in index, execSync returns", result);
  return result;
};
