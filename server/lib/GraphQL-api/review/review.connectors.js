import joinMonster from 'join-monster';

// Require knex db configuration
import { knex } from '../../../db/index';

export function reviewConnector(obj, args, context, info) {
  if (args.id) console.log(`Fetching data with Joint Monster package for review: ${args.id}`);
  return joinMonster(info, {}, (sql) => knex.raw(sql)
    .then((result) => {
      console.log(sql); // Show the SQL generated by joinMonster for the batch fetching.
      const parsedResult = JSON.parse(JSON.stringify(result[0]));
      console.log(parsedResult);
      return result[0];
    }), { dialect: 'mysql' });
}
