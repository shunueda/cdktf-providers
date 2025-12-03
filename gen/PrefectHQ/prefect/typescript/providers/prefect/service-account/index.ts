// https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account#account_id ServiceAccount#account_id}
  */
  readonly accountId?: string;
  /**
  * Account Role name of the service account (one of: Admin, Member, Owner)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account#account_role_name ServiceAccount#account_role_name}
  */
  readonly accountRoleName?: string;
  /**
  * Timestamp of the API Key expiration (RFC3339). If left as null, the API Key will not expire. Modify this attribute to force a key rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account#api_key_expiration ServiceAccount#api_key_expiration}
  */
  readonly apiKeyExpiration?: string;
  /**
  * A map of values that, if changed, will trigger a key rotation (but not a re-creation of the Service Account)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account#api_key_keepers ServiceAccount#api_key_keepers}
  */
  readonly apiKeyKeepers?: { [key: string]: string };
  /**
  * Name of the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account#name ServiceAccount#name}
  */
  readonly name: string;
  /**
  * Provide this field to set an expiration for the currently active api key. If not provided or provided Null, the current key will be deleted. If provided, it cannot be more than 48 hours (172800 seconds) in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account#old_key_expires_in_seconds ServiceAccount#old_key_expires_in_seconds}
  */
  readonly oldKeyExpiresInSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account prefect_service_account}
*/
export class ServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccount to import
  * @param importFromId The id of the existing ServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.4/docs/resources/service_account prefect_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_service_account',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.4',
        providerVersionConstraint: '2.90.4'
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
    this._accountRoleName = config.accountRoleName;
    this._apiKeyExpiration = config.apiKeyExpiration;
    this._apiKeyKeepers = config.apiKeyKeepers;
    this._name = config.name;
    this._oldKeyExpiresInSeconds = config.oldKeyExpiresInSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
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

  // account_role_name - computed: true, optional: true, required: false
  private _accountRoleName?: string; 
  public get accountRoleName() {
    return this.getStringAttribute('account_role_name');
  }
  public set accountRoleName(value: string) {
    this._accountRoleName = value;
  }
  public resetAccountRoleName() {
    this._accountRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleNameInput() {
    return this._accountRoleName;
  }

  // actor_id - computed: true, optional: false, required: false
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_key_created - computed: true, optional: false, required: false
  public get apiKeyCreated() {
    return this.getStringAttribute('api_key_created');
  }

  // api_key_expiration - computed: false, optional: true, required: false
  private _apiKeyExpiration?: string; 
  public get apiKeyExpiration() {
    return this.getStringAttribute('api_key_expiration');
  }
  public set apiKeyExpiration(value: string) {
    this._apiKeyExpiration = value;
  }
  public resetApiKeyExpiration() {
    this._apiKeyExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyExpirationInput() {
    return this._apiKeyExpiration;
  }

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }

  // api_key_keepers - computed: false, optional: true, required: false
  private _apiKeyKeepers?: { [key: string]: string }; 
  public get apiKeyKeepers() {
    return this.getStringMapAttribute('api_key_keepers');
  }
  public set apiKeyKeepers(value: { [key: string]: string }) {
    this._apiKeyKeepers = value;
  }
  public resetApiKeyKeepers() {
    this._apiKeyKeepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyKeepersInput() {
    return this._apiKeyKeepers;
  }

  // api_key_name - computed: true, optional: false, required: false
  public get apiKeyName() {
    return this.getStringAttribute('api_key_name');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // old_key_expires_in_seconds - computed: true, optional: true, required: false
  private _oldKeyExpiresInSeconds?: number; 
  public get oldKeyExpiresInSeconds() {
    return this.getNumberAttribute('old_key_expires_in_seconds');
  }
  public set oldKeyExpiresInSeconds(value: number) {
    this._oldKeyExpiresInSeconds = value;
  }
  public resetOldKeyExpiresInSeconds() {
    this._oldKeyExpiresInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldKeyExpiresInSecondsInput() {
    return this._oldKeyExpiresInSeconds;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      account_role_name: cdktf.stringToTerraform(this._accountRoleName),
      api_key_expiration: cdktf.stringToTerraform(this._apiKeyExpiration),
      api_key_keepers: cdktf.hashMapper(cdktf.stringToTerraform)(this._apiKeyKeepers),
      name: cdktf.stringToTerraform(this._name),
      old_key_expires_in_seconds: cdktf.numberToTerraform(this._oldKeyExpiresInSeconds),
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
      account_role_name: {
        value: cdktf.stringToHclTerraform(this._accountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_expiration: {
        value: cdktf.stringToHclTerraform(this._apiKeyExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_keepers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._apiKeyKeepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_key_expires_in_seconds: {
        value: cdktf.numberToHclTerraform(this._oldKeyExpiresInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
