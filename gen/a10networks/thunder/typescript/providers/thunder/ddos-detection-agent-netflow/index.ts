// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionAgentNetflowAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure agent's flow active timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#active_timeout DdosDetectionAgentNetflowA#active_timeout}
  */
  readonly activeTimeout?: number;
  /**
  * AgentName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#agent_name DdosDetectionAgentNetflowA#agent_name}
  */
  readonly agentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#id DdosDetectionAgentNetflowA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure agent's flow inactive timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#inactive_timeout DdosDetectionAgentNetflowA#inactive_timeout}
  */
  readonly inactiveTimeout?: number;
  /**
  * 'enable': Enable Netflow flow samples collection(default); 'disable': Disable Netflow flow samples collection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#netflow_samples_collection DdosDetectionAgentNetflowA#netflow_samples_collection}
  */
  readonly netflowSamplesCollection?: string;
  /**
  * Configure agent's netflow sampling rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#netflow_sampling_rate DdosDetectionAgentNetflowA#netflow_sampling_rate}
  */
  readonly netflowSamplingRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#uuid DdosDetectionAgentNetflowA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow thunder_ddos_detection_agent_netflow}
*/
export class DdosDetectionAgentNetflowA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_agent_netflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionAgentNetflowA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionAgentNetflowA to import
  * @param importFromId The id of the existing DdosDetectionAgentNetflowA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionAgentNetflowA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_agent_netflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_netflow thunder_ddos_detection_agent_netflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionAgentNetflowAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionAgentNetflowAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_agent_netflow',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeTimeout = config.activeTimeout;
    this._agentName = config.agentName;
    this._id = config.id;
    this._inactiveTimeout = config.inactiveTimeout;
    this._netflowSamplesCollection = config.netflowSamplesCollection;
    this._netflowSamplingRate = config.netflowSamplingRate;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_timeout - computed: false, optional: true, required: false
  private _activeTimeout?: number; 
  public get activeTimeout() {
    return this.getNumberAttribute('active_timeout');
  }
  public set activeTimeout(value: number) {
    this._activeTimeout = value;
  }
  public resetActiveTimeout() {
    this._activeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeoutInput() {
    return this._activeTimeout;
  }

  // agent_name - computed: false, optional: false, required: true
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
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

  // inactive_timeout - computed: false, optional: true, required: false
  private _inactiveTimeout?: number; 
  public get inactiveTimeout() {
    return this.getNumberAttribute('inactive_timeout');
  }
  public set inactiveTimeout(value: number) {
    this._inactiveTimeout = value;
  }
  public resetInactiveTimeout() {
    this._inactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveTimeoutInput() {
    return this._inactiveTimeout;
  }

  // netflow_samples_collection - computed: false, optional: true, required: false
  private _netflowSamplesCollection?: string; 
  public get netflowSamplesCollection() {
    return this.getStringAttribute('netflow_samples_collection');
  }
  public set netflowSamplesCollection(value: string) {
    this._netflowSamplesCollection = value;
  }
  public resetNetflowSamplesCollection() {
    this._netflowSamplesCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplesCollectionInput() {
    return this._netflowSamplesCollection;
  }

  // netflow_sampling_rate - computed: false, optional: true, required: false
  private _netflowSamplingRate?: number; 
  public get netflowSamplingRate() {
    return this.getNumberAttribute('netflow_sampling_rate');
  }
  public set netflowSamplingRate(value: number) {
    this._netflowSamplingRate = value;
  }
  public resetNetflowSamplingRate() {
    this._netflowSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplingRateInput() {
    return this._netflowSamplingRate;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_timeout: cdktf.numberToTerraform(this._activeTimeout),
      agent_name: cdktf.stringToTerraform(this._agentName),
      id: cdktf.stringToTerraform(this._id),
      inactive_timeout: cdktf.numberToTerraform(this._inactiveTimeout),
      netflow_samples_collection: cdktf.stringToTerraform(this._netflowSamplesCollection),
      netflow_sampling_rate: cdktf.numberToTerraform(this._netflowSamplingRate),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_timeout: {
        value: cdktf.numberToHclTerraform(this._activeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      agent_name: {
        value: cdktf.stringToHclTerraform(this._agentName),
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
      inactive_timeout: {
        value: cdktf.numberToHclTerraform(this._inactiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_samples_collection: {
        value: cdktf.stringToHclTerraform(this._netflowSamplesCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_sampling_rate: {
        value: cdktf.numberToHclTerraform(this._netflowSamplingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
