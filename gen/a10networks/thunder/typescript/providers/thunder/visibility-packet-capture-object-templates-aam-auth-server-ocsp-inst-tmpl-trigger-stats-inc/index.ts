// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_server_ocsp_inst_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#aam_auth_server_ocsp_inst_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA#aam_auth_server_ocsp_inst_tmpl_name}
  */
  readonly aamAuthServerOcspInstTmplName: string;
  /**
  * Enable automatic packet-capture for Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#fail VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA#fail}
  */
  readonly fail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#stapling_fail VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA#stapling_fail}
  */
  readonly staplingFail?: number;
  /**
  * Enable automatic packet-capture for OCSP Stapling Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#stapling_timeout VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA#stapling_timeout}
  */
  readonly staplingTimeout?: number;
  /**
  * Enable automatic packet-capture for Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#timeout VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServerOcspInstTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_server_ocsp_inst_tmpl_trigger_stats_inc',
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
    this._aamAuthServerOcspInstTmplName = config.aamAuthServerOcspInstTmplName;
    this._fail = config.fail;
    this._id = config.id;
    this._staplingFail = config.staplingFail;
    this._staplingTimeout = config.staplingTimeout;
    this._timeout = config.timeout;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_server_ocsp_inst_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthServerOcspInstTmplName?: string; 
  public get aamAuthServerOcspInstTmplName() {
    return this.getStringAttribute('aam_auth_server_ocsp_inst_tmpl_name');
  }
  public set aamAuthServerOcspInstTmplName(value: string) {
    this._aamAuthServerOcspInstTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthServerOcspInstTmplNameInput() {
    return this._aamAuthServerOcspInstTmplName;
  }

  // fail - computed: false, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
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

  // stapling_fail - computed: false, optional: true, required: false
  private _staplingFail?: number; 
  public get staplingFail() {
    return this.getNumberAttribute('stapling_fail');
  }
  public set staplingFail(value: number) {
    this._staplingFail = value;
  }
  public resetStaplingFail() {
    this._staplingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingFailInput() {
    return this._staplingFail;
  }

  // stapling_timeout - computed: false, optional: true, required: false
  private _staplingTimeout?: number; 
  public get staplingTimeout() {
    return this.getNumberAttribute('stapling_timeout');
  }
  public set staplingTimeout(value: number) {
    this._staplingTimeout = value;
  }
  public resetStaplingTimeout() {
    this._staplingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingTimeoutInput() {
    return this._staplingTimeout;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
      aam_auth_server_ocsp_inst_tmpl_name: cdktf.stringToTerraform(this._aamAuthServerOcspInstTmplName),
      fail: cdktf.numberToTerraform(this._fail),
      id: cdktf.stringToTerraform(this._id),
      stapling_fail: cdktf.numberToTerraform(this._staplingFail),
      stapling_timeout: cdktf.numberToTerraform(this._staplingTimeout),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_server_ocsp_inst_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthServerOcspInstTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail: {
        value: cdktf.numberToHclTerraform(this._fail),
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
      stapling_fail: {
        value: cdktf.numberToHclTerraform(this._staplingFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stapling_timeout: {
        value: cdktf.numberToHclTerraform(this._staplingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
