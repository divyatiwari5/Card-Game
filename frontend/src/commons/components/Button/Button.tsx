function Button(props: any) {
  const getClassName = () => {
    let className = 'button';
    if (props.align == 'center') {
      className += ' center';
    } else if (props.align == 'right') {
      className += ' right';
    }
    return className;
  };

  return <button className={getClassName()}>{props.btnText}</button>;
}

export { Button };
