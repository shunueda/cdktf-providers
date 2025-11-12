// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationSnowflakeCortexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration model for the Vector DB based destinations. This model is used to generate the UI for the destination configuration,
  * as well as to provide type safety for the configuration passed to the destination.
  * 
  * The configuration model is composed of four parts:
  * * Processing configuration
  * * Embedding configuration
  * * Indexing configuration
  * * Advanced configuration
  * 
  * Processing, embedding and advanced configuration are provided by this base class, while the indexing configuration is provided by the destination connector in the sub class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#configuration DestinationSnowflakeCortex#configuration}
  */
  readonly configuration: DestinationSnowflakeCortexConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#definition_id DestinationSnowflakeCortex#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#name DestinationSnowflakeCortex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#workspace_id DestinationSnowflakeCortex#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi {
  /**
  * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#api_base DestinationSnowflakeCortex#api_base}
  */
  readonly apiBase: string;
  /**
  * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#deployment DestinationSnowflakeCortex#deployment}
  */
  readonly deployment: string;
  /**
  * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#openai_key DestinationSnowflakeCortex#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationSnowflakeCortexConfigurationEmbeddingAzureOpenAiToTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_base: cdktf.stringToTerraform(struct!.apiBase),
    deployment: cdktf.stringToTerraform(struct!.deployment),
    openai_key: cdktf.stringToTerraform(struct!.openaiKey),
  }
}


export function destinationSnowflakeCortexConfigurationEmbeddingAzureOpenAiToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_base: {
      value: cdktf.stringToHclTerraform(struct!.apiBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment: {
      value: cdktf.stringToHclTerraform(struct!.deployment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_key: {
      value: cdktf.stringToHclTerraform(struct!.openaiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiBase = this._apiBase;
    }
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._openaiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiKey = this._openaiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiBase = undefined;
      this._deployment = undefined;
      this._openaiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiBase = value.apiBase;
      this._deployment = value.deployment;
      this._openaiKey = value.openaiKey;
    }
  }

  // api_base - computed: false, optional: false, required: true
  private _apiBase?: string; 
  public get apiBase() {
    return this.getStringAttribute('api_base');
  }
  public set apiBase(value: string) {
    this._apiBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBaseInput() {
    return this._apiBase;
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // openai_key - computed: false, optional: false, required: true
  private _openaiKey?: string; 
  public get openaiKey() {
    return this.getStringAttribute('openai_key');
  }
  public set openaiKey(value: string) {
    this._openaiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiKeyInput() {
    return this._openaiKey;
  }
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingCohere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#cohere_key DestinationSnowflakeCortex#cohere_key}
  */
  readonly cohereKey: string;
}

export function destinationSnowflakeCortexConfigurationEmbeddingCohereToTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohere_key: cdktf.stringToTerraform(struct!.cohereKey),
  }
}


export function destinationSnowflakeCortexConfigurationEmbeddingCohereToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cohere_key: {
      value: cdktf.stringToHclTerraform(struct!.cohereKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationEmbeddingCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationEmbeddingCohere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cohereKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohereKey = this._cohereKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationEmbeddingCohere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cohereKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cohereKey = value.cohereKey;
    }
  }

  // cohere_key - computed: false, optional: false, required: true
  private _cohereKey?: string; 
  public get cohereKey() {
    return this.getStringAttribute('cohere_key');
  }
  public set cohereKey(value: string) {
    this._cohereKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereKeyInput() {
    return this._cohereKey;
  }
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingFake {
}

export function destinationSnowflakeCortexConfigurationEmbeddingFakeToTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationSnowflakeCortexConfigurationEmbeddingFakeToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationSnowflakeCortexConfigurationEmbeddingFakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationEmbeddingFake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationEmbeddingFake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingOpenAi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#openai_key DestinationSnowflakeCortex#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationSnowflakeCortexConfigurationEmbeddingOpenAiToTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openai_key: cdktf.stringToTerraform(struct!.openaiKey),
  }
}


