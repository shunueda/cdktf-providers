// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_organization_ports_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchOrganizationPortsProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_organization_ports_profiles#organization_id DataMerakiSwitchOrganizationPortsProfiles#organization_id}
  */
  readonly organizationId: string;
}
export interface DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValues {
}

export function dataMerakiSwitchOrganizationPortsProfilesItemsNetworksValuesToTerraform(struct?: DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchOrganizationPortsProfilesItemsNetworksValuesToHclTerraform(struct?: DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValues | undefined) {
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

export class DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValuesOutputReference {
    return new DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiSwitchOrganizationPortsProfilesItems {
}

export function dataMerakiSwitchOrganizationPortsProfilesItemsToTerraform(struct?: DataMerakiSwitchOrganizationPortsProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchOrganizationPortsProfilesItemsToHclTerraform(struct?: DataMerakiSwitchOrganizationPortsProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchOrganizationPortsProfilesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchOrganizationPortsProfilesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchOrganizationPortsProfilesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_organization_wide - computed: true, optional: false, required: false
  public get isOrganizationWide() {
    return this.getBooleanAttribute('is_organization_wide');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // networks_type - computed: true, optional: false, required: false
  public get networksType() {
    return this.getStringAttribute('networks_type');
  }

  // networks_values - computed: true, optional: false, required: false
  private _networksValues = new DataMerakiSwitchOrganizationPortsProfilesItemsNetworksValuesList(this, "networks_values", false);
  public get networksValues() {
    return this._networksValues;
  }

  // port_access_policy_number - computed: true, optional: false, required: false
  public get portAccessPolicyNumber() {
    return this.getNumberAttribute('port_access_policy_number');
  }

  // port_access_policy_type - computed: true, optional: false, required: false
  public get portAccessPolicyType() {
    return this.getStringAttribute('port_access_policy_type');
  }

  // port_adaptive_policy_group_id - computed: true, optional: false, required: false
  public get portAdaptivePolicyGroupId() {
    return this.getStringAttribute('port_adaptive_policy_group_id');
  }

  // port_adaptive_policy_voice_group_id - computed: true, optional: false, required: false
  public get portAdaptivePolicyVoiceGroupId() {
    return this.getStringAttribute('port_adaptive_policy_voice_group_id');
  }

  // port_allowed_vlans - computed: true, optional: false, required: false
  public get portAllowedVlans() {
    return this.getStringAttribute('port_allowed_vlans');
  }

  // port_dai_trusted - computed: true, optional: false, required: false
  public get portDaiTrusted() {
    return this.getBooleanAttribute('port_dai_trusted');
  }

  // port_isolation_enabled - computed: true, optional: false, required: false
  public get portIsolationEnabled() {
    return this.getBooleanAttribute('port_isolation_enabled');
  }

  // port_mac_allow_list - computed: true, optional: false, required: false
  public get portMacAllowList() {
    return this.getListAttribute('port_mac_allow_list');
  }

  // port_peer_sgt_capable - computed: true, optional: false, required: false
  public get portPeerSgtCapable() {
    return this.getBooleanAttribute('port_peer_sgt_capable');
  }

  // port_poe_enabled - computed: true, optional: false, required: false
  public get portPoeEnabled() {
    return this.getBooleanAttribute('port_poe_enabled');
  }

  // port_rstp_enabled - computed: true, optional: false, required: false
  public get portRstpEnabled() {
    return this.getBooleanAttribute('port_rstp_enabled');
  }

  // port_sticky_mac_allow_list - computed: true, optional: false, required: false
  public get portStickyMacAllowList() {
    return this.getListAttribute('port_sticky_mac_allow_list');
  }

  // port_sticky_mac_allow_list_limit - computed: true, optional: false, required: false
  public get portStickyMacAllowListLimit() {
    return this.getNumberAttribute('port_sticky_mac_allow_list_limit');
  }

  // port_storm_control_enabled - computed: true, optional: false, required: false
  public get portStormControlEnabled() {
    return this.getBooleanAttribute('port_storm_control_enabled');
  }

  // port_stp_guard - computed: true, optional: false, required: false
  public get portStpGuard() {
    return this.getStringAttribute('port_stp_guard');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // port_udld - computed: true, optional: false, required: false
  public get portUdld() {
    return this.getStringAttribute('port_udld');
  }

  // port_vlan - computed: true, optional: false, required: false
  public get portVlan() {
    return this.getNumberAttribute('port_vlan');
  }

  // port_voice_vlan - computed: true, optional: false, required: false
  public get portVoiceVlan() {
    return this.getNumberAttribute('port_voice_vlan');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataMerakiSwitchOrganizationPortsProfilesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchOrganizationPortsProfilesItemsOutputReference {
    return new DataMerakiSwitchOrganizationPortsProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_organization_ports_profiles meraki_switch_organization_ports_profiles}
*/
export class DataMerakiSwitchOrganizationPortsProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_organization_ports_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchOrganizationPortsProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchOrganizationPortsProfiles to import
  * @param importFromId The id of the existing DataMerakiSwitchOrganizationPortsProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_organization_ports_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchOrganizationPortsProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_organization_ports_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_organization_ports_profiles meraki_switch_organization_ports_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchOrganizationPortsProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchOrganizationPortsProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_organization_ports_profiles',
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
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiSwitchOrganizationPortsProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
