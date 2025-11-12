// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceDynamodbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Force nested lists as JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#array_encoding_json SourceDynamodb#array_encoding_json}
  */
  readonly arrayEncodingJson?: boolean | cdktf.IResolvable;
  /**
  * AWS Access Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#aws_access_key_id SourceDynamodb#aws_access_key_id}
  */
  readonly awsAccessKeyId: string;
  /**
  * AWS Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#aws_region SourceDynamodb#aws_region}
  */
  readonly awsRegion: string;
  /**
  * AWS Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#aws_secret_key SourceDynamodb#aws_secret_key}
  */
  readonly awsSecretKey: string;
  /**
  * Batch size to fetch records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#batch_size SourceDynamodb#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Dynamodb Service Endpoint (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#dynamodb_service_endpoint SourceDynamodb#dynamodb_service_endpoint}
  */
  readonly dynamodbServiceEndpoint?: string;
  /**
  * Full Export Expiration Time (ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#full_export_expiration_time_ms SourceDynamodb#full_export_expiration_time_ms}
  */
  readonly fullExportExpirationTimeMs?: number;
  /**
  * Incremental snapshot chunk size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#incremental_snapshot_chunk_size SourceDynamodb#incremental_snapshot_chunk_size}
  */
  readonly incrementalSnapshotChunkSize?: number;
  /**
  * Incremental snapshot max threads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#incremental_snapshot_max_threads SourceDynamodb#incremental_snapshot_max_threads}
  */
  readonly incrementalSnapshotMaxThreads?: number;
  /**
  * Source name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#name SourceDynamodb#name}
  */
  readonly name: string;
  /**
  * Poll Timeout (ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#poll_timeout_ms SourceDynamodb#poll_timeout_ms}
  */
  readonly pollTimeoutMs?: number;
  /**
  * used for backfill (snapshot)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#s3_export_bucket_name SourceDynamodb#s3_export_bucket_name}
  */
  readonly s3ExportBucketName: string;
  /**
  * Signal Kafka Poll Timeout (ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#signal_kafka_poll_timeout_ms SourceDynamodb#signal_kafka_poll_timeout_ms}
  */
  readonly signalKafkaPollTimeoutMs?: number;
  /**
  * Force nested maps as JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#struct_encoding_json SourceDynamodb#struct_encoding_json}
  */
  readonly structEncodingJson?: boolean | cdktf.IResolvable;
  /**
  * Source tables to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#table_include_list_user_defined SourceDynamodb#table_include_list_user_defined}
  */
  readonly tableIncludeListUserDefined: string;
  /**
  * The maximum number of active task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#tasks_max SourceDynamodb#tasks_max}
  */
  readonly tasksMax?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb streamkap_source_dynamodb}
