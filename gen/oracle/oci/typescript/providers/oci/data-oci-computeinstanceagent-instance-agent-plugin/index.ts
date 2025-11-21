// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciComputeinstanceagentInstanceAgentPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#compartment_id DataOciComputeinstanceagentInstanceAgentPlugin#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#id DataOciComputeinstanceagentInstanceAgentPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugin#instanceagent_id}
  */
  readonly instanceagentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#plugin_name DataOciComputeinstanceagentInstanceAgentPlugin#plugin_name}
  */
  readonly pluginName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin oci_computeinstanceagent_instance_agent_plugin}
*/
export class DataOciComputeinstanceagentInstanceAgentPlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_computeinstanceagent_instance_agent_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAgentPlugin to import
  * @param importFromId The id of the existing DataOciComputeinstanceagentInstanceAgentPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAgentPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_computeinstanceagent_instance_agent_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/computeinstanceagent_instance_agent_plugin oci_computeinstanceagent_instance_agent_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciComputeinstanceagentInstanceAgentPluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciComputeinstanceagentInstanceAgentPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_computeinstanceagent_instance_agent_plugin',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._instanceagentId = config.instanceagentId;
    this._pluginName = config.pluginName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // instanceagent_id - computed: false, optional: false, required: true
  private _instanceagentId?: string; 
  public get instanceagentId() {
    return this.getStringAttribute('instanceagent_id');
  }
  public set instanceagentId(value: string) {
    this._instanceagentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceagentIdInput() {
    return this._instanceagentId;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_last_updated_utc - computed: true, optional: false, required: false
  public get timeLastUpdatedUtc() {
    return this.getStringAttribute('time_last_updated_utc');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      instanceagent_id: cdktf.stringToTerraform(this._instanceagentId),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      instanceagent_id: {
        value: cdktf.stringToHclTerraform(this._instanceagentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_name: {
        value: cdktf.stringToHclTerraform(this._pluginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
