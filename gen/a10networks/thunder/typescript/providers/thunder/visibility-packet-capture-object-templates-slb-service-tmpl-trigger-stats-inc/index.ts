// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Response status 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#es_resp_300 VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#es_resp_300}
  */
  readonly esResp300?: number;
  /**
  * Enable automatic packet-capture for Response status 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#es_resp_400 VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#es_resp_400}
  */
  readonly esResp400?: number;
  /**
  * Enable automatic packet-capture for Response status 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#es_resp_500 VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#es_resp_500}
  */
  readonly esResp500?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Response status 3xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#resp_3xx VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#resp_3xx}
  */
  readonly resp3Xx?: number;
  /**
  * Enable automatic packet-capture for Response status 4xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#resp_4xx VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#resp_4xx}
  */
  readonly resp4Xx?: number;
  /**
  * Enable automatic packet-capture for Response status 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#resp_5xx VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#resp_5xx}
  */
  readonly resp5Xx?: number;
  /**
  * Slb_service_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#slb_service_tmpl_name VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#slb_service_tmpl_name}
  */
  readonly slbServiceTmplName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesSlbServiceTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_slb_service_tmpl_trigger_stats_inc',
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
    this._esResp300 = config.esResp300;
    this._esResp400 = config.esResp400;
    this._esResp500 = config.esResp500;
    this._id = config.id;
    this._resp3Xx = config.resp3Xx;
    this._resp4Xx = config.resp4Xx;
    this._resp5Xx = config.resp5Xx;
    this._slbServiceTmplName = config.slbServiceTmplName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // es_resp_300 - computed: false, optional: true, required: false
  private _esResp300?: number; 
  public get esResp300() {
    return this.getNumberAttribute('es_resp_300');
  }
  public set esResp300(value: number) {
    this._esResp300 = value;
  }
  public resetEsResp300() {
    this._esResp300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esResp300Input() {
    return this._esResp300;
  }

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

  // resp_3xx - computed: false, optional: true, required: false
  private _resp3Xx?: number; 
  public get resp3Xx() {
    return this.getNumberAttribute('resp_3xx');
  }
  public set resp3Xx(value: number) {
    this._resp3Xx = value;
  }
  public resetResp3Xx() {
    this._resp3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp3XxInput() {
    return this._resp3Xx;
  }

  // resp_4xx - computed: false, optional: true, required: false
  private _resp4Xx?: number; 
  public get resp4Xx() {
    return this.getNumberAttribute('resp_4xx');
  }
  public set resp4Xx(value: number) {
    this._resp4Xx = value;
  }
  public resetResp4Xx() {
    this._resp4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp4XxInput() {
    return this._resp4Xx;
  }

  // resp_5xx - computed: false, optional: true, required: false
  private _resp5Xx?: number; 
  public get resp5Xx() {
    return this.getNumberAttribute('resp_5xx');
  }
  public set resp5Xx(value: number) {
    this._resp5Xx = value;
  }
  public resetResp5Xx() {
    this._resp5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resp5XxInput() {
    return this._resp5Xx;
  }

  // slb_service_tmpl_name - computed: false, optional: false, required: true
  private _slbServiceTmplName?: string; 
  public get slbServiceTmplName() {
    return this.getStringAttribute('slb_service_tmpl_name');
  }
  public set slbServiceTmplName(value: string) {
    this._slbServiceTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slbServiceTmplNameInput() {
    return this._slbServiceTmplName;
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
      es_resp_300: cdktf.numberToTerraform(this._esResp300),
      es_resp_400: cdktf.numberToTerraform(this._esResp400),
      es_resp_500: cdktf.numberToTerraform(this._esResp500),
      id: cdktf.stringToTerraform(this._id),
      resp_3xx: cdktf.numberToTerraform(this._resp3Xx),
      resp_4xx: cdktf.numberToTerraform(this._resp4Xx),
      resp_5xx: cdktf.numberToTerraform(this._resp5Xx),
      slb_service_tmpl_name: cdktf.stringToTerraform(this._slbServiceTmplName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      es_resp_300: {
        value: cdktf.numberToHclTerraform(this._esResp300),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resp_3xx: {
        value: cdktf.numberToHclTerraform(this._resp3Xx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resp_4xx: {
        value: cdktf.numberToHclTerraform(this._resp4Xx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resp_5xx: {
        value: cdktf.numberToHclTerraform(this._resp5Xx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_service_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._slbServiceTmplName),
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
