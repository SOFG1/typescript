interface IProps {
  readonly id: number;
  readonly title: string;
  readonly text: string;
}

function ReactComponent(props: IProps) {
  //@ts-expect-error
  props.id = 123; // We have an error here because 'id' is readonly
  return "some html";
}
