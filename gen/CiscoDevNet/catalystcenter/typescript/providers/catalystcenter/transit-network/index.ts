// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autonomous System Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network#autonomous_system_number TransitNetwork#autonomous_system_number}
  */
  readonly autonomousSystemNumber?: string;
  /**
  * List of network device IDs that will be used as control plane nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network#control_plane_network_device_ids TransitNetwork#control_plane_network_device_ids}
  */
  readonly controlPlaneNetworkDeviceIds?: string[];
  /**
  * Set this to true to enable multicast over SD-Access transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network#is_multicast_over_transit_enabled TransitNetwork#is_multicast_over_transit_enabled}
  */
  readonly isMulticastOverTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Transit Network Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network#name TransitNetwork#name}
  */
  readonly name: string;
  /**
  * Routing Protocol Name
  *   - Choices: `BGP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network#routing_protocol_name TransitNetwork#routing_protocol_name}
  */
  readonly routingProtocolName?: string;
  /**
  * Transit Network Type
  *   - Choices: `IP_BASED_TRANSIT`, `SDA_LISP_PUB_SUB_TRANSIT`, `SDA_LISP_BGP_TRANSIT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network#type TransitNetwork#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network catalystcenter_transit_network}
*/
export class TransitNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_transit_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitNetwork to import
  * @param importFromId The id of the existing TransitNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_transit_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/transit_network catalystcenter_transit_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: TransitNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_transit_network',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2',
        providerVersionConstraint: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autonomousSystemNumber = config.autonomousSystemNumber;
    this._controlPlaneNetworkDeviceIds = config.controlPlaneNetworkDeviceIds;
    this._isMulticastOverTransitEnabled = config.isMulticastOverTransitEnabled;
    this._name = config.name;
    this._routingProtocolName = config.routingProtocolName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_system_number - computed: false, optional: true, required: false
  private _autonomousSystemNumber?: string; 
  public get autonomousSystemNumber() {
    return this.getStringAttribute('autonomous_system_number');
  }
  public set autonomousSystemNumber(value: string) {
    this._autonomousSystemNumber = value;
  }
  public resetAutonomousSystemNumber() {
    this._autonomousSystemNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemNumberInput() {
    return this._autonomousSystemNumber;
  }

  // control_plane_network_device_ids - computed: false, optional: true, required: false
  private _controlPlaneNetworkDeviceIds?: string[]; 
  public get controlPlaneNetworkDeviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('control_plane_network_device_ids'));
  }
  public set controlPlaneNetworkDeviceIds(value: string[]) {
    this._controlPlaneNetworkDeviceIds = value;
  }
  public resetControlPlaneNetworkDeviceIds() {
    this._controlPlaneNetworkDeviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNetworkDeviceIdsInput() {
    return this._controlPlaneNetworkDeviceIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_multicast_over_transit_enabled - computed: false, optional: true, required: false
  private _isMulticastOverTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isMulticastOverTransitEnabled() {
    return this.getBooleanAttribute('is_multicast_over_transit_enabled');
  }
  public set isMulticastOverTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isMulticastOverTransitEnabled = value;
  }
  public resetIsMulticastOverTransitEnabled() {
    this._isMulticastOverTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMulticastOverTransitEnabledInput() {
    return this._isMulticastOverTransitEnabled;
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

  // routing_protocol_name - computed: false, optional: true, required: false
  private _routingProtocolName?: string; 
  public get routingProtocolName() {
    return this.getStringAttribute('routing_protocol_name');
  }
  public set routingProtocolName(value: string) {
    this._routingProtocolName = value;
  }
  public resetRoutingProtocolName() {
    this._routingProtocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingProtocolNameInput() {
    return this._routingProtocolName;
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
      autonomous_system_number: cdktf.stringToTerraform(this._autonomousSystemNumber),
      control_plane_network_device_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlPlaneNetworkDeviceIds),
      is_multicast_over_transit_enabled: cdktf.booleanToTerraform(this._isMulticastOverTransitEnabled),
      name: cdktf.stringToTerraform(this._name),
      routing_protocol_name: cdktf.stringToTerraform(this._routingProtocolName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_system_number: {
        value: cdktf.stringToHclTerraform(this._autonomousSystemNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_network_device_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlPlaneNetworkDeviceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      is_multicast_over_transit_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMulticastOverTransitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_protocol_name: {
        value: cdktf.stringToHclTerraform(this._routingProtocolName),
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
