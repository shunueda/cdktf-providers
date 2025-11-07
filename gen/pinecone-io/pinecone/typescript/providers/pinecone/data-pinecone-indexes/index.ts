// https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPineconeIndexesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPineconeIndexesIndexesEmbed {
  /**
  * The dimension of the embedding model, specifying the size of the output vector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#dimension DataPineconeIndexes#dimension}
  */
  readonly dimension?: number;
  /**
  * The distance metric to be used for similarity search. You can use 'euclidean', 'cosine', or 'dotproduct'. If the 'vector_type' is 'sparse', the metric must be 'dotproduct'. If the vector_type is dense, the metric defaults to 'cosine'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#metric DataPineconeIndexes#metric}
  */
  readonly metric?: string;
  /**
  * The read parameters for the embedding model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#read_parameters DataPineconeIndexes#read_parameters}
  */
  readonly readParameters?: { [key: string]: string };
  /**
  * The write parameters for the embedding model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#write_parameters DataPineconeIndexes#write_parameters}
  */
  readonly writeParameters?: { [key: string]: string };
}

export function dataPineconeIndexesIndexesEmbedToTerraform(struct?: DataPineconeIndexesIndexesEmbed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.numberToTerraform(struct!.dimension),
    metric: cdktf.stringToTerraform(struct!.metric),
    read_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.readParameters),
    write_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.writeParameters),
  }
}


