// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationWeaviateConfig extends cdktf.TerraformMetaArguments {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#configuration DestinationWeaviate#configuration}
  */
  readonly configuration: DestinationWeaviateConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#definition_id DestinationWeaviate#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#name DestinationWeaviate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#workspace_id DestinationWeaviate#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationWeaviateConfigurationEmbeddingAzureOpenAi {
  /**
  * The base URL for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#api_base DestinationWeaviate#api_base}
  */
  readonly apiBase: string;
  /**
  * The deployment for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#deployment DestinationWeaviate#deployment}
  */
  readonly deployment: string;
  /**
  * The API key for your Azure OpenAI resource.  You can find this in the Azure portal under your Azure OpenAI resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#openai_key DestinationWeaviate#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationWeaviateConfigurationEmbeddingAzureOpenAiToTerraform(struct?: DestinationWeaviateConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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


export function destinationWeaviateConfigurationEmbeddingAzureOpenAiToHclTerraform(struct?: DestinationWeaviateConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationEmbeddingAzureOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationEmbeddingAzureOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationEmbeddingCohere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#cohere_key DestinationWeaviate#cohere_key}
  */
  readonly cohereKey: string;
}

export function destinationWeaviateConfigurationEmbeddingCohereToTerraform(struct?: DestinationWeaviateConfigurationEmbeddingCohere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cohere_key: cdktf.stringToTerraform(struct!.cohereKey),
  }
}


