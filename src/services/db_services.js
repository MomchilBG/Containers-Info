import { supabase } from '../config/supabase_config.js';

export const getItemLocation = async (sisCode) => {
  let code = sisCode;
  if (typeof code !== 'string') {
    code += '';
  }

  const { data, error } = await supabase
    .from('locations')
    .select(
      `
    *,
    items!locations_item_id_fk_fkey!inner (
      sis_code
    )
  `,
    )
    .eq('items.sis_code', code);

  if (error) {
    throw new Error(`Error fetching item location: ${error.message}`);
  }

  return data;
};
