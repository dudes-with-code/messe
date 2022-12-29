import { useContext, useState } from "react";
import { ButtonTypes } from "../../../../types/ButtonTypes";
import { StepperContext } from "../../../context/StepperContext";
import Button from "../../Core/Button";

interface StepperProps {
  children: React.ReactNode;
}
export default function RegisterStepper({ children }: StepperProps) {
  return <>{children}</>;
}
