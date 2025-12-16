// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAccountAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the system account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account_access_token#account_id SystemAccountAccessToken#account_id}
  */
  readonly accountId: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account_access_token#expires_at SystemAccountAccessToken#expires_at}
  */
  readonly expiresAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account_access_token#name SystemAccountAccessToken#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account_access_token konnect_system_account_access_token}
*/
export class SystemAccountAccessToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_system_account_access_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAccountAccessToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAccountAccessToken to import
  * @param importFromId The id of the existing SystemAccountAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAccountAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_system_account_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/system_account_access_token konnect_system_account_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAccountAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAccountAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_system_account_access_token',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
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
    this._expiresAt = config.expiresAt;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: false, optional: false, required: true
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_used_at - computed: true, optional: false, required: false
  public get lastUsedAt() {
    return this.getStringAttribute('last_used_at');
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      name: cdktf.stringToTerraform(this._name),
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
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
