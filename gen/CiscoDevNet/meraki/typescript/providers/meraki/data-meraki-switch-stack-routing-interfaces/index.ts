// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_stack_routing_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiSwitchStackRoutingInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_stack_routing_interfaces#network_id DataMerakiSwitchStackRoutingInterfaces#network_id}
  */
  readonly networkId: string;
  /**
  * Switch stack ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_stack_routing_interfaces#switch_stack_id DataMerakiSwitchStackRoutingInterfaces#switch_stack_id}
  */
  readonly switchStackId: string;
}
export interface DataMerakiSwitchStackRoutingInterfacesItems {
}

export function dataMerakiSwitchStackRoutingInterfacesItemsToTerraform(struct?: DataMerakiSwitchStackRoutingInterfacesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiSwitchStackRoutingInterfacesItemsToHclTerraform(struct?: DataMerakiSwitchStackRoutingInterfacesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiSwitchStackRoutingInterfacesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiSwitchStackRoutingInterfacesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiSwitchStackRoutingInterfacesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_gateway - computed: true, optional: false, required: false
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_ip - computed: true, optional: false, required: false
  public get interfaceIp() {
    return this.getStringAttribute('interface_ip');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_assignment_mode - computed: true, optional: false, required: false
  public get ipv6AssignmentMode() {
    return this.getStringAttribute('ipv6_assignment_mode');
  }

  // ipv6_gateway - computed: true, optional: false, required: false
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }

  // ipv6_prefix - computed: true, optional: false, required: false
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // multicast_routing - computed: true, optional: false, required: false
  public get multicastRouting() {
    return this.getStringAttribute('multicast_routing');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ospf_settings_area - computed: true, optional: false, required: false
  public get ospfSettingsArea() {
    return this.getStringAttribute('ospf_settings_area');
  }

  // ospf_settings_cost - computed: true, optional: false, required: false
  public get ospfSettingsCost() {
    return this.getNumberAttribute('ospf_settings_cost');
  }

  // ospf_settings_is_passive_enabled - computed: true, optional: false, required: false
  public get ospfSettingsIsPassiveEnabled() {
    return this.getBooleanAttribute('ospf_settings_is_passive_enabled');
  }

  // ospf_settings_network_type - computed: true, optional: false, required: false
  public get ospfSettingsNetworkType() {
    return this.getStringAttribute('ospf_settings_network_type');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // switch_port_id - computed: true, optional: false, required: false
  public get switchPortId() {
    return this.getStringAttribute('switch_port_id');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataMerakiSwitchStackRoutingInterfacesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiSwitchStackRoutingInterfacesItemsOutputReference {
    return new DataMerakiSwitchStackRoutingInterfacesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_stack_routing_interfaces meraki_switch_stack_routing_interfaces}
*/
export class DataMerakiSwitchStackRoutingInterfaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_stack_routing_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiSwitchStackRoutingInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiSwitchStackRoutingInterfaces to import
  * @param importFromId The id of the existing DataMerakiSwitchStackRoutingInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_stack_routing_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiSwitchStackRoutingInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_stack_routing_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/data-sources/switch_stack_routing_interfaces meraki_switch_stack_routing_interfaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiSwitchStackRoutingInterfacesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiSwitchStackRoutingInterfacesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_stack_routing_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
    this._switchStackId = config.switchStackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiSwitchStackRoutingInterfacesItemsList(this, "items", true);
  public get items() {
    return this._items;
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

  // switch_stack_id - computed: false, optional: false, required: true
  private _switchStackId?: string; 
  public get switchStackId() {
    return this.getStringAttribute('switch_stack_id');
  }
  public set switchStackId(value: string) {
    this._switchStackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchStackIdInput() {
    return this._switchStackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      switch_stack_id: cdktf.stringToTerraform(this._switchStackId),
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
      switch_stack_id: {
        value: cdktf.stringToHclTerraform(this._switchStackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
