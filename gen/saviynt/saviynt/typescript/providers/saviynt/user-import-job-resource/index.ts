// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserImportJobResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of User Import Jobs to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#jobs UserImportJobResource#jobs}
  */
  readonly jobs: UserImportJobResourceJobs[] | cdktf.IResolvable;
}
export interface UserImportJobResourceJobs {
  /**
  * Build user map configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#build_user_map UserImportJobResource#build_user_map}
  */
  readonly buildUserMap?: string;
  /**
  * Check rules configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#check_rules UserImportJobResource#check_rules}
  */
  readonly checkRules?: string;
  /**
  * Cron expression defining the schedule for the trigger. Example: "0 0 2 * * ?"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#cron_expression UserImportJobResource#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Endpoints to associate orphan accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#endpoints_to_associate_orphan_accounts UserImportJobResource#endpoints_to_associate_orphan_accounts}
  */
  readonly endpointsToAssociateOrphanAccounts?: string;
  /**
  * Export to SAV cloud configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#export_to_sav_cloud UserImportJobResource#export_to_sav_cloud}
  */
  readonly exportToSavCloud?: string;
  /**
  * External connection for the user import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#external_conn UserImportJobResource#external_conn}
  */
  readonly externalConn: string;
  /**
  * Full or incremental import type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#full_or_incremental UserImportJobResource#full_or_incremental}
  */
  readonly fullOrIncremental?: string;
  /**
  * Generate email configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#generate_email UserImportJobResource#generate_email}
  */
  readonly generateEmail?: string;
  /**
  * Generate system username configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#generate_system_username UserImportJobResource#generate_system_username}
  */
  readonly generateSystemUsername?: string;
  /**
  * Import SAV connect configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#import_sav_connect UserImportJobResource#import_sav_connect}
  */
  readonly importSavConnect?: string;
  /**
  * Name of the job group associated with the trigger. Example: "utility"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#job_group UserImportJobResource#job_group}
  */
  readonly jobGroup: string;
  /**
  * Action to take on failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#on_failure UserImportJobResource#on_failure}
  */
  readonly onFailure?: string;
  /**
  * Term user limit configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#term_user_limit UserImportJobResource#term_user_limit}
  */
  readonly termUserLimit?: string;
  /**
  * Group classification for the trigger. Example: "GRAILS_JOBS"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#trigger_group UserImportJobResource#trigger_group}
  */
  readonly triggerGroup?: string;
  /**
  * Unique name of the trigger. Example: "MyTrigger_001"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#trigger_name UserImportJobResource#trigger_name}
  */
  readonly triggerName: string;
  /**
  * User default SAV role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#user_default_sav_role UserImportJobResource#user_default_sav_role}
  */
  readonly userDefaultSavRole?: string;
  /**
  * Action to take for users not in feed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#user_not_in_feed_action UserImportJobResource#user_not_in_feed_action}
  */
  readonly userNotInFeedAction?: string;
  /**
  * User operations allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#user_operations_allowed UserImportJobResource#user_operations_allowed}
  */
  readonly userOperationsAllowed?: string;
  /**
  * User reconciliation field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#user_reconciliation_field UserImportJobResource#user_reconciliation_field}
  */
  readonly userReconciliationField?: string;
  /**
  * User status configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#user_status_config UserImportJobResource#user_status_config}
  */
  readonly userStatusConfig?: string;
  /**
  * User threshold configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#user_threshold UserImportJobResource#user_threshold}
  */
  readonly userThreshold?: string;
  /**
  * Zero day limit configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#zero_day_limit UserImportJobResource#zero_day_limit}
  */
  readonly zeroDayLimit?: string;
  /**
  * Zero day provisioning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#zero_day_provisioning UserImportJobResource#zero_day_provisioning}
  */
  readonly zeroDayProvisioning?: string;
}

