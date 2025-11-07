// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The mode of activation for ddos on a site. Possible values: api.threats.ddos.activation_mode.off, api.threats.ddos.activation_mode.auto, api.threats.ddos.activation_mode.on, api.threats.ddos.activation_mode.adaptive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#activation_mode WafSecurityRule#activation_mode}
  */
  readonly activationMode?: string;
  /**
  * Whether or not to block bad bots. Possible values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#block_bad_bots WafSecurityRule#block_bad_bots}
  */
  readonly blockBadBots?: string;
  /**
  * If non-essential bots should be blocked or not. Possible values: true, false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#block_non_essential_bots WafSecurityRule#block_non_essential_bots}
  */
  readonly blockNonEssentialBots?: string;
  /**
  * Whether or not to send a challenge to clients that are suspected to be bad bots (CAPTCHA for example). Possible values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#challenge_suspected_bots WafSecurityRule#challenge_suspected_bots}
  */
  readonly challengeSuspectedBots?: string;
  /**
  * Consider site to be under DDoS if the request rate is above this threshold. The valid values are 10, 20, 50, 100, 200, 500, 750, 1000, 2000, 3000, 4000, 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#ddos_traffic_threshold WafSecurityRule#ddos_traffic_threshold}
  */
  readonly ddosTrafficThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#id WafSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier of the WAF rule, e.g api.threats.cross_site_scripting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#rule_id WafSecurityRule#rule_id}
  */
  readonly ruleId: string;
  /**
  * The action that should be taken when a threat is detected, for example: api.threats.action.block_ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#security_rule_action WafSecurityRule#security_rule_action}
  */
  readonly securityRuleAction?: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#site_id WafSecurityRule#site_id}
  */
  readonly siteId: number;
  /**
  * Defines a method used for challenging suspicious bots. Possible values: none, cookies, javascript, captcha
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#unknown_clients_challenge WafSecurityRule#unknown_clients_challenge}
  */
  readonly unknownClientsChallenge?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule incapsula_waf_security_rule}
*/
export class WafSecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_waf_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafSecurityRule to import
  * @param importFromId The id of the existing WafSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_waf_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/waf_security_rule incapsula_waf_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WafSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_waf_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationMode = config.activationMode;
    this._blockBadBots = config.blockBadBots;
    this._blockNonEssentialBots = config.blockNonEssentialBots;
    this._challengeSuspectedBots = config.challengeSuspectedBots;
    this._ddosTrafficThreshold = config.ddosTrafficThreshold;
    this._id = config.id;
    this._ruleId = config.ruleId;
    this._securityRuleAction = config.securityRuleAction;
    this._siteId = config.siteId;
    this._unknownClientsChallenge = config.unknownClientsChallenge;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_mode - computed: false, optional: true, required: false
  private _activationMode?: string; 
  public get activationMode() {
    return this.getStringAttribute('activation_mode');
  }
  public set activationMode(value: string) {
    this._activationMode = value;
  }
  public resetActivationMode() {
    this._activationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationModeInput() {
    return this._activationMode;
  }

  // block_bad_bots - computed: false, optional: true, required: false
  private _blockBadBots?: string; 
  public get blockBadBots() {
    return this.getStringAttribute('block_bad_bots');
  }
  public set blockBadBots(value: string) {
    this._blockBadBots = value;
  }
  public resetBlockBadBots() {
    this._blockBadBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockBadBotsInput() {
    return this._blockBadBots;
  }

  // block_non_essential_bots - computed: true, optional: true, required: false
  private _blockNonEssentialBots?: string; 
  public get blockNonEssentialBots() {
    return this.getStringAttribute('block_non_essential_bots');
  }
  public set blockNonEssentialBots(value: string) {
    this._blockNonEssentialBots = value;
  }
  public resetBlockNonEssentialBots() {
    this._blockNonEssentialBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonEssentialBotsInput() {
    return this._blockNonEssentialBots;
  }

  // challenge_suspected_bots - computed: false, optional: true, required: false
  private _challengeSuspectedBots?: string; 
  public get challengeSuspectedBots() {
    return this.getStringAttribute('challenge_suspected_bots');
  }
  public set challengeSuspectedBots(value: string) {
    this._challengeSuspectedBots = value;
  }
  public resetChallengeSuspectedBots() {
    this._challengeSuspectedBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeSuspectedBotsInput() {
    return this._challengeSuspectedBots;
  }

  // ddos_traffic_threshold - computed: false, optional: true, required: false
  private _ddosTrafficThreshold?: string; 
  public get ddosTrafficThreshold() {
    return this.getStringAttribute('ddos_traffic_threshold');
  }
  public set ddosTrafficThreshold(value: string) {
    this._ddosTrafficThreshold = value;
  }
  public resetDdosTrafficThreshold() {
    this._ddosTrafficThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosTrafficThresholdInput() {
    return this._ddosTrafficThreshold;
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // security_rule_action - computed: false, optional: true, required: false
  private _securityRuleAction?: string; 
  public get securityRuleAction() {
    return this.getStringAttribute('security_rule_action');
  }
  public set securityRuleAction(value: string) {
    this._securityRuleAction = value;
  }
  public resetSecurityRuleAction() {
    this._securityRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRuleActionInput() {
    return this._securityRuleAction;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // unknown_clients_challenge - computed: true, optional: true, required: false
  private _unknownClientsChallenge?: string; 
  public get unknownClientsChallenge() {
    return this.getStringAttribute('unknown_clients_challenge');
  }
  public set unknownClientsChallenge(value: string) {
    this._unknownClientsChallenge = value;
  }
  public resetUnknownClientsChallenge() {
    this._unknownClientsChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownClientsChallengeInput() {
    return this._unknownClientsChallenge;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_mode: cdktf.stringToTerraform(this._activationMode),
      block_bad_bots: cdktf.stringToTerraform(this._blockBadBots),
      block_non_essential_bots: cdktf.stringToTerraform(this._blockNonEssentialBots),
      challenge_suspected_bots: cdktf.stringToTerraform(this._challengeSuspectedBots),
      ddos_traffic_threshold: cdktf.stringToTerraform(this._ddosTrafficThreshold),
      id: cdktf.stringToTerraform(this._id),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      security_rule_action: cdktf.stringToTerraform(this._securityRuleAction),
      site_id: cdktf.numberToTerraform(this._siteId),
      unknown_clients_challenge: cdktf.stringToTerraform(this._unknownClientsChallenge),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_mode: {
        value: cdktf.stringToHclTerraform(this._activationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_bad_bots: {
        value: cdktf.stringToHclTerraform(this._blockBadBots),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_non_essential_bots: {
        value: cdktf.stringToHclTerraform(this._blockNonEssentialBots),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_suspected_bots: {
        value: cdktf.stringToHclTerraform(this._challengeSuspectedBots),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddos_traffic_threshold: {
        value: cdktf.stringToHclTerraform(this._ddosTrafficThreshold),
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
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_rule_action: {
        value: cdktf.stringToHclTerraform(this._securityRuleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_clients_challenge: {
        value: cdktf.stringToHclTerraform(this._unknownClientsChallenge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
