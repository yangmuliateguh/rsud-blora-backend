const supabase = require('../../config/supabase');

async function getAll() {
  const { data, error } = await supabase.from('test').select('*');
  if (error) throw error;
  return data;
}

async function create(name) {
  const { data, error } = await supabase.from('test').insert([{ name }]);
  if (error) throw error;
  return data;
}

module.exports = { getAll, create };