export function userImportJobResourceJobsToTerraform(struct?: UserImportJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_user_map: cdktf.stringToTerraform(struct!.buildUserMap),
    check_rules: cdktf.stringToTerraform(struct!.checkRules),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    endpoints_to_associate_orphan_accounts: cdktf.stringToTerraform(struct!.endpointsToAssociateOrphanAccounts),
    export_to_sav_cloud: cdktf.stringToTerraform(struct!.exportToSavCloud),
    external_conn: cdktf.stringToTerraform(struct!.externalConn),
    full_or_incremental: cdktf.stringToTerraform(struct!.fullOrIncremental),
    generate_email: cdktf.stringToTerraform(struct!.generateEmail),
    generate_system_username: cdktf.stringToTerraform(struct!.generateSystemUsername),
    import_sav_connect: cdktf.stringToTerraform(struct!.importSavConnect),
    job_group: cdktf.stringToTerraform(struct!.jobGroup),
    on_failure: cdktf.stringToTerraform(struct!.onFailure),
    term_user_limit: cdktf.stringToTerraform(struct!.termUserLimit),
    trigger_group: cdktf.stringToTerraform(struct!.triggerGroup),
    trigger_name: cdktf.stringToTerraform(struct!.triggerName),
    user_default_sav_role: cdktf.stringToTerraform(struct!.userDefaultSavRole),
    user_not_in_feed_action: cdktf.stringToTerraform(struct!.userNotInFeedAction),
    user_operations_allowed: cdktf.stringToTerraform(struct!.userOperationsAllowed),
    user_reconciliation_field: cdktf.stringToTerraform(struct!.userReconciliationField),
    user_status_config: cdktf.stringToTerraform(struct!.userStatusConfig),
    user_threshold: cdktf.stringToTerraform(struct!.userThreshold),
    zero_day_limit: cdktf.stringToTerraform(struct!.zeroDayLimit),
    zero_day_provisioning: cdktf.stringToTerraform(struct!.zeroDayProvisioning),
  }
}


