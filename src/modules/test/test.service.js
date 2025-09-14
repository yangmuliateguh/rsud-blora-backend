const supabase = require('../../config/supabase');

async function getAll() {
  const { data, error } = await supabase.from('Test').select('*');
  if (error) throw error;
  return data;
}

async function create(name) {
  const { data, error } = await supabase.from('Test').insert([{ name }]);
  if (error) throw error;
  return data;
}

module.exports = { getAll, create };
