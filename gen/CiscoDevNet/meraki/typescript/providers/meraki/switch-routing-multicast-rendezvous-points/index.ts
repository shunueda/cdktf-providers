// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchRoutingMulticastRendezvousPointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points#items SwitchRoutingMulticastRendezvousPoints#items}
  */
  readonly items: SwitchRoutingMulticastRendezvousPointsItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points#network_id SwitchRoutingMulticastRendezvousPoints#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points#organization_id SwitchRoutingMulticastRendezvousPoints#organization_id}
  */
  readonly organizationId: string;
}
export interface SwitchRoutingMulticastRendezvousPointsItems {
  /**
  * The IP address of the interface where the RP needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points#interface_ip SwitchRoutingMulticastRendezvousPoints#interface_ip}
  */
  readonly interfaceIp: string;
  /**
  * `Any`, or the IP address of a multicast group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points#multicast_group SwitchRoutingMulticastRendezvousPoints#multicast_group}
  */
  readonly multicastGroup: string;
  /**
  * The name of the VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points#vrf_name SwitchRoutingMulticastRendezvousPoints#vrf_name}
  */
  readonly vrfName?: string;
}

export function switchRoutingMulticastRendezvousPointsItemsToTerraform(struct?: SwitchRoutingMulticastRendezvousPointsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip: cdktf.stringToTerraform(struct!.interfaceIp),
    multicast_group: cdktf.stringToTerraform(struct!.multicastGroup),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function switchRoutingMulticastRendezvousPointsItemsToHclTerraform(struct?: SwitchRoutingMulticastRendezvousPointsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_group: {
      value: cdktf.stringToHclTerraform(struct!.multicastGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchRoutingMulticastRendezvousPointsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchRoutingMulticastRendezvousPointsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIp = this._interfaceIp;
    }
    if (this._multicastGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastGroup = this._multicastGroup;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchRoutingMulticastRendezvousPointsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceIp = undefined;
      this._multicastGroup = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceIp = value.interfaceIp;
      this._multicastGroup = value.multicastGroup;
      this._vrfName = value.vrfName;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_ip - computed: false, optional: false, required: true
  private _interfaceIp?: string; 
  public get interfaceIp() {
    return this.getStringAttribute('interface_ip');
  }
  public set interfaceIp(value: string) {
    this._interfaceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpInput() {
    return this._interfaceIp;
  }

  // multicast_group - computed: false, optional: false, required: true
  private _multicastGroup?: string; 
  public get multicastGroup() {
    return this.getStringAttribute('multicast_group');
  }
  public set multicastGroup(value: string) {
    this._multicastGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupInput() {
    return this._multicastGroup;
  }

  // vrf_name - computed: false, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class SwitchRoutingMulticastRendezvousPointsItemsList extends cdktf.ComplexList {
  public internalValue? : SwitchRoutingMulticastRendezvousPointsItems[] | cdktf.IResolvable

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
  public get(index: number): SwitchRoutingMulticastRendezvousPointsItemsOutputReference {
    return new SwitchRoutingMulticastRendezvousPointsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points meraki_switch_routing_multicast_rendezvous_points}
*/
export class SwitchRoutingMulticastRendezvousPoints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_multicast_rendezvous_points";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchRoutingMulticastRendezvousPoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchRoutingMulticastRendezvousPoints to import
  * @param importFromId The id of the existing SwitchRoutingMulticastRendezvousPoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchRoutingMulticastRendezvousPoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_multicast_rendezvous_points", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/switch_routing_multicast_rendezvous_points meraki_switch_routing_multicast_rendezvous_points} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchRoutingMulticastRendezvousPointsConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchRoutingMulticastRendezvousPointsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_multicast_rendezvous_points',
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
    this._items.internalValue = config.items;
    this._networkId = config.networkId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new SwitchRoutingMulticastRendezvousPointsItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: SwitchRoutingMulticastRendezvousPointsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(switchRoutingMulticastRendezvousPointsItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(switchRoutingMulticastRendezvousPointsItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchRoutingMulticastRendezvousPointsItemsList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
