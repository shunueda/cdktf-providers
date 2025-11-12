// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchOrganizationPortsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text describing the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#description SwitchOrganizationPortsProfile#description}
  */
  readonly description?: string;
  /**
  * The scope of the profile whether it is organization level or network level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#is_organization_wide SwitchOrganizationPortsProfile#is_organization_wide}
  */
  readonly isOrganizationWide?: boolean | cdktf.IResolvable;
  /**
  * The name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#name SwitchOrganizationPortsProfile#name}
  */
  readonly name: string;
  /**
  * The network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#network_id SwitchOrganizationPortsProfile#network_id}
  */
  readonly networkId?: string;
  /**
  * Flag to identify if the networks networks are excluded or included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#networks_type SwitchOrganizationPortsProfile#networks_type}
  */
  readonly networksType?: string;
  /**
  * The network object containing name and id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#networks_values SwitchOrganizationPortsProfile#networks_values}
  */
  readonly networksValues?: SwitchOrganizationPortsProfileNetworksValues[] | cdktf.IResolvable;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#organization_id SwitchOrganizationPortsProfile#organization_id}
  */
  readonly organizationId: string;
  /**
  * The number of a custom access policy to configure on the port profile. Only applicable when `accessPolicyType` is `Custom access policy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_access_policy_number SwitchOrganizationPortsProfile#port_access_policy_number}
  */
  readonly portAccessPolicyNumber?: number;
  /**
  * The type of the access policy of the port profile. Only applicable to access ports.
  *   - Choices: `Custom access policy`, `MAC allow list`, `Open`, `Sticky MAC allow list`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_access_policy_type SwitchOrganizationPortsProfile#port_access_policy_type}
  */
  readonly portAccessPolicyType?: string;
  /**
  * The adaptive policy group ID that will be used to tag traffic through this port profile. This ID must pre-exist during the configuration, else needs to be created using adaptivePolicy/groups API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_adaptive_policy_group_id SwitchOrganizationPortsProfile#port_adaptive_policy_group_id}
  */
  readonly portAdaptivePolicyGroupId?: string;
  /**
  * The VLANs allowed on the port profile. Only applicable to trunk ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_allowed_vlans SwitchOrganizationPortsProfile#port_allowed_vlans}
  */
  readonly portAllowedVlans?: string;
  /**
  * If true, ARP packets for this port will be considered trusted, and Dynamic ARP Inspection will allow the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_dai_trusted SwitchOrganizationPortsProfile#port_dai_trusted}
  */
  readonly portDaiTrusted?: boolean | cdktf.IResolvable;
  /**
  * The isolation status of the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_isolation_enabled SwitchOrganizationPortsProfile#port_isolation_enabled}
  */
  readonly portIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Only devices with MAC addresses specified in this list will have access to this port. Up to 20 MAC addresses can be defined. Only applicable when `accessPolicyType` is `MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_mac_allow_list SwitchOrganizationPortsProfile#port_mac_allow_list}
  */
  readonly portMacAllowList?: string[];
  /**
  * If true, Peer SGT is enabled for traffic through this port profile. Applicable to trunk ports only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_peer_sgt_capable SwitchOrganizationPortsProfile#port_peer_sgt_capable}
  */
  readonly portPeerSgtCapable?: boolean | cdktf.IResolvable;
  /**
  * The PoE status of the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_poe_enabled SwitchOrganizationPortsProfile#port_poe_enabled}
  */
  readonly portPoeEnabled?: boolean | cdktf.IResolvable;
  /**
  * The rapid spanning tree protocol status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_rstp_enabled SwitchOrganizationPortsProfile#port_rstp_enabled}
  */
  readonly portRstpEnabled?: boolean | cdktf.IResolvable;
  /**
  * The initial list of MAC addresses for sticky Mac allow list. Only applicable when `accessPolicyType` is `Sticky MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_sticky_mac_allow_list SwitchOrganizationPortsProfile#port_sticky_mac_allow_list}
  */
  readonly portStickyMacAllowList?: string[];
  /**
  * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when `accessPolicyType` is `Sticky MAC allow list`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_sticky_mac_allow_list_limit SwitchOrganizationPortsProfile#port_sticky_mac_allow_list_limit}
  */
  readonly portStickyMacAllowListLimit?: number;
  /**
  * The storm control status of the port profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_storm_control_enabled SwitchOrganizationPortsProfile#port_storm_control_enabled}
  */
  readonly portStormControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The state of the STP guard.
  *   - Choices: `bpdu guard`, `disabled`, `loop guard`, `root guard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_stp_guard SwitchOrganizationPortsProfile#port_stp_guard}
  */
  readonly portStpGuard?: string;
  /**
  * The type of the port profile.
  *   - Choices: `access`, `stack`, `trunk`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_type SwitchOrganizationPortsProfile#port_type}
  */
  readonly portType: string;
  /**
  * The action to take when Unidirectional Link is detected. LinkDefault configuration is Alert only.
  *   - Choices: `Alert only`, `Enforce`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_udld SwitchOrganizationPortsProfile#port_udld}
  */
  readonly portUdld?: string;
  /**
  * The VLAN of the port profile. A null value will clear the value set for trunk ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_vlan SwitchOrganizationPortsProfile#port_vlan}
  */
  readonly portVlan?: number;
  /**
  * The voice VLAN of the port profile. Only applicable to access ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#port_voice_vlan SwitchOrganizationPortsProfile#port_voice_vlan}
  */
  readonly portVoiceVlan?: number;
  /**
  * Space-seperated list of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#tags SwitchOrganizationPortsProfile#tags}
  */
  readonly tags?: string[];
}
export interface SwitchOrganizationPortsProfileNetworksValues {
  /**
  * The network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#id SwitchOrganizationPortsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#name SwitchOrganizationPortsProfile#name}
  */
  readonly name?: string;
}

export function switchOrganizationPortsProfileNetworksValuesToTerraform(struct?: SwitchOrganizationPortsProfileNetworksValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchOrganizationPortsProfileNetworksValuesToHclTerraform(struct?: SwitchOrganizationPortsProfileNetworksValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchOrganizationPortsProfileNetworksValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SwitchOrganizationPortsProfileNetworksValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchOrganizationPortsProfileNetworksValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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
}

export class SwitchOrganizationPortsProfileNetworksValuesList extends cdktf.ComplexList {
  public internalValue? : SwitchOrganizationPortsProfileNetworksValues[] | cdktf.IResolvable

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
  public get(index: number): SwitchOrganizationPortsProfileNetworksValuesOutputReference {
    return new SwitchOrganizationPortsProfileNetworksValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile meraki_switch_organization_ports_profile}
*/
export class SwitchOrganizationPortsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_organization_ports_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchOrganizationPortsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchOrganizationPortsProfile to import
  * @param importFromId The id of the existing SwitchOrganizationPortsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchOrganizationPortsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_organization_ports_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_organization_ports_profile meraki_switch_organization_ports_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchOrganizationPortsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchOrganizationPortsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_organization_ports_profile',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._isOrganizationWide = config.isOrganizationWide;
    this._name = config.name;
    this._networkId = config.networkId;
    this._networksType = config.networksType;
    this._networksValues.internalValue = config.networksValues;
    this._organizationId = config.organizationId;
    this._portAccessPolicyNumber = config.portAccessPolicyNumber;
    this._portAccessPolicyType = config.portAccessPolicyType;
    this._portAdaptivePolicyGroupId = config.portAdaptivePolicyGroupId;
    this._portAllowedVlans = config.portAllowedVlans;
    this._portDaiTrusted = config.portDaiTrusted;
    this._portIsolationEnabled = config.portIsolationEnabled;
    this._portMacAllowList = config.portMacAllowList;
    this._portPeerSgtCapable = config.portPeerSgtCapable;
    this._portPoeEnabled = config.portPoeEnabled;
    this._portRstpEnabled = config.portRstpEnabled;
    this._portStickyMacAllowList = config.portStickyMacAllowList;
    this._portStickyMacAllowListLimit = config.portStickyMacAllowListLimit;
    this._portStormControlEnabled = config.portStormControlEnabled;
    this._portStpGuard = config.portStpGuard;
    this._portType = config.portType;
    this._portUdld = config.portUdld;
    this._portVlan = config.portVlan;
    this._portVoiceVlan = config.portVoiceVlan;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_organization_wide - computed: false, optional: true, required: false
  private _isOrganizationWide?: boolean | cdktf.IResolvable; 
  public get isOrganizationWide() {
    return this.getBooleanAttribute('is_organization_wide');
  }
  public set isOrganizationWide(value: boolean | cdktf.IResolvable) {
    this._isOrganizationWide = value;
  }
  public resetIsOrganizationWide() {
    this._isOrganizationWide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrganizationWideInput() {
    return this._isOrganizationWide;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // networks_type - computed: false, optional: true, required: false
  private _networksType?: string; 
  public get networksType() {
    return this.getStringAttribute('networks_type');
  }
  public set networksType(value: string) {
    this._networksType = value;
  }
  public resetNetworksType() {
    this._networksType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksTypeInput() {
    return this._networksType;
  }

  // networks_values - computed: false, optional: true, required: false
  private _networksValues = new SwitchOrganizationPortsProfileNetworksValuesList(this, "networks_values", false);
  public get networksValues() {
    return this._networksValues;
  }
  public putNetworksValues(value: SwitchOrganizationPortsProfileNetworksValues[] | cdktf.IResolvable) {
    this._networksValues.internalValue = value;
  }
  public resetNetworksValues() {
    this._networksValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksValuesInput() {
    return this._networksValues.internalValue;
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

  // port_access_policy_number - computed: false, optional: true, required: false
  private _portAccessPolicyNumber?: number; 
  public get portAccessPolicyNumber() {
    return this.getNumberAttribute('port_access_policy_number');
  }
  public set portAccessPolicyNumber(value: number) {
    this._portAccessPolicyNumber = value;
  }
  public resetPortAccessPolicyNumber() {
    this._portAccessPolicyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAccessPolicyNumberInput() {
    return this._portAccessPolicyNumber;
  }

  // port_access_policy_type - computed: false, optional: true, required: false
  private _portAccessPolicyType?: string; 
  public get portAccessPolicyType() {
    return this.getStringAttribute('port_access_policy_type');
  }
  public set portAccessPolicyType(value: string) {
    this._portAccessPolicyType = value;
  }
  public resetPortAccessPolicyType() {
    this._portAccessPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAccessPolicyTypeInput() {
    return this._portAccessPolicyType;
  }

  // port_adaptive_policy_group_id - computed: false, optional: true, required: false
  private _portAdaptivePolicyGroupId?: string; 
  public get portAdaptivePolicyGroupId() {
    return this.getStringAttribute('port_adaptive_policy_group_id');
  }
  public set portAdaptivePolicyGroupId(value: string) {
    this._portAdaptivePolicyGroupId = value;
  }
  public resetPortAdaptivePolicyGroupId() {
    this._portAdaptivePolicyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAdaptivePolicyGroupIdInput() {
    return this._portAdaptivePolicyGroupId;
  }

  // port_allowed_vlans - computed: false, optional: true, required: false
  private _portAllowedVlans?: string; 
  public get portAllowedVlans() {
    return this.getStringAttribute('port_allowed_vlans');
  }
  public set portAllowedVlans(value: string) {
    this._portAllowedVlans = value;
  }
  public resetPortAllowedVlans() {
    this._portAllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAllowedVlansInput() {
    return this._portAllowedVlans;
  }

  // port_dai_trusted - computed: false, optional: true, required: false
  private _portDaiTrusted?: boolean | cdktf.IResolvable; 
  public get portDaiTrusted() {
    return this.getBooleanAttribute('port_dai_trusted');
  }
  public set portDaiTrusted(value: boolean | cdktf.IResolvable) {
    this._portDaiTrusted = value;
  }
  public resetPortDaiTrusted() {
    this._portDaiTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDaiTrustedInput() {
    return this._portDaiTrusted;
  }

  // port_isolation_enabled - computed: false, optional: true, required: false
  private _portIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get portIsolationEnabled() {
    return this.getBooleanAttribute('port_isolation_enabled');
  }
  public set portIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._portIsolationEnabled = value;
  }
  public resetPortIsolationEnabled() {
    this._portIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIsolationEnabledInput() {
    return this._portIsolationEnabled;
  }

  // port_mac_allow_list - computed: false, optional: true, required: false
  private _portMacAllowList?: string[]; 
  public get portMacAllowList() {
    return this.getListAttribute('port_mac_allow_list');
  }
  public set portMacAllowList(value: string[]) {
    this._portMacAllowList = value;
  }
  public resetPortMacAllowList() {
    this._portMacAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMacAllowListInput() {
    return this._portMacAllowList;
  }

  // port_peer_sgt_capable - computed: false, optional: true, required: false
  private _portPeerSgtCapable?: boolean | cdktf.IResolvable; 
  public get portPeerSgtCapable() {
    return this.getBooleanAttribute('port_peer_sgt_capable');
  }
  public set portPeerSgtCapable(value: boolean | cdktf.IResolvable) {
    this._portPeerSgtCapable = value;
  }
  public resetPortPeerSgtCapable() {
    this._portPeerSgtCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPeerSgtCapableInput() {
    return this._portPeerSgtCapable;
  }

  // port_poe_enabled - computed: false, optional: true, required: false
  private _portPoeEnabled?: boolean | cdktf.IResolvable; 
  public get portPoeEnabled() {
    return this.getBooleanAttribute('port_poe_enabled');
  }
  public set portPoeEnabled(value: boolean | cdktf.IResolvable) {
    this._portPoeEnabled = value;
  }
  public resetPortPoeEnabled() {
    this._portPoeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPoeEnabledInput() {
    return this._portPoeEnabled;
  }

  // port_rstp_enabled - computed: false, optional: true, required: false
  private _portRstpEnabled?: boolean | cdktf.IResolvable; 
  public get portRstpEnabled() {
    return this.getBooleanAttribute('port_rstp_enabled');
  }
  public set portRstpEnabled(value: boolean | cdktf.IResolvable) {
    this._portRstpEnabled = value;
  }
  public resetPortRstpEnabled() {
    this._portRstpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRstpEnabledInput() {
    return this._portRstpEnabled;
  }

  // port_sticky_mac_allow_list - computed: false, optional: true, required: false
  private _portStickyMacAllowList?: string[]; 
  public get portStickyMacAllowList() {
    return this.getListAttribute('port_sticky_mac_allow_list');
  }
  public set portStickyMacAllowList(value: string[]) {
    this._portStickyMacAllowList = value;
  }
  public resetPortStickyMacAllowList() {
    this._portStickyMacAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStickyMacAllowListInput() {
    return this._portStickyMacAllowList;
  }

  // port_sticky_mac_allow_list_limit - computed: false, optional: true, required: false
  private _portStickyMacAllowListLimit?: number; 
  public get portStickyMacAllowListLimit() {
    return this.getNumberAttribute('port_sticky_mac_allow_list_limit');
  }
  public set portStickyMacAllowListLimit(value: number) {
    this._portStickyMacAllowListLimit = value;
  }
  public resetPortStickyMacAllowListLimit() {
    this._portStickyMacAllowListLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStickyMacAllowListLimitInput() {
    return this._portStickyMacAllowListLimit;
  }

  // port_storm_control_enabled - computed: false, optional: true, required: false
  private _portStormControlEnabled?: boolean | cdktf.IResolvable; 
  public get portStormControlEnabled() {
    return this.getBooleanAttribute('port_storm_control_enabled');
  }
  public set portStormControlEnabled(value: boolean | cdktf.IResolvable) {
    this._portStormControlEnabled = value;
  }
  public resetPortStormControlEnabled() {
    this._portStormControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStormControlEnabledInput() {
    return this._portStormControlEnabled;
  }

  // port_stp_guard - computed: false, optional: true, required: false
  private _portStpGuard?: string; 
  public get portStpGuard() {
    return this.getStringAttribute('port_stp_guard');
  }
  public set portStpGuard(value: string) {
    this._portStpGuard = value;
  }
  public resetPortStpGuard() {
    this._portStpGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStpGuardInput() {
    return this._portStpGuard;
  }

  // port_type - computed: false, optional: false, required: true
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // port_udld - computed: false, optional: true, required: false
  private _portUdld?: string; 
  public get portUdld() {
    return this.getStringAttribute('port_udld');
  }
  public set portUdld(value: string) {
    this._portUdld = value;
  }
  public resetPortUdld() {
    this._portUdld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portUdldInput() {
    return this._portUdld;
  }

  // port_vlan - computed: false, optional: true, required: false
  private _portVlan?: number; 
  public get portVlan() {
    return this.getNumberAttribute('port_vlan');
  }
  public set portVlan(value: number) {
    this._portVlan = value;
  }
  public resetPortVlan() {
    this._portVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portVlanInput() {
    return this._portVlan;
  }

  // port_voice_vlan - computed: false, optional: true, required: false
  private _portVoiceVlan?: number; 
  public get portVoiceVlan() {
    return this.getNumberAttribute('port_voice_vlan');
  }
  public set portVoiceVlan(value: number) {
    this._portVoiceVlan = value;
  }
  public resetPortVoiceVlan() {
    this._portVoiceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portVoiceVlanInput() {
    return this._portVoiceVlan;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      is_organization_wide: cdktf.booleanToTerraform(this._isOrganizationWide),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      networks_type: cdktf.stringToTerraform(this._networksType),
      networks_values: cdktf.listMapper(switchOrganizationPortsProfileNetworksValuesToTerraform, false)(this._networksValues.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      port_access_policy_number: cdktf.numberToTerraform(this._portAccessPolicyNumber),
      port_access_policy_type: cdktf.stringToTerraform(this._portAccessPolicyType),
      port_adaptive_policy_group_id: cdktf.stringToTerraform(this._portAdaptivePolicyGroupId),
      port_allowed_vlans: cdktf.stringToTerraform(this._portAllowedVlans),
      port_dai_trusted: cdktf.booleanToTerraform(this._portDaiTrusted),
      port_isolation_enabled: cdktf.booleanToTerraform(this._portIsolationEnabled),
      port_mac_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portMacAllowList),
      port_peer_sgt_capable: cdktf.booleanToTerraform(this._portPeerSgtCapable),
      port_poe_enabled: cdktf.booleanToTerraform(this._portPoeEnabled),
      port_rstp_enabled: cdktf.booleanToTerraform(this._portRstpEnabled),
      port_sticky_mac_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portStickyMacAllowList),
      port_sticky_mac_allow_list_limit: cdktf.numberToTerraform(this._portStickyMacAllowListLimit),
      port_storm_control_enabled: cdktf.booleanToTerraform(this._portStormControlEnabled),
      port_stp_guard: cdktf.stringToTerraform(this._portStpGuard),
      port_type: cdktf.stringToTerraform(this._portType),
      port_udld: cdktf.stringToTerraform(this._portUdld),
      port_vlan: cdktf.numberToTerraform(this._portVlan),
      port_voice_vlan: cdktf.numberToTerraform(this._portVoiceVlan),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_organization_wide: {
        value: cdktf.booleanToHclTerraform(this._isOrganizationWide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      networks_type: {
        value: cdktf.stringToHclTerraform(this._networksType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks_values: {
        value: cdktf.listMapperHcl(switchOrganizationPortsProfileNetworksValuesToHclTerraform, false)(this._networksValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchOrganizationPortsProfileNetworksValuesList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_access_policy_number: {
        value: cdktf.numberToHclTerraform(this._portAccessPolicyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_access_policy_type: {
        value: cdktf.stringToHclTerraform(this._portAccessPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_adaptive_policy_group_id: {
        value: cdktf.stringToHclTerraform(this._portAdaptivePolicyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._portAllowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_dai_trusted: {
        value: cdktf.booleanToHclTerraform(this._portDaiTrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._portIsolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_mac_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portMacAllowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      port_peer_sgt_capable: {
        value: cdktf.booleanToHclTerraform(this._portPeerSgtCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_poe_enabled: {
        value: cdktf.booleanToHclTerraform(this._portPoeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_rstp_enabled: {
        value: cdktf.booleanToHclTerraform(this._portRstpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_sticky_mac_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portStickyMacAllowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      port_sticky_mac_allow_list_limit: {
        value: cdktf.numberToHclTerraform(this._portStickyMacAllowListLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_storm_control_enabled: {
        value: cdktf.booleanToHclTerraform(this._portStormControlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_stp_guard: {
        value: cdktf.stringToHclTerraform(this._portStpGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_type: {
        value: cdktf.stringToHclTerraform(this._portType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_udld: {
        value: cdktf.stringToHclTerraform(this._portUdld),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_vlan: {
        value: cdktf.numberToHclTerraform(this._portVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_voice_vlan: {
        value: cdktf.numberToHclTerraform(this._portVoiceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
