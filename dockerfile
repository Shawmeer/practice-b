# Step 1: Use official Node.js image as a base
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all backend code into the container
COPY . .

# Step 6: Expose the port that the backend will run on
EXPOSE 3001

# Step 7: Start the backend server (adjust the start command if needed)
CMD ["npm", "start"]
