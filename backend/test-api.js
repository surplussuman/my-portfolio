#!/usr/bin/env node

/**
 * Backend API Test Script
 * Run this after setting up the backend to verify everything works
 */

const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

async function testEndpoint(name, method, url, data = null, token = null) {
  try {
    const config = {
      method,
      url: `${BASE_URL}${url}`,
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    };

    if (data && (method === 'post' || method === 'put')) {
      config.data = data;
    }

    const response = await axios(config);
    console.log(`✅ ${name}: ${response.status} - ${response.statusText}`);
    return response.data;
  } catch (error) {
    console.log(`❌ ${name}: ${error.response?.status || 'ERROR'} - ${error.message}`);
    return null;
  }
}

async function runTests() {
  console.log('🧪 Testing Portfolio Blogging System Backend\n');

  // Test 1: Health check
  await testEndpoint('Health Check', 'get', '/health');

  // Test 2: Register user
  const userData = {
    email: 'test@example.com',
    password: 'testpassword123',
    name: 'Test User'
  };
  const registerResult = await testEndpoint('User Registration', 'post', '/auth/register', userData);

  if (registerResult) {
    // Test 3: Login
    const loginData = { email: userData.email, password: userData.password };
    const loginResult = await testEndpoint('User Login', 'post', '/auth/login', loginData);

    if (loginResult && loginResult.token) {
      const token = loginResult.token;

      // Test 4: Get profile
      await testEndpoint('Get Profile', 'get', '/auth/profile', null, token);

      // Test 5: Create blog post (will fail without admin role)
      const postData = {
        title: 'Test Blog Post',
        content: 'This is a test blog post content.',
        category: 'Technology',
        tags: ['test', 'blog']
      };
      await testEndpoint('Create Blog Post', 'post', '/blog/posts', postData, token);

      // Test 6: Get blog posts
      await testEndpoint('Get Blog Posts', 'get', '/blog/posts');

      // Test 7: Newsletter subscription
      await testEndpoint('Newsletter Subscribe', 'post', '/newsletter/subscribe', { email: 'subscriber@example.com' });
    }
  }

  // Test 8: File upload (requires actual file)
  console.log('⚠️ File upload test requires actual file - test manually');

  console.log('\n🎉 Backend testing complete!');
  console.log('📝 Next: Create admin user and test admin endpoints');
  console.log('🔗 Use Postman/Insomnia for detailed API testing');
}

runTests().catch(console.error);