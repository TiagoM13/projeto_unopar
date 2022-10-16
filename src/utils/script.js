const checkDateRange = (date, date_init, date_and, comparison_type) => {

  if ( comparison_type == "and" ){
      return (date >= date_init && date <= date_and);
  } else if( comparison_type == "or" ){
      return (date >= date_init || date <= date_and);
  }
}

const returnSign = (zodiac_signs, date) => {

  let year = date.getFullYear();

  for ( const zodiac_sign of zodiac_signs ){

      let date_init_sign = new Date(year + "-" + zodiac_sign["DataInicio"] + " 00:00:00");
      let date_and_sign = new Date(year + "-" + zodiac_sign["DataFim"] + " 23:59:59");

      let comparison_type = zodiac_sign["DataInicio"] == "12-22" ? "or" : "and";

      if (checkDateRange(date, date_init_sign, date_and_sign, comparison_type)){
          return zodiac_sign;
      }
  }
}

export { returnSign };