# Firebase onAuthStateChanged Not Triggering Bug

This repository demonstrates a bug where the Firebase `onAuthStateChanged` listener fails to trigger after a user signs in.  The issue is not immediately obvious and requires careful debugging. The solution involves ensuring proper cleanup of the listener using the unsubscribe function.