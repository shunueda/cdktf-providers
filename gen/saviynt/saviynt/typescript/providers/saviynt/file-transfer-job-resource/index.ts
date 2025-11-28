// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileTransferJobResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of File Transfer Job configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#jobs FileTransferJobResource#jobs}
  */
  readonly jobs: FileTransferJobResourceJobs[] | cdktf.IResolvable;
}
export interface FileTransferJobResourceJobs {
  /**
  * Cron expression defining the schedule for the trigger. Example: "0 0 2 * * ?"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#cron_exp FileTransferJobResource#cron_exp}
  */
  readonly cronExp: string;
  /**
  * External connection key for file transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#external_connection_key FileTransferJobResource#external_connection_key}
  */
  readonly externalConnectionKey: string;
  /**
  * File transfer action (UPLOAD or DOWNLOAD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#file_transfer_action FileTransferJobResource#file_transfer_action}
  */
  readonly fileTransferAction: string;
  /**
  * Group classification for the trigger. Example: "GRAILS_JOBS"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#group FileTransferJobResource#group}
  */
  readonly group: string;
  /**
  * Name of the job group associated with the trigger. Example: "utility"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#job_group FileTransferJobResource#job_group}
  */
  readonly jobGroup: string;
  /**
  * Unique name of the trigger. Example: "MyTrigger_001"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#name FileTransferJobResource#name}
  */
  readonly name: string;
}

export function fileTransferJobResourceJobsToTerraform(struct?: FileTransferJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_exp: cdktf.stringToTerraform(struct!.cronExp),
    external_connection_key: cdktf.stringToTerraform(struct!.externalConnectionKey),
    file_transfer_action: cdktf.stringToTerraform(struct!.fileTransferAction),
    group: cdktf.stringToTerraform(struct!.group),
    job_group: cdktf.stringToTerraform(struct!.jobGroup),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fileTransferJobResourceJobsToHclTerraform(struct?: FileTransferJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_exp: {
      value: cdktf.stringToHclTerraform(struct!.cronExp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_connection_key: {
      value: cdktf.stringToHclTerraform(struct!.externalConnectionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_transfer_action: {
      value: cdktf.stringToHclTerraform(struct!.fileTransferAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileTransferJobResourceJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileTransferJobResourceJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExp = this._cronExp;
    }
    if (this._externalConnectionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnectionKey = this._externalConnectionKey;
    }
    if (this._fileTransferAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTransferAction = this._fileTransferAction;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jobGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobGroup = this._jobGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileTransferJobResourceJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExp = undefined;
      this._externalConnectionKey = undefined;
      this._fileTransferAction = undefined;
      this._group = undefined;
      this._jobGroup = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExp = value.cronExp;
      this._externalConnectionKey = value.externalConnectionKey;
      this._fileTransferAction = value.fileTransferAction;
      this._group = value.group;
      this._jobGroup = value.jobGroup;
      this._name = value.name;
    }
  }

  // cron_exp - computed: false, optional: false, required: true
  private _cronExp?: string; 
  public get cronExp() {
    return this.getStringAttribute('cron_exp');
  }
  public set cronExp(value: string) {
    this._cronExp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpInput() {
    return this._cronExp;
  }

  // external_connection_key - computed: false, optional: false, required: true
  private _externalConnectionKey?: string; 
  public get externalConnectionKey() {
    return this.getStringAttribute('external_connection_key');
  }
  public set externalConnectionKey(value: string) {
    this._externalConnectionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectionKeyInput() {
    return this._externalConnectionKey;
  }

  // file_transfer_action - computed: false, optional: false, required: true
  private _fileTransferAction?: string; 
  public get fileTransferAction() {
    return this.getStringAttribute('file_transfer_action');
  }
  public set fileTransferAction(value: string) {
    this._fileTransferAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTransferActionInput() {
    return this._fileTransferAction;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class FileTransferJobResourceJobsList extends cdktf.ComplexList {
  public internalValue? : FileTransferJobResourceJobs[] | cdktf.IResolvable

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
  public get(index: number): FileTransferJobResourceJobsOutputReference {
    return new FileTransferJobResourceJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource saviynt_file_transfer_job_resource}
*/
export class FileTransferJobResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_file_transfer_job_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileTransferJobResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileTransferJobResource to import
  * @param importFromId The id of the existing FileTransferJobResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileTransferJobResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_file_transfer_job_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/file_transfer_job_resource saviynt_file_transfer_job_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileTransferJobResourceConfig
  */
  public constructor(scope: Construct, id: string, config: FileTransferJobResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_file_transfer_job_resource',
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
  private _jobs = new FileTransferJobResourceJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: FileTransferJobResourceJobs[] | cdktf.IResolvable) {
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
      jobs: cdktf.listMapper(fileTransferJobResourceJobsToTerraform, false)(this._jobs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jobs: {
        value: cdktf.listMapperHcl(fileTransferJobResourceJobsToHclTerraform, false)(this._jobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileTransferJobResourceJobsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
