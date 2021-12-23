function Button(props: any) {
  const { btnText, click } = props;

  /***
   * Returns className on the basis of alignment property
   */
  const getClassName = () => {
    let className = 'button';
    if (props.align === 'center') {
      className += ' center';
    } else if (props.align === 'right') {
      className += ' right';
    }
    return className;
  };

  return (
    <button className={getClassName()} onClick={click}>
      {btnText}
    </button>
  );
}

export { Button };
