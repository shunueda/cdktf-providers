// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/wireless_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterWirelessProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Wireless Network Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/wireless_profile#wireless_profile_name DataCatalystcenterWirelessProfile#wireless_profile_name}
  */
  readonly wirelessProfileName: string;
}
export interface DataCatalystcenterWirelessProfileApZones {
}

export function dataCatalystcenterWirelessProfileApZonesToTerraform(struct?: DataCatalystcenterWirelessProfileApZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterWirelessProfileApZonesToHclTerraform(struct?: DataCatalystcenterWirelessProfileApZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterWirelessProfileApZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterWirelessProfileApZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterWirelessProfileApZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_zone_name - computed: true, optional: false, required: false
  public get apZoneName() {
    return this.getStringAttribute('ap_zone_name');
  }

  // rf_profile_name - computed: true, optional: false, required: false
  public get rfProfileName() {
    return this.getStringAttribute('rf_profile_name');
  }

  // ssids - computed: true, optional: false, required: false
  public get ssids() {
    return cdktf.Fn.tolist(this.getListAttribute('ssids'));
  }
}

export class DataCatalystcenterWirelessProfileApZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterWirelessProfileApZonesOutputReference {
    return new DataCatalystcenterWirelessProfileApZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalystcenterWirelessProfileSsidDetails {
}

export function dataCatalystcenterWirelessProfileSsidDetailsToTerraform(struct?: DataCatalystcenterWirelessProfileSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterWirelessProfileSsidDetailsToHclTerraform(struct?: DataCatalystcenterWirelessProfileSsidDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterWirelessProfileSsidDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterWirelessProfileSsidDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterWirelessProfileSsidDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dot11be_profile_id - computed: true, optional: false, required: false
  public get dot11BeProfileId() {
    return this.getStringAttribute('dot11be_profile_id');
  }

  // enable_fabric - computed: true, optional: false, required: false
  public get enableFabric() {
    return this.getBooleanAttribute('enable_fabric');
  }

  // enable_flex_connect - computed: true, optional: false, required: false
  public get enableFlexConnect() {
    return this.getBooleanAttribute('enable_flex_connect');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // local_to_vlan - computed: true, optional: false, required: false
  public get localToVlan() {
    return this.getNumberAttribute('local_to_vlan');
  }

  // ssid_name - computed: true, optional: false, required: false
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }

  // wlan_profile_name - computed: true, optional: false, required: false
  public get wlanProfileName() {
    return this.getStringAttribute('wlan_profile_name');
  }
}

export class DataCatalystcenterWirelessProfileSsidDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterWirelessProfileSsidDetailsOutputReference {
    return new DataCatalystcenterWirelessProfileSsidDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/wireless_profile catalystcenter_wireless_profile}
*/
export class DataCatalystcenterWirelessProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_wireless_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterWirelessProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterWirelessProfile to import
  * @param importFromId The id of the existing DataCatalystcenterWirelessProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/wireless_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterWirelessProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_wireless_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/wireless_profile catalystcenter_wireless_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterWirelessProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterWirelessProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_wireless_profile',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._wirelessProfileName = config.wirelessProfileName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_interfaces - computed: true, optional: false, required: false
  public get additionalInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_interfaces'));
  }

  // ap_zones - computed: true, optional: false, required: false
  private _apZones = new DataCatalystcenterWirelessProfileApZonesList(this, "ap_zones", true);
  public get apZones() {
    return this._apZones;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ssid_details - computed: true, optional: false, required: false
  private _ssidDetails = new DataCatalystcenterWirelessProfileSsidDetailsList(this, "ssid_details", true);
  public get ssidDetails() {
    return this._ssidDetails;
  }

  // wireless_profile_name - computed: false, optional: false, required: true
  private _wirelessProfileName?: string; 
  public get wirelessProfileName() {
    return this.getStringAttribute('wireless_profile_name');
  }
  public set wirelessProfileName(value: string) {
    this._wirelessProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessProfileNameInput() {
    return this._wirelessProfileName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      wireless_profile_name: cdktf.stringToTerraform(this._wirelessProfileName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      wireless_profile_name: {
        value: cdktf.stringToHclTerraform(this._wirelessProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
