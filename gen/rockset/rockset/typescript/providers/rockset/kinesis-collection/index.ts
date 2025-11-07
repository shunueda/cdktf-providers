// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text describing the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#description KinesisCollection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#id KinesisCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ingest transformation SQL query. Turns the collection into insert_only mode.
  * 
  * When inserting data into Rockset, you can transform the data by providing a single SQL query, 
  * that contains all of the desired data transformations. 
  * This is referred to as the collection’s ingest transformation or, historically, its field mapping query.
  * 
  * For more information see https://rockset.com/docs/ingest-transformation/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#ingest_transformation KinesisCollection#ingest_transformation}
  */
  readonly ingestTransformation?: string;
  /**
  * Unique identifier for the collection. Can contain alphanumeric or dash characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#name KinesisCollection#name}
  */
  readonly name: string;
  /**
  * Number of seconds after which data is purged. Based on event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#retention_secs KinesisCollection#retention_secs}
  */
  readonly retentionSecs?: number;
  /**
  * RocksDB storage compression type. Possible values: ZSTD, LZ4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#storage_compression_type KinesisCollection#storage_compression_type}
  */
  readonly storageCompressionType?: string;
  /**
  * Wait until the collection is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#wait_for_collection KinesisCollection#wait_for_collection}
  */
  readonly waitForCollection?: boolean | cdktf.IResolvable;
  /**
  * Wait until the collection has documents. The default is to wait for 0 documents, which means it doesn't wait.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#wait_for_documents KinesisCollection#wait_for_documents}
  */
  readonly waitForDocuments?: number;
  /**
  * The name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#workspace KinesisCollection#workspace}
  */
  readonly workspace: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#source KinesisCollection#source}
  */
  readonly source?: KinesisCollectionSource[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#timeouts KinesisCollection#timeouts}
  */
  readonly timeouts?: KinesisCollectionTimeouts;
}
export interface KinesisCollectionSource {
  /**
  * AWS region name for the Kinesis stream, by default us-west-2 is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#aws_region KinesisCollection#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Set of fields that correspond to a DMS primary key. Can only be set if format is mysql or postgres.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#dms_primary_key KinesisCollection#dms_primary_key}
  */
  readonly dmsPrimaryKey?: string[];
  /**
  * Format of the data. One of: json, mysql, postgres. dms_primary_keys list can only be set for mysql or postgres. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#format KinesisCollection#format}
  */
  readonly format: string;
  /**
  * The name of the Rockset Kinesis integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#integration_name KinesisCollection#integration_name}
  */
  readonly integrationName: string;
  /**
  * Name of Kinesis stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#stream_name KinesisCollection#stream_name}
  */
  readonly streamName: string;
}

