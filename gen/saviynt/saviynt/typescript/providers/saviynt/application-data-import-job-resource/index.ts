// https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationDataImportJobResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Application Data Import Jobs to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#jobs ApplicationDataImportJobResource#jobs}
  */
  readonly jobs: ApplicationDataImportJobResourceJobs[] | cdktf.IResolvable;
}
export interface ApplicationDataImportJobResourceJobs {
  /**
  * Accounts or access configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#accounts_or_access ApplicationDataImportJobResource#accounts_or_access}
  */
  readonly accountsOrAccess?: string;
  /**
  * Cron expression defining the schedule for the trigger. Example: "0 0 2 * * ?"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#cron_expression ApplicationDataImportJobResource#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * External connection configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#external_conn ApplicationDataImportJobResource#external_conn}
  */
  readonly externalConn?: string;
  /**
  * Full or incremental import type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#full_or_incremental ApplicationDataImportJobResource#full_or_incremental}
  */
  readonly fullOrIncremental?: string;
  /**
  * Name of the job group associated with the trigger. Example: "utility"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#job_group ApplicationDataImportJobResource#job_group}
  */
  readonly jobGroup: string;
  /**
  * Security system for the application data import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#security_system ApplicationDataImportJobResource#security_system}
  */
  readonly securitySystem: string;
  /**
  * Group classification for the trigger. Example: "GRAILS_JOBS"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#trigger_group ApplicationDataImportJobResource#trigger_group}
  */
  readonly triggerGroup?: string;
  /**
  * Unique name of the trigger. Example: "MyTrigger_001"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#trigger_name ApplicationDataImportJobResource#trigger_name}
  */
  readonly triggerName: string;
}

export function applicationDataImportJobResourceJobsToTerraform(struct?: ApplicationDataImportJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts_or_access: cdktf.stringToTerraform(struct!.accountsOrAccess),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    external_conn: cdktf.stringToTerraform(struct!.externalConn),
    full_or_incremental: cdktf.stringToTerraform(struct!.fullOrIncremental),
    job_group: cdktf.stringToTerraform(struct!.jobGroup),
    security_system: cdktf.stringToTerraform(struct!.securitySystem),
    trigger_group: cdktf.stringToTerraform(struct!.triggerGroup),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
  }
}


export function applicationDataImportJobResourceJobsToHclTerraform(struct?: ApplicationDataImportJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts_or_access: {
      value: cdktf.stringToHclTerraform(struct!.accountsOrAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_conn: {
      value: cdktf.stringToHclTerraform(struct!.externalConn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_or_incremental: {
      value: cdktf.stringToHclTerraform(struct!.fullOrIncremental),
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
    security_system: {
      value: cdktf.stringToHclTerraform(struct!.securitySystem),
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

export class ApplicationDataImportJobResourceJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationDataImportJobResourceJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountsOrAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountsOrAccess = this._accountsOrAccess;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._externalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConn = this._externalConn;
    }
    if (this._fullOrIncremental !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullOrIncremental = this._fullOrIncremental;
    }
    if (this._jobGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobGroup = this._jobGroup;
    }
    if (this._securitySystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.securitySystem = this._securitySystem;
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

  public set internalValue(value: ApplicationDataImportJobResourceJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountsOrAccess = undefined;
      this._cronExpression = undefined;
      this._externalConn = undefined;
      this._fullOrIncremental = undefined;
      this._jobGroup = undefined;
      this._securitySystem = undefined;
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
      this._accountsOrAccess = value.accountsOrAccess;
      this._cronExpression = value.cronExpression;
      this._externalConn = value.externalConn;
      this._fullOrIncremental = value.fullOrIncremental;
      this._jobGroup = value.jobGroup;
      this._securitySystem = value.securitySystem;
      this._triggerGroup = value.triggerGroup;
      this._triggerName = value.triggerName;
    }
  }

  // accounts_or_access - computed: false, optional: true, required: false
  private _accountsOrAccess?: string; 
  public get accountsOrAccess() {
    return this.getStringAttribute('accounts_or_access');
  }
  public set accountsOrAccess(value: string) {
    this._accountsOrAccess = value;
  }
  public resetAccountsOrAccess() {
    this._accountsOrAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsOrAccessInput() {
    return this._accountsOrAccess;
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

  // external_conn - computed: false, optional: true, required: false
  private _externalConn?: string; 
  public get externalConn() {
    return this.getStringAttribute('external_conn');
  }
  public set externalConn(value: string) {
    this._externalConn = value;
  }
  public resetExternalConn() {
    this._externalConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnInput() {
    return this._externalConn;
  }

  // full_or_incremental - computed: false, optional: true, required: false
  private _fullOrIncremental?: string; 
  public get fullOrIncremental() {
    return this.getStringAttribute('full_or_incremental');
  }
  public set fullOrIncremental(value: string) {
    this._fullOrIncremental = value;
  }
  public resetFullOrIncremental() {
    this._fullOrIncremental = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullOrIncrementalInput() {
    return this._fullOrIncremental;
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

  // security_system - computed: false, optional: false, required: true
  private _securitySystem?: string; 
  public get securitySystem() {
    return this.getStringAttribute('security_system');
  }
  public set securitySystem(value: string) {
    this._securitySystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySystemInput() {
    return this._securitySystem;
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

export class ApplicationDataImportJobResourceJobsList extends cdktf.ComplexList {
  public internalValue? : ApplicationDataImportJobResourceJobs[] | cdktf.IResolvable

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
  public get(index: number): ApplicationDataImportJobResourceJobsOutputReference {
    return new ApplicationDataImportJobResourceJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource saviynt_application_data_import_job_resource}
*/
export class ApplicationDataImportJobResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_application_data_import_job_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationDataImportJobResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationDataImportJobResource to import
  * @param importFromId The id of the existing ApplicationDataImportJobResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationDataImportJobResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_application_data_import_job_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.0/docs/resources/application_data_import_job_resource saviynt_application_data_import_job_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationDataImportJobResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationDataImportJobResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_application_data_import_job_resource',
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
    this._jobs.internalValue = config.jobs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jobs - computed: false, optional: false, required: true
  private _jobs = new ApplicationDataImportJobResourceJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: ApplicationDataImportJobResourceJobs[] | cdktf.IResolvable) {
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
      jobs: cdktf.listMapper(applicationDataImportJobResourceJobsToTerraform, false)(this._jobs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jobs: {
        value: cdktf.listMapperHcl(applicationDataImportJobResourceJobsToHclTerraform, false)(this._jobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationDataImportJobResourceJobsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
