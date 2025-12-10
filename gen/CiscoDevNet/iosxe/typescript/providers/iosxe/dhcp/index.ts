// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  *   - Choices: `cisco`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#compatibility_suboption_link_selection Dhcp#compatibility_suboption_link_selection}
  */
  readonly compatibilitySuboptionLinkSelection?: string;
  /**
  * 
  *   - Choices: `cisco`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#compatibility_suboption_server_override Dhcp#compatibility_suboption_server_override}
  */
  readonly compatibilitySuboptionServerOverride?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#delete_mode Dhcp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#device Dhcp#device}
  */
  readonly device?: string;
  /**
  * Default option, no vpn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#relay_information_option_default Dhcp#relay_information_option_default}
  */
  readonly relayInformationOptionDefault?: boolean | cdktf.IResolvable;
  /**
  * Insert VPN sub-options and change the giaddr to the outgoing interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#relay_information_option_vpn Dhcp#relay_information_option_vpn}
  */
  readonly relayInformationOptionVpn?: boolean | cdktf.IResolvable;
  /**
  * Received DHCP packets may contain relay info option with zero giaddr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#relay_information_trust_all Dhcp#relay_information_trust_all}
  */
  readonly relayInformationTrustAll?: boolean | cdktf.IResolvable;
  /**
  * DHCP Snooping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#snooping Dhcp#snooping}
  */
  readonly snooping?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#snooping_information_option Dhcp#snooping_information_option}
  */
  readonly snoopingInformationOption?: boolean | cdktf.IResolvable;
  /**
  * DHCP Snooping information option allow-untrusted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#snooping_information_option_allow_untrusted Dhcp#snooping_information_option_allow_untrusted}
  */
  readonly snoopingInformationOptionAllowUntrusted?: boolean | cdktf.IResolvable;
  /**
  * Use configured hostname for remote id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#snooping_information_option_format_remote_id_hostname Dhcp#snooping_information_option_format_remote_id_hostname}
  */
  readonly snoopingInformationOptionFormatRemoteIdHostname?: boolean | cdktf.IResolvable;
  /**
  * User defined string for remote id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#snooping_information_option_format_remote_id_string Dhcp#snooping_information_option_format_remote_id_string}
  */
  readonly snoopingInformationOptionFormatRemoteIdString?: string;
  /**
  * DHCP Snooping vlan list. Use this for versions `17.14` and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#snooping_vlans Dhcp#snooping_vlans}
  */
  readonly snoopingVlans?: DhcpSnoopingVlans[] | cdktf.IResolvable;
  /**
  * DHCP Snooping vlan list. Use this for versions before `17.14`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#snooping_vlans_legacy Dhcp#snooping_vlans_legacy}
  */
  readonly snoopingVlansLegacy?: DhcpSnoopingVlansLegacy[] | cdktf.IResolvable;
}
export interface DhcpSnoopingVlans {
  /**
  * 
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#vlan_id Dhcp#vlan_id}
  */
  readonly vlanId: number;
}

