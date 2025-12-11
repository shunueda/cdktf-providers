// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeDhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/dhcp#device DataIosxeDhcp#device}
  */
  readonly device?: string;
}
export interface DataIosxeDhcpSnoopingVlans {
}

export function dataIosxeDhcpSnoopingVlansToTerraform(struct?: DataIosxeDhcpSnoopingVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDhcpSnoopingVlansToHclTerraform(struct?: DataIosxeDhcpSnoopingVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDhcpSnoopingVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDhcpSnoopingVlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDhcpSnoopingVlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class DataIosxeDhcpSnoopingVlansList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDhcpSnoopingVlansOutputReference {
    return new DataIosxeDhcpSnoopingVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeDhcpSnoopingVlansLegacy {
}

export function dataIosxeDhcpSnoopingVlansLegacyToTerraform(struct?: DataIosxeDhcpSnoopingVlansLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeDhcpSnoopingVlansLegacyToHclTerraform(struct?: DataIosxeDhcpSnoopingVlansLegacy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeDhcpSnoopingVlansLegacyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeDhcpSnoopingVlansLegacy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeDhcpSnoopingVlansLegacy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}

export class DataIosxeDhcpSnoopingVlansLegacyList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeDhcpSnoopingVlansLegacyOutputReference {
    return new DataIosxeDhcpSnoopingVlansLegacyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/dhcp iosxe_dhcp}
*/
export class DataIosxeDhcp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeDhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeDhcp to import
  * @param importFromId The id of the existing DataIosxeDhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeDhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/dhcp iosxe_dhcp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeDhcpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeDhcpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatibility_suboption_link_selection - computed: true, optional: false, required: false
  public get compatibilitySuboptionLinkSelection() {
    return this.getStringAttribute('compatibility_suboption_link_selection');
  }

  // compatibility_suboption_server_override - computed: true, optional: false, required: false
  public get compatibilitySuboptionServerOverride() {
    return this.getStringAttribute('compatibility_suboption_server_override');
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

  // relay_information_option_default - computed: true, optional: false, required: false
  public get relayInformationOptionDefault() {
    return this.getBooleanAttribute('relay_information_option_default');
  }

  // relay_information_option_vpn - computed: true, optional: false, required: false
  public get relayInformationOptionVpn() {
    return this.getBooleanAttribute('relay_information_option_vpn');
  }

  // relay_information_trust_all - computed: true, optional: false, required: false
  public get relayInformationTrustAll() {
    return this.getBooleanAttribute('relay_information_trust_all');
  }

  // snooping - computed: true, optional: false, required: false
  public get snooping() {
    return this.getBooleanAttribute('snooping');
  }

  // snooping_information_option - computed: true, optional: false, required: false
  public get snoopingInformationOption() {
    return this.getBooleanAttribute('snooping_information_option');
  }

  // snooping_information_option_allow_untrusted - computed: true, optional: false, required: false
  public get snoopingInformationOptionAllowUntrusted() {
    return this.getBooleanAttribute('snooping_information_option_allow_untrusted');
  }

  // snooping_information_option_format_remote_id_hostname - computed: true, optional: false, required: false
  public get snoopingInformationOptionFormatRemoteIdHostname() {
    return this.getBooleanAttribute('snooping_information_option_format_remote_id_hostname');
  }

  // snooping_information_option_format_remote_id_string - computed: true, optional: false, required: false
  public get snoopingInformationOptionFormatRemoteIdString() {
    return this.getStringAttribute('snooping_information_option_format_remote_id_string');
  }

  // snooping_vlans - computed: true, optional: false, required: false
  private _snoopingVlans = new DataIosxeDhcpSnoopingVlansList(this, "snooping_vlans", false);
  public get snoopingVlans() {
    return this._snoopingVlans;
  }

  // snooping_vlans_legacy - computed: true, optional: false, required: false
  private _snoopingVlansLegacy = new DataIosxeDhcpSnoopingVlansLegacyList(this, "snooping_vlans_legacy", false);
  public get snoopingVlansLegacy() {
    return this._snoopingVlansLegacy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
