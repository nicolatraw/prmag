// Define the RequestStoreResult type
interface RequestStoreResult<T> {
  success: boolean;
  value?: T;
  error?: string;
}

// Function that returns a promise with RequestStoreResult
function storeData<T>(data: T): Promise<RequestStoreResult<T>> {
  return new Promise((resolve, reject) => {
    // Simulate data storage
    if (data) {
      resolve({ success: true, value: data });
    } else {
      reject({ success: false, error: 'Data is null or undefined' });
    }
  });
}

// Usage of the storeData function
storeData({ key: 'value' })
  .then(result => console.log('Data stored successfully:', result))
  .catch(error => console.error('Failed to store data:', error));
