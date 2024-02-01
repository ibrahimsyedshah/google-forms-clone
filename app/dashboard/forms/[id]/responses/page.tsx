import { fetchAllFormsData, fetchFormById } from "@/lib/data"
import { getResponses } from "@/lib/utils";

async function ResponsesPage({params: {id}} : {params: {id: string}}) {
    const formsData = await fetchAllFormsData();
    const form = await fetchFormById(id) 
    const responses = getResponses(formsData, id);

    // const questions = form.attributes.map((attr) => ({
    //    ...attr,
    //    numberOfResponses: getNumberOfResponses(responses, attr.marker),
    //    responses: getIndividualResponses(responses, attr.marker)
    // }))

  return (
    <div>ResponsesPage</div>
  )
}

export default ResponsesPage