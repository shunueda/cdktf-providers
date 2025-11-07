// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateSipMalformedSipAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#id DdosZoneTemplateSipMalformedSipA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'drop': Drop packets (Default); 'reset': Reset (sip-tcp) client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_action DdosZoneTemplateSipMalformedSipA#malformed_sip_action}
  */
  readonly malformedSipAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_action_list_name DdosZoneTemplateSipMalformedSipA#malformed_sip_action_list_name}
  */
  readonly malformedSipActionListName?: string;
  /**
  * Set the maximum call-id length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_call_id_max_length DdosZoneTemplateSipMalformedSipA#malformed_sip_call_id_max_length}
  */
  readonly malformedSipCallIdMaxLength?: number;
  /**
  * 'enable-check': Enable malformed SIP parameters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_check DdosZoneTemplateSipMalformedSipA#malformed_sip_check}
  */
  readonly malformedSipCheck?: string;
  /**
  * Set the maximum header name length. Default value is 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_max_header_name_length DdosZoneTemplateSipMalformedSipA#malformed_sip_max_header_name_length}
  */
  readonly malformedSipMaxHeaderNameLength?: number;
  /**
  * Set the maximum header value length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_max_header_value_length DdosZoneTemplateSipMalformedSipA#malformed_sip_max_header_value_length}
  */
  readonly malformedSipMaxHeaderValueLength?: number;
  /**
  * Set the maximum line size. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_max_line_size DdosZoneTemplateSipMalformedSipA#malformed_sip_max_line_size}
  */
  readonly malformedSipMaxLineSize?: number;
  /**
  * Set the maximum uri size. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_max_uri_length DdosZoneTemplateSipMalformedSipA#malformed_sip_max_uri_length}
  */
  readonly malformedSipMaxUriLength?: number;
  /**
  * Set the maxinum SDP content length. Default value is 32511
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#malformed_sip_sdp_max_length DdosZoneTemplateSipMalformedSipA#malformed_sip_sdp_max_length}
  */
  readonly malformedSipSdpMaxLength?: number;
  /**
  * SipTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#sip_tmpl_name DdosZoneTemplateSipMalformedSipA#sip_tmpl_name}
  */
  readonly sipTmplName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#uuid DdosZoneTemplateSipMalformedSipA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip thunder_ddos_zone_template_sip_malformed_sip}
