import * as RecordsUtil from '../util/records_util';

export const RECEIVE_RECORDS = 'RECEIVE_RECORDS';

export const requestRecords = string => (
  RecordsUtil.fetchRecords(string)
);

export const receiveRecords = records => ({
  type: RECEIVE_RECORDS,
  records
});