export function destinationSnowflakeCortexConfigurationEmbeddingOpenAiToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    openai_key: {
      value: cdktf.stringToHclTerraform(struct!.openaiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationEmbeddingOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openaiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiKey = this._openaiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openaiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openaiKey = value.openaiKey;
    }
  }

  // openai_key - computed: false, optional: false, required: true
  private _openaiKey?: string; 
  public get openaiKey() {
    return this.getStringAttribute('openai_key');
  }
  public set openaiKey(value: string) {
    this._openaiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiKeyInput() {
    return this._openaiKey;
  }
}
export interface DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible {
  /**
  * Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#api_key DestinationSnowflakeCortex#api_key}
  */
  readonly apiKey?: string;
  /**
  * The base URL for your OpenAI-compatible service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#base_url DestinationSnowflakeCortex#base_url}
  */
  readonly baseUrl: string;
  /**
  * The number of dimensions the embedding model is generating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#dimensions DestinationSnowflakeCortex#dimensions}
  */
  readonly dimensions: number;
  /**
  * The name of the model to use for embedding. Default: "text-embedding-ada-002"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#model_name DestinationSnowflakeCortex#model_name}
  */
  readonly modelName?: string;
}

export function destinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatibleToTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    dimensions: cdktf.numberToTerraform(struct!.dimensions),
    model_name: cdktf.stringToTerraform(struct!.modelName),
  }
}


export function destinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._baseUrl = undefined;
      this._dimensions = undefined;
      this._modelName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._baseUrl = value.baseUrl;
      this._dimensions = value.dimensions;
      this._modelName = value.modelName;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // model_name - computed: true, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }
}
export interface DestinationSnowflakeCortexConfigurationEmbedding {
  /**
  * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#azure_open_ai DestinationSnowflakeCortex#azure_open_ai}
  */
  readonly azureOpenAi?: DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi;
  /**
  * Use the Cohere API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#cohere DestinationSnowflakeCortex#cohere}
  */
  readonly cohere?: DestinationSnowflakeCortexConfigurationEmbeddingCohere;
  /**
  * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#fake DestinationSnowflakeCortex#fake}
  */
  readonly fake?: DestinationSnowflakeCortexConfigurationEmbeddingFake;
  /**
  * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#open_ai DestinationSnowflakeCortex#open_ai}
  */
  readonly openAi?: DestinationSnowflakeCortexConfigurationEmbeddingOpenAi;
  /**
  * Use a service that's compatible with the OpenAI API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#open_ai_compatible DestinationSnowflakeCortex#open_ai_compatible}
  */
  readonly openAiCompatible?: DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible;
}

export function destinationSnowflakeCortexConfigurationEmbeddingToTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_open_ai: destinationSnowflakeCortexConfigurationEmbeddingAzureOpenAiToTerraform(struct!.azureOpenAi),
    cohere: destinationSnowflakeCortexConfigurationEmbeddingCohereToTerraform(struct!.cohere),
    fake: destinationSnowflakeCortexConfigurationEmbeddingFakeToTerraform(struct!.fake),
    open_ai: destinationSnowflakeCortexConfigurationEmbeddingOpenAiToTerraform(struct!.openAi),
    open_ai_compatible: destinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatibleToTerraform(struct!.openAiCompatible),
  }
}


