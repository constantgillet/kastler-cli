import components from "../components.json";
import { exec } from "child_process";
import fs from "fs";

export const initCommandAction = async () => {
  console.log("Init command executed");

  for (let i = 0; i < components.length; i++) {
    const component = components[i];
    const { name, content, packagesRequired } = component;

    //Install packages
    if (packagesRequired) {
      exec(
        `npm install ${packagesRequired}`,
        (err: any, stdout: any, stderr: any) => {
          if (err) {
            console.log(err);
          }
          console.log(stdout);
        }
      );
    }

    //Create files with fs module
    if (content) {
      fs.writeFile(name, content, (err: any) => {
        if (err) {
          console.log(err);
        }
        console.log(`[${name}] component created`);
      });
    }
  }

  console.log("Design system imported successfully !");
};
