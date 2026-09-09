"use client";

import { MailIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { patientsTable } from "@/db/schema";

import UpsertPatientForm from "./upsert-patient-form";

interface PatientCardProps {
  patient: typeof patientsTable.$inferSelect;
}

const sexLabels = { male: "Masculino", female: "Feminino", other: "Outro" };

const PatientCard = ({ patient }: PatientCardProps) => {
  const [isUpsertPatientFormOpen, setIsUpsertPatientFormOpen] = useState(false);
  const patientInitials = patient.name
    .trim()
    .split(/\s+/)
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="min-w-0">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{patientInitials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <CardTitle className="break-words">{patient.name}</CardTitle>
            <CardDescription>{sexLabels[patient.sex]}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-1 flex-col gap-2">
        <Badge variant="outline" className="max-w-full whitespace-normal">
          <MailIcon className="mr-1 shrink-0" />
          <span className="min-w-0 break-all">{patient.email}</span>
        </Badge>
        <Badge variant="outline">
          <PhoneIcon className="mr-1 shrink-0" />
          {patient.phoneNumber.replace(
            /^(\d{2})(\d{4,5})(\d{4})$/,
            "($1) $2-$3",
          )}
        </Badge>
      </CardContent>
      <Separator />
      <CardFooter>
        <Dialog
          open={isUpsertPatientFormOpen}
          onOpenChange={setIsUpsertPatientFormOpen}
        >
          <DialogTrigger asChild>
            <Button className="w-full">Ver Detalhes</Button>
          </DialogTrigger>
          {isUpsertPatientFormOpen && (
            <UpsertPatientForm
              patient={patient}
              onSuccess={() => setIsUpsertPatientFormOpen(false)}
            />
          )}
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default PatientCard;
