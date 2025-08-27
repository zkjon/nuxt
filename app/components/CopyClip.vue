<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <div class="terminal-buttons">
        <span class="terminal-button red"></span>
        <span class="terminal-button yellow"></span>
        <span class="terminal-button green"></span>
      </div>
      <span class="terminal-title">Copy me!</span>
    </div>
    <div class="terminal-body">
      <div class="command-line">
        <span class="prompt">$</span>
        <span class="command">{{ cloneCommand }}</span>
        <button 
          @click="copyToClipboard" 
          class="copy-btn"
          :class="{ 'copied': isCopied }"
        >
          <svg v-if="!isCopied" class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg v-else class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estados reactivos
const isCopied = ref(false)

// Comando de clonado fijo
const cloneCommand = 'git clone https://github.com/zkjon/nuxt-template.git'

// Función para copiar al portapapeles
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(cloneCommand)
    isCopied.value = true
    
    // Resetear el estado después de 2 segundos
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    // Fallback para navegadores que no soportan clipboard API
    const textArea = document.createElement('textarea')
    textArea.value = cloneCommand
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  }
}
</script>

<style scoped>
.terminal-container {
  max-width: 700px;
  margin: 2rem auto;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  font-family: 'Courier New', 'Monaco', monospace;
}

.terminal-header {
  background-color: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #404040;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}

.terminal-button.red {
  background-color: #ff5f56;
}

.terminal-button.yellow {
  background-color: #ffbd2e;
}

.terminal-button.green {
  background-color: #27ca3f;
}

.terminal-title {
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.terminal-body {
  padding: 1.5rem;
  background-color: #000000;
  min-height: 80px;
}

.command-line {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.prompt {
  color: #00ff00;
  font-weight: bold;
  font-size: 1rem;
  user-select: none;
}

.command {
  color: #ffffff;
  font-size: 0.9rem;
  flex: 1;
  min-width: 300px;
  word-break: break-all;
}

.copy-btn {
  background-color: #333333;
  border: 1px solid #555555;
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
}

.copy-btn:hover {
  background-color: #444444;
  border-color: #666666;
}

.copy-btn.copied {
  background-color: #00aa00;
  border-color: #00cc00;
}

.copy-icon,
.check-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

@media (max-width: 768px) {
  .terminal-container {
    margin: 1rem;
    max-width: none;
  }
  
  .terminal-header {
    padding: 0.5rem 0.75rem;
  }
  
  .terminal-body {
    padding: 1rem;
  }
  
  .command-line {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .command {
    min-width: auto;
    width: 100%;
    font-size: 0.8rem;
  }
  
  .copy-btn {
    align-self: flex-end;
  }
}
</style>