// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Response status 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc#es_resp_400 VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA#es_resp_400}
  */
  readonly esResp400?: number;
  /**
  * Enable automatic packet-capture for Response status 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc#es_resp_500 VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA#es_resp_500}
  */
  readonly esResp500?: number;
  /**
  * Enable automatic packet-capture for Total non-http response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc#es_resp_invalid_http VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA#es_resp_invalid_http}
  */
  readonly esRespInvalidHttp?: number;
  /**
  * Fw_server_port_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc#fw_server_port_tmpl_name VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA#fw_server_port_tmpl_name}
  */
  readonly fwServerPortTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesFwServerPortTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_fw_server_port_tmpl_trigger_stats_inc',
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
    this._esResp400 = config.esResp400;
    this._esResp500 = config.esResp500;
    this._esRespInvalidHttp = config.esRespInvalidHttp;
    this._fwServerPortTmplName = config.fwServerPortTmplName;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // es_resp_400 - computed: false, optional: true, required: false
  private _esResp400?: number; 
  public get esResp400() {
    return this.getNumberAttribute('es_resp_400');
  }
  public set esResp400(value: number) {
    this._esResp400 = value;
  }
  public resetEsResp400() {
    this._esResp400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp400Input() {
    return this._esResp400;
  }

  // es_resp_500 - computed: false, optional: true, required: false
  private _esResp500?: number; 
  public get esResp500() {
    return this.getNumberAttribute('es_resp_500');
  }
  public set esResp500(value: number) {
    this._esResp500 = value;
  }
  public resetEsResp500() {
    this._esResp500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp500Input() {
    return this._esResp500;
  }

  // es_resp_invalid_http - computed: false, optional: true, required: false
  private _esRespInvalidHttp?: number; 
  public get esRespInvalidHttp() {
    return this.getNumberAttribute('es_resp_invalid_http');
  }
  public set esRespInvalidHttp(value: number) {
    this._esRespInvalidHttp = value;
  }
  public resetEsRespInvalidHttp() {
    this._esRespInvalidHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esRespInvalidHttpInput() {
    return this._esRespInvalidHttp;
  }

  // fw_server_port_tmpl_name - computed: false, optional: false, required: true
  private _fwServerPortTmplName?: string; 
  public get fwServerPortTmplName() {
    return this.getStringAttribute('fw_server_port_tmpl_name');
  }
  public set fwServerPortTmplName(value: string) {
    this._fwServerPortTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fwServerPortTmplNameInput() {
    return this._fwServerPortTmplName;
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
      es_resp_400: cdktf.numberToTerraform(this._esResp400),
      es_resp_500: cdktf.numberToTerraform(this._esResp500),
      es_resp_invalid_http: cdktf.numberToTerraform(this._esRespInvalidHttp),
      fw_server_port_tmpl_name: cdktf.stringToTerraform(this._fwServerPortTmplName),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      es_resp_400: {
        value: cdktf.numberToHclTerraform(this._esResp400),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      es_resp_500: {
        value: cdktf.numberToHclTerraform(this._esResp500),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      es_resp_invalid_http: {
        value: cdktf.numberToHclTerraform(this._esRespInvalidHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fw_server_port_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._fwServerPortTmplName),
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
