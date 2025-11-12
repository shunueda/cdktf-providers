// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafRuleCcProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#action WafRuleCcProtection#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#block_page_content WafRuleCcProtection#block_page_content}
  */
  readonly blockPageContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#block_page_type WafRuleCcProtection#block_page_type}
  */
  readonly blockPageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#block_time WafRuleCcProtection#block_time}
  */
  readonly blockTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#content WafRuleCcProtection#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#cookie WafRuleCcProtection#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#id WafRuleCcProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#limit_num WafRuleCcProtection#limit_num}
  */
  readonly limitNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#limit_period WafRuleCcProtection#limit_period}
  */
  readonly limitPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#mode WafRuleCcProtection#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#path WafRuleCcProtection#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#policy_id WafRuleCcProtection#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection flexibleengine_waf_rule_cc_protection}
*/
export class WafRuleCcProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_waf_rule_cc_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafRuleCcProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafRuleCcProtection to import
  * @param importFromId The id of the existing WafRuleCcProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafRuleCcProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_waf_rule_cc_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/waf_rule_cc_protection flexibleengine_waf_rule_cc_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafRuleCcProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: WafRuleCcProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_waf_rule_cc_protection',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0',
        providerVersionConstraint: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._blockPageContent = config.blockPageContent;
    this._blockPageType = config.blockPageType;
    this._blockTime = config.blockTime;
    this._content = config.content;
    this._cookie = config.cookie;
    this._id = config.id;
    this._limitNum = config.limitNum;
    this._limitPeriod = config.limitPeriod;
    this._mode = config.mode;
    this._path = config.path;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // block_page_content - computed: false, optional: true, required: false
  private _blockPageContent?: string; 
  public get blockPageContent() {
    return this.getStringAttribute('block_page_content');
  }
  public set blockPageContent(value: string) {
    this._blockPageContent = value;
  }
  public resetBlockPageContent() {
    this._blockPageContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageContentInput() {
    return this._blockPageContent;
  }

  // block_page_type - computed: false, optional: true, required: false
  private _blockPageType?: string; 
  public get blockPageType() {
    return this.getStringAttribute('block_page_type');
  }
  public set blockPageType(value: string) {
    this._blockPageType = value;
  }
  public resetBlockPageType() {
    this._blockPageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageTypeInput() {
    return this._blockPageType;
  }

  // block_time - computed: false, optional: true, required: false
  private _blockTime?: number; 
  public get blockTime() {
    return this.getNumberAttribute('block_time');
  }
  public set blockTime(value: number) {
    this._blockTime = value;
  }
  public resetBlockTime() {
    this._blockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTimeInput() {
    return this._blockTime;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
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

  // limit_num - computed: false, optional: false, required: true
  private _limitNum?: number; 
  public get limitNum() {
    return this.getNumberAttribute('limit_num');
  }
  public set limitNum(value: number) {
    this._limitNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumInput() {
    return this._limitNum;
  }

  // limit_period - computed: false, optional: false, required: true
  private _limitPeriod?: number; 
  public get limitPeriod() {
    return this.getNumberAttribute('limit_period');
  }
  public set limitPeriod(value: number) {
    this._limitPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPeriodInput() {
    return this._limitPeriod;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      block_page_content: cdktf.stringToTerraform(this._blockPageContent),
      block_page_type: cdktf.stringToTerraform(this._blockPageType),
      block_time: cdktf.numberToTerraform(this._blockTime),
      content: cdktf.stringToTerraform(this._content),
      cookie: cdktf.stringToTerraform(this._cookie),
      id: cdktf.stringToTerraform(this._id),
      limit_num: cdktf.numberToTerraform(this._limitNum),
      limit_period: cdktf.numberToTerraform(this._limitPeriod),
      mode: cdktf.stringToTerraform(this._mode),
      path: cdktf.stringToTerraform(this._path),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_page_content: {
        value: cdktf.stringToHclTerraform(this._blockPageContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_page_type: {
        value: cdktf.stringToHclTerraform(this._blockPageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_time: {
        value: cdktf.numberToHclTerraform(this._blockTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie: {
        value: cdktf.stringToHclTerraform(this._cookie),
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
      limit_num: {
        value: cdktf.numberToHclTerraform(this._limitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_period: {
        value: cdktf.numberToHclTerraform(this._limitPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
