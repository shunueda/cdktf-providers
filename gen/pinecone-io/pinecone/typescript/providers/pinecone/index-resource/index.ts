// https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether deletion protection for the index is enabled. You can use 'enabled', or 'disabled'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#deletion_protection Index#deletion_protection}
  */
  readonly deletionProtection?: string;
  /**
  * The dimensions of the vectors to be inserted in the index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#dimension Index#dimension}
  */
  readonly dimension?: number;
  /**
  * Specify the integrated inference embedding configuration for the index. Once set, the model cannot be changed. However, you can later update the embedding configuration—including field map, read parameters, and write parameters.
  * 
  * Refer to the [model guide](https://docs.pinecone.io/guides/inference/understanding-inference#embedding-models) for available models and details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#embed Index#embed}
  */
  readonly embed?: IndexEmbed;
  /**
  * The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the vector_type is dense, the metric defaults to 'cosine'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#metric Index#metric}
  */
  readonly metric?: string;
  /**
  * The name of the index to be created. The maximum length is 45 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#name Index#name}
  */
  readonly name: string;
  /**
  * Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#spec Index#spec}
  */
  readonly spec?: IndexSpec;
  /**
  * Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '', or '-'. Values must be alphanumeric, ';', '@', '', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#tags Index#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The index vector type. You can use 'dense' or 'sparse'. If 'dense', the vector dimension must be specified. If 'sparse', the vector dimension should not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#vector_type Index#vector_type}
  */
  readonly vectorType?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#timeouts Index#timeouts}
  */
  readonly timeouts?: IndexTimeouts;
}
export interface IndexEmbed {
  /**
  * Identifies the name of the text field from your document model that will be embedded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#field_map Index#field_map}
  */
  readonly fieldMap?: { [key: string]: string };
  /**
  * the name of the embedding model to use for the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#model Index#model}
  */
  readonly model?: string;
  /**
  * The read parameters for the embedding model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#read_parameters Index#read_parameters}
  */
  readonly readParameters?: { [key: string]: string };
  /**
  * The write parameters for the embedding model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#write_parameters Index#write_parameters}
  */
  readonly writeParameters?: { [key: string]: string };
}

export function indexEmbedToTerraform(struct?: IndexEmbed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldMap),
    model: cdktf.stringToTerraform(struct!.model),
    read_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.readParameters),
    write_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.writeParameters),
  }
}


export function indexEmbedToHclTerraform(struct?: IndexEmbed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.readParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    write_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.writeParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexEmbedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IndexEmbed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldMap = this._fieldMap;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._readParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.readParameters = this._readParameters;
    }
    if (this._writeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeParameters = this._writeParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexEmbed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldMap = undefined;
      this._model = undefined;
      this._readParameters = undefined;
      this._writeParameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldMap = value.fieldMap;
      this._model = value.model;
      this._readParameters = value.readParameters;
      this._writeParameters = value.writeParameters;
    }
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }

  // field_map - computed: true, optional: true, required: false
  private _fieldMap?: { [key: string]: string }; 
  public get fieldMap() {
    return this.getStringMapAttribute('field_map');
  }
  public set fieldMap(value: { [key: string]: string }) {
    this._fieldMap = value;
  }
  public resetFieldMap() {
    this._fieldMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldMapInput() {
    return this._fieldMap;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // read_parameters - computed: true, optional: true, required: false
  private _readParameters?: { [key: string]: string }; 
  public get readParameters() {
    return this.getStringMapAttribute('read_parameters');
  }
  public set readParameters(value: { [key: string]: string }) {
    this._readParameters = value;
  }
  public resetReadParameters() {
    this._readParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readParametersInput() {
    return this._readParameters;
  }

  // vector_type - computed: true, optional: false, required: false
  public get vectorType() {
    return this.getStringAttribute('vector_type');
  }

  // write_parameters - computed: true, optional: true, required: false
  private _writeParameters?: { [key: string]: string }; 
  public get writeParameters() {
    return this.getStringMapAttribute('write_parameters');
  }
  public set writeParameters(value: { [key: string]: string }) {
    this._writeParameters = value;
  }
  public resetWriteParameters() {
    this._writeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeParametersInput() {
    return this._writeParameters;
  }
}
export interface IndexSpecPodMetadataConfig {
  /**
  * The indexed fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#indexed Index#indexed}
  */
  readonly indexed: string[];
}

export function indexSpecPodMetadataConfigToTerraform(struct?: IndexSpecPodMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indexed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexed),
  }
}


export function indexSpecPodMetadataConfigToHclTerraform(struct?: IndexSpecPodMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indexed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.indexed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexSpecPodMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IndexSpecPodMetadataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indexed !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexed = this._indexed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexSpecPodMetadataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indexed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indexed = value.indexed;
    }
  }

  // indexed - computed: true, optional: false, required: true
  private _indexed?: string[]; 
  public get indexed() {
    return this.getListAttribute('indexed');
  }
  public set indexed(value: string[]) {
    this._indexed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedInput() {
    return this._indexed;
  }
}
export interface IndexSpecPod {
  /**
  * The environment where the index is hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#environment Index#environment}
  */
  readonly environment: string;
  /**
  * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#metadata_config Index#metadata_config}
  */
  readonly metadataConfig?: IndexSpecPodMetadataConfig;
  /**
  * The type of pod to use. One of s1, p1, or p2 appended with . and one of x1, x2, x4, or x8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#pod_type Index#pod_type}
  */
  readonly podType: string;
  /**
  * The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#replicas Index#replicas}
  */
  readonly replicas?: number;
  /**
  * The number of shards. Shards split your data across multiple pods so you can fit more data into an index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#shards Index#shards}
  */
  readonly shards?: number;
  /**
  * The name of the collection to create an index from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#source_collection Index#source_collection}
  */
  readonly sourceCollection?: string;
}