export function destinationWeaviateConfigurationEmbeddingCohereToHclTerraform(struct?: DestinationWeaviateConfigurationEmbeddingCohere | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationEmbeddingCohereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbeddingCohere | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationEmbeddingCohere | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationEmbeddingFake {
}

export function destinationWeaviateConfigurationEmbeddingFakeToTerraform(struct?: DestinationWeaviateConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationWeaviateConfigurationEmbeddingFakeToHclTerraform(struct?: DestinationWeaviateConfigurationEmbeddingFake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationWeaviateConfigurationEmbeddingFakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbeddingFake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateConfigurationEmbeddingFake | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationEmbeddingFromField {
  /**
  * The number of dimensions the embedding model is generating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#dimensions DestinationWeaviate#dimensions}
  */
  readonly dimensions: number;
  /**
  * Name of the field in the record that contains the embedding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#field_name DestinationWeaviate#field_name}
  */
  readonly fieldName: string;
}

export function destinationWeaviateConfigurationEmbeddingFromFieldToTerraform(struct?: DestinationWeaviateConfigurationEmbeddingFromField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.numberToTerraform(struct!.dimensions),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
  }
}


export function destinationWeaviateConfigurationEmbeddingFromFieldToHclTerraform(struct?: DestinationWeaviateConfigurationEmbeddingFromField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.numberToHclTerraform(struct!.dimensions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationEmbeddingFromFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbeddingFromField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateConfigurationEmbeddingFromField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._fieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._fieldName = value.fieldName;
    }
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

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }
}
export interface DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding {
}

export function destinationWeaviateConfigurationEmbeddingNoExternalEmbeddingToTerraform(struct?: DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationWeaviateConfigurationEmbeddingNoExternalEmbeddingToHclTerraform(struct?: DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationWeaviateConfigurationEmbeddingNoExternalEmbeddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationEmbeddingOpenAi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#openai_key DestinationWeaviate#openai_key}
  */
  readonly openaiKey: string;
}

export function destinationWeaviateConfigurationEmbeddingOpenAiToTerraform(struct?: DestinationWeaviateConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openai_key: cdktf.stringToTerraform(struct!.openaiKey),
  }
}


export function destinationWeaviateConfigurationEmbeddingOpenAiToHclTerraform(struct?: DestinationWeaviateConfigurationEmbeddingOpenAi | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationEmbeddingOpenAiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationEmbeddingOpenAi | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationEmbeddingOpenAiCompatible {
  /**
  * Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#api_key DestinationWeaviate#api_key}
  */
  readonly apiKey?: string;
  /**
  * The base URL for your OpenAI-compatible service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#base_url DestinationWeaviate#base_url}
  */
  readonly baseUrl: string;
  /**
  * The number of dimensions the embedding model is generating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#dimensions DestinationWeaviate#dimensions}
  */
  readonly dimensions: number;
  /**
  * The name of the model to use for embedding. Default: "text-embedding-ada-002"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#model_name DestinationWeaviate#model_name}
  */
  readonly modelName?: string;
}

export function destinationWeaviateConfigurationEmbeddingOpenAiCompatibleToTerraform(struct?: DestinationWeaviateConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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


export function destinationWeaviateConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct?: DestinationWeaviateConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationEmbeddingOpenAiCompatibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationEmbeddingOpenAiCompatible | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationEmbedding {
  /**
  * Use the Azure-hosted OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#azure_open_ai DestinationWeaviate#azure_open_ai}
  */
  readonly azureOpenAi?: DestinationWeaviateConfigurationEmbeddingAzureOpenAi;
  /**
  * Use the Cohere API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#cohere DestinationWeaviate#cohere}
  */
  readonly cohere?: DestinationWeaviateConfigurationEmbeddingCohere;
  /**
  * Use a fake embedding made out of random vectors with 1536 embedding dimensions. This is useful for testing the data pipeline without incurring any costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#fake DestinationWeaviate#fake}
  */
  readonly fake?: DestinationWeaviateConfigurationEmbeddingFake;
  /**
  * Use a field in the record as the embedding. This is useful if you already have an embedding for your data and want to store it in the vector store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#from_field DestinationWeaviate#from_field}
  */
  readonly fromField?: DestinationWeaviateConfigurationEmbeddingFromField;
  /**
  * Do not calculate and pass embeddings to Weaviate. Suitable for clusters with configured vectorizers to calculate embeddings within Weaviate or for classes that should only support regular text search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#no_external_embedding DestinationWeaviate#no_external_embedding}
  */
  readonly noExternalEmbedding?: DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding;
  /**
  * Use the OpenAI API to embed text. This option is using the text-embedding-ada-002 model with 1536 embedding dimensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#open_ai DestinationWeaviate#open_ai}
  */
  readonly openAi?: DestinationWeaviateConfigurationEmbeddingOpenAi;
  /**
  * Use a service that's compatible with the OpenAI API to embed text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#open_ai_compatible DestinationWeaviate#open_ai_compatible}
  */
  readonly openAiCompatible?: DestinationWeaviateConfigurationEmbeddingOpenAiCompatible;
}

export function destinationWeaviateConfigurationEmbeddingToTerraform(struct?: DestinationWeaviateConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_open_ai: destinationWeaviateConfigurationEmbeddingAzureOpenAiToTerraform(struct!.azureOpenAi),
    cohere: destinationWeaviateConfigurationEmbeddingCohereToTerraform(struct!.cohere),
    fake: destinationWeaviateConfigurationEmbeddingFakeToTerraform(struct!.fake),
    from_field: destinationWeaviateConfigurationEmbeddingFromFieldToTerraform(struct!.fromField),
    no_external_embedding: destinationWeaviateConfigurationEmbeddingNoExternalEmbeddingToTerraform(struct!.noExternalEmbedding),
    open_ai: destinationWeaviateConfigurationEmbeddingOpenAiToTerraform(struct!.openAi),
    open_ai_compatible: destinationWeaviateConfigurationEmbeddingOpenAiCompatibleToTerraform(struct!.openAiCompatible),
  }
}


export function destinationWeaviateConfigurationEmbeddingToHclTerraform(struct?: DestinationWeaviateConfigurationEmbedding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_open_ai: {
      value: destinationWeaviateConfigurationEmbeddingAzureOpenAiToHclTerraform(struct!.azureOpenAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbeddingAzureOpenAi",
    },
    cohere: {
      value: destinationWeaviateConfigurationEmbeddingCohereToHclTerraform(struct!.cohere),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbeddingCohere",
    },
    fake: {
      value: destinationWeaviateConfigurationEmbeddingFakeToHclTerraform(struct!.fake),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbeddingFake",
    },
    from_field: {
      value: destinationWeaviateConfigurationEmbeddingFromFieldToHclTerraform(struct!.fromField),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbeddingFromField",
    },
    no_external_embedding: {
      value: destinationWeaviateConfigurationEmbeddingNoExternalEmbeddingToHclTerraform(struct!.noExternalEmbedding),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding",
    },
    open_ai: {
      value: destinationWeaviateConfigurationEmbeddingOpenAiToHclTerraform(struct!.openAi),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbeddingOpenAi",
    },
    open_ai_compatible: {
      value: destinationWeaviateConfigurationEmbeddingOpenAiCompatibleToHclTerraform(struct!.openAiCompatible),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbeddingOpenAiCompatible",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationEmbeddingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationEmbedding | cdktf.IResolvable | undefined {
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
    if (this._fromField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromField = this._fromField?.internalValue;
    }
    if (this._noExternalEmbedding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noExternalEmbedding = this._noExternalEmbedding?.internalValue;
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

  public set internalValue(value: DestinationWeaviateConfigurationEmbedding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureOpenAi.internalValue = undefined;
      this._cohere.internalValue = undefined;
      this._fake.internalValue = undefined;
      this._fromField.internalValue = undefined;
      this._noExternalEmbedding.internalValue = undefined;
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
      this._fromField.internalValue = value.fromField;
      this._noExternalEmbedding.internalValue = value.noExternalEmbedding;
      this._openAi.internalValue = value.openAi;
      this._openAiCompatible.internalValue = value.openAiCompatible;
    }
  }

  // azure_open_ai - computed: false, optional: true, required: false
  private _azureOpenAi = new DestinationWeaviateConfigurationEmbeddingAzureOpenAiOutputReference(this, "azure_open_ai");
  public get azureOpenAi() {
    return this._azureOpenAi;
  }
  public putAzureOpenAi(value: DestinationWeaviateConfigurationEmbeddingAzureOpenAi) {
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
  private _cohere = new DestinationWeaviateConfigurationEmbeddingCohereOutputReference(this, "cohere");
  public get cohere() {
    return this._cohere;
  }
  public putCohere(value: DestinationWeaviateConfigurationEmbeddingCohere) {
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
  private _fake = new DestinationWeaviateConfigurationEmbeddingFakeOutputReference(this, "fake");
  public get fake() {
    return this._fake;
  }
  public putFake(value: DestinationWeaviateConfigurationEmbeddingFake) {
    this._fake.internalValue = value;
  }
  public resetFake() {
    this._fake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeInput() {
    return this._fake.internalValue;
  }

  // from_field - computed: false, optional: true, required: false
  private _fromField = new DestinationWeaviateConfigurationEmbeddingFromFieldOutputReference(this, "from_field");
  public get fromField() {
    return this._fromField;
  }
  public putFromField(value: DestinationWeaviateConfigurationEmbeddingFromField) {
    this._fromField.internalValue = value;
  }
  public resetFromField() {
    this._fromField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromFieldInput() {
    return this._fromField.internalValue;
  }

  // no_external_embedding - computed: false, optional: true, required: false
  private _noExternalEmbedding = new DestinationWeaviateConfigurationEmbeddingNoExternalEmbeddingOutputReference(this, "no_external_embedding");
  public get noExternalEmbedding() {
    return this._noExternalEmbedding;
  }
  public putNoExternalEmbedding(value: DestinationWeaviateConfigurationEmbeddingNoExternalEmbedding) {
    this._noExternalEmbedding.internalValue = value;
  }
  public resetNoExternalEmbedding() {
    this._noExternalEmbedding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noExternalEmbeddingInput() {
    return this._noExternalEmbedding.internalValue;
  }

  // open_ai - computed: false, optional: true, required: false
  private _openAi = new DestinationWeaviateConfigurationEmbeddingOpenAiOutputReference(this, "open_ai");
  public get openAi() {
    return this._openAi;
  }
  public putOpenAi(value: DestinationWeaviateConfigurationEmbeddingOpenAi) {
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
  private _openAiCompatible = new DestinationWeaviateConfigurationEmbeddingOpenAiCompatibleOutputReference(this, "open_ai_compatible");
  public get openAiCompatible() {
    return this._openAiCompatible;
  }
  public putOpenAiCompatible(value: DestinationWeaviateConfigurationEmbeddingOpenAiCompatible) {
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
export interface DestinationWeaviateConfigurationIndexingAdditionalHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#header_key DestinationWeaviate#header_key}
  */
  readonly headerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#value DestinationWeaviate#value}
  */
  readonly value: string;
}

export function destinationWeaviateConfigurationIndexingAdditionalHeadersToTerraform(struct?: DestinationWeaviateConfigurationIndexingAdditionalHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key: cdktf.stringToTerraform(struct!.headerKey),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function destinationWeaviateConfigurationIndexingAdditionalHeadersToHclTerraform(struct?: DestinationWeaviateConfigurationIndexingAdditionalHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key: {
      value: cdktf.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationIndexingAdditionalHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationWeaviateConfigurationIndexingAdditionalHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateConfigurationIndexingAdditionalHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerKey = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerKey = value.headerKey;
      this._value = value.value;
    }
  }

  // header_key - computed: false, optional: false, required: true
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DestinationWeaviateConfigurationIndexingAdditionalHeadersList extends cdktf.ComplexList {
  public internalValue? : DestinationWeaviateConfigurationIndexingAdditionalHeaders[] | cdktf.IResolvable

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
  public get(index: number): DestinationWeaviateConfigurationIndexingAdditionalHeadersOutputReference {
    return new DestinationWeaviateConfigurationIndexingAdditionalHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationWeaviateConfigurationIndexingAuthApiToken {
  /**
  * API Token for the Weaviate instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#token DestinationWeaviate#token}
  */
  readonly token: string;
}

export function destinationWeaviateConfigurationIndexingAuthApiTokenToTerraform(struct?: DestinationWeaviateConfigurationIndexingAuthApiToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function destinationWeaviateConfigurationIndexingAuthApiTokenToHclTerraform(struct?: DestinationWeaviateConfigurationIndexingAuthApiToken | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationIndexingAuthApiTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationIndexingAuthApiToken | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationIndexingAuthApiToken | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationIndexingAuthNoAuthentication {
}

export function destinationWeaviateConfigurationIndexingAuthNoAuthenticationToTerraform(struct?: DestinationWeaviateConfigurationIndexingAuthNoAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationWeaviateConfigurationIndexingAuthNoAuthenticationToHclTerraform(struct?: DestinationWeaviateConfigurationIndexingAuthNoAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationWeaviateConfigurationIndexingAuthNoAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationIndexingAuthNoAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateConfigurationIndexingAuthNoAuthentication | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationIndexingAuthUsernamePassword {
  /**
  * Password for the Weaviate cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#password DestinationWeaviate#password}
  */
  readonly password: string;
  /**
  * Username for the Weaviate cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#username DestinationWeaviate#username}
  */
  readonly username: string;
}

export function destinationWeaviateConfigurationIndexingAuthUsernamePasswordToTerraform(struct?: DestinationWeaviateConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function destinationWeaviateConfigurationIndexingAuthUsernamePasswordToHclTerraform(struct?: DestinationWeaviateConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationIndexingAuthUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationIndexingAuthUsernamePassword | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationIndexingAuth {
  /**
  * Authenticate using an API token (suitable for Weaviate Cloud)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#api_token DestinationWeaviate#api_token}
  */
  readonly apiToken?: DestinationWeaviateConfigurationIndexingAuthApiToken;
  /**
  * Do not authenticate (suitable for locally running test clusters, do not use for clusters with public IP addresses)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#no_authentication DestinationWeaviate#no_authentication}
  */
  readonly noAuthentication?: DestinationWeaviateConfigurationIndexingAuthNoAuthentication;
  /**
  * Authenticate using username and password (suitable for self-managed Weaviate clusters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#username_password DestinationWeaviate#username_password}
  */
  readonly usernamePassword?: DestinationWeaviateConfigurationIndexingAuthUsernamePassword;
}

export function destinationWeaviateConfigurationIndexingAuthToTerraform(struct?: DestinationWeaviateConfigurationIndexingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: destinationWeaviateConfigurationIndexingAuthApiTokenToTerraform(struct!.apiToken),
    no_authentication: destinationWeaviateConfigurationIndexingAuthNoAuthenticationToTerraform(struct!.noAuthentication),
    username_password: destinationWeaviateConfigurationIndexingAuthUsernamePasswordToTerraform(struct!.usernamePassword),
  }
}


export function destinationWeaviateConfigurationIndexingAuthToHclTerraform(struct?: DestinationWeaviateConfigurationIndexingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: destinationWeaviateConfigurationIndexingAuthApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationIndexingAuthApiToken",
    },
    no_authentication: {
      value: destinationWeaviateConfigurationIndexingAuthNoAuthenticationToHclTerraform(struct!.noAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationIndexingAuthNoAuthentication",
    },
    username_password: {
      value: destinationWeaviateConfigurationIndexingAuthUsernamePasswordToHclTerraform(struct!.usernamePassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationIndexingAuthUsernamePassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationIndexingAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationIndexingAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    if (this._noAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuthentication = this._noAuthentication?.internalValue;
    }
    if (this._usernamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateConfigurationIndexingAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken.internalValue = undefined;
      this._noAuthentication.internalValue = undefined;
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
      this._noAuthentication.internalValue = value.noAuthentication;
      this._usernamePassword.internalValue = value.usernamePassword;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new DestinationWeaviateConfigurationIndexingAuthApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: DestinationWeaviateConfigurationIndexingAuthApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }

  // no_authentication - computed: false, optional: true, required: false
  private _noAuthentication = new DestinationWeaviateConfigurationIndexingAuthNoAuthenticationOutputReference(this, "no_authentication");
  public get noAuthentication() {
    return this._noAuthentication;
  }
  public putNoAuthentication(value: DestinationWeaviateConfigurationIndexingAuthNoAuthentication) {
    this._noAuthentication.internalValue = value;
  }
  public resetNoAuthentication() {
    this._noAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthenticationInput() {
    return this._noAuthentication.internalValue;
  }

  // username_password - computed: false, optional: true, required: false
  private _usernamePassword = new DestinationWeaviateConfigurationIndexingAuthUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: DestinationWeaviateConfigurationIndexingAuthUsernamePassword) {
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
export interface DestinationWeaviateConfigurationIndexing {
  /**
  * Additional HTTP headers to send with every request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#additional_headers DestinationWeaviate#additional_headers}
  */
  readonly additionalHeaders?: DestinationWeaviateConfigurationIndexingAdditionalHeaders[] | cdktf.IResolvable;
  /**
  * Authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#auth DestinationWeaviate#auth}
  */
  readonly auth: DestinationWeaviateConfigurationIndexingAuth;
  /**
  * The number of records to send to Weaviate in each batch. Default: 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#batch_size DestinationWeaviate#batch_size}
  */
  readonly batchSize?: number;
  /**
  * The vectorizer to use if new classes need to be created. Default: "none"; must be one of ["none", "text2vec-cohere", "text2vec-huggingface", "text2vec-openai", "text2vec-palm", "text2vec-contextionary", "text2vec-transformers", "text2vec-gpt4all"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#default_vectorizer DestinationWeaviate#default_vectorizer}
  */
  readonly defaultVectorizer?: string;
  /**
  * The public endpoint of the Weaviate cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#host DestinationWeaviate#host}
  */
  readonly host: string;
  /**
  * The tenant ID to use for multi tenancy. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#tenant_id DestinationWeaviate#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The field in the object that contains the embedded text. Default: "text"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#text_field DestinationWeaviate#text_field}
  */
  readonly textField?: string;
}

export function destinationWeaviateConfigurationIndexingToTerraform(struct?: DestinationWeaviateConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_headers: cdktf.listMapper(destinationWeaviateConfigurationIndexingAdditionalHeadersToTerraform, false)(struct!.additionalHeaders),
    auth: destinationWeaviateConfigurationIndexingAuthToTerraform(struct!.auth),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    default_vectorizer: cdktf.stringToTerraform(struct!.defaultVectorizer),
    host: cdktf.stringToTerraform(struct!.host),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    text_field: cdktf.stringToTerraform(struct!.textField),
  }
}


export function destinationWeaviateConfigurationIndexingToHclTerraform(struct?: DestinationWeaviateConfigurationIndexing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_headers: {
      value: cdktf.listMapperHcl(destinationWeaviateConfigurationIndexingAdditionalHeadersToHclTerraform, false)(struct!.additionalHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationWeaviateConfigurationIndexingAdditionalHeadersList",
    },
    auth: {
      value: destinationWeaviateConfigurationIndexingAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationIndexingAuth",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_vectorizer: {
      value: cdktf.stringToHclTerraform(struct!.defaultVectorizer),
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationIndexingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationIndexing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalHeaders = this._additionalHeaders?.internalValue;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._defaultVectorizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVectorizer = this._defaultVectorizer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._textField !== undefined) {
      hasAnyValues = true;
      internalValueResult.textField = this._textField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateConfigurationIndexing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalHeaders.internalValue = undefined;
      this._auth.internalValue = undefined;
      this._batchSize = undefined;
      this._defaultVectorizer = undefined;
      this._host = undefined;
      this._tenantId = undefined;
      this._textField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalHeaders.internalValue = value.additionalHeaders;
      this._auth.internalValue = value.auth;
      this._batchSize = value.batchSize;
      this._defaultVectorizer = value.defaultVectorizer;
      this._host = value.host;
      this._tenantId = value.tenantId;
      this._textField = value.textField;
    }
  }

  // additional_headers - computed: false, optional: true, required: false
  private _additionalHeaders = new DestinationWeaviateConfigurationIndexingAdditionalHeadersList(this, "additional_headers", false);
  public get additionalHeaders() {
    return this._additionalHeaders;
  }
  public putAdditionalHeaders(value: DestinationWeaviateConfigurationIndexingAdditionalHeaders[] | cdktf.IResolvable) {
    this._additionalHeaders.internalValue = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders.internalValue;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new DestinationWeaviateConfigurationIndexingAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DestinationWeaviateConfigurationIndexingAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // default_vectorizer - computed: true, optional: true, required: false
  private _defaultVectorizer?: string; 
  public get defaultVectorizer() {
    return this.getStringAttribute('default_vectorizer');
  }
  public set defaultVectorizer(value: string) {
    this._defaultVectorizer = value;
  }
  public resetDefaultVectorizer() {
    this._defaultVectorizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVectorizerInput() {
    return this._defaultVectorizer;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
}
export interface DestinationWeaviateConfigurationProcessingFieldNameMappings {
  /**
  * The field name in the source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#from_field DestinationWeaviate#from_field}
  */
  readonly fromField: string;
  /**
  * The field name to use in the destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#to_field DestinationWeaviate#to_field}
  */
  readonly toField: string;
}

export function destinationWeaviateConfigurationProcessingFieldNameMappingsToTerraform(struct?: DestinationWeaviateConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_field: cdktf.stringToTerraform(struct!.fromField),
    to_field: cdktf.stringToTerraform(struct!.toField),
  }
}


export function destinationWeaviateConfigurationProcessingFieldNameMappingsToHclTerraform(struct?: DestinationWeaviateConfigurationProcessingFieldNameMappings | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationProcessingFieldNameMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationWeaviateConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationProcessingFieldNameMappings | cdktf.IResolvable | undefined) {
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

export class DestinationWeaviateConfigurationProcessingFieldNameMappingsList extends cdktf.ComplexList {
  public internalValue? : DestinationWeaviateConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable

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
  public get(index: number): DestinationWeaviateConfigurationProcessingFieldNameMappingsOutputReference {
    return new DestinationWeaviateConfigurationProcessingFieldNameMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader {
  /**
  * Level of markdown headers to split text fields by. Headings down to the specified level will be used as split points. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#split_level DestinationWeaviate#split_level}
  */
  readonly splitLevel?: number;
}

export function destinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_level: cdktf.numberToTerraform(struct!.splitLevel),
  }
}


export function destinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage {
  /**
  * Split code in suitable places based on the programming language. must be one of ["cpp", "go", "java", "js", "php", "proto", "python", "rst", "ruby", "rust", "scala", "swift", "markdown", "latex", "html", "sol"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#language DestinationWeaviate#language}
  */
  readonly language: string;
}

export function destinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language: cdktf.stringToTerraform(struct!.language),
  }
}


export function destinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationProcessingTextSplitterBySeparator {
  /**
  * Whether to keep the separator in the resulting chunks. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#keep_separator DestinationWeaviate#keep_separator}
  */
  readonly keepSeparator?: boolean | cdktf.IResolvable;
  /**
  * List of separator strings to split text fields by. The separator itself needs to be wrapped in double quotes, e.g. to split by the dot character, use ".". To split by a newline, use "\n".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#separators DestinationWeaviate#separators}
  */
  readonly separators?: string[];
}

export function destinationWeaviateConfigurationProcessingTextSplitterBySeparatorToTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_separator: cdktf.booleanToTerraform(struct!.keepSeparator),
    separators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.separators),
  }
}


export function destinationWeaviateConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable): any {
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

export class DestinationWeaviateConfigurationProcessingTextSplitterBySeparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationProcessingTextSplitterBySeparator | cdktf.IResolvable | undefined) {
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
export interface DestinationWeaviateConfigurationProcessingTextSplitter {
  /**
  * Split the text by Markdown headers down to the specified header level. If the chunk size fits multiple sections, they will be combined into a single chunk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#by_markdown_header DestinationWeaviate#by_markdown_header}
  */
  readonly byMarkdownHeader?: DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader;
  /**
  * Split the text by suitable delimiters based on the programming language. This is useful for splitting code into chunks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#by_programming_language DestinationWeaviate#by_programming_language}
  */
  readonly byProgrammingLanguage?: DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage;
  /**
  * Split the text by the list of separators until the chunk size is reached, using the earlier mentioned separators where possible. This is useful for splitting text fields by paragraphs, sentences, words, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#by_separator DestinationWeaviate#by_separator}
  */
  readonly bySeparator?: DestinationWeaviateConfigurationProcessingTextSplitterBySeparator;
}

export function destinationWeaviateConfigurationProcessingTextSplitterToTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by_markdown_header: destinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeaderToTerraform(struct!.byMarkdownHeader),
    by_programming_language: destinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguageToTerraform(struct!.byProgrammingLanguage),
    by_separator: destinationWeaviateConfigurationProcessingTextSplitterBySeparatorToTerraform(struct!.bySeparator),
  }
}


export function destinationWeaviateConfigurationProcessingTextSplitterToHclTerraform(struct?: DestinationWeaviateConfigurationProcessingTextSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by_markdown_header: {
      value: destinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeaderToHclTerraform(struct!.byMarkdownHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader",
    },
    by_programming_language: {
      value: destinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguageToHclTerraform(struct!.byProgrammingLanguage),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage",
    },
    by_separator: {
      value: destinationWeaviateConfigurationProcessingTextSplitterBySeparatorToHclTerraform(struct!.bySeparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationProcessingTextSplitterBySeparator",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationProcessingTextSplitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationProcessingTextSplitter | cdktf.IResolvable | undefined) {
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
  private _byMarkdownHeader = new DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeaderOutputReference(this, "by_markdown_header");
  public get byMarkdownHeader() {
    return this._byMarkdownHeader;
  }
  public putByMarkdownHeader(value: DestinationWeaviateConfigurationProcessingTextSplitterByMarkdownHeader) {
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
  private _byProgrammingLanguage = new DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguageOutputReference(this, "by_programming_language");
  public get byProgrammingLanguage() {
    return this._byProgrammingLanguage;
  }
  public putByProgrammingLanguage(value: DestinationWeaviateConfigurationProcessingTextSplitterByProgrammingLanguage) {
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
  private _bySeparator = new DestinationWeaviateConfigurationProcessingTextSplitterBySeparatorOutputReference(this, "by_separator");
  public get bySeparator() {
    return this._bySeparator;
  }
  public putBySeparator(value: DestinationWeaviateConfigurationProcessingTextSplitterBySeparator) {
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
export interface DestinationWeaviateConfigurationProcessing {
  /**
  * Size of overlap between chunks in tokens to store in vector store to better capture relevant context. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#chunk_overlap DestinationWeaviate#chunk_overlap}
  */
  readonly chunkOverlap?: number;
  /**
  * Size of chunks in tokens to store in vector store (make sure it is not too big for the context if your LLM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#chunk_size DestinationWeaviate#chunk_size}
  */
  readonly chunkSize: number;
  /**
  * List of fields to rename. Not applicable for nested fields, but can be used to rename fields already flattened via dot notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#field_name_mappings DestinationWeaviate#field_name_mappings}
  */
  readonly fieldNameMappings?: DestinationWeaviateConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable;
  /**
  * List of fields in the record that should be stored as metadata. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered metadata fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array. When specifying nested paths, all matching values are flattened into an array set to a field named by the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#metadata_fields DestinationWeaviate#metadata_fields}
  */
  readonly metadataFields?: string[];
  /**
  * List of fields in the record that should be used to calculate the embedding. The field list is applied to all streams in the same way and non-existing fields are ignored. If none are defined, all fields are considered text fields. When specifying text fields, you can access nested fields in the record by using dot notation, e.g. `user.name` will access the `name` field in the `user` object. It's also possible to use wildcards to access all fields in an object, e.g. `users.*.name` will access all `names` fields in all entries of the `users` array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#text_fields DestinationWeaviate#text_fields}
  */
  readonly textFields?: string[];
  /**
  * Split text fields into chunks based on the specified method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#text_splitter DestinationWeaviate#text_splitter}
  */
  readonly textSplitter?: DestinationWeaviateConfigurationProcessingTextSplitter;
}

export function destinationWeaviateConfigurationProcessingToTerraform(struct?: DestinationWeaviateConfigurationProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunk_overlap: cdktf.numberToTerraform(struct!.chunkOverlap),
    chunk_size: cdktf.numberToTerraform(struct!.chunkSize),
    field_name_mappings: cdktf.listMapper(destinationWeaviateConfigurationProcessingFieldNameMappingsToTerraform, false)(struct!.fieldNameMappings),
    metadata_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataFields),
    text_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.textFields),
    text_splitter: destinationWeaviateConfigurationProcessingTextSplitterToTerraform(struct!.textSplitter),
  }
}


export function destinationWeaviateConfigurationProcessingToHclTerraform(struct?: DestinationWeaviateConfigurationProcessing | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(destinationWeaviateConfigurationProcessingFieldNameMappingsToHclTerraform, false)(struct!.fieldNameMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DestinationWeaviateConfigurationProcessingFieldNameMappingsList",
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
      value: destinationWeaviateConfigurationProcessingTextSplitterToHclTerraform(struct!.textSplitter),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationProcessingTextSplitter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfigurationProcessing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfigurationProcessing | cdktf.IResolvable | undefined) {
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
  private _fieldNameMappings = new DestinationWeaviateConfigurationProcessingFieldNameMappingsList(this, "field_name_mappings", false);
  public get fieldNameMappings() {
    return this._fieldNameMappings;
  }
  public putFieldNameMappings(value: DestinationWeaviateConfigurationProcessingFieldNameMappings[] | cdktf.IResolvable) {
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
  private _textSplitter = new DestinationWeaviateConfigurationProcessingTextSplitterOutputReference(this, "text_splitter");
  public get textSplitter() {
    return this._textSplitter;
  }
  public putTextSplitter(value: DestinationWeaviateConfigurationProcessingTextSplitter) {
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
export interface DestinationWeaviateConfiguration {
  /**
  * Embedding configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#embedding DestinationWeaviate#embedding}
  */
  readonly embedding: DestinationWeaviateConfigurationEmbedding;
  /**
  * Indexing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#indexing DestinationWeaviate#indexing}
  */
  readonly indexing: DestinationWeaviateConfigurationIndexing;
  /**
  * Do not store the text that gets embedded along with the vector and the metadata in the destination. If set to true, only the vector and the metadata will be stored - in this case raw text for LLM use cases needs to be retrieved from another source. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#omit_raw_text DestinationWeaviate#omit_raw_text}
  */
  readonly omitRawText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#processing DestinationWeaviate#processing}
  */
  readonly processing: DestinationWeaviateConfigurationProcessing;
}

export function destinationWeaviateConfigurationToTerraform(struct?: DestinationWeaviateConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding: destinationWeaviateConfigurationEmbeddingToTerraform(struct!.embedding),
    indexing: destinationWeaviateConfigurationIndexingToTerraform(struct!.indexing),
    omit_raw_text: cdktf.booleanToTerraform(struct!.omitRawText),
    processing: destinationWeaviateConfigurationProcessingToTerraform(struct!.processing),
  }
}


export function destinationWeaviateConfigurationToHclTerraform(struct?: DestinationWeaviateConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding: {
      value: destinationWeaviateConfigurationEmbeddingToHclTerraform(struct!.embedding),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationEmbedding",
    },
    indexing: {
      value: destinationWeaviateConfigurationIndexingToHclTerraform(struct!.indexing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationIndexing",
    },
    omit_raw_text: {
      value: cdktf.booleanToHclTerraform(struct!.omitRawText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    processing: {
      value: destinationWeaviateConfigurationProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationWeaviateConfigurationProcessing",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationWeaviateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DestinationWeaviateConfiguration | cdktf.IResolvable | undefined) {
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
  private _embedding = new DestinationWeaviateConfigurationEmbeddingOutputReference(this, "embedding");
  public get embedding() {
    return this._embedding;
  }
  public putEmbedding(value: DestinationWeaviateConfigurationEmbedding) {
    this._embedding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingInput() {
    return this._embedding.internalValue;
  }

  // indexing - computed: false, optional: false, required: true
  private _indexing = new DestinationWeaviateConfigurationIndexingOutputReference(this, "indexing");
  public get indexing() {
    return this._indexing;
  }
  public putIndexing(value: DestinationWeaviateConfigurationIndexing) {
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
  private _processing = new DestinationWeaviateConfigurationProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: DestinationWeaviateConfigurationProcessing) {
    this._processing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }
}
export interface DestinationWeaviateResourceAllocationDefault {
}

export function destinationWeaviateResourceAllocationDefaultToTerraform(struct?: DestinationWeaviateResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationWeaviateResourceAllocationDefaultToHclTerraform(struct?: DestinationWeaviateResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationWeaviateResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateResourceAllocationDefault | undefined) {
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
export interface DestinationWeaviateResourceAllocationJobSpecificResourceRequirements {
}

export function destinationWeaviateResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationWeaviateResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationWeaviateResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationWeaviateResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationWeaviateResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface DestinationWeaviateResourceAllocationJobSpecific {
}

export function destinationWeaviateResourceAllocationJobSpecificToTerraform(struct?: DestinationWeaviateResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationWeaviateResourceAllocationJobSpecificToHclTerraform(struct?: DestinationWeaviateResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationWeaviateResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DestinationWeaviateResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new DestinationWeaviateResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationWeaviateResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): DestinationWeaviateResourceAllocationJobSpecificOutputReference {
    return new DestinationWeaviateResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationWeaviateResourceAllocation {
}

export function destinationWeaviateResourceAllocationToTerraform(struct?: DestinationWeaviateResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationWeaviateResourceAllocationToHclTerraform(struct?: DestinationWeaviateResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationWeaviateResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationWeaviateResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationWeaviateResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationWeaviateResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationWeaviateResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate airbyte_destination_weaviate}
*/
export class DestinationWeaviate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_weaviate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationWeaviate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationWeaviate to import
  * @param importFromId The id of the existing DestinationWeaviate that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationWeaviate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_weaviate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_weaviate airbyte_destination_weaviate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationWeaviateConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationWeaviateConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_weaviate',
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
  private _configuration = new DestinationWeaviateConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationWeaviateConfiguration) {
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
  private _resourceAllocation = new DestinationWeaviateResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: destinationWeaviateConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationWeaviateConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationWeaviateConfiguration",
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
