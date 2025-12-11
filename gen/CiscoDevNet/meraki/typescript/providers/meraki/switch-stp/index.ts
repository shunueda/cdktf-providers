// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchStpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#network_id SwitchStp#network_id}
  */
  readonly networkId: string;
  /**
  * The spanning tree protocol status in network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#rstp_enabled SwitchStp#rstp_enabled}
  */
  readonly rstpEnabled?: boolean | cdktf.IResolvable;
  /**
  * STP bridge priority for switches/stacks or switch templates. An empty array will clear the STP bridge priority settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#stp_bridge_priority SwitchStp#stp_bridge_priority}
  */
  readonly stpBridgePriority?: SwitchStpStpBridgePriority[] | cdktf.IResolvable;
}
export interface SwitchStpStpBridgePriority {
  /**
  * List of stack IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#stacks SwitchStp#stacks}
  */
  readonly stacks?: string[];
  /**
  * STP priority for switch, stacks, or switch templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#stp_priority SwitchStp#stp_priority}
  */
  readonly stpPriority: number;
  /**
  * List of switch template IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#switch_profiles SwitchStp#switch_profiles}
  */
  readonly switchProfiles?: string[];
  /**
  * List of switch serial numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#switches SwitchStp#switches}
  */
  readonly switches?: string[];
}

export function switchStpStpBridgePriorityToTerraform(struct?: SwitchStpStpBridgePriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stacks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stacks),
    stp_priority: cdktf.numberToTerraform(struct!.stpPriority),
    switch_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchProfiles),
    switches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switches),
  }
}


export function switchStpStpBridgePriorityToHclTerraform(struct?: SwitchStpStpBridgePriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stacks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stacks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    stp_priority: {
      value: cdktf.numberToHclTerraform(struct!.stpPriority),
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

export class SwitchStpStpBridgePriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchStpStpBridgePriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.stacks = this._stacks;
    }
    if (this._stpPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpPriority = this._stpPriority;
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

  public set internalValue(value: SwitchStpStpBridgePriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stacks = undefined;
      this._stpPriority = undefined;
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
      this._stacks = value.stacks;
      this._stpPriority = value.stpPriority;
      this._switchProfiles = value.switchProfiles;
      this._switches = value.switches;
    }
  }

  // stacks - computed: false, optional: true, required: false
  private _stacks?: string[]; 
  public get stacks() {
    return cdktf.Fn.tolist(this.getListAttribute('stacks'));
  }
  public set stacks(value: string[]) {
    this._stacks = value;
  }
  public resetStacks() {
    this._stacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stacksInput() {
    return this._stacks;
  }

  // stp_priority - computed: false, optional: false, required: true
  private _stpPriority?: number; 
  public get stpPriority() {
    return this.getNumberAttribute('stp_priority');
  }
  public set stpPriority(value: number) {
    this._stpPriority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stpPriorityInput() {
    return this._stpPriority;
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

export class SwitchStpStpBridgePriorityList extends cdktf.ComplexList {
  public internalValue? : SwitchStpStpBridgePriority[] | cdktf.IResolvable

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
  public get(index: number): SwitchStpStpBridgePriorityOutputReference {
    return new SwitchStpStpBridgePriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp meraki_switch_stp}
*/
export class SwitchStp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_stp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchStp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchStp to import
  * @param importFromId The id of the existing SwitchStp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchStp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_stp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_stp meraki_switch_stp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchStpConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchStpConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_stp',
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
    this._networkId = config.networkId;
    this._rstpEnabled = config.rstpEnabled;
    this._stpBridgePriority.internalValue = config.stpBridgePriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rstp_enabled - computed: false, optional: true, required: false
  private _rstpEnabled?: boolean | cdktf.IResolvable; 
  public get rstpEnabled() {
    return this.getBooleanAttribute('rstp_enabled');
  }
  public set rstpEnabled(value: boolean | cdktf.IResolvable) {
    this._rstpEnabled = value;
  }
  public resetRstpEnabled() {
    this._rstpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstpEnabledInput() {
    return this._rstpEnabled;
  }

  // stp_bridge_priority - computed: false, optional: true, required: false
  private _stpBridgePriority = new SwitchStpStpBridgePriorityList(this, "stp_bridge_priority", false);
  public get stpBridgePriority() {
    return this._stpBridgePriority;
  }
  public putStpBridgePriority(value: SwitchStpStpBridgePriority[] | cdktf.IResolvable) {
    this._stpBridgePriority.internalValue = value;
  }
  public resetStpBridgePriority() {
    this._stpBridgePriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpBridgePriorityInput() {
    return this._stpBridgePriority.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      rstp_enabled: cdktf.booleanToTerraform(this._rstpEnabled),
      stp_bridge_priority: cdktf.listMapper(switchStpStpBridgePriorityToTerraform, false)(this._stpBridgePriority.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rstp_enabled: {
        value: cdktf.booleanToHclTerraform(this._rstpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stp_bridge_priority: {
        value: cdktf.listMapperHcl(switchStpStpBridgePriorityToHclTerraform, false)(this._stpBridgePriority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchStpStpBridgePriorityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