*/
export class DdosZoneTemplateSipMalformedSipA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_sip_malformed_sip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateSipMalformedSipA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateSipMalformedSipA to import
  * @param importFromId The id of the existing DdosZoneTemplateSipMalformedSipA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateSipMalformedSipA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_sip_malformed_sip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_sip_malformed_sip thunder_ddos_zone_template_sip_malformed_sip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateSipMalformedSipAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateSipMalformedSipAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_sip_malformed_sip',
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
    this._id = config.id;
    this._malformedSipAction = config.malformedSipAction;
    this._malformedSipActionListName = config.malformedSipActionListName;
    this._malformedSipCallIdMaxLength = config.malformedSipCallIdMaxLength;
    this._malformedSipCheck = config.malformedSipCheck;
    this._malformedSipMaxHeaderNameLength = config.malformedSipMaxHeaderNameLength;
    this._malformedSipMaxHeaderValueLength = config.malformedSipMaxHeaderValueLength;
    this._malformedSipMaxLineSize = config.malformedSipMaxLineSize;
    this._malformedSipMaxUriLength = config.malformedSipMaxUriLength;
    this._malformedSipSdpMaxLength = config.malformedSipSdpMaxLength;
    this._sipTmplName = config.sipTmplName;
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

  // malformed_sip_action - computed: false, optional: true, required: false
  private _malformedSipAction?: string; 
  public get malformedSipAction() {
    return this.getStringAttribute('malformed_sip_action');
  }
  public set malformedSipAction(value: string) {
    this._malformedSipAction = value;
  }
  public resetMalformedSipAction() {
    this._malformedSipAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipActionInput() {
    return this._malformedSipAction;
  }

  // malformed_sip_action_list_name - computed: false, optional: true, required: false
  private _malformedSipActionListName?: string; 
  public get malformedSipActionListName() {
    return this.getStringAttribute('malformed_sip_action_list_name');
  }
  public set malformedSipActionListName(value: string) {
    this._malformedSipActionListName = value;
  }
  public resetMalformedSipActionListName() {
    this._malformedSipActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipActionListNameInput() {
    return this._malformedSipActionListName;
  }

  // malformed_sip_call_id_max_length - computed: false, optional: true, required: false
  private _malformedSipCallIdMaxLength?: number; 
  public get malformedSipCallIdMaxLength() {
    return this.getNumberAttribute('malformed_sip_call_id_max_length');
  }
  public set malformedSipCallIdMaxLength(value: number) {
    this._malformedSipCallIdMaxLength = value;
  }
  public resetMalformedSipCallIdMaxLength() {
    this._malformedSipCallIdMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipCallIdMaxLengthInput() {
    return this._malformedSipCallIdMaxLength;
  }

  // malformed_sip_check - computed: false, optional: true, required: false
  private _malformedSipCheck?: string; 
  public get malformedSipCheck() {
    return this.getStringAttribute('malformed_sip_check');
  }
  public set malformedSipCheck(value: string) {
    this._malformedSipCheck = value;
  }
  public resetMalformedSipCheck() {
    this._malformedSipCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipCheckInput() {
    return this._malformedSipCheck;
  }

  // malformed_sip_max_header_name_length - computed: false, optional: true, required: false
  private _malformedSipMaxHeaderNameLength?: number; 
  public get malformedSipMaxHeaderNameLength() {
    return this.getNumberAttribute('malformed_sip_max_header_name_length');
  }
  public set malformedSipMaxHeaderNameLength(value: number) {
    this._malformedSipMaxHeaderNameLength = value;
  }
  public resetMalformedSipMaxHeaderNameLength() {
    this._malformedSipMaxHeaderNameLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxHeaderNameLengthInput() {
    return this._malformedSipMaxHeaderNameLength;
  }

  // malformed_sip_max_header_value_length - computed: false, optional: true, required: false
  private _malformedSipMaxHeaderValueLength?: number; 
  public get malformedSipMaxHeaderValueLength() {
    return this.getNumberAttribute('malformed_sip_max_header_value_length');
  }
  public set malformedSipMaxHeaderValueLength(value: number) {
    this._malformedSipMaxHeaderValueLength = value;
  }
  public resetMalformedSipMaxHeaderValueLength() {
    this._malformedSipMaxHeaderValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxHeaderValueLengthInput() {
    return this._malformedSipMaxHeaderValueLength;
  }

  // malformed_sip_max_line_size - computed: false, optional: true, required: false
  private _malformedSipMaxLineSize?: number; 
  public get malformedSipMaxLineSize() {
    return this.getNumberAttribute('malformed_sip_max_line_size');
  }
  public set malformedSipMaxLineSize(value: number) {
    this._malformedSipMaxLineSize = value;
  }
  public resetMalformedSipMaxLineSize() {
    this._malformedSipMaxLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxLineSizeInput() {
    return this._malformedSipMaxLineSize;
  }

  // malformed_sip_max_uri_length - computed: false, optional: true, required: false
  private _malformedSipMaxUriLength?: number; 
  public get malformedSipMaxUriLength() {
    return this.getNumberAttribute('malformed_sip_max_uri_length');
  }
  public set malformedSipMaxUriLength(value: number) {
    this._malformedSipMaxUriLength = value;
  }
  public resetMalformedSipMaxUriLength() {
    this._malformedSipMaxUriLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipMaxUriLengthInput() {
    return this._malformedSipMaxUriLength;
  }

  // malformed_sip_sdp_max_length - computed: false, optional: true, required: false
  private _malformedSipSdpMaxLength?: number; 
  public get malformedSipSdpMaxLength() {
    return this.getNumberAttribute('malformed_sip_sdp_max_length');
  }
  public set malformedSipSdpMaxLength(value: number) {
    this._malformedSipSdpMaxLength = value;
  }
  public resetMalformedSipSdpMaxLength() {
    this._malformedSipSdpMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedSipSdpMaxLengthInput() {
    return this._malformedSipSdpMaxLength;
  }

  // sip_tmpl_name - computed: false, optional: false, required: true
  private _sipTmplName?: string; 
  public get sipTmplName() {
    return this.getStringAttribute('sip_tmpl_name');
  }
  public set sipTmplName(value: string) {
    this._sipTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTmplNameInput() {
    return this._sipTmplName;
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
      malformed_sip_action: cdktf.stringToTerraform(this._malformedSipAction),
      malformed_sip_action_list_name: cdktf.stringToTerraform(this._malformedSipActionListName),
      malformed_sip_call_id_max_length: cdktf.numberToTerraform(this._malformedSipCallIdMaxLength),
      malformed_sip_check: cdktf.stringToTerraform(this._malformedSipCheck),
      malformed_sip_max_header_name_length: cdktf.numberToTerraform(this._malformedSipMaxHeaderNameLength),
      malformed_sip_max_header_value_length: cdktf.numberToTerraform(this._malformedSipMaxHeaderValueLength),
      malformed_sip_max_line_size: cdktf.numberToTerraform(this._malformedSipMaxLineSize),
      malformed_sip_max_uri_length: cdktf.numberToTerraform(this._malformedSipMaxUriLength),
      malformed_sip_sdp_max_length: cdktf.numberToTerraform(this._malformedSipSdpMaxLength),
      sip_tmpl_name: cdktf.stringToTerraform(this._sipTmplName),
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
      malformed_sip_action: {
        value: cdktf.stringToHclTerraform(this._malformedSipAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_sip_action_list_name: {
        value: cdktf.stringToHclTerraform(this._malformedSipActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_sip_call_id_max_length: {
        value: cdktf.numberToHclTerraform(this._malformedSipCallIdMaxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_sip_check: {
        value: cdktf.stringToHclTerraform(this._malformedSipCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_sip_max_header_name_length: {
        value: cdktf.numberToHclTerraform(this._malformedSipMaxHeaderNameLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_sip_max_header_value_length: {
        value: cdktf.numberToHclTerraform(this._malformedSipMaxHeaderValueLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_sip_max_line_size: {
        value: cdktf.numberToHclTerraform(this._malformedSipMaxLineSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_sip_max_uri_length: {
        value: cdktf.numberToHclTerraform(this._malformedSipMaxUriLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_sip_sdp_max_length: {
        value: cdktf.numberToHclTerraform(this._malformedSipSdpMaxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sipTmplName),
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
