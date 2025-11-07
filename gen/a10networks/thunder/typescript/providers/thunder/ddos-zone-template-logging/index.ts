// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Log action taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#enable_action_logging DdosZoneTemplateLogging#enable_action_logging}
  */
  readonly enableActionLogging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#id DdosZoneTemplateLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log in CEF format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#log_format_cef DdosZoneTemplateLogging#log_format_cef}
  */
  readonly logFormatCef?: number;
  /**
  * Customize log format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#log_format_custom DdosZoneTemplateLogging#log_format_custom}
  */
  readonly logFormatCustom?: string;
  /**
  * DDOS Logging Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#logging_tmpl_name DdosZoneTemplateLogging#logging_tmpl_name}
  */
  readonly loggingTmplName: string;
  /**
  * Show obj name instead of ip in the log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#use_obj_name DdosZoneTemplateLogging#use_obj_name}
  */
  readonly useObjName?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#user_tag DdosZoneTemplateLogging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#uuid DdosZoneTemplateLogging#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging thunder_ddos_zone_template_logging}
*/
export class DdosZoneTemplateLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateLogging to import
  * @param importFromId The id of the existing DdosZoneTemplateLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_zone_template_logging thunder_ddos_zone_template_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateLoggingConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateLoggingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_logging',
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
    this._enableActionLogging = config.enableActionLogging;
    this._id = config.id;
    this._logFormatCef = config.logFormatCef;
    this._logFormatCustom = config.logFormatCustom;
    this._loggingTmplName = config.loggingTmplName;
    this._useObjName = config.useObjName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_action_logging - computed: false, optional: true, required: false
  private _enableActionLogging?: number; 
  public get enableActionLogging() {
    return this.getNumberAttribute('enable_action_logging');
  }
  public set enableActionLogging(value: number) {
    this._enableActionLogging = value;
  }
  public resetEnableActionLogging() {
    this._enableActionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableActionLoggingInput() {
    return this._enableActionLogging;
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

  // log_format_cef - computed: false, optional: true, required: false
  private _logFormatCef?: number; 
  public get logFormatCef() {
    return this.getNumberAttribute('log_format_cef');
  }
  public set logFormatCef(value: number) {
    this._logFormatCef = value;
  }
  public resetLogFormatCef() {
    this._logFormatCef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatCefInput() {
    return this._logFormatCef;
  }

  // log_format_custom - computed: false, optional: true, required: false
  private _logFormatCustom?: string; 
  public get logFormatCustom() {
    return this.getStringAttribute('log_format_custom');
  }
  public set logFormatCustom(value: string) {
    this._logFormatCustom = value;
  }
  public resetLogFormatCustom() {
    this._logFormatCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatCustomInput() {
    return this._logFormatCustom;
  }

  // logging_tmpl_name - computed: false, optional: false, required: true
  private _loggingTmplName?: string; 
  public get loggingTmplName() {
    return this.getStringAttribute('logging_tmpl_name');
  }
  public set loggingTmplName(value: string) {
    this._loggingTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTmplNameInput() {
    return this._loggingTmplName;
  }

  // use_obj_name - computed: false, optional: true, required: false
  private _useObjName?: number; 
  public get useObjName() {
    return this.getNumberAttribute('use_obj_name');
  }
  public set useObjName(value: number) {
    this._useObjName = value;
  }
  public resetUseObjName() {
    this._useObjName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useObjNameInput() {
    return this._useObjName;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
      enable_action_logging: cdktf.numberToTerraform(this._enableActionLogging),
      id: cdktf.stringToTerraform(this._id),
      log_format_cef: cdktf.numberToTerraform(this._logFormatCef),
      log_format_custom: cdktf.stringToTerraform(this._logFormatCustom),
      logging_tmpl_name: cdktf.stringToTerraform(this._loggingTmplName),
      use_obj_name: cdktf.numberToTerraform(this._useObjName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_action_logging: {
        value: cdktf.numberToHclTerraform(this._enableActionLogging),
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
      log_format_cef: {
        value: cdktf.numberToHclTerraform(this._logFormatCef),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_format_custom: {
        value: cdktf.stringToHclTerraform(this._logFormatCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._loggingTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_obj_name: {
        value: cdktf.numberToHclTerraform(this._useObjName),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
