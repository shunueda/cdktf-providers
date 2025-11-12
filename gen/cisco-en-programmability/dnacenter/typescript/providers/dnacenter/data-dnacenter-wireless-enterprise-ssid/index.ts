// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_enterprise_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterWirelessEnterpriseSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_enterprise_ssid#id DataDnacenterWirelessEnterpriseSsid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ssidName query parameter. Enter the enterprise SSID name that needs to be retrieved. If not entered, all the enterprise SSIDs will be retrieved.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_enterprise_ssid#ssid_name DataDnacenterWirelessEnterpriseSsid#ssid_name}
  */
  readonly ssidName?: string;
}
export interface DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettings {
}

export function dataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettingsToTerraform(struct?: DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettingsToHclTerraform(struct?: DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // passphrase_type - computed: true, optional: false, required: false
  public get passphraseType() {
    return this.getStringAttribute('passphrase_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettingsOutputReference {
    return new DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessEnterpriseSsidItemsSsidDetails {
}

export function dataDnacenterWirelessEnterpriseSsidItemsSsidDetailsToTerraform(struct?: DataDnacenterWirelessEnterpriseSsidItemsSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessEnterpriseSsidItemsSsidDetailsToHclTerraform(struct?: DataDnacenterWirelessEnterpriseSsidItemsSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessEnterpriseSsidItemsSsidDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessEnterpriseSsidItemsSsidDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaa_override - computed: true, optional: false, required: false
  public get aaaOverride() {
    return this.getStringAttribute('aaa_override');
  }

  // auth_server - computed: true, optional: false, required: false
  public get authServer() {
    return this.getStringAttribute('auth_server');
  }

  // client_rate_limit - computed: true, optional: false, required: false
  public get clientRateLimit() {
    return this.getNumberAttribute('client_rate_limit');
  }

  // coverage_hole_detection_enable - computed: true, optional: false, required: false
  public get coverageHoleDetectionEnable() {
    return this.getStringAttribute('coverage_hole_detection_enable');
  }

  // enable_broadcast_ssi_d - computed: true, optional: false, required: false
  public get enableBroadcastSsiD() {
    return this.getStringAttribute('enable_broadcast_ssi_d');
  }

  // enable_fast_lane - computed: true, optional: false, required: false
  public get enableFastLane() {
    return this.getStringAttribute('enable_fast_lane');
  }

  // enable_mac_filtering - computed: true, optional: false, required: false
  public get enableMacFiltering() {
    return this.getStringAttribute('enable_mac_filtering');
  }

  // fast_transition - computed: true, optional: false, required: false
  public get fastTransition() {
    return this.getStringAttribute('fast_transition');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }

  // is_fabric - computed: true, optional: false, required: false
  public get isFabric() {
    return this.getStringAttribute('is_fabric');
  }

  // multi_psk_settings - computed: true, optional: false, required: false
  private _multiPskSettings = new DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsMultiPskSettingsList(this, "multi_psk_settings", false);
  public get multiPskSettings() {
    return this._multiPskSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nas_options - computed: true, optional: false, required: false
  public get nasOptions() {
    return this.getListAttribute('nas_options');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // protected_management_frame - computed: true, optional: false, required: false
  public get protectedManagementFrame() {
    return this.getStringAttribute('protected_management_frame');
  }

  // radio_policy - computed: true, optional: false, required: false
  public get radioPolicy() {
    return this.getStringAttribute('radio_policy');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }

  // wlan_type - computed: true, optional: false, required: false
  public get wlanType() {
    return this.getStringAttribute('wlan_type');
  }
}

export class DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsOutputReference {
    return new DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterWirelessEnterpriseSsidItems {
}

export function dataDnacenterWirelessEnterpriseSsidItemsToTerraform(struct?: DataDnacenterWirelessEnterpriseSsidItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterWirelessEnterpriseSsidItemsToHclTerraform(struct?: DataDnacenterWirelessEnterpriseSsidItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterWirelessEnterpriseSsidItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterWirelessEnterpriseSsidItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterWirelessEnterpriseSsidItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_uuid - computed: true, optional: false, required: false
  public get groupUuid() {
    return this.getStringAttribute('group_uuid');
  }

  // inherited_group_name - computed: true, optional: false, required: false
  public get inheritedGroupName() {
    return this.getStringAttribute('inherited_group_name');
  }

  // inherited_group_uuid - computed: true, optional: false, required: false
  public get inheritedGroupUuid() {
    return this.getStringAttribute('inherited_group_uuid');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // ssid_details - computed: true, optional: false, required: false
  private _ssidDetails = new DataDnacenterWirelessEnterpriseSsidItemsSsidDetailsList(this, "ssid_details", false);
  public get ssidDetails() {
    return this._ssidDetails;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataDnacenterWirelessEnterpriseSsidItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterWirelessEnterpriseSsidItemsOutputReference {
    return new DataDnacenterWirelessEnterpriseSsidItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_enterprise_ssid dnacenter_wireless_enterprise_ssid}
*/
export class DataDnacenterWirelessEnterpriseSsid extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_enterprise_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterWirelessEnterpriseSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterWirelessEnterpriseSsid to import
  * @param importFromId The id of the existing DataDnacenterWirelessEnterpriseSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_enterprise_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterWirelessEnterpriseSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_enterprise_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/wireless_enterprise_ssid dnacenter_wireless_enterprise_ssid} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterWirelessEnterpriseSsidConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterWirelessEnterpriseSsidConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_enterprise_ssid',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._ssidName = config.ssidName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterWirelessEnterpriseSsidItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // ssid_name - computed: false, optional: true, required: false
  private _ssidName?: string; 
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }
  public set ssidName(value: string) {
    this._ssidName = value;
  }
  public resetSsidName() {
    this._ssidName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNameInput() {
    return this._ssidName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ssid_name: cdktf.stringToTerraform(this._ssidName),
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
      ssid_name: {
        value: cdktf.stringToHclTerraform(this._ssidName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
