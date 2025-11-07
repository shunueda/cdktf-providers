// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/agent_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Agent Key Name. Must be unique across WarpStream account. Must start with 'akn_' and contain underscores and alphanumeric characters only. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/agent_key#name AgentKey#name}
  */
  readonly name: string;
  /**
  * Virtual Cluster ID associated with the Agent Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/agent_key#virtual_cluster_id AgentKey#virtual_cluster_id}
  */
  readonly virtualClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/agent_key warpstream_agent_key}
*/
export class AgentKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_agent_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentKey to import
  * @param importFromId The id of the existing AgentKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/agent_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_agent_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.2.2/docs/resources/agent_key warpstream_agent_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentKeyConfig
  */
  public constructor(scope: Construct, id: string, config: AgentKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'warpstream_agent_key',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._virtualClusterId = config.virtualClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // virtual_cluster_id - computed: false, optional: false, required: true
  private _virtualClusterId?: string; 
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
  public set virtualClusterId(value: string) {
    this._virtualClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualClusterIdInput() {
    return this._virtualClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      virtual_cluster_id: cdktf.stringToTerraform(this._virtualClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_cluster_id: {
        value: cdktf.stringToHclTerraform(this._virtualClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
