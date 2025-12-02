// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential#current_cred Credential#current_cred}
  */
  readonly currentCred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential#forgot Credential#forgot}
  */
  readonly forgot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential#new_cred Credential#new_cred}
  */
  readonly newCred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential#owner Credential#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential#salt Credential#salt}
  */
  readonly salt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential#type Credential#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential zedcloud_credential}
*/
export class Credential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Credential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Credential to import
  * @param importFromId The id of the existing Credential that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Credential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/credential zedcloud_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CredentialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_credential',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentCred = config.currentCred;
    this._forgot = config.forgot;
    this._newCred = config.newCred;
    this._owner = config.owner;
    this._salt = config.salt;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_cred - computed: false, optional: true, required: false
  private _currentCred?: string; 
  public get currentCred() {
    return this.getStringAttribute('current_cred');
  }
  public set currentCred(value: string) {
    this._currentCred = value;
  }
  public resetCurrentCred() {
    this._currentCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentCredInput() {
    return this._currentCred;
  }

  // forgot - computed: false, optional: true, required: false
  private _forgot?: boolean | cdktf.IResolvable; 
  public get forgot() {
    return this.getBooleanAttribute('forgot');
  }
  public set forgot(value: boolean | cdktf.IResolvable) {
    this._forgot = value;
  }
  public resetForgot() {
    this._forgot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgotInput() {
    return this._forgot;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // new_cred - computed: false, optional: true, required: false
  private _newCred?: string; 
  public get newCred() {
    return this.getStringAttribute('new_cred');
  }
  public set newCred(value: string) {
    this._newCred = value;
  }
  public resetNewCred() {
    this._newCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newCredInput() {
    return this._newCred;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // salt - computed: false, optional: true, required: false
  private _salt?: number; 
  public get salt() {
    return this.getNumberAttribute('salt');
  }
  public set salt(value: number) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_cred: cdktf.stringToTerraform(this._currentCred),
      forgot: cdktf.booleanToTerraform(this._forgot),
      new_cred: cdktf.stringToTerraform(this._newCred),
      owner: cdktf.stringToTerraform(this._owner),
      salt: cdktf.numberToTerraform(this._salt),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current_cred: {
        value: cdktf.stringToHclTerraform(this._currentCred),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forgot: {
        value: cdktf.booleanToHclTerraform(this._forgot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      new_cred: {
        value: cdktf.stringToHclTerraform(this._newCred),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      salt: {
        value: cdktf.numberToHclTerraform(this._salt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
