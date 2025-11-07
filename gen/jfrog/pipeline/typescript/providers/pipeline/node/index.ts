// https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the node. Should be prefixed with the project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#friendly_name Node#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#id Node#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Node address for auto-initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#ip_address Node#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Determine auto or manual initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#is_auto_initialized Node#is_auto_initialized}
  */
  readonly isAutoInitialized: boolean | cdktf.IResolvable;
  /**
  * Set to true for dynamic node pool. Set to false for static node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#is_on_demand Node#is_on_demand}
  */
  readonly isOnDemand: boolean | cdktf.IResolvable;
  /**
  * Enable/disable the use of swap space to increase the amount of virtual memory available to the node. Not available to Windows node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#is_swap_enabled Node#is_swap_enabled}
  */
  readonly isSwapEnabled?: boolean | cdktf.IResolvable;
  /**
  * Id of the node pool where the node will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#node_pool_id Node#node_pool_id}
  */
  readonly nodePoolId: number;
  /**
  * Id of the project where the node will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#project_id Node#project_id}
  */
  readonly projectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node pipeline_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipeline_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Node resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Node to import
  * @param importFromId The id of the existing Node that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Node to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipeline_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/pipeline/1.2.4/docs/resources/node pipeline_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
    super(scope, id, {
      terraformResourceType: 'pipeline_node',
      terraformGeneratorMetadata: {
        providerName: 'pipeline',
        providerVersion: '1.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._isAutoInitialized = config.isAutoInitialized;
    this._isOnDemand = config.isOnDemand;
    this._isSwapEnabled = config.isSwapEnabled;
    this._nodePoolId = config.nodePoolId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_auto_initialized - computed: false, optional: false, required: true
  private _isAutoInitialized?: boolean | cdktf.IResolvable; 
  public get isAutoInitialized() {
    return this.getBooleanAttribute('is_auto_initialized');
  }
  public set isAutoInitialized(value: boolean | cdktf.IResolvable) {
    this._isAutoInitialized = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoInitializedInput() {
    return this._isAutoInitialized;
  }

  // is_on_demand - computed: false, optional: false, required: true
  private _isOnDemand?: boolean | cdktf.IResolvable; 
  public get isOnDemand() {
    return this.getBooleanAttribute('is_on_demand');
  }
  public set isOnDemand(value: boolean | cdktf.IResolvable) {
    this._isOnDemand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isOnDemandInput() {
    return this._isOnDemand;
  }

  // is_swap_enabled - computed: false, optional: true, required: false
  private _isSwapEnabled?: boolean | cdktf.IResolvable; 
  public get isSwapEnabled() {
    return this.getBooleanAttribute('is_swap_enabled');
  }
  public set isSwapEnabled(value: boolean | cdktf.IResolvable) {
    this._isSwapEnabled = value;
  }
  public resetIsSwapEnabled() {
    this._isSwapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSwapEnabledInput() {
    return this._isSwapEnabled;
  }

  // node_pool_id - computed: false, optional: false, required: true
  private _nodePoolId?: number; 
  public get nodePoolId() {
    return this.getNumberAttribute('node_pool_id');
  }
  public set nodePoolId(value: number) {
    this._nodePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolIdInput() {
    return this._nodePoolId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_auto_initialized: cdktf.booleanToTerraform(this._isAutoInitialized),
      is_on_demand: cdktf.booleanToTerraform(this._isOnDemand),
      is_swap_enabled: cdktf.booleanToTerraform(this._isSwapEnabled),
      node_pool_id: cdktf.numberToTerraform(this._nodePoolId),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_initialized: {
        value: cdktf.booleanToHclTerraform(this._isAutoInitialized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_on_demand: {
        value: cdktf.booleanToHclTerraform(this._isOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_swap_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSwapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_pool_id: {
        value: cdktf.numberToHclTerraform(this._nodePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
