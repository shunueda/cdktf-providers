// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbStreamingJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#account GpdbStreamingJob#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#consistency GpdbStreamingJob#consistency}
  */
  readonly consistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#data_source_id GpdbStreamingJob#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#db_instance_id GpdbStreamingJob#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#dest_columns GpdbStreamingJob#dest_columns}
  */
  readonly destColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#dest_database GpdbStreamingJob#dest_database}
  */
  readonly destDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#dest_schema GpdbStreamingJob#dest_schema}
  */
  readonly destSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#dest_table GpdbStreamingJob#dest_table}
  */
  readonly destTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#error_limit_count GpdbStreamingJob#error_limit_count}
  */
  readonly errorLimitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#fallback_offset GpdbStreamingJob#fallback_offset}
  */
  readonly fallbackOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#group_name GpdbStreamingJob#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#id GpdbStreamingJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#job_config GpdbStreamingJob#job_config}
  */
  readonly jobConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#job_description GpdbStreamingJob#job_description}
  */
  readonly jobDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#job_name GpdbStreamingJob#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#match_columns GpdbStreamingJob#match_columns}
  */
  readonly matchColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#mode GpdbStreamingJob#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#password GpdbStreamingJob#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#src_columns GpdbStreamingJob#src_columns}
  */
  readonly srcColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#try_run GpdbStreamingJob#try_run}
  */
  readonly tryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#update_columns GpdbStreamingJob#update_columns}
  */
  readonly updateColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#write_mode GpdbStreamingJob#write_mode}
  */
  readonly writeMode?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#timeouts GpdbStreamingJob#timeouts}
  */
  readonly timeouts?: GpdbStreamingJobTimeouts;
}
export interface GpdbStreamingJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#create GpdbStreamingJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#delete GpdbStreamingJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#update GpdbStreamingJob#update}
  */
  readonly update?: string;
}

