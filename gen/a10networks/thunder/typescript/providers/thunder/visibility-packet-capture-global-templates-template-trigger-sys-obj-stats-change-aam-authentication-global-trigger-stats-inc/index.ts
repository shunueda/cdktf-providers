// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Total Authorization failure number in aFleX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#aflex_authz_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#aflex_authz_fail}
  */
  readonly aflexAuthzFail?: number;
  /**
  * Enable automatic packet-capture for Total Authentication failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#authn_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#authn_failure}
  */
  readonly authnFailure?: number;
  /**
  * Enable automatic packet-capture for Total Authorization failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#authz_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#authz_failure}
  */
  readonly authzFailure?: number;
  /**
  * Enable automatic packet-capture for Total AAM Connect Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#connect_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#connect_failed}
  */
  readonly connectFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM Timer Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#create_timer_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#create_timer_failed}
  */
  readonly createTimerFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM DNS resolve failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#dns_resolve_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#dns_resolve_failed}
  */
  readonly dnsResolveFailed?: number;
  /**
  * Enable automatic packet-capture for Total AAM Get Socket Option Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#get_socket_option_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#get_socket_option_failed}
  */
  readonly fetchSocketOptionFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Total Authentication Request Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#misses VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#misses}
  */
  readonly misses?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Total AAM Open Socket Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#open_socket_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#open_socket_failed}
  */
  readonly openSocketFailed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthenticationGlobalTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_authentication_global_trigger_stats_inc',
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
    this._aflexAuthzFail = config.aflexAuthzFail;
    this._authnFailure = config.authnFailure;
    this._authzFailure = config.authzFailure;
    this._connectFailed = config.connectFailed;
    this._createTimerFailed = config.createTimerFailed;
    this._dnsResolveFailed = config.dnsResolveFailed;
    this._getSocketOptionFailed = config.fetchSocketOptionFailed;
    this._id = config.id;
    this._misses = config.misses;
    this._name = config.name;
    this._openSocketFailed = config.openSocketFailed;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aflex_authz_fail - computed: false, optional: true, required: false
  private _aflexAuthzFail?: number; 
  public get aflexAuthzFail() {
    return this.getNumberAttribute('aflex_authz_fail');
  }
  public set aflexAuthzFail(value: number) {
    this._aflexAuthzFail = value;
  }
  public resetAflexAuthzFail() {
    this._aflexAuthzFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzFailInput() {
    return this._aflexAuthzFail;
  }

  // authn_failure - computed: false, optional: true, required: false
  private _authnFailure?: number; 
  public get authnFailure() {
    return this.getNumberAttribute('authn_failure');
  }
  public set authnFailure(value: number) {
    this._authnFailure = value;
  }
  public resetAuthnFailure() {
    this._authnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnFailureInput() {
    return this._authnFailure;
  }

  // authz_failure - computed: false, optional: true, required: false
  private _authzFailure?: number; 
  public get authzFailure() {
    return this.getNumberAttribute('authz_failure');
  }
  public set authzFailure(value: number) {
    this._authzFailure = value;
  }
  public resetAuthzFailure() {
    this._authzFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzFailureInput() {
    return this._authzFailure;
  }

  // connect_failed - computed: false, optional: true, required: false
  private _connectFailed?: number; 
  public get connectFailed() {
    return this.getNumberAttribute('connect_failed');
  }
  public set connectFailed(value: number) {
    this._connectFailed = value;
  }
  public resetConnectFailed() {
    this._connectFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectFailedInput() {
    return this._connectFailed;
  }

  // create_timer_failed - computed: false, optional: true, required: false
  private _createTimerFailed?: number; 
  public get createTimerFailed() {
    return this.getNumberAttribute('create_timer_failed');
  }
  public set createTimerFailed(value: number) {
    this._createTimerFailed = value;
  }
  public resetCreateTimerFailed() {
    this._createTimerFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimerFailedInput() {
    return this._createTimerFailed;
  }

  // dns_resolve_failed - computed: false, optional: true, required: false
  private _dnsResolveFailed?: number; 
  public get dnsResolveFailed() {
    return this.getNumberAttribute('dns_resolve_failed');
  }
  public set dnsResolveFailed(value: number) {
    this._dnsResolveFailed = value;
  }
  public resetDnsResolveFailed() {
    this._dnsResolveFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolveFailedInput() {
    return this._dnsResolveFailed;
  }

  // get_socket_option_failed - computed: false, optional: true, required: false
  private _getSocketOptionFailed?: number; 
  public get fetchSocketOptionFailed() {
    return this.getNumberAttribute('get_socket_option_failed');
  }
  public set fetchSocketOptionFailed(value: number) {
    this._getSocketOptionFailed = value;
  }
  public resetFetchSocketOptionFailed() {
    this._getSocketOptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSocketOptionFailedInput() {
    return this._getSocketOptionFailed;
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

  // misses - computed: false, optional: true, required: false
  private _misses?: number; 
  public get misses() {
    return this.getNumberAttribute('misses');
  }
  public set misses(value: number) {
    this._misses = value;
  }
  public resetMisses() {
    this._misses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missesInput() {
    return this._misses;
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

  // open_socket_failed - computed: false, optional: true, required: false
  private _openSocketFailed?: number; 
  public get openSocketFailed() {
    return this.getNumberAttribute('open_socket_failed');
  }
  public set openSocketFailed(value: number) {
    this._openSocketFailed = value;
  }
  public resetOpenSocketFailed() {
    this._openSocketFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSocketFailedInput() {
    return this._openSocketFailed;
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
      aflex_authz_fail: cdktf.numberToTerraform(this._aflexAuthzFail),
      authn_failure: cdktf.numberToTerraform(this._authnFailure),
      authz_failure: cdktf.numberToTerraform(this._authzFailure),
      connect_failed: cdktf.numberToTerraform(this._connectFailed),
      create_timer_failed: cdktf.numberToTerraform(this._createTimerFailed),
      dns_resolve_failed: cdktf.numberToTerraform(this._dnsResolveFailed),
      get_socket_option_failed: cdktf.numberToTerraform(this._getSocketOptionFailed),
      id: cdktf.stringToTerraform(this._id),
      misses: cdktf.numberToTerraform(this._misses),
      name: cdktf.stringToTerraform(this._name),
      open_socket_failed: cdktf.numberToTerraform(this._openSocketFailed),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aflex_authz_fail: {
        value: cdktf.numberToHclTerraform(this._aflexAuthzFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authn_failure: {
        value: cdktf.numberToHclTerraform(this._authnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authz_failure: {
        value: cdktf.numberToHclTerraform(this._authzFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connect_failed: {
        value: cdktf.numberToHclTerraform(this._connectFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_timer_failed: {
        value: cdktf.numberToHclTerraform(this._createTimerFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_resolve_failed: {
        value: cdktf.numberToHclTerraform(this._dnsResolveFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_socket_option_failed: {
        value: cdktf.numberToHclTerraform(this._getSocketOptionFailed),
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
      misses: {
        value: cdktf.numberToHclTerraform(this._misses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_socket_failed: {
        value: cdktf.numberToHclTerraform(this._openSocketFailed),
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
