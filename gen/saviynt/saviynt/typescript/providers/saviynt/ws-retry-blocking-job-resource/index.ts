// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WsRetryBlockingJobResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of WS Blocking Retry Jobs to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#jobs WsRetryBlockingJobResource#jobs}
  */
  readonly jobs: WsRetryBlockingJobResourceJobs[] | cdktf.IResolvable;
}
export interface WsRetryBlockingJobResourceJobs {
  /**
  * Cron expression defining the schedule for the trigger. Example: "0 0 2 * * ?"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#cron_expression WsRetryBlockingJobResource#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Name of the job group associated with the trigger. Example: "utility"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#job_group WsRetryBlockingJobResource#job_group}
  */
  readonly jobGroup: string;
  /**
  * List of security systems for the WS blocking retry job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#security_systems WsRetryBlockingJobResource#security_systems}
  */
  readonly securitySystems?: string[];
  /**
  * Task types for the WS blocking retry job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#task_types WsRetryBlockingJobResource#task_types}
  */
  readonly taskTypes?: string;
  /**
  * Group classification for the trigger. Example: "GRAILS_JOBS"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#trigger_group WsRetryBlockingJobResource#trigger_group}
  */
  readonly triggerGroup?: string;
  /**
  * Unique name of the trigger. Example: "MyTrigger_001"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#trigger_name WsRetryBlockingJobResource#trigger_name}
  */
  readonly triggerName: string;
}

export function wsRetryBlockingJobResourceJobsToTerraform(struct?: WsRetryBlockingJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    job_group: cdktf.stringToTerraform(struct!.jobGroup),
    security_systems: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securitySystems),
    task_types: cdktf.stringToTerraform(struct!.taskTypes),
    trigger_group: cdktf.stringToTerraform(struct!.triggerGroup),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
  }
}


export function wsRetryBlockingJobResourceJobsToHclTerraform(struct?: WsRetryBlockingJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_group: {
      value: cdktf.stringToHclTerraform(struct!.jobGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_systems: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securitySystems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_types: {
      value: cdktf.stringToHclTerraform(struct!.taskTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_group: {
      value: cdktf.stringToHclTerraform(struct!.triggerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_name: {
      value: cdktf.stringToHclTerraform(struct!.triggerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WsRetryBlockingJobResourceJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WsRetryBlockingJobResourceJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._jobGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobGroup = this._jobGroup;
    }
    if (this._securitySystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.securitySystems = this._securitySystems;
    }
    if (this._taskTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTypes = this._taskTypes;
    }
    if (this._triggerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerGroup = this._triggerGroup;
    }
    if (this._triggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerName = this._triggerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WsRetryBlockingJobResourceJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._jobGroup = undefined;
      this._securitySystems = undefined;
      this._taskTypes = undefined;
      this._triggerGroup = undefined;
      this._triggerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpression = value.cronExpression;
      this._jobGroup = value.jobGroup;
      this._securitySystems = value.securitySystems;
      this._taskTypes = value.taskTypes;
      this._triggerGroup = value.triggerGroup;
      this._triggerName = value.triggerName;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // job_group - computed: false, optional: false, required: true
  private _jobGroup?: string; 
  public get jobGroup() {
    return this.getStringAttribute('job_group');
  }
  public set jobGroup(value: string) {
    this._jobGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobGroupInput() {
    return this._jobGroup;
  }

  // security_systems - computed: false, optional: true, required: false
  private _securitySystems?: string[]; 
  public get securitySystems() {
    return this.getListAttribute('security_systems');
  }
  public set securitySystems(value: string[]) {
    this._securitySystems = value;
  }
  public resetSecuritySystems() {
    this._securitySystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySystemsInput() {
    return this._securitySystems;
  }

  // task_types - computed: false, optional: true, required: false
  private _taskTypes?: string; 
  public get taskTypes() {
    return this.getStringAttribute('task_types');
  }
  public set taskTypes(value: string) {
    this._taskTypes = value;
  }
  public resetTaskTypes() {
    this._taskTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypesInput() {
    return this._taskTypes;
  }

  // trigger_group - computed: false, optional: true, required: false
  private _triggerGroup?: string; 
  public get triggerGroup() {
    return this.getStringAttribute('trigger_group');
  }
  public set triggerGroup(value: string) {
    this._triggerGroup = value;
  }
  public resetTriggerGroup() {
    this._triggerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerGroupInput() {
    return this._triggerGroup;
  }

  // trigger_name - computed: false, optional: false, required: true
  private _triggerName?: string; 
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }
  public set triggerName(value: string) {
    this._triggerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNameInput() {
    return this._triggerName;
  }
}

export class WsRetryBlockingJobResourceJobsList extends cdktf.ComplexList {
  public internalValue? : WsRetryBlockingJobResourceJobs[] | cdktf.IResolvable

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
  public get(index: number): WsRetryBlockingJobResourceJobsOutputReference {
    return new WsRetryBlockingJobResourceJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource saviynt_ws_retry_blocking_job_resource}
*/
export class WsRetryBlockingJobResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_ws_retry_blocking_job_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WsRetryBlockingJobResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WsRetryBlockingJobResource to import
  * @param importFromId The id of the existing WsRetryBlockingJobResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WsRetryBlockingJobResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_ws_retry_blocking_job_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/ws_retry_blocking_job_resource saviynt_ws_retry_blocking_job_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WsRetryBlockingJobResourceConfig
  */
  public constructor(scope: Construct, id: string, config: WsRetryBlockingJobResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_ws_retry_blocking_job_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.1',
        providerVersionConstraint: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jobs.internalValue = config.jobs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jobs - computed: false, optional: false, required: true
  private _jobs = new WsRetryBlockingJobResourceJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: WsRetryBlockingJobResourceJobs[] | cdktf.IResolvable) {
    this._jobs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jobs: cdktf.listMapper(wsRetryBlockingJobResourceJobsToTerraform, false)(this._jobs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jobs: {
        value: cdktf.listMapperHcl(wsRetryBlockingJobResourceJobsToHclTerraform, false)(this._jobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WsRetryBlockingJobResourceJobsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
