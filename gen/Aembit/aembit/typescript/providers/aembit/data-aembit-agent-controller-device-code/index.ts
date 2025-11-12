// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/agent_controller_device_code
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitAgentControllerDeviceCodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the Agent Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/agent_controller_device_code#agent_controller_id DataAembitAgentControllerDeviceCode#agent_controller_id}
  */
  readonly agentControllerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/agent_controller_device_code aembit_agent_controller_device_code}
*/
export class DataAembitAgentControllerDeviceCode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_agent_controller_device_code";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitAgentControllerDeviceCode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitAgentControllerDeviceCode to import
  * @param importFromId The id of the existing DataAembitAgentControllerDeviceCode that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/agent_controller_device_code#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitAgentControllerDeviceCode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_agent_controller_device_code", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/agent_controller_device_code aembit_agent_controller_device_code} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitAgentControllerDeviceCodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAembitAgentControllerDeviceCodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_agent_controller_device_code',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentControllerId = config.agentControllerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_controller_id - computed: false, optional: false, required: true
  private _agentControllerId?: string; 
  public get agentControllerId() {
    return this.getStringAttribute('agent_controller_id');
  }
  public set agentControllerId(value: string) {
    this._agentControllerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentControllerIdInput() {
    return this._agentControllerId;
  }

  // device_code - computed: true, optional: false, required: false
  public get deviceCode() {
    return this.getStringAttribute('device_code');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_controller_id: cdktf.stringToTerraform(this._agentControllerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_controller_id: {
        value: cdktf.stringToHclTerraform(this._agentControllerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
