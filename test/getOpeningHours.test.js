const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se digitar um dia inexistente retornar o erro "The day must be valid. Example: Monday" ', () => {
    expect(() => getOpeningHours('Segunda', '02:30-PM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Verifica se quando digitar um formato de hora errado retorna o erro "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Sunday', '13:30-PM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('Verifica se quando digitar um formato de minutos errado retorna o erro "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Sunday', '12:61-PM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('Verifica se quando digitar um dia que o zoo está fechado o retorno deve ser "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '07:50-PM')).toBe('The zoo is closed');
  });
  it('Verifica se quando digitar um dia que o zoo está aberto o retorno deve ser "The zoo is open"', () => {
    expect(getOpeningHours('Friday', '10:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se quando for digitado uma letra no lugar da hora o erro deve ser: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Friday', 'AA:30-PM')).toThrow(new Error('The hour should represent a number'));
  });
  it('Verifica se quando for digitado de maneira incorreta a abreviação do horario retorna o erro: "The abbreviation must be AM or PM"', () => {
    expect(() => getOpeningHours('Wednesday', '05:00-PO')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Verifica se quando não é passado parametro é retornado um objeto com todos os horarios', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verifica se o dia existir porém não tiver o horario disponivel', () => {
    expect(getOpeningHours('Monday', '1:00-PM')).toBe('The zoo is closed');
  });
});
