<template>
    <div>
      <h1>API Base URL: {{ apiBaseUrl }}</h1>
      <h2>Max Results: {{ maxResults }}</h2>
    </div>
  </template>
  
  <script >
  import { Web_Name, Web_logo } from '../../config/config';
  
  export default {
    name: 'MyComponent',
    data() {
      return {
        apiBaseUrl: Web_Name,
        maxResults: Web_logo,
      };
    },
  };
  </script>
  