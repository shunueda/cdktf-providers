// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
}
export interface DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters {
}

export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // values_to_exclude - computed: true, optional: false, required: false
  public get valuesToExclude() {
    return this.getListAttribute('values_to_exclude');
  }

  // values_to_include - computed: true, optional: false, required: false
  public get valuesToInclude() {
    return this.getListAttribute('values_to_include');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters {
}

export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersToTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersToHclTerraform(struct?: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_time_limit - computed: true, optional: false, required: false
  public get allowedTimeLimit() {
    return this.getNumberAttribute('allowed_time_limit');
  }

  // alternate_plan_baselines - computed: true, optional: false, required: false
  public get alternatePlanBaselines() {
    return this.getListAttribute('alternate_plan_baselines');
  }

  // alternate_plan_limit - computed: true, optional: false, required: false
  public get alternatePlanLimit() {
    return this.getNumberAttribute('alternate_plan_limit');
  }

  // alternate_plan_sources - computed: true, optional: false, required: false
  public get alternatePlanSources() {
    return this.getListAttribute('alternate_plan_sources');
  }

  // are_plans_auto_accepted - computed: true, optional: false, required: false
  public get arePlansAutoAccepted() {
    return this.getBooleanAttribute('are_plans_auto_accepted');
  }
}

export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference {
    return new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration oci_database_management_managed_database_sql_plan_baseline_configuration}
*/
export class DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_sql_plan_baseline_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_sql_plan_baseline_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration oci_database_management_managed_database_sql_plan_baseline_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_sql_plan_baseline_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._managedDatabaseId = config.managedDatabaseId;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_capture_filters - computed: true, optional: false, required: false
  private _autoCaptureFilters = new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList(this, "auto_capture_filters", false);
  public get autoCaptureFilters() {
    return this._autoCaptureFilters;
  }

  // auto_spm_evolve_task_parameters - computed: true, optional: false, required: false
  private _autoSpmEvolveTaskParameters = new DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList(this, "auto_spm_evolve_task_parameters", false);
  public get autoSpmEvolveTaskParameters() {
    return this._autoSpmEvolveTaskParameters;
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

  // is_auto_spm_evolve_task_enabled - computed: true, optional: false, required: false
  public get isAutoSpmEvolveTaskEnabled() {
    return this.getBooleanAttribute('is_auto_spm_evolve_task_enabled');
  }

  // is_automatic_initial_plan_capture_enabled - computed: true, optional: false, required: false
  public get isAutomaticInitialPlanCaptureEnabled() {
    return this.getBooleanAttribute('is_automatic_initial_plan_capture_enabled');
  }

  // is_high_frequency_auto_spm_evolve_task_enabled - computed: true, optional: false, required: false
  public get isHighFrequencyAutoSpmEvolveTaskEnabled() {
    return this.getBooleanAttribute('is_high_frequency_auto_spm_evolve_task_enabled');
  }

  // is_sql_plan_baselines_usage_enabled - computed: true, optional: false, required: false
  public get isSqlPlanBaselinesUsageEnabled() {
    return this.getBooleanAttribute('is_sql_plan_baselines_usage_enabled');
  }

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // opc_named_credential_id - computed: false, optional: true, required: false
  private _opcNamedCredentialId?: string; 
  public get opcNamedCredentialId() {
    return this.getStringAttribute('opc_named_credential_id');
  }
  public set opcNamedCredentialId(value: string) {
    this._opcNamedCredentialId = value;
  }
  public resetOpcNamedCredentialId() {
    this._opcNamedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcNamedCredentialIdInput() {
    return this._opcNamedCredentialId;
  }

  // plan_retention_weeks - computed: true, optional: false, required: false
  public get planRetentionWeeks() {
    return this.getNumberAttribute('plan_retention_weeks');
  }

  // space_budget_mb - computed: true, optional: false, required: false
  public get spaceBudgetMb() {
    return this.getNumberAttribute('space_budget_mb');
  }

  // space_budget_percent - computed: true, optional: false, required: false
  public get spaceBudgetPercent() {
    return this.getNumberAttribute('space_budget_percent');
  }

  // space_used_mb - computed: true, optional: false, required: false
  public get spaceUsedMb() {
    return this.getNumberAttribute('space_used_mb');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
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
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_named_credential_id: {
        value: cdktf.stringToHclTerraform(this._opcNamedCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
