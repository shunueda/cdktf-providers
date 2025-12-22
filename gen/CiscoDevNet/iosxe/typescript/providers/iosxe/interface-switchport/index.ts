// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceSwitchportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#access_vlan InterfaceSwitchport#access_vlan}
  */
  readonly accessVlan?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#delete_mode InterfaceSwitchport#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#device InterfaceSwitchport#device}
  */
  readonly device?: string;
  /**
  * Set port host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#host InterfaceSwitchport#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * Set trunking mode to ACCESS unconditionally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#mode_access InterfaceSwitchport#mode_access}
  */
  readonly modeAccess?: boolean | cdktf.IResolvable;
  /**
  * set trunking mode to TUNNEL unconditionally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#mode_dot1q_tunnel InterfaceSwitchport#mode_dot1q_tunnel}
  */
  readonly modeDot1QTunnel?: boolean | cdktf.IResolvable;
  /**
  * Set the mode to private-vlan host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#mode_private_vlan_host InterfaceSwitchport#mode_private_vlan_host}
  */
  readonly modePrivateVlanHost?: boolean | cdktf.IResolvable;
  /**
  * Set the mode to private-vlan promiscuous
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#mode_private_vlan_promiscuous InterfaceSwitchport#mode_private_vlan_promiscuous}
  */
  readonly modePrivateVlanPromiscuous?: boolean | cdktf.IResolvable;
  /**
  * Set the mode to private-vlan trunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#mode_private_vlan_trunk InterfaceSwitchport#mode_private_vlan_trunk}
  */
  readonly modePrivateVlanTrunk?: boolean | cdktf.IResolvable;
  /**
  * Set trunking mode to TRUNK unconditionally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#mode_trunk InterfaceSwitchport#mode_trunk}
  */
  readonly modeTrunk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#name InterfaceSwitchport#name}
  */
  readonly name: string;
  /**
  * Device will not engage in negotiation protocol on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#nonegotiate InterfaceSwitchport#nonegotiate}
  */
  readonly nonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans InterfaceSwitchport#trunk_allowed_vlans}
  */
  readonly trunkAllowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans_add InterfaceSwitchport#trunk_allowed_vlans_add}
  */
  readonly trunkAllowedVlansAdd?: InterfaceSwitchportTrunkAllowedVlansAdd[] | cdktf.IResolvable;
  /**
  * all VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans_all InterfaceSwitchport#trunk_allowed_vlans_all}
  */
  readonly trunkAllowedVlansAll?: boolean | cdktf.IResolvable;
  /**
  * all VLANs except the following
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans_except InterfaceSwitchport#trunk_allowed_vlans_except}
  */
  readonly trunkAllowedVlansExcept?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans_legacy InterfaceSwitchport#trunk_allowed_vlans_legacy}
  */
  readonly trunkAllowedVlansLegacy?: string;
  /**
  * no VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans_none InterfaceSwitchport#trunk_allowed_vlans_none}
  */
  readonly trunkAllowedVlansNone?: boolean | cdktf.IResolvable;
  /**
  * no VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans_none_legacy InterfaceSwitchport#trunk_allowed_vlans_none_legacy}
  */
  readonly trunkAllowedVlansNoneLegacy?: boolean | cdktf.IResolvable;
  /**
  * VLAN IDs of disallowed VLANs when this port is in trunking mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_allowed_vlans_remove InterfaceSwitchport#trunk_allowed_vlans_remove}
  */
  readonly trunkAllowedVlansRemove?: string;
  /**
  * 
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_native_vlan InterfaceSwitchport#trunk_native_vlan}
  */
  readonly trunkNativeVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#trunk_native_vlan_tag InterfaceSwitchport#trunk_native_vlan_tag}
  */
  readonly trunkNativeVlanTag?: boolean | cdktf.IResolvable;
  /**
  * Interface type
  *   - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`, `TwentyFiveGigE`, `FortyGigabitEthernet`, `FiftyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Port-channel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#type InterfaceSwitchport#type}
  */
  readonly type: string;
}
export interface InterfaceSwitchportTrunkAllowedVlansAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#vlans InterfaceSwitchport#vlans}
  */
  readonly vlans: string;
}

