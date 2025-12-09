// https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_node#id DataProxmoxVirtualEnvironmentNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The node name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_node#node_name DataProxmoxVirtualEnvironmentNode#node_name}
  */
  readonly nodeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_node proxmox_virtual_environment_node}
*/
export class DataProxmoxVirtualEnvironmentNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentNode to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.89.1/docs/data-sources/virtual_environment_node proxmox_virtual_environment_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_node',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.89.1',
        providerVersionConstraint: '0.89.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._nodeName = config.nodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // cpu_model - computed: true, optional: false, required: false
  public get cpuModel() {
    return this.getStringAttribute('cpu_model');
  }

  // cpu_sockets - computed: true, optional: false, required: false
  public get cpuSockets() {
    return this.getNumberAttribute('cpu_sockets');
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

  // memory_available - computed: true, optional: false, required: false
  public get memoryAvailable() {
    return this.getNumberAttribute('memory_available');
  }

  // memory_total - computed: true, optional: false, required: false
  public get memoryTotal() {
    return this.getNumberAttribute('memory_total');
  }

  // memory_used - computed: true, optional: false, required: false
  public get memoryUsed() {
    return this.getNumberAttribute('memory_used');
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getNumberAttribute('uptime');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      node_name: cdktf.stringToTerraform(this._nodeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
