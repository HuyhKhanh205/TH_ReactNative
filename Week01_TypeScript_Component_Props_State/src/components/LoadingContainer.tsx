import React, { PropsWithChildren } from "react";
import { ActivityIndicator } from "react-native";

export interface LoadingContainerProps {
  isLoading: boolean;
}

export default function LoadingContainer({ isLoading, children }: PropsWithChildren<LoadingContainerProps>) {
  if (isLoading) return <ActivityIndicator size="large" />;
  return <>{children}</>;
}
