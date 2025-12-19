// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPasswordPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'Strict': Strict: Max Age-60 Days; 'Medium': Medium: Max Age- 90 Days; 'Simple': Simple: Max Age-120 Days;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#aging SystemPasswordPolicyA#aging}
  */
  readonly aging?: string;
  /**
  * 'Strict': Strict: Min length:8, Min Lower Case:2, Min Upper Case:2, Min Numbers:2, Min Special Character:1, CHANGE Min 8 Characters; 'Medium': Medium: Min length:6, Min Lower Case:2, Min Upper Case:2, Min Numbers:1, Min Special Character:1, CHANGE Min 6 Characters; 'Default': Default: Min length:9, Min Lower Case:1, Min Upper Case:1, Min Numbers:1, Min Special Character:1, CHANGE Min 1 Characters; 'Simple': Simple: Min length:4, Min Lower Case:1, Min Upper Case:1, Min Numbers:1, Min Special Character:0, CHANGE Min 4 Characters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#complexity SystemPasswordPolicyA#complexity}
  */
  readonly complexity?: string;
  /**
  * '0': Will disable the check; '3': Three consecutive characters on keyboard will not be allowed.; '4': Four consecutive characters on keyboard will not be allowed.; '5': Five consecutive characters on keyboard will not be allowed.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#forbid_consecutive_character SystemPasswordPolicyA#forbid_consecutive_character}
  */
  readonly forbidConsecutiveCharacter?: string;
  /**
  * 'Strict': Strict: Does not allow upto 5 old passwords; 'Medium': Medium: Does not allow upto 4 old passwords; 'Simple': Simple: Does not allow upto 3 old passwords;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#history SystemPasswordPolicyA#history}
  */
  readonly history?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#id SystemPasswordPolicyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure custom password length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#min_pswd_len SystemPasswordPolicyA#min_pswd_len}
  */
  readonly minPswdLen?: number;
  /**
  * 'enable': Prohibition of consecutive repeated input of the same letter/number, case sensitive; 'disable': Will not check if the password contains repeat characters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#repeat_character_check SystemPasswordPolicyA#repeat_character_check}
  */
  readonly repeatCharacterCheck?: string;
  /**
  * 'enable': Prohibition to set password contains user account, case sensitive; 'disable': Will not check if the password contains user account;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#username_check SystemPasswordPolicyA#username_check}
  */
  readonly usernameCheck?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#uuid SystemPasswordPolicyA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy thunder_system_password_policy}
*/
export class SystemPasswordPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_password_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPasswordPolicyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPasswordPolicyA to import
  * @param importFromId The id of the existing SystemPasswordPolicyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPasswordPolicyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_password_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_password_policy thunder_system_password_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPasswordPolicyAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPasswordPolicyAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_password_policy',
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
    this._aging = config.aging;
    this._complexity = config.complexity;
    this._forbidConsecutiveCharacter = config.forbidConsecutiveCharacter;
    this._history = config.history;
    this._id = config.id;
    this._minPswdLen = config.minPswdLen;
    this._repeatCharacterCheck = config.repeatCharacterCheck;
    this._usernameCheck = config.usernameCheck;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aging - computed: false, optional: true, required: false
  private _aging?: string; 
  public get aging() {
    return this.getStringAttribute('aging');
  }
  public set aging(value: string) {
    this._aging = value;
  }
  public resetAging() {
    this._aging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingInput() {
    return this._aging;
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // forbid_consecutive_character - computed: false, optional: true, required: false
  private _forbidConsecutiveCharacter?: string; 
  public get forbidConsecutiveCharacter() {
    return this.getStringAttribute('forbid_consecutive_character');
  }
  public set forbidConsecutiveCharacter(value: string) {
    this._forbidConsecutiveCharacter = value;
  }
  public resetForbidConsecutiveCharacter() {
    this._forbidConsecutiveCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbidConsecutiveCharacterInput() {
    return this._forbidConsecutiveCharacter;
  }

  // history - computed: false, optional: true, required: false
  private _history?: string; 
  public get history() {
    return this.getStringAttribute('history');
  }
  public set history(value: string) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
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

  // min_pswd_len - computed: false, optional: true, required: false
  private _minPswdLen?: number; 
  public get minPswdLen() {
    return this.getNumberAttribute('min_pswd_len');
  }
  public set minPswdLen(value: number) {
    this._minPswdLen = value;
  }
  public resetMinPswdLen() {
    this._minPswdLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPswdLenInput() {
    return this._minPswdLen;
  }

  // repeat_character_check - computed: false, optional: true, required: false
  private _repeatCharacterCheck?: string; 
  public get repeatCharacterCheck() {
    return this.getStringAttribute('repeat_character_check');
  }
  public set repeatCharacterCheck(value: string) {
    this._repeatCharacterCheck = value;
  }
  public resetRepeatCharacterCheck() {
    this._repeatCharacterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCharacterCheckInput() {
    return this._repeatCharacterCheck;
  }

  // username_check - computed: false, optional: true, required: false
  private _usernameCheck?: string; 
  public get usernameCheck() {
    return this.getStringAttribute('username_check');
  }
  public set usernameCheck(value: string) {
    this._usernameCheck = value;
  }
  public resetUsernameCheck() {
    this._usernameCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCheckInput() {
    return this._usernameCheck;
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
      aging: cdktf.stringToTerraform(this._aging),
      complexity: cdktf.stringToTerraform(this._complexity),
      forbid_consecutive_character: cdktf.stringToTerraform(this._forbidConsecutiveCharacter),
      history: cdktf.stringToTerraform(this._history),
      id: cdktf.stringToTerraform(this._id),
      min_pswd_len: cdktf.numberToTerraform(this._minPswdLen),
      repeat_character_check: cdktf.stringToTerraform(this._repeatCharacterCheck),
      username_check: cdktf.stringToTerraform(this._usernameCheck),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aging: {
        value: cdktf.stringToHclTerraform(this._aging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      complexity: {
        value: cdktf.stringToHclTerraform(this._complexity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forbid_consecutive_character: {
        value: cdktf.stringToHclTerraform(this._forbidConsecutiveCharacter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history: {
        value: cdktf.stringToHclTerraform(this._history),
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
      min_pswd_len: {
        value: cdktf.numberToHclTerraform(this._minPswdLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat_character_check: {
        value: cdktf.stringToHclTerraform(this._repeatCharacterCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_check: {
        value: cdktf.stringToHclTerraform(this._usernameCheck),
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
