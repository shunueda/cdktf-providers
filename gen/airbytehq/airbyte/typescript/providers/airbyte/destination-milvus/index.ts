// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationMilvusConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#configuration DestinationMilvus#configuration}
  */
  readonly configuration: DestinationMilvusConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#definition_id DestinationMilvus#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#name DestinationMilvus#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#workspace_id DestinationMilvus#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationMilvusConfigurationEmbeddingAzureOpenAi {
  /**
  * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#api_base DestinationMilvus#api_base}
  */
  readonly apiBase: string;
  /**
  * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#deployment DestinationMilvus#deployment}
  */
  readonly deployment: string;
  /**
  * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#openai_key DestinationMilvus#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationMilvusConfigurationEmbeddingAzureOpenAiToTerraform(struct?: DestinationMilvusConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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


export function destinationMilvusConfigurationEmbeddingAzureOpenAiToHclTerraform(struct?: DestinationMilvusConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationEmbeddingAzureOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationEmbeddingCohere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#cohere_key DestinationMilvus#cohere_key}
  */
  readonly cohereKey: string;
}

export function destinationMilvusConfigurationEmbeddingCohereToTerraform(struct?: DestinationMilvusConfigurationEmbeddingCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohere_key: cdktf.stringToTerraform(struct!.cohereKey),
  }
}


