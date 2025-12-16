// https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/account_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/account_member#account_id AccountMember#account_id}
  */
  readonly accountId?: string;
  /**
  * Acount Role ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/account_member#account_role_id AccountMember#account_role_id}
  */
  readonly accountRoleId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/account_member prefect_account_member}
*/
export class AccountMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_account_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountMember to import
  * @param importFromId The id of the existing AccountMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/account_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_account_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.92.0/docs/resources/account_member prefect_account_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountMemberConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountMemberConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prefect_account_member',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.92.0',
        providerVersionConstraint: '2.92.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._accountRoleId = config.accountRoleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_role_id - computed: true, optional: true, required: false
  private _accountRoleId?: string; 
  public get accountRoleId() {
    return this.getStringAttribute('account_role_id');
  }
  public set accountRoleId(value: string) {
    this._accountRoleId = value;
  }
  public resetAccountRoleId() {
    this._accountRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleIdInput() {
    return this._accountRoleId;
  }

  // account_role_name - computed: true, optional: false, required: false
  public get accountRoleName() {
    return this.getStringAttribute('account_role_name');
  }

  // actor_id - computed: true, optional: false, required: false
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // handle - computed: true, optional: false, required: false
  public get handle() {
    return this.getStringAttribute('handle');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      account_role_id: cdktf.stringToTerraform(this._accountRoleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_role_id: {
        value: cdktf.stringToHclTerraform(this._accountRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
