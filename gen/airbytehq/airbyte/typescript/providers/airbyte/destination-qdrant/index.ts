// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationQdrantConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#configuration DestinationQdrant#configuration}
  */
  readonly configuration: DestinationQdrantConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#definition_id DestinationQdrant#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#name DestinationQdrant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#workspace_id DestinationQdrant#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationQdrantConfigurationEmbeddingAzureOpenAi {
  /**
  * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#api_base DestinationQdrant#api_base}
  */
  readonly apiBase: string;
  /**
  * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#deployment DestinationQdrant#deployment}
  */
  readonly deployment: string;
  /**
  * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#openai_key DestinationQdrant#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationQdrantConfigurationEmbeddingAzureOpenAiToTerraform(struct?: DestinationQdrantConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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


export function destinationQdrantConfigurationEmbeddingAzureOpenAiToHclTerraform(struct?: DestinationQdrantConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationEmbeddingAzureOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationEmbeddingCohere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#cohere_key DestinationQdrant#cohere_key}
  */
  readonly cohereKey: string;
}

export function destinationQdrantConfigurationEmbeddingCohereToTerraform(struct?: DestinationQdrantConfigurationEmbeddingCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohere_key: cdktf.stringToTerraform(struct!.cohereKey),
  }
}


