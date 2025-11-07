// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbProtocolLimitAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Query Messages of Active RDT, default is 200 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#ardt_query GslbProtocolLimitA#ardt_query}
  */
  readonly ardtQuery?: number;
  /**
  * Response Messages of Active RDT, default is 1000 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#ardt_response GslbProtocolLimitA#ardt_response}
  */
  readonly ardtResponse?: number;
  /**
  * Sessions of Active RDT, default is 32768 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#ardt_session GslbProtocolLimitA#ardt_session}
  */
  readonly ardtSession?: number;
  /**
  * Response Messages of Connection Load, default is no limit (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#conn_response GslbProtocolLimitA#conn_response}
  */
  readonly connResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#id GslbProtocolLimitA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Amount of Messages, default is 10000 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#message GslbProtocolLimitA#message}
  */
  readonly message?: number;
  /**
  * Amount of Response Messages, default is 3600 (Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#response GslbProtocolLimitA#response}
  */
  readonly response?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#uuid GslbProtocolLimitA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit thunder_gslb_protocol_limit}
*/
export class GslbProtocolLimitA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_protocol_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbProtocolLimitA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbProtocolLimitA to import
  * @param importFromId The id of the existing GslbProtocolLimitA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbProtocolLimitA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_protocol_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_protocol_limit thunder_gslb_protocol_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbProtocolLimitAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GslbProtocolLimitAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_protocol_limit',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ardtQuery = config.ardtQuery;
    this._ardtResponse = config.ardtResponse;
    this._ardtSession = config.ardtSession;
    this._connResponse = config.connResponse;
    this._id = config.id;
    this._message = config.message;
    this._response = config.response;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ardt_query - computed: false, optional: true, required: false
  private _ardtQuery?: number; 
  public get ardtQuery() {
    return this.getNumberAttribute('ardt_query');
  }
  public set ardtQuery(value: number) {
    this._ardtQuery = value;
  }
  public resetArdtQuery() {
    this._ardtQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ardtQueryInput() {
    return this._ardtQuery;
  }

  // ardt_response - computed: false, optional: true, required: false
  private _ardtResponse?: number; 
  public get ardtResponse() {
    return this.getNumberAttribute('ardt_response');
  }
  public set ardtResponse(value: number) {
    this._ardtResponse = value;
  }
  public resetArdtResponse() {
    this._ardtResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ardtResponseInput() {
    return this._ardtResponse;
  }

  // ardt_session - computed: false, optional: true, required: false
  private _ardtSession?: number; 
  public get ardtSession() {
    return this.getNumberAttribute('ardt_session');
  }
  public set ardtSession(value: number) {
    this._ardtSession = value;
  }
  public resetArdtSession() {
    this._ardtSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ardtSessionInput() {
    return this._ardtSession;
  }

  // conn_response - computed: false, optional: true, required: false
  private _connResponse?: number; 
  public get connResponse() {
    return this.getNumberAttribute('conn_response');
  }
  public set connResponse(value: number) {
    this._connResponse = value;
  }
  public resetConnResponse() {
    this._connResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connResponseInput() {
    return this._connResponse;
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

  // message - computed: false, optional: true, required: false
  private _message?: number; 
  public get message() {
    return this.getNumberAttribute('message');
  }
  public set message(value: number) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // response - computed: false, optional: true, required: false
  private _response?: number; 
  public get response() {
    return this.getNumberAttribute('response');
  }
  public set response(value: number) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
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
      ardt_query: cdktf.numberToTerraform(this._ardtQuery),
      ardt_response: cdktf.numberToTerraform(this._ardtResponse),
      ardt_session: cdktf.numberToTerraform(this._ardtSession),
      conn_response: cdktf.numberToTerraform(this._connResponse),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.numberToTerraform(this._message),
      response: cdktf.numberToTerraform(this._response),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ardt_query: {
        value: cdktf.numberToHclTerraform(this._ardtQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ardt_response: {
        value: cdktf.numberToHclTerraform(this._ardtResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ardt_session: {
        value: cdktf.numberToHclTerraform(this._ardtSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_response: {
        value: cdktf.numberToHclTerraform(this._connResponse),
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
      message: {
        value: cdktf.numberToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response: {
        value: cdktf.numberToHclTerraform(this._response),
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
