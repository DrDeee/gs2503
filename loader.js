import {
  pathExistsSync,
  statSync,
  readdirSync,
  rmSync,
  copySync,
} from "fs-extra";
import { join } from "path";

export default function (imageDir = "images", basePath = "/") {
  const targetPath = join(".", "static", "images");
  if (pathExistsSync(targetPath) && statSync(targetPath).isDirectory())
    rmSync(targetPath, {
      force: true,
      recursive: true,
    });
  const imagePath = join(".", imageDir);
  if (
    pathExistsSync(join(".", imagePath)) &&
    statSync(imageDir).isDirectory()
  ) {
    copySync(imagePath, targetPath);
    const files = readdirSync(imagePath);
    const ret = files
      .sort()
      .map(
        (file) =>
          basePath + (basePath.endsWith("/") ? "" : "/") + "images/" + file
      );
    console.log(ret);
    return ret;
  } else return [];
}