export function destinationMilvusConfigurationEmbeddingCohereToHclTerraform(struct?: DestinationMilvusConfigurationEmbeddingCohere | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationEmbeddingCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationEmbeddingCohere | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationEmbeddingCohere | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationEmbeddingFake {
}

export function destinationMilvusConfigurationEmbeddingFakeToTerraform(struct?: DestinationMilvusConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMilvusConfigurationEmbeddingFakeToHclTerraform(struct?: DestinationMilvusConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMilvusConfigurationEmbeddingFakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationEmbeddingFake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusConfigurationEmbeddingFake | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationEmbeddingOpenAi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#openai_key DestinationMilvus#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationMilvusConfigurationEmbeddingOpenAiToTerraform(struct?: DestinationMilvusConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openai_key: cdktf.stringToTerraform(struct!.openaiKey),
  }
}


export function destinationMilvusConfigurationEmbeddingOpenAiToHclTerraform(struct?: DestinationMilvusConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationEmbeddingOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationEmbeddingOpenAiCompatible {
  /**
  * Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#api_key DestinationMilvus#api_key}
  */
  readonly apiKey?: string;
  /**
  * The base URL for your OpenAI-compatible service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#base_url DestinationMilvus#base_url}
  */
  readonly baseUrl: string;
  /**
  * The number of dimensions the embedding model is generating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#dimensions DestinationMilvus#dimensions}
  */
  readonly dimensions: number;
  /**
  * The name of the model to use for embedding. Default: "text-embedding-ada-002"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#model_name DestinationMilvus#model_name}
  */
  readonly modelName?: string;
}

export function destinationMilvusConfigurationEmbeddingOpenAiCompatibleToTerraform(struct?: DestinationMilvusConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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


export function destinationMilvusConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct?: DestinationMilvusConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationEmbeddingOpenAiCompatibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationEmbedding {
  /**
  * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#azure_open_ai DestinationMilvus#azure_open_ai}
  */
  readonly azureOpenAi?: DestinationMilvusConfigurationEmbeddingAzureOpenAi;
  /**
  * Use the Cohere API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#cohere DestinationMilvus#cohere}
  */
  readonly cohere?: DestinationMilvusConfigurationEmbeddingCohere;
  /**
  * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#fake DestinationMilvus#fake}
  */
  readonly fake?: DestinationMilvusConfigurationEmbeddingFake;
  /**
  * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#open_ai DestinationMilvus#open_ai}
  */
  readonly openAi?: DestinationMilvusConfigurationEmbeddingOpenAi;
  /**
  * Use a service that's compatible with the OpenAI API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#open_ai_compatible DestinationMilvus#open_ai_compatible}
  */
  readonly openAiCompatible?: DestinationMilvusConfigurationEmbeddingOpenAiCompatible;
}

export function destinationMilvusConfigurationEmbeddingToTerraform(struct?: DestinationMilvusConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_open_ai: destinationMilvusConfigurationEmbeddingAzureOpenAiToTerraform(struct!.azureOpenAi),
    cohere: destinationMilvusConfigurationEmbeddingCohereToTerraform(struct!.cohere),
    fake: destinationMilvusConfigurationEmbeddingFakeToTerraform(struct!.fake),
    open_ai: destinationMilvusConfigurationEmbeddingOpenAiToTerraform(struct!.openAi),
    open_ai_compatible: destinationMilvusConfigurationEmbeddingOpenAiCompatibleToTerraform(struct!.openAiCompatible),
  }
}


export function destinationMilvusConfigurationEmbeddingToHclTerraform(struct?: DestinationMilvusConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_open_ai: {
      value: destinationMilvusConfigurationEmbeddingAzureOpenAiToHclTerraform(struct!.azureOpenAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationEmbeddingAzureOpenAi",
    },
    cohere: {
      value: destinationMilvusConfigurationEmbeddingCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationEmbeddingCohere",
    },
    fake: {
      value: destinationMilvusConfigurationEmbeddingFakeToHclTerraform(struct!.fake),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationEmbeddingFake",
    },
    open_ai: {
      value: destinationMilvusConfigurationEmbeddingOpenAiToHclTerraform(struct!.openAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationEmbeddingOpenAi",
    },
    open_ai_compatible: {
      value: destinationMilvusConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct!.openAiCompatible),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationEmbeddingOpenAiCompatible",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationEmbeddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationEmbedding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationEmbedding | cdktf.IResolvable | undefined) {
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
  private _azureOpenAi = new DestinationMilvusConfigurationEmbeddingAzureOpenAiOutputReference(this, "azure_open_ai");
  public get azureOpenAi() {
    return this._azureOpenAi;
  }
  public putAzureOpenAi(value: DestinationMilvusConfigurationEmbeddingAzureOpenAi) {
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
  private _cohere = new DestinationMilvusConfigurationEmbeddingCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: DestinationMilvusConfigurationEmbeddingCohere) {
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
  private _fake = new DestinationMilvusConfigurationEmbeddingFakeOutputReference(this, "fake");
  public get fake() {
    return this._fake;
  }
  public putFake(value: DestinationMilvusConfigurationEmbeddingFake) {
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
  private _openAi = new DestinationMilvusConfigurationEmbeddingOpenAiOutputReference(this, "open_ai");
  public get openAi() {
    return this._openAi;
  }
  public putOpenAi(value: DestinationMilvusConfigurationEmbeddingOpenAi) {
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
  private _openAiCompatible = new DestinationMilvusConfigurationEmbeddingOpenAiCompatibleOutputReference(this, "open_ai_compatible");
  public get openAiCompatible() {
    return this._openAiCompatible;
  }
  public putOpenAiCompatible(value: DestinationMilvusConfigurationEmbeddingOpenAiCompatible) {
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
export interface DestinationMilvusConfigurationIndexingAuthApiToken {
  /**
  * API Token for the Milvus instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#token DestinationMilvus#token}
  */
  readonly token: string;
}

export function destinationMilvusConfigurationIndexingAuthApiTokenToTerraform(struct?: DestinationMilvusConfigurationIndexingAuthApiToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function destinationMilvusConfigurationIndexingAuthApiTokenToHclTerraform(struct?: DestinationMilvusConfigurationIndexingAuthApiToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationIndexingAuthApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationIndexingAuthApiToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusConfigurationIndexingAuthApiToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface DestinationMilvusConfigurationIndexingAuthNoAuth {
}

export function destinationMilvusConfigurationIndexingAuthNoAuthToTerraform(struct?: DestinationMilvusConfigurationIndexingAuthNoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMilvusConfigurationIndexingAuthNoAuthToHclTerraform(struct?: DestinationMilvusConfigurationIndexingAuthNoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMilvusConfigurationIndexingAuthNoAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationIndexingAuthNoAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusConfigurationIndexingAuthNoAuth | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationIndexingAuthUsernamePassword {
  /**
  * Password for the Milvus instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#password DestinationMilvus#password}
  */
  readonly password: string;
  /**
  * Username for the Milvus instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#username DestinationMilvus#username}
  */
  readonly username: string;
}

export function destinationMilvusConfigurationIndexingAuthUsernamePasswordToTerraform(struct?: DestinationMilvusConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function destinationMilvusConfigurationIndexingAuthUsernamePasswordToHclTerraform(struct?: DestinationMilvusConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable): any {
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationIndexingAuthUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
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
}
export interface DestinationMilvusConfigurationIndexingAuth {
  /**
  * Authenticate using an API token (suitable for Zilliz Cloud)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#api_token DestinationMilvus#api_token}
  */
  readonly apiToken?: DestinationMilvusConfigurationIndexingAuthApiToken;
  /**
  * Do not authenticate (suitable for locally running test clusters, do not use for clusters with public IP addresses)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#no_auth DestinationMilvus#no_auth}
  */
  readonly noAuth?: DestinationMilvusConfigurationIndexingAuthNoAuth;
  /**
  * Authenticate using username and password (suitable for self-managed Milvus clusters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#username_password DestinationMilvus#username_password}
  */
  readonly usernamePassword?: DestinationMilvusConfigurationIndexingAuthUsernamePassword;
}

export function destinationMilvusConfigurationIndexingAuthToTerraform(struct?: DestinationMilvusConfigurationIndexingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: destinationMilvusConfigurationIndexingAuthApiTokenToTerraform(struct!.apiToken),
    no_auth: destinationMilvusConfigurationIndexingAuthNoAuthToTerraform(struct!.noAuth),
    username_password: destinationMilvusConfigurationIndexingAuthUsernamePasswordToTerraform(struct!.usernamePassword),
  }
}


export function destinationMilvusConfigurationIndexingAuthToHclTerraform(struct?: DestinationMilvusConfigurationIndexingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: destinationMilvusConfigurationIndexingAuthApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationIndexingAuthApiToken",
    },
    no_auth: {
      value: destinationMilvusConfigurationIndexingAuthNoAuthToHclTerraform(struct!.noAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationIndexingAuthNoAuth",
    },
    username_password: {
      value: destinationMilvusConfigurationIndexingAuthUsernamePasswordToHclTerraform(struct!.usernamePassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationIndexingAuthUsernamePassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationIndexingAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationIndexingAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    if (this._noAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuth = this._noAuth?.internalValue;
    }
    if (this._usernamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusConfigurationIndexingAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken.internalValue = undefined;
      this._noAuth.internalValue = undefined;
      this._usernamePassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken.internalValue = value.apiToken;
      this._noAuth.internalValue = value.noAuth;
      this._usernamePassword.internalValue = value.usernamePassword;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new DestinationMilvusConfigurationIndexingAuthApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: DestinationMilvusConfigurationIndexingAuthApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }

  // no_auth - computed: false, optional: true, required: false
  private _noAuth = new DestinationMilvusConfigurationIndexingAuthNoAuthOutputReference(this, "no_auth");
  public get noAuth() {
    return this._noAuth;
  }
  public putNoAuth(value: DestinationMilvusConfigurationIndexingAuthNoAuth) {
    this._noAuth.internalValue = value;
  }
  public resetNoAuth() {
    this._noAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthInput() {
    return this._noAuth.internalValue;
  }

  // username_password - computed: false, optional: true, required: false
  private _usernamePassword = new DestinationMilvusConfigurationIndexingAuthUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: DestinationMilvusConfigurationIndexingAuthUsernamePassword) {
    this._usernamePassword.internalValue = value;
  }
  public resetUsernamePassword() {
    this._usernamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordInput() {
    return this._usernamePassword.internalValue;
  }
}
export interface DestinationMilvusConfigurationIndexing {
  /**
  * Authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#auth DestinationMilvus#auth}
  */
  readonly auth: DestinationMilvusConfigurationIndexingAuth;
  /**
  * The collection to load data into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#collection DestinationMilvus#collection}
  */
  readonly collection: string;
  /**
  * The database to connect to. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#db DestinationMilvus#db}
  */
  readonly db?: string;
  /**
  * The public endpoint of the Milvus instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#host DestinationMilvus#host}
  */
  readonly host: string;
  /**
  * The field in the entity that contains the embedded text. Default: "text"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#text_field DestinationMilvus#text_field}
  */
  readonly textField?: string;
  /**
  * The field in the entity that contains the vector. Default: "vector"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#vector_field DestinationMilvus#vector_field}
  */
  readonly vectorField?: string;
}

export function destinationMilvusConfigurationIndexingToTerraform(struct?: DestinationMilvusConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: destinationMilvusConfigurationIndexingAuthToTerraform(struct!.auth),
    collection: cdktf.stringToTerraform(struct!.collection),
    db: cdktf.stringToTerraform(struct!.db),
    host: cdktf.stringToTerraform(struct!.host),
    text_field: cdktf.stringToTerraform(struct!.textField),
    vector_field: cdktf.stringToTerraform(struct!.vectorField),
  }
}


export function destinationMilvusConfigurationIndexingToHclTerraform(struct?: DestinationMilvusConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: destinationMilvusConfigurationIndexingAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationIndexingAuth",
    },
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
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
    text_field: {
      value: cdktf.stringToHclTerraform(struct!.textField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_field: {
      value: cdktf.stringToHclTerraform(struct!.vectorField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationIndexingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationIndexing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    if (this._vectorField !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorField = this._vectorField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusConfigurationIndexing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._collection = undefined;
      this._db = undefined;
      this._host = undefined;
      this._textField = undefined;
      this._vectorField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._collection = value.collection;
      this._db = value.db;
      this._host = value.host;
      this._textField = value.textField;
      this._vectorField = value.vectorField;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DestinationMilvusConfigurationIndexingAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DestinationMilvusConfigurationIndexingAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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

  // db - computed: true, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
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

  // vector_field - computed: true, optional: true, required: false
  private _vectorField?: string; 
  public get vectorField() {
    return this.getStringAttribute('vector_field');
  }
  public set vectorField(value: string) {
    this._vectorField = value;
  }
  public resetVectorField() {
    this._vectorField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorFieldInput() {
    return this._vectorField;
  }
}
export interface DestinationMilvusConfigurationProcessingFieldNameMappings {
  /**
  * The field name in the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#from_field DestinationMilvus#from_field}
  */
  readonly fromField: string;
  /**
  * The field name to use in the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#to_field DestinationMilvus#to_field}
  */
  readonly toField: string;
}

export function destinationMilvusConfigurationProcessingFieldNameMappingsToTerraform(struct?: DestinationMilvusConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field: cdktf.stringToTerraform(struct!.fromField),
    to_field: cdktf.stringToTerraform(struct!.toField),
  }
}


export function destinationMilvusConfigurationProcessingFieldNameMappingsToHclTerraform(struct?: DestinationMilvusConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationProcessingFieldNameMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationMilvusConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined) {
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

export class DestinationMilvusConfigurationProcessingFieldNameMappingsList extends cdktf.ComplexList {
  public internalValue? : DestinationMilvusConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable

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
  public get(index: number): DestinationMilvusConfigurationProcessingFieldNameMappingsOutputReference {
    return new DestinationMilvusConfigurationProcessingFieldNameMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader {
  /**
  * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#split_level DestinationMilvus#split_level}
  */
  readonly splitLevel?: number;
}

export function destinationMilvusConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_level: cdktf.numberToTerraform(struct!.splitLevel),
  }
}


export function destinationMilvusConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage {
  /**
  * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#language DestinationMilvus#language}
  */
  readonly language: string;
}

export function destinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function destinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationProcessingTextSplitterBySeparator {
  /**
  * Whether to keep the separator in the resulting chunks. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#keep_separator DestinationMilvus#keep_separator}
  */
  readonly keepSeparator?: boolean | cdktf.IResolvable;
  /**
  * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#separators DestinationMilvus#separators}
  */
  readonly separators?: string[];
}

export function destinationMilvusConfigurationProcessingTextSplitterBySeparatorToTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_separator: cdktf.booleanToTerraform(struct!.keepSeparator),
    separators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.separators),
  }
}


export function destinationMilvusConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
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

export class DestinationMilvusConfigurationProcessingTextSplitterBySeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined) {
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
export interface DestinationMilvusConfigurationProcessingTextSplitter {
  /**
  * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#by_markdown_header DestinationMilvus#by_markdown_header}
  */
  readonly byMarkdownHeader?: DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader;
  /**
  * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#by_programming_language DestinationMilvus#by_programming_language}
  */
  readonly byProgrammingLanguage?: DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage;
  /**
  * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#by_separator DestinationMilvus#by_separator}
  */
  readonly bySeparator?: DestinationMilvusConfigurationProcessingTextSplitterBySeparator;
}

export function destinationMilvusConfigurationProcessingTextSplitterToTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by_markdown_header: destinationMilvusConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct!.byMarkdownHeader),
    by_programming_language: destinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct!.byProgrammingLanguage),
    by_separator: destinationMilvusConfigurationProcessingTextSplitterBySeparatorToTerraform(struct!.bySeparator),
  }
}


export function destinationMilvusConfigurationProcessingTextSplitterToHclTerraform(struct?: DestinationMilvusConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by_markdown_header: {
      value: destinationMilvusConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct!.byMarkdownHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader",
    },
    by_programming_language: {
      value: destinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct!.byProgrammingLanguage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage",
    },
    by_separator: {
      value: destinationMilvusConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct!.bySeparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationProcessingTextSplitterBySeparator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationProcessingTextSplitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined) {
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
  private _byMarkdownHeader = new DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference(this, "by_markdown_header");
  public get byMarkdownHeader() {
    return this._byMarkdownHeader;
  }
  public putByMarkdownHeader(value: DestinationMilvusConfigurationProcessingTextSplitterByMarkdownHeader) {
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
  private _byProgrammingLanguage = new DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference(this, "by_programming_language");
  public get byProgrammingLanguage() {
    return this._byProgrammingLanguage;
  }
  public putByProgrammingLanguage(value: DestinationMilvusConfigurationProcessingTextSplitterByProgrammingLanguage) {
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
  private _bySeparator = new DestinationMilvusConfigurationProcessingTextSplitterBySeparatorOutputReference(this, "by_separator");
  public get bySeparator() {
    return this._bySeparator;
  }
  public putBySeparator(value: DestinationMilvusConfigurationProcessingTextSplitterBySeparator) {
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
export interface DestinationMilvusConfigurationProcessing {
  /**
  * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#chunk_overlap DestinationMilvus#chunk_overlap}
  */
  readonly chunkOverlap?: number;
  /**
  * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#chunk_size DestinationMilvus#chunk_size}
  */
  readonly chunkSize: number;
  /**
  * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#field_name_mappings DestinationMilvus#field_name_mappings}
  */
  readonly fieldNameMappings?: DestinationMilvusConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable;
  /**
  * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#metadata_fields DestinationMilvus#metadata_fields}
  */
  readonly metadataFields?: string[];
  /**
  * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#text_fields DestinationMilvus#text_fields}
  */
  readonly textFields?: string[];
  /**
  * Split text fields into chunks based on the specified method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#text_splitter DestinationMilvus#text_splitter}
  */
  readonly textSplitter?: DestinationMilvusConfigurationProcessingTextSplitter;
}

export function destinationMilvusConfigurationProcessingToTerraform(struct?: DestinationMilvusConfigurationProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_overlap: cdktf.numberToTerraform(struct!.chunkOverlap),
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    field_name_mappings: cdktf.listMapper(destinationMilvusConfigurationProcessingFieldNameMappingsToTerraform, false)(struct!.fieldNameMappings),
    metadata_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataFields),
    text_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.textFields),
    text_splitter: destinationMilvusConfigurationProcessingTextSplitterToTerraform(struct!.textSplitter),
  }
}


export function destinationMilvusConfigurationProcessingToHclTerraform(struct?: DestinationMilvusConfigurationProcessing | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(destinationMilvusConfigurationProcessingFieldNameMappingsToHclTerraform, false)(struct!.fieldNameMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationMilvusConfigurationProcessingFieldNameMappingsList",
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
      value: destinationMilvusConfigurationProcessingTextSplitterToHclTerraform(struct!.textSplitter),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationProcessingTextSplitter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfigurationProcessing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfigurationProcessing | cdktf.IResolvable | undefined) {
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
  private _fieldNameMappings = new DestinationMilvusConfigurationProcessingFieldNameMappingsList(this, "field_name_mappings", false);
  public get fieldNameMappings() {
    return this._fieldNameMappings;
  }
  public putFieldNameMappings(value: DestinationMilvusConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable) {
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
  private _textSplitter = new DestinationMilvusConfigurationProcessingTextSplitterOutputReference(this, "text_splitter");
  public get textSplitter() {
    return this._textSplitter;
  }
  public putTextSplitter(value: DestinationMilvusConfigurationProcessingTextSplitter) {
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
export interface DestinationMilvusConfiguration {
  /**
  * Embedding configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#embedding DestinationMilvus#embedding}
  */
  readonly embedding: DestinationMilvusConfigurationEmbedding;
  /**
  * Indexing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#indexing DestinationMilvus#indexing}
  */
  readonly indexing: DestinationMilvusConfigurationIndexing;
  /**
  * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#omit_raw_text DestinationMilvus#omit_raw_text}
  */
  readonly omitRawText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#processing DestinationMilvus#processing}
  */
  readonly processing: DestinationMilvusConfigurationProcessing;
}

export function destinationMilvusConfigurationToTerraform(struct?: DestinationMilvusConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding: destinationMilvusConfigurationEmbeddingToTerraform(struct!.embedding),
    indexing: destinationMilvusConfigurationIndexingToTerraform(struct!.indexing),
    omit_raw_text: cdktf.booleanToTerraform(struct!.omitRawText),
    processing: destinationMilvusConfigurationProcessingToTerraform(struct!.processing),
  }
}


export function destinationMilvusConfigurationToHclTerraform(struct?: DestinationMilvusConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding: {
      value: destinationMilvusConfigurationEmbeddingToHclTerraform(struct!.embedding),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationEmbedding",
    },
    indexing: {
      value: destinationMilvusConfigurationIndexingToHclTerraform(struct!.indexing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationIndexing",
    },
    omit_raw_text: {
      value: cdktf.booleanToHclTerraform(struct!.omitRawText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processing: {
      value: destinationMilvusConfigurationProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMilvusConfigurationProcessing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMilvusConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationMilvusConfiguration | cdktf.IResolvable | undefined) {
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
  private _embedding = new DestinationMilvusConfigurationEmbeddingOutputReference(this, "embedding");
  public get embedding() {
    return this._embedding;
  }
  public putEmbedding(value: DestinationMilvusConfigurationEmbedding) {
    this._embedding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingInput() {
    return this._embedding.internalValue;
  }

  // indexing - computed: false, optional: false, required: true
  private _indexing = new DestinationMilvusConfigurationIndexingOutputReference(this, "indexing");
  public get indexing() {
    return this._indexing;
  }
  public putIndexing(value: DestinationMilvusConfigurationIndexing) {
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
  private _processing = new DestinationMilvusConfigurationProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: DestinationMilvusConfigurationProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }
}
export interface DestinationMilvusResourceAllocationDefault {
}

export function destinationMilvusResourceAllocationDefaultToTerraform(struct?: DestinationMilvusResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMilvusResourceAllocationDefaultToHclTerraform(struct?: DestinationMilvusResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMilvusResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusResourceAllocationDefault | undefined) {
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
export interface DestinationMilvusResourceAllocationJobSpecificResourceRequirements {
}

export function destinationMilvusResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationMilvusResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMilvusResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationMilvusResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMilvusResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationMilvusResourceAllocationJobSpecific {
}

export function destinationMilvusResourceAllocationJobSpecificToTerraform(struct?: DestinationMilvusResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMilvusResourceAllocationJobSpecificToHclTerraform(struct?: DestinationMilvusResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMilvusResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationMilvusResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationMilvusResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationMilvusResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationMilvusResourceAllocationJobSpecificOutputReference {
    return new DestinationMilvusResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationMilvusResourceAllocation {
}

export function destinationMilvusResourceAllocationToTerraform(struct?: DestinationMilvusResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMilvusResourceAllocationToHclTerraform(struct?: DestinationMilvusResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMilvusResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMilvusResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMilvusResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationMilvusResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationMilvusResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus airbyte_destination_milvus}
*/
export class DestinationMilvus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_milvus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationMilvus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationMilvus to import
  * @param importFromId The id of the existing DestinationMilvus that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationMilvus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_milvus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_milvus airbyte_destination_milvus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationMilvusConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationMilvusConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_milvus',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
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
  private _configuration = new DestinationMilvusConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationMilvusConfiguration) {
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
  private _resourceAllocation = new DestinationMilvusResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationMilvusConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationMilvusConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationMilvusConfiguration",
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
