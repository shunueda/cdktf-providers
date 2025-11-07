// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_challenge_injection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotmanChallengeInjectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_challenge_injection_rules#challenge_injection_rules BotmanChallengeInjectionRules#challenge_injection_rules}
  */
  readonly challengeInjectionRules: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_challenge_injection_rules#config_id BotmanChallengeInjectionRules#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_challenge_injection_rules#id BotmanChallengeInjectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_challenge_injection_rules akamai_botman_challenge_injection_rules}
*/
export class BotmanChallengeInjectionRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_botman_challenge_injection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotmanChallengeInjectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotmanChallengeInjectionRules to import
  * @param importFromId The id of the existing BotmanChallengeInjectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_challenge_injection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotmanChallengeInjectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_botman_challenge_injection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_challenge_injection_rules akamai_botman_challenge_injection_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotmanChallengeInjectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: BotmanChallengeInjectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_botman_challenge_injection_rules',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._challengeInjectionRules = config.challengeInjectionRules;
    this._configId = config.configId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // challenge_injection_rules - computed: false, optional: false, required: true
  private _challengeInjectionRules?: string; 
  public get challengeInjectionRules() {
    return this.getStringAttribute('challenge_injection_rules');
  }
  public set challengeInjectionRules(value: string) {
    this._challengeInjectionRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInjectionRulesInput() {
    return this._challengeInjectionRules;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      challenge_injection_rules: cdktf.stringToTerraform(this._challengeInjectionRules),
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      challenge_injection_rules: {
        value: cdktf.stringToHclTerraform(this._challengeInjectionRules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
