import database from '../../../../infra/database.js';

async function status(request, response) {
  const result = await database.query('SELECT NOW()');
  console.log(result.rows[0].now);

  response.status(200).json({
    status: 'ok',
  });
}

export default status;
