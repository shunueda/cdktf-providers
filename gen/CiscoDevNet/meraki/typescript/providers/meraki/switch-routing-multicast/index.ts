// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchRoutingMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flood unknown multicast traffic setting for entire network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#default_settings_flood_unknown_multicast_traffic_enabled SwitchRoutingMulticast#default_settings_flood_unknown_multicast_traffic_enabled}
  */
  readonly defaultSettingsFloodUnknownMulticastTrafficEnabled?: boolean | cdktf.IResolvable;
  /**
  * IGMP snooping setting for entire network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#default_settings_igmp_snooping_enabled SwitchRoutingMulticast#default_settings_igmp_snooping_enabled}
  */
  readonly defaultSettingsIgmpSnoopingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#network_id SwitchRoutingMulticast#network_id}
  */
  readonly networkId: string;
  /**
  * Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#overrides SwitchRoutingMulticast#overrides}
  */
  readonly overrides?: SwitchRoutingMulticastOverrides[] | cdktf.IResolvable;
}
export interface SwitchRoutingMulticastOverrides {
  /**
  * Flood unknown multicast traffic setting for switches, switch stacks or switch templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#flood_unknown_multicast_traffic_enabled SwitchRoutingMulticast#flood_unknown_multicast_traffic_enabled}
  */
  readonly floodUnknownMulticastTrafficEnabled: boolean | cdktf.IResolvable;
  /**
  * IGMP snooping setting for switches, switch stacks or switch templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#igmp_snooping_enabled SwitchRoutingMulticast#igmp_snooping_enabled}
  */
  readonly igmpSnoopingEnabled: boolean | cdktf.IResolvable;
  /**
  * List of switch stack ids for non-template network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#stacks SwitchRoutingMulticast#stacks}
  */
  readonly stacks?: string[];
  /**
  * List of switch templates ids for template network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#switch_profiles SwitchRoutingMulticast#switch_profiles}
  */
  readonly switchProfiles?: string[];
  /**
  * List of switch serials for non-template network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#switches SwitchRoutingMulticast#switches}
  */
  readonly switches?: string[];
}

export function switchRoutingMulticastOverridesToTerraform(struct?: SwitchRoutingMulticastOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flood_unknown_multicast_traffic_enabled: cdktf.booleanToTerraform(struct!.floodUnknownMulticastTrafficEnabled),
    igmp_snooping_enabled: cdktf.booleanToTerraform(struct!.igmpSnoopingEnabled),
    stacks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stacks),
    switch_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchProfiles),
    switches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switches),
  }
}


