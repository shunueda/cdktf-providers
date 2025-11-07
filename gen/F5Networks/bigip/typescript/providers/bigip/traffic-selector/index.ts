// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the traffic selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#description TrafficSelector#description}
  */
  readonly description?: string;
  /**
  * Specifies the host or network IP address to which the application traffic is destined.When creating a new traffic selector, this parameter is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#destination_address TrafficSelector#destination_address}
  */
  readonly destinationAddress: string;
  /**
  * Specifies the IP port used by the application. The default value is All Ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#destination_port TrafficSelector#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Specifies whether the traffic selector applies to inbound or outbound traffic, or both. The default value is Both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#direction TrafficSelector#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#id TrafficSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the network protocol to use for this traffic. The default value is All Protocols (255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#ip_protocol TrafficSelector#ip_protocol}
  */
  readonly ipProtocol?: number;
  /**
  * Specifies the IPsec policy that tells the BIG-IP system how to handle the packets.When creating a new traffic selector, if this parameter is not specified, the default is default-ipsec-policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#ipsec_policy TrafficSelector#ipsec_policy}
  */
  readonly ipsecPolicy?: string;
  /**
  * Specifies the name of the traffic selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#name TrafficSelector#name}
  */
  readonly name: string;
  /**
  * Specifies the order in which traffic is matched, if traffic can be matched to multiple traffic selectors.Traffic is matched to the traffic selector with the highest priority (lowest order number).When creating a new traffic selector, if this parameter is not specified, the default is last.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#order TrafficSelector#order}
  */
  readonly order?: number;
  /**
  * Specifies the host or network IP address from which the application traffic originates.When creating a new traffic selector, this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#source_address TrafficSelector#source_address}
  */
  readonly sourceAddress: string;
  /**
  * Specifies the IP port used by the application. The default value is All Ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#source_port TrafficSelector#source_port}
  */
  readonly sourcePort?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector bigip_traffic_selector}
*/
export class TrafficSelector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_traffic_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficSelector to import
  * @param importFromId The id of the existing TrafficSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_traffic_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/traffic_selector bigip_traffic_selector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_traffic_selector',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationAddress = config.destinationAddress;
    this._destinationPort = config.destinationPort;
    this._direction = config.direction;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._ipsecPolicy = config.ipsecPolicy;
    this._name = config.name;
    this._order = config.order;
    this._sourceAddress = config.sourceAddress;
    this._sourcePort = config.sourcePort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_address - computed: false, optional: false, required: true
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: number; 
  public get ipProtocol() {
    return this.getNumberAttribute('ip_protocol');
  }
  public set ipProtocol(value: number) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ipsec_policy - computed: true, optional: true, required: false
  private _ipsecPolicy?: string; 
  public get ipsecPolicy() {
    return this.getStringAttribute('ipsec_policy');
  }
  public set ipsecPolicy(value: string) {
    this._ipsecPolicy = value;
  }
  public resetIpsecPolicy() {
    this._ipsecPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPolicyInput() {
    return this._ipsecPolicy;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // source_address - computed: false, optional: false, required: true
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_address: cdktf.stringToTerraform(this._destinationAddress),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.numberToTerraform(this._ipProtocol),
      ipsec_policy: cdktf.stringToTerraform(this._ipsecPolicy),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      source_port: cdktf.numberToTerraform(this._sourcePort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address: {
        value: cdktf.stringToHclTerraform(this._destinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.numberToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_policy: {
        value: cdktf.stringToHclTerraform(this._ipsecPolicy),
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
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.numberToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
