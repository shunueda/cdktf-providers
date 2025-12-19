// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule_set_rule_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc#rule_set_rule_tmpl_name VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA#rule_set_rule_tmpl_name}
  */
  readonly ruleSetRuleTmplName: string;
  /**
  * Enable automatic packet-capture for SYN cookie verification failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc#syn_cookie_verification_failed VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA#syn_cookie_verification_failed}
  */
  readonly synCookieVerificationFailed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesRuleSetRuleTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_rule_set_rule_tmpl_trigger_stats_inc',
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
    this._id = config.id;
    this._ruleSetRuleTmplName = config.ruleSetRuleTmplName;
    this._synCookieVerificationFailed = config.synCookieVerificationFailed;
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

  // rule_set_rule_tmpl_name - computed: false, optional: false, required: true
  private _ruleSetRuleTmplName?: string; 
  public get ruleSetRuleTmplName() {
    return this.getStringAttribute('rule_set_rule_tmpl_name');
  }
  public set ruleSetRuleTmplName(value: string) {
    this._ruleSetRuleTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetRuleTmplNameInput() {
    return this._ruleSetRuleTmplName;
  }

  // syn_cookie_verification_failed - computed: false, optional: true, required: false
  private _synCookieVerificationFailed?: number; 
  public get synCookieVerificationFailed() {
    return this.getNumberAttribute('syn_cookie_verification_failed');
  }
  public set synCookieVerificationFailed(value: number) {
    this._synCookieVerificationFailed = value;
  }
  public resetSynCookieVerificationFailed() {
    this._synCookieVerificationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieVerificationFailedInput() {
    return this._synCookieVerificationFailed;
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
      rule_set_rule_tmpl_name: cdktf.stringToTerraform(this._ruleSetRuleTmplName),
      syn_cookie_verification_failed: cdktf.numberToTerraform(this._synCookieVerificationFailed),
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
      rule_set_rule_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._ruleSetRuleTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syn_cookie_verification_failed: {
        value: cdktf.numberToHclTerraform(this._synCookieVerificationFailed),
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
