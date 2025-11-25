// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanusRunJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#id OceanusRunJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Workspace SerialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#work_space_id OceanusRunJob#work_space_id}
  */
  readonly workSpaceId?: string;
  /**
  * run_job_descriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#run_job_descriptions OceanusRunJob#run_job_descriptions}
  */
  readonly runJobDescriptions: OceanusRunJobRunJobDescriptions[] | cdktf.IResolvable;
}
export interface OceanusRunJobRunJobDescriptions {
  /**
  * Custom timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#custom_timestamp OceanusRunJob#custom_timestamp}
  */
  readonly customTimestamp?: number;
  /**
  * A certain version of the current job(Not passed by default as a non-draft job version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#job_config_version OceanusRunJob#job_config_version}
  */
  readonly jobConfigVersion?: number;
  /**
  * Job ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#job_id OceanusRunJob#job_id}
  */
  readonly jobId: string;
  /**
  * The type of the run. 1 indicates start, and 2 indicates resume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#run_type OceanusRunJob#run_type}
  */
  readonly runType: number;
  /**
  * Savepoint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#savepoint_id OceanusRunJob#savepoint_id}
  */
  readonly savepointId?: string;
  /**
  * Savepoint path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#savepoint_path OceanusRunJob#savepoint_path}
  */
  readonly savepointPath?: string;
  /**
  * Compatible with the startup parameters of the old SQL type job: specify the start time point of data source consumption (recommended to pass the value)Ensure that the parameter is LATEST, EARLIEST, T+Timestamp (example: T1557394288000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#start_mode OceanusRunJob#start_mode}
  */
  readonly startMode?: string;
  /**
  * Use the historical version of the system dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#use_old_system_connector OceanusRunJob#use_old_system_connector}
  */
  readonly useOldSystemConnector?: boolean | cdktf.IResolvable;
}

export function oceanusRunJobRunJobDescriptionsToTerraform(struct?: OceanusRunJobRunJobDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_timestamp: cdktf.numberToTerraform(struct!.customTimestamp),
    job_config_version: cdktf.numberToTerraform(struct!.jobConfigVersion),
    job_id: cdktf.stringToTerraform(struct!.jobId),
    run_type: cdktf.numberToTerraform(struct!.runType),
    savepoint_id: cdktf.stringToTerraform(struct!.savepointId),
    savepoint_path: cdktf.stringToTerraform(struct!.savepointPath),
    start_mode: cdktf.stringToTerraform(struct!.startMode),
    use_old_system_connector: cdktf.booleanToTerraform(struct!.useOldSystemConnector),
  }
}


