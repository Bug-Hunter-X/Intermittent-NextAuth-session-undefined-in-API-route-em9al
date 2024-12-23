```javascript
import {unstable_getServerSession} from 'next-auth';

const handler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // ... rest of your API route handler
};
```