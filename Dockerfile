
FROM node:20.11

# Set the working directory to /maf
WORKDIR /project

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the Vue CLI globally
RUN npm install -g @vue/cli

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the default Vue development  portserver (you may need to adjust this based on your Vue project configuration)
EXPOSE 3000

# Start the Vue development server
CMD ["npm", "run", "serve"]
