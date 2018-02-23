import checkList from '../mockData/checklist.mock';
import * as s from '../selectors';
// import * as action from '../actions';

describe('Charts selectors', () => {
  const state = checkList;

  it('should return amount of weeks in state', () => {
    expect(s.selectWeeksAmount(state)).toEqual(4);
  });

  it('should return week numbers in array', () => {
    expect(s.selectWeeks(state)).toEqual(['5', '6', '7', '8']);
  });

  it('should return object with weeks containing arrays of day timestamps', () => {
    expect(s.selectWeeksWithDays(state)).toEqual({
      5: [
        '1517353200',
        '1517439600',
        '1517526000',
        '1517612400',
      ],
      6: [
        '1517698800',
        '1517785200',
        '1517871600',
        '1517958000',
        '1518044400',
        '1518130800',
        '1518217200',
      ],
      7: [
        '1518303600',
        '1518390000',
        '1518476400',
        '1518562800',
        '1518649200',
        '1518735600',
        '1518822000',
      ],
      8: [
        '1518908400',
        '1518994800',
        '1519081200',
        '1519167600',
        '1519254000',
      ],
    });
  });

  it('should return amount of times completed per week for activity', () => {
    expect(s.getCompletedPerWeek(state)).toEqual({

    })
  });
});
