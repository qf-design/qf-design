import { dest, series, src } from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import less from "gulp-less";
import cssmin from "gulp-cssmin";

function compile() {
  return src("./src/*.less")
    .pipe(less())
    .pipe(
      autoPrefixer({
        cascade: false,
      }),
    )
    .pipe(cssmin())
    .pipe(dest("./dist"));
}

export const build: ReturnType<typeof series> = series(compile);
