import xyz from './test/hello';

type ValidateProps = {
  hello: string;
}

function validate(testProp: ValidateProps): void {
  const STRING_TEST = 'Nicee';
  let numberTest = 312;
  const arrayTest = ['hello', 'hi', 'hehe'];
  for (let val of arrayTest) {
    console.log(val, xyz);
  }
  console.log(testProp);
}

export default validate;