export function userImportJobResourceJobsToHclTerraform(struct?: UserImportJobResourceJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_user_map: {
      value: cdktf.stringToHclTerraform(struct!.buildUserMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_rules: {
      value: cdktf.stringToHclTerraform(struct!.checkRules),
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
    endpoints_to_associate_orphan_accounts: {
      value: cdktf.stringToHclTerraform(struct!.endpointsToAssociateOrphanAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_to_sav_cloud: {
      value: cdktf.stringToHclTerraform(struct!.exportToSavCloud),
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
    generate_email: {
      value: cdktf.stringToHclTerraform(struct!.generateEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_system_username: {
      value: cdktf.stringToHclTerraform(struct!.generateSystemUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_sav_connect: {
      value: cdktf.stringToHclTerraform(struct!.importSavConnect),
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
    term_user_limit: {
      value: cdktf.stringToHclTerraform(struct!.termUserLimit),
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
    user_default_sav_role: {
      value: cdktf.stringToHclTerraform(struct!.userDefaultSavRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_not_in_feed_action: {
      value: cdktf.stringToHclTerraform(struct!.userNotInFeedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_operations_allowed: {
      value: cdktf.stringToHclTerraform(struct!.userOperationsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_reconciliation_field: {
      value: cdktf.stringToHclTerraform(struct!.userReconciliationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_status_config: {
      value: cdktf.stringToHclTerraform(struct!.userStatusConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_threshold: {
      value: cdktf.stringToHclTerraform(struct!.userThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_day_limit: {
      value: cdktf.stringToHclTerraform(struct!.zeroDayLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_day_provisioning: {
      value: cdktf.stringToHclTerraform(struct!.zeroDayProvisioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserImportJobResourceJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserImportJobResourceJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildUserMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildUserMap = this._buildUserMap;
    }
    if (this._checkRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkRules = this._checkRules;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._endpointsToAssociateOrphanAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointsToAssociateOrphanAccounts = this._endpointsToAssociateOrphanAccounts;
    }
    if (this._exportToSavCloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportToSavCloud = this._exportToSavCloud;
    }
    if (this._externalConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConn = this._externalConn;
    }
    if (this._fullOrIncremental !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullOrIncremental = this._fullOrIncremental;
    }
    if (this._generateEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateEmail = this._generateEmail;
    }
    if (this._generateSystemUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateSystemUsername = this._generateSystemUsername;
    }
    if (this._importSavConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.importSavConnect = this._importSavConnect;
    }
    if (this._jobGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobGroup = this._jobGroup;
    }
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._termUserLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.termUserLimit = this._termUserLimit;
    }
    if (this._triggerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerGroup = this._triggerGroup;
    }
    if (this._triggerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerName = this._triggerName;
    }
    if (this._userDefaultSavRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefaultSavRole = this._userDefaultSavRole;
    }
    if (this._userNotInFeedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNotInFeedAction = this._userNotInFeedAction;
    }
    if (this._userOperationsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOperationsAllowed = this._userOperationsAllowed;
    }
    if (this._userReconciliationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.userReconciliationField = this._userReconciliationField;
    }
    if (this._userStatusConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.userStatusConfig = this._userStatusConfig;
    }
    if (this._userThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.userThreshold = this._userThreshold;
    }
    if (this._zeroDayLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroDayLimit = this._zeroDayLimit;
    }
    if (this._zeroDayProvisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroDayProvisioning = this._zeroDayProvisioning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserImportJobResourceJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildUserMap = undefined;
      this._checkRules = undefined;
      this._cronExpression = undefined;
      this._endpointsToAssociateOrphanAccounts = undefined;
      this._exportToSavCloud = undefined;
      this._externalConn = undefined;
      this._fullOrIncremental = undefined;
      this._generateEmail = undefined;
      this._generateSystemUsername = undefined;
      this._importSavConnect = undefined;
      this._jobGroup = undefined;
      this._onFailure = undefined;
      this._termUserLimit = undefined;
      this._triggerGroup = undefined;
      this._triggerName = undefined;
      this._userDefaultSavRole = undefined;
      this._userNotInFeedAction = undefined;
      this._userOperationsAllowed = undefined;
      this._userReconciliationField = undefined;
      this._userStatusConfig = undefined;
      this._userThreshold = undefined;
      this._zeroDayLimit = undefined;
      this._zeroDayProvisioning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildUserMap = value.buildUserMap;
      this._checkRules = value.checkRules;
      this._cronExpression = value.cronExpression;
      this._endpointsToAssociateOrphanAccounts = value.endpointsToAssociateOrphanAccounts;
      this._exportToSavCloud = value.exportToSavCloud;
      this._externalConn = value.externalConn;
      this._fullOrIncremental = value.fullOrIncremental;
      this._generateEmail = value.generateEmail;
      this._generateSystemUsername = value.generateSystemUsername;
      this._importSavConnect = value.importSavConnect;
      this._jobGroup = value.jobGroup;
      this._onFailure = value.onFailure;
      this._termUserLimit = value.termUserLimit;
      this._triggerGroup = value.triggerGroup;
      this._triggerName = value.triggerName;
      this._userDefaultSavRole = value.userDefaultSavRole;
      this._userNotInFeedAction = value.userNotInFeedAction;
      this._userOperationsAllowed = value.userOperationsAllowed;
      this._userReconciliationField = value.userReconciliationField;
      this._userStatusConfig = value.userStatusConfig;
      this._userThreshold = value.userThreshold;
      this._zeroDayLimit = value.zeroDayLimit;
      this._zeroDayProvisioning = value.zeroDayProvisioning;
    }
  }

  // build_user_map - computed: false, optional: true, required: false
  private _buildUserMap?: string; 
  public get buildUserMap() {
    return this.getStringAttribute('build_user_map');
  }
  public set buildUserMap(value: string) {
    this._buildUserMap = value;
  }
  public resetBuildUserMap() {
    this._buildUserMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildUserMapInput() {
    return this._buildUserMap;
  }

  // check_rules - computed: false, optional: true, required: false
  private _checkRules?: string; 
  public get checkRules() {
    return this.getStringAttribute('check_rules');
  }
  public set checkRules(value: string) {
    this._checkRules = value;
  }
  public resetCheckRules() {
    this._checkRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRulesInput() {
    return this._checkRules;
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

  // endpoints_to_associate_orphan_accounts - computed: false, optional: true, required: false
  private _endpointsToAssociateOrphanAccounts?: string; 
  public get endpointsToAssociateOrphanAccounts() {
    return this.getStringAttribute('endpoints_to_associate_orphan_accounts');
  }
  public set endpointsToAssociateOrphanAccounts(value: string) {
    this._endpointsToAssociateOrphanAccounts = value;
  }
  public resetEndpointsToAssociateOrphanAccounts() {
    this._endpointsToAssociateOrphanAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsToAssociateOrphanAccountsInput() {
    return this._endpointsToAssociateOrphanAccounts;
  }

  // export_to_sav_cloud - computed: false, optional: true, required: false
  private _exportToSavCloud?: string; 
  public get exportToSavCloud() {
    return this.getStringAttribute('export_to_sav_cloud');
  }
  public set exportToSavCloud(value: string) {
    this._exportToSavCloud = value;
  }
  public resetExportToSavCloud() {
    this._exportToSavCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToSavCloudInput() {
    return this._exportToSavCloud;
  }

  // external_conn - computed: false, optional: false, required: true
  private _externalConn?: string; 
  public get externalConn() {
    return this.getStringAttribute('external_conn');
  }
  public set externalConn(value: string) {
    this._externalConn = value;
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

  // generate_email - computed: false, optional: true, required: false
  private _generateEmail?: string; 
  public get generateEmail() {
    return this.getStringAttribute('generate_email');
  }
  public set generateEmail(value: string) {
    this._generateEmail = value;
  }
  public resetGenerateEmail() {
    this._generateEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateEmailInput() {
    return this._generateEmail;
  }

  // generate_system_username - computed: false, optional: true, required: false
  private _generateSystemUsername?: string; 
  public get generateSystemUsername() {
    return this.getStringAttribute('generate_system_username');
  }
  public set generateSystemUsername(value: string) {
    this._generateSystemUsername = value;
  }
  public resetGenerateSystemUsername() {
    this._generateSystemUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSystemUsernameInput() {
    return this._generateSystemUsername;
  }

  // import_sav_connect - computed: false, optional: true, required: false
  private _importSavConnect?: string; 
  public get importSavConnect() {
    return this.getStringAttribute('import_sav_connect');
  }
  public set importSavConnect(value: string) {
    this._importSavConnect = value;
  }
  public resetImportSavConnect() {
    this._importSavConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSavConnectInput() {
    return this._importSavConnect;
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

  // term_user_limit - computed: false, optional: true, required: false
  private _termUserLimit?: string; 
  public get termUserLimit() {
    return this.getStringAttribute('term_user_limit');
  }
  public set termUserLimit(value: string) {
    this._termUserLimit = value;
  }
  public resetTermUserLimit() {
    this._termUserLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termUserLimitInput() {
    return this._termUserLimit;
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

  // user_default_sav_role - computed: false, optional: true, required: false
  private _userDefaultSavRole?: string; 
  public get userDefaultSavRole() {
    return this.getStringAttribute('user_default_sav_role');
  }
  public set userDefaultSavRole(value: string) {
    this._userDefaultSavRole = value;
  }
  public resetUserDefaultSavRole() {
    this._userDefaultSavRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefaultSavRoleInput() {
    return this._userDefaultSavRole;
  }

  // user_not_in_feed_action - computed: false, optional: true, required: false
  private _userNotInFeedAction?: string; 
  public get userNotInFeedAction() {
    return this.getStringAttribute('user_not_in_feed_action');
  }
  public set userNotInFeedAction(value: string) {
    this._userNotInFeedAction = value;
  }
  public resetUserNotInFeedAction() {
    this._userNotInFeedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNotInFeedActionInput() {
    return this._userNotInFeedAction;
  }

  // user_operations_allowed - computed: false, optional: true, required: false
  private _userOperationsAllowed?: string; 
  public get userOperationsAllowed() {
    return this.getStringAttribute('user_operations_allowed');
  }
  public set userOperationsAllowed(value: string) {
    this._userOperationsAllowed = value;
  }
  public resetUserOperationsAllowed() {
    this._userOperationsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOperationsAllowedInput() {
    return this._userOperationsAllowed;
  }

  // user_reconciliation_field - computed: false, optional: true, required: false
  private _userReconciliationField?: string; 
  public get userReconciliationField() {
    return this.getStringAttribute('user_reconciliation_field');
  }
  public set userReconciliationField(value: string) {
    this._userReconciliationField = value;
  }
  public resetUserReconciliationField() {
    this._userReconciliationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userReconciliationFieldInput() {
    return this._userReconciliationField;
  }

  // user_status_config - computed: false, optional: true, required: false
  private _userStatusConfig?: string; 
  public get userStatusConfig() {
    return this.getStringAttribute('user_status_config');
  }
  public set userStatusConfig(value: string) {
    this._userStatusConfig = value;
  }
  public resetUserStatusConfig() {
    this._userStatusConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userStatusConfigInput() {
    return this._userStatusConfig;
  }

  // user_threshold - computed: false, optional: true, required: false
  private _userThreshold?: string; 
  public get userThreshold() {
    return this.getStringAttribute('user_threshold');
  }
  public set userThreshold(value: string) {
    this._userThreshold = value;
  }
  public resetUserThreshold() {
    this._userThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userThresholdInput() {
    return this._userThreshold;
  }

  // zero_day_limit - computed: false, optional: true, required: false
  private _zeroDayLimit?: string; 
  public get zeroDayLimit() {
    return this.getStringAttribute('zero_day_limit');
  }
  public set zeroDayLimit(value: string) {
    this._zeroDayLimit = value;
  }
  public resetZeroDayLimit() {
    this._zeroDayLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroDayLimitInput() {
    return this._zeroDayLimit;
  }

  // zero_day_provisioning - computed: false, optional: true, required: false
  private _zeroDayProvisioning?: string; 
  public get zeroDayProvisioning() {
    return this.getStringAttribute('zero_day_provisioning');
  }
  public set zeroDayProvisioning(value: string) {
    this._zeroDayProvisioning = value;
  }
  public resetZeroDayProvisioning() {
    this._zeroDayProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroDayProvisioningInput() {
    return this._zeroDayProvisioning;
  }
}

export class UserImportJobResourceJobsList extends cdktf.ComplexList {
  public internalValue? : UserImportJobResourceJobs[] | cdktf.IResolvable

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
  public get(index: number): UserImportJobResourceJobsOutputReference {
    return new UserImportJobResourceJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource saviynt_user_import_job_resource}
*/
export class UserImportJobResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_user_import_job_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserImportJobResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserImportJobResource to import
  * @param importFromId The id of the existing UserImportJobResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserImportJobResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_user_import_job_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/user_import_job_resource saviynt_user_import_job_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserImportJobResourceConfig
  */
  public constructor(scope: Construct, id: string, config: UserImportJobResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_user_import_job_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
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
  private _jobs = new UserImportJobResourceJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: UserImportJobResourceJobs[] | cdktf.IResolvable) {
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
      jobs: cdktf.listMapper(userImportJobResourceJobsToTerraform, false)(this._jobs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jobs: {
        value: cdktf.listMapperHcl(userImportJobResourceJobsToHclTerraform, false)(this._jobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserImportJobResourceJobsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
