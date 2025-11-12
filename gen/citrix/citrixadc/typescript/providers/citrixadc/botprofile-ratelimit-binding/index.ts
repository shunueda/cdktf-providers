// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotprofileRatelimitBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#bot_bind_comment BotprofileRatelimitBinding#bot_bind_comment}
  */
  readonly botBindComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#bot_rate_limit_action BotprofileRatelimitBinding#bot_rate_limit_action}
  */
  readonly botRateLimitAction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#bot_rate_limit_enabled BotprofileRatelimitBinding#bot_rate_limit_enabled}
  */
  readonly botRateLimitEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#bot_rate_limit_type BotprofileRatelimitBinding#bot_rate_limit_type}
  */
  readonly botRateLimitType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#bot_rate_limit_url BotprofileRatelimitBinding#bot_rate_limit_url}
  */
  readonly botRateLimitUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#bot_ratelimit BotprofileRatelimitBinding#bot_ratelimit}
  */
  readonly botRatelimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#condition BotprofileRatelimitBinding#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#cookiename BotprofileRatelimitBinding#cookiename}
  */
  readonly cookiename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#countrycode BotprofileRatelimitBinding#countrycode}
  */
  readonly countrycode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#id BotprofileRatelimitBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#limittype BotprofileRatelimitBinding#limittype}
  */
  readonly limittype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#logmessage BotprofileRatelimitBinding#logmessage}
  */
  readonly logmessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#name BotprofileRatelimitBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#rate BotprofileRatelimitBinding#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#timeslice BotprofileRatelimitBinding#timeslice}
  */
  readonly timeslice?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding citrixadc_botprofile_ratelimit_binding}
