export const levelByRange = (series) => {
  const result = series?.reduce((acc, obj) => {
    if (!acc?.length) {
      acc.push({ ...obj, counting: 1 });
    } else if (checkTime(acc[acc.length - 1].data_hora, obj.data_hora)) {
      acc[acc.length - 1] = {
        ...acc[acc.length - 1],
        nivel: Number(acc[acc.length - 1].nivel) + Number(obj.nivel),
        counting: acc[acc.length - 1].counting + 1,
      };
    } else {
      acc.push({ ...obj, counting: 1 });
    }

    return acc;
  }, []);

  return result.map((serie) => {
    return {
      data_hora: serie.data_hora,
      nivel: (serie.nivel / serie.counting).toFixed(2),
    };
  });
};

const checkTime = (current_date, new_date) => {
  const date_current_date = new Date(current_date).getTime();
  const date_new_date = new Date(new_date).getTime();
  const sixHours = 6 * 60 * 60 * 1000;
  const result = date_current_date + sixHours <= date_new_date;
  return !result;
};
