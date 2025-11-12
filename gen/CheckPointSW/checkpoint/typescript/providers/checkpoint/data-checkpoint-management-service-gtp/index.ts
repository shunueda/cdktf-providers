// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_service_gtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementServiceGtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_service_gtp#id DataCheckpointManagementServiceGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_service_gtp#name DataCheckpointManagementServiceGtp#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_service_gtp#uid DataCheckpointManagementServiceGtp#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRange {
}

export function dataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRangeToTerraform(struct?: DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRangeToHclTerraform(struct?: DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getStringAttribute('types');
  }
}

export class DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRangeOutputReference {
    return new DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementServiceGtpRadioAccessTechnology {
}

export function dataCheckpointManagementServiceGtpRadioAccessTechnologyToTerraform(struct?: DataCheckpointManagementServiceGtpRadioAccessTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementServiceGtpRadioAccessTechnologyToHclTerraform(struct?: DataCheckpointManagementServiceGtpRadioAccessTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementServiceGtpRadioAccessTechnologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementServiceGtpRadioAccessTechnology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementServiceGtpRadioAccessTechnology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eutran - computed: true, optional: false, required: false
  public get eutran() {
    return this.getBooleanAttribute('eutran');
  }

  // gan - computed: true, optional: false, required: false
  public get gan() {
    return this.getBooleanAttribute('gan');
  }

  // geran - computed: true, optional: false, required: false
  public get geran() {
    return this.getBooleanAttribute('geran');
  }

  // hspa_evolution - computed: true, optional: false, required: false
  public get hspaEvolution() {
    return this.getBooleanAttribute('hspa_evolution');
  }

  // nb_iot - computed: true, optional: false, required: false
  public get nbIot() {
    return this.getBooleanAttribute('nb_iot');
  }

  // other_types_range - computed: true, optional: false, required: false
  private _otherTypesRange = new DataCheckpointManagementServiceGtpRadioAccessTechnologyOtherTypesRangeList(this, "other_types_range", false);
  public get otherTypesRange() {
    return this._otherTypesRange;
  }

  // utran - computed: true, optional: false, required: false
  public get utran() {
    return this.getBooleanAttribute('utran');
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // wlan - computed: true, optional: false, required: false
  public get wlan() {
    return this.getBooleanAttribute('wlan');
  }
}

export class DataCheckpointManagementServiceGtpRadioAccessTechnologyList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementServiceGtpRadioAccessTechnologyOutputReference {
    return new DataCheckpointManagementServiceGtpRadioAccessTechnologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementServiceGtpSelectionMode {
}

export function dataCheckpointManagementServiceGtpSelectionModeToTerraform(struct?: DataCheckpointManagementServiceGtpSelectionMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementServiceGtpSelectionModeToHclTerraform(struct?: DataCheckpointManagementServiceGtpSelectionMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementServiceGtpSelectionModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementServiceGtpSelectionMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementServiceGtpSelectionMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getNumberAttribute('mode');
  }
}

export class DataCheckpointManagementServiceGtpSelectionModeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementServiceGtpSelectionModeOutputReference {
    return new DataCheckpointManagementServiceGtpSelectionModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_service_gtp checkpoint_management_service_gtp}
*/
export class DataCheckpointManagementServiceGtp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_service_gtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementServiceGtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementServiceGtp to import
  * @param importFromId The id of the existing DataCheckpointManagementServiceGtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_service_gtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementServiceGtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_service_gtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_service_gtp checkpoint_management_service_gtp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementServiceGtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementServiceGtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_service_gtp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
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
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_name - computed: true, optional: false, required: false
  private _accessPointName = new cdktf.StringMap(this, "access_point_name");
  public get accessPointName() {
    return this._accessPointName;
  }

  // allow_usage_of_static_ip - computed: true, optional: false, required: false
  public get allowUsageOfStaticIp() {
    return this.getBooleanAttribute('allow_usage_of_static_ip');
  }

  // apply_access_policy_on_user_traffic - computed: true, optional: false, required: false
  private _applyAccessPolicyOnUserTraffic = new cdktf.StringMap(this, "apply_access_policy_on_user_traffic");
  public get applyAccessPolicyOnUserTraffic() {
    return this._applyAccessPolicyOnUserTraffic;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // cs_fallback_and_srvcc - computed: true, optional: false, required: false
  public get csFallbackAndSrvcc() {
    return this.getBooleanAttribute('cs_fallback_and_srvcc');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
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

  // ignore_errors - computed: true, optional: false, required: false
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }

  // ignore_warnings - computed: true, optional: false, required: false
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }

  // imsi_prefix - computed: true, optional: false, required: false
  private _imsiPrefix = new cdktf.StringMap(this, "imsi_prefix");
  public get imsiPrefix() {
    return this._imsiPrefix;
  }

  // interface_profile - computed: true, optional: false, required: false
  private _interfaceProfile = new cdktf.StringMap(this, "interface_profile");
  public get interfaceProfile() {
    return this._interfaceProfile;
  }

  // ldap_group - computed: true, optional: false, required: false
  private _ldapGroup = new cdktf.StringMap(this, "ldap_group");
  public get ldapGroup() {
    return this._ldapGroup;
  }

  // ms_isdn - computed: true, optional: false, required: false
  private _msIsdn = new cdktf.StringMap(this, "ms_isdn");
  public get msIsdn() {
    return this._msIsdn;
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

  // radio_access_technology - computed: true, optional: false, required: false
  private _radioAccessTechnology = new DataCheckpointManagementServiceGtpRadioAccessTechnologyList(this, "radio_access_technology", false);
  public get radioAccessTechnology() {
    return this._radioAccessTechnology;
  }

  // restoration_and_recovery - computed: true, optional: false, required: false
  public get restorationAndRecovery() {
    return this.getBooleanAttribute('restoration_and_recovery');
  }

  // reverse_service - computed: true, optional: false, required: false
  public get reverseService() {
    return this.getBooleanAttribute('reverse_service');
  }

  // selection_mode - computed: true, optional: false, required: false
  private _selectionMode = new DataCheckpointManagementServiceGtpSelectionModeList(this, "selection_mode", false);
  public get selectionMode() {
    return this._selectionMode;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // trace_management - computed: true, optional: false, required: false
  public get traceManagement() {
    return this.getBooleanAttribute('trace_management');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
