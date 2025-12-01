// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcmSapUserJobResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of ECM SAP User Jobs to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource#jobs EcmSapUserJobResource#jobs}
  */
  readonly jobs: EcmSapUserJobResourceJobs[] | cdktf.IResolvable;
}
export interface EcmSapUserJobResourceJobs {
  /**
  * Cron expression defining the schedule for the trigger. Example: "0 0 2 * * ?"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource#cron_expression EcmSapUserJobResource#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Name of the job group associated with the trigger. Example: "utility"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource#job_group EcmSapUserJobResource#job_group}
  */
  readonly jobGroup: string;
  /**
  * Action to take on failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource#on_failure EcmSapUserJobResource#on_failure}
  */
  readonly onFailure?: string;
  /**
  * Group classification for the trigger. Example: "GRAILS_JOBS"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource#trigger_group EcmSapUserJobResource#trigger_group}
  */
  readonly triggerGroup?: string;
  /**
  * Unique name of the trigger. Example: "MyTrigger_001"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource#trigger_name EcmSapUserJobResource#trigger_name}
  */
  readonly triggerName: string;
}

export function ecmSapUserJobResourceJobsToTerraform(struct?: EcmSapUserJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    job_group: cdktf.stringToTerraform(struct!.jobGroup),
    on_failure: cdktf.stringToTerraform(struct!.onFailure),
    trigger_group: cdktf.stringToTerraform(struct!.triggerGroup),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
  }
}


export function ecmSapUserJobResourceJobsToHclTerraform(struct?: EcmSapUserJobResourceJobs | cdktf.IResolvable): any {
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
    on_failure: {
      value: cdktf.stringToHclTerraform(struct!.onFailure),
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

export class EcmSapUserJobResourceJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcmSapUserJobResourceJobs | cdktf.IResolvable | undefined {
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
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
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

  public set internalValue(value: EcmSapUserJobResourceJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpression = undefined;
      this._jobGroup = undefined;
      this._onFailure = undefined;
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
      this._onFailure = value.onFailure;
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

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string; 
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }
  public set onFailure(value: string) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
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

export class EcmSapUserJobResourceJobsList extends cdktf.ComplexList {
  public internalValue? : EcmSapUserJobResourceJobs[] | cdktf.IResolvable

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
  public get(index: number): EcmSapUserJobResourceJobsOutputReference {
    return new EcmSapUserJobResourceJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource saviynt_ecm_sap_user_job_resource}
*/
export class EcmSapUserJobResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_ecm_sap_user_job_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcmSapUserJobResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcmSapUserJobResource to import
  * @param importFromId The id of the existing EcmSapUserJobResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcmSapUserJobResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_ecm_sap_user_job_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/ecm_sap_user_job_resource saviynt_ecm_sap_user_job_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcmSapUserJobResourceConfig
  */
  public constructor(scope: Construct, id: string, config: EcmSapUserJobResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_ecm_sap_user_job_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.2',
        providerVersionConstraint: '0.3.2'
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
  private _jobs = new EcmSapUserJobResourceJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: EcmSapUserJobResourceJobs[] | cdktf.IResolvable) {
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
      jobs: cdktf.listMapper(ecmSapUserJobResourceJobsToTerraform, false)(this._jobs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jobs: {
        value: cdktf.listMapperHcl(ecmSapUserJobResourceJobsToHclTerraform, false)(this._jobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcmSapUserJobResourceJobsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
