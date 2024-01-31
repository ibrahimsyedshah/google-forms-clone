import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

function FormCard({ form }: { form: IFormsEntity }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{form.localizeInfos.title}</CardTitle>
        <CardDescription>Identifier: {form.identifier}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant={"outline"}>
          <Link href={`/dashboard/forms/${form.identifier}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default FormCard;