export function dhcpSnoopingVlansToTerraform(struct?: DhcpSnoopingVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function dhcpSnoopingVlansToHclTerraform(struct?: DhcpSnoopingVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpSnoopingVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpSnoopingVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpSnoopingVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanId = value.vlanId;
    }
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class DhcpSnoopingVlansList extends cdktf.ComplexList {
  public internalValue? : DhcpSnoopingVlans[] | cdktf.IResolvable

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
  public get(index: number): DhcpSnoopingVlansOutputReference {
    return new DhcpSnoopingVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpSnoopingVlansLegacy {
  /**
  * DHCP Snooping vlan first number or vlan range,example: 1,3-5,7,9-11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#vlan_id Dhcp#vlan_id}
  */
  readonly vlanId: string;
}

export function dhcpSnoopingVlansLegacyToTerraform(struct?: DhcpSnoopingVlansLegacy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function dhcpSnoopingVlansLegacyToHclTerraform(struct?: DhcpSnoopingVlansLegacy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpSnoopingVlansLegacyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpSnoopingVlansLegacy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpSnoopingVlansLegacy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanId = value.vlanId;
    }
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class DhcpSnoopingVlansLegacyList extends cdktf.ComplexList {
  public internalValue? : DhcpSnoopingVlansLegacy[] | cdktf.IResolvable

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
  public get(index: number): DhcpSnoopingVlansLegacyOutputReference {
    return new DhcpSnoopingVlansLegacyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp iosxe_dhcp}
*/
export class Dhcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dhcp to import
  * @param importFromId The id of the existing Dhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/dhcp iosxe_dhcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DhcpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compatibilitySuboptionLinkSelection = config.compatibilitySuboptionLinkSelection;
    this._compatibilitySuboptionServerOverride = config.compatibilitySuboptionServerOverride;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._relayInformationOptionDefault = config.relayInformationOptionDefault;
    this._relayInformationOptionVpn = config.relayInformationOptionVpn;
    this._relayInformationTrustAll = config.relayInformationTrustAll;
    this._snooping = config.snooping;
    this._snoopingInformationOption = config.snoopingInformationOption;
    this._snoopingInformationOptionAllowUntrusted = config.snoopingInformationOptionAllowUntrusted;
    this._snoopingInformationOptionFormatRemoteIdHostname = config.snoopingInformationOptionFormatRemoteIdHostname;
    this._snoopingInformationOptionFormatRemoteIdString = config.snoopingInformationOptionFormatRemoteIdString;
    this._snoopingVlans.internalValue = config.snoopingVlans;
    this._snoopingVlansLegacy.internalValue = config.snoopingVlansLegacy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatibility_suboption_link_selection - computed: false, optional: true, required: false
  private _compatibilitySuboptionLinkSelection?: string; 
  public get compatibilitySuboptionLinkSelection() {
    return this.getStringAttribute('compatibility_suboption_link_selection');
  }
  public set compatibilitySuboptionLinkSelection(value: string) {
    this._compatibilitySuboptionLinkSelection = value;
  }
  public resetCompatibilitySuboptionLinkSelection() {
    this._compatibilitySuboptionLinkSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilitySuboptionLinkSelectionInput() {
    return this._compatibilitySuboptionLinkSelection;
  }

  // compatibility_suboption_server_override - computed: false, optional: true, required: false
  private _compatibilitySuboptionServerOverride?: string; 
  public get compatibilitySuboptionServerOverride() {
    return this.getStringAttribute('compatibility_suboption_server_override');
  }
  public set compatibilitySuboptionServerOverride(value: string) {
    this._compatibilitySuboptionServerOverride = value;
  }
  public resetCompatibilitySuboptionServerOverride() {
    this._compatibilitySuboptionServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilitySuboptionServerOverrideInput() {
    return this._compatibilitySuboptionServerOverride;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // relay_information_option_default - computed: false, optional: true, required: false
  private _relayInformationOptionDefault?: boolean | cdktf.IResolvable; 
  public get relayInformationOptionDefault() {
    return this.getBooleanAttribute('relay_information_option_default');
  }
  public set relayInformationOptionDefault(value: boolean | cdktf.IResolvable) {
    this._relayInformationOptionDefault = value;
  }
  public resetRelayInformationOptionDefault() {
    this._relayInformationOptionDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInformationOptionDefaultInput() {
    return this._relayInformationOptionDefault;
  }

  // relay_information_option_vpn - computed: false, optional: true, required: false
  private _relayInformationOptionVpn?: boolean | cdktf.IResolvable; 
  public get relayInformationOptionVpn() {
    return this.getBooleanAttribute('relay_information_option_vpn');
  }
  public set relayInformationOptionVpn(value: boolean | cdktf.IResolvable) {
    this._relayInformationOptionVpn = value;
  }
  public resetRelayInformationOptionVpn() {
    this._relayInformationOptionVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInformationOptionVpnInput() {
    return this._relayInformationOptionVpn;
  }

  // relay_information_trust_all - computed: false, optional: true, required: false
  private _relayInformationTrustAll?: boolean | cdktf.IResolvable; 
  public get relayInformationTrustAll() {
    return this.getBooleanAttribute('relay_information_trust_all');
  }
  public set relayInformationTrustAll(value: boolean | cdktf.IResolvable) {
    this._relayInformationTrustAll = value;
  }
  public resetRelayInformationTrustAll() {
    this._relayInformationTrustAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInformationTrustAllInput() {
    return this._relayInformationTrustAll;
  }

  // snooping - computed: false, optional: true, required: false
  private _snooping?: boolean | cdktf.IResolvable; 
  public get snooping() {
    return this.getBooleanAttribute('snooping');
  }
  public set snooping(value: boolean | cdktf.IResolvable) {
    this._snooping = value;
  }
  public resetSnooping() {
    this._snooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopingInput() {
    return this._snooping;
  }

  // snooping_information_option - computed: false, optional: true, required: false
  private _snoopingInformationOption?: boolean | cdktf.IResolvable; 
  public get snoopingInformationOption() {
    return this.getBooleanAttribute('snooping_information_option');
  }
  public set snoopingInformationOption(value: boolean | cdktf.IResolvable) {
    this._snoopingInformationOption = value;
  }
  public resetSnoopingInformationOption() {
    this._snoopingInformationOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopingInformationOptionInput() {
    return this._snoopingInformationOption;
  }

  // snooping_information_option_allow_untrusted - computed: false, optional: true, required: false
  private _snoopingInformationOptionAllowUntrusted?: boolean | cdktf.IResolvable; 
  public get snoopingInformationOptionAllowUntrusted() {
    return this.getBooleanAttribute('snooping_information_option_allow_untrusted');
  }
  public set snoopingInformationOptionAllowUntrusted(value: boolean | cdktf.IResolvable) {
    this._snoopingInformationOptionAllowUntrusted = value;
  }
  public resetSnoopingInformationOptionAllowUntrusted() {
    this._snoopingInformationOptionAllowUntrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopingInformationOptionAllowUntrustedInput() {
    return this._snoopingInformationOptionAllowUntrusted;
  }

  // snooping_information_option_format_remote_id_hostname - computed: false, optional: true, required: false
  private _snoopingInformationOptionFormatRemoteIdHostname?: boolean | cdktf.IResolvable; 
  public get snoopingInformationOptionFormatRemoteIdHostname() {
    return this.getBooleanAttribute('snooping_information_option_format_remote_id_hostname');
  }
  public set snoopingInformationOptionFormatRemoteIdHostname(value: boolean | cdktf.IResolvable) {
    this._snoopingInformationOptionFormatRemoteIdHostname = value;
  }
  public resetSnoopingInformationOptionFormatRemoteIdHostname() {
    this._snoopingInformationOptionFormatRemoteIdHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopingInformationOptionFormatRemoteIdHostnameInput() {
    return this._snoopingInformationOptionFormatRemoteIdHostname;
  }

  // snooping_information_option_format_remote_id_string - computed: false, optional: true, required: false
  private _snoopingInformationOptionFormatRemoteIdString?: string; 
  public get snoopingInformationOptionFormatRemoteIdString() {
    return this.getStringAttribute('snooping_information_option_format_remote_id_string');
  }
  public set snoopingInformationOptionFormatRemoteIdString(value: string) {
    this._snoopingInformationOptionFormatRemoteIdString = value;
  }
  public resetSnoopingInformationOptionFormatRemoteIdString() {
    this._snoopingInformationOptionFormatRemoteIdString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopingInformationOptionFormatRemoteIdStringInput() {
    return this._snoopingInformationOptionFormatRemoteIdString;
  }

  // snooping_vlans - computed: false, optional: true, required: false
  private _snoopingVlans = new DhcpSnoopingVlansList(this, "snooping_vlans", false);
  public get snoopingVlans() {
    return this._snoopingVlans;
  }
  public putSnoopingVlans(value: DhcpSnoopingVlans[] | cdktf.IResolvable) {
    this._snoopingVlans.internalValue = value;
  }
  public resetSnoopingVlans() {
    this._snoopingVlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopingVlansInput() {
    return this._snoopingVlans.internalValue;
  }

  // snooping_vlans_legacy - computed: false, optional: true, required: false
  private _snoopingVlansLegacy = new DhcpSnoopingVlansLegacyList(this, "snooping_vlans_legacy", false);
  public get snoopingVlansLegacy() {
    return this._snoopingVlansLegacy;
  }
  public putSnoopingVlansLegacy(value: DhcpSnoopingVlansLegacy[] | cdktf.IResolvable) {
    this._snoopingVlansLegacy.internalValue = value;
  }
  public resetSnoopingVlansLegacy() {
    this._snoopingVlansLegacy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoopingVlansLegacyInput() {
    return this._snoopingVlansLegacy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compatibility_suboption_link_selection: cdktf.stringToTerraform(this._compatibilitySuboptionLinkSelection),
      compatibility_suboption_server_override: cdktf.stringToTerraform(this._compatibilitySuboptionServerOverride),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      relay_information_option_default: cdktf.booleanToTerraform(this._relayInformationOptionDefault),
      relay_information_option_vpn: cdktf.booleanToTerraform(this._relayInformationOptionVpn),
      relay_information_trust_all: cdktf.booleanToTerraform(this._relayInformationTrustAll),
      snooping: cdktf.booleanToTerraform(this._snooping),
      snooping_information_option: cdktf.booleanToTerraform(this._snoopingInformationOption),
      snooping_information_option_allow_untrusted: cdktf.booleanToTerraform(this._snoopingInformationOptionAllowUntrusted),
      snooping_information_option_format_remote_id_hostname: cdktf.booleanToTerraform(this._snoopingInformationOptionFormatRemoteIdHostname),
      snooping_information_option_format_remote_id_string: cdktf.stringToTerraform(this._snoopingInformationOptionFormatRemoteIdString),
      snooping_vlans: cdktf.listMapper(dhcpSnoopingVlansToTerraform, false)(this._snoopingVlans.internalValue),
      snooping_vlans_legacy: cdktf.listMapper(dhcpSnoopingVlansLegacyToTerraform, false)(this._snoopingVlansLegacy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compatibility_suboption_link_selection: {
        value: cdktf.stringToHclTerraform(this._compatibilitySuboptionLinkSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compatibility_suboption_server_override: {
        value: cdktf.stringToHclTerraform(this._compatibilitySuboptionServerOverride),
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
      relay_information_option_default: {
        value: cdktf.booleanToHclTerraform(this._relayInformationOptionDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      relay_information_option_vpn: {
        value: cdktf.booleanToHclTerraform(this._relayInformationOptionVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      relay_information_trust_all: {
        value: cdktf.booleanToHclTerraform(this._relayInformationTrustAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snooping: {
        value: cdktf.booleanToHclTerraform(this._snooping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snooping_information_option: {
        value: cdktf.booleanToHclTerraform(this._snoopingInformationOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snooping_information_option_allow_untrusted: {
        value: cdktf.booleanToHclTerraform(this._snoopingInformationOptionAllowUntrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snooping_information_option_format_remote_id_hostname: {
        value: cdktf.booleanToHclTerraform(this._snoopingInformationOptionFormatRemoteIdHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snooping_information_option_format_remote_id_string: {
        value: cdktf.stringToHclTerraform(this._snoopingInformationOptionFormatRemoteIdString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snooping_vlans: {
        value: cdktf.listMapperHcl(dhcpSnoopingVlansToHclTerraform, false)(this._snoopingVlans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpSnoopingVlansList",
      },
      snooping_vlans_legacy: {
        value: cdktf.listMapperHcl(dhcpSnoopingVlansLegacyToHclTerraform, false)(this._snoopingVlansLegacy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpSnoopingVlansLegacyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