*/
export class SourceDynamodb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_source_dynamodb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceDynamodb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceDynamodb to import
  * @param importFromId The id of the existing SourceDynamodb that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceDynamodb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_source_dynamodb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.15/docs/resources/source_dynamodb streamkap_source_dynamodb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceDynamodbConfig
  */
  public constructor(scope: Construct, id: string, config: SourceDynamodbConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_source_dynamodb',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.15',
        providerVersionConstraint: '2.1.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arrayEncodingJson = config.arrayEncodingJson;
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsRegion = config.awsRegion;
    this._awsSecretKey = config.awsSecretKey;
    this._batchSize = config.batchSize;
    this._dynamodbServiceEndpoint = config.dynamodbServiceEndpoint;
    this._fullExportExpirationTimeMs = config.fullExportExpirationTimeMs;
    this._incrementalSnapshotChunkSize = config.incrementalSnapshotChunkSize;
    this._incrementalSnapshotMaxThreads = config.incrementalSnapshotMaxThreads;
    this._name = config.name;
    this._pollTimeoutMs = config.pollTimeoutMs;
    this._s3ExportBucketName = config.s3ExportBucketName;
    this._signalKafkaPollTimeoutMs = config.signalKafkaPollTimeoutMs;
    this._structEncodingJson = config.structEncodingJson;
    this._tableIncludeListUserDefined = config.tableIncludeListUserDefined;
    this._tasksMax = config.tasksMax;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array_encoding_json - computed: true, optional: true, required: false
  private _arrayEncodingJson?: boolean | cdktf.IResolvable; 
  public get arrayEncodingJson() {
    return this.getBooleanAttribute('array_encoding_json');
  }
  public set arrayEncodingJson(value: boolean | cdktf.IResolvable) {
    this._arrayEncodingJson = value;
  }
  public resetArrayEncodingJson() {
    this._arrayEncodingJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayEncodingJsonInput() {
    return this._arrayEncodingJson;
  }

  // aws_access_key_id - computed: false, optional: false, required: true
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_key - computed: false, optional: false, required: true
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
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

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // dynamodb_service_endpoint - computed: false, optional: true, required: false
  private _dynamodbServiceEndpoint?: string; 
  public get dynamodbServiceEndpoint() {
    return this.getStringAttribute('dynamodb_service_endpoint');
  }
  public set dynamodbServiceEndpoint(value: string) {
    this._dynamodbServiceEndpoint = value;
  }
  public resetDynamodbServiceEndpoint() {
    this._dynamodbServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbServiceEndpointInput() {
    return this._dynamodbServiceEndpoint;
  }

  // full_export_expiration_time_ms - computed: true, optional: true, required: false
  private _fullExportExpirationTimeMs?: number; 
  public get fullExportExpirationTimeMs() {
    return this.getNumberAttribute('full_export_expiration_time_ms');
  }
  public set fullExportExpirationTimeMs(value: number) {
    this._fullExportExpirationTimeMs = value;
  }
  public resetFullExportExpirationTimeMs() {
    this._fullExportExpirationTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullExportExpirationTimeMsInput() {
    return this._fullExportExpirationTimeMs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incremental_snapshot_chunk_size - computed: true, optional: true, required: false
  private _incrementalSnapshotChunkSize?: number; 
  public get incrementalSnapshotChunkSize() {
    return this.getNumberAttribute('incremental_snapshot_chunk_size');
  }
  public set incrementalSnapshotChunkSize(value: number) {
    this._incrementalSnapshotChunkSize = value;
  }
  public resetIncrementalSnapshotChunkSize() {
    this._incrementalSnapshotChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalSnapshotChunkSizeInput() {
    return this._incrementalSnapshotChunkSize;
  }

  // incremental_snapshot_max_threads - computed: true, optional: true, required: false
  private _incrementalSnapshotMaxThreads?: number; 
  public get incrementalSnapshotMaxThreads() {
    return this.getNumberAttribute('incremental_snapshot_max_threads');
  }
  public set incrementalSnapshotMaxThreads(value: number) {
    this._incrementalSnapshotMaxThreads = value;
  }
  public resetIncrementalSnapshotMaxThreads() {
    this._incrementalSnapshotMaxThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalSnapshotMaxThreadsInput() {
    return this._incrementalSnapshotMaxThreads;
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

  // poll_timeout_ms - computed: true, optional: true, required: false
  private _pollTimeoutMs?: number; 
  public get pollTimeoutMs() {
    return this.getNumberAttribute('poll_timeout_ms');
  }
  public set pollTimeoutMs(value: number) {
    this._pollTimeoutMs = value;
  }
  public resetPollTimeoutMs() {
    this._pollTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollTimeoutMsInput() {
    return this._pollTimeoutMs;
  }

  // s3_export_bucket_name - computed: false, optional: false, required: true
  private _s3ExportBucketName?: string; 
  public get s3ExportBucketName() {
    return this.getStringAttribute('s3_export_bucket_name');
  }
  public set s3ExportBucketName(value: string) {
    this._s3ExportBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ExportBucketNameInput() {
    return this._s3ExportBucketName;
  }

  // signal_kafka_poll_timeout_ms - computed: true, optional: true, required: false
  private _signalKafkaPollTimeoutMs?: number; 
  public get signalKafkaPollTimeoutMs() {
    return this.getNumberAttribute('signal_kafka_poll_timeout_ms');
  }
  public set signalKafkaPollTimeoutMs(value: number) {
    this._signalKafkaPollTimeoutMs = value;
  }
  public resetSignalKafkaPollTimeoutMs() {
    this._signalKafkaPollTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalKafkaPollTimeoutMsInput() {
    return this._signalKafkaPollTimeoutMs;
  }

  // struct_encoding_json - computed: true, optional: true, required: false
  private _structEncodingJson?: boolean | cdktf.IResolvable; 
  public get structEncodingJson() {
    return this.getBooleanAttribute('struct_encoding_json');
  }
  public set structEncodingJson(value: boolean | cdktf.IResolvable) {
    this._structEncodingJson = value;
  }
  public resetStructEncodingJson() {
    this._structEncodingJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structEncodingJsonInput() {
    return this._structEncodingJson;
  }

  // table_include_list_user_defined - computed: false, optional: false, required: true
  private _tableIncludeListUserDefined?: string; 
  public get tableIncludeListUserDefined() {
    return this.getStringAttribute('table_include_list_user_defined');
  }
  public set tableIncludeListUserDefined(value: string) {
    this._tableIncludeListUserDefined = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIncludeListUserDefinedInput() {
    return this._tableIncludeListUserDefined;
  }

  // tasks_max - computed: true, optional: true, required: false
  private _tasksMax?: number; 
  public get tasksMax() {
    return this.getNumberAttribute('tasks_max');
  }
  public set tasksMax(value: number) {
    this._tasksMax = value;
  }
  public resetTasksMax() {
    this._tasksMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksMaxInput() {
    return this._tasksMax;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array_encoding_json: cdktf.booleanToTerraform(this._arrayEncodingJson),
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      batch_size: cdktf.numberToTerraform(this._batchSize),
      dynamodb_service_endpoint: cdktf.stringToTerraform(this._dynamodbServiceEndpoint),
      full_export_expiration_time_ms: cdktf.numberToTerraform(this._fullExportExpirationTimeMs),
      incremental_snapshot_chunk_size: cdktf.numberToTerraform(this._incrementalSnapshotChunkSize),
      incremental_snapshot_max_threads: cdktf.numberToTerraform(this._incrementalSnapshotMaxThreads),
      name: cdktf.stringToTerraform(this._name),
      poll_timeout_ms: cdktf.numberToTerraform(this._pollTimeoutMs),
      s3_export_bucket_name: cdktf.stringToTerraform(this._s3ExportBucketName),
      signal_kafka_poll_timeout_ms: cdktf.numberToTerraform(this._signalKafkaPollTimeoutMs),
      struct_encoding_json: cdktf.booleanToTerraform(this._structEncodingJson),
      table_include_list_user_defined: cdktf.stringToTerraform(this._tableIncludeListUserDefined),
      tasks_max: cdktf.numberToTerraform(this._tasksMax),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array_encoding_json: {
        value: cdktf.booleanToHclTerraform(this._arrayEncodingJson),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batch_size: {
        value: cdktf.numberToHclTerraform(this._batchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamodb_service_endpoint: {
        value: cdktf.stringToHclTerraform(this._dynamodbServiceEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_export_expiration_time_ms: {
        value: cdktf.numberToHclTerraform(this._fullExportExpirationTimeMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      incremental_snapshot_chunk_size: {
        value: cdktf.numberToHclTerraform(this._incrementalSnapshotChunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      incremental_snapshot_max_threads: {
        value: cdktf.numberToHclTerraform(this._incrementalSnapshotMaxThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poll_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._pollTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      s3_export_bucket_name: {
        value: cdktf.stringToHclTerraform(this._s3ExportBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_kafka_poll_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._signalKafkaPollTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      struct_encoding_json: {
        value: cdktf.booleanToHclTerraform(this._structEncodingJson),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      table_include_list_user_defined: {
        value: cdktf.stringToHclTerraform(this._tableIncludeListUserDefined),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks_max: {
        value: cdktf.numberToHclTerraform(this._tasksMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
