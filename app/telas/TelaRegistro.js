import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Botao from "../components/Botao";
import Input from "../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import TelaLogin from "./TelaLogin";

export default function TelaRegistro() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <Input placeholder="Nome Completo"  />
      <Input placeholder="Email"  />
      <Input
        placeholder="Senha"
        secureTextEntry
      />
      <Input
        placeholder="Confirmar Senha"
        secureTextEntry

      />
      <Botao titulo="Criar Conta"  />
      <TouchableOpacity onPress={() => navigation.navigate("TelaLogin")}>
        <Text style={styles.link}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#9c88ff",
  },
  link: {
    color: "#9c88ff",
    textAlign: "center",
    marginTop: 15,
  },
};
