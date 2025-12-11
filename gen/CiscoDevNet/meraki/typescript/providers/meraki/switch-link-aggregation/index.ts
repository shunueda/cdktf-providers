// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchLinkAggregationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#network_id SwitchLinkAggregation#network_id}
  */
  readonly networkId: string;
  /**
  * Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#switch_ports SwitchLinkAggregation#switch_ports}
  */
  readonly switchPorts?: SwitchLinkAggregationSwitchPorts[] | cdktf.IResolvable;
  /**
  * Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#switch_profile_ports SwitchLinkAggregation#switch_profile_ports}
  */
  readonly switchProfilePorts?: SwitchLinkAggregationSwitchProfilePorts[] | cdktf.IResolvable;
}
export interface SwitchLinkAggregationSwitchPorts {
  /**
  * Port identifier of switch port. For modules, the identifier is 'SlotNumber_ModuleType_PortNumber' (Ex: '1_8X10G_1'), otherwise it is just the port number (Ex: '8').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#port_id SwitchLinkAggregation#port_id}
  */
  readonly portId: string;
  /**
  * Serial number of the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#serial SwitchLinkAggregation#serial}
  */
  readonly serial: string;
}

export function switchLinkAggregationSwitchPortsToTerraform(struct?: SwitchLinkAggregationSwitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_id: cdktf.stringToTerraform(struct!.portId),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function switchLinkAggregationSwitchPortsToHclTerraform(struct?: SwitchLinkAggregationSwitchPorts | cdktf.IResolvable): any {
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

export class SwitchLinkAggregationSwitchPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchLinkAggregationSwitchPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchLinkAggregationSwitchPorts | cdktf.IResolvable | undefined) {
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

export class SwitchLinkAggregationSwitchPortsList extends cdktf.ComplexList {
  public internalValue? : SwitchLinkAggregationSwitchPorts[] | cdktf.IResolvable

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
  public get(index: number): SwitchLinkAggregationSwitchPortsOutputReference {
    return new SwitchLinkAggregationSwitchPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchLinkAggregationSwitchProfilePorts {
  /**
  * Port identifier of switch port. For modules, the identifier is 'SlotNumber_ModuleType_PortNumber' (Ex: '1_8X10G_1'), otherwise it is just the port number (Ex: '8').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#port_id SwitchLinkAggregation#port_id}
  */
  readonly portId: string;
  /**
  * Profile identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#profile SwitchLinkAggregation#profile}
  */
  readonly profile: string;
}

export function switchLinkAggregationSwitchProfilePortsToTerraform(struct?: SwitchLinkAggregationSwitchProfilePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_id: cdktf.stringToTerraform(struct!.portId),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function switchLinkAggregationSwitchProfilePortsToHclTerraform(struct?: SwitchLinkAggregationSwitchProfilePorts | cdktf.IResolvable): any {
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

export class SwitchLinkAggregationSwitchProfilePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchLinkAggregationSwitchProfilePorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchLinkAggregationSwitchProfilePorts | cdktf.IResolvable | undefined) {
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

export class SwitchLinkAggregationSwitchProfilePortsList extends cdktf.ComplexList {
  public internalValue? : SwitchLinkAggregationSwitchProfilePorts[] | cdktf.IResolvable

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
  public get(index: number): SwitchLinkAggregationSwitchProfilePortsOutputReference {
    return new SwitchLinkAggregationSwitchProfilePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation meraki_switch_link_aggregation}
*/
export class SwitchLinkAggregation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_link_aggregation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchLinkAggregation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchLinkAggregation to import
  * @param importFromId The id of the existing SwitchLinkAggregation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchLinkAggregation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_link_aggregation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/switch_link_aggregation meraki_switch_link_aggregation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchLinkAggregationConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchLinkAggregationConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_link_aggregation',
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
    this._switchPorts.internalValue = config.switchPorts;
    this._switchProfilePorts.internalValue = config.switchProfilePorts;
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

  // switch_ports - computed: false, optional: true, required: false
  private _switchPorts = new SwitchLinkAggregationSwitchPortsList(this, "switch_ports", false);
  public get switchPorts() {
    return this._switchPorts;
  }
  public putSwitchPorts(value: SwitchLinkAggregationSwitchPorts[] | cdktf.IResolvable) {
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
  private _switchProfilePorts = new SwitchLinkAggregationSwitchProfilePortsList(this, "switch_profile_ports", false);
  public get switchProfilePorts() {
    return this._switchProfilePorts;
  }
  public putSwitchProfilePorts(value: SwitchLinkAggregationSwitchProfilePorts[] | cdktf.IResolvable) {
    this._switchProfilePorts.internalValue = value;
  }
  public resetSwitchProfilePorts() {
    this._switchProfilePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchProfilePortsInput() {
    return this._switchProfilePorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      switch_ports: cdktf.listMapper(switchLinkAggregationSwitchPortsToTerraform, false)(this._switchPorts.internalValue),
      switch_profile_ports: cdktf.listMapper(switchLinkAggregationSwitchProfilePortsToTerraform, false)(this._switchProfilePorts.internalValue),
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
      switch_ports: {
        value: cdktf.listMapperHcl(switchLinkAggregationSwitchPortsToHclTerraform, false)(this._switchPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchLinkAggregationSwitchPortsList",
      },
      switch_profile_ports: {
        value: cdktf.listMapperHcl(switchLinkAggregationSwitchProfilePortsToHclTerraform, false)(this._switchProfilePorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchLinkAggregationSwitchProfilePortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
