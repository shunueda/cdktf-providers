// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_routing_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchRoutingMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_routing_multicast#network_id DataMerakiSwitchRoutingMulticast#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiSwitchRoutingMulticastOverrides {
}

export function dataMerakiSwitchRoutingMulticastOverridesToTerraform(struct?: DataMerakiSwitchRoutingMulticastOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchRoutingMulticastOverridesToHclTerraform(struct?: DataMerakiSwitchRoutingMulticastOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchRoutingMulticastOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchRoutingMulticastOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchRoutingMulticastOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flood_unknown_multicast_traffic_enabled - computed: true, optional: false, required: false
  public get floodUnknownMulticastTrafficEnabled() {
    return this.getBooleanAttribute('flood_unknown_multicast_traffic_enabled');
  }

  // igmp_snooping_enabled - computed: true, optional: false, required: false
  public get igmpSnoopingEnabled() {
    return this.getBooleanAttribute('igmp_snooping_enabled');
  }

  // stacks - computed: true, optional: false, required: false
  public get stacks() {
    return cdktf.Fn.tolist(this.getListAttribute('stacks'));
  }

  // switch_profiles - computed: true, optional: false, required: false
  public get switchProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_profiles'));
  }

  // switches - computed: true, optional: false, required: false
  public get switches() {
    return cdktf.Fn.tolist(this.getListAttribute('switches'));
  }
}

export class DataMerakiSwitchRoutingMulticastOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchRoutingMulticastOverridesOutputReference {
    return new DataMerakiSwitchRoutingMulticastOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_routing_multicast meraki_switch_routing_multicast}
*/
export class DataMerakiSwitchRoutingMulticast extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchRoutingMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchRoutingMulticast to import
  * @param importFromId The id of the existing DataMerakiSwitchRoutingMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_routing_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchRoutingMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/switch_routing_multicast meraki_switch_routing_multicast} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchRoutingMulticastConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchRoutingMulticastConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_multicast',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_settings_flood_unknown_multicast_traffic_enabled - computed: true, optional: false, required: false
  public get defaultSettingsFloodUnknownMulticastTrafficEnabled() {
    return this.getBooleanAttribute('default_settings_flood_unknown_multicast_traffic_enabled');
  }

  // default_settings_igmp_snooping_enabled - computed: true, optional: false, required: false
  public get defaultSettingsIgmpSnoopingEnabled() {
    return this.getBooleanAttribute('default_settings_igmp_snooping_enabled');
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

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataMerakiSwitchRoutingMulticastOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
