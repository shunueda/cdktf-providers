// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtPolicyGatewayInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#description DataNsxtPolicyGatewayInterface#description}
  */
  readonly description?: string;
  /**
  * Display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#display_name DataNsxtPolicyGatewayInterface#display_name}
  */
  readonly displayName?: string;
  /**
  * The path of the edge cluster connected to the gateway linked to this interface. This is exported only for Tier0 gateways
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#edge_cluster_path DataNsxtPolicyGatewayInterface#edge_cluster_path}
  */
  readonly edgeClusterPath?: string;
  /**
  * The name of the gateway to which interface is linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#gateway_path DataNsxtPolicyGatewayInterface#gateway_path}
  */
  readonly gatewayPath?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#id DataNsxtPolicyGatewayInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy path for segment to be connected with the Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#segment_path DataNsxtPolicyGatewayInterface#segment_path}
  */
  readonly segmentPath?: string;
  /**
  * The name of the locale service of the gateway to which interface is linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#service_path DataNsxtPolicyGatewayInterface#service_path}
  */
  readonly servicePath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface nsxt_policy_gateway_interface}
*/
export class DataNsxtPolicyGatewayInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_gateway_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtPolicyGatewayInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtPolicyGatewayInterface to import
  * @param importFromId The id of the existing DataNsxtPolicyGatewayInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtPolicyGatewayInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_gateway_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface nsxt_policy_gateway_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtPolicyGatewayInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsxtPolicyGatewayInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_gateway_interface',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._displayName = config.displayName;
    this._edgeClusterPath = config.edgeClusterPath;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._segmentPath = config.segmentPath;
    this._servicePath = config.servicePath;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // edge_cluster_path - computed: false, optional: true, required: false
  private _edgeClusterPath?: string; 
  public get edgeClusterPath() {
    return this.getStringAttribute('edge_cluster_path');
  }
  public set edgeClusterPath(value: string) {
    this._edgeClusterPath = value;
  }
  public resetEdgeClusterPath() {
    this._edgeClusterPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterPathInput() {
    return this._edgeClusterPath;
  }

  // gateway_path - computed: false, optional: true, required: false
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  public resetGatewayPath() {
    this._gatewayPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // segment_path - computed: false, optional: true, required: false
  private _segmentPath?: string; 
  public get segmentPath() {
    return this.getStringAttribute('segment_path');
  }
  public set segmentPath(value: string) {
    this._segmentPath = value;
  }
  public resetSegmentPath() {
    this._segmentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPathInput() {
    return this._segmentPath;
  }

  // service_path - computed: false, optional: true, required: false
  private _servicePath?: string; 
  public get servicePath() {
    return this.getStringAttribute('service_path');
  }
  public set servicePath(value: string) {
    this._servicePath = value;
  }
  public resetServicePath() {
    this._servicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePathInput() {
    return this._servicePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      edge_cluster_path: cdktf.stringToTerraform(this._edgeClusterPath),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      segment_path: cdktf.stringToTerraform(this._segmentPath),
      service_path: cdktf.stringToTerraform(this._servicePath),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cluster_path: {
        value: cdktf.stringToHclTerraform(this._edgeClusterPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      segment_path: {
        value: cdktf.stringToHclTerraform(this._segmentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_path: {
        value: cdktf.stringToHclTerraform(this._servicePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