export function indexSpecPodToTerraform(struct?: IndexSpecPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    metadata_config: indexSpecPodMetadataConfigToTerraform(struct!.metadataConfig),
    pod_type: cdktf.stringToTerraform(struct!.podType),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    shards: cdktf.numberToTerraform(struct!.shards),
    source_collection: cdktf.stringToTerraform(struct!.sourceCollection),
  }
}


export function indexSpecPodToHclTerraform(struct?: IndexSpecPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_config: {
      value: indexSpecPodMetadataConfigToHclTerraform(struct!.metadataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "IndexSpecPodMetadataConfig",
    },
    pod_type: {
      value: cdktf.stringToHclTerraform(struct!.podType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shards: {
      value: cdktf.numberToHclTerraform(struct!.shards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_collection: {
      value: cdktf.stringToHclTerraform(struct!.sourceCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexSpecPodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IndexSpecPod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._metadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataConfig = this._metadataConfig?.internalValue;
    }
    if (this._podType !== undefined) {
      hasAnyValues = true;
      internalValueResult.podType = this._podType;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._shards !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards;
    }
    if (this._sourceCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCollection = this._sourceCollection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexSpecPod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._metadataConfig.internalValue = undefined;
      this._podType = undefined;
      this._replicas = undefined;
      this._shards = undefined;
      this._sourceCollection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._metadataConfig.internalValue = value.metadataConfig;
      this._podType = value.podType;
      this._replicas = value.replicas;
      this._shards = value.shards;
      this._sourceCollection = value.sourceCollection;
    }
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // metadata_config - computed: true, optional: true, required: false
  private _metadataConfig = new IndexSpecPodMetadataConfigOutputReference(this, "metadata_config");
  public get metadataConfig() {
    return this._metadataConfig;
  }
  public putMetadataConfig(value: IndexSpecPodMetadataConfig) {
    this._metadataConfig.internalValue = value;
  }
  public resetMetadataConfig() {
    this._metadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConfigInput() {
    return this._metadataConfig.internalValue;
  }

  // pod_type - computed: false, optional: false, required: true
  private _podType?: string; 
  public get podType() {
    return this.getStringAttribute('pod_type');
  }
  public set podType(value: string) {
    this._podType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podTypeInput() {
    return this._podType;
  }

  // pods - computed: true, optional: false, required: false
  public get pods() {
    return this.getNumberAttribute('pods');
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // shards - computed: true, optional: true, required: false
  private _shards?: number; 
  public get shards() {
    return this.getNumberAttribute('shards');
  }
  public set shards(value: number) {
    this._shards = value;
  }
  public resetShards() {
    this._shards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards;
  }

  // source_collection - computed: false, optional: true, required: false
  private _sourceCollection?: string; 
  public get sourceCollection() {
    return this.getStringAttribute('source_collection');
  }
  public set sourceCollection(value: string) {
    this._sourceCollection = value;
  }
  public resetSourceCollection() {
    this._sourceCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCollectionInput() {
    return this._sourceCollection;
  }
}
export interface IndexSpecServerless {
  /**
  * The public cloud where you would like your index hosted. [gcp|aws|azure]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#cloud Index#cloud}
  */
  readonly cloud: string;
  /**
  * The region where you would like your index to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#region Index#region}
  */
  readonly region: string;
}

export function indexSpecServerlessToTerraform(struct?: IndexSpecServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud: cdktf.stringToTerraform(struct!.cloud),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function indexSpecServerlessToHclTerraform(struct?: IndexSpecServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud: {
      value: cdktf.stringToHclTerraform(struct!.cloud),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexSpecServerlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IndexSpecServerless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexSpecServerless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloud = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloud = value.cloud;
      this._region = value.region;
    }
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface IndexSpec {
  /**
  * Configuration needed to deploy a pod-based index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#pod Index#pod}
  */
  readonly pod?: IndexSpecPod;
  /**
  * Configuration needed to deploy a serverless index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#serverless Index#serverless}
  */
  readonly serverless?: IndexSpecServerless;
}

export function indexSpecToTerraform(struct?: IndexSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod: indexSpecPodToTerraform(struct!.pod),
    serverless: indexSpecServerlessToTerraform(struct!.serverless),
  }
}


export function indexSpecToHclTerraform(struct?: IndexSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod: {
      value: indexSpecPodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "IndexSpecPod",
    },
    serverless: {
      value: indexSpecServerlessToHclTerraform(struct!.serverless),
      isBlock: true,
      type: "struct",
      storageClassType: "IndexSpecServerless",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IndexSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod?.internalValue;
    }
    if (this._serverless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverless = this._serverless?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pod.internalValue = undefined;
      this._serverless.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pod.internalValue = value.pod;
      this._serverless.internalValue = value.serverless;
    }
  }

  // pod - computed: false, optional: true, required: false
  private _pod = new IndexSpecPodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: IndexSpecPod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless = new IndexSpecServerlessOutputReference(this, "serverless");
  public get serverless() {
    return this._serverless;
  }
  public putServerless(value: IndexSpecServerless) {
    this._serverless.internalValue = value;
  }
  public resetServerless() {
    this._serverless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless.internalValue;
  }
}
export interface IndexStatus {
}

export function indexStatusToTerraform(struct?: IndexStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function indexStatusToHclTerraform(struct?: IndexStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IndexStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IndexStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface IndexTimeouts {
  /**
  * Timeout defaults to 5 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#create Index#create}
  */
  readonly create?: string;
  /**
  * Timeout defaults to 5 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#delete Index#delete}
  */
  readonly delete?: string;
}

export function indexTimeoutsToTerraform(struct?: IndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function indexTimeoutsToHclTerraform(struct?: IndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IndexTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index pinecone_index}
*/
export class Index extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pinecone_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Index resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Index to import
  * @param importFromId The id of the existing Index that should be imported. Refer to the {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Index to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pinecone_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/resources/index pinecone_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexConfig
  */
  public constructor(scope: Construct, id: string, config: IndexConfig) {
    super(scope, id, {
      terraformResourceType: 'pinecone_index',
      terraformGeneratorMetadata: {
        providerName: 'pinecone',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._dimension = config.dimension;
    this._embed.internalValue = config.embed;
    this._metric = config.metric;
    this._name = config.name;
    this._spec.internalValue = config.spec;
    this._tags = config.tags;
    this._vectorType = config.vectorType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: string; 
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }
  public set deletionProtection(value: string) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // dimension - computed: true, optional: true, required: false
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // embed - computed: true, optional: true, required: false
  private _embed = new IndexEmbedOutputReference(this, "embed");
  public get embed() {
    return this._embed;
  }
  public putEmbed(value: IndexEmbed) {
    this._embed.internalValue = value;
  }
  public resetEmbed() {
    this._embed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedInput() {
    return this._embed.internalValue;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // spec - computed: false, optional: true, required: false
  private _spec = new IndexSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: IndexSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: true, optional: false, required: false
  private _status = new IndexStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vector_type - computed: true, optional: true, required: false
  private _vectorType?: string; 
  public get vectorType() {
    return this.getStringAttribute('vector_type');
  }
  public set vectorType(value: string) {
    this._vectorType = value;
  }
  public resetVectorType() {
    this._vectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorTypeInput() {
    return this._vectorType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IndexTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktf.stringToTerraform(this._deletionProtection),
      dimension: cdktf.numberToTerraform(this._dimension),
      embed: indexEmbedToTerraform(this._embed.internalValue),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      spec: indexSpecToTerraform(this._spec.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vector_type: cdktf.stringToTerraform(this._vectorType),
      timeouts: indexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.stringToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimension: {
        value: cdktf.numberToHclTerraform(this._dimension),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      embed: {
        value: indexEmbedToHclTerraform(this._embed.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IndexEmbed",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      spec: {
        value: indexSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IndexSpec",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vector_type: {
        value: cdktf.stringToHclTerraform(this._vectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: indexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
