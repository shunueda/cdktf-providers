// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionAgentSflowAConfig extends cdktf.TerraformMetaArguments {
  /**
  * AgentName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow#agent_name DdosDetectionAgentSflowA#agent_name}
  */
  readonly agentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow#id DdosDetectionAgentSflowA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable sflow packet samples collection(default); 'disable': Disable sflow packet samples collection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow#sflow_pkt_samples_collection DdosDetectionAgentSflowA#sflow_pkt_samples_collection}
  */
  readonly sflowPktSamplesCollection?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow#uuid DdosDetectionAgentSflowA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow thunder_ddos_detection_agent_sflow}
*/
export class DdosDetectionAgentSflowA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_agent_sflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionAgentSflowA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionAgentSflowA to import
  * @param importFromId The id of the existing DdosDetectionAgentSflowA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionAgentSflowA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_agent_sflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent_sflow thunder_ddos_detection_agent_sflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionAgentSflowAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionAgentSflowAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_agent_sflow',
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
    this._agentName = config.agentName;
    this._id = config.id;
    this._sflowPktSamplesCollection = config.sflowPktSamplesCollection;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sflow_pkt_samples_collection - computed: false, optional: true, required: false
  private _sflowPktSamplesCollection?: string; 
  public get sflowPktSamplesCollection() {
    return this.getStringAttribute('sflow_pkt_samples_collection');
  }
  public set sflowPktSamplesCollection(value: string) {
    this._sflowPktSamplesCollection = value;
  }
  public resetSflowPktSamplesCollection() {
    this._sflowPktSamplesCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPktSamplesCollectionInput() {
    return this._sflowPktSamplesCollection;
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
      agent_name: cdktf.stringToTerraform(this._agentName),
      id: cdktf.stringToTerraform(this._id),
      sflow_pkt_samples_collection: cdktf.stringToTerraform(this._sflowPktSamplesCollection),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      sflow_pkt_samples_collection: {
        value: cdktf.stringToHclTerraform(this._sflowPktSamplesCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
