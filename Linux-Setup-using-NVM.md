Here’s the revised script to install Node.js v20.17.0 using NVM:

1. Download and install NVM:
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   ```

2. Load NVM into the current session:
   ```
   export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

3. Install Node.js version 20.17.0:
   ```
   nvm install 20.17.0
   ```

4. Set Node.js v20.17.0 as the default version:
   ```
   nvm use 20.17.0
   nvm alias default 20.17.0
   ```