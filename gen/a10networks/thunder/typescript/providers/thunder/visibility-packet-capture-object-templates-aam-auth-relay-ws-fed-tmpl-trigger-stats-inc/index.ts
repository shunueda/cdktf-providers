// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_relay_ws_fed_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc#aam_auth_relay_ws_fed_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA#aam_auth_relay_ws_fed_tmpl_name}
  */
  readonly aamAuthRelayWsFedTmplName: string;
  /**
  * Enable automatic packet-capture for Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc#failure VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA#failure}
  */
  readonly failure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthRelayWsFedTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_relay_ws_fed_tmpl_trigger_stats_inc',
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
    this._aamAuthRelayWsFedTmplName = config.aamAuthRelayWsFedTmplName;
    this._failure = config.failure;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_relay_ws_fed_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthRelayWsFedTmplName?: string; 
  public get aamAuthRelayWsFedTmplName() {
    return this.getStringAttribute('aam_auth_relay_ws_fed_tmpl_name');
  }
  public set aamAuthRelayWsFedTmplName(value: string) {
    this._aamAuthRelayWsFedTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthRelayWsFedTmplNameInput() {
    return this._aamAuthRelayWsFedTmplName;
  }

  // failure - computed: false, optional: true, required: false
  private _failure?: number; 
  public get failure() {
    return this.getNumberAttribute('failure');
  }
  public set failure(value: number) {
    this._failure = value;
  }
  public resetFailure() {
    this._failure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure;
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
      aam_auth_relay_ws_fed_tmpl_name: cdktf.stringToTerraform(this._aamAuthRelayWsFedTmplName),
      failure: cdktf.numberToTerraform(this._failure),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_relay_ws_fed_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthRelayWsFedTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure: {
        value: cdktf.numberToHclTerraform(this._failure),
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
