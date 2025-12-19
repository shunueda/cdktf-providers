// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateTcpProgressionTrackingProfilingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling#id DdosTemplateTcpProgressionTrackingProfilingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable auto-config progression tracking learning for connection model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling#profiling_connection_life_model DdosTemplateTcpProgressionTrackingProfilingA#profiling_connection_life_model}
  */
  readonly profilingConnectionLifeModel?: number;
  /**
  * Enable auto-config progression tracking learning for request response model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling#profiling_request_response_model DdosTemplateTcpProgressionTrackingProfilingA#profiling_request_response_model}
  */
  readonly profilingRequestResponseModel?: number;
  /**
  * Enable auto-config progression tracking learning for time window model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling#profiling_time_window_model DdosTemplateTcpProgressionTrackingProfilingA#profiling_time_window_model}
  */
  readonly profilingTimeWindowModel?: number;
  /**
  * Tcp_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling#tcp_name DdosTemplateTcpProgressionTrackingProfilingA#tcp_name}
  */
  readonly tcpName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling#uuid DdosTemplateTcpProgressionTrackingProfilingA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling thunder_ddos_template_tcp_progression_tracking_profiling}
*/
export class DdosTemplateTcpProgressionTrackingProfilingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_tcp_progression_tracking_profiling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateTcpProgressionTrackingProfilingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateTcpProgressionTrackingProfilingA to import
  * @param importFromId The id of the existing DdosTemplateTcpProgressionTrackingProfilingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateTcpProgressionTrackingProfilingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_tcp_progression_tracking_profiling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_profiling thunder_ddos_template_tcp_progression_tracking_profiling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateTcpProgressionTrackingProfilingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateTcpProgressionTrackingProfilingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_tcp_progression_tracking_profiling',
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
    this._id = config.id;
    this._profilingConnectionLifeModel = config.profilingConnectionLifeModel;
    this._profilingRequestResponseModel = config.profilingRequestResponseModel;
    this._profilingTimeWindowModel = config.profilingTimeWindowModel;
    this._tcpName = config.tcpName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // profiling_connection_life_model - computed: false, optional: true, required: false
  private _profilingConnectionLifeModel?: number; 
  public get profilingConnectionLifeModel() {
    return this.getNumberAttribute('profiling_connection_life_model');
  }
  public set profilingConnectionLifeModel(value: number) {
    this._profilingConnectionLifeModel = value;
  }
  public resetProfilingConnectionLifeModel() {
    this._profilingConnectionLifeModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingConnectionLifeModelInput() {
    return this._profilingConnectionLifeModel;
  }

  // profiling_request_response_model - computed: false, optional: true, required: false
  private _profilingRequestResponseModel?: number; 
  public get profilingRequestResponseModel() {
    return this.getNumberAttribute('profiling_request_response_model');
  }
  public set profilingRequestResponseModel(value: number) {
    this._profilingRequestResponseModel = value;
  }
  public resetProfilingRequestResponseModel() {
    this._profilingRequestResponseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingRequestResponseModelInput() {
    return this._profilingRequestResponseModel;
  }

  // profiling_time_window_model - computed: false, optional: true, required: false
  private _profilingTimeWindowModel?: number; 
  public get profilingTimeWindowModel() {
    return this.getNumberAttribute('profiling_time_window_model');
  }
  public set profilingTimeWindowModel(value: number) {
    this._profilingTimeWindowModel = value;
  }
  public resetProfilingTimeWindowModel() {
    this._profilingTimeWindowModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilingTimeWindowModelInput() {
    return this._profilingTimeWindowModel;
  }

  // tcp_name - computed: false, optional: false, required: true
  private _tcpName?: string; 
  public get tcpName() {
    return this.getStringAttribute('tcp_name');
  }
  public set tcpName(value: string) {
    this._tcpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNameInput() {
    return this._tcpName;
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
      id: cdktf.stringToTerraform(this._id),
      profiling_connection_life_model: cdktf.numberToTerraform(this._profilingConnectionLifeModel),
      profiling_request_response_model: cdktf.numberToTerraform(this._profilingRequestResponseModel),
      profiling_time_window_model: cdktf.numberToTerraform(this._profilingTimeWindowModel),
      tcp_name: cdktf.stringToTerraform(this._tcpName),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      profiling_connection_life_model: {
        value: cdktf.numberToHclTerraform(this._profilingConnectionLifeModel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profiling_request_response_model: {
        value: cdktf.numberToHclTerraform(this._profilingRequestResponseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profiling_time_window_model: {
        value: cdktf.numberToHclTerraform(this._profilingTimeWindowModel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_name: {
        value: cdktf.stringToHclTerraform(this._tcpName),
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
