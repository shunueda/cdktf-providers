// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementLsmGatewayProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile#id DataCheckpointManagementLsmGatewayProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile#name DataCheckpointManagementLsmGatewayProfile#name}
  */
  readonly name?: string;
  /**
  * Gateway platform operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile#os_name DataCheckpointManagementLsmGatewayProfile#os_name}
  */
  readonly osName?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile#uid DataCheckpointManagementLsmGatewayProfile#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSam {
}

export function dataCheckpointManagementLsmGatewayProfileAdvancedSettingsSamToTerraform(struct?: DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayProfileAdvancedSettingsSamToHclTerraform(struct?: DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_to_other_sam_servers - computed: true, optional: false, required: false
  public get forwardToOtherSamServers() {
    return this.getBooleanAttribute('forward_to_other_sam_servers');
  }

  // purge_sam_file - computed: true, optional: false, required: false
  private _purgeSamFile = new cdktf.StringMap(this, "purge_sam_file");
  public get purgeSamFile() {
    return this._purgeSamFile;
  }

  // use_early_versions - computed: true, optional: false, required: false
  private _useEarlyVersions = new cdktf.StringMap(this, "use_early_versions");
  public get useEarlyVersions() {
    return this._useEarlyVersions;
  }
}

export class DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSamList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSamOutputReference {
    return new DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayProfileAdvancedSettings {
}

export function dataCheckpointManagementLsmGatewayProfileAdvancedSettingsToTerraform(struct?: DataCheckpointManagementLsmGatewayProfileAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayProfileAdvancedSettingsToHclTerraform(struct?: DataCheckpointManagementLsmGatewayProfileAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayProfileAdvancedSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayProfileAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayProfileAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_persistence - computed: true, optional: false, required: false
  public get connectionPersistence() {
    return this.getStringAttribute('connection_persistence');
  }

  // sam - computed: true, optional: false, required: false
  private _sam = new DataCheckpointManagementLsmGatewayProfileAdvancedSettingsSamList(this, "sam", false);
  public get sam() {
    return this._sam;
  }
}

export class DataCheckpointManagementLsmGatewayProfileAdvancedSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayProfileAdvancedSettingsOutputReference {
    return new DataCheckpointManagementLsmGatewayProfileAdvancedSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettings {
}

export function dataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettingsToTerraform(struct?: DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettingsToHclTerraform(struct?: DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global_settings_mode - computed: true, optional: false, required: false
  public get globalSettingsMode() {
    return this.getStringAttribute('global_settings_mode');
  }

  // override_global_settings - computed: true, optional: false, required: false
  private _overrideGlobalSettings = new cdktf.StringMap(this, "override_global_settings");
  public get overrideGlobalSettings() {
    return this._overrideGlobalSettings;
  }
}

export class DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettingsOutputReference {
    return new DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayProfileGroups {
}

export function dataCheckpointManagementLsmGatewayProfileGroupsToTerraform(struct?: DataCheckpointManagementLsmGatewayProfileGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayProfileGroupsToHclTerraform(struct?: DataCheckpointManagementLsmGatewayProfileGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayProfileGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayProfileGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayProfileGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementLsmGatewayProfileGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayProfileGroupsOutputReference {
    return new DataCheckpointManagementLsmGatewayProfileGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementLsmGatewayProfileHttpsInspection {
}

export function dataCheckpointManagementLsmGatewayProfileHttpsInspectionToTerraform(struct?: DataCheckpointManagementLsmGatewayProfileHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementLsmGatewayProfileHttpsInspectionToHclTerraform(struct?: DataCheckpointManagementLsmGatewayProfileHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementLsmGatewayProfileHttpsInspectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementLsmGatewayProfileHttpsInspection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementLsmGatewayProfileHttpsInspection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bypass_on_failure - computed: true, optional: false, required: false
  private _bypassOnFailure = new cdktf.StringMap(this, "bypass_on_failure");
  public get bypassOnFailure() {
    return this._bypassOnFailure;
  }

  // deny_expired_server_cert - computed: true, optional: false, required: false
  private _denyExpiredServerCert = new cdktf.StringMap(this, "deny_expired_server_cert");
  public get denyExpiredServerCert() {
    return this._denyExpiredServerCert;
  }

  // deny_revoked_server_cert - computed: true, optional: false, required: false
  private _denyRevokedServerCert = new cdktf.StringMap(this, "deny_revoked_server_cert");
  public get denyRevokedServerCert() {
    return this._denyRevokedServerCert;
  }

  // deny_untrusted_server_cert - computed: true, optional: false, required: false
  private _denyUntrustedServerCert = new cdktf.StringMap(this, "deny_untrusted_server_cert");
  public get denyUntrustedServerCert() {
    return this._denyUntrustedServerCert;
  }

  // site_categorization_allow_mode - computed: true, optional: false, required: false
  private _siteCategorizationAllowMode = new cdktf.StringMap(this, "site_categorization_allow_mode");
  public get siteCategorizationAllowMode() {
    return this._siteCategorizationAllowMode;
  }
}

export class DataCheckpointManagementLsmGatewayProfileHttpsInspectionList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementLsmGatewayProfileHttpsInspectionOutputReference {
    return new DataCheckpointManagementLsmGatewayProfileHttpsInspectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile checkpoint_management_lsm_gateway_profile}
*/
export class DataCheckpointManagementLsmGatewayProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_lsm_gateway_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementLsmGatewayProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementLsmGatewayProfile to import
  * @param importFromId The id of the existing DataCheckpointManagementLsmGatewayProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementLsmGatewayProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_lsm_gateway_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_lsm_gateway_profile checkpoint_management_lsm_gateway_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementLsmGatewayProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementLsmGatewayProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_lsm_gateway_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._name = config.name;
    this._osName = config.osName;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_settings - computed: true, optional: false, required: false
  private _advancedSettings = new DataCheckpointManagementLsmGatewayProfileAdvancedSettingsList(this, "advanced_settings", false);
  public get advancedSettings() {
    return this._advancedSettings;
  }

  // anti_bot - computed: true, optional: false, required: false
  public get antiBot() {
    return this.getBooleanAttribute('anti_bot');
  }

  // anti_virus - computed: true, optional: false, required: false
  public get antiVirus() {
    return this.getBooleanAttribute('anti_virus');
  }

  // application_control - computed: true, optional: false, required: false
  public get applicationControl() {
    return this.getBooleanAttribute('application_control');
  }

  // application_control_and_url_filtering_settings - computed: true, optional: false, required: false
  private _applicationControlAndUrlFilteringSettings = new DataCheckpointManagementLsmGatewayProfileApplicationControlAndUrlFilteringSettingsList(this, "application_control_and_url_filtering_settings", false);
  public get applicationControlAndUrlFilteringSettings() {
    return this._applicationControlAndUrlFilteringSettings;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // content_awareness - computed: true, optional: false, required: false
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }

  // data_loss_prevention - computed: true, optional: false, required: false
  public get dataLossPrevention() {
    return this.getBooleanAttribute('data_loss_prevention');
  }

  // dynamic_ip - computed: true, optional: false, required: false
  public get dynamicIp() {
    return this.getBooleanAttribute('dynamic_ip');
  }

  // enable_https_inspection - computed: true, optional: false, required: false
  public get enableHttpsInspection() {
    return this.getBooleanAttribute('enable_https_inspection');
  }

  // firewall - computed: true, optional: false, required: false
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataCheckpointManagementLsmGatewayProfileGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // hit_count - computed: true, optional: false, required: false
  public get hitCount() {
    return this.getBooleanAttribute('hit_count');
  }

  // https_inspection - computed: true, optional: false, required: false
  private _httpsInspection = new DataCheckpointManagementLsmGatewayProfileHttpsInspectionList(this, "https_inspection", false);
  public get httpsInspection() {
    return this._httpsInspection;
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

  // interfaces - computed: true, optional: false, required: false
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getBooleanAttribute('ips');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat_hide_internal_interfaces - computed: true, optional: false, required: false
  public get natHideInternalInterfaces() {
    return this.getBooleanAttribute('nat_hide_internal_interfaces');
  }

  // nat_settings - computed: true, optional: false, required: false
  private _natSettings = new cdktf.StringMap(this, "nat_settings");
  public get natSettings() {
    return this._natSettings;
  }

  // os_name - computed: false, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // proxy_settings - computed: true, optional: false, required: false
  private _proxySettings = new cdktf.StringMap(this, "proxy_settings");
  public get proxySettings() {
    return this._proxySettings;
  }

  // qos - computed: true, optional: false, required: false
  public get qos() {
    return this.getBooleanAttribute('qos');
  }

  // save_logs_locally - computed: true, optional: false, required: false
  public get saveLogsLocally() {
    return this.getBooleanAttribute('save_logs_locally');
  }

  // send_alerts_to_server - computed: true, optional: false, required: false
  public get sendAlertsToServer() {
    return this.getListAttribute('send_alerts_to_server');
  }

  // send_logs_to_backup_server - computed: true, optional: false, required: false
  public get sendLogsToBackupServer() {
    return this.getListAttribute('send_logs_to_backup_server');
  }

  // send_logs_to_server - computed: true, optional: false, required: false
  public get sendLogsToServer() {
    return this.getListAttribute('send_logs_to_server');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // threat_emulation - computed: true, optional: false, required: false
  public get threatEmulation() {
    return this.getBooleanAttribute('threat_emulation');
  }

  // threat_extraction - computed: true, optional: false, required: false
  public get threatExtraction() {
    return this.getBooleanAttribute('threat_extraction');
  }

  // threat_prevention_mode - computed: true, optional: false, required: false
  public get threatPreventionMode() {
    return this.getStringAttribute('threat_prevention_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // url_filtering - computed: true, optional: false, required: false
  public get urlFiltering() {
    return this.getBooleanAttribute('url_filtering');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }

  // zero_phishing - computed: true, optional: false, required: false
  public get zeroPhishing() {
    return this.getBooleanAttribute('zero_phishing');
  }

  // zero_phishing_fqdn - computed: true, optional: false, required: false
  public get zeroPhishingFqdn() {
    return this.getStringAttribute('zero_phishing_fqdn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      os_name: cdktf.stringToTerraform(this._osName),
      uid: cdktf.stringToTerraform(this._uid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