export function destinationSnowflakeCortexConfigurationEmbeddingToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_open_ai: {
      value: destinationSnowflakeCortexConfigurationEmbeddingAzureOpenAiToHclTerraform(struct!.azureOpenAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi",
    },
    cohere: {
      value: destinationSnowflakeCortexConfigurationEmbeddingCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationEmbeddingCohere",
    },
    fake: {
      value: destinationSnowflakeCortexConfigurationEmbeddingFakeToHclTerraform(struct!.fake),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationEmbeddingFake",
    },
    open_ai: {
      value: destinationSnowflakeCortexConfigurationEmbeddingOpenAiToHclTerraform(struct!.openAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationEmbeddingOpenAi",
    },
    open_ai_compatible: {
      value: destinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct!.openAiCompatible),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationEmbeddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationEmbedding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureOpenAi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureOpenAi = this._azureOpenAi?.internalValue;
    }
    if (this._cohere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cohere = this._cohere?.internalValue;
    }
    if (this._fake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fake = this._fake?.internalValue;
    }
    if (this._openAi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openAi = this._openAi?.internalValue;
    }
    if (this._openAiCompatible?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openAiCompatible = this._openAiCompatible?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationEmbedding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureOpenAi.internalValue = undefined;
      this._cohere.internalValue = undefined;
      this._fake.internalValue = undefined;
      this._openAi.internalValue = undefined;
      this._openAiCompatible.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureOpenAi.internalValue = value.azureOpenAi;
      this._cohere.internalValue = value.cohere;
      this._fake.internalValue = value.fake;
      this._openAi.internalValue = value.openAi;
      this._openAiCompatible.internalValue = value.openAiCompatible;
    }
  }

  // azure_open_ai - computed: false, optional: true, required: false
  private _azureOpenAi = new DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAiOutputReference(this, "azure_open_ai");
  public get azureOpenAi() {
    return this._azureOpenAi;
  }
  public putAzureOpenAi(value: DestinationSnowflakeCortexConfigurationEmbeddingAzureOpenAi) {
    this._azureOpenAi.internalValue = value;
  }
  public resetAzureOpenAi() {
    this._azureOpenAi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOpenAiInput() {
    return this._azureOpenAi.internalValue;
  }

  // cohere - computed: false, optional: true, required: false
  private _cohere = new DestinationSnowflakeCortexConfigurationEmbeddingCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: DestinationSnowflakeCortexConfigurationEmbeddingCohere) {
    this._cohere.internalValue = value;
  }
  public resetCohere() {
    this._cohere.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cohereInput() {
    return this._cohere.internalValue;
  }

  // fake - computed: false, optional: true, required: false
  private _fake = new DestinationSnowflakeCortexConfigurationEmbeddingFakeOutputReference(this, "fake");
  public get fake() {
    return this._fake;
  }
  public putFake(value: DestinationSnowflakeCortexConfigurationEmbeddingFake) {
    this._fake.internalValue = value;
  }
  public resetFake() {
    this._fake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeInput() {
    return this._fake.internalValue;
  }

  // open_ai - computed: false, optional: true, required: false
  private _openAi = new DestinationSnowflakeCortexConfigurationEmbeddingOpenAiOutputReference(this, "open_ai");
  public get openAi() {
    return this._openAi;
  }
  public putOpenAi(value: DestinationSnowflakeCortexConfigurationEmbeddingOpenAi) {
    this._openAi.internalValue = value;
  }
  public resetOpenAi() {
    this._openAi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAiInput() {
    return this._openAi.internalValue;
  }

  // open_ai_compatible - computed: false, optional: true, required: false
  private _openAiCompatible = new DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatibleOutputReference(this, "open_ai_compatible");
  public get openAiCompatible() {
    return this._openAiCompatible;
  }
  public putOpenAiCompatible(value: DestinationSnowflakeCortexConfigurationEmbeddingOpenAiCompatible) {
    this._openAiCompatible.internalValue = value;
  }
  public resetOpenAiCompatible() {
    this._openAiCompatible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openAiCompatibleInput() {
    return this._openAiCompatible.internalValue;
  }
}
export interface DestinationSnowflakeCortexConfigurationIndexingCredentials {
  /**
  * Enter the password you want to use to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#password DestinationSnowflakeCortex#password}
  */
  readonly password: string;
}

export function destinationSnowflakeCortexConfigurationIndexingCredentialsToTerraform(struct?: DestinationSnowflakeCortexConfigurationIndexingCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function destinationSnowflakeCortexConfigurationIndexingCredentialsToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationIndexingCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationIndexingCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationIndexingCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationIndexingCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface DestinationSnowflakeCortexConfigurationIndexing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#credentials DestinationSnowflakeCortex#credentials}
  */
  readonly credentials: DestinationSnowflakeCortexConfigurationIndexingCredentials;
  /**
  * Enter the name of the database that you want to sync data into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#database DestinationSnowflakeCortex#database}
  */
  readonly database: string;
  /**
  * Enter the name of the default schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#default_schema DestinationSnowflakeCortex#default_schema}
  */
  readonly defaultSchema: string;
  /**
  * Enter the account name you want to use to access the database. This is usually the identifier before .snowflakecomputing.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#host DestinationSnowflakeCortex#host}
  */
  readonly host: string;
  /**
  * Enter the role that you want to use to access Snowflake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#role DestinationSnowflakeCortex#role}
  */
  readonly role: string;
  /**
  * Enter the name of the user you want to use to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#username DestinationSnowflakeCortex#username}
  */
  readonly username: string;
  /**
  * Enter the name of the warehouse that you want to use as a compute cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#warehouse DestinationSnowflakeCortex#warehouse}
  */
  readonly warehouse: string;
}

export function destinationSnowflakeCortexConfigurationIndexingToTerraform(struct?: DestinationSnowflakeCortexConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: destinationSnowflakeCortexConfigurationIndexingCredentialsToTerraform(struct!.credentials),
    database: cdktf.stringToTerraform(struct!.database),
    default_schema: cdktf.stringToTerraform(struct!.defaultSchema),
    host: cdktf.stringToTerraform(struct!.host),
    role: cdktf.stringToTerraform(struct!.role),
    username: cdktf.stringToTerraform(struct!.username),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}


export function destinationSnowflakeCortexConfigurationIndexingToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: destinationSnowflakeCortexConfigurationIndexingCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationIndexingCredentials",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_schema: {
      value: cdktf.stringToHclTerraform(struct!.defaultSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktf.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationIndexingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationIndexing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._defaultSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSchema = this._defaultSchema;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationIndexing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._database = undefined;
      this._defaultSchema = undefined;
      this._host = undefined;
      this._role = undefined;
      this._username = undefined;
      this._warehouse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._database = value.database;
      this._defaultSchema = value.defaultSchema;
      this._host = value.host;
      this._role = value.role;
      this._username = value.username;
      this._warehouse = value.warehouse;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new DestinationSnowflakeCortexConfigurationIndexingCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DestinationSnowflakeCortexConfigurationIndexingCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // default_schema - computed: false, optional: false, required: true
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaInput() {
    return this._defaultSchema;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings {
  /**
  * The field name in the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#from_field DestinationSnowflakeCortex#from_field}
  */
  readonly fromField: string;
  /**
  * The field name to use in the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#to_field DestinationSnowflakeCortex#to_field}
  */
  readonly toField: string;
}

export function destinationSnowflakeCortexConfigurationProcessingFieldNameMappingsToTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field: cdktf.stringToTerraform(struct!.fromField),
    to_field: cdktf.stringToTerraform(struct!.toField),
  }
}


export function destinationSnowflakeCortexConfigurationProcessingFieldNameMappingsToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_field: {
      value: cdktf.stringToHclTerraform(struct!.fromField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_field: {
      value: cdktf.stringToHclTerraform(struct!.toField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationProcessingFieldNameMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromField !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromField = this._fromField;
    }
    if (this._toField !== undefined) {
      hasAnyValues = true;
      internalValueResult.toField = this._toField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromField = undefined;
      this._toField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromField = value.fromField;
      this._toField = value.toField;
    }
  }

  // from_field - computed: false, optional: false, required: true
  private _fromField?: string; 
  public get fromField() {
    return this.getStringAttribute('from_field');
  }
  public set fromField(value: string) {
    this._fromField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldInput() {
    return this._fromField;
  }

  // to_field - computed: false, optional: false, required: true
  private _toField?: string; 
  public get toField() {
    return this.getStringAttribute('to_field');
  }
  public set toField(value: string) {
    this._toField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toFieldInput() {
    return this._toField;
  }
}

export class DestinationSnowflakeCortexConfigurationProcessingFieldNameMappingsList extends cdktf.ComplexList {
  public internalValue? : DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DestinationSnowflakeCortexConfigurationProcessingFieldNameMappingsOutputReference {
    return new DestinationSnowflakeCortexConfigurationProcessingFieldNameMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader {
  /**
  * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#split_level DestinationSnowflakeCortex#split_level}
  */
  readonly splitLevel?: number;
}

export function destinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_level: cdktf.numberToTerraform(struct!.splitLevel),
  }
}


export function destinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    split_level: {
      value: cdktf.numberToHclTerraform(struct!.splitLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitLevel = this._splitLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._splitLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._splitLevel = value.splitLevel;
    }
  }

  // split_level - computed: true, optional: true, required: false
  private _splitLevel?: number; 
  public get splitLevel() {
    return this.getNumberAttribute('split_level');
  }
  public set splitLevel(value: number) {
    this._splitLevel = value;
  }
  public resetSplitLevel() {
    this._splitLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitLevelInput() {
    return this._splitLevel;
  }
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage {
  /**
  * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#language DestinationSnowflakeCortex#language}
  */
  readonly language: string;
}

export function destinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function destinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._language = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._language = value.language;
    }
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator {
  /**
  * Whether to keep the separator in the resulting chunks. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#keep_separator DestinationSnowflakeCortex#keep_separator}
  */
  readonly keepSeparator?: boolean | cdktf.IResolvable;
  /**
  * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#separators DestinationSnowflakeCortex#separators}
  */
  readonly separators?: string[];
}

export function destinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparatorToTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_separator: cdktf.booleanToTerraform(struct!.keepSeparator),
    separators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.separators),
  }
}


export function destinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_separator: {
      value: cdktf.booleanToHclTerraform(struct!.keepSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    separators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.separators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepSeparator = this._keepSeparator;
    }
    if (this._separators !== undefined) {
      hasAnyValues = true;
      internalValueResult.separators = this._separators;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepSeparator = undefined;
      this._separators = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepSeparator = value.keepSeparator;
      this._separators = value.separators;
    }
  }

  // keep_separator - computed: true, optional: true, required: false
  private _keepSeparator?: boolean | cdktf.IResolvable; 
  public get keepSeparator() {
    return this.getBooleanAttribute('keep_separator');
  }
  public set keepSeparator(value: boolean | cdktf.IResolvable) {
    this._keepSeparator = value;
  }
  public resetKeepSeparator() {
    this._keepSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepSeparatorInput() {
    return this._keepSeparator;
  }

  // separators - computed: false, optional: true, required: false
  private _separators?: string[]; 
  public get separators() {
    return this.getListAttribute('separators');
  }
  public set separators(value: string[]) {
    this._separators = value;
  }
  public resetSeparators() {
    this._separators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorsInput() {
    return this._separators;
  }
}
export interface DestinationSnowflakeCortexConfigurationProcessingTextSplitter {
  /**
  * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#by_markdown_header DestinationSnowflakeCortex#by_markdown_header}
  */
  readonly byMarkdownHeader?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader;
  /**
  * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#by_programming_language DestinationSnowflakeCortex#by_programming_language}
  */
  readonly byProgrammingLanguage?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage;
  /**
  * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#by_separator DestinationSnowflakeCortex#by_separator}
  */
  readonly bySeparator?: DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator;
}

export function destinationSnowflakeCortexConfigurationProcessingTextSplitterToTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by_markdown_header: destinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct!.byMarkdownHeader),
    by_programming_language: destinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct!.byProgrammingLanguage),
    by_separator: destinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparatorToTerraform(struct!.bySeparator),
  }
}


