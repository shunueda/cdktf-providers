// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationPgvectorConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#configuration DestinationPgvector#configuration}
  */
  readonly configuration: DestinationPgvectorConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#definition_id DestinationPgvector#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#name DestinationPgvector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#workspace_id DestinationPgvector#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationPgvectorConfigurationEmbeddingAzureOpenAi {
  /**
  * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#api_base DestinationPgvector#api_base}
  */
  readonly apiBase: string;
  /**
  * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#deployment DestinationPgvector#deployment}
  */
  readonly deployment: string;
  /**
  * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#openai_key DestinationPgvector#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationPgvectorConfigurationEmbeddingAzureOpenAiToTerraform(struct?: DestinationPgvectorConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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


export function destinationPgvectorConfigurationEmbeddingAzureOpenAiToHclTerraform(struct?: DestinationPgvectorConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationEmbeddingAzureOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationEmbeddingCohere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#cohere_key DestinationPgvector#cohere_key}
  */
  readonly cohereKey: string;
}

export function destinationPgvectorConfigurationEmbeddingCohereToTerraform(struct?: DestinationPgvectorConfigurationEmbeddingCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohere_key: cdktf.stringToTerraform(struct!.cohereKey),
  }
}


export function destinationPgvectorConfigurationEmbeddingCohereToHclTerraform(struct?: DestinationPgvectorConfigurationEmbeddingCohere | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationEmbeddingCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationEmbeddingCohere | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationEmbeddingCohere | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationEmbeddingFake {
}

export function destinationPgvectorConfigurationEmbeddingFakeToTerraform(struct?: DestinationPgvectorConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPgvectorConfigurationEmbeddingFakeToHclTerraform(struct?: DestinationPgvectorConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPgvectorConfigurationEmbeddingFakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationEmbeddingFake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPgvectorConfigurationEmbeddingFake | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationEmbeddingOpenAi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#openai_key DestinationPgvector#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationPgvectorConfigurationEmbeddingOpenAiToTerraform(struct?: DestinationPgvectorConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openai_key: cdktf.stringToTerraform(struct!.openaiKey),
  }
}


export function destinationPgvectorConfigurationEmbeddingOpenAiToHclTerraform(struct?: DestinationPgvectorConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationEmbeddingOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationEmbeddingOpenAiCompatible {
  /**
  * Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#api_key DestinationPgvector#api_key}
  */
  readonly apiKey?: string;
  /**
  * The base URL for your OpenAI-compatible service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#base_url DestinationPgvector#base_url}
  */
  readonly baseUrl: string;
  /**
  * The number of dimensions the embedding model is generating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#dimensions DestinationPgvector#dimensions}
  */
  readonly dimensions: number;
  /**
  * The name of the model to use for embedding. Default: "text-embedding-ada-002"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#model_name DestinationPgvector#model_name}
  */
  readonly modelName?: string;
}

export function destinationPgvectorConfigurationEmbeddingOpenAiCompatibleToTerraform(struct?: DestinationPgvectorConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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


export function destinationPgvectorConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct?: DestinationPgvectorConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationEmbeddingOpenAiCompatibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationEmbedding {
  /**
  * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#azure_open_ai DestinationPgvector#azure_open_ai}
  */
  readonly azureOpenAi?: DestinationPgvectorConfigurationEmbeddingAzureOpenAi;
  /**
  * Use the Cohere API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#cohere DestinationPgvector#cohere}
  */
  readonly cohere?: DestinationPgvectorConfigurationEmbeddingCohere;
  /**
  * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#fake DestinationPgvector#fake}
  */
  readonly fake?: DestinationPgvectorConfigurationEmbeddingFake;
  /**
  * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#open_ai DestinationPgvector#open_ai}
  */
  readonly openAi?: DestinationPgvectorConfigurationEmbeddingOpenAi;
  /**
  * Use a service that's compatible with the OpenAI API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#open_ai_compatible DestinationPgvector#open_ai_compatible}
  */
  readonly openAiCompatible?: DestinationPgvectorConfigurationEmbeddingOpenAiCompatible;
}

export function destinationPgvectorConfigurationEmbeddingToTerraform(struct?: DestinationPgvectorConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_open_ai: destinationPgvectorConfigurationEmbeddingAzureOpenAiToTerraform(struct!.azureOpenAi),
    cohere: destinationPgvectorConfigurationEmbeddingCohereToTerraform(struct!.cohere),
    fake: destinationPgvectorConfigurationEmbeddingFakeToTerraform(struct!.fake),
    open_ai: destinationPgvectorConfigurationEmbeddingOpenAiToTerraform(struct!.openAi),
    open_ai_compatible: destinationPgvectorConfigurationEmbeddingOpenAiCompatibleToTerraform(struct!.openAiCompatible),
  }
}


export function destinationPgvectorConfigurationEmbeddingToHclTerraform(struct?: DestinationPgvectorConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_open_ai: {
      value: destinationPgvectorConfigurationEmbeddingAzureOpenAiToHclTerraform(struct!.azureOpenAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationEmbeddingAzureOpenAi",
    },
    cohere: {
      value: destinationPgvectorConfigurationEmbeddingCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationEmbeddingCohere",
    },
    fake: {
      value: destinationPgvectorConfigurationEmbeddingFakeToHclTerraform(struct!.fake),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationEmbeddingFake",
    },
    open_ai: {
      value: destinationPgvectorConfigurationEmbeddingOpenAiToHclTerraform(struct!.openAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationEmbeddingOpenAi",
    },
    open_ai_compatible: {
      value: destinationPgvectorConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct!.openAiCompatible),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationEmbeddingOpenAiCompatible",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationPgvectorConfigurationEmbeddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationEmbedding | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationEmbedding | cdktf.IResolvable | undefined) {
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
  private _azureOpenAi = new DestinationPgvectorConfigurationEmbeddingAzureOpenAiOutputReference(this, "azure_open_ai");
  public get azureOpenAi() {
    return this._azureOpenAi;
  }
  public putAzureOpenAi(value: DestinationPgvectorConfigurationEmbeddingAzureOpenAi) {
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
  private _cohere = new DestinationPgvectorConfigurationEmbeddingCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: DestinationPgvectorConfigurationEmbeddingCohere) {
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
  private _fake = new DestinationPgvectorConfigurationEmbeddingFakeOutputReference(this, "fake");
  public get fake() {
    return this._fake;
  }
  public putFake(value: DestinationPgvectorConfigurationEmbeddingFake) {
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
  private _openAi = new DestinationPgvectorConfigurationEmbeddingOpenAiOutputReference(this, "open_ai");
  public get openAi() {
    return this._openAi;
  }
  public putOpenAi(value: DestinationPgvectorConfigurationEmbeddingOpenAi) {
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
  private _openAiCompatible = new DestinationPgvectorConfigurationEmbeddingOpenAiCompatibleOutputReference(this, "open_ai_compatible");
  public get openAiCompatible() {
    return this._openAiCompatible;
  }
  public putOpenAiCompatible(value: DestinationPgvectorConfigurationEmbeddingOpenAiCompatible) {
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
export interface DestinationPgvectorConfigurationIndexingCredentials {
  /**
  * Enter the password you want to use to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#password DestinationPgvector#password}
  */
  readonly password: string;
}

export function destinationPgvectorConfigurationIndexingCredentialsToTerraform(struct?: DestinationPgvectorConfigurationIndexingCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function destinationPgvectorConfigurationIndexingCredentialsToHclTerraform(struct?: DestinationPgvectorConfigurationIndexingCredentials | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationIndexingCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationIndexingCredentials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationIndexingCredentials | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationIndexing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#credentials DestinationPgvector#credentials}
  */
  readonly credentials: DestinationPgvectorConfigurationIndexingCredentials;
  /**
  * Enter the name of the database that you want to sync data into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#database DestinationPgvector#database}
  */
  readonly database: string;
  /**
  * Enter the name of the default schema. Default: "public"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#default_schema DestinationPgvector#default_schema}
  */
  readonly defaultSchema?: string;
  /**
  * Enter the account name you want to use to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#host DestinationPgvector#host}
  */
  readonly host: string;
  /**
  * Enter the port you want to use to access the database. Default: 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#port DestinationPgvector#port}
  */
  readonly port?: number;
  /**
  * Enter the name of the user you want to use to access the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#username DestinationPgvector#username}
  */
  readonly username: string;
}

export function destinationPgvectorConfigurationIndexingToTerraform(struct?: DestinationPgvectorConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: destinationPgvectorConfigurationIndexingCredentialsToTerraform(struct!.credentials),
    database: cdktf.stringToTerraform(struct!.database),
    default_schema: cdktf.stringToTerraform(struct!.defaultSchema),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function destinationPgvectorConfigurationIndexingToHclTerraform(struct?: DestinationPgvectorConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: destinationPgvectorConfigurationIndexingCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationIndexingCredentials",
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DestinationPgvectorConfigurationIndexingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationIndexing | cdktf.IResolvable | undefined {
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
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPgvectorConfigurationIndexing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._database = undefined;
      this._defaultSchema = undefined;
      this._host = undefined;
      this._port = undefined;
      this._username = undefined;
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
      this._port = value.port;
      this._username = value.username;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new DestinationPgvectorConfigurationIndexingCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DestinationPgvectorConfigurationIndexingCredentials) {
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

  // default_schema - computed: true, optional: true, required: false
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  public resetDefaultSchema() {
    this._defaultSchema = undefined;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
export interface DestinationPgvectorConfigurationProcessingFieldNameMappings {
  /**
  * The field name in the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#from_field DestinationPgvector#from_field}
  */
  readonly fromField: string;
  /**
  * The field name to use in the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#to_field DestinationPgvector#to_field}
  */
  readonly toField: string;
}

export function destinationPgvectorConfigurationProcessingFieldNameMappingsToTerraform(struct?: DestinationPgvectorConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field: cdktf.stringToTerraform(struct!.fromField),
    to_field: cdktf.stringToTerraform(struct!.toField),
  }
}


export function destinationPgvectorConfigurationProcessingFieldNameMappingsToHclTerraform(struct?: DestinationPgvectorConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationProcessingFieldNameMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationPgvectorConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined) {
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

export class DestinationPgvectorConfigurationProcessingFieldNameMappingsList extends cdktf.ComplexList {
  public internalValue? : DestinationPgvectorConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable

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
  public get(index: number): DestinationPgvectorConfigurationProcessingFieldNameMappingsOutputReference {
    return new DestinationPgvectorConfigurationProcessingFieldNameMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader {
  /**
  * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#split_level DestinationPgvector#split_level}
  */
  readonly splitLevel?: number;
}

export function destinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_level: cdktf.numberToTerraform(struct!.splitLevel),
  }
}


export function destinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage {
  /**
  * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#language DestinationPgvector#language}
  */
  readonly language: string;
}

export function destinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function destinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationProcessingTextSplitterBySeparator {
  /**
  * Whether to keep the separator in the resulting chunks. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#keep_separator DestinationPgvector#keep_separator}
  */
  readonly keepSeparator?: boolean | cdktf.IResolvable;
  /**
  * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#separators DestinationPgvector#separators}
  */
  readonly separators?: string[];
}

export function destinationPgvectorConfigurationProcessingTextSplitterBySeparatorToTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_separator: cdktf.booleanToTerraform(struct!.keepSeparator),
    separators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.separators),
  }
}


export function destinationPgvectorConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
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

export class DestinationPgvectorConfigurationProcessingTextSplitterBySeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined) {
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
export interface DestinationPgvectorConfigurationProcessingTextSplitter {
  /**
  * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#by_markdown_header DestinationPgvector#by_markdown_header}
  */
  readonly byMarkdownHeader?: DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader;
  /**
  * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#by_programming_language DestinationPgvector#by_programming_language}
  */
  readonly byProgrammingLanguage?: DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage;
  /**
  * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#by_separator DestinationPgvector#by_separator}
  */
  readonly bySeparator?: DestinationPgvectorConfigurationProcessingTextSplitterBySeparator;
}

export function destinationPgvectorConfigurationProcessingTextSplitterToTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by_markdown_header: destinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct!.byMarkdownHeader),
    by_programming_language: destinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct!.byProgrammingLanguage),
    by_separator: destinationPgvectorConfigurationProcessingTextSplitterBySeparatorToTerraform(struct!.bySeparator),
  }
}


export function destinationPgvectorConfigurationProcessingTextSplitterToHclTerraform(struct?: DestinationPgvectorConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by_markdown_header: {
      value: destinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct!.byMarkdownHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader",
    },
    by_programming_language: {
      value: destinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct!.byProgrammingLanguage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage",
    },
    by_separator: {
      value: destinationPgvectorConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct!.bySeparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationProcessingTextSplitterBySeparator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationPgvectorConfigurationProcessingTextSplitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined) {
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
  private _byMarkdownHeader = new DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference(this, "by_markdown_header");
  public get byMarkdownHeader() {
    return this._byMarkdownHeader;
  }
  public putByMarkdownHeader(value: DestinationPgvectorConfigurationProcessingTextSplitterByMarkdownHeader) {
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
  private _byProgrammingLanguage = new DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference(this, "by_programming_language");
  public get byProgrammingLanguage() {
    return this._byProgrammingLanguage;
  }
  public putByProgrammingLanguage(value: DestinationPgvectorConfigurationProcessingTextSplitterByProgrammingLanguage) {
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
  private _bySeparator = new DestinationPgvectorConfigurationProcessingTextSplitterBySeparatorOutputReference(this, "by_separator");
  public get bySeparator() {
    return this._bySeparator;
  }
  public putBySeparator(value: DestinationPgvectorConfigurationProcessingTextSplitterBySeparator) {
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
export interface DestinationPgvectorConfigurationProcessing {
  /**
  * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#chunk_overlap DestinationPgvector#chunk_overlap}
  */
  readonly chunkOverlap?: number;
  /**
  * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#chunk_size DestinationPgvector#chunk_size}
  */
  readonly chunkSize: number;
  /**
  * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#field_name_mappings DestinationPgvector#field_name_mappings}
  */
  readonly fieldNameMappings?: DestinationPgvectorConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable;
  /**
  * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#metadata_fields DestinationPgvector#metadata_fields}
  */
  readonly metadataFields?: string[];
  /**
  * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#text_fields DestinationPgvector#text_fields}
  */
  readonly textFields?: string[];
  /**
  * Split text fields into chunks based on the specified method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#text_splitter DestinationPgvector#text_splitter}
  */
  readonly textSplitter?: DestinationPgvectorConfigurationProcessingTextSplitter;
}

export function destinationPgvectorConfigurationProcessingToTerraform(struct?: DestinationPgvectorConfigurationProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_overlap: cdktf.numberToTerraform(struct!.chunkOverlap),
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    field_name_mappings: cdktf.listMapper(destinationPgvectorConfigurationProcessingFieldNameMappingsToTerraform, false)(struct!.fieldNameMappings),
    metadata_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataFields),
    text_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.textFields),
    text_splitter: destinationPgvectorConfigurationProcessingTextSplitterToTerraform(struct!.textSplitter),
  }
}


export function destinationPgvectorConfigurationProcessingToHclTerraform(struct?: DestinationPgvectorConfigurationProcessing | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(destinationPgvectorConfigurationProcessingFieldNameMappingsToHclTerraform, false)(struct!.fieldNameMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationPgvectorConfigurationProcessingFieldNameMappingsList",
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
      value: destinationPgvectorConfigurationProcessingTextSplitterToHclTerraform(struct!.textSplitter),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationProcessingTextSplitter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationPgvectorConfigurationProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfigurationProcessing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfigurationProcessing | cdktf.IResolvable | undefined) {
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
  private _fieldNameMappings = new DestinationPgvectorConfigurationProcessingFieldNameMappingsList(this, "field_name_mappings", false);
  public get fieldNameMappings() {
    return this._fieldNameMappings;
  }
  public putFieldNameMappings(value: DestinationPgvectorConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable) {
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
  private _textSplitter = new DestinationPgvectorConfigurationProcessingTextSplitterOutputReference(this, "text_splitter");
  public get textSplitter() {
    return this._textSplitter;
  }
  public putTextSplitter(value: DestinationPgvectorConfigurationProcessingTextSplitter) {
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
export interface DestinationPgvectorConfiguration {
  /**
  * Embedding configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#embedding DestinationPgvector#embedding}
  */
  readonly embedding: DestinationPgvectorConfigurationEmbedding;
  /**
  * Postgres can be used to store vector data and retrieve embeddings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#indexing DestinationPgvector#indexing}
  */
  readonly indexing: DestinationPgvectorConfigurationIndexing;
  /**
  * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#omit_raw_text DestinationPgvector#omit_raw_text}
  */
  readonly omitRawText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#processing DestinationPgvector#processing}
  */
  readonly processing: DestinationPgvectorConfigurationProcessing;
}

export function destinationPgvectorConfigurationToTerraform(struct?: DestinationPgvectorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding: destinationPgvectorConfigurationEmbeddingToTerraform(struct!.embedding),
    indexing: destinationPgvectorConfigurationIndexingToTerraform(struct!.indexing),
    omit_raw_text: cdktf.booleanToTerraform(struct!.omitRawText),
    processing: destinationPgvectorConfigurationProcessingToTerraform(struct!.processing),
  }
}


export function destinationPgvectorConfigurationToHclTerraform(struct?: DestinationPgvectorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding: {
      value: destinationPgvectorConfigurationEmbeddingToHclTerraform(struct!.embedding),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationEmbedding",
    },
    indexing: {
      value: destinationPgvectorConfigurationIndexingToHclTerraform(struct!.indexing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationIndexing",
    },
    omit_raw_text: {
      value: cdktf.booleanToHclTerraform(struct!.omitRawText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processing: {
      value: destinationPgvectorConfigurationProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationPgvectorConfigurationProcessing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationPgvectorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationPgvectorConfiguration | cdktf.IResolvable | undefined) {
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
  private _embedding = new DestinationPgvectorConfigurationEmbeddingOutputReference(this, "embedding");
  public get embedding() {
    return this._embedding;
  }
  public putEmbedding(value: DestinationPgvectorConfigurationEmbedding) {
    this._embedding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingInput() {
    return this._embedding.internalValue;
  }

  // indexing - computed: false, optional: false, required: true
  private _indexing = new DestinationPgvectorConfigurationIndexingOutputReference(this, "indexing");
  public get indexing() {
    return this._indexing;
  }
  public putIndexing(value: DestinationPgvectorConfigurationIndexing) {
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
  private _processing = new DestinationPgvectorConfigurationProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: DestinationPgvectorConfigurationProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }
}
export interface DestinationPgvectorResourceAllocationDefault {
}

export function destinationPgvectorResourceAllocationDefaultToTerraform(struct?: DestinationPgvectorResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPgvectorResourceAllocationDefaultToHclTerraform(struct?: DestinationPgvectorResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPgvectorResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPgvectorResourceAllocationDefault | undefined) {
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
export interface DestinationPgvectorResourceAllocationJobSpecificResourceRequirements {
}

export function destinationPgvectorResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationPgvectorResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPgvectorResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationPgvectorResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPgvectorResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPgvectorResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationPgvectorResourceAllocationJobSpecific {
}

export function destinationPgvectorResourceAllocationJobSpecificToTerraform(struct?: DestinationPgvectorResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPgvectorResourceAllocationJobSpecificToHclTerraform(struct?: DestinationPgvectorResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPgvectorResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationPgvectorResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPgvectorResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationPgvectorResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationPgvectorResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationPgvectorResourceAllocationJobSpecificOutputReference {
    return new DestinationPgvectorResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationPgvectorResourceAllocation {
}

export function destinationPgvectorResourceAllocationToTerraform(struct?: DestinationPgvectorResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationPgvectorResourceAllocationToHclTerraform(struct?: DestinationPgvectorResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationPgvectorResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationPgvectorResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationPgvectorResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationPgvectorResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationPgvectorResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector airbyte_destination_pgvector}
*/
export class DestinationPgvector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_pgvector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationPgvector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationPgvector to import
  * @param importFromId The id of the existing DestinationPgvector that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationPgvector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_pgvector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_pgvector airbyte_destination_pgvector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationPgvectorConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationPgvectorConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_pgvector',
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
  private _configuration = new DestinationPgvectorConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationPgvectorConfiguration) {
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
  private _resourceAllocation = new DestinationPgvectorResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationPgvectorConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationPgvectorConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationPgvectorConfiguration",
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
