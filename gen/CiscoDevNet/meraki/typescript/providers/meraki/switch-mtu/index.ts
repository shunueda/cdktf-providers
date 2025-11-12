// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchMtuConfig extends cdktf.TerraformMetaArguments {
  /**
  * MTU size for the entire network. Default value is 9578.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu#default_mtu_size SwitchMtu#default_mtu_size}
  */
  readonly defaultMtuSize?: number;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu#network_id SwitchMtu#network_id}
  */
  readonly networkId: string;
  /**
  * Override MTU size for individual switches or switch templates. An empty array will clear overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu#overrides SwitchMtu#overrides}
  */
  readonly overrides?: SwitchMtuOverrides[] | cdktf.IResolvable;
}
export interface SwitchMtuOverrides {
  /**
  * MTU size for the switches or switch templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu#mtu_size SwitchMtu#mtu_size}
  */
  readonly mtuSize: number;
  /**
  * List of switch template IDs. Applicable only for template network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu#switch_profiles SwitchMtu#switch_profiles}
  */
  readonly switchProfiles?: string[];
  /**
  * List of switch serials. Applicable only for switch network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu#switches SwitchMtu#switches}
  */
  readonly switches?: string[];
}

export function switchMtuOverridesToTerraform(struct?: SwitchMtuOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu_size: cdktf.numberToTerraform(struct!.mtuSize),
    switch_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchProfiles),
    switches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switches),
  }
}


export function switchMtuOverridesToHclTerraform(struct?: SwitchMtuOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu_size: {
      value: cdktf.numberToHclTerraform(struct!.mtuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.switchProfiles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    switches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.switches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchMtuOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchMtuOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuSize = this._mtuSize;
    }
    if (this._switchProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchProfiles = this._switchProfiles;
    }
    if (this._switches !== undefined) {
      hasAnyValues = true;
      internalValueResult.switches = this._switches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchMtuOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtuSize = undefined;
      this._switchProfiles = undefined;
      this._switches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtuSize = value.mtuSize;
      this._switchProfiles = value.switchProfiles;
      this._switches = value.switches;
    }
  }

  // mtu_size - computed: false, optional: false, required: true
  private _mtuSize?: number; 
  public get mtuSize() {
    return this.getNumberAttribute('mtu_size');
  }
  public set mtuSize(value: number) {
    this._mtuSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuSizeInput() {
    return this._mtuSize;
  }

  // switch_profiles - computed: false, optional: true, required: false
  private _switchProfiles?: string[]; 
  public get switchProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_profiles'));
  }
  public set switchProfiles(value: string[]) {
    this._switchProfiles = value;
  }
  public resetSwitchProfiles() {
    this._switchProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchProfilesInput() {
    return this._switchProfiles;
  }

  // switches - computed: false, optional: true, required: false
  private _switches?: string[]; 
  public get switches() {
    return cdktf.Fn.tolist(this.getListAttribute('switches'));
  }
  public set switches(value: string[]) {
    this._switches = value;
  }
  public resetSwitches() {
    this._switches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchesInput() {
    return this._switches;
  }
}

export class SwitchMtuOverridesList extends cdktf.ComplexList {
  public internalValue? : SwitchMtuOverrides[] | cdktf.IResolvable

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
  public get(index: number): SwitchMtuOverridesOutputReference {
    return new SwitchMtuOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu meraki_switch_mtu}
*/
export class SwitchMtu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_mtu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchMtu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchMtu to import
  * @param importFromId The id of the existing SwitchMtu that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchMtu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_mtu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_mtu meraki_switch_mtu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchMtuConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchMtuConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_mtu',
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
    this._defaultMtuSize = config.defaultMtuSize;
    this._networkId = config.networkId;
    this._overrides.internalValue = config.overrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_mtu_size - computed: false, optional: true, required: false
  private _defaultMtuSize?: number; 
  public get defaultMtuSize() {
    return this.getNumberAttribute('default_mtu_size');
  }
  public set defaultMtuSize(value: number) {
    this._defaultMtuSize = value;
  }
  public resetDefaultMtuSize() {
    this._defaultMtuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMtuSizeInput() {
    return this._defaultMtuSize;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // overrides - computed: false, optional: true, required: false
  private _overrides = new SwitchMtuOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: SwitchMtuOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_mtu_size: cdktf.numberToTerraform(this._defaultMtuSize),
      network_id: cdktf.stringToTerraform(this._networkId),
      overrides: cdktf.listMapper(switchMtuOverridesToTerraform, false)(this._overrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_mtu_size: {
        value: cdktf.numberToHclTerraform(this._defaultMtuSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overrides: {
        value: cdktf.listMapperHcl(switchMtuOverridesToHclTerraform, false)(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchMtuOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
