// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/interface_switchport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeInterfaceSwitchportConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/interface_switchport#device DataIosxeInterfaceSwitchport#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/interface_switchport#name DataIosxeInterfaceSwitchport#name}
  */
  readonly name: string;
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/interface_switchport#type DataIosxeInterfaceSwitchport#type}
  */
  readonly type: string;
}
export interface DataIosxeInterfaceSwitchportTrunkAllowedVlansAdd {
}

export function dataIosxeInterfaceSwitchportTrunkAllowedVlansAddToTerraform(struct?: DataIosxeInterfaceSwitchportTrunkAllowedVlansAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeInterfaceSwitchportTrunkAllowedVlansAddToHclTerraform(struct?: DataIosxeInterfaceSwitchportTrunkAllowedVlansAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeInterfaceSwitchportTrunkAllowedVlansAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeInterfaceSwitchportTrunkAllowedVlansAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeInterfaceSwitchportTrunkAllowedVlansAdd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vlans - computed: true, optional: false, required: false
  public get vlans() {
    return this.getStringAttribute('vlans');
  }
}

export class DataIosxeInterfaceSwitchportTrunkAllowedVlansAddList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeInterfaceSwitchportTrunkAllowedVlansAddOutputReference {
    return new DataIosxeInterfaceSwitchportTrunkAllowedVlansAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/interface_switchport iosxe_interface_switchport}
*/
export class DataIosxeInterfaceSwitchport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_switchport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeInterfaceSwitchport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeInterfaceSwitchport to import
  * @param importFromId The id of the existing DataIosxeInterfaceSwitchport that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/interface_switchport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeInterfaceSwitchport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_switchport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/interface_switchport iosxe_interface_switchport} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeInterfaceSwitchportConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeInterfaceSwitchportConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_switchport',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
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
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan - computed: true, optional: false, required: false
  public get accessVlan() {
    return this.getStringAttribute('access_vlan');
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getBooleanAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode_access - computed: true, optional: false, required: false
  public get modeAccess() {
    return this.getBooleanAttribute('mode_access');
  }

  // mode_dot1q_tunnel - computed: true, optional: false, required: false
  public get modeDot1QTunnel() {
    return this.getBooleanAttribute('mode_dot1q_tunnel');
  }

  // mode_private_vlan_host - computed: true, optional: false, required: false
  public get modePrivateVlanHost() {
    return this.getBooleanAttribute('mode_private_vlan_host');
  }

  // mode_private_vlan_promiscuous - computed: true, optional: false, required: false
  public get modePrivateVlanPromiscuous() {
    return this.getBooleanAttribute('mode_private_vlan_promiscuous');
  }

  // mode_private_vlan_trunk - computed: true, optional: false, required: false
  public get modePrivateVlanTrunk() {
    return this.getBooleanAttribute('mode_private_vlan_trunk');
  }

  // mode_trunk - computed: true, optional: false, required: false
  public get modeTrunk() {
    return this.getBooleanAttribute('mode_trunk');
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

  // nonegotiate - computed: true, optional: false, required: false
  public get nonegotiate() {
    return this.getBooleanAttribute('nonegotiate');
  }

  // trunk_allowed_vlans - computed: true, optional: false, required: false
  public get trunkAllowedVlans() {
    return this.getStringAttribute('trunk_allowed_vlans');
  }

  // trunk_allowed_vlans_add - computed: true, optional: false, required: false
  private _trunkAllowedVlansAdd = new DataIosxeInterfaceSwitchportTrunkAllowedVlansAddList(this, "trunk_allowed_vlans_add", false);
  public get trunkAllowedVlansAdd() {
    return this._trunkAllowedVlansAdd;
  }

  // trunk_allowed_vlans_all - computed: true, optional: false, required: false
  public get trunkAllowedVlansAll() {
    return this.getBooleanAttribute('trunk_allowed_vlans_all');
  }

  // trunk_allowed_vlans_except - computed: true, optional: false, required: false
  public get trunkAllowedVlansExcept() {
    return this.getStringAttribute('trunk_allowed_vlans_except');
  }

  // trunk_allowed_vlans_legacy - computed: true, optional: false, required: false
  public get trunkAllowedVlansLegacy() {
    return this.getStringAttribute('trunk_allowed_vlans_legacy');
  }

  // trunk_allowed_vlans_none - computed: true, optional: false, required: false
  public get trunkAllowedVlansNone() {
    return this.getBooleanAttribute('trunk_allowed_vlans_none');
  }

  // trunk_allowed_vlans_none_legacy - computed: true, optional: false, required: false
  public get trunkAllowedVlansNoneLegacy() {
    return this.getBooleanAttribute('trunk_allowed_vlans_none_legacy');
  }

  // trunk_allowed_vlans_remove - computed: true, optional: false, required: false
  public get trunkAllowedVlansRemove() {
    return this.getStringAttribute('trunk_allowed_vlans_remove');
  }

  // trunk_native_vlan - computed: true, optional: false, required: false
  public get trunkNativeVlan() {
    return this.getNumberAttribute('trunk_native_vlan');
  }

  // trunk_native_vlan_tag - computed: true, optional: false, required: false
  public get trunkNativeVlanTag() {
    return this.getBooleanAttribute('trunk_native_vlan_tag');
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
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
