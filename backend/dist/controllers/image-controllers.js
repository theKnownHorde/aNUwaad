import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi } from "openai";
export const generateImage = async (req, res, next) => {
    const { prompt } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User not registered OR Token malfunctioned" });
        }
        const config = configureOpenAI();
        const openai = new OpenAIApi(config);
        // Generate an image using DALL·E 3
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        // Assuming the response contains a URL for the generated image
        const imageUrl = response.data[0].url;
        // Update the user's document to include the image URL
        user.imageGeneration = imageUrl;
        await user.save();
        return res.status(200).json({ message: "Image generated successfully", imageUrl });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
//# sourceMappingURL=image-controllers.js.map