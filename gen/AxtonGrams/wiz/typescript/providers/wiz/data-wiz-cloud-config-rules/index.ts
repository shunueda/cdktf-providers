// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWizCloudConfigRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Find CSPM rules related to cloud provider.
  *     - Allowed values: 
  *         - GCP
  *         - AWS
  *         - Azure
  *         - OCI
  *         - Alibaba
  *         - vSphere
  *         - OpenShift
  *         - Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#cloud_provider DataWizCloudConfigRules#cloud_provider}
  */
  readonly cloudProvider?: string[];
  /**
  * Search rules by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#created_by DataWizCloudConfigRules#created_by}
  */
  readonly createdBy?: string[];
  /**
  * CSPM Rule enabled status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#enabled DataWizCloudConfigRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How many results to return
  *     - Defaults to `500`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#first DataWizCloudConfigRules#first}
  */
  readonly first?: number;
  /**
  * Search rules by any of securityFramework | securitySubCategory | securityCategory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#framework_category DataWizCloudConfigRules#framework_category}
  */
  readonly frameworkCategory?: string[];
  /**
  * Search by function as control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#function_as_control DataWizCloudConfigRules#function_as_control}
  */
  readonly functionAsControl?: boolean | cdktf.IResolvable;
  /**
  * Rule has auto remediation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_auto_remediation DataWizCloudConfigRules#has_auto_remediation}
  */
  readonly hasAutoRemediation?: boolean | cdktf.IResolvable;
  /**
  * Rule has remediation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#has_remediation DataWizCloudConfigRules#has_remediation}
  */
  readonly hasRemediation?: boolean | cdktf.IResolvable;
  /**
  * GetSearch by IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#ids DataWizCloudConfigRules#ids}
  */
  readonly ids?: string[];
  /**
  * Search by opaPolicy presence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#is_opa_policy DataWizCloudConfigRules#is_opa_policy}
  */
  readonly isOpaPolicy?: boolean | cdktf.IResolvable;
  /**
  * Search rules by target native type.
  *     - Allowed values: 
  *         - CLOUD
  *         - TERRAFORM
  *         - CLOUD_FORMATION
  *         - KUBERNETES
  *         - AZURE_RESOURCE_MANAGER
  *         - DOCKER_FILE
  *         - ADMISSION_CONTROLLER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#matcher_type DataWizCloudConfigRules#matcher_type}
  */
  readonly matcherType?: string[];
  /**
  * Search by project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#project DataWizCloudConfigRules#project}
  */
  readonly project?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_all DataWizCloudConfigRules#risk_equals_all}
  */
  readonly riskEqualsAll?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#risk_equals_any DataWizCloudConfigRules#risk_equals_any}
  */
  readonly riskEqualsAny?: string[];
  /**
  * Find CSPM rules applied on cloud account IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#scope_account_ids DataWizCloudConfigRules#scope_account_ids}
  */
  readonly scopeAccountIds?: string[];
  /**
  * Free text search on CSPM name or resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#search DataWizCloudConfigRules#search}
  */
  readonly search?: string;
  /**
  * Find CSPM rules related to the service.
  *     - Allowed values: 
  *         - AWS
  *         - Azure
  *         - GCP
  *         - OCI
  *         - Alibaba
  *         - AKS
  *         - EKS
  *         - GKE
  *         - Kubernetes
  *         - OKE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#service_type DataWizCloudConfigRules#service_type}
  */
  readonly serviceType?: string[];
  /**
  * CSPM Rule severity.
  *     - Allowed values: 
  *         - INFORMATIONAL
  *         - LOW
  *         - MEDIUM
  *         - HIGH
  *         - CRITICAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#severity DataWizCloudConfigRules#severity}
  */
  readonly severity?: string[];
  /**
  * Find rules by their entity type subject.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#subject_entity_type DataWizCloudConfigRules#subject_entity_type}
  */
  readonly subjectEntityType?: string[];
  /**
  * Search rules by target native type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#target_native_type DataWizCloudConfigRules#target_native_type}
  */
  readonly targetNativeType?: string[];
}
export interface DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences {
}