export function destinationSnowflakeCortexConfigurationProcessingTextSplitterToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by_markdown_header: {
      value: destinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct!.byMarkdownHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader",
    },
    by_programming_language: {
      value: destinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct!.byProgrammingLanguage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage",
    },
    by_separator: {
      value: destinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct!.bySeparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationProcessingTextSplitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byMarkdownHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byMarkdownHeader = this._byMarkdownHeader?.internalValue;
    }
    if (this._byProgrammingLanguage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byProgrammingLanguage = this._byProgrammingLanguage?.internalValue;
    }
    if (this._bySeparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bySeparator = this._bySeparator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byMarkdownHeader.internalValue = undefined;
      this._byProgrammingLanguage.internalValue = undefined;
      this._bySeparator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byMarkdownHeader.internalValue = value.byMarkdownHeader;
      this._byProgrammingLanguage.internalValue = value.byProgrammingLanguage;
      this._bySeparator.internalValue = value.bySeparator;
    }
  }

  // by_markdown_header - computed: false, optional: true, required: false
  private _byMarkdownHeader = new DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference(this, "by_markdown_header");
  public get byMarkdownHeader() {
    return this._byMarkdownHeader;
  }
  public putByMarkdownHeader(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByMarkdownHeader) {
    this._byMarkdownHeader.internalValue = value;
  }
  public resetByMarkdownHeader() {
    this._byMarkdownHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byMarkdownHeaderInput() {
    return this._byMarkdownHeader.internalValue;
  }

  // by_programming_language - computed: false, optional: true, required: false
  private _byProgrammingLanguage = new DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference(this, "by_programming_language");
  public get byProgrammingLanguage() {
    return this._byProgrammingLanguage;
  }
  public putByProgrammingLanguage(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitterByProgrammingLanguage) {
    this._byProgrammingLanguage.internalValue = value;
  }
  public resetByProgrammingLanguage() {
    this._byProgrammingLanguage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byProgrammingLanguageInput() {
    return this._byProgrammingLanguage.internalValue;
  }

  // by_separator - computed: false, optional: true, required: false
  private _bySeparator = new DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparatorOutputReference(this, "by_separator");
  public get bySeparator() {
    return this._bySeparator;
  }
  public putBySeparator(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitterBySeparator) {
    this._bySeparator.internalValue = value;
  }
  public resetBySeparator() {
    this._bySeparator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bySeparatorInput() {
    return this._bySeparator.internalValue;
  }
}
export interface DestinationSnowflakeCortexConfigurationProcessing {
  /**
  * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#chunk_overlap DestinationSnowflakeCortex#chunk_overlap}
  */
  readonly chunkOverlap?: number;
  /**
  * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#chunk_size DestinationSnowflakeCortex#chunk_size}
  */
  readonly chunkSize: number;
  /**
  * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#field_name_mappings DestinationSnowflakeCortex#field_name_mappings}
  */
  readonly fieldNameMappings?: DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable;
  /**
  * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#metadata_fields DestinationSnowflakeCortex#metadata_fields}
  */
  readonly metadataFields?: string[];
  /**
  * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#text_fields DestinationSnowflakeCortex#text_fields}
  */
  readonly textFields?: string[];
  /**
  * Split text fields into chunks based on the specified method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#text_splitter DestinationSnowflakeCortex#text_splitter}
  */
  readonly textSplitter?: DestinationSnowflakeCortexConfigurationProcessingTextSplitter;
}

export function destinationSnowflakeCortexConfigurationProcessingToTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_overlap: cdktf.numberToTerraform(struct!.chunkOverlap),
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    field_name_mappings: cdktf.listMapper(destinationSnowflakeCortexConfigurationProcessingFieldNameMappingsToTerraform, false)(struct!.fieldNameMappings),
    metadata_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataFields),
    text_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.textFields),
    text_splitter: destinationSnowflakeCortexConfigurationProcessingTextSplitterToTerraform(struct!.textSplitter),
  }
}


