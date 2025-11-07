// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_switchport_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceSwitchportFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_switchport_feature#feature_profile_id DataSdwanServiceSwitchportFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_switchport_feature#id DataSdwanServiceSwitchportFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanServiceSwitchportFeatureInterfaces {
}

export function dataSdwanServiceSwitchportFeatureInterfacesToTerraform(struct?: DataSdwanServiceSwitchportFeatureInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceSwitchportFeatureInterfacesToHclTerraform(struct?: DataSdwanServiceSwitchportFeatureInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceSwitchportFeatureInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceSwitchportFeatureInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceSwitchportFeatureInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_direction - computed: true, optional: false, required: false
  public get controlDirection() {
    return this.getStringAttribute('control_direction');
  }

  // control_direction_variable - computed: true, optional: false, required: false
  public get controlDirectionVariable() {
    return this.getStringAttribute('control_direction_variable');
  }

  // critical_vlan - computed: true, optional: false, required: false
  public get criticalVlan() {
    return this.getNumberAttribute('critical_vlan');
  }

  // critical_vlan_variable - computed: true, optional: false, required: false
  public get criticalVlanVariable() {
    return this.getStringAttribute('critical_vlan_variable');
  }

  // duplex - computed: true, optional: false, required: false
  public get duplex() {
    return this.getStringAttribute('duplex');
  }

  // duplex_variable - computed: true, optional: false, required: false
  public get duplexVariable() {
    return this.getStringAttribute('duplex_variable');
  }

  // enable_periodic_reauth - computed: true, optional: false, required: false
  public get enablePeriodicReauth() {
    return this.getBooleanAttribute('enable_periodic_reauth');
  }

  // enable_periodic_reauth_variable - computed: true, optional: false, required: false
  public get enablePeriodicReauthVariable() {
    return this.getStringAttribute('enable_periodic_reauth_variable');
  }

  // enable_voice - computed: true, optional: false, required: false
  public get enableVoice() {
    return this.getBooleanAttribute('enable_voice');
  }

  // enable_voice_variable - computed: true, optional: false, required: false
  public get enableVoiceVariable() {
    return this.getStringAttribute('enable_voice_variable');
  }

  // guest_vlan - computed: true, optional: false, required: false
  public get guestVlan() {
    return this.getNumberAttribute('guest_vlan');
  }

  // guest_vlan_variable - computed: true, optional: false, required: false
  public get guestVlanVariable() {
    return this.getStringAttribute('guest_vlan_variable');
  }

  // host_mode - computed: true, optional: false, required: false
  public get hostMode() {
    return this.getStringAttribute('host_mode');
  }

  // host_mode_variable - computed: true, optional: false, required: false
  public get hostModeVariable() {
    return this.getStringAttribute('host_mode_variable');
  }

  // inactivity - computed: true, optional: false, required: false
  public get inactivity() {
    return this.getNumberAttribute('inactivity');
  }

  // inactivity_variable - computed: true, optional: false, required: false
  public get inactivityVariable() {
    return this.getStringAttribute('inactivity_variable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // mac_authentication_bypass - computed: true, optional: false, required: false
  public get macAuthenticationBypass() {
    return this.getBooleanAttribute('mac_authentication_bypass');
  }

  // mac_authentication_bypass_variable - computed: true, optional: false, required: false
  public get macAuthenticationBypassVariable() {
    return this.getStringAttribute('mac_authentication_bypass_variable');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // pae_enable - computed: true, optional: false, required: false
  public get paeEnable() {
    return this.getBooleanAttribute('pae_enable');
  }

  // pae_enable_variable - computed: true, optional: false, required: false
  public get paeEnableVariable() {
    return this.getStringAttribute('pae_enable_variable');
  }

  // port_control - computed: true, optional: false, required: false
  public get portControl() {
    return this.getStringAttribute('port_control');
  }

  // port_control_variable - computed: true, optional: false, required: false
  public get portControlVariable() {
    return this.getStringAttribute('port_control_variable');
  }

  // reauthentication - computed: true, optional: false, required: false
  public get reauthentication() {
    return this.getNumberAttribute('reauthentication');
  }

  // reauthentication_variable - computed: true, optional: false, required: false
  public get reauthenticationVariable() {
    return this.getStringAttribute('reauthentication_variable');
  }

  // restricted_vlan - computed: true, optional: false, required: false
  public get restrictedVlan() {
    return this.getNumberAttribute('restricted_vlan');
  }

  // restricted_vlan_variable - computed: true, optional: false, required: false
  public get restrictedVlanVariable() {
    return this.getStringAttribute('restricted_vlan_variable');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // speed_variable - computed: true, optional: false, required: false
  public get speedVariable() {
    return this.getStringAttribute('speed_variable');
  }

  // switchport_access_vlan - computed: true, optional: false, required: false
  public get switchportAccessVlan() {
    return this.getNumberAttribute('switchport_access_vlan');
  }

  // switchport_access_vlan_variable - computed: true, optional: false, required: false
  public get switchportAccessVlanVariable() {
    return this.getStringAttribute('switchport_access_vlan_variable');
  }

  // switchport_trunk_allowed_vlans - computed: true, optional: false, required: false
  public get switchportTrunkAllowedVlans() {
    return this.getStringAttribute('switchport_trunk_allowed_vlans');
  }

  // switchport_trunk_allowed_vlans_variable - computed: true, optional: false, required: false
  public get switchportTrunkAllowedVlansVariable() {
    return this.getStringAttribute('switchport_trunk_allowed_vlans_variable');
  }

  // switchport_trunk_native_vlan - computed: true, optional: false, required: false
  public get switchportTrunkNativeVlan() {
    return this.getNumberAttribute('switchport_trunk_native_vlan');
  }

  // switchport_trunk_native_vlan_variable - computed: true, optional: false, required: false
  public get switchportTrunkNativeVlanVariable() {
    return this.getStringAttribute('switchport_trunk_native_vlan_variable');
  }

  // voice_vlan - computed: true, optional: false, required: false
  public get voiceVlan() {
    return this.getNumberAttribute('voice_vlan');
  }

  // voice_vlan_variable - computed: true, optional: false, required: false
  public get voiceVlanVariable() {
    return this.getStringAttribute('voice_vlan_variable');
  }
}

export class DataSdwanServiceSwitchportFeatureInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceSwitchportFeatureInterfacesOutputReference {
    return new DataSdwanServiceSwitchportFeatureInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanServiceSwitchportFeatureStaticMacAddresses {
}

export function dataSdwanServiceSwitchportFeatureStaticMacAddressesToTerraform(struct?: DataSdwanServiceSwitchportFeatureStaticMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceSwitchportFeatureStaticMacAddressesToHclTerraform(struct?: DataSdwanServiceSwitchportFeatureStaticMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceSwitchportFeatureStaticMacAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanServiceSwitchportFeatureStaticMacAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceSwitchportFeatureStaticMacAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // interface_name_variable - computed: true, optional: false, required: false
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_address_variable - computed: true, optional: false, required: false
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_id_variable - computed: true, optional: false, required: false
  public get vlanIdVariable() {
    return this.getStringAttribute('vlan_id_variable');
  }
}

export class DataSdwanServiceSwitchportFeatureStaticMacAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceSwitchportFeatureStaticMacAddressesOutputReference {
    return new DataSdwanServiceSwitchportFeatureStaticMacAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_switchport_feature sdwan_service_switchport_feature}
*/
export class DataSdwanServiceSwitchportFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_switchport_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceSwitchportFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceSwitchportFeature to import
  * @param importFromId The id of the existing DataSdwanServiceSwitchportFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_switchport_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceSwitchportFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_switchport_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_switchport_feature sdwan_service_switchport_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceSwitchportFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceSwitchportFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_switchport_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age_out_time - computed: true, optional: false, required: false
  public get ageOutTime() {
    return this.getNumberAttribute('age_out_time');
  }

  // age_out_time_variable - computed: true, optional: false, required: false
  public get ageOutTimeVariable() {
    return this.getStringAttribute('age_out_time_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataSdwanServiceSwitchportFeatureInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // static_mac_addresses - computed: true, optional: false, required: false
  private _staticMacAddresses = new DataSdwanServiceSwitchportFeatureStaticMacAddressesList(this, "static_mac_addresses", false);
  public get staticMacAddresses() {
    return this._staticMacAddresses;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