export function interfaceSwitchportTrunkAllowedVlansAddToTerraform(struct?: InterfaceSwitchportTrunkAllowedVlansAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlans: cdktf.stringToTerraform(struct!.vlans),
  }
}


export function interfaceSwitchportTrunkAllowedVlansAddToHclTerraform(struct?: InterfaceSwitchportTrunkAllowedVlansAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlans: {
      value: cdktf.stringToHclTerraform(struct!.vlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceSwitchportTrunkAllowedVlansAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceSwitchportTrunkAllowedVlansAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceSwitchportTrunkAllowedVlansAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlans = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlans = value.vlans;
    }
  }

  // vlans - computed: false, optional: false, required: true
  private _vlans?: string; 
  public get vlans() {
    return this.getStringAttribute('vlans');
  }
  public set vlans(value: string) {
    this._vlans = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }
}

export class InterfaceSwitchportTrunkAllowedVlansAddList extends cdktf.ComplexList {
  public internalValue? : InterfaceSwitchportTrunkAllowedVlansAdd[] | cdktf.IResolvable

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
  public get(index: number): InterfaceSwitchportTrunkAllowedVlansAddOutputReference {
    return new InterfaceSwitchportTrunkAllowedVlansAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport iosxe_interface_switchport}
*/
export class InterfaceSwitchport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_switchport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceSwitchport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceSwitchport to import
  * @param importFromId The id of the existing InterfaceSwitchport that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceSwitchport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_switchport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_switchport iosxe_interface_switchport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceSwitchportConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceSwitchportConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_switchport',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessVlan = config.accessVlan;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._host = config.host;
    this._modeAccess = config.modeAccess;
    this._modeDot1QTunnel = config.modeDot1QTunnel;
    this._modePrivateVlanHost = config.modePrivateVlanHost;
    this._modePrivateVlanPromiscuous = config.modePrivateVlanPromiscuous;
    this._modePrivateVlanTrunk = config.modePrivateVlanTrunk;
    this._modeTrunk = config.modeTrunk;
    this._name = config.name;
    this._nonegotiate = config.nonegotiate;
    this._trunkAllowedVlans = config.trunkAllowedVlans;
    this._trunkAllowedVlansAdd.internalValue = config.trunkAllowedVlansAdd;
    this._trunkAllowedVlansAll = config.trunkAllowedVlansAll;
    this._trunkAllowedVlansExcept = config.trunkAllowedVlansExcept;
    this._trunkAllowedVlansLegacy = config.trunkAllowedVlansLegacy;
    this._trunkAllowedVlansNone = config.trunkAllowedVlansNone;
    this._trunkAllowedVlansNoneLegacy = config.trunkAllowedVlansNoneLegacy;
    this._trunkAllowedVlansRemove = config.trunkAllowedVlansRemove;
    this._trunkNativeVlan = config.trunkNativeVlan;
    this._trunkNativeVlanTag = config.trunkNativeVlanTag;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan - computed: false, optional: true, required: false
  private _accessVlan?: string; 
  public get accessVlan() {
    return this.getStringAttribute('access_vlan');
  }
  public set accessVlan(value: string) {
    this._accessVlan = value;
  }
  public resetAccessVlan() {
    this._accessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanInput() {
    return this._accessVlan;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode_access - computed: false, optional: true, required: false
  private _modeAccess?: boolean | cdktf.IResolvable; 
  public get modeAccess() {
    return this.getBooleanAttribute('mode_access');
  }
  public set modeAccess(value: boolean | cdktf.IResolvable) {
    this._modeAccess = value;
  }
  public resetModeAccess() {
    this._modeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeAccessInput() {
    return this._modeAccess;
  }

  // mode_dot1q_tunnel - computed: false, optional: true, required: false
  private _modeDot1QTunnel?: boolean | cdktf.IResolvable; 
  public get modeDot1QTunnel() {
    return this.getBooleanAttribute('mode_dot1q_tunnel');
  }
  public set modeDot1QTunnel(value: boolean | cdktf.IResolvable) {
    this._modeDot1QTunnel = value;
  }
  public resetModeDot1QTunnel() {
    this._modeDot1QTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeDot1QTunnelInput() {
    return this._modeDot1QTunnel;
  }

  // mode_private_vlan_host - computed: false, optional: true, required: false
  private _modePrivateVlanHost?: boolean | cdktf.IResolvable; 
  public get modePrivateVlanHost() {
    return this.getBooleanAttribute('mode_private_vlan_host');
  }
  public set modePrivateVlanHost(value: boolean | cdktf.IResolvable) {
    this._modePrivateVlanHost = value;
  }
  public resetModePrivateVlanHost() {
    this._modePrivateVlanHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modePrivateVlanHostInput() {
    return this._modePrivateVlanHost;
  }

  // mode_private_vlan_promiscuous - computed: false, optional: true, required: false
  private _modePrivateVlanPromiscuous?: boolean | cdktf.IResolvable; 
  public get modePrivateVlanPromiscuous() {
    return this.getBooleanAttribute('mode_private_vlan_promiscuous');
  }
  public set modePrivateVlanPromiscuous(value: boolean | cdktf.IResolvable) {
    this._modePrivateVlanPromiscuous = value;
  }
  public resetModePrivateVlanPromiscuous() {
    this._modePrivateVlanPromiscuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modePrivateVlanPromiscuousInput() {
    return this._modePrivateVlanPromiscuous;
  }

  // mode_private_vlan_trunk - computed: false, optional: true, required: false
  private _modePrivateVlanTrunk?: boolean | cdktf.IResolvable; 
  public get modePrivateVlanTrunk() {
    return this.getBooleanAttribute('mode_private_vlan_trunk');
  }
  public set modePrivateVlanTrunk(value: boolean | cdktf.IResolvable) {
    this._modePrivateVlanTrunk = value;
  }
  public resetModePrivateVlanTrunk() {
    this._modePrivateVlanTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modePrivateVlanTrunkInput() {
    return this._modePrivateVlanTrunk;
  }

  // mode_trunk - computed: false, optional: true, required: false
  private _modeTrunk?: boolean | cdktf.IResolvable; 
  public get modeTrunk() {
    return this.getBooleanAttribute('mode_trunk');
  }
  public set modeTrunk(value: boolean | cdktf.IResolvable) {
    this._modeTrunk = value;
  }
  public resetModeTrunk() {
    this._modeTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeTrunkInput() {
    return this._modeTrunk;
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

  // nonegotiate - computed: false, optional: true, required: false
  private _nonegotiate?: boolean | cdktf.IResolvable; 
  public get nonegotiate() {
    return this.getBooleanAttribute('nonegotiate');
  }
  public set nonegotiate(value: boolean | cdktf.IResolvable) {
    this._nonegotiate = value;
  }
  public resetNonegotiate() {
    this._nonegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonegotiateInput() {
    return this._nonegotiate;
  }

  // trunk_allowed_vlans - computed: false, optional: true, required: false
  private _trunkAllowedVlans?: string; 
  public get trunkAllowedVlans() {
    return this.getStringAttribute('trunk_allowed_vlans');
  }
  public set trunkAllowedVlans(value: string) {
    this._trunkAllowedVlans = value;
  }
  public resetTrunkAllowedVlans() {
    this._trunkAllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansInput() {
    return this._trunkAllowedVlans;
  }

  // trunk_allowed_vlans_add - computed: false, optional: true, required: false
  private _trunkAllowedVlansAdd = new InterfaceSwitchportTrunkAllowedVlansAddList(this, "trunk_allowed_vlans_add", false);
  public get trunkAllowedVlansAdd() {
    return this._trunkAllowedVlansAdd;
  }
  public putTrunkAllowedVlansAdd(value: InterfaceSwitchportTrunkAllowedVlansAdd[] | cdktf.IResolvable) {
    this._trunkAllowedVlansAdd.internalValue = value;
  }
  public resetTrunkAllowedVlansAdd() {
    this._trunkAllowedVlansAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansAddInput() {
    return this._trunkAllowedVlansAdd.internalValue;
  }

  // trunk_allowed_vlans_all - computed: false, optional: true, required: false
  private _trunkAllowedVlansAll?: boolean | cdktf.IResolvable; 
  public get trunkAllowedVlansAll() {
    return this.getBooleanAttribute('trunk_allowed_vlans_all');
  }
  public set trunkAllowedVlansAll(value: boolean | cdktf.IResolvable) {
    this._trunkAllowedVlansAll = value;
  }
  public resetTrunkAllowedVlansAll() {
    this._trunkAllowedVlansAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansAllInput() {
    return this._trunkAllowedVlansAll;
  }

  // trunk_allowed_vlans_except - computed: false, optional: true, required: false
  private _trunkAllowedVlansExcept?: string; 
  public get trunkAllowedVlansExcept() {
    return this.getStringAttribute('trunk_allowed_vlans_except');
  }
  public set trunkAllowedVlansExcept(value: string) {
    this._trunkAllowedVlansExcept = value;
  }
  public resetTrunkAllowedVlansExcept() {
    this._trunkAllowedVlansExcept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansExceptInput() {
    return this._trunkAllowedVlansExcept;
  }

  // trunk_allowed_vlans_legacy - computed: false, optional: true, required: false
  private _trunkAllowedVlansLegacy?: string; 
  public get trunkAllowedVlansLegacy() {
    return this.getStringAttribute('trunk_allowed_vlans_legacy');
  }
  public set trunkAllowedVlansLegacy(value: string) {
    this._trunkAllowedVlansLegacy = value;
  }
  public resetTrunkAllowedVlansLegacy() {
    this._trunkAllowedVlansLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansLegacyInput() {
    return this._trunkAllowedVlansLegacy;
  }

  // trunk_allowed_vlans_none - computed: false, optional: true, required: false
  private _trunkAllowedVlansNone?: boolean | cdktf.IResolvable; 
  public get trunkAllowedVlansNone() {
    return this.getBooleanAttribute('trunk_allowed_vlans_none');
  }
  public set trunkAllowedVlansNone(value: boolean | cdktf.IResolvable) {
    this._trunkAllowedVlansNone = value;
  }
  public resetTrunkAllowedVlansNone() {
    this._trunkAllowedVlansNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansNoneInput() {
    return this._trunkAllowedVlansNone;
  }

  // trunk_allowed_vlans_none_legacy - computed: false, optional: true, required: false
  private _trunkAllowedVlansNoneLegacy?: boolean | cdktf.IResolvable; 
  public get trunkAllowedVlansNoneLegacy() {
    return this.getBooleanAttribute('trunk_allowed_vlans_none_legacy');
  }
  public set trunkAllowedVlansNoneLegacy(value: boolean | cdktf.IResolvable) {
    this._trunkAllowedVlansNoneLegacy = value;
  }
  public resetTrunkAllowedVlansNoneLegacy() {
    this._trunkAllowedVlansNoneLegacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansNoneLegacyInput() {
    return this._trunkAllowedVlansNoneLegacy;
  }

  // trunk_allowed_vlans_remove - computed: false, optional: true, required: false
  private _trunkAllowedVlansRemove?: string; 
  public get trunkAllowedVlansRemove() {
    return this.getStringAttribute('trunk_allowed_vlans_remove');
  }
  public set trunkAllowedVlansRemove(value: string) {
    this._trunkAllowedVlansRemove = value;
  }
  public resetTrunkAllowedVlansRemove() {
    this._trunkAllowedVlansRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAllowedVlansRemoveInput() {
    return this._trunkAllowedVlansRemove;
  }

  // trunk_native_vlan - computed: false, optional: true, required: false
  private _trunkNativeVlan?: number; 
  public get trunkNativeVlan() {
    return this.getNumberAttribute('trunk_native_vlan');
  }
  public set trunkNativeVlan(value: number) {
    this._trunkNativeVlan = value;
  }
  public resetTrunkNativeVlan() {
    this._trunkNativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNativeVlanInput() {
    return this._trunkNativeVlan;
  }

  // trunk_native_vlan_tag - computed: false, optional: true, required: false
  private _trunkNativeVlanTag?: boolean | cdktf.IResolvable; 
  public get trunkNativeVlanTag() {
    return this.getBooleanAttribute('trunk_native_vlan_tag');
  }
  public set trunkNativeVlanTag(value: boolean | cdktf.IResolvable) {
    this._trunkNativeVlanTag = value;
  }
  public resetTrunkNativeVlanTag() {
    this._trunkNativeVlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNativeVlanTagInput() {
    return this._trunkNativeVlanTag;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vlan: cdktf.stringToTerraform(this._accessVlan),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      host: cdktf.booleanToTerraform(this._host),
      mode_access: cdktf.booleanToTerraform(this._modeAccess),
      mode_dot1q_tunnel: cdktf.booleanToTerraform(this._modeDot1QTunnel),
      mode_private_vlan_host: cdktf.booleanToTerraform(this._modePrivateVlanHost),
      mode_private_vlan_promiscuous: cdktf.booleanToTerraform(this._modePrivateVlanPromiscuous),
      mode_private_vlan_trunk: cdktf.booleanToTerraform(this._modePrivateVlanTrunk),
      mode_trunk: cdktf.booleanToTerraform(this._modeTrunk),
      name: cdktf.stringToTerraform(this._name),
      nonegotiate: cdktf.booleanToTerraform(this._nonegotiate),
      trunk_allowed_vlans: cdktf.stringToTerraform(this._trunkAllowedVlans),
      trunk_allowed_vlans_add: cdktf.listMapper(interfaceSwitchportTrunkAllowedVlansAddToTerraform, false)(this._trunkAllowedVlansAdd.internalValue),
      trunk_allowed_vlans_all: cdktf.booleanToTerraform(this._trunkAllowedVlansAll),
      trunk_allowed_vlans_except: cdktf.stringToTerraform(this._trunkAllowedVlansExcept),
      trunk_allowed_vlans_legacy: cdktf.stringToTerraform(this._trunkAllowedVlansLegacy),
      trunk_allowed_vlans_none: cdktf.booleanToTerraform(this._trunkAllowedVlansNone),
      trunk_allowed_vlans_none_legacy: cdktf.booleanToTerraform(this._trunkAllowedVlansNoneLegacy),
      trunk_allowed_vlans_remove: cdktf.stringToTerraform(this._trunkAllowedVlansRemove),
      trunk_native_vlan: cdktf.numberToTerraform(this._trunkNativeVlan),
      trunk_native_vlan_tag: cdktf.booleanToTerraform(this._trunkNativeVlanTag),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlan: {
        value: cdktf.stringToHclTerraform(this._accessVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.booleanToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_access: {
        value: cdktf.booleanToHclTerraform(this._modeAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_dot1q_tunnel: {
        value: cdktf.booleanToHclTerraform(this._modeDot1QTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_private_vlan_host: {
        value: cdktf.booleanToHclTerraform(this._modePrivateVlanHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_private_vlan_promiscuous: {
        value: cdktf.booleanToHclTerraform(this._modePrivateVlanPromiscuous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_private_vlan_trunk: {
        value: cdktf.booleanToHclTerraform(this._modePrivateVlanTrunk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_trunk: {
        value: cdktf.booleanToHclTerraform(this._modeTrunk),
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
      nonegotiate: {
        value: cdktf.booleanToHclTerraform(this._nonegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trunk_allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._trunkAllowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_allowed_vlans_add: {
        value: cdktf.listMapperHcl(interfaceSwitchportTrunkAllowedVlansAddToHclTerraform, false)(this._trunkAllowedVlansAdd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceSwitchportTrunkAllowedVlansAddList",
      },
      trunk_allowed_vlans_all: {
        value: cdktf.booleanToHclTerraform(this._trunkAllowedVlansAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trunk_allowed_vlans_except: {
        value: cdktf.stringToHclTerraform(this._trunkAllowedVlansExcept),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_allowed_vlans_legacy: {
        value: cdktf.stringToHclTerraform(this._trunkAllowedVlansLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_allowed_vlans_none: {
        value: cdktf.booleanToHclTerraform(this._trunkAllowedVlansNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trunk_allowed_vlans_none_legacy: {
        value: cdktf.booleanToHclTerraform(this._trunkAllowedVlansNoneLegacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trunk_allowed_vlans_remove: {
        value: cdktf.stringToHclTerraform(this._trunkAllowedVlansRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_native_vlan: {
        value: cdktf.numberToHclTerraform(this._trunkNativeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk_native_vlan_tag: {
        value: cdktf.booleanToHclTerraform(this._trunkNativeVlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
