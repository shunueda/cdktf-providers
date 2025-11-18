// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodebalancerNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The private IP Address and port (IP:PORT) where this backend can be reached. This must be a private IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#address NodebalancerNode#address}
  */
  readonly address: string;
  /**
  * The ID of the NodeBalancerConfig to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#config_id NodebalancerNode#config_id}
  */
  readonly configId: number;
  /**
  * The label for this node. This is for display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#label NodebalancerNode#label}
  */
  readonly label: string;
  /**
  * The mode this NodeBalancer should use when sending traffic to this backend. If set to `accept` this backend is accepting traffic. If set to `reject` this backend will not receive traffic. If set to `drain` this backend will not receive new traffic, but connections already pinned to it will continue to be routed to it. If set to `backup` this backend will only accept traffic if all other nodes are down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#mode NodebalancerNode#mode}
  */
  readonly mode?: string;
  /**
  * The ID of the NodeBalancer to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#nodebalancer_id NodebalancerNode#nodebalancer_id}
  */
  readonly nodebalancerId: number;
  /**
  * The ID of the VPC subnet for this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#subnet_id NodebalancerNode#subnet_id}
  */
  readonly subnetId?: number;
  /**
  * Used when picking a backend to serve a request and is not pinned to a single backend yet. Nodes with a higher weight will receive more traffic. (1-255)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#weight NodebalancerNode#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node linode_nodebalancer_node}
*/
export class NodebalancerNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_nodebalancer_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodebalancerNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodebalancerNode to import
  * @param importFromId The id of the existing NodebalancerNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodebalancerNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_nodebalancer_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/nodebalancer_node linode_nodebalancer_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodebalancerNodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodebalancerNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_nodebalancer_node',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._configId = config.configId;
    this._label = config.label;
    this._mode = config.mode;
    this._nodebalancerId = config.nodebalancerId;
    this._subnetId = config.subnetId;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // nodebalancer_id - computed: false, optional: false, required: true
  private _nodebalancerId?: number; 
  public get nodebalancerId() {
    return this.getNumberAttribute('nodebalancer_id');
  }
  public set nodebalancerId(value: number) {
    this._nodebalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancerIdInput() {
    return this._nodebalancerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_config_id - computed: true, optional: false, required: false
  public get vpcConfigId() {
    return this.getNumberAttribute('vpc_config_id');
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      config_id: cdktf.numberToTerraform(this._configId),
      label: cdktf.stringToTerraform(this._label),
      mode: cdktf.stringToTerraform(this._mode),
      nodebalancer_id: cdktf.numberToTerraform(this._nodebalancerId),
      subnet_id: cdktf.numberToTerraform(this._subnetId),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodebalancer_id: {
        value: cdktf.numberToHclTerraform(this._nodebalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.numberToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
