// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileCaptchaBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#bot_bind_comment BotprofileCaptchaBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#bot_captcha_action BotprofileCaptchaBinding#bot_captcha_action}
  */
  readonly botCaptchaAction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#bot_captcha_enabled BotprofileCaptchaBinding#bot_captcha_enabled}
  */
  readonly botCaptchaEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#bot_captcha_url BotprofileCaptchaBinding#bot_captcha_url}
  */
  readonly botCaptchaUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#captcharesource BotprofileCaptchaBinding#captcharesource}
  */
  readonly captcharesource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#graceperiod BotprofileCaptchaBinding#graceperiod}
  */
  readonly graceperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#id BotprofileCaptchaBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#logmessage BotprofileCaptchaBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#muteperiod BotprofileCaptchaBinding#muteperiod}
  */
  readonly muteperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#name BotprofileCaptchaBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#requestsizelimit BotprofileCaptchaBinding#requestsizelimit}
  */
  readonly requestsizelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#retryattempts BotprofileCaptchaBinding#retryattempts}
  */
  readonly retryattempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#waittime BotprofileCaptchaBinding#waittime}
  */
  readonly waittime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding citrixadc_botprofile_captcha_binding}
*/
export class BotprofileCaptchaBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_captcha_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileCaptchaBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileCaptchaBinding to import
  * @param importFromId The id of the existing BotprofileCaptchaBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileCaptchaBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_captcha_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/botprofile_captcha_binding citrixadc_botprofile_captcha_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileCaptchaBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileCaptchaBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_captcha_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._botBindComment = config.botBindComment;
    this._botCaptchaAction = config.botCaptchaAction;
    this._botCaptchaEnabled = config.botCaptchaEnabled;
    this._botCaptchaUrl = config.botCaptchaUrl;
    this._captcharesource = config.captcharesource;
    this._graceperiod = config.graceperiod;
    this._id = config.id;
    this._logmessage = config.logmessage;
    this._muteperiod = config.muteperiod;
    this._name = config.name;
    this._requestsizelimit = config.requestsizelimit;
    this._retryattempts = config.retryattempts;
    this._waittime = config.waittime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_bind_comment - computed: true, optional: true, required: false
  private _botBindComment?: string; 
  public get botBindComment() {
    return this.getStringAttribute('bot_bind_comment');
  }
  public set botBindComment(value: string) {
    this._botBindComment = value;
  }
  public resetBotBindComment() {
    this._botBindComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botBindCommentInput() {
    return this._botBindComment;
  }

  // bot_captcha_action - computed: true, optional: true, required: false
  private _botCaptchaAction?: string[]; 
  public get botCaptchaAction() {
    return this.getListAttribute('bot_captcha_action');
  }
  public set botCaptchaAction(value: string[]) {
    this._botCaptchaAction = value;
  }
  public resetBotCaptchaAction() {
    this._botCaptchaAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botCaptchaActionInput() {
    return this._botCaptchaAction;
  }

  // bot_captcha_enabled - computed: true, optional: true, required: false
  private _botCaptchaEnabled?: string; 
  public get botCaptchaEnabled() {
    return this.getStringAttribute('bot_captcha_enabled');
  }
  public set botCaptchaEnabled(value: string) {
    this._botCaptchaEnabled = value;
  }
  public resetBotCaptchaEnabled() {
    this._botCaptchaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botCaptchaEnabledInput() {
    return this._botCaptchaEnabled;
  }

  // bot_captcha_url - computed: false, optional: false, required: true
  private _botCaptchaUrl?: string; 
  public get botCaptchaUrl() {
    return this.getStringAttribute('bot_captcha_url');
  }
  public set botCaptchaUrl(value: string) {
    this._botCaptchaUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botCaptchaUrlInput() {
    return this._botCaptchaUrl;
  }

  // captcharesource - computed: true, optional: true, required: false
  private _captcharesource?: boolean | cdktf.IResolvable; 
  public get captcharesource() {
    return this.getBooleanAttribute('captcharesource');
  }
  public set captcharesource(value: boolean | cdktf.IResolvable) {
    this._captcharesource = value;
  }
  public resetCaptcharesource() {
    this._captcharesource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captcharesourceInput() {
    return this._captcharesource;
  }

  // graceperiod - computed: true, optional: true, required: false
  private _graceperiod?: number; 
  public get graceperiod() {
    return this.getNumberAttribute('graceperiod');
  }
  public set graceperiod(value: number) {
    this._graceperiod = value;
  }
  public resetGraceperiod() {
    this._graceperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graceperiodInput() {
    return this._graceperiod;
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

  // logmessage - computed: true, optional: true, required: false
  private _logmessage?: string; 
  public get logmessage() {
    return this.getStringAttribute('logmessage');
  }
  public set logmessage(value: string) {
    this._logmessage = value;
  }
  public resetLogmessage() {
    this._logmessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logmessageInput() {
    return this._logmessage;
  }

  // muteperiod - computed: true, optional: true, required: false
  private _muteperiod?: number; 
  public get muteperiod() {
    return this.getNumberAttribute('muteperiod');
  }
  public set muteperiod(value: number) {
    this._muteperiod = value;
  }
  public resetMuteperiod() {
    this._muteperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteperiodInput() {
    return this._muteperiod;
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

  // requestsizelimit - computed: true, optional: true, required: false
  private _requestsizelimit?: number; 
  public get requestsizelimit() {
    return this.getNumberAttribute('requestsizelimit');
  }
  public set requestsizelimit(value: number) {
    this._requestsizelimit = value;
  }
  public resetRequestsizelimit() {
    this._requestsizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsizelimitInput() {
    return this._requestsizelimit;
  }

  // retryattempts - computed: true, optional: true, required: false
  private _retryattempts?: number; 
  public get retryattempts() {
    return this.getNumberAttribute('retryattempts');
  }
  public set retryattempts(value: number) {
    this._retryattempts = value;
  }
  public resetRetryattempts() {
    this._retryattempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryattemptsInput() {
    return this._retryattempts;
  }

  // waittime - computed: true, optional: true, required: false
  private _waittime?: number; 
  public get waittime() {
    return this.getNumberAttribute('waittime');
  }
  public set waittime(value: number) {
    this._waittime = value;
  }
  public resetWaittime() {
    this._waittime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waittimeInput() {
    return this._waittime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_bind_comment: cdktf.stringToTerraform(this._botBindComment),
      bot_captcha_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._botCaptchaAction),
      bot_captcha_enabled: cdktf.stringToTerraform(this._botCaptchaEnabled),
      bot_captcha_url: cdktf.stringToTerraform(this._botCaptchaUrl),
      captcharesource: cdktf.booleanToTerraform(this._captcharesource),
      graceperiod: cdktf.numberToTerraform(this._graceperiod),
      id: cdktf.stringToTerraform(this._id),
      logmessage: cdktf.stringToTerraform(this._logmessage),
      muteperiod: cdktf.numberToTerraform(this._muteperiod),
      name: cdktf.stringToTerraform(this._name),
      requestsizelimit: cdktf.numberToTerraform(this._requestsizelimit),
      retryattempts: cdktf.numberToTerraform(this._retryattempts),
      waittime: cdktf.numberToTerraform(this._waittime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_bind_comment: {
        value: cdktf.stringToHclTerraform(this._botBindComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_captcha_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._botCaptchaAction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bot_captcha_enabled: {
        value: cdktf.stringToHclTerraform(this._botCaptchaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_captcha_url: {
        value: cdktf.stringToHclTerraform(this._botCaptchaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captcharesource: {
        value: cdktf.booleanToHclTerraform(this._captcharesource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceperiod: {
        value: cdktf.numberToHclTerraform(this._graceperiod),
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
      logmessage: {
        value: cdktf.stringToHclTerraform(this._logmessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      muteperiod: {
        value: cdktf.numberToHclTerraform(this._muteperiod),
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
      requestsizelimit: {
        value: cdktf.numberToHclTerraform(this._requestsizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retryattempts: {
        value: cdktf.numberToHclTerraform(this._retryattempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      waittime: {
        value: cdktf.numberToHclTerraform(this._waittime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
