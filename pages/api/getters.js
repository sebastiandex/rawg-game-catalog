// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {API, API_KEY} from "../../constants";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

}