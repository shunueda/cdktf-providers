// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamodbCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text describing the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#description DynamodbCollection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#id DynamodbCollection#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#ingest_transformation DynamodbCollection#ingest_transformation}
  */
  readonly ingestTransformation?: string;
  /**
  * Unique identifier for the collection. Can contain alphanumeric or dash characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#name DynamodbCollection#name}
  */
  readonly name: string;
  /**
  * Number of seconds after which data is purged. Based on event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#retention_secs DynamodbCollection#retention_secs}
  */
  readonly retentionSecs?: number;
  /**
  * RocksDB storage compression type. Possible values: ZSTD, LZ4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#storage_compression_type DynamodbCollection#storage_compression_type}
  */
  readonly storageCompressionType?: string;
  /**
  * Wait until the collection is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#wait_for_collection DynamodbCollection#wait_for_collection}
  */
  readonly waitForCollection?: boolean | cdktf.IResolvable;
  /**
  * Wait until the collection has documents. The default is to wait for 0 documents, which means it doesn't wait.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#wait_for_documents DynamodbCollection#wait_for_documents}
  */
  readonly waitForDocuments?: number;
  /**
  * The name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#workspace DynamodbCollection#workspace}
  */
  readonly workspace: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#source DynamodbCollection#source}
  */
  readonly source?: DynamodbCollectionSource[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#timeouts DynamodbCollection#timeouts}
  */
  readonly timeouts?: DynamodbCollectionTimeouts;
}
export interface DynamodbCollectionSource {
  /**
  * AWS region name of DynamoDB table, by default us-west-2 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#aws_region DynamodbCollection#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The name of the Rockset DynamoDB integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#integration_name DynamodbCollection#integration_name}
  */
  readonly integrationName: string;
  /**
  * Max RCU usage for scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#rcu DynamodbCollection#rcu}
  */
  readonly rcu?: number;
  /**
  * Name of DynamoDB table containing data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#table_name DynamodbCollection#table_name}
  */
  readonly tableName: string;
  /**
  * Whether the initial table scan should use the DynamoDB scan API. If false, export will be performed using an S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#use_scan_api DynamodbCollection#use_scan_api}
  */
  readonly useScanApi?: boolean | cdktf.IResolvable;
}

export function dynamodbCollectionSourceToTerraform(struct?: DynamodbCollectionSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    integration_name: cdktf.stringToTerraform(struct!.integrationName),
    rcu: cdktf.numberToTerraform(struct!.rcu),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    use_scan_api: cdktf.booleanToTerraform(struct!.useScanApi),
  }
}


export function dynamodbCollectionSourceToHclTerraform(struct?: DynamodbCollectionSource | cdktf.IResolvable): any {
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
    integration_name: {
      value: cdktf.stringToHclTerraform(struct!.integrationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcu: {
      value: cdktf.numberToHclTerraform(struct!.rcu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_scan_api: {
      value: cdktf.booleanToHclTerraform(struct!.useScanApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamodbCollectionSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DynamodbCollectionSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._integrationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationName = this._integrationName;
    }
    if (this._rcu !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcu = this._rcu;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._useScanApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.useScanApi = this._useScanApi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamodbCollectionSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._integrationName = undefined;
      this._rcu = undefined;
      this._tableName = undefined;
      this._useScanApi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._integrationName = value.integrationName;
      this._rcu = value.rcu;
      this._tableName = value.tableName;
      this._useScanApi = value.useScanApi;
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

  // rcu - computed: false, optional: true, required: false
  private _rcu?: number; 
  public get rcu() {
    return this.getNumberAttribute('rcu');
  }
  public set rcu(value: number) {
    this._rcu = value;
  }
  public resetRcu() {
    this._rcu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcuInput() {
    return this._rcu;
  }

  // scan_end_time - computed: true, optional: false, required: false
  public get scanEndTime() {
    return this.getStringAttribute('scan_end_time');
  }

  // scan_records_processed - computed: true, optional: false, required: false
  public get scanRecordsProcessed() {
    return this.getNumberAttribute('scan_records_processed');
  }

  // scan_start_time - computed: true, optional: false, required: false
  public get scanStartTime() {
    return this.getStringAttribute('scan_start_time');
  }

  // scan_total_records - computed: true, optional: false, required: false
  public get scanTotalRecords() {
    return this.getNumberAttribute('scan_total_records');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_last_processed_at - computed: true, optional: false, required: false
  public get streamLastProcessedAt() {
    return this.getStringAttribute('stream_last_processed_at');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // use_scan_api - computed: false, optional: true, required: false
  private _useScanApi?: boolean | cdktf.IResolvable; 
  public get useScanApi() {
    return this.getBooleanAttribute('use_scan_api');
  }
  public set useScanApi(value: boolean | cdktf.IResolvable) {
    this._useScanApi = value;
  }
  public resetUseScanApi() {
    this._useScanApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScanApiInput() {
    return this._useScanApi;
  }
}

export class DynamodbCollectionSourceList extends cdktf.ComplexList {
  public internalValue? : DynamodbCollectionSource[] | cdktf.IResolvable

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
  public get(index: number): DynamodbCollectionSourceOutputReference {
    return new DynamodbCollectionSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamodbCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#create DynamodbCollection#create}
  */
  readonly create?: string;
}

export function dynamodbCollectionTimeoutsToTerraform(struct?: DynamodbCollectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function dynamodbCollectionTimeoutsToHclTerraform(struct?: DynamodbCollectionTimeouts | cdktf.IResolvable): any {
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

export class DynamodbCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamodbCollectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DynamodbCollectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection rockset_dynamodb_collection}
*/
export class DynamodbCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_dynamodb_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamodbCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamodbCollection to import
  * @param importFromId The id of the existing DynamodbCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamodbCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_dynamodb_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/dynamodb_collection rockset_dynamodb_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamodbCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: DynamodbCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_dynamodb_collection',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8',
        providerVersionConstraint: '0.9.8'
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
  private _source = new DynamodbCollectionSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: DynamodbCollectionSource[] | cdktf.IResolvable) {
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
  private _timeouts = new DynamodbCollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DynamodbCollectionTimeouts) {
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
      source: cdktf.listMapper(dynamodbCollectionSourceToTerraform, true)(this._source.internalValue),
      timeouts: dynamodbCollectionTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: cdktf.listMapperHcl(dynamodbCollectionSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DynamodbCollectionSourceList",
      },
      timeouts: {
        value: dynamodbCollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamodbCollectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
