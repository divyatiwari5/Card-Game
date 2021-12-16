function Button(props: any) {
  const getClassName = () => {
    let className = 'button';
    if (props.class == 'center') {
      className += ' center';
    } else if (props.class == 'right') {
      className += ' right';
    }
    return className;
  };

  return <button className={getClassName()}>{props.btnText}</button>;
}

export { Button };
