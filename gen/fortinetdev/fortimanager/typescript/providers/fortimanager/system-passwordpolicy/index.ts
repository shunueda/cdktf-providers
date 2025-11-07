// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPasswordpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#change_4_characters SystemPasswordpolicy#change_4_characters}
  */
  readonly change4Characters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#expire SystemPasswordpolicy#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#id SystemPasswordpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#minimum_length SystemPasswordpolicy#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#must_contain SystemPasswordpolicy#must_contain}
  */
  readonly mustContain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#password_history SystemPasswordpolicy#password_history}
  */
  readonly passwordHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#status SystemPasswordpolicy#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy fortimanager_system_passwordpolicy}
*/
export class SystemPasswordpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_passwordpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPasswordpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPasswordpolicy to import
  * @param importFromId The id of the existing SystemPasswordpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPasswordpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_passwordpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_passwordpolicy fortimanager_system_passwordpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPasswordpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPasswordpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_passwordpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._change4Characters = config.change4Characters;
    this._expire = config.expire;
    this._id = config.id;
    this._minimumLength = config.minimumLength;
    this._mustContain = config.mustContain;
    this._passwordHistory = config.passwordHistory;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_4_characters - computed: true, optional: true, required: false
  private _change4Characters?: string; 
  public get change4Characters() {
    return this.getStringAttribute('change_4_characters');
  }
  public set change4Characters(value: string) {
    this._change4Characters = value;
  }
  public resetChange4Characters() {
    this._change4Characters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get change4CharactersInput() {
    return this._change4Characters;
  }

  // expire - computed: false, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
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

  // minimum_length - computed: true, optional: true, required: false
  private _minimumLength?: number; 
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }
  public set minimumLength(value: number) {
    this._minimumLength = value;
  }
  public resetMinimumLength() {
    this._minimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLengthInput() {
    return this._minimumLength;
  }

  // must_contain - computed: true, optional: true, required: false
  private _mustContain?: string[]; 
  public get mustContain() {
    return cdktf.Fn.tolist(this.getListAttribute('must_contain'));
  }
  public set mustContain(value: string[]) {
    this._mustContain = value;
  }
  public resetMustContain() {
    this._mustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustContainInput() {
    return this._mustContain;
  }

  // password_history - computed: false, optional: true, required: false
  private _passwordHistory?: number; 
  public get passwordHistory() {
    return this.getNumberAttribute('password_history');
  }
  public set passwordHistory(value: number) {
    this._passwordHistory = value;
  }
  public resetPasswordHistory() {
    this._passwordHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryInput() {
    return this._passwordHistory;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_4_characters: cdktf.stringToTerraform(this._change4Characters),
      expire: cdktf.numberToTerraform(this._expire),
      id: cdktf.stringToTerraform(this._id),
      minimum_length: cdktf.numberToTerraform(this._minimumLength),
      must_contain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mustContain),
      password_history: cdktf.numberToTerraform(this._passwordHistory),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_4_characters: {
        value: cdktf.stringToHclTerraform(this._change4Characters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
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
      minimum_length: {
        value: cdktf.numberToHclTerraform(this._minimumLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      must_contain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mustContain),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password_history: {
        value: cdktf.numberToHclTerraform(this._passwordHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