export function switchRoutingMulticastOverridesToHclTerraform(struct?: SwitchRoutingMulticastOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flood_unknown_multicast_traffic_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.floodUnknownMulticastTrafficEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    igmp_snooping_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.igmpSnoopingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stacks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stacks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class SwitchRoutingMulticastOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchRoutingMulticastOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floodUnknownMulticastTrafficEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodUnknownMulticastTrafficEnabled = this._floodUnknownMulticastTrafficEnabled;
    }
    if (this._igmpSnoopingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpSnoopingEnabled = this._igmpSnoopingEnabled;
    }
    if (this._stacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.stacks = this._stacks;
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

  public set internalValue(value: SwitchRoutingMulticastOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floodUnknownMulticastTrafficEnabled = undefined;
      this._igmpSnoopingEnabled = undefined;
      this._stacks = undefined;
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
      this._floodUnknownMulticastTrafficEnabled = value.floodUnknownMulticastTrafficEnabled;
      this._igmpSnoopingEnabled = value.igmpSnoopingEnabled;
      this._stacks = value.stacks;
      this._switchProfiles = value.switchProfiles;
      this._switches = value.switches;
    }
  }

  // flood_unknown_multicast_traffic_enabled - computed: false, optional: false, required: true
  private _floodUnknownMulticastTrafficEnabled?: boolean | cdktf.IResolvable; 
  public get floodUnknownMulticastTrafficEnabled() {
    return this.getBooleanAttribute('flood_unknown_multicast_traffic_enabled');
  }
  public set floodUnknownMulticastTrafficEnabled(value: boolean | cdktf.IResolvable) {
    this._floodUnknownMulticastTrafficEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floodUnknownMulticastTrafficEnabledInput() {
    return this._floodUnknownMulticastTrafficEnabled;
  }

  // igmp_snooping_enabled - computed: false, optional: false, required: true
  private _igmpSnoopingEnabled?: boolean | cdktf.IResolvable; 
  public get igmpSnoopingEnabled() {
    return this.getBooleanAttribute('igmp_snooping_enabled');
  }
  public set igmpSnoopingEnabled(value: boolean | cdktf.IResolvable) {
    this._igmpSnoopingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingEnabledInput() {
    return this._igmpSnoopingEnabled;
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

export class SwitchRoutingMulticastOverridesList extends cdktf.ComplexList {
  public internalValue? : SwitchRoutingMulticastOverrides[] | cdktf.IResolvable

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
  public get(index: number): SwitchRoutingMulticastOverridesOutputReference {
    return new SwitchRoutingMulticastOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast meraki_switch_routing_multicast}
*/
export class SwitchRoutingMulticast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchRoutingMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchRoutingMulticast to import
  * @param importFromId The id of the existing SwitchRoutingMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchRoutingMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_multicast meraki_switch_routing_multicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchRoutingMulticastConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchRoutingMulticastConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_multicast',
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
    this._defaultSettingsFloodUnknownMulticastTrafficEnabled = config.defaultSettingsFloodUnknownMulticastTrafficEnabled;
    this._defaultSettingsIgmpSnoopingEnabled = config.defaultSettingsIgmpSnoopingEnabled;
    this._networkId = config.networkId;
    this._overrides.internalValue = config.overrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_settings_flood_unknown_multicast_traffic_enabled - computed: false, optional: true, required: false
  private _defaultSettingsFloodUnknownMulticastTrafficEnabled?: boolean | cdktf.IResolvable; 
  public get defaultSettingsFloodUnknownMulticastTrafficEnabled() {
    return this.getBooleanAttribute('default_settings_flood_unknown_multicast_traffic_enabled');
  }
  public set defaultSettingsFloodUnknownMulticastTrafficEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultSettingsFloodUnknownMulticastTrafficEnabled = value;
  }
  public resetDefaultSettingsFloodUnknownMulticastTrafficEnabled() {
    this._defaultSettingsFloodUnknownMulticastTrafficEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsFloodUnknownMulticastTrafficEnabledInput() {
    return this._defaultSettingsFloodUnknownMulticastTrafficEnabled;
  }

  // default_settings_igmp_snooping_enabled - computed: false, optional: true, required: false
  private _defaultSettingsIgmpSnoopingEnabled?: boolean | cdktf.IResolvable; 
  public get defaultSettingsIgmpSnoopingEnabled() {
    return this.getBooleanAttribute('default_settings_igmp_snooping_enabled');
  }
  public set defaultSettingsIgmpSnoopingEnabled(value: boolean | cdktf.IResolvable) {
    this._defaultSettingsIgmpSnoopingEnabled = value;
  }
  public resetDefaultSettingsIgmpSnoopingEnabled() {
    this._defaultSettingsIgmpSnoopingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsIgmpSnoopingEnabledInput() {
    return this._defaultSettingsIgmpSnoopingEnabled;
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
  private _overrides = new SwitchRoutingMulticastOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: SwitchRoutingMulticastOverrides[] | cdktf.IResolvable) {
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
      default_settings_flood_unknown_multicast_traffic_enabled: cdktf.booleanToTerraform(this._defaultSettingsFloodUnknownMulticastTrafficEnabled),
      default_settings_igmp_snooping_enabled: cdktf.booleanToTerraform(this._defaultSettingsIgmpSnoopingEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      overrides: cdktf.listMapper(switchRoutingMulticastOverridesToTerraform, false)(this._overrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_settings_flood_unknown_multicast_traffic_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultSettingsFloodUnknownMulticastTrafficEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_settings_igmp_snooping_enabled: {
        value: cdktf.booleanToHclTerraform(this._defaultSettingsIgmpSnoopingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overrides: {
        value: cdktf.listMapperHcl(switchRoutingMulticastOverridesToHclTerraform, false)(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchRoutingMulticastOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
