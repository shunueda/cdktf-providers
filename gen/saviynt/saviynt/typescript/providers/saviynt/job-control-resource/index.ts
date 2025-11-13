// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobControlResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of job objects to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource#run_jobs JobControlResource#run_jobs}
  */
  readonly runJobs?: JobControlResourceRunJobs[] | cdktf.IResolvable;
}
export interface JobControlResourceRunJobs {
  /**
  * Job group for the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource#job_group JobControlResource#job_group}
  */
  readonly jobGroup: string;
  /**
  * Name of the job to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource#job_name JobControlResource#job_name}
  */
  readonly jobName: string;
  /**
  * Version identifier to trigger job run. Change this value to trigger re-run of the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource#run_job_version JobControlResource#run_job_version}
  */
  readonly runJobVersion?: string;
  /**
  * Trigger name for the job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource#trigger_name JobControlResource#trigger_name}
  */
  readonly triggerName: string;
}

export function jobControlResourceRunJobsToTerraform(struct?: JobControlResourceRunJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_group: cdktf.stringToTerraform(struct!.jobGroup),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    run_job_version: cdktf.stringToTerraform(struct!.runJobVersion),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
  }
}


export function jobControlResourceRunJobsToHclTerraform(struct?: JobControlResourceRunJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_group: {
      value: cdktf.stringToHclTerraform(struct!.jobGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_name: {
      value: cdktf.stringToHclTerraform(struct!.jobName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_job_version: {
      value: cdktf.stringToHclTerraform(struct!.runJobVersion),
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

export class JobControlResourceRunJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobControlResourceRunJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobGroup = this._jobGroup;
    }
    if (this._jobName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobName = this._jobName;
    }
    if (this._runJobVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runJobVersion = this._runJobVersion;
    }
    if (this._triggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerName = this._triggerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobControlResourceRunJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobGroup = undefined;
      this._jobName = undefined;
      this._runJobVersion = undefined;
      this._triggerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobGroup = value.jobGroup;
      this._jobName = value.jobName;
      this._runJobVersion = value.runJobVersion;
      this._triggerName = value.triggerName;
    }
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

  // run_job_version - computed: false, optional: true, required: false
  private _runJobVersion?: string; 
  public get runJobVersion() {
    return this.getStringAttribute('run_job_version');
  }
  public set runJobVersion(value: string) {
    this._runJobVersion = value;
  }
  public resetRunJobVersion() {
    this._runJobVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobVersionInput() {
    return this._runJobVersion;
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

export class JobControlResourceRunJobsList extends cdktf.ComplexList {
  public internalValue? : JobControlResourceRunJobs[] | cdktf.IResolvable

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
  public get(index: number): JobControlResourceRunJobsOutputReference {
    return new JobControlResourceRunJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource saviynt_job_control_resource}
*/
export class JobControlResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_job_control_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobControlResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobControlResource to import
  * @param importFromId The id of the existing JobControlResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobControlResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_job_control_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/job_control_resource saviynt_job_control_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobControlResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: JobControlResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'saviynt_job_control_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._runJobs.internalValue = config.runJobs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // run_jobs - computed: false, optional: true, required: false
  private _runJobs = new JobControlResourceRunJobsList(this, "run_jobs", true);
  public get runJobs() {
    return this._runJobs;
  }
  public putRunJobs(value: JobControlResourceRunJobs[] | cdktf.IResolvable) {
    this._runJobs.internalValue = value;
  }
  public resetRunJobs() {
    this._runJobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runJobsInput() {
    return this._runJobs.internalValue;
  }

  // run_messages - computed: true, optional: false, required: false
  private _runMessages = new cdktf.StringMap(this, "run_messages");
  public get runMessages() {
    return this._runMessages;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      run_jobs: cdktf.listMapper(jobControlResourceRunJobsToTerraform, false)(this._runJobs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      run_jobs: {
        value: cdktf.listMapperHcl(jobControlResourceRunJobsToHclTerraform, false)(this._runJobs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "JobControlResourceRunJobsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
