// https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPineconeIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the integrated inference embedding configuration for the index. Once set, the model cannot be changed. However, you can later update the embedding configuration—including field map, read parameters, and write parameters.
  * 
  * Refer to the [model guide](https://docs.pinecone.io/guides/inference/understanding-inference#embedding-models) for available models and details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#embed DataPineconeIndex#embed}
  */
  readonly embed?: DataPineconeIndexEmbed;
  /**
  * Index name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#name DataPineconeIndex#name}
  */
  readonly name: string;
  /**
  * Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#spec DataPineconeIndex#spec}
  */
  readonly spec?: DataPineconeIndexSpec;
  /**
  * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. To specify metadata fields to index, provide an array of the following form: [example_metadata_field]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#status DataPineconeIndex#status}
  */
  readonly status?: DataPineconeIndexStatus;
}
export interface DataPineconeIndexEmbed {
}

export function dataPineconeIndexEmbedToTerraform(struct?: DataPineconeIndexEmbed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPineconeIndexEmbedToHclTerraform(struct?: DataPineconeIndexEmbed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPineconeIndexEmbedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexEmbed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexEmbed | cdktf.IResolvable | undefined) {
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

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }

  // field_map - computed: true, optional: false, required: false
  private _fieldMap = new cdktf.StringMap(this, "field_map");
  public get fieldMap() {
    return this._fieldMap;
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // read_parameters - computed: true, optional: false, required: false
  private _readParameters = new cdktf.StringMap(this, "read_parameters");
  public get readParameters() {
    return this._readParameters;
  }

  // vector_type - computed: true, optional: false, required: false
  public get vectorType() {
    return this.getStringAttribute('vector_type');
  }

  // write_parameters - computed: true, optional: false, required: false
  private _writeParameters = new cdktf.StringMap(this, "write_parameters");
  public get writeParameters() {
    return this._writeParameters;
  }
}
export interface DataPineconeIndexSpecPodMetadataConfig {
}

export function dataPineconeIndexSpecPodMetadataConfigToTerraform(struct?: DataPineconeIndexSpecPodMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPineconeIndexSpecPodMetadataConfigToHclTerraform(struct?: DataPineconeIndexSpecPodMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPineconeIndexSpecPodMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexSpecPodMetadataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexSpecPodMetadataConfig | cdktf.IResolvable | undefined) {
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
export interface DataPineconeIndexSpecPod {
  /**
  * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#metadata_config DataPineconeIndex#metadata_config}
  */
  readonly metadataConfig?: DataPineconeIndexSpecPodMetadataConfig;
}

export function dataPineconeIndexSpecPodToTerraform(struct?: DataPineconeIndexSpecPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_config: dataPineconeIndexSpecPodMetadataConfigToTerraform(struct!.metadataConfig),
  }
}


export function dataPineconeIndexSpecPodToHclTerraform(struct?: DataPineconeIndexSpecPod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_config: {
      value: dataPineconeIndexSpecPodMetadataConfigToHclTerraform(struct!.metadataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexSpecPodMetadataConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPineconeIndexSpecPodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexSpecPod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPineconeIndexSpecPod | cdktf.IResolvable | undefined) {
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
  private _metadataConfig = new DataPineconeIndexSpecPodMetadataConfigOutputReference(this, "metadata_config");
  public get metadataConfig() {
    return this._metadataConfig;
  }
  public putMetadataConfig(value: DataPineconeIndexSpecPodMetadataConfig) {
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
export interface DataPineconeIndexSpecServerless {
}

export function dataPineconeIndexSpecServerlessToTerraform(struct?: DataPineconeIndexSpecServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPineconeIndexSpecServerlessToHclTerraform(struct?: DataPineconeIndexSpecServerless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPineconeIndexSpecServerlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexSpecServerless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexSpecServerless | cdktf.IResolvable | undefined) {
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
export interface DataPineconeIndexSpec {
  /**
  * Configuration needed to deploy a pod-based index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#pod DataPineconeIndex#pod}
  */
  readonly pod?: DataPineconeIndexSpecPod;
  /**
  * Configuration needed to deploy a serverless index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#serverless DataPineconeIndex#serverless}
  */
  readonly serverless?: DataPineconeIndexSpecServerless;
}

export function dataPineconeIndexSpecToTerraform(struct?: DataPineconeIndexSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod: dataPineconeIndexSpecPodToTerraform(struct!.pod),
    serverless: dataPineconeIndexSpecServerlessToTerraform(struct!.serverless),
  }
}


export function dataPineconeIndexSpecToHclTerraform(struct?: DataPineconeIndexSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod: {
      value: dataPineconeIndexSpecPodToHclTerraform(struct!.pod),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexSpecPod",
    },
    serverless: {
      value: dataPineconeIndexSpecServerlessToHclTerraform(struct!.serverless),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPineconeIndexSpecServerless",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPineconeIndexSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPineconeIndexSpec | cdktf.IResolvable | undefined) {
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
  private _pod = new DataPineconeIndexSpecPodOutputReference(this, "pod");
  public get pod() {
    return this._pod;
  }
  public putPod(value: DataPineconeIndexSpecPod) {
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
  private _serverless = new DataPineconeIndexSpecServerlessOutputReference(this, "serverless");
  public get serverless() {
    return this._serverless;
  }
  public putServerless(value: DataPineconeIndexSpecServerless) {
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
export interface DataPineconeIndexStatus {
}

export function dataPineconeIndexStatusToTerraform(struct?: DataPineconeIndexStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPineconeIndexStatusToHclTerraform(struct?: DataPineconeIndexStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPineconeIndexStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPineconeIndexStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPineconeIndexStatus | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index pinecone_index}
*/
export class DataPineconeIndex extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pinecone_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPineconeIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPineconeIndex to import
  * @param importFromId The id of the existing DataPineconeIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPineconeIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pinecone_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pinecone-io/pinecone/2.0.0/docs/data-sources/index pinecone_index} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPineconeIndexConfig
  */
  public constructor(scope: Construct, id: string, config: DataPineconeIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'pinecone_index',
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
    this._embed.internalValue = config.embed;
    this._name = config.name;
    this._spec.internalValue = config.spec;
    this._status.internalValue = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }

  // embed - computed: true, optional: true, required: false
  private _embed = new DataPineconeIndexEmbedOutputReference(this, "embed");
  public get embed() {
    return this._embed;
  }
  public putEmbed(value: DataPineconeIndexEmbed) {
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

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
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

  // spec - computed: true, optional: true, required: false
  private _spec = new DataPineconeIndexSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataPineconeIndexSpec) {
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
  private _status = new DataPineconeIndexStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataPineconeIndexStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vector_type - computed: true, optional: false, required: false
  public get vectorType() {
    return this.getStringAttribute('vector_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      embed: dataPineconeIndexEmbedToTerraform(this._embed.internalValue),
      name: cdktf.stringToTerraform(this._name),
      spec: dataPineconeIndexSpecToTerraform(this._spec.internalValue),
      status: dataPineconeIndexStatusToTerraform(this._status.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      embed: {
        value: dataPineconeIndexEmbedToHclTerraform(this._embed.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPineconeIndexEmbed",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: dataPineconeIndexSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPineconeIndexSpec",
      },
      status: {
        value: dataPineconeIndexStatusToHclTerraform(this._status.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPineconeIndexStatus",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
