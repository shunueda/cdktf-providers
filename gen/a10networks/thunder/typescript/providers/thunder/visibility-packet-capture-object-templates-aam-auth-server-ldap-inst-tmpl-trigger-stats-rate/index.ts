// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Admin Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#admin_bind_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#admin_bind_failure}
  */
  readonly adminBindFailure?: number;
  /**
  * Enable automatic packet-capture for Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#authorize_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Enable automatic packet-capture for User Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#bind_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#bind_failure}
  */
  readonly bindFailure?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#name VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#other_error}
  */
  readonly otherError?: number;
  /**
  * Enable automatic packet-capture for Password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#pw_change_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#pw_change_failure}
  */
  readonly pwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Search Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#search_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#search_failure}
  */
  readonly searchFailure?: number;
  /**
  * Enable automatic packet-capture for TLS/SSL Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#ssl_session_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#ssl_session_failure}
  */
  readonly sslSessionFailure?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#timeout_error}
  */
  readonly timeoutError?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServerLdapInstTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_server_ldap_inst_tmpl_trigger_stats_rate',
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
    this._adminBindFailure = config.adminBindFailure;
    this._authorizeFailure = config.authorizeFailure;
    this._bindFailure = config.bindFailure;
    this._duration = config.duration;
    this._id = config.id;
    this._name = config.name;
    this._otherError = config.otherError;
    this._pwChangeFailure = config.pwChangeFailure;
    this._searchFailure = config.searchFailure;
    this._sslSessionFailure = config.sslSessionFailure;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._timeoutError = config.timeoutError;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_bind_failure - computed: false, optional: true, required: false
  private _adminBindFailure?: number; 
  public get adminBindFailure() {
    return this.getNumberAttribute('admin_bind_failure');
  }
  public set adminBindFailure(value: number) {
    this._adminBindFailure = value;
  }
  public resetAdminBindFailure() {
    this._adminBindFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminBindFailureInput() {
    return this._adminBindFailure;
  }

  // authorize_failure - computed: false, optional: true, required: false
  private _authorizeFailure?: number; 
  public get authorizeFailure() {
    return this.getNumberAttribute('authorize_failure');
  }
  public set authorizeFailure(value: number) {
    this._authorizeFailure = value;
  }
  public resetAuthorizeFailure() {
    this._authorizeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeFailureInput() {
    return this._authorizeFailure;
  }

  // bind_failure - computed: false, optional: true, required: false
  private _bindFailure?: number; 
  public get bindFailure() {
    return this.getNumberAttribute('bind_failure');
  }
  public set bindFailure(value: number) {
    this._bindFailure = value;
  }
  public resetBindFailure() {
    this._bindFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindFailureInput() {
    return this._bindFailure;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // other_error - computed: false, optional: true, required: false
  private _otherError?: number; 
  public get otherError() {
    return this.getNumberAttribute('other_error');
  }
  public set otherError(value: number) {
    this._otherError = value;
  }
  public resetOtherError() {
    this._otherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrorInput() {
    return this._otherError;
  }

  // pw_change_failure - computed: false, optional: true, required: false
  private _pwChangeFailure?: number; 
  public get pwChangeFailure() {
    return this.getNumberAttribute('pw_change_failure');
  }
  public set pwChangeFailure(value: number) {
    this._pwChangeFailure = value;
  }
  public resetPwChangeFailure() {
    this._pwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwChangeFailureInput() {
    return this._pwChangeFailure;
  }

  // search_failure - computed: false, optional: true, required: false
  private _searchFailure?: number; 
  public get searchFailure() {
    return this.getNumberAttribute('search_failure');
  }
  public set searchFailure(value: number) {
    this._searchFailure = value;
  }
  public resetSearchFailure() {
    this._searchFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFailureInput() {
    return this._searchFailure;
  }

  // ssl_session_failure - computed: false, optional: true, required: false
  private _sslSessionFailure?: number; 
  public get sslSessionFailure() {
    return this.getNumberAttribute('ssl_session_failure');
  }
  public set sslSessionFailure(value: number) {
    this._sslSessionFailure = value;
  }
  public resetSslSessionFailure() {
    this._sslSessionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionFailureInput() {
    return this._sslSessionFailure;
  }

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
  }

  // timeout_error - computed: false, optional: true, required: false
  private _timeoutError?: number; 
  public get timeoutError() {
    return this.getNumberAttribute('timeout_error');
  }
  public set timeoutError(value: number) {
    this._timeoutError = value;
  }
  public resetTimeoutError() {
    this._timeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutErrorInput() {
    return this._timeoutError;
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
      admin_bind_failure: cdktf.numberToTerraform(this._adminBindFailure),
      authorize_failure: cdktf.numberToTerraform(this._authorizeFailure),
      bind_failure: cdktf.numberToTerraform(this._bindFailure),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      other_error: cdktf.numberToTerraform(this._otherError),
      pw_change_failure: cdktf.numberToTerraform(this._pwChangeFailure),
      search_failure: cdktf.numberToTerraform(this._searchFailure),
      ssl_session_failure: cdktf.numberToTerraform(this._sslSessionFailure),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      timeout_error: cdktf.numberToTerraform(this._timeoutError),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_bind_failure: {
        value: cdktf.numberToHclTerraform(this._adminBindFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorize_failure: {
        value: cdktf.numberToHclTerraform(this._authorizeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bind_failure: {
        value: cdktf.numberToHclTerraform(this._bindFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_error: {
        value: cdktf.numberToHclTerraform(this._otherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pw_change_failure: {
        value: cdktf.numberToHclTerraform(this._pwChangeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_failure: {
        value: cdktf.numberToHclTerraform(this._searchFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_session_failure: {
        value: cdktf.numberToHclTerraform(this._sslSessionFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_error: {
        value: cdktf.numberToHclTerraform(this._timeoutError),
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