export function destinationQdrantConfigurationEmbeddingCohereToHclTerraform(struct?: DestinationQdrantConfigurationEmbeddingCohere | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationEmbeddingCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationEmbeddingCohere | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationEmbeddingCohere | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationEmbeddingFake {
}

export function destinationQdrantConfigurationEmbeddingFakeToTerraform(struct?: DestinationQdrantConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationQdrantConfigurationEmbeddingFakeToHclTerraform(struct?: DestinationQdrantConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationQdrantConfigurationEmbeddingFakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationEmbeddingFake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantConfigurationEmbeddingFake | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationEmbeddingOpenAi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#openai_key DestinationQdrant#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationQdrantConfigurationEmbeddingOpenAiToTerraform(struct?: DestinationQdrantConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openai_key: cdktf.stringToTerraform(struct!.openaiKey),
  }
}


export function destinationQdrantConfigurationEmbeddingOpenAiToHclTerraform(struct?: DestinationQdrantConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationEmbeddingOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationEmbeddingOpenAiCompatible {
  /**
  * Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#api_key DestinationQdrant#api_key}
  */
  readonly apiKey?: string;
  /**
  * The base URL for your OpenAI-compatible service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#base_url DestinationQdrant#base_url}
  */
  readonly baseUrl: string;
  /**
  * The number of dimensions the embedding model is generating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#dimensions DestinationQdrant#dimensions}
  */
  readonly dimensions: number;
  /**
  * The name of the model to use for embedding. Default: "text-embedding-ada-002"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#model_name DestinationQdrant#model_name}
  */
  readonly modelName?: string;
}

export function destinationQdrantConfigurationEmbeddingOpenAiCompatibleToTerraform(struct?: DestinationQdrantConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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


export function destinationQdrantConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct?: DestinationQdrantConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationEmbeddingOpenAiCompatibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationEmbedding {
  /**
  * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#azure_open_ai DestinationQdrant#azure_open_ai}
  */
  readonly azureOpenAi?: DestinationQdrantConfigurationEmbeddingAzureOpenAi;
  /**
  * Use the Cohere API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#cohere DestinationQdrant#cohere}
  */
  readonly cohere?: DestinationQdrantConfigurationEmbeddingCohere;
  /**
  * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#fake DestinationQdrant#fake}
  */
  readonly fake?: DestinationQdrantConfigurationEmbeddingFake;
  /**
  * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#open_ai DestinationQdrant#open_ai}
  */
  readonly openAi?: DestinationQdrantConfigurationEmbeddingOpenAi;
  /**
  * Use a service that's compatible with the OpenAI API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#open_ai_compatible DestinationQdrant#open_ai_compatible}
  */
  readonly openAiCompatible?: DestinationQdrantConfigurationEmbeddingOpenAiCompatible;
}

export function destinationQdrantConfigurationEmbeddingToTerraform(struct?: DestinationQdrantConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_open_ai: destinationQdrantConfigurationEmbeddingAzureOpenAiToTerraform(struct!.azureOpenAi),
    cohere: destinationQdrantConfigurationEmbeddingCohereToTerraform(struct!.cohere),
    fake: destinationQdrantConfigurationEmbeddingFakeToTerraform(struct!.fake),
    open_ai: destinationQdrantConfigurationEmbeddingOpenAiToTerraform(struct!.openAi),
    open_ai_compatible: destinationQdrantConfigurationEmbeddingOpenAiCompatibleToTerraform(struct!.openAiCompatible),
  }
}


export function destinationQdrantConfigurationEmbeddingToHclTerraform(struct?: DestinationQdrantConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_open_ai: {
      value: destinationQdrantConfigurationEmbeddingAzureOpenAiToHclTerraform(struct!.azureOpenAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationEmbeddingAzureOpenAi",
    },
    cohere: {
      value: destinationQdrantConfigurationEmbeddingCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationEmbeddingCohere",
    },
    fake: {
      value: destinationQdrantConfigurationEmbeddingFakeToHclTerraform(struct!.fake),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationEmbeddingFake",
    },
    open_ai: {
      value: destinationQdrantConfigurationEmbeddingOpenAiToHclTerraform(struct!.openAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationEmbeddingOpenAi",
    },
    open_ai_compatible: {
      value: destinationQdrantConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct!.openAiCompatible),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationEmbeddingOpenAiCompatible",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationQdrantConfigurationEmbeddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationEmbedding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationEmbedding | cdktf.IResolvable | undefined) {
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
  private _azureOpenAi = new DestinationQdrantConfigurationEmbeddingAzureOpenAiOutputReference(this, "azure_open_ai");
  public get azureOpenAi() {
    return this._azureOpenAi;
  }
  public putAzureOpenAi(value: DestinationQdrantConfigurationEmbeddingAzureOpenAi) {
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
  private _cohere = new DestinationQdrantConfigurationEmbeddingCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: DestinationQdrantConfigurationEmbeddingCohere) {
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
  private _fake = new DestinationQdrantConfigurationEmbeddingFakeOutputReference(this, "fake");
  public get fake() {
    return this._fake;
  }
  public putFake(value: DestinationQdrantConfigurationEmbeddingFake) {
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
  private _openAi = new DestinationQdrantConfigurationEmbeddingOpenAiOutputReference(this, "open_ai");
  public get openAi() {
    return this._openAi;
  }
  public putOpenAi(value: DestinationQdrantConfigurationEmbeddingOpenAi) {
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
  private _openAiCompatible = new DestinationQdrantConfigurationEmbeddingOpenAiCompatibleOutputReference(this, "open_ai_compatible");
  public get openAiCompatible() {
    return this._openAiCompatible;
  }
  public putOpenAiCompatible(value: DestinationQdrantConfigurationEmbeddingOpenAiCompatible) {
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
export interface DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth {
  /**
  * API Key for the Qdrant instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#api_key DestinationQdrant#api_key}
  */
  readonly apiKey: string;
}

export function destinationQdrantConfigurationIndexingAuthMethodApiKeyAuthToTerraform(struct?: DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function destinationQdrantConfigurationIndexingAuthMethodApiKeyAuthToHclTerraform(struct?: DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface DestinationQdrantConfigurationIndexingAuthMethodNoAuth {
}

export function destinationQdrantConfigurationIndexingAuthMethodNoAuthToTerraform(struct?: DestinationQdrantConfigurationIndexingAuthMethodNoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationQdrantConfigurationIndexingAuthMethodNoAuthToHclTerraform(struct?: DestinationQdrantConfigurationIndexingAuthMethodNoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationQdrantConfigurationIndexingAuthMethodNoAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationIndexingAuthMethodNoAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantConfigurationIndexingAuthMethodNoAuth | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationIndexingAuthMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#api_key_auth DestinationQdrant#api_key_auth}
  */
  readonly apiKeyAuth?: DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#no_auth DestinationQdrant#no_auth}
  */
  readonly noAuth?: DestinationQdrantConfigurationIndexingAuthMethodNoAuth;
}

export function destinationQdrantConfigurationIndexingAuthMethodToTerraform(struct?: DestinationQdrantConfigurationIndexingAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_auth: destinationQdrantConfigurationIndexingAuthMethodApiKeyAuthToTerraform(struct!.apiKeyAuth),
    no_auth: destinationQdrantConfigurationIndexingAuthMethodNoAuthToTerraform(struct!.noAuth),
  }
}


export function destinationQdrantConfigurationIndexingAuthMethodToHclTerraform(struct?: DestinationQdrantConfigurationIndexingAuthMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_auth: {
      value: destinationQdrantConfigurationIndexingAuthMethodApiKeyAuthToHclTerraform(struct!.apiKeyAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth",
    },
    no_auth: {
      value: destinationQdrantConfigurationIndexingAuthMethodNoAuthToHclTerraform(struct!.noAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationIndexingAuthMethodNoAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationQdrantConfigurationIndexingAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationIndexingAuthMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAuth = this._apiKeyAuth?.internalValue;
    }
    if (this._noAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuth = this._noAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantConfigurationIndexingAuthMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyAuth.internalValue = undefined;
      this._noAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyAuth.internalValue = value.apiKeyAuth;
      this._noAuth.internalValue = value.noAuth;
    }
  }

  // api_key_auth - computed: false, optional: true, required: false
  private _apiKeyAuth = new DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuthOutputReference(this, "api_key_auth");
  public get apiKeyAuth() {
    return this._apiKeyAuth;
  }
  public putApiKeyAuth(value: DestinationQdrantConfigurationIndexingAuthMethodApiKeyAuth) {
    this._apiKeyAuth.internalValue = value;
  }
  public resetApiKeyAuth() {
    this._apiKeyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAuthInput() {
    return this._apiKeyAuth.internalValue;
  }

  // no_auth - computed: false, optional: true, required: false
  private _noAuth = new DestinationQdrantConfigurationIndexingAuthMethodNoAuthOutputReference(this, "no_auth");
  public get noAuth() {
    return this._noAuth;
  }
  public putNoAuth(value: DestinationQdrantConfigurationIndexingAuthMethodNoAuth) {
    this._noAuth.internalValue = value;
  }
  public resetNoAuth() {
    this._noAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthInput() {
    return this._noAuth.internalValue;
  }
}
export interface DestinationQdrantConfigurationIndexing {
  /**
  * Method to authenticate with the Qdrant Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#auth_method DestinationQdrant#auth_method}
  */
  readonly authMethod?: DestinationQdrantConfigurationIndexingAuthMethod;
  /**
  * The collection to load data into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#collection DestinationQdrant#collection}
  */
  readonly collection: string;
  /**
  * The Distance metric used to measure similarities among vectors. This field is only used if the collection defined in the does not exist yet and is created automatically by the connector. Default: "cos"; must be one of ["dot", "cos", "euc"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#distance_metric DestinationQdrant#distance_metric}
  */
  readonly distanceMetric?: string;
  /**
  * Whether to prefer gRPC over HTTP. Set to true for Qdrant cloud clusters. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#prefer_grpc DestinationQdrant#prefer_grpc}
  */
  readonly preferGrpc?: boolean | cdktf.IResolvable;
  /**
  * The field in the payload that contains the embedded text. Default: "text"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#text_field DestinationQdrant#text_field}
  */
  readonly textField?: string;
  /**
  * Public Endpoint of the Qdrant cluser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#url DestinationQdrant#url}
  */
  readonly url: string;
}

export function destinationQdrantConfigurationIndexingToTerraform(struct?: DestinationQdrantConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: destinationQdrantConfigurationIndexingAuthMethodToTerraform(struct!.authMethod),
    collection: cdktf.stringToTerraform(struct!.collection),
    distance_metric: cdktf.stringToTerraform(struct!.distanceMetric),
    prefer_grpc: cdktf.booleanToTerraform(struct!.preferGrpc),
    text_field: cdktf.stringToTerraform(struct!.textField),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function destinationQdrantConfigurationIndexingToHclTerraform(struct?: DestinationQdrantConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: destinationQdrantConfigurationIndexingAuthMethodToHclTerraform(struct!.authMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationIndexingAuthMethod",
    },
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distance_metric: {
      value: cdktf.stringToHclTerraform(struct!.distanceMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefer_grpc: {
      value: cdktf.booleanToHclTerraform(struct!.preferGrpc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_field: {
      value: cdktf.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationQdrantConfigurationIndexingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationIndexing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod?.internalValue;
    }
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._distanceMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMetric = this._distanceMetric;
    }
    if (this._preferGrpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferGrpc = this._preferGrpc;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantConfigurationIndexing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod.internalValue = undefined;
      this._collection = undefined;
      this._distanceMetric = undefined;
      this._preferGrpc = undefined;
      this._textField = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod.internalValue = value.authMethod;
      this._collection = value.collection;
      this._distanceMetric = value.distanceMetric;
      this._preferGrpc = value.preferGrpc;
      this._textField = value.textField;
      this._url = value.url;
    }
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new DestinationQdrantConfigurationIndexingAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: DestinationQdrantConfigurationIndexingAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // distance_metric - computed: true, optional: true, required: false
  private _distanceMetric?: string; 
  public get distanceMetric() {
    return this.getStringAttribute('distance_metric');
  }
  public set distanceMetric(value: string) {
    this._distanceMetric = value;
  }
  public resetDistanceMetric() {
    this._distanceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMetricInput() {
    return this._distanceMetric;
  }

  // prefer_grpc - computed: true, optional: true, required: false
  private _preferGrpc?: boolean | cdktf.IResolvable; 
  public get preferGrpc() {
    return this.getBooleanAttribute('prefer_grpc');
  }
  public set preferGrpc(value: boolean | cdktf.IResolvable) {
    this._preferGrpc = value;
  }
  public resetPreferGrpc() {
    this._preferGrpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferGrpcInput() {
    return this._preferGrpc;
  }

  // text_field - computed: true, optional: true, required: false
  private _textField?: string; 
  public get textField() {
    return this.getStringAttribute('text_field');
  }
  public set textField(value: string) {
    this._textField = value;
  }
  public resetTextField() {
    this._textField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFieldInput() {
    return this._textField;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DestinationQdrantConfigurationProcessingFieldNameMappings {
  /**
  * The field name in the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#from_field DestinationQdrant#from_field}
  */
  readonly fromField: string;
  /**
  * The field name to use in the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#to_field DestinationQdrant#to_field}
  */
  readonly toField: string;
}

export function destinationQdrantConfigurationProcessingFieldNameMappingsToTerraform(struct?: DestinationQdrantConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field: cdktf.stringToTerraform(struct!.fromField),
    to_field: cdktf.stringToTerraform(struct!.toField),
  }
}


export function destinationQdrantConfigurationProcessingFieldNameMappingsToHclTerraform(struct?: DestinationQdrantConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationProcessingFieldNameMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationQdrantConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined) {
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

export class DestinationQdrantConfigurationProcessingFieldNameMappingsList extends cdktf.ComplexList {
  public internalValue? : DestinationQdrantConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable

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
  public get(index: number): DestinationQdrantConfigurationProcessingFieldNameMappingsOutputReference {
    return new DestinationQdrantConfigurationProcessingFieldNameMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader {
  /**
  * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#split_level DestinationQdrant#split_level}
  */
  readonly splitLevel?: number;
}

export function destinationQdrantConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_level: cdktf.numberToTerraform(struct!.splitLevel),
  }
}


export function destinationQdrantConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage {
  /**
  * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#language DestinationQdrant#language}
  */
  readonly language: string;
}

export function destinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function destinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationProcessingTextSplitterBySeparator {
  /**
  * Whether to keep the separator in the resulting chunks. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#keep_separator DestinationQdrant#keep_separator}
  */
  readonly keepSeparator?: boolean | cdktf.IResolvable;
  /**
  * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#separators DestinationQdrant#separators}
  */
  readonly separators?: string[];
}

export function destinationQdrantConfigurationProcessingTextSplitterBySeparatorToTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_separator: cdktf.booleanToTerraform(struct!.keepSeparator),
    separators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.separators),
  }
}


export function destinationQdrantConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
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

export class DestinationQdrantConfigurationProcessingTextSplitterBySeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined) {
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
export interface DestinationQdrantConfigurationProcessingTextSplitter {
  /**
  * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#by_markdown_header DestinationQdrant#by_markdown_header}
  */
  readonly byMarkdownHeader?: DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader;
  /**
  * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#by_programming_language DestinationQdrant#by_programming_language}
  */
  readonly byProgrammingLanguage?: DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage;
  /**
  * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#by_separator DestinationQdrant#by_separator}
  */
  readonly bySeparator?: DestinationQdrantConfigurationProcessingTextSplitterBySeparator;
}

export function destinationQdrantConfigurationProcessingTextSplitterToTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by_markdown_header: destinationQdrantConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct!.byMarkdownHeader),
    by_programming_language: destinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct!.byProgrammingLanguage),
    by_separator: destinationQdrantConfigurationProcessingTextSplitterBySeparatorToTerraform(struct!.bySeparator),
  }
}


export function destinationQdrantConfigurationProcessingTextSplitterToHclTerraform(struct?: DestinationQdrantConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by_markdown_header: {
      value: destinationQdrantConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct!.byMarkdownHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader",
    },
    by_programming_language: {
      value: destinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct!.byProgrammingLanguage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage",
    },
    by_separator: {
      value: destinationQdrantConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct!.bySeparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationProcessingTextSplitterBySeparator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationQdrantConfigurationProcessingTextSplitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined) {
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
  private _byMarkdownHeader = new DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference(this, "by_markdown_header");
  public get byMarkdownHeader() {
    return this._byMarkdownHeader;
  }
  public putByMarkdownHeader(value: DestinationQdrantConfigurationProcessingTextSplitterByMarkdownHeader) {
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
  private _byProgrammingLanguage = new DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference(this, "by_programming_language");
  public get byProgrammingLanguage() {
    return this._byProgrammingLanguage;
  }
  public putByProgrammingLanguage(value: DestinationQdrantConfigurationProcessingTextSplitterByProgrammingLanguage) {
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
  private _bySeparator = new DestinationQdrantConfigurationProcessingTextSplitterBySeparatorOutputReference(this, "by_separator");
  public get bySeparator() {
    return this._bySeparator;
  }
  public putBySeparator(value: DestinationQdrantConfigurationProcessingTextSplitterBySeparator) {
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
export interface DestinationQdrantConfigurationProcessing {
  /**
  * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#chunk_overlap DestinationQdrant#chunk_overlap}
  */
  readonly chunkOverlap?: number;
  /**
  * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#chunk_size DestinationQdrant#chunk_size}
  */
  readonly chunkSize: number;
  /**
  * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#field_name_mappings DestinationQdrant#field_name_mappings}
  */
  readonly fieldNameMappings?: DestinationQdrantConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable;
  /**
  * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#metadata_fields DestinationQdrant#metadata_fields}
  */
  readonly metadataFields?: string[];
  /**
  * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#text_fields DestinationQdrant#text_fields}
  */
  readonly textFields?: string[];
  /**
  * Split text fields into chunks based on the specified method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#text_splitter DestinationQdrant#text_splitter}
  */
  readonly textSplitter?: DestinationQdrantConfigurationProcessingTextSplitter;
}

export function destinationQdrantConfigurationProcessingToTerraform(struct?: DestinationQdrantConfigurationProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_overlap: cdktf.numberToTerraform(struct!.chunkOverlap),
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    field_name_mappings: cdktf.listMapper(destinationQdrantConfigurationProcessingFieldNameMappingsToTerraform, false)(struct!.fieldNameMappings),
    metadata_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataFields),
    text_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.textFields),
    text_splitter: destinationQdrantConfigurationProcessingTextSplitterToTerraform(struct!.textSplitter),
  }
}


export function destinationQdrantConfigurationProcessingToHclTerraform(struct?: DestinationQdrantConfigurationProcessing | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(destinationQdrantConfigurationProcessingFieldNameMappingsToHclTerraform, false)(struct!.fieldNameMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationQdrantConfigurationProcessingFieldNameMappingsList",
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
      value: destinationQdrantConfigurationProcessingTextSplitterToHclTerraform(struct!.textSplitter),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationProcessingTextSplitter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationQdrantConfigurationProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfigurationProcessing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfigurationProcessing | cdktf.IResolvable | undefined) {
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
  private _fieldNameMappings = new DestinationQdrantConfigurationProcessingFieldNameMappingsList(this, "field_name_mappings", false);
  public get fieldNameMappings() {
    return this._fieldNameMappings;
  }
  public putFieldNameMappings(value: DestinationQdrantConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable) {
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
  private _textSplitter = new DestinationQdrantConfigurationProcessingTextSplitterOutputReference(this, "text_splitter");
  public get textSplitter() {
    return this._textSplitter;
  }
  public putTextSplitter(value: DestinationQdrantConfigurationProcessingTextSplitter) {
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
export interface DestinationQdrantConfiguration {
  /**
  * Embedding configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#embedding DestinationQdrant#embedding}
  */
  readonly embedding: DestinationQdrantConfigurationEmbedding;
  /**
  * Indexing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#indexing DestinationQdrant#indexing}
  */
  readonly indexing: DestinationQdrantConfigurationIndexing;
  /**
  * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#omit_raw_text DestinationQdrant#omit_raw_text}
  */
  readonly omitRawText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#processing DestinationQdrant#processing}
  */
  readonly processing: DestinationQdrantConfigurationProcessing;
}

export function destinationQdrantConfigurationToTerraform(struct?: DestinationQdrantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding: destinationQdrantConfigurationEmbeddingToTerraform(struct!.embedding),
    indexing: destinationQdrantConfigurationIndexingToTerraform(struct!.indexing),
    omit_raw_text: cdktf.booleanToTerraform(struct!.omitRawText),
    processing: destinationQdrantConfigurationProcessingToTerraform(struct!.processing),
  }
}


export function destinationQdrantConfigurationToHclTerraform(struct?: DestinationQdrantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding: {
      value: destinationQdrantConfigurationEmbeddingToHclTerraform(struct!.embedding),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationEmbedding",
    },
    indexing: {
      value: destinationQdrantConfigurationIndexingToHclTerraform(struct!.indexing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationIndexing",
    },
    omit_raw_text: {
      value: cdktf.booleanToHclTerraform(struct!.omitRawText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processing: {
      value: destinationQdrantConfigurationProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationQdrantConfigurationProcessing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationQdrantConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationQdrantConfiguration | cdktf.IResolvable | undefined) {
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
  private _embedding = new DestinationQdrantConfigurationEmbeddingOutputReference(this, "embedding");
  public get embedding() {
    return this._embedding;
  }
  public putEmbedding(value: DestinationQdrantConfigurationEmbedding) {
    this._embedding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingInput() {
    return this._embedding.internalValue;
  }

  // indexing - computed: false, optional: false, required: true
  private _indexing = new DestinationQdrantConfigurationIndexingOutputReference(this, "indexing");
  public get indexing() {
    return this._indexing;
  }
  public putIndexing(value: DestinationQdrantConfigurationIndexing) {
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
  private _processing = new DestinationQdrantConfigurationProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: DestinationQdrantConfigurationProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }
}
export interface DestinationQdrantResourceAllocationDefault {
}

export function destinationQdrantResourceAllocationDefaultToTerraform(struct?: DestinationQdrantResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationQdrantResourceAllocationDefaultToHclTerraform(struct?: DestinationQdrantResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationQdrantResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantResourceAllocationDefault | undefined) {
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
export interface DestinationQdrantResourceAllocationJobSpecificResourceRequirements {
}

export function destinationQdrantResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationQdrantResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationQdrantResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationQdrantResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationQdrantResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationQdrantResourceAllocationJobSpecific {
}

export function destinationQdrantResourceAllocationJobSpecificToTerraform(struct?: DestinationQdrantResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationQdrantResourceAllocationJobSpecificToHclTerraform(struct?: DestinationQdrantResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationQdrantResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationQdrantResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationQdrantResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationQdrantResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationQdrantResourceAllocationJobSpecificOutputReference {
    return new DestinationQdrantResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationQdrantResourceAllocation {
}

export function destinationQdrantResourceAllocationToTerraform(struct?: DestinationQdrantResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationQdrantResourceAllocationToHclTerraform(struct?: DestinationQdrantResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationQdrantResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationQdrantResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationQdrantResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationQdrantResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationQdrantResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant airbyte_destination_qdrant}
*/
export class DestinationQdrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_qdrant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationQdrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationQdrant to import
  * @param importFromId The id of the existing DestinationQdrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationQdrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_qdrant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_qdrant airbyte_destination_qdrant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationQdrantConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationQdrantConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_qdrant',
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
  private _configuration = new DestinationQdrantConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationQdrantConfiguration) {
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
  private _resourceAllocation = new DestinationQdrantResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationQdrantConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationQdrantConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationQdrantConfiguration",
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