export function kinesisCollectionSourceToTerraform(struct?: KinesisCollectionSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    dms_primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dmsPrimaryKey),
    format: cdktf.stringToTerraform(struct!.format),
    integration_name: cdktf.stringToTerraform(struct!.integrationName),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function kinesisCollectionSourceToHclTerraform(struct?: KinesisCollectionSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dms_primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dmsPrimaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_name: {
      value: cdktf.stringToHclTerraform(struct!.integrationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisCollectionSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KinesisCollectionSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._dmsPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmsPrimaryKey = this._dmsPrimaryKey;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._integrationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationName = this._integrationName;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisCollectionSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._dmsPrimaryKey = undefined;
      this._format = undefined;
      this._integrationName = undefined;
      this._streamName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._dmsPrimaryKey = value.dmsPrimaryKey;
      this._format = value.format;
      this._integrationName = value.integrationName;
      this._streamName = value.streamName;
    }
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // dms_primary_key - computed: false, optional: true, required: false
  private _dmsPrimaryKey?: string[]; 
  public get dmsPrimaryKey() {
    return this.getListAttribute('dms_primary_key');
  }
  public set dmsPrimaryKey(value: string[]) {
    this._dmsPrimaryKey = value;
  }
  public resetDmsPrimaryKey() {
    this._dmsPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmsPrimaryKeyInput() {
    return this._dmsPrimaryKey;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}

export class KinesisCollectionSourceList extends cdktf.ComplexList {
  public internalValue? : KinesisCollectionSource[] | cdktf.IResolvable

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
  public get(index: number): KinesisCollectionSourceOutputReference {
    return new KinesisCollectionSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#create KinesisCollection#create}
  */
  readonly create?: string;
}

export function kinesisCollectionTimeoutsToTerraform(struct?: KinesisCollectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function kinesisCollectionTimeoutsToHclTerraform(struct?: KinesisCollectionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KinesisCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KinesisCollectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisCollectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection rockset_kinesis_collection}
*/
export class KinesisCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_kinesis_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KinesisCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KinesisCollection to import
  * @param importFromId The id of the existing KinesisCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KinesisCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_kinesis_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kinesis_collection rockset_kinesis_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_kinesis_collection',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ingestTransformation = config.ingestTransformation;
    this._name = config.name;
    this._retentionSecs = config.retentionSecs;
    this._storageCompressionType = config.storageCompressionType;
    this._waitForCollection = config.waitForCollection;
    this._waitForDocuments = config.waitForDocuments;
    this._workspace = config.workspace;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ingest_transformation - computed: false, optional: true, required: false
  private _ingestTransformation?: string; 
  public get ingestTransformation() {
    return this.getStringAttribute('ingest_transformation');
  }
  public set ingestTransformation(value: string) {
    this._ingestTransformation = value;
  }
  public resetIngestTransformation() {
    this._ingestTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestTransformationInput() {
    return this._ingestTransformation;
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

  // retention_secs - computed: false, optional: true, required: false
  private _retentionSecs?: number; 
  public get retentionSecs() {
    return this.getNumberAttribute('retention_secs');
  }
  public set retentionSecs(value: number) {
    this._retentionSecs = value;
  }
  public resetRetentionSecs() {
    this._retentionSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSecsInput() {
    return this._retentionSecs;
  }

  // storage_compression_type - computed: false, optional: true, required: false
  private _storageCompressionType?: string; 
  public get storageCompressionType() {
    return this.getStringAttribute('storage_compression_type');
  }
  public set storageCompressionType(value: string) {
    this._storageCompressionType = value;
  }
  public resetStorageCompressionType() {
    this._storageCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCompressionTypeInput() {
    return this._storageCompressionType;
  }

  // wait_for_collection - computed: false, optional: true, required: false
  private _waitForCollection?: boolean | cdktf.IResolvable; 
  public get waitForCollection() {
    return this.getBooleanAttribute('wait_for_collection');
  }
  public set waitForCollection(value: boolean | cdktf.IResolvable) {
    this._waitForCollection = value;
  }
  public resetWaitForCollection() {
    this._waitForCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCollectionInput() {
    return this._waitForCollection;
  }

  // wait_for_documents - computed: false, optional: true, required: false
  private _waitForDocuments?: number; 
  public get waitForDocuments() {
    return this.getNumberAttribute('wait_for_documents');
  }
  public set waitForDocuments(value: number) {
    this._waitForDocuments = value;
  }
  public resetWaitForDocuments() {
    this._waitForDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDocumentsInput() {
    return this._waitForDocuments;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // source - computed: false, optional: true, required: false
  private _source = new KinesisCollectionSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: KinesisCollectionSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KinesisCollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KinesisCollectionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ingest_transformation: cdktf.stringToTerraform(this._ingestTransformation),
      name: cdktf.stringToTerraform(this._name),
      retention_secs: cdktf.numberToTerraform(this._retentionSecs),
      storage_compression_type: cdktf.stringToTerraform(this._storageCompressionType),
      wait_for_collection: cdktf.booleanToTerraform(this._waitForCollection),
      wait_for_documents: cdktf.numberToTerraform(this._waitForDocuments),
      workspace: cdktf.stringToTerraform(this._workspace),
      source: cdktf.listMapper(kinesisCollectionSourceToTerraform, true)(this._source.internalValue),
      timeouts: kinesisCollectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingest_transformation: {
        value: cdktf.stringToHclTerraform(this._ingestTransformation),
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
      retention_secs: {
        value: cdktf.numberToHclTerraform(this._retentionSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_compression_type: {
        value: cdktf.stringToHclTerraform(this._storageCompressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_collection: {
        value: cdktf.booleanToHclTerraform(this._waitForCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_documents: {
        value: cdktf.numberToHclTerraform(this._waitForDocuments),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(kinesisCollectionSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KinesisCollectionSourceList",
      },
      timeouts: {
        value: kinesisCollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KinesisCollectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
