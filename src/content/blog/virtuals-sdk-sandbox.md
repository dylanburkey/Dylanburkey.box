---
title: Mapping the Virtuals SDK Sandbox to the GAME SDK. 
author: Dylan Burkey
pubDatetime: 2024-10-25T10:12:19Z
slug: virtuals-sdk-sandbox
featured: true
draft: false
tags:
  - Virtuals
  - AI 
  - Web3
  - Virtuals Developers
  - GAME SDK
ogImage: "ai-and-web3-og.png"
description: Web3 is moving at such a fast pace the practical branding is often overlooked. Brands will make or break Web3, we must get this right.
canonicalURL: https://www.dylanburkey.box/posts/how-practical-branding-is-critical-to-the-success-of-web3
postImage: https://www.spellbrand.com/wp-content/uploads/2012/11/branding-101-guide1.jpg
postImageDesc: Practical Branding for Web3
---

# GAME Sandbox to SDK Reference Guide

## Table of Contents
- [Introduction](#introduction)
- [Agent Configuration](#agent-configuration)
- [Game Setup](#game-setup)
- [Function Configuration](#function-configuration)
- [Workers](#workers)
- [Platform Integration](#platform-integration)
- [Advanced Features](#advanced-features)
- [Common Patterns](#common-patterns)

## Introduction

This guide maps the visual configurations in the GAME Sandbox GUI to their corresponding Python SDK implementations. Use this as a reference when transitioning from the Sandbox to programmatic implementation.

## Agent Configuration

### Agent Profile

#### In the Sandbox:
1. Navigate to "Agent Profile" in left sidebar
2. Fill in "Agent Goal" text field
3. Fill in "Agent Description" field
4. Configure "Agent Knowledge"
5. Upload relevant datasets

<code>
#### In the SDK:
```python
from virtuals_sdk import game

# Create agent with same configurations as Sandbox
agent = game.Agent(
    api_key="your_api_key",
    goal="Help others become better crypto investors by offering information regarding DeFi markets",
    description="""
    You are Athena, an intelligent AI who believes that the core value 
    proposition of blockchain is to facilitate decentralized finance, 
    payments, tokenization, and AI agent collaboration
    """,
    world_info="The world of DeFi and blockchain technology...",
    main_heartbeat=15,  # Maps to Heartbeat settings in GUI
    reaction_heartbeat=5
)

# Configure agent knowledge (matches Dataset section in GUI)
agent.set_knowledge([
    {
        "type": "dataset",
        "name": "DeFi Protocols",
        "content": "Information about various DeFi protocols..."
    },
    {
        "type": "market_data",
        "content": "Historical market data..."
    }
])
```
</code>

### Knowledge Configuration

#### In the Sandbox:
1. Click "Agent Knowledge"
2. Upload datasets using drag & drop
3. Configure dataset parameters

#### In the SDK:
```python
# Load and configure datasets
agent.load_datasets([
    {
        "path": "market_data.csv",
        "name": "Historical Market Data",
        "description": "Price and volume data",
        "refresh_interval": 3600  # 1 hour
    },
    {
        "path": "defi_protocols.json",
        "name": "Protocol Information",
        "description": "Protocol details",
        "refresh_interval": 86400  # 24 hours
    }
])

# Configure dataset processing (equivalent to GUI settings)
agent.configure_dataset_processing({
    "auto_refresh": True,
    "max_cache_size": 1000,
    "preprocessing": {
        "clean_data": True,
        "remove_outliers": True,
        "fill_missing_values": "interpolate"
    }
})
```

## Game Setup

### Heartbeat Configuration

#### In the Sandbox:
1. Navigate to "GAME Setup" > "Heartbeat"
2. Set "General" to 15 minutes
3. Set "Reply Tweets" to 5 minutes

#### In the SDK:
```python
# Method 1: During initialization
agent = game.Agent(
    api_key="your_api_key",
    main_heartbeat=15,
    reaction_heartbeat=5
)

# Method 2: After initialization
agent.set_main_heartbeat(15)
agent.set_reaction_heartbeat(5)
```

### Worker Configuration

#### In the Sandbox:
1. Click "Workers"
2. Configure Reply Worker:
   - Set task description
   - Configure reply count limits
   - Set environment variables
3. Configure Main Worker:
   - Set name as "Twitter Main Location"
   - Define functionalities
   - Configure environment

#### In the SDK:
```python
# Reply Worker Configuration (matches GUI settings)
reply_worker = game.Worker(
    name="Reply Worker",
    description="""
    Process incoming tweet. Ignore if it is boring or unimportant.
    Total replies made: {{replyCount}}. Ignore if conversation too long.
    """,
    environment={
        "reply_threshold": 0.7,
        "max_replies": "{{replyCount}}",
        "min_relevance_score": 0.5
    }
)

# Main Worker Configuration
main_worker = game.Worker(
    name="Twitter Main Location",
    description="""
    This location allows for:
    1. Engagement and interaction
    2. Content generation
    3. Analytics and monitoring
    """,
    environment={
        "allowed_actions": ["reply", "like", "retweet"],
        "rate_limits": {
            "tweets_per_hour": 10,
            "replies_per_hour": 20
        }
    }
)

# Add workers to agent (same as clicking Save in GUI)
agent.add_worker(reply_worker)
agent.add_worker(main_worker)
```

## Function Configuration

### Custom Functions

#### In the Sandbox:
1. Click "Configure Functions for Simulation"
2. Click "+ Add Custom Function"
3. Configure:
   - Function name
   - Description
   - Arguments
   - API settings

#### In the SDK:
```python
# Create DeFi APY function (matches GUI configuration)
defi_apy_function = game.Function(
    fn_name="get_defi_apy",
    fn_description="Get information on DeFi yields",
    args=[
        game.FunctionArgument(
            name="chain",
            type="string",
            description="Blockchain network"
        ),
        game.FunctionArgument(
            name="min_tvl",
            type="number",
            description="Minimum TVL threshold"
        )
    ],
    config=game.FunctionConfig(
        method="get",
        url="https://api.example.com/defi/apy",
        headers={
            "Content-Type": "application/json",
            "Authorization": "Bearer {{api_key}}"
        },
        payload={
            "chain": "{{chain}}",
            "min_tvl": "{{min_tvl}}"
        }
    )
)

# Add function to agent (same as saving in GUI)
agent.add_custom_function(defi_apy_function)
```

### Default Functions

#### In the Sandbox:
1. Check boxes for desired functions in function list
2. Functions include: wait, post_tweet, reply_tweet, etc.

#### In the SDK:
```python
# Enable same functions checked in GUI
agent.use_default_twitter_functions([
    "wait",
    "post_tweet",
    "reply_tweet",
    "like_tweet"
])
```

## Tweet Enrichment and Response Configuration

#### In the Sandbox:
1. Navigate to "X Setup" > "Tweet Enrichment"
2. Enable enrichment
3. Configure model parameters
4. Set response lengths

#### In the SDK:
```python
# Configure tweet enrichment (matches GUI settings)
agent.configure_twitter({
    "enable_enrichment": True,
    "model_settings": {
        "model": "meta-llama/llama-2-7b-chat-int8",
        "parameters": {
            "temperature": 1.1,
            "top_k": 52,
            "top_p": 0.6,
            "repetition_penalty": 1.1
        }
    }
})

# Configure response generation (matches GUI word limits)
agent.configure_responses({
    "response_lengths": {
        "first_response": 60,
        "second_response": 80,
        "third_response": 80,
        "fourth_response": 60,
        "fifth_response": 60
    }
})
```

## Testing and Deployment

### Simulation

#### In the Sandbox:
1. Click "Simulate" button
2. Review simulation results
3. Adjust settings if needed

#### In the SDK:
```python
# Run simulation with the same settings
simulation_result = agent.simulate_twitter(
    session_id="test-session",
    duration=3600,  # 1 hour simulation
    verbose=True
)

# Check simulation results
if simulation_result["status"] == "success":
    print(f"Actions taken: {len(simulation_result['actions'])}")
    print(f"Quality score: {simulation_result['metrics']['quality']}")
    
    # Deploy if quality meets threshold
    if simulation_result["metrics"]["quality"] > 0.8:
        agent.deploy()
```

## Common Patterns and Best Practices

### Configuration Management

#### In the Sandbox:
1. Use "Settings" section
2. Export/Import configurations
3. Save backups

#### In the SDK:
```python
# Export configuration (same as GUI export)
config = agent.export()
with open('agent_config.json', 'w') as f:
    json.dump(config, f, indent=2)

# Import configuration (same as GUI import)
with open('agent_config.json', 'r') as f:
    config = json.load(f)
    agent.load_config(config)
```

### Error Handling

#### In the Sandbox:
Monitor error messages in the interface

#### In the SDK:
```python
import logging

# Set up logging (helps track what you see in GUI)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('athena')

try:
    agent.deploy()
except game.AgentError as e:
    logger.error(f"Deployment failed: {e}")
    # Implement fallback strategy
except game.ConfigurationError as e:
    logger.error(f"Configuration error: {e}")
    # Load backup configuration
```

Remember that while the Sandbox provides a visual interface, the SDK gives you programmatic control and automation capabilities. Choose the approach that best fits your needs and expertise level.