import React, { useState } from "react";
import { View, Image, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleUploadImage = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    axios.post("/upload", formData)
      .then((response) => {
        console.log("Image uploaded successfully");
        // Faire quelque chose avec la réponse du serveur, par exemple mise à jour de l'état de l'application
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        // Gérer les erreurs de téléchargement, par exemple afficher un message d'erreur à l'utilisateur
      });
  };


  return (
    <View style={{borderRadius:30}}>
      <Button title="Sélectionner une image" onPress={handleImageChange} style={{ borderRadius: 100 }} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{
        width: 150, height: 150, borderRadius: 100,color:"purple",
        overflow: 'hidden', alignSelf:"center", alignItems: "center",
      }} />}

    </View>
  );
};

export default ImageUploader;