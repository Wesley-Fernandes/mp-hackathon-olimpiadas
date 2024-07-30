
import IMGBB from "imgbb-async";

if(!process.env.NEXT_PUBLIC_IMGBB_PASS) {
    throw new Error('Missing ImageBB API Key');
  
}
export const imgbb = new IMGBB(process.env.NEXT_PUBLIC_IMGBB_PASS as string);