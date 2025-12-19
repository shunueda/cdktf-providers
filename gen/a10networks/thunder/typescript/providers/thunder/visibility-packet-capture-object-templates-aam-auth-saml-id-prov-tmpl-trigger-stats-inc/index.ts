// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_auth_saml_id_prov_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc#aam_auth_saml_id_prov_tmpl_name VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA#aam_auth_saml_id_prov_tmpl_name}
  */
  readonly aamAuthSamlIdProvTmplName: string;
  /**
  * Enable automatic packet-capture for ACS Fail Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc#acs_fail VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA#acs_fail}
  */
  readonly acsFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Metadata Update Fail Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc#md_fail VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA#md_fail}
  */
  readonly mdFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthSamlIdProvTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_saml_id_prov_tmpl_trigger_stats_inc',
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
    this._aamAuthSamlIdProvTmplName = config.aamAuthSamlIdProvTmplName;
    this._acsFail = config.acsFail;
    this._id = config.id;
    this._mdFail = config.mdFail;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_auth_saml_id_prov_tmpl_name - computed: false, optional: false, required: true
  private _aamAuthSamlIdProvTmplName?: string; 
  public get aamAuthSamlIdProvTmplName() {
    return this.getStringAttribute('aam_auth_saml_id_prov_tmpl_name');
  }
  public set aamAuthSamlIdProvTmplName(value: string) {
    this._aamAuthSamlIdProvTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamAuthSamlIdProvTmplNameInput() {
    return this._aamAuthSamlIdProvTmplName;
  }

  // acs_fail - computed: false, optional: true, required: false
  private _acsFail?: number; 
  public get acsFail() {
    return this.getNumberAttribute('acs_fail');
  }
  public set acsFail(value: number) {
    this._acsFail = value;
  }
  public resetAcsFail() {
    this._acsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsFailInput() {
    return this._acsFail;
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

  // md_fail - computed: false, optional: true, required: false
  private _mdFail?: number; 
  public get mdFail() {
    return this.getNumberAttribute('md_fail');
  }
  public set mdFail(value: number) {
    this._mdFail = value;
  }
  public resetMdFail() {
    this._mdFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdFailInput() {
    return this._mdFail;
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
      aam_auth_saml_id_prov_tmpl_name: cdktf.stringToTerraform(this._aamAuthSamlIdProvTmplName),
      acs_fail: cdktf.numberToTerraform(this._acsFail),
      id: cdktf.stringToTerraform(this._id),
      md_fail: cdktf.numberToTerraform(this._mdFail),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_auth_saml_id_prov_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamAuthSamlIdProvTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acs_fail: {
        value: cdktf.numberToHclTerraform(this._acsFail),
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
      md_fail: {
        value: cdktf.numberToHclTerraform(this._mdFail),
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
