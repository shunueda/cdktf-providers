// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchLinkAggregationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#items SwitchLinkAggregations#items}
  */
  readonly items: SwitchLinkAggregationsItems[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#network_id SwitchLinkAggregations#network_id}
  */
  readonly networkId: string;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#organization_id SwitchLinkAggregations#organization_id}
  */
  readonly organizationId: string;
}
export interface SwitchLinkAggregationsItemsSwitchPorts {
  /**
  * Port identifier of switch port. For modules, the identifier is 'SlotNumber_ModuleType_PortNumber' (Ex: '1_8X10G_1'), otherwise it is just the port number (Ex: '8').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#port_id SwitchLinkAggregations#port_id}
  */
  readonly portId: string;
  /**
  * Serial number of the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#serial SwitchLinkAggregations#serial}
  */
  readonly serial: string;
}

export function switchLinkAggregationsItemsSwitchPortsToTerraform(struct?: SwitchLinkAggregationsItemsSwitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_id: cdktf.stringToTerraform(struct!.portId),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function switchLinkAggregationsItemsSwitchPortsToHclTerraform(struct?: SwitchLinkAggregationsItemsSwitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchLinkAggregationsItemsSwitchPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchLinkAggregationsItemsSwitchPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchLinkAggregationsItemsSwitchPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portId = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portId = value.portId;
      this._serial = value.serial;
    }
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }
}

export class SwitchLinkAggregationsItemsSwitchPortsList extends cdktf.ComplexList {
  public internalValue? : SwitchLinkAggregationsItemsSwitchPorts[] | cdktf.IResolvable

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
  public get(index: number): SwitchLinkAggregationsItemsSwitchPortsOutputReference {
    return new SwitchLinkAggregationsItemsSwitchPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchLinkAggregationsItemsSwitchProfilePorts {
  /**
  * Port identifier of switch port. For modules, the identifier is 'SlotNumber_ModuleType_PortNumber' (Ex: '1_8X10G_1'), otherwise it is just the port number (Ex: '8').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#port_id SwitchLinkAggregations#port_id}
  */
  readonly portId: string;
  /**
  * Profile identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#profile SwitchLinkAggregations#profile}
  */
  readonly profile: string;
}

export function switchLinkAggregationsItemsSwitchProfilePortsToTerraform(struct?: SwitchLinkAggregationsItemsSwitchProfilePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_id: cdktf.stringToTerraform(struct!.portId),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function switchLinkAggregationsItemsSwitchProfilePortsToHclTerraform(struct?: SwitchLinkAggregationsItemsSwitchProfilePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchLinkAggregationsItemsSwitchProfilePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchLinkAggregationsItemsSwitchProfilePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchLinkAggregationsItemsSwitchProfilePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portId = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portId = value.portId;
      this._profile = value.profile;
    }
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class SwitchLinkAggregationsItemsSwitchProfilePortsList extends cdktf.ComplexList {
  public internalValue? : SwitchLinkAggregationsItemsSwitchProfilePorts[] | cdktf.IResolvable

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
  public get(index: number): SwitchLinkAggregationsItemsSwitchProfilePortsOutputReference {
    return new SwitchLinkAggregationsItemsSwitchProfilePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchLinkAggregationsItems {
  /**
  * Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#switch_ports SwitchLinkAggregations#switch_ports}
  */
  readonly switchPorts?: SwitchLinkAggregationsItemsSwitchPorts[] | cdktf.IResolvable;
  /**
  * Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#switch_profile_ports SwitchLinkAggregations#switch_profile_ports}
  */
  readonly switchProfilePorts?: SwitchLinkAggregationsItemsSwitchProfilePorts[] | cdktf.IResolvable;
}

export function switchLinkAggregationsItemsToTerraform(struct?: SwitchLinkAggregationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch_ports: cdktf.listMapper(switchLinkAggregationsItemsSwitchPortsToTerraform, false)(struct!.switchPorts),
    switch_profile_ports: cdktf.listMapper(switchLinkAggregationsItemsSwitchProfilePortsToTerraform, false)(struct!.switchProfilePorts),
  }
}


export function switchLinkAggregationsItemsToHclTerraform(struct?: SwitchLinkAggregationsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch_ports: {
      value: cdktf.listMapperHcl(switchLinkAggregationsItemsSwitchPortsToHclTerraform, false)(struct!.switchPorts),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchLinkAggregationsItemsSwitchPortsList",
    },
    switch_profile_ports: {
      value: cdktf.listMapperHcl(switchLinkAggregationsItemsSwitchProfilePortsToHclTerraform, false)(struct!.switchProfilePorts),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchLinkAggregationsItemsSwitchProfilePortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchLinkAggregationsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchLinkAggregationsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switchPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPorts = this._switchPorts?.internalValue;
    }
    if (this._switchProfilePorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchProfilePorts = this._switchProfilePorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchLinkAggregationsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._switchPorts.internalValue = undefined;
      this._switchProfilePorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._switchPorts.internalValue = value.switchPorts;
      this._switchProfilePorts.internalValue = value.switchProfilePorts;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // switch_ports - computed: false, optional: true, required: false
  private _switchPorts = new SwitchLinkAggregationsItemsSwitchPortsList(this, "switch_ports", false);
  public get switchPorts() {
    return this._switchPorts;
  }
  public putSwitchPorts(value: SwitchLinkAggregationsItemsSwitchPorts[] | cdktf.IResolvable) {
    this._switchPorts.internalValue = value;
  }
  public resetSwitchPorts() {
    this._switchPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortsInput() {
    return this._switchPorts.internalValue;
  }

  // switch_profile_ports - computed: false, optional: true, required: false
  private _switchProfilePorts = new SwitchLinkAggregationsItemsSwitchProfilePortsList(this, "switch_profile_ports", false);
  public get switchProfilePorts() {
    return this._switchProfilePorts;
  }
  public putSwitchProfilePorts(value: SwitchLinkAggregationsItemsSwitchProfilePorts[] | cdktf.IResolvable) {
    this._switchProfilePorts.internalValue = value;
  }
  public resetSwitchProfilePorts() {
    this._switchProfilePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchProfilePortsInput() {
    return this._switchProfilePorts.internalValue;
  }
}

export class SwitchLinkAggregationsItemsList extends cdktf.ComplexList {
  public internalValue? : SwitchLinkAggregationsItems[] | cdktf.IResolvable

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
  public get(index: number): SwitchLinkAggregationsItemsOutputReference {
    return new SwitchLinkAggregationsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations meraki_switch_link_aggregations}
*/
export class SwitchLinkAggregations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_link_aggregations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchLinkAggregations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchLinkAggregations to import
  * @param importFromId The id of the existing SwitchLinkAggregations that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchLinkAggregations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_link_aggregations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_link_aggregations meraki_switch_link_aggregations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchLinkAggregationsConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchLinkAggregationsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_link_aggregations',
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
  private _items = new SwitchLinkAggregationsItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: SwitchLinkAggregationsItems[] | cdktf.IResolvable) {
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
      items: cdktf.listMapper(switchLinkAggregationsItemsToTerraform, false)(this._items.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(switchLinkAggregationsItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchLinkAggregationsItemsList",
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