export function destinationSnowflakeCortexConfigurationProcessingToHclTerraform(struct?: DestinationSnowflakeCortexConfigurationProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunk_overlap: {
      value: cdktf.numberToHclTerraform(struct!.chunkOverlap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_size: {
      value: cdktf.numberToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_name_mappings: {
      value: cdktf.listMapperHcl(destinationSnowflakeCortexConfigurationProcessingFieldNameMappingsToHclTerraform, false)(struct!.fieldNameMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationSnowflakeCortexConfigurationProcessingFieldNameMappingsList",
    },
    metadata_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metadataFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    text_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.textFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    text_splitter: {
      value: destinationSnowflakeCortexConfigurationProcessingTextSplitterToHclTerraform(struct!.textSplitter),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationProcessingTextSplitter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfigurationProcessing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkOverlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkOverlap = this._chunkOverlap;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._fieldNameMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldNameMappings = this._fieldNameMappings?.internalValue;
    }
    if (this._metadataFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFields = this._metadataFields;
    }
    if (this._textFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFields = this._textFields;
    }
    if (this._textSplitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSplitter = this._textSplitter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfigurationProcessing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkOverlap = undefined;
      this._chunkSize = undefined;
      this._fieldNameMappings.internalValue = undefined;
      this._metadataFields = undefined;
      this._textFields = undefined;
      this._textSplitter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkOverlap = value.chunkOverlap;
      this._chunkSize = value.chunkSize;
      this._fieldNameMappings.internalValue = value.fieldNameMappings;
      this._metadataFields = value.metadataFields;
      this._textFields = value.textFields;
      this._textSplitter.internalValue = value.textSplitter;
    }
  }

  // chunk_overlap - computed: true, optional: true, required: false
  private _chunkOverlap?: number; 
  public get chunkOverlap() {
    return this.getNumberAttribute('chunk_overlap');
  }
  public set chunkOverlap(value: number) {
    this._chunkOverlap = value;
  }
  public resetChunkOverlap() {
    this._chunkOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkOverlapInput() {
    return this._chunkOverlap;
  }

  // chunk_size - computed: false, optional: false, required: true
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // field_name_mappings - computed: false, optional: true, required: false
  private _fieldNameMappings = new DestinationSnowflakeCortexConfigurationProcessingFieldNameMappingsList(this, "field_name_mappings", false);
  public get fieldNameMappings() {
    return this._fieldNameMappings;
  }
  public putFieldNameMappings(value: DestinationSnowflakeCortexConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable) {
    this._fieldNameMappings.internalValue = value;
  }
  public resetFieldNameMappings() {
    this._fieldNameMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameMappingsInput() {
    return this._fieldNameMappings.internalValue;
  }

  // metadata_fields - computed: true, optional: true, required: false
  private _metadataFields?: string[]; 
  public get metadataFields() {
    return this.getListAttribute('metadata_fields');
  }
  public set metadataFields(value: string[]) {
    this._metadataFields = value;
  }
  public resetMetadataFields() {
    this._metadataFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldsInput() {
    return this._metadataFields;
  }

  // text_fields - computed: true, optional: true, required: false
  private _textFields?: string[]; 
  public get textFields() {
    return this.getListAttribute('text_fields');
  }
  public set textFields(value: string[]) {
    this._textFields = value;
  }
  public resetTextFields() {
    this._textFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldsInput() {
    return this._textFields;
  }

  // text_splitter - computed: false, optional: true, required: false
  private _textSplitter = new DestinationSnowflakeCortexConfigurationProcessingTextSplitterOutputReference(this, "text_splitter");
  public get textSplitter() {
    return this._textSplitter;
  }
  public putTextSplitter(value: DestinationSnowflakeCortexConfigurationProcessingTextSplitter) {
    this._textSplitter.internalValue = value;
  }
  public resetTextSplitter() {
    this._textSplitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textSplitterInput() {
    return this._textSplitter.internalValue;
  }
}
export interface DestinationSnowflakeCortexConfiguration {
  /**
  * Embedding configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#embedding DestinationSnowflakeCortex#embedding}
  */
  readonly embedding: DestinationSnowflakeCortexConfigurationEmbedding;
  /**
  * Snowflake can be used to store vector data and retrieve embeddings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#indexing DestinationSnowflakeCortex#indexing}
  */
  readonly indexing: DestinationSnowflakeCortexConfigurationIndexing;
  /**
  * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#omit_raw_text DestinationSnowflakeCortex#omit_raw_text}
  */
  readonly omitRawText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#processing DestinationSnowflakeCortex#processing}
  */
  readonly processing: DestinationSnowflakeCortexConfigurationProcessing;
}

export function destinationSnowflakeCortexConfigurationToTerraform(struct?: DestinationSnowflakeCortexConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding: destinationSnowflakeCortexConfigurationEmbeddingToTerraform(struct!.embedding),
    indexing: destinationSnowflakeCortexConfigurationIndexingToTerraform(struct!.indexing),
    omit_raw_text: cdktf.booleanToTerraform(struct!.omitRawText),
    processing: destinationSnowflakeCortexConfigurationProcessingToTerraform(struct!.processing),
  }
}


export function destinationSnowflakeCortexConfigurationToHclTerraform(struct?: DestinationSnowflakeCortexConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding: {
      value: destinationSnowflakeCortexConfigurationEmbeddingToHclTerraform(struct!.embedding),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationEmbedding",
    },
    indexing: {
      value: destinationSnowflakeCortexConfigurationIndexingToHclTerraform(struct!.indexing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationIndexing",
    },
    omit_raw_text: {
      value: cdktf.booleanToHclTerraform(struct!.omitRawText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processing: {
      value: destinationSnowflakeCortexConfigurationProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationSnowflakeCortexConfigurationProcessing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationSnowflakeCortexConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embedding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embedding = this._embedding?.internalValue;
    }
    if (this._indexing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexing = this._indexing?.internalValue;
    }
    if (this._omitRawText !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitRawText = this._omitRawText;
    }
    if (this._processing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processing = this._processing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embedding.internalValue = undefined;
      this._indexing.internalValue = undefined;
      this._omitRawText = undefined;
      this._processing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embedding.internalValue = value.embedding;
      this._indexing.internalValue = value.indexing;
      this._omitRawText = value.omitRawText;
      this._processing.internalValue = value.processing;
    }
  }

  // embedding - computed: false, optional: false, required: true
  private _embedding = new DestinationSnowflakeCortexConfigurationEmbeddingOutputReference(this, "embedding");
  public get embedding() {
    return this._embedding;
  }
  public putEmbedding(value: DestinationSnowflakeCortexConfigurationEmbedding) {
    this._embedding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingInput() {
    return this._embedding.internalValue;
  }

  // indexing - computed: false, optional: false, required: true
  private _indexing = new DestinationSnowflakeCortexConfigurationIndexingOutputReference(this, "indexing");
  public get indexing() {
    return this._indexing;
  }
  public putIndexing(value: DestinationSnowflakeCortexConfigurationIndexing) {
    this._indexing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingInput() {
    return this._indexing.internalValue;
  }

  // omit_raw_text - computed: true, optional: true, required: false
  private _omitRawText?: boolean | cdktf.IResolvable; 
  public get omitRawText() {
    return this.getBooleanAttribute('omit_raw_text');
  }
  public set omitRawText(value: boolean | cdktf.IResolvable) {
    this._omitRawText = value;
  }
  public resetOmitRawText() {
    this._omitRawText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitRawTextInput() {
    return this._omitRawText;
  }

  // processing - computed: false, optional: false, required: true
  private _processing = new DestinationSnowflakeCortexConfigurationProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: DestinationSnowflakeCortexConfigurationProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }
}
export interface DestinationSnowflakeCortexResourceAllocationDefault {
}

export function destinationSnowflakeCortexResourceAllocationDefaultToTerraform(struct?: DestinationSnowflakeCortexResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationSnowflakeCortexResourceAllocationDefaultToHclTerraform(struct?: DestinationSnowflakeCortexResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationSnowflakeCortexResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirements {
}

export function destinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationSnowflakeCortexResourceAllocationJobSpecific {
}

export function destinationSnowflakeCortexResourceAllocationJobSpecificToTerraform(struct?: DestinationSnowflakeCortexResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationSnowflakeCortexResourceAllocationJobSpecificToHclTerraform(struct?: DestinationSnowflakeCortexResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationSnowflakeCortexResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DestinationSnowflakeCortexResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationSnowflakeCortexResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationSnowflakeCortexResourceAllocationJobSpecificList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DestinationSnowflakeCortexResourceAllocationJobSpecificOutputReference {
    return new DestinationSnowflakeCortexResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationSnowflakeCortexResourceAllocation {
}

export function destinationSnowflakeCortexResourceAllocationToTerraform(struct?: DestinationSnowflakeCortexResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationSnowflakeCortexResourceAllocationToHclTerraform(struct?: DestinationSnowflakeCortexResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationSnowflakeCortexResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationSnowflakeCortexResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationSnowflakeCortexResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationSnowflakeCortexResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationSnowflakeCortexResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex airbyte_destination_snowflake_cortex}
*/
export class DestinationSnowflakeCortex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_snowflake_cortex";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationSnowflakeCortex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationSnowflakeCortex to import
  * @param importFromId The id of the existing DestinationSnowflakeCortex that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationSnowflakeCortex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_snowflake_cortex", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_snowflake_cortex airbyte_destination_snowflake_cortex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationSnowflakeCortexConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationSnowflakeCortexConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_snowflake_cortex',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationSnowflakeCortexConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationSnowflakeCortexConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationSnowflakeCortexResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationSnowflakeCortexConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationSnowflakeCortexConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationSnowflakeCortexConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