export function gpdbStreamingJobTimeoutsToTerraform(struct?: GpdbStreamingJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gpdbStreamingJobTimeoutsToHclTerraform(struct?: GpdbStreamingJobTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbStreamingJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbStreamingJobTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbStreamingJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job alicloud_gpdb_streaming_job}
*/
export class GpdbStreamingJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_streaming_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbStreamingJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbStreamingJob to import
  * @param importFromId The id of the existing GpdbStreamingJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbStreamingJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_streaming_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/gpdb_streaming_job alicloud_gpdb_streaming_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbStreamingJobConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbStreamingJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_streaming_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._consistency = config.consistency;
    this._dataSourceId = config.dataSourceId;
    this._dbInstanceId = config.dbInstanceId;
    this._destColumns = config.destColumns;
    this._destDatabase = config.destDatabase;
    this._destSchema = config.destSchema;
    this._destTable = config.destTable;
    this._errorLimitCount = config.errorLimitCount;
    this._fallbackOffset = config.fallbackOffset;
    this._groupName = config.groupName;
    this._id = config.id;
    this._jobConfig = config.jobConfig;
    this._jobDescription = config.jobDescription;
    this._jobName = config.jobName;
    this._matchColumns = config.matchColumns;
    this._mode = config.mode;
    this._password = config.password;
    this._srcColumns = config.srcColumns;
    this._tryRun = config.tryRun;
    this._updateColumns = config.updateColumns;
    this._writeMode = config.writeMode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // consistency - computed: false, optional: true, required: false
  private _consistency?: string; 
  public get consistency() {
    return this.getStringAttribute('consistency');
  }
  public set consistency(value: string) {
    this._consistency = value;
  }
  public resetConsistency() {
    this._consistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyInput() {
    return this._consistency;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // dest_columns - computed: false, optional: true, required: false
  private _destColumns?: string[]; 
  public get destColumns() {
    return this.getListAttribute('dest_columns');
  }
  public set destColumns(value: string[]) {
    this._destColumns = value;
  }
  public resetDestColumns() {
    this._destColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destColumnsInput() {
    return this._destColumns;
  }

  // dest_database - computed: false, optional: true, required: false
  private _destDatabase?: string; 
  public get destDatabase() {
    return this.getStringAttribute('dest_database');
  }
  public set destDatabase(value: string) {
    this._destDatabase = value;
  }
  public resetDestDatabase() {
    this._destDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destDatabaseInput() {
    return this._destDatabase;
  }

  // dest_schema - computed: false, optional: true, required: false
  private _destSchema?: string; 
  public get destSchema() {
    return this.getStringAttribute('dest_schema');
  }
  public set destSchema(value: string) {
    this._destSchema = value;
  }
  public resetDestSchema() {
    this._destSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destSchemaInput() {
    return this._destSchema;
  }

  // dest_table - computed: false, optional: true, required: false
  private _destTable?: string; 
  public get destTable() {
    return this.getStringAttribute('dest_table');
  }
  public set destTable(value: string) {
    this._destTable = value;
  }
  public resetDestTable() {
    this._destTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destTableInput() {
    return this._destTable;
  }

  // error_limit_count - computed: false, optional: true, required: false
  private _errorLimitCount?: number; 
  public get errorLimitCount() {
    return this.getNumberAttribute('error_limit_count');
  }
  public set errorLimitCount(value: number) {
    this._errorLimitCount = value;
  }
  public resetErrorLimitCount() {
    this._errorLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitCountInput() {
    return this._errorLimitCount;
  }

  // fallback_offset - computed: false, optional: true, required: false
  private _fallbackOffset?: string; 
  public get fallbackOffset() {
    return this.getStringAttribute('fallback_offset');
  }
  public set fallbackOffset(value: string) {
    this._fallbackOffset = value;
  }
  public resetFallbackOffset() {
    this._fallbackOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackOffsetInput() {
    return this._fallbackOffset;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // job_config - computed: false, optional: true, required: false
  private _jobConfig?: string; 
  public get jobConfig() {
    return this.getStringAttribute('job_config');
  }
  public set jobConfig(value: string) {
    this._jobConfig = value;
  }
  public resetJobConfig() {
    this._jobConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigInput() {
    return this._jobConfig;
  }

  // job_description - computed: false, optional: true, required: false
  private _jobDescription?: string; 
  public get jobDescription() {
    return this.getStringAttribute('job_description');
  }
  public set jobDescription(value: string) {
    this._jobDescription = value;
  }
  public resetJobDescription() {
    this._jobDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDescriptionInput() {
    return this._jobDescription;
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // job_name - computed: false, optional: false, required: true
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // match_columns - computed: false, optional: true, required: false
  private _matchColumns?: string[]; 
  public get matchColumns() {
    return this.getListAttribute('match_columns');
  }
  public set matchColumns(value: string[]) {
    this._matchColumns = value;
  }
  public resetMatchColumns() {
    this._matchColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchColumnsInput() {
    return this._matchColumns;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // src_columns - computed: false, optional: true, required: false
  private _srcColumns?: string[]; 
  public get srcColumns() {
    return this.getListAttribute('src_columns');
  }
  public set srcColumns(value: string[]) {
    this._srcColumns = value;
  }
  public resetSrcColumns() {
    this._srcColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcColumnsInput() {
    return this._srcColumns;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // try_run - computed: false, optional: true, required: false
  private _tryRun?: boolean | cdktf.IResolvable; 
  public get tryRun() {
    return this.getBooleanAttribute('try_run');
  }
  public set tryRun(value: boolean | cdktf.IResolvable) {
    this._tryRun = value;
  }
  public resetTryRun() {
    this._tryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryRunInput() {
    return this._tryRun;
  }

  // update_columns - computed: false, optional: true, required: false
  private _updateColumns?: string[]; 
  public get updateColumns() {
    return this.getListAttribute('update_columns');
  }
  public set updateColumns(value: string[]) {
    this._updateColumns = value;
  }
  public resetUpdateColumns() {
    this._updateColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateColumnsInput() {
    return this._updateColumns;
  }

  // write_mode - computed: false, optional: true, required: false
  private _writeMode?: string; 
  public get writeMode() {
    return this.getStringAttribute('write_mode');
  }
  public set writeMode(value: string) {
    this._writeMode = value;
  }
  public resetWriteMode() {
    this._writeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeModeInput() {
    return this._writeMode;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbStreamingJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbStreamingJobTimeouts) {
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
      account: cdktf.stringToTerraform(this._account),
      consistency: cdktf.stringToTerraform(this._consistency),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      dest_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destColumns),
      dest_database: cdktf.stringToTerraform(this._destDatabase),
      dest_schema: cdktf.stringToTerraform(this._destSchema),
      dest_table: cdktf.stringToTerraform(this._destTable),
      error_limit_count: cdktf.numberToTerraform(this._errorLimitCount),
      fallback_offset: cdktf.stringToTerraform(this._fallbackOffset),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      job_config: cdktf.stringToTerraform(this._jobConfig),
      job_description: cdktf.stringToTerraform(this._jobDescription),
      job_name: cdktf.stringToTerraform(this._jobName),
      match_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchColumns),
      mode: cdktf.stringToTerraform(this._mode),
      password: cdktf.stringToTerraform(this._password),
      src_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcColumns),
      try_run: cdktf.booleanToTerraform(this._tryRun),
      update_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._updateColumns),
      write_mode: cdktf.stringToTerraform(this._writeMode),
      timeouts: gpdbStreamingJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consistency: {
        value: cdktf.stringToHclTerraform(this._consistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dest_database: {
        value: cdktf.stringToHclTerraform(this._destDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_schema: {
        value: cdktf.stringToHclTerraform(this._destSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_table: {
        value: cdktf.stringToHclTerraform(this._destTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_limit_count: {
        value: cdktf.numberToHclTerraform(this._errorLimitCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fallback_offset: {
        value: cdktf.stringToHclTerraform(this._fallbackOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      job_config: {
        value: cdktf.stringToHclTerraform(this._jobConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_description: {
        value: cdktf.stringToHclTerraform(this._jobDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      try_run: {
        value: cdktf.booleanToHclTerraform(this._tryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._updateColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      write_mode: {
        value: cdktf.stringToHclTerraform(this._writeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gpdbStreamingJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbStreamingJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
