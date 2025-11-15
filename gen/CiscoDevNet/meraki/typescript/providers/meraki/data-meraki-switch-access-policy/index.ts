// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_access_policy#id DataMerakiSwitchAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the access policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_access_policy#name DataMerakiSwitchAccessPolicy#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_access_policy#network_id DataMerakiSwitchAccessPolicy#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiSwitchAccessPolicyRadiusAccountingServers {
}

export function dataMerakiSwitchAccessPolicyRadiusAccountingServersToTerraform(struct?: DataMerakiSwitchAccessPolicyRadiusAccountingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchAccessPolicyRadiusAccountingServersToHclTerraform(struct?: DataMerakiSwitchAccessPolicyRadiusAccountingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchAccessPolicyRadiusAccountingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchAccessPolicyRadiusAccountingServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchAccessPolicyRadiusAccountingServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // organization_radius_server_id - computed: true, optional: false, required: false
  public get organizationRadiusServerId() {
    return this.getStringAttribute('organization_radius_server_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataMerakiSwitchAccessPolicyRadiusAccountingServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchAccessPolicyRadiusAccountingServersOutputReference {
    return new DataMerakiSwitchAccessPolicyRadiusAccountingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiSwitchAccessPolicyRadiusServers {
}

export function dataMerakiSwitchAccessPolicyRadiusServersToTerraform(struct?: DataMerakiSwitchAccessPolicyRadiusServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchAccessPolicyRadiusServersToHclTerraform(struct?: DataMerakiSwitchAccessPolicyRadiusServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchAccessPolicyRadiusServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchAccessPolicyRadiusServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchAccessPolicyRadiusServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // organization_radius_server_id - computed: true, optional: false, required: false
  public get organizationRadiusServerId() {
    return this.getStringAttribute('organization_radius_server_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataMerakiSwitchAccessPolicyRadiusServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchAccessPolicyRadiusServersOutputReference {
    return new DataMerakiSwitchAccessPolicyRadiusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_access_policy meraki_switch_access_policy}
*/
export class DataMerakiSwitchAccessPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchAccessPolicy to import
  * @param importFromId The id of the existing DataMerakiSwitchAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_access_policy meraki_switch_access_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_type - computed: true, optional: false, required: false
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }

  // dot1x_control_direction - computed: true, optional: false, required: false
  public get dot1XControlDirection() {
    return this.getStringAttribute('dot1x_control_direction');
  }

  // guest_group_policy_id - computed: true, optional: false, required: false
  public get guestGroupPolicyId() {
    return this.getStringAttribute('guest_group_policy_id');
  }

  // guest_port_bouncing - computed: true, optional: false, required: false
  public get guestPortBouncing() {
    return this.getBooleanAttribute('guest_port_bouncing');
  }

  // guest_sgt_id - computed: true, optional: false, required: false
  public get guestSgtId() {
    return this.getNumberAttribute('guest_sgt_id');
  }

  // guest_vlan_id - computed: true, optional: false, required: false
  public get guestVlanId() {
    return this.getNumberAttribute('guest_vlan_id');
  }

  // host_mode - computed: true, optional: false, required: false
  public get hostMode() {
    return this.getStringAttribute('host_mode');
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

  // increase_access_speed - computed: true, optional: false, required: false
  public get increaseAccessSpeed() {
    return this.getBooleanAttribute('increase_access_speed');
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // radius_accounting_enabled - computed: true, optional: false, required: false
  public get radiusAccountingEnabled() {
    return this.getBooleanAttribute('radius_accounting_enabled');
  }

  // radius_accounting_servers - computed: true, optional: false, required: false
  private _radiusAccountingServers = new DataMerakiSwitchAccessPolicyRadiusAccountingServersList(this, "radius_accounting_servers", false);
  public get radiusAccountingServers() {
    return this._radiusAccountingServers;
  }

  // radius_authentication_mode - computed: true, optional: false, required: false
  public get radiusAuthenticationMode() {
    return this.getStringAttribute('radius_authentication_mode');
  }

  // radius_cache_enabled - computed: true, optional: false, required: false
  public get radiusCacheEnabled() {
    return this.getBooleanAttribute('radius_cache_enabled');
  }

  // radius_cache_timeout - computed: true, optional: false, required: false
  public get radiusCacheTimeout() {
    return this.getNumberAttribute('radius_cache_timeout');
  }

  // radius_coa_support_enabled - computed: true, optional: false, required: false
  public get radiusCoaSupportEnabled() {
    return this.getBooleanAttribute('radius_coa_support_enabled');
  }

  // radius_critical_auth_data_group_policy_id - computed: true, optional: false, required: false
  public get radiusCriticalAuthDataGroupPolicyId() {
    return this.getStringAttribute('radius_critical_auth_data_group_policy_id');
  }

  // radius_critical_auth_data_sgt_id - computed: true, optional: false, required: false
  public get radiusCriticalAuthDataSgtId() {
    return this.getNumberAttribute('radius_critical_auth_data_sgt_id');
  }

  // radius_critical_auth_data_vlan_id - computed: true, optional: false, required: false
  public get radiusCriticalAuthDataVlanId() {
    return this.getNumberAttribute('radius_critical_auth_data_vlan_id');
  }

  // radius_critical_auth_suspend_port_bounce - computed: true, optional: false, required: false
  public get radiusCriticalAuthSuspendPortBounce() {
    return this.getBooleanAttribute('radius_critical_auth_suspend_port_bounce');
  }

  // radius_critical_auth_voice_group_policy_id - computed: true, optional: false, required: false
  public get radiusCriticalAuthVoiceGroupPolicyId() {
    return this.getStringAttribute('radius_critical_auth_voice_group_policy_id');
  }

  // radius_critical_auth_voice_sgt_id - computed: true, optional: false, required: false
  public get radiusCriticalAuthVoiceSgtId() {
    return this.getNumberAttribute('radius_critical_auth_voice_sgt_id');
  }

  // radius_critical_auth_voice_vlan_id - computed: true, optional: false, required: false
  public get radiusCriticalAuthVoiceVlanId() {
    return this.getNumberAttribute('radius_critical_auth_voice_vlan_id');
  }

  // radius_failed_auth_group_policy_id - computed: true, optional: false, required: false
  public get radiusFailedAuthGroupPolicyId() {
    return this.getStringAttribute('radius_failed_auth_group_policy_id');
  }

  // radius_failed_auth_sgt_id - computed: true, optional: false, required: false
  public get radiusFailedAuthSgtId() {
    return this.getNumberAttribute('radius_failed_auth_sgt_id');
  }

  // radius_failed_auth_vlan_id - computed: true, optional: false, required: false
  public get radiusFailedAuthVlanId() {
    return this.getNumberAttribute('radius_failed_auth_vlan_id');
  }

  // radius_group_attribute - computed: true, optional: false, required: false
  public get radiusGroupAttribute() {
    return this.getStringAttribute('radius_group_attribute');
  }

  // radius_pre_authentication_group_policy_id - computed: true, optional: false, required: false
  public get radiusPreAuthenticationGroupPolicyId() {
    return this.getStringAttribute('radius_pre_authentication_group_policy_id');
  }

  // radius_re_authentication_interval - computed: true, optional: false, required: false
  public get radiusReAuthenticationInterval() {
    return this.getNumberAttribute('radius_re_authentication_interval');
  }

  // radius_servers - computed: true, optional: false, required: false
  private _radiusServers = new DataMerakiSwitchAccessPolicyRadiusServersList(this, "radius_servers", false);
  public get radiusServers() {
    return this._radiusServers;
  }

  // radius_testing_enabled - computed: true, optional: false, required: false
  public get radiusTestingEnabled() {
    return this.getBooleanAttribute('radius_testing_enabled');
  }

  // url_redirect_walled_garden_enabled - computed: true, optional: false, required: false
  public get urlRedirectWalledGardenEnabled() {
    return this.getBooleanAttribute('url_redirect_walled_garden_enabled');
  }

  // url_redirect_walled_garden_ranges - computed: true, optional: false, required: false
  public get urlRedirectWalledGardenRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('url_redirect_walled_garden_ranges'));
  }

  // voice_vlan_clients - computed: true, optional: false, required: false
  public get voiceVlanClients() {
    return this.getBooleanAttribute('voice_vlan_clients');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
