// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/switchport_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSwitchportFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/switchport_feature_template#id DataSdwanSwitchportFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/switchport_feature_template#name DataSdwanSwitchportFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanSwitchportFeatureTemplateInterfaces {
}

export function dataSdwanSwitchportFeatureTemplateInterfacesToTerraform(struct?: DataSdwanSwitchportFeatureTemplateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSwitchportFeatureTemplateInterfacesToHclTerraform(struct?: DataSdwanSwitchportFeatureTemplateInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSwitchportFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSwitchportFeatureTemplateInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSwitchportFeatureTemplateInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dot1x_authentication_order - computed: true, optional: false, required: false
  public get dot1XAuthenticationOrder() {
    return cdktf.Fn.tolist(this.getListAttribute('dot1x_authentication_order'));
  }

  // dot1x_authentication_order_variable - computed: true, optional: false, required: false
  public get dot1XAuthenticationOrderVariable() {
    return this.getStringAttribute('dot1x_authentication_order_variable');
  }

  // dot1x_control_direction - computed: true, optional: false, required: false
  public get dot1XControlDirection() {
    return this.getStringAttribute('dot1x_control_direction');
  }

  // dot1x_control_direction_variable - computed: true, optional: false, required: false
  public get dot1XControlDirectionVariable() {
    return this.getStringAttribute('dot1x_control_direction_variable');
  }

  // dot1x_critical_vlan - computed: true, optional: false, required: false
  public get dot1XCriticalVlan() {
    return this.getNumberAttribute('dot1x_critical_vlan');
  }

  // dot1x_critical_vlan_variable - computed: true, optional: false, required: false
  public get dot1XCriticalVlanVariable() {
    return this.getStringAttribute('dot1x_critical_vlan_variable');
  }

  // dot1x_enable - computed: true, optional: false, required: false
  public get dot1XEnable() {
    return this.getBooleanAttribute('dot1x_enable');
  }

  // dot1x_enable_criticial_voice_vlan - computed: true, optional: false, required: false
  public get dot1XEnableCriticialVoiceVlan() {
    return this.getBooleanAttribute('dot1x_enable_criticial_voice_vlan');
  }

  // dot1x_enable_criticial_voice_vlan_variable - computed: true, optional: false, required: false
  public get dot1XEnableCriticialVoiceVlanVariable() {
    return this.getStringAttribute('dot1x_enable_criticial_voice_vlan_variable');
  }

  // dot1x_enable_periodic_reauth - computed: true, optional: false, required: false
  public get dot1XEnablePeriodicReauth() {
    return this.getBooleanAttribute('dot1x_enable_periodic_reauth');
  }

  // dot1x_enable_periodic_reauth_variable - computed: true, optional: false, required: false
  public get dot1XEnablePeriodicReauthVariable() {
    return this.getStringAttribute('dot1x_enable_periodic_reauth_variable');
  }

  // dot1x_enable_variable - computed: true, optional: false, required: false
  public get dot1XEnableVariable() {
    return this.getStringAttribute('dot1x_enable_variable');
  }

  // dot1x_guest_vlan - computed: true, optional: false, required: false
  public get dot1XGuestVlan() {
    return this.getNumberAttribute('dot1x_guest_vlan');
  }

  // dot1x_guest_vlan_variable - computed: true, optional: false, required: false
  public get dot1XGuestVlanVariable() {
    return this.getStringAttribute('dot1x_guest_vlan_variable');
  }

  // dot1x_host_mode - computed: true, optional: false, required: false
  public get dot1XHostMode() {
    return this.getStringAttribute('dot1x_host_mode');
  }

  // dot1x_host_mode_variable - computed: true, optional: false, required: false
  public get dot1XHostModeVariable() {
    return this.getStringAttribute('dot1x_host_mode_variable');
  }

  // dot1x_mac_authentication_bypass - computed: true, optional: false, required: false
  public get dot1XMacAuthenticationBypass() {
    return this.getBooleanAttribute('dot1x_mac_authentication_bypass');
  }

  // dot1x_mac_authentication_bypass_variable - computed: true, optional: false, required: false
  public get dot1XMacAuthenticationBypassVariable() {
    return this.getStringAttribute('dot1x_mac_authentication_bypass_variable');
  }

  // dot1x_pae_enable - computed: true, optional: false, required: false
  public get dot1XPaeEnable() {
    return this.getBooleanAttribute('dot1x_pae_enable');
  }

  // dot1x_pae_enable_variable - computed: true, optional: false, required: false
  public get dot1XPaeEnableVariable() {
    return this.getStringAttribute('dot1x_pae_enable_variable');
  }

  // dot1x_periodic_reauth_inactivity_timeout - computed: true, optional: false, required: false
  public get dot1XPeriodicReauthInactivityTimeout() {
    return this.getNumberAttribute('dot1x_periodic_reauth_inactivity_timeout');
  }

  // dot1x_periodic_reauth_inactivity_timeout_variable - computed: true, optional: false, required: false
  public get dot1XPeriodicReauthInactivityTimeoutVariable() {
    return this.getStringAttribute('dot1x_periodic_reauth_inactivity_timeout_variable');
  }

  // dot1x_periodic_reauth_interval - computed: true, optional: false, required: false
  public get dot1XPeriodicReauthInterval() {
    return this.getNumberAttribute('dot1x_periodic_reauth_interval');
  }

  // dot1x_periodic_reauth_interval_variable - computed: true, optional: false, required: false
  public get dot1XPeriodicReauthIntervalVariable() {
    return this.getStringAttribute('dot1x_periodic_reauth_interval_variable');
  }

  // dot1x_port_control - computed: true, optional: false, required: false
  public get dot1XPortControl() {
    return this.getStringAttribute('dot1x_port_control');
  }

  // dot1x_port_control_variable - computed: true, optional: false, required: false
  public get dot1XPortControlVariable() {
    return this.getStringAttribute('dot1x_port_control_variable');
  }

  // dot1x_restricted_vlan - computed: true, optional: false, required: false
  public get dot1XRestrictedVlan() {
    return this.getNumberAttribute('dot1x_restricted_vlan');
  }

  // dot1x_restricted_vlan_variable - computed: true, optional: false, required: false
  public get dot1XRestrictedVlanVariable() {
    return this.getStringAttribute('dot1x_restricted_vlan_variable');
  }

  // duplex - computed: true, optional: false, required: false
  public get duplex() {
    return this.getStringAttribute('duplex');
  }

  // duplex_variable - computed: true, optional: false, required: false
  public get duplexVariable() {
    return this.getStringAttribute('duplex_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
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

  // switchport_mode - computed: true, optional: false, required: false
  public get switchportMode() {
    return this.getStringAttribute('switchport_mode');
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

export class DataSdwanSwitchportFeatureTemplateInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSwitchportFeatureTemplateInterfacesOutputReference {
    return new DataSdwanSwitchportFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanSwitchportFeatureTemplateStaticMacAddresses {
}

export function dataSdwanSwitchportFeatureTemplateStaticMacAddressesToTerraform(struct?: DataSdwanSwitchportFeatureTemplateStaticMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSwitchportFeatureTemplateStaticMacAddressesToHclTerraform(struct?: DataSdwanSwitchportFeatureTemplateStaticMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSwitchportFeatureTemplateStaticMacAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSwitchportFeatureTemplateStaticMacAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSwitchportFeatureTemplateStaticMacAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // if_name - computed: true, optional: false, required: false
  public get ifName() {
    return this.getStringAttribute('if_name');
  }

  // if_name_variable - computed: true, optional: false, required: false
  public get ifNameVariable() {
    return this.getStringAttribute('if_name_variable');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_address_variable - computed: true, optional: false, required: false
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // vlan_variable - computed: true, optional: false, required: false
  public get vlanVariable() {
    return this.getStringAttribute('vlan_variable');
  }
}

export class DataSdwanSwitchportFeatureTemplateStaticMacAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSwitchportFeatureTemplateStaticMacAddressesOutputReference {
    return new DataSdwanSwitchportFeatureTemplateStaticMacAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/switchport_feature_template sdwan_switchport_feature_template}
*/
export class DataSdwanSwitchportFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_switchport_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSwitchportFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSwitchportFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanSwitchportFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/switchport_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSwitchportFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_switchport_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/switchport_feature_template sdwan_switchport_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSwitchportFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSwitchportFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_switchport_feature_template',
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
    this._id = config.id;
    this._name = config.name;
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

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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
  private _interfaces = new DataSdwanSwitchportFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // module_type - computed: true, optional: false, required: false
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }

  // name - computed: true, optional: true, required: false
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

  // slot - computed: true, optional: false, required: false
  public get slot() {
    return this.getNumberAttribute('slot');
  }

  // static_mac_addresses - computed: true, optional: false, required: false
  private _staticMacAddresses = new DataSdwanSwitchportFeatureTemplateStaticMacAddressesList(this, "static_mac_addresses", false);
  public get staticMacAddresses() {
    return this._staticMacAddresses;
  }

  // sub_slot - computed: true, optional: false, required: false
  public get subSlot() {
    return this.getNumberAttribute('sub_slot');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
