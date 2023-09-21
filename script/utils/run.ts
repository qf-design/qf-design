import { spawn } from "child_process";

/**
 * run函数
 * @param command 命令
 * @param path 路径
 */
const run = async (command: string, path: string) => {
  // cmd表示命令 args 代表参数 如 rm -rf rm 就是命令 -rf 就是参数
  const [cmd, ...args] = command.split(" ");
  return new Promise((resolve) => {
    const app = spawn(cmd, args, {
      cwd: path, // 执行命令的路径
      stdio: "inherit", // 输入共享给子进程
      shell: true, // mac 不需要开启 window下git base 需要开启支持
    });

    app.on("close", resolve);
  });
};

export default run;