export function oceanusRunJobRunJobDescriptionsToHclTerraform(struct?: OceanusRunJobRunJobDescriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.customTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_config_version: {
      value: cdktf.numberToHclTerraform(struct!.jobConfigVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_id: {
      value: cdktf.stringToHclTerraform(struct!.jobId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_type: {
      value: cdktf.numberToHclTerraform(struct!.runType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    savepoint_id: {
      value: cdktf.stringToHclTerraform(struct!.savepointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    savepoint_path: {
      value: cdktf.stringToHclTerraform(struct!.savepointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_mode: {
      value: cdktf.stringToHclTerraform(struct!.startMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_old_system_connector: {
      value: cdktf.booleanToHclTerraform(struct!.useOldSystemConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusRunJobRunJobDescriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OceanusRunJobRunJobDescriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTimestamp = this._customTimestamp;
    }
    if (this._jobConfigVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobConfigVersion = this._jobConfigVersion;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._runType !== undefined) {
      hasAnyValues = true;
      internalValueResult.runType = this._runType;
    }
    if (this._savepointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.savepointId = this._savepointId;
    }
    if (this._savepointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.savepointPath = this._savepointPath;
    }
    if (this._startMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMode = this._startMode;
    }
    if (this._useOldSystemConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOldSystemConnector = this._useOldSystemConnector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusRunJobRunJobDescriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTimestamp = undefined;
      this._jobConfigVersion = undefined;
      this._jobId = undefined;
      this._runType = undefined;
      this._savepointId = undefined;
      this._savepointPath = undefined;
      this._startMode = undefined;
      this._useOldSystemConnector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTimestamp = value.customTimestamp;
      this._jobConfigVersion = value.jobConfigVersion;
      this._jobId = value.jobId;
      this._runType = value.runType;
      this._savepointId = value.savepointId;
      this._savepointPath = value.savepointPath;
      this._startMode = value.startMode;
      this._useOldSystemConnector = value.useOldSystemConnector;
    }
  }

  // custom_timestamp - computed: false, optional: true, required: false
  private _customTimestamp?: number; 
  public get customTimestamp() {
    return this.getNumberAttribute('custom_timestamp');
  }
  public set customTimestamp(value: number) {
    this._customTimestamp = value;
  }
  public resetCustomTimestamp() {
    this._customTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTimestampInput() {
    return this._customTimestamp;
  }

  // job_config_version - computed: false, optional: true, required: false
  private _jobConfigVersion?: number; 
  public get jobConfigVersion() {
    return this.getNumberAttribute('job_config_version');
  }
  public set jobConfigVersion(value: number) {
    this._jobConfigVersion = value;
  }
  public resetJobConfigVersion() {
    this._jobConfigVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobConfigVersionInput() {
    return this._jobConfigVersion;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // run_type - computed: false, optional: false, required: true
  private _runType?: number; 
  public get runType() {
    return this.getNumberAttribute('run_type');
  }
  public set runType(value: number) {
    this._runType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runTypeInput() {
    return this._runType;
  }

  // savepoint_id - computed: false, optional: true, required: false
  private _savepointId?: string; 
  public get savepointId() {
    return this.getStringAttribute('savepoint_id');
  }
  public set savepointId(value: string) {
    this._savepointId = value;
  }
  public resetSavepointId() {
    this._savepointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savepointIdInput() {
    return this._savepointId;
  }

  // savepoint_path - computed: false, optional: true, required: false
  private _savepointPath?: string; 
  public get savepointPath() {
    return this.getStringAttribute('savepoint_path');
  }
  public set savepointPath(value: string) {
    this._savepointPath = value;
  }
  public resetSavepointPath() {
    this._savepointPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savepointPathInput() {
    return this._savepointPath;
  }

  // start_mode - computed: false, optional: true, required: false
  private _startMode?: string; 
  public get startMode() {
    return this.getStringAttribute('start_mode');
  }
  public set startMode(value: string) {
    this._startMode = value;
  }
  public resetStartMode() {
    this._startMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startModeInput() {
    return this._startMode;
  }

  // use_old_system_connector - computed: false, optional: true, required: false
  private _useOldSystemConnector?: boolean | cdktf.IResolvable; 
  public get useOldSystemConnector() {
    return this.getBooleanAttribute('use_old_system_connector');
  }
  public set useOldSystemConnector(value: boolean | cdktf.IResolvable) {
    this._useOldSystemConnector = value;
  }
  public resetUseOldSystemConnector() {
    this._useOldSystemConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOldSystemConnectorInput() {
    return this._useOldSystemConnector;
  }
}

export class OceanusRunJobRunJobDescriptionsList extends cdktf.ComplexList {
  public internalValue? : OceanusRunJobRunJobDescriptions[] | cdktf.IResolvable

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
  public get(index: number): OceanusRunJobRunJobDescriptionsOutputReference {
    return new OceanusRunJobRunJobDescriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job tencentcloud_oceanus_run_job}
*/
export class OceanusRunJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_run_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanusRunJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanusRunJob to import
  * @param importFromId The id of the existing OceanusRunJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanusRunJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_run_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/oceanus_run_job tencentcloud_oceanus_run_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanusRunJobConfig
  */
  public constructor(scope: Construct, id: string, config: OceanusRunJobConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_run_job',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._workSpaceId = config.workSpaceId;
    this._runJobDescriptions.internalValue = config.runJobDescriptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // work_space_id - computed: false, optional: true, required: false
  private _workSpaceId?: string; 
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }
  public set workSpaceId(value: string) {
    this._workSpaceId = value;
  }
  public resetWorkSpaceId() {
    this._workSpaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workSpaceIdInput() {
    return this._workSpaceId;
  }

  // run_job_descriptions - computed: false, optional: false, required: true
  private _runJobDescriptions = new OceanusRunJobRunJobDescriptionsList(this, "run_job_descriptions", false);
  public get runJobDescriptions() {
    return this._runJobDescriptions;
  }
  public putRunJobDescriptions(value: OceanusRunJobRunJobDescriptions[] | cdktf.IResolvable) {
    this._runJobDescriptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobDescriptionsInput() {
    return this._runJobDescriptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
      run_job_descriptions: cdktf.listMapper(oceanusRunJobRunJobDescriptionsToTerraform, true)(this._runJobDescriptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_space_id: {
        value: cdktf.stringToHclTerraform(this._workSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_job_descriptions: {
        value: cdktf.listMapperHcl(oceanusRunJobRunJobDescriptionsToHclTerraform, true)(this._runJobDescriptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanusRunJobRunJobDescriptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