export function dataPineconeIndexesIndexesEmbedToHclTerraform(struct?: DataPineconeIndexesIndexesEmbed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.numberToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
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

export class DataPineconeIndexesIndexesEmbedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexesIndexesEmbed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
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

  public set internalValue(value: DataPineconeIndexesIndexesEmbed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension = undefined;
      this._metric = undefined;
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
      this._dimension = value.dimension;
      this._metric = value.metric;
      this._readParameters = value.readParameters;
      this._writeParameters = value.writeParameters;
    }
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

  // field_map - computed: true, optional: false, required: false
  private _fieldMap = new cdktf.StringMap(this, "field_map");
  public get fieldMap() {
    return this._fieldMap;
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

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
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
export interface DataPineconeIndexesIndexesSpecPodMetadataConfig {
}

export function dataPineconeIndexesIndexesSpecPodMetadataConfigToTerraform(struct?: DataPineconeIndexesIndexesSpecPodMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPineconeIndexesIndexesSpecPodMetadataConfigToHclTerraform(struct?: DataPineconeIndexesIndexesSpecPodMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPineconeIndexesIndexesSpecPodMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexesIndexesSpecPodMetadataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexesIndexesSpecPodMetadataConfig | cdktf.IResolvable | undefined) {
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

  // indexed - computed: true, optional: false, required: false
  public get indexed() {
    return this.getListAttribute('indexed');
  }
}
export interface DataPineconeIndexesIndexesSpecPod {
  /**
  * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#metadata_config DataPineconeIndexes#metadata_config}
  */
  readonly metadataConfig?: DataPineconeIndexesIndexesSpecPodMetadataConfig;
}

export function dataPineconeIndexesIndexesSpecPodToTerraform(struct?: DataPineconeIndexesIndexesSpecPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_config: dataPineconeIndexesIndexesSpecPodMetadataConfigToTerraform(struct!.metadataConfig),
  }
}


export function dataPineconeIndexesIndexesSpecPodToHclTerraform(struct?: DataPineconeIndexesIndexesSpecPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_config: {
      value: dataPineconeIndexesIndexesSpecPodMetadataConfigToHclTerraform(struct!.metadataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexesIndexesSpecPodMetadataConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPineconeIndexesIndexesSpecPodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexesIndexesSpecPod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataConfig = this._metadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexesIndexesSpecPod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataConfig.internalValue = value.metadataConfig;
    }
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // metadata_config - computed: true, optional: true, required: false
  private _metadataConfig = new DataPineconeIndexesIndexesSpecPodMetadataConfigOutputReference(this, "metadata_config");
  public get metadataConfig() {
    return this._metadataConfig;
  }
  public putMetadataConfig(value: DataPineconeIndexesIndexesSpecPodMetadataConfig) {
    this._metadataConfig.internalValue = value;
  }
  public resetMetadataConfig() {
    this._metadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConfigInput() {
    return this._metadataConfig.internalValue;
  }

  // pod_type - computed: true, optional: false, required: false
  public get podType() {
    return this.getStringAttribute('pod_type');
  }

  // pods - computed: true, optional: false, required: false
  public get pods() {
    return this.getNumberAttribute('pods');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // shards - computed: true, optional: false, required: false
  public get shards() {
    return this.getNumberAttribute('shards');
  }

  // source_collection - computed: true, optional: false, required: false
  public get sourceCollection() {
    return this.getStringAttribute('source_collection');
  }
}
export interface DataPineconeIndexesIndexesSpecServerless {
}

export function dataPineconeIndexesIndexesSpecServerlessToTerraform(struct?: DataPineconeIndexesIndexesSpecServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPineconeIndexesIndexesSpecServerlessToHclTerraform(struct?: DataPineconeIndexesIndexesSpecServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPineconeIndexesIndexesSpecServerlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexesIndexesSpecServerless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexesIndexesSpecServerless | cdktf.IResolvable | undefined) {
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

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataPineconeIndexesIndexesSpec {
  /**
  * Configuration needed to deploy a pod-based index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#pod DataPineconeIndexes#pod}
  */
  readonly pod?: DataPineconeIndexesIndexesSpecPod;
  /**
  * Configuration needed to deploy a serverless index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#serverless DataPineconeIndexes#serverless}
  */
  readonly serverless?: DataPineconeIndexesIndexesSpecServerless;
}

export function dataPineconeIndexesIndexesSpecToTerraform(struct?: DataPineconeIndexesIndexesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod: dataPineconeIndexesIndexesSpecPodToTerraform(struct!.pod),
    serverless: dataPineconeIndexesIndexesSpecServerlessToTerraform(struct!.serverless),
  }
}


export function dataPineconeIndexesIndexesSpecToHclTerraform(struct?: DataPineconeIndexesIndexesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod: {
      value: dataPineconeIndexesIndexesSpecPodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexesIndexesSpecPod",
    },
    serverless: {
      value: dataPineconeIndexesIndexesSpecServerlessToHclTerraform(struct!.serverless),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexesIndexesSpecServerless",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPineconeIndexesIndexesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexesIndexesSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPineconeIndexesIndexesSpec | cdktf.IResolvable | undefined) {
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

  // pod - computed: true, optional: true, required: false
  private _pod = new DataPineconeIndexesIndexesSpecPodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataPineconeIndexesIndexesSpecPod) {
    this._pod.internalValue = value;
  }
  public resetPod() {
    this._pod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod.internalValue;
  }

  // serverless - computed: true, optional: true, required: false
  private _serverless = new DataPineconeIndexesIndexesSpecServerlessOutputReference(this, "serverless");
  public get serverless() {
    return this._serverless;
  }
  public putServerless(value: DataPineconeIndexesIndexesSpecServerless) {
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
export interface DataPineconeIndexesIndexesStatus {
}

export function dataPineconeIndexesIndexesStatusToTerraform(struct?: DataPineconeIndexesIndexesStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPineconeIndexesIndexesStatusToHclTerraform(struct?: DataPineconeIndexesIndexesStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPineconeIndexesIndexesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexesIndexesStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexesIndexesStatus | cdktf.IResolvable | undefined) {
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

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataPineconeIndexesIndexes {
  /**
  * Specify the integrated inference embedding configuration for the index. Once set, the model cannot be changed. However, you can later update the embedding configuration—including field map, read parameters, and write parameters.
  * 			
  * Refer to the [model guide](https://docs.pinecone.io/guides/inference/understanding-inference#embedding-models) for available models and details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#embed DataPineconeIndexes#embed}
  */
  readonly embed?: DataPineconeIndexesIndexesEmbed;
  /**
  * Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#spec DataPineconeIndexes#spec}
  */
  readonly spec?: DataPineconeIndexesIndexesSpec;
  /**
  * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. To specify metadata fields to index, provide an array of the following form: [example_metadata_field]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#status DataPineconeIndexes#status}
  */
  readonly status?: DataPineconeIndexesIndexesStatus;
  /**
  * Custom user tags added to an index. Keys must be 80 characters or less. Values must be 120 characters or less. Keys must be alphanumeric, '', or '-'. Values must be alphanumeric, ';', '@', '', '-', '.', '+', or ' '. To unset a key, set the value to be an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#tags DataPineconeIndexes#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataPineconeIndexesIndexesToTerraform(struct?: DataPineconeIndexesIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embed: dataPineconeIndexesIndexesEmbedToTerraform(struct!.embed),
    spec: dataPineconeIndexesIndexesSpecToTerraform(struct!.spec),
    status: dataPineconeIndexesIndexesStatusToTerraform(struct!.status),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataPineconeIndexesIndexesToHclTerraform(struct?: DataPineconeIndexesIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embed: {
      value: dataPineconeIndexesIndexesEmbedToHclTerraform(struct!.embed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexesIndexesEmbed",
    },
    spec: {
      value: dataPineconeIndexesIndexesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexesIndexesSpec",
    },
    status: {
      value: dataPineconeIndexesIndexesStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexesIndexesStatus",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPineconeIndexesIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPineconeIndexesIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embed = this._embed?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexesIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._embed.internalValue = undefined;
      this._spec.internalValue = undefined;
      this._status.internalValue = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._embed.internalValue = value.embed;
      this._spec.internalValue = value.spec;
      this._status.internalValue = value.status;
      this._tags = value.tags;
    }
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }

  // embed - computed: true, optional: true, required: false
  private _embed = new DataPineconeIndexesIndexesEmbedOutputReference(this, "embed");
  public get embed() {
    return this._embed;
  }
  public putEmbed(value: DataPineconeIndexesIndexesEmbed) {
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

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // spec - computed: true, optional: true, required: false
  private _spec = new DataPineconeIndexesIndexesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataPineconeIndexesIndexesSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: true, optional: true, required: false
  private _status = new DataPineconeIndexesIndexesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataPineconeIndexesIndexesStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
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

  // vector_type - computed: true, optional: false, required: false
  public get vectorType() {
    return this.getStringAttribute('vector_type');
  }
}

export class DataPineconeIndexesIndexesList extends cdktf.ComplexList {
  public internalValue? : DataPineconeIndexesIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataPineconeIndexesIndexesOutputReference {
    return new DataPineconeIndexesIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes pinecone_indexes}
*/
export class DataPineconeIndexes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pinecone_indexes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPineconeIndexes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPineconeIndexes to import
  * @param importFromId The id of the existing DataPineconeIndexes that should be imported. Refer to the {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPineconeIndexes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pinecone_indexes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/indexes pinecone_indexes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPineconeIndexesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPineconeIndexesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pinecone_indexes',
      terraformGeneratorMetadata: {
        providerName: 'pinecone',
        providerVersion: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indexes - computed: true, optional: false, required: false
  private _indexes = new DataPineconeIndexesIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