*/
export class BotprofileRatelimitBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_botprofile_ratelimit_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotprofileRatelimitBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotprofileRatelimitBinding to import
  * @param importFromId The id of the existing BotprofileRatelimitBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotprofileRatelimitBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_botprofile_ratelimit_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/botprofile_ratelimit_binding citrixadc_botprofile_ratelimit_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotprofileRatelimitBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BotprofileRatelimitBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_botprofile_ratelimit_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._botRateLimitAction = config.botRateLimitAction;
    this._botRateLimitEnabled = config.botRateLimitEnabled;
    this._botRateLimitType = config.botRateLimitType;
    this._botRateLimitUrl = config.botRateLimitUrl;
    this._botRatelimit = config.botRatelimit;
    this._condition = config.condition;
    this._cookiename = config.cookiename;
    this._countrycode = config.countrycode;
    this._id = config.id;
    this._limittype = config.limittype;
    this._logmessage = config.logmessage;
    this._name = config.name;
    this._rate = config.rate;
    this._timeslice = config.timeslice;
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

  // bot_rate_limit_action - computed: true, optional: true, required: false
  private _botRateLimitAction?: string[]; 
  public get botRateLimitAction() {
    return this.getListAttribute('bot_rate_limit_action');
  }
  public set botRateLimitAction(value: string[]) {
    this._botRateLimitAction = value;
  }
  public resetBotRateLimitAction() {
    this._botRateLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botRateLimitActionInput() {
    return this._botRateLimitAction;
  }

  // bot_rate_limit_enabled - computed: true, optional: true, required: false
  private _botRateLimitEnabled?: string; 
  public get botRateLimitEnabled() {
    return this.getStringAttribute('bot_rate_limit_enabled');
  }
  public set botRateLimitEnabled(value: string) {
    this._botRateLimitEnabled = value;
  }
  public resetBotRateLimitEnabled() {
    this._botRateLimitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botRateLimitEnabledInput() {
    return this._botRateLimitEnabled;
  }

  // bot_rate_limit_type - computed: false, optional: false, required: true
  private _botRateLimitType?: string; 
  public get botRateLimitType() {
    return this.getStringAttribute('bot_rate_limit_type');
  }
  public set botRateLimitType(value: string) {
    this._botRateLimitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botRateLimitTypeInput() {
    return this._botRateLimitType;
  }

  // bot_rate_limit_url - computed: true, optional: true, required: false
  private _botRateLimitUrl?: string; 
  public get botRateLimitUrl() {
    return this.getStringAttribute('bot_rate_limit_url');
  }
  public set botRateLimitUrl(value: string) {
    this._botRateLimitUrl = value;
  }
  public resetBotRateLimitUrl() {
    this._botRateLimitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botRateLimitUrlInput() {
    return this._botRateLimitUrl;
  }

  // bot_ratelimit - computed: true, optional: true, required: false
  private _botRatelimit?: boolean | cdktf.IResolvable; 
  public get botRatelimit() {
    return this.getBooleanAttribute('bot_ratelimit');
  }
  public set botRatelimit(value: boolean | cdktf.IResolvable) {
    this._botRatelimit = value;
  }
  public resetBotRatelimit() {
    this._botRatelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botRatelimitInput() {
    return this._botRatelimit;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // cookiename - computed: true, optional: true, required: false
  private _cookiename?: string; 
  public get cookiename() {
    return this.getStringAttribute('cookiename');
  }
  public set cookiename(value: string) {
    this._cookiename = value;
  }
  public resetCookiename() {
    this._cookiename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookienameInput() {
    return this._cookiename;
  }

  // countrycode - computed: true, optional: true, required: false
  private _countrycode?: string; 
  public get countrycode() {
    return this.getStringAttribute('countrycode');
  }
  public set countrycode(value: string) {
    this._countrycode = value;
  }
  public resetCountrycode() {
    this._countrycode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countrycodeInput() {
    return this._countrycode;
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

  // limittype - computed: true, optional: true, required: false
  private _limittype?: string; 
  public get limittype() {
    return this.getStringAttribute('limittype');
  }
  public set limittype(value: string) {
    this._limittype = value;
  }
  public resetLimittype() {
    this._limittype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limittypeInput() {
    return this._limittype;
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

  // rate - computed: true, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // timeslice - computed: true, optional: true, required: false
  private _timeslice?: number; 
  public get timeslice() {
    return this.getNumberAttribute('timeslice');
  }
  public set timeslice(value: number) {
    this._timeslice = value;
  }
  public resetTimeslice() {
    this._timeslice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesliceInput() {
    return this._timeslice;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bot_bind_comment: cdktf.stringToTerraform(this._botBindComment),
      bot_rate_limit_action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._botRateLimitAction),
      bot_rate_limit_enabled: cdktf.stringToTerraform(this._botRateLimitEnabled),
      bot_rate_limit_type: cdktf.stringToTerraform(this._botRateLimitType),
      bot_rate_limit_url: cdktf.stringToTerraform(this._botRateLimitUrl),
      bot_ratelimit: cdktf.booleanToTerraform(this._botRatelimit),
      condition: cdktf.stringToTerraform(this._condition),
      cookiename: cdktf.stringToTerraform(this._cookiename),
      countrycode: cdktf.stringToTerraform(this._countrycode),
      id: cdktf.stringToTerraform(this._id),
      limittype: cdktf.stringToTerraform(this._limittype),
      logmessage: cdktf.stringToTerraform(this._logmessage),
      name: cdktf.stringToTerraform(this._name),
      rate: cdktf.numberToTerraform(this._rate),
      timeslice: cdktf.numberToTerraform(this._timeslice),
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
      bot_rate_limit_action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._botRateLimitAction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bot_rate_limit_enabled: {
        value: cdktf.stringToHclTerraform(this._botRateLimitEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_rate_limit_type: {
        value: cdktf.stringToHclTerraform(this._botRateLimitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_rate_limit_url: {
        value: cdktf.stringToHclTerraform(this._botRateLimitUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_ratelimit: {
        value: cdktf.booleanToHclTerraform(this._botRatelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiename: {
        value: cdktf.stringToHclTerraform(this._cookiename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      countrycode: {
        value: cdktf.stringToHclTerraform(this._countrycode),
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
      limittype: {
        value: cdktf.stringToHclTerraform(this._limittype),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeslice: {
        value: cdktf.numberToHclTerraform(this._timeslice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
