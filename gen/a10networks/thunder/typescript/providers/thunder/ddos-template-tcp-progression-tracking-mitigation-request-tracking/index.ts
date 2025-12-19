// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the maximum idle time before the first request (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#first_request_max_time DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#first_request_max_time}
  */
  readonly firstRequestMaxTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#id DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#progression_tracking_req_action DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#progression_tracking_req_action}
  */
  readonly progressionTrackingReqAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#progression_tracking_req_action_list_name DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#progression_tracking_req_action_list_name}
  */
  readonly progressionTrackingReqActionListName?: string;
  /**
  * 'enable-check': Enable General Progression Tracking per Request Response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#progression_tracking_req_enabled DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#progression_tracking_req_enabled}
  */
  readonly progressionTrackingReqEnabled: string;
  /**
  * Set the maximum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#request_length_max DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#request_length_max}
  */
  readonly requestLengthMax?: number;
  /**
  * Set the minimum request length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#request_length_min DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#request_length_min}
  */
  readonly requestLengthMin?: number;
  /**
  * 'enable': Enable Request Response Model; 'disable': Disable Request Response Model;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#request_response_model DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#request_response_model}
  */
  readonly requestResponseModel?: string;
  /**
  * Set the maximum request to response time (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#request_to_response_max_time DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#request_to_response_max_time}
  */
  readonly requestToResponseMaxTime?: number;
  /**
  * Set the maximum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#response_length_max DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#response_length_max}
  */
  readonly responseLengthMax?: number;
  /**
  * Set the minimum response length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#response_length_min DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#response_length_min}
  */
  readonly responseLengthMin?: number;
  /**
  * Set the maximum response to request time (in unit of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#response_to_request_max_time DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#response_to_request_max_time}
  */
  readonly responseToRequestMaxTime?: number;
  /**
  * Tcp_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#tcp_name DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#tcp_name}
  */
  readonly tcpName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#uuid DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#violation DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA#violation}
  */
  readonly violation?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking thunder_ddos_template_tcp_progression_tracking_mitigation_request_tracking}
