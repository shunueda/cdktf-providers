// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_service_group_mem_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc#aam_auth_service_group_mem_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA#aam_auth_service_group_mem_tmpl_name}
  */
  readonly aamAuthServiceGroupMemTmplName: string;
  /**
  * Enable automatic packet-capture for Current connection counter overflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc#curr_conn_overflow VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA#curr_conn_overflow}
  */
  readonly currConnOverflow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServiceGroupMemTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_service_group_mem_tmpl_trigger_stats_inc',
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
    this._aamAuthServiceGroupMemTmplName = config.aamAuthServiceGroupMemTmplName;
    this._currConnOverflow = config.currConnOverflow;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_service_group_mem_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthServiceGroupMemTmplName?: string; 
  public get aamAuthServiceGroupMemTmplName() {
    return this.getStringAttribute('aam_auth_service_group_mem_tmpl_name');
  }
  public set aamAuthServiceGroupMemTmplName(value: string) {
    this._aamAuthServiceGroupMemTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthServiceGroupMemTmplNameInput() {
    return this._aamAuthServiceGroupMemTmplName;
  }

  // curr_conn_overflow - computed: false, optional: true, required: false
  private _currConnOverflow?: number; 
  public get currConnOverflow() {
    return this.getNumberAttribute('curr_conn_overflow');
  }
  public set currConnOverflow(value: number) {
    this._currConnOverflow = value;
  }
  public resetCurrConnOverflow() {
    this._currConnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConnOverflowInput() {
    return this._currConnOverflow;
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
      aam_auth_service_group_mem_tmpl_name: cdktf.stringToTerraform(this._aamAuthServiceGroupMemTmplName),
      curr_conn_overflow: cdktf.numberToTerraform(this._currConnOverflow),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_service_group_mem_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthServiceGroupMemTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      curr_conn_overflow: {
        value: cdktf.numberToHclTerraform(this._currConnOverflow),
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
