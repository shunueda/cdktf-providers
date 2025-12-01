// https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountsImportIncrementalJobResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Accounts Import Incremental Job configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource#jobs AccountsImportIncrementalJobResource#jobs}
  */
  readonly jobs: AccountsImportIncrementalJobResourceJobs[] | cdktf.IResolvable;
}
export interface AccountsImportIncrementalJobResourceJobs {
  /**
  * Connection name for the accounts import incremental job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource#connection_name AccountsImportIncrementalJobResource#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Cron expression defining the schedule for the trigger. Example: "0 0 2 * * ?"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource#cron_exp AccountsImportIncrementalJobResource#cron_exp}
  */
  readonly cronExp: string;
  /**
  * Group classification for the trigger. Example: "GRAILS_JOBS"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource#group AccountsImportIncrementalJobResource#group}
  */
  readonly group: string;
  /**
  * Name of the job group associated with the trigger. Example: "utility"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource#job_group AccountsImportIncrementalJobResource#job_group}
  */
  readonly jobGroup: string;
  /**
  * Unique name of the trigger. Example: "MyTrigger_001"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource#name AccountsImportIncrementalJobResource#name}
  */
  readonly name: string;
}

export function accountsImportIncrementalJobResourceJobsToTerraform(struct?: AccountsImportIncrementalJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    cron_exp: cdktf.stringToTerraform(struct!.cronExp),
    group: cdktf.stringToTerraform(struct!.group),
    job_group: cdktf.stringToTerraform(struct!.jobGroup),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function accountsImportIncrementalJobResourceJobsToHclTerraform(struct?: AccountsImportIncrementalJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_exp: {
      value: cdktf.stringToHclTerraform(struct!.cronExp),
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

export class AccountsImportIncrementalJobResourceJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountsImportIncrementalJobResourceJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._cronExp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExp = this._cronExp;
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

  public set internalValue(value: AccountsImportIncrementalJobResourceJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionName = undefined;
      this._cronExp = undefined;
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
      this._connectionName = value.connectionName;
      this._cronExp = value.cronExp;
      this._group = value.group;
      this._jobGroup = value.jobGroup;
      this._name = value.name;
    }
  }

  // connection_name - computed: false, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
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

export class AccountsImportIncrementalJobResourceJobsList extends cdktf.ComplexList {
  public internalValue? : AccountsImportIncrementalJobResourceJobs[] | cdktf.IResolvable

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
  public get(index: number): AccountsImportIncrementalJobResourceJobsOutputReference {
    return new AccountsImportIncrementalJobResourceJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource saviynt_accounts_import_incremental_job_resource}
*/
export class AccountsImportIncrementalJobResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_accounts_import_incremental_job_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountsImportIncrementalJobResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountsImportIncrementalJobResource to import
  * @param importFromId The id of the existing AccountsImportIncrementalJobResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountsImportIncrementalJobResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_accounts_import_incremental_job_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.2/docs/resources/accounts_import_incremental_job_resource saviynt_accounts_import_incremental_job_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountsImportIncrementalJobResourceConfig
  */
  public constructor(scope: Construct, id: string, config: AccountsImportIncrementalJobResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_accounts_import_incremental_job_resource',
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
  private _jobs = new AccountsImportIncrementalJobResourceJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: AccountsImportIncrementalJobResourceJobs[] | cdktf.IResolvable) {
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
      jobs: cdktf.listMapper(accountsImportIncrementalJobResourceJobsToTerraform, false)(this._jobs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jobs: {
        value: cdktf.listMapperHcl(accountsImportIncrementalJobResourceJobsToHclTerraform, false)(this._jobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountsImportIncrementalJobResourceJobsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