*/
export class DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_tcp_progression_tracking_mitigation_request_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA to import
  * @param importFromId The id of the existing DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateTcpProgressionTrackingMitigationRequestTrackingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_tcp_progression_tracking_mitigation_request_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_template_tcp_progression_tracking_mitigation_request_tracking thunder_ddos_template_tcp_progression_tracking_mitigation_request_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateTcpProgressionTrackingMitigationRequestTrackingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_tcp_progression_tracking_mitigation_request_tracking',
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
    this._firstRequestMaxTime = config.firstRequestMaxTime;
    this._id = config.id;
    this._progressionTrackingReqAction = config.progressionTrackingReqAction;
    this._progressionTrackingReqActionListName = config.progressionTrackingReqActionListName;
    this._progressionTrackingReqEnabled = config.progressionTrackingReqEnabled;
    this._requestLengthMax = config.requestLengthMax;
    this._requestLengthMin = config.requestLengthMin;
    this._requestResponseModel = config.requestResponseModel;
    this._requestToResponseMaxTime = config.requestToResponseMaxTime;
    this._responseLengthMax = config.responseLengthMax;
    this._responseLengthMin = config.responseLengthMin;
    this._responseToRequestMaxTime = config.responseToRequestMaxTime;
    this._tcpName = config.tcpName;
    this._uuid = config.uuid;
    this._violation = config.violation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // first_request_max_time - computed: false, optional: true, required: false
  private _firstRequestMaxTime?: number; 
  public get firstRequestMaxTime() {
    return this.getNumberAttribute('first_request_max_time');
  }
  public set firstRequestMaxTime(value: number) {
    this._firstRequestMaxTime = value;
  }
  public resetFirstRequestMaxTime() {
    this._firstRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstRequestMaxTimeInput() {
    return this._firstRequestMaxTime;
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

  // progression_tracking_req_action - computed: false, optional: true, required: false
  private _progressionTrackingReqAction?: string; 
  public get progressionTrackingReqAction() {
    return this.getStringAttribute('progression_tracking_req_action');
  }
  public set progressionTrackingReqAction(value: string) {
    this._progressionTrackingReqAction = value;
  }
  public resetProgressionTrackingReqAction() {
    this._progressionTrackingReqAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqActionInput() {
    return this._progressionTrackingReqAction;
  }

  // progression_tracking_req_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingReqActionListName?: string; 
  public get progressionTrackingReqActionListName() {
    return this.getStringAttribute('progression_tracking_req_action_list_name');
  }
  public set progressionTrackingReqActionListName(value: string) {
    this._progressionTrackingReqActionListName = value;
  }
  public resetProgressionTrackingReqActionListName() {
    this._progressionTrackingReqActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqActionListNameInput() {
    return this._progressionTrackingReqActionListName;
  }

  // progression_tracking_req_enabled - computed: false, optional: false, required: true
  private _progressionTrackingReqEnabled?: string; 
  public get progressionTrackingReqEnabled() {
    return this.getStringAttribute('progression_tracking_req_enabled');
  }
  public set progressionTrackingReqEnabled(value: string) {
    this._progressionTrackingReqEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingReqEnabledInput() {
    return this._progressionTrackingReqEnabled;
  }

  // request_length_max - computed: false, optional: true, required: false
  private _requestLengthMax?: number; 
  public get requestLengthMax() {
    return this.getNumberAttribute('request_length_max');
  }
  public set requestLengthMax(value: number) {
    this._requestLengthMax = value;
  }
  public resetRequestLengthMax() {
    this._requestLengthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLengthMaxInput() {
    return this._requestLengthMax;
  }

  // request_length_min - computed: false, optional: true, required: false
  private _requestLengthMin?: number; 
  public get requestLengthMin() {
    return this.getNumberAttribute('request_length_min');
  }
  public set requestLengthMin(value: number) {
    this._requestLengthMin = value;
  }
  public resetRequestLengthMin() {
    this._requestLengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLengthMinInput() {
    return this._requestLengthMin;
  }

  // request_response_model - computed: false, optional: true, required: false
  private _requestResponseModel?: string; 
  public get requestResponseModel() {
    return this.getStringAttribute('request_response_model');
  }
  public set requestResponseModel(value: string) {
    this._requestResponseModel = value;
  }
  public resetRequestResponseModel() {
    this._requestResponseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestResponseModelInput() {
    return this._requestResponseModel;
  }

  // request_to_response_max_time - computed: false, optional: true, required: false
  private _requestToResponseMaxTime?: number; 
  public get requestToResponseMaxTime() {
    return this.getNumberAttribute('request_to_response_max_time');
  }
  public set requestToResponseMaxTime(value: number) {
    this._requestToResponseMaxTime = value;
  }
  public resetRequestToResponseMaxTime() {
    this._requestToResponseMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestToResponseMaxTimeInput() {
    return this._requestToResponseMaxTime;
  }

  // response_length_max - computed: false, optional: true, required: false
  private _responseLengthMax?: number; 
  public get responseLengthMax() {
    return this.getNumberAttribute('response_length_max');
  }
  public set responseLengthMax(value: number) {
    this._responseLengthMax = value;
  }
  public resetResponseLengthMax() {
    this._responseLengthMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLengthMaxInput() {
    return this._responseLengthMax;
  }

  // response_length_min - computed: false, optional: true, required: false
  private _responseLengthMin?: number; 
  public get responseLengthMin() {
    return this.getNumberAttribute('response_length_min');
  }
  public set responseLengthMin(value: number) {
    this._responseLengthMin = value;
  }
  public resetResponseLengthMin() {
    this._responseLengthMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLengthMinInput() {
    return this._responseLengthMin;
  }

  // response_to_request_max_time - computed: false, optional: true, required: false
  private _responseToRequestMaxTime?: number; 
  public get responseToRequestMaxTime() {
    return this.getNumberAttribute('response_to_request_max_time');
  }
  public set responseToRequestMaxTime(value: number) {
    this._responseToRequestMaxTime = value;
  }
  public resetResponseToRequestMaxTime() {
    this._responseToRequestMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseToRequestMaxTimeInput() {
    return this._responseToRequestMaxTime;
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

  // violation - computed: false, optional: true, required: false
  private _violation?: number; 
  public get violation() {
    return this.getNumberAttribute('violation');
  }
  public set violation(value: number) {
    this._violation = value;
  }
  public resetViolation() {
    this._violation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationInput() {
    return this._violation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      first_request_max_time: cdktf.numberToTerraform(this._firstRequestMaxTime),
      id: cdktf.stringToTerraform(this._id),
      progression_tracking_req_action: cdktf.stringToTerraform(this._progressionTrackingReqAction),
      progression_tracking_req_action_list_name: cdktf.stringToTerraform(this._progressionTrackingReqActionListName),
      progression_tracking_req_enabled: cdktf.stringToTerraform(this._progressionTrackingReqEnabled),
      request_length_max: cdktf.numberToTerraform(this._requestLengthMax),
      request_length_min: cdktf.numberToTerraform(this._requestLengthMin),
      request_response_model: cdktf.stringToTerraform(this._requestResponseModel),
      request_to_response_max_time: cdktf.numberToTerraform(this._requestToResponseMaxTime),
      response_length_max: cdktf.numberToTerraform(this._responseLengthMax),
      response_length_min: cdktf.numberToTerraform(this._responseLengthMin),
      response_to_request_max_time: cdktf.numberToTerraform(this._responseToRequestMaxTime),
      tcp_name: cdktf.stringToTerraform(this._tcpName),
      uuid: cdktf.stringToTerraform(this._uuid),
      violation: cdktf.numberToTerraform(this._violation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      first_request_max_time: {
        value: cdktf.numberToHclTerraform(this._firstRequestMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_req_action: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingReqAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_req_action_list_name: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingReqActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_req_enabled: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingReqEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_length_max: {
        value: cdktf.numberToHclTerraform(this._requestLengthMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_length_min: {
        value: cdktf.numberToHclTerraform(this._requestLengthMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_response_model: {
        value: cdktf.stringToHclTerraform(this._requestResponseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_to_response_max_time: {
        value: cdktf.numberToHclTerraform(this._requestToResponseMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_length_max: {
        value: cdktf.numberToHclTerraform(this._responseLengthMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_length_min: {
        value: cdktf.numberToHclTerraform(this._responseLengthMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_to_request_max_time: {
        value: cdktf.numberToHclTerraform(this._responseToRequestMaxTime),
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
      violation: {
        value: cdktf.numberToHclTerraform(this._violation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
