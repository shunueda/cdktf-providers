// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_organization_ports_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchOrganizationPortsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_organization_ports_profile#id DataMerakiSwitchOrganizationPortsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_organization_ports_profile#name DataMerakiSwitchOrganizationPortsProfile#name}
  */
  readonly name?: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_organization_ports_profile#organization_id DataMerakiSwitchOrganizationPortsProfile#organization_id}
  */
  readonly organizationId: string;
}
export interface DataMerakiSwitchOrganizationPortsProfileNetworksValues {
}

export function dataMerakiSwitchOrganizationPortsProfileNetworksValuesToTerraform(struct?: DataMerakiSwitchOrganizationPortsProfileNetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchOrganizationPortsProfileNetworksValuesToHclTerraform(struct?: DataMerakiSwitchOrganizationPortsProfileNetworksValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchOrganizationPortsProfileNetworksValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchOrganizationPortsProfileNetworksValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchOrganizationPortsProfileNetworksValues | undefined) {
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

export class DataMerakiSwitchOrganizationPortsProfileNetworksValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchOrganizationPortsProfileNetworksValuesOutputReference {
    return new DataMerakiSwitchOrganizationPortsProfileNetworksValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_organization_ports_profile meraki_switch_organization_ports_profile}
*/
export class DataMerakiSwitchOrganizationPortsProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_organization_ports_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchOrganizationPortsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchOrganizationPortsProfile to import
  * @param importFromId The id of the existing DataMerakiSwitchOrganizationPortsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_organization_ports_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchOrganizationPortsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_organization_ports_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/switch_organization_ports_profile meraki_switch_organization_ports_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchOrganizationPortsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchOrganizationPortsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_organization_ports_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
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
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_organization_wide - computed: true, optional: false, required: false
  public get isOrganizationWide() {
    return this.getBooleanAttribute('is_organization_wide');
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

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // networks_type - computed: true, optional: false, required: false
  public get networksType() {
    return this.getStringAttribute('networks_type');
  }

  // networks_values - computed: true, optional: false, required: false
  private _networksValues = new DataMerakiSwitchOrganizationPortsProfileNetworksValuesList(this, "networks_values", false);
  public get networksValues() {
    return this._networksValues;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
