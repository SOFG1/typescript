interface Colorful {
  color: string;
}
interface Square {
  area: number;
}

type ColorfulSquare = Colorful & Square;

const square: ColorfulSquare = {
  color: "test",
  area: 20,
};