export function dataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesToTerraform(struct?: DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesToHclTerraform(struct?: DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizCloudConfigRulesCloudConfigurationRulesExternalReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference {
    return new DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataWizCloudConfigRulesCloudConfigurationRules {
}

export function dataWizCloudConfigRulesCloudConfigurationRulesToTerraform(struct?: DataWizCloudConfigRulesCloudConfigurationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWizCloudConfigRulesCloudConfigurationRulesToHclTerraform(struct?: DataWizCloudConfigRulesCloudConfigurationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWizCloudConfigRulesCloudConfigurationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWizCloudConfigRulesCloudConfigurationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWizCloudConfigRulesCloudConfigurationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // builtin - computed: true, optional: false, required: false
  public get builtin() {
    return this.getBooleanAttribute('builtin');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // control_id - computed: true, optional: false, required: false
  public get controlId() {
    return this.getStringAttribute('control_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_references - computed: true, optional: false, required: false
  private _externalReferences = new DataWizCloudConfigRulesCloudConfigurationRulesExternalReferencesList(this, "external_references", true);
  public get externalReferences() {
    return this._externalReferences;
  }

  // function_as_control - computed: true, optional: false, required: false
  public get functionAsControl() {
    return this.getBooleanAttribute('function_as_control');
  }

  // graph_id - computed: true, optional: false, required: false
  public get graphId() {
    return this.getStringAttribute('graph_id');
  }

  // has_auto_remediation - computed: true, optional: false, required: false
  public get hasAutoRemediation() {
    return this.getBooleanAttribute('has_auto_remediation');
  }

  // iac_matcher_ids - computed: true, optional: false, required: false
  public get iacMatcherIds() {
    return this.getListAttribute('iac_matcher_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opa_policy - computed: true, optional: false, required: false
  public get opaPolicy() {
    return this.getStringAttribute('opa_policy');
  }

  // remediation_instructions - computed: true, optional: false, required: false
  public get remediationInstructions() {
    return this.getStringAttribute('remediation_instructions');
  }

  // scope_accounts - computed: true, optional: false, required: false
  public get scopeAccounts() {
    return this.getListAttribute('scope_accounts');
  }

  // security_sub_category_ids - computed: true, optional: false, required: false
  public get securitySubCategoryIds() {
    return this.getListAttribute('security_sub_category_ids');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // subject_entity_type - computed: true, optional: false, required: false
  public get subjectEntityType() {
    return this.getStringAttribute('subject_entity_type');
  }

  // supports_nrt - computed: true, optional: false, required: false
  public get supportsNrt() {
    return this.getBooleanAttribute('supports_nrt');
  }

  // target_native_types - computed: true, optional: false, required: false
  public get targetNativeTypes() {
    return this.getListAttribute('target_native_types');
  }
}

export class DataWizCloudConfigRulesCloudConfigurationRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataWizCloudConfigRulesCloudConfigurationRulesOutputReference {
    return new DataWizCloudConfigRulesCloudConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules wiz_cloud_config_rules}
*/
export class DataWizCloudConfigRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_cloud_config_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWizCloudConfigRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWizCloudConfigRules to import
  * @param importFromId The id of the existing DataWizCloudConfigRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWizCloudConfigRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_cloud_config_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/data-sources/cloud_config_rules wiz_cloud_config_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWizCloudConfigRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWizCloudConfigRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wiz_cloud_config_rules',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._createdBy = config.createdBy;
    this._enabled = config.enabled;
    this._first = config.first;
    this._frameworkCategory = config.frameworkCategory;
    this._functionAsControl = config.functionAsControl;
    this._hasAutoRemediation = config.hasAutoRemediation;
    this._hasRemediation = config.hasRemediation;
    this._ids = config.ids;
    this._isOpaPolicy = config.isOpaPolicy;
    this._matcherType = config.matcherType;
    this._project = config.project;
    this._riskEqualsAll = config.riskEqualsAll;
    this._riskEqualsAny = config.riskEqualsAny;
    this._scopeAccountIds = config.scopeAccountIds;
    this._search = config.search;
    this._serviceType = config.serviceType;
    this._severity = config.severity;
    this._subjectEntityType = config.subjectEntityType;
    this._targetNativeType = config.targetNativeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_configuration_rules - computed: true, optional: false, required: false
  private _cloudConfigurationRules = new DataWizCloudConfigRulesCloudConfigurationRulesList(this, "cloud_configuration_rules", true);
  public get cloudConfigurationRules() {
    return this._cloudConfigurationRules;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string[]; 
  public get cloudProvider() {
    return this.getListAttribute('cloud_provider');
  }
  public set cloudProvider(value: string[]) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string[]; 
  public get createdBy() {
    return this.getListAttribute('created_by');
  }
  public set createdBy(value: string[]) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // first - computed: false, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // framework_category - computed: false, optional: true, required: false
  private _frameworkCategory?: string[]; 
  public get frameworkCategory() {
    return this.getListAttribute('framework_category');
  }
  public set frameworkCategory(value: string[]) {
    this._frameworkCategory = value;
  }
  public resetFrameworkCategory() {
    this._frameworkCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkCategoryInput() {
    return this._frameworkCategory;
  }

  // function_as_control - computed: false, optional: true, required: false
  private _functionAsControl?: boolean | cdktf.IResolvable; 
  public get functionAsControl() {
    return this.getBooleanAttribute('function_as_control');
  }
  public set functionAsControl(value: boolean | cdktf.IResolvable) {
    this._functionAsControl = value;
  }
  public resetFunctionAsControl() {
    this._functionAsControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAsControlInput() {
    return this._functionAsControl;
  }

  // has_auto_remediation - computed: false, optional: true, required: false
  private _hasAutoRemediation?: boolean | cdktf.IResolvable; 
  public get hasAutoRemediation() {
    return this.getBooleanAttribute('has_auto_remediation');
  }
  public set hasAutoRemediation(value: boolean | cdktf.IResolvable) {
    this._hasAutoRemediation = value;
  }
  public resetHasAutoRemediation() {
    this._hasAutoRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasAutoRemediationInput() {
    return this._hasAutoRemediation;
  }

  // has_remediation - computed: false, optional: true, required: false
  private _hasRemediation?: boolean | cdktf.IResolvable; 
  public get hasRemediation() {
    return this.getBooleanAttribute('has_remediation');
  }
  public set hasRemediation(value: boolean | cdktf.IResolvable) {
    this._hasRemediation = value;
  }
  public resetHasRemediation() {
    this._hasRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasRemediationInput() {
    return this._hasRemediation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // is_opa_policy - computed: false, optional: true, required: false
  private _isOpaPolicy?: boolean | cdktf.IResolvable; 
  public get isOpaPolicy() {
    return this.getBooleanAttribute('is_opa_policy');
  }
  public set isOpaPolicy(value: boolean | cdktf.IResolvable) {
    this._isOpaPolicy = value;
  }
  public resetIsOpaPolicy() {
    this._isOpaPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOpaPolicyInput() {
    return this._isOpaPolicy;
  }

  // matcher_type - computed: false, optional: true, required: false
  private _matcherType?: string[]; 
  public get matcherType() {
    return this.getListAttribute('matcher_type');
  }
  public set matcherType(value: string[]) {
    this._matcherType = value;
  }
  public resetMatcherType() {
    this._matcherType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherTypeInput() {
    return this._matcherType;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string[]; 
  public get project() {
    return this.getListAttribute('project');
  }
  public set project(value: string[]) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // risk_equals_all - computed: false, optional: true, required: false
  private _riskEqualsAll?: string[]; 
  public get riskEqualsAll() {
    return this.getListAttribute('risk_equals_all');
  }
  public set riskEqualsAll(value: string[]) {
    this._riskEqualsAll = value;
  }
  public resetRiskEqualsAll() {
    this._riskEqualsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskEqualsAllInput() {
    return this._riskEqualsAll;
  }

  // risk_equals_any - computed: false, optional: true, required: false
  private _riskEqualsAny?: string[]; 
  public get riskEqualsAny() {
    return this.getListAttribute('risk_equals_any');
  }
  public set riskEqualsAny(value: string[]) {
    this._riskEqualsAny = value;
  }
  public resetRiskEqualsAny() {
    this._riskEqualsAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskEqualsAnyInput() {
    return this._riskEqualsAny;
  }

  // scope_account_ids - computed: false, optional: true, required: false
  private _scopeAccountIds?: string[]; 
  public get scopeAccountIds() {
    return this.getListAttribute('scope_account_ids');
  }
  public set scopeAccountIds(value: string[]) {
    this._scopeAccountIds = value;
  }
  public resetScopeAccountIds() {
    this._scopeAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeAccountIdsInput() {
    return this._scopeAccountIds;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string[]; 
  public get serviceType() {
    return this.getListAttribute('service_type');
  }
  public set serviceType(value: string[]) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return this.getListAttribute('severity');
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // subject_entity_type - computed: false, optional: true, required: false
  private _subjectEntityType?: string[]; 
  public get subjectEntityType() {
    return this.getListAttribute('subject_entity_type');
  }
  public set subjectEntityType(value: string[]) {
    this._subjectEntityType = value;
  }
  public resetSubjectEntityType() {
    this._subjectEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectEntityTypeInput() {
    return this._subjectEntityType;
  }

  // target_native_type - computed: false, optional: true, required: false
  private _targetNativeType?: string[]; 
  public get targetNativeType() {
    return this.getListAttribute('target_native_type');
  }
  public set targetNativeType(value: string[]) {
    this._targetNativeType = value;
  }
  public resetTargetNativeType() {
    this._targetNativeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNativeTypeInput() {
    return this._targetNativeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudProvider),
      created_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._createdBy),
      enabled: cdktf.booleanToTerraform(this._enabled),
      first: cdktf.numberToTerraform(this._first),
      framework_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._frameworkCategory),
      function_as_control: cdktf.booleanToTerraform(this._functionAsControl),
      has_auto_remediation: cdktf.booleanToTerraform(this._hasAutoRemediation),
      has_remediation: cdktf.booleanToTerraform(this._hasRemediation),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_opa_policy: cdktf.booleanToTerraform(this._isOpaPolicy),
      matcher_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matcherType),
      project: cdktf.listMapper(cdktf.stringToTerraform, false)(this._project),
      risk_equals_all: cdktf.listMapper(cdktf.stringToTerraform, false)(this._riskEqualsAll),
      risk_equals_any: cdktf.listMapper(cdktf.stringToTerraform, false)(this._riskEqualsAny),
      scope_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopeAccountIds),
      search: cdktf.stringToTerraform(this._search),
      service_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceType),
      severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severity),
      subject_entity_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectEntityType),
      target_native_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetNativeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudProvider),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      created_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._createdBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      first: {
        value: cdktf.numberToHclTerraform(this._first),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      framework_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._frameworkCategory),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      function_as_control: {
        value: cdktf.booleanToHclTerraform(this._functionAsControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_auto_remediation: {
        value: cdktf.booleanToHclTerraform(this._hasAutoRemediation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_remediation: {
        value: cdktf.booleanToHclTerraform(this._hasRemediation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_opa_policy: {
        value: cdktf.booleanToHclTerraform(this._isOpaPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      matcher_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matcherType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._project),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      risk_equals_all: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._riskEqualsAll),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      risk_equals_any: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._riskEqualsAny),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scope_account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopeAccountIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subject_entity_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjectEntityType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_native_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetNativeType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
