// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_logon_http_ins_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc#aam_auth_logon_http_ins_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA#aam_auth_logon_http_ins_tmpl_name}
  */
  readonly aamAuthLogonHttpInsTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for SPN Kerberos Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc#spn_krb_faiure VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA#spn_krb_faiure}
  */
  readonly spnKrbFaiure?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthLogonHttpInsTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_logon_http_ins_tmpl_trigger_stats_inc',
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
    this._aamAuthLogonHttpInsTmplName = config.aamAuthLogonHttpInsTmplName;
    this._id = config.id;
    this._spnKrbFaiure = config.spnKrbFaiure;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_logon_http_ins_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthLogonHttpInsTmplName?: string; 
  public get aamAuthLogonHttpInsTmplName() {
    return this.getStringAttribute('aam_auth_logon_http_ins_tmpl_name');
  }
  public set aamAuthLogonHttpInsTmplName(value: string) {
    this._aamAuthLogonHttpInsTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthLogonHttpInsTmplNameInput() {
    return this._aamAuthLogonHttpInsTmplName;
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

  // spn_krb_faiure - computed: false, optional: true, required: false
  private _spnKrbFaiure?: number; 
  public get spnKrbFaiure() {
    return this.getNumberAttribute('spn_krb_faiure');
  }
  public set spnKrbFaiure(value: number) {
    this._spnKrbFaiure = value;
  }
  public resetSpnKrbFaiure() {
    this._spnKrbFaiure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spnKrbFaiureInput() {
    return this._spnKrbFaiure;
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
      aam_auth_logon_http_ins_tmpl_name: cdktf.stringToTerraform(this._aamAuthLogonHttpInsTmplName),
      id: cdktf.stringToTerraform(this._id),
      spn_krb_faiure: cdktf.numberToTerraform(this._spnKrbFaiure),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_logon_http_ins_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthLogonHttpInsTmplName),
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
      spn_krb_faiure: {
        value: cdktf.numberToHclTerraform(this._spnKrbFaiure),
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
