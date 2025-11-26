// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/host_assurance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecHostAssurancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/host_assurance_policy#name DataAquasecHostAssurancePolicy#name}
  */
  readonly name: string;
}
export interface DataAquasecHostAssurancePolicyAutoScanTime {
}

export function dataAquasecHostAssurancePolicyAutoScanTimeToTerraform(struct?: DataAquasecHostAssurancePolicyAutoScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostAssurancePolicyAutoScanTimeToHclTerraform(struct?: DataAquasecHostAssurancePolicyAutoScanTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostAssurancePolicyAutoScanTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostAssurancePolicyAutoScanTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostAssurancePolicyAutoScanTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iteration - computed: true, optional: false, required: false
  public get iteration() {
    return this.getNumberAttribute('iteration');
  }

  // iteration_type - computed: true, optional: false, required: false
  public get iterationType() {
    return this.getStringAttribute('iteration_type');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // week_days - computed: true, optional: false, required: false
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
}

export class DataAquasecHostAssurancePolicyAutoScanTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostAssurancePolicyAutoScanTimeOutputReference {
    return new DataAquasecHostAssurancePolicyAutoScanTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostAssurancePolicyPolicySettings {
}

export function dataAquasecHostAssurancePolicyPolicySettingsToTerraform(struct?: DataAquasecHostAssurancePolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostAssurancePolicyPolicySettingsToHclTerraform(struct?: DataAquasecHostAssurancePolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostAssurancePolicyPolicySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostAssurancePolicyPolicySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostAssurancePolicyPolicySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }

  // is_audit_checked - computed: true, optional: false, required: false
  public get isAuditChecked() {
    return this.getBooleanAttribute('is_audit_checked');
  }

  // warn - computed: true, optional: false, required: false
  public get warn() {
    return this.getBooleanAttribute('warn');
  }

  // warning_message - computed: true, optional: false, required: false
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
}

export class DataAquasecHostAssurancePolicyPolicySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostAssurancePolicyPolicySettingsOutputReference {
    return new DataAquasecHostAssurancePolicyPolicySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostAssurancePolicyScopeVariables {
}

export function dataAquasecHostAssurancePolicyScopeVariablesToTerraform(struct?: DataAquasecHostAssurancePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostAssurancePolicyScopeVariablesToHclTerraform(struct?: DataAquasecHostAssurancePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostAssurancePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostAssurancePolicyScopeVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostAssurancePolicyScopeVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAquasecHostAssurancePolicyScopeVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostAssurancePolicyScopeVariablesOutputReference {
    return new DataAquasecHostAssurancePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostAssurancePolicyScope {
}

export function dataAquasecHostAssurancePolicyScopeToTerraform(struct?: DataAquasecHostAssurancePolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostAssurancePolicyScopeToHclTerraform(struct?: DataAquasecHostAssurancePolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostAssurancePolicyScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostAssurancePolicyScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostAssurancePolicyScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataAquasecHostAssurancePolicyScopeVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
}

export class DataAquasecHostAssurancePolicyScopeList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostAssurancePolicyScopeOutputReference {
    return new DataAquasecHostAssurancePolicyScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/host_assurance_policy aquasec_host_assurance_policy}
*/
export class DataAquasecHostAssurancePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_host_assurance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecHostAssurancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecHostAssurancePolicy to import
  * @param importFromId The id of the existing DataAquasecHostAssurancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/host_assurance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecHostAssurancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_host_assurance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/host_assurance_policy aquasec_host_assurance_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecHostAssurancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecHostAssurancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_host_assurance_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_scopes - computed: true, optional: false, required: false
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }

  // assurance_type - computed: true, optional: false, required: false
  public get assuranceType() {
    return this.getStringAttribute('assurance_type');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // auto_scan_configured - computed: true, optional: false, required: false
  public get autoScanConfigured() {
    return this.getBooleanAttribute('auto_scan_configured');
  }

  // auto_scan_enabled - computed: true, optional: false, required: false
  public get autoScanEnabled() {
    return this.getBooleanAttribute('auto_scan_enabled');
  }

  // auto_scan_time - computed: true, optional: false, required: false
  private _autoScanTime = new DataAquasecHostAssurancePolicyAutoScanTimeList(this, "auto_scan_time", true);
  public get autoScanTime() {
    return this._autoScanTime;
  }

  // custom_severity - computed: true, optional: false, required: false
  public get customSeverity() {
    return this.getStringAttribute('custom_severity');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disallow_exploit_types - computed: true, optional: false, required: false
  public get disallowExploitTypes() {
    return this.getListAttribute('disallow_exploit_types');
  }

  // disallow_malware - computed: true, optional: false, required: false
  public get disallowMalware() {
    return this.getBooleanAttribute('disallow_malware');
  }

  // docker_cis_enabled - computed: true, optional: false, required: false
  public get dockerCisEnabled() {
    return this.getBooleanAttribute('docker_cis_enabled');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // exceptional_monitored_malware_paths - computed: true, optional: false, required: false
  public get exceptionalMonitoredMalwarePaths() {
    return this.getListAttribute('exceptional_monitored_malware_paths');
  }

  // exclude_application_scopes - computed: true, optional: false, required: false
  public get excludeApplicationScopes() {
    return this.getListAttribute('exclude_application_scopes');
  }

  // force_microenforcer - computed: true, optional: false, required: false
  public get forceMicroenforcer() {
    return this.getBooleanAttribute('force_microenforcer');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_base_image_vln - computed: true, optional: false, required: false
  public get ignoreBaseImageVln() {
    return this.getBooleanAttribute('ignore_base_image_vln');
  }

  // ignore_recently_published_fix_vln - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedFixVln() {
    return this.getBooleanAttribute('ignore_recently_published_fix_vln');
  }

  // ignore_recently_published_fix_vln_period - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedFixVlnPeriod() {
    return this.getNumberAttribute('ignore_recently_published_fix_vln_period');
  }

  // ignore_recently_published_vln - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedVln() {
    return this.getBooleanAttribute('ignore_recently_published_vln');
  }

  // ignore_recently_published_vln_period - computed: true, optional: false, required: false
  public get ignoreRecentlyPublishedVlnPeriod() {
    return this.getNumberAttribute('ignore_recently_published_vln_period');
  }

  // ignore_risk_resources_enabled - computed: true, optional: false, required: false
  public get ignoreRiskResourcesEnabled() {
    return this.getBooleanAttribute('ignore_risk_resources_enabled');
  }

  // ignored_risk_resources - computed: true, optional: false, required: false
  public get ignoredRiskResources() {
    return this.getListAttribute('ignored_risk_resources');
  }

  // ignored_sensitive_resources - computed: true, optional: false, required: false
  public get ignoredSensitiveResources() {
    return this.getListAttribute('ignored_sensitive_resources');
  }

  // kube_cis_enabled - computed: true, optional: false, required: false
  public get kubeCisEnabled() {
    return this.getBooleanAttribute('kube_cis_enabled');
  }

  // kubernetes_controls - computed: true, optional: false, required: false
  public get kubernetesControls() {
    return this.getListAttribute('kubernetes_controls');
  }

  // kubernetes_controls_avd_ids - computed: true, optional: false, required: false
  public get kubernetesControlsAvdIds() {
    return this.getListAttribute('kubernetes_controls_avd_ids');
  }

  // kubernetes_controls_names - computed: true, optional: false, required: false
  public get kubernetesControlsNames() {
    return this.getListAttribute('kubernetes_controls_names');
  }

  // lastupdate - computed: true, optional: false, required: false
  public get lastupdate() {
    return this.getStringAttribute('lastupdate');
  }

  // linux_cis_enabled - computed: true, optional: false, required: false
  public get linuxCisEnabled() {
    return this.getBooleanAttribute('linux_cis_enabled');
  }

  // malware_action - computed: true, optional: false, required: false
  public get malwareAction() {
    return this.getStringAttribute('malware_action');
  }

  // maximum_score - computed: true, optional: false, required: false
  public get maximumScore() {
    return this.getNumberAttribute('maximum_score');
  }

  // maximum_score_enabled - computed: true, optional: false, required: false
  public get maximumScoreEnabled() {
    return this.getBooleanAttribute('maximum_score_enabled');
  }

  // maximum_score_exclude_no_fix - computed: true, optional: false, required: false
  public get maximumScoreExcludeNoFix() {
    return this.getBooleanAttribute('maximum_score_exclude_no_fix');
  }

  // monitored_malware_paths - computed: true, optional: false, required: false
  public get monitoredMalwarePaths() {
    return this.getListAttribute('monitored_malware_paths');
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

  // openshift_hardening_enabled - computed: true, optional: false, required: false
  public get openshiftHardeningEnabled() {
    return this.getBooleanAttribute('openshift_hardening_enabled');
  }

  // partial_results_image_fail - computed: true, optional: false, required: false
  public get partialResultsImageFail() {
    return this.getBooleanAttribute('partial_results_image_fail');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // policy_settings - computed: true, optional: false, required: false
  private _policySettings = new DataAquasecHostAssurancePolicyPolicySettingsList(this, "policy_settings", false);
  public get policySettings() {
    return this._policySettings;
  }

  // scan_malware_in_archives - computed: true, optional: false, required: false
  public get scanMalwareInArchives() {
    return this.getBooleanAttribute('scan_malware_in_archives');
  }

  // scan_nfs_mounts - computed: true, optional: false, required: false
  public get scanNfsMounts() {
    return this.getBooleanAttribute('scan_nfs_mounts');
  }

  // scan_process_memory - computed: true, optional: false, required: false
  public get scanProcessMemory() {
    return this.getBooleanAttribute('scan_process_memory');
  }

  // scan_sensitive_data - computed: true, optional: false, required: false
  public get scanSensitiveData() {
    return this.getBooleanAttribute('scan_sensitive_data');
  }

  // scan_windows_registry - computed: true, optional: false, required: false
  public get scanWindowsRegistry() {
    return this.getBooleanAttribute('scan_windows_registry');
  }

  // scope - computed: true, optional: false, required: false
  private _scope = new DataAquasecHostAssurancePolicyScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }

  // vulnerability_exploitability - computed: true, optional: false, required: false
  public get vulnerabilityExploitability() {
    return this.getBooleanAttribute('vulnerability_exploitability');
  }

  // vulnerability_score_range - computed: true, optional: false, required: false
  public get vulnerabilityScoreRange() {
    return this.getNumberListAttribute('vulnerability_score_range');
  }

  // windows_cis_enabled - computed: true, optional: false, required: false
  public get windowsCisEnabled() {
    return this.getBooleanAttribute('windows_cis_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
