// https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GsuiteProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#credentials GsuiteProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#customer_id GsuiteProvider#customer_id}
  */
  readonly customerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#impersonated_user_email GsuiteProvider#impersonated_user_email}
  */
  readonly impersonatedUserEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#oauth_scopes GsuiteProvider#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#timeout_minutes GsuiteProvider#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#update_existing GsuiteProvider#update_existing}
  */
  readonly updateExisting?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#alias GsuiteProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs gsuite}
*/
export class GsuiteProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gsuite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GsuiteProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GsuiteProvider to import
  * @param importFromId The id of the existing GsuiteProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GsuiteProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gsuite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs gsuite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GsuiteProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GsuiteProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gsuite',
      terraformGeneratorMetadata: {
        providerName: 'gsuite',
        providerVersion: '0.1.62'
      },
      terraformProviderSource: 'DeviaVir/gsuite'
    });
    this._credentials = config.credentials;
    this._customerId = config.customerId;
    this._impersonatedUserEmail = config.impersonatedUserEmail;
    this._oauthScopes = config.oauthScopes;
    this._timeoutMinutes = config.timeoutMinutes;
    this._updateExisting = config.updateExisting;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this._customerId;
  }
  public set customerId(value: string | undefined) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // impersonated_user_email - computed: false, optional: true, required: false
  private _impersonatedUserEmail?: string; 
  public get impersonatedUserEmail() {
    return this._impersonatedUserEmail;
  }
  public set impersonatedUserEmail(value: string | undefined) {
    this._impersonatedUserEmail = value;
  }
  public resetImpersonatedUserEmail() {
    this._impersonatedUserEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonatedUserEmailInput() {
    return this._impersonatedUserEmail;
  }

  // oauth_scopes - computed: false, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this._oauthScopes;
  }
  public set oauthScopes(value: string[] | undefined) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this._timeoutMinutes;
  }
  public set timeoutMinutes(value: number | undefined) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }

  // update_existing - computed: false, optional: true, required: false
  private _updateExisting?: boolean | cdktf.IResolvable; 
  public get updateExisting() {
    return this._updateExisting;
  }
  public set updateExisting(value: boolean | cdktf.IResolvable | undefined) {
    this._updateExisting = value;
  }
  public resetUpdateExisting() {
    this._updateExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateExistingInput() {
    return this._updateExisting;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: cdktf.stringToTerraform(this._credentials),
      customer_id: cdktf.stringToTerraform(this._customerId),
      impersonated_user_email: cdktf.stringToTerraform(this._impersonatedUserEmail),
      oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauthScopes),
      timeout_minutes: cdktf.numberToTerraform(this._timeoutMinutes),
      update_existing: cdktf.booleanToTerraform(this._updateExisting),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_id: {
        value: cdktf.stringToHclTerraform(this._customerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonated_user_email: {
        value: cdktf.stringToHclTerraform(this._impersonatedUserEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauthScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeout_minutes: {
        value: cdktf.numberToHclTerraform(this._timeoutMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_existing: {
        value: cdktf.booleanToHclTerraform(this._updateExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
