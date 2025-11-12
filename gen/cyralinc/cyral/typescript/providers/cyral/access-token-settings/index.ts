// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessTokenSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default duration used for access token validity. Defaults to `36000s`. Should follow the protobuf duration string format, which corresponds to a sequence of decimal numbers suffixed by a 's' at the end, representing the duration in seconds. For example: `300s`, `60s`, `10.50s`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings#default_validity AccessTokenSettings#default_validity}
  */
  readonly defaultValidity?: string;
  /**
  * The maximum number of access tokens that a user can have at the same time. Must be between `1` and `5` (inclusive). Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings#max_number_of_tokens_per_user AccessTokenSettings#max_number_of_tokens_per_user}
  */
  readonly maxNumberOfTokensPerUser?: number;
  /**
  * The maximum duration that a user can request for access token validity. Defaults to `36000s`. Should follow the protobuf duration string format, which corresponds to a sequence of decimal numbers suffixed by a 's' at the end, representing the duration in seconds. For example: `300s`, `60s`, `10.50s`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings#max_validity AccessTokenSettings#max_validity}
  */
  readonly maxValidity?: string;
  /**
  * The configuration that determines if the sidecar should perform access token validation independently using cached token values. If this is `true`, the sidecar will be able to validate and authenticate database access even when it cannot reach the Control Plane. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings#offline_token_validation AccessTokenSettings#offline_token_validation}
  */
  readonly offlineTokenValidation?: boolean | cdktf.IResolvable;
  /**
  * The number of characters of the access token plaintext value. Valid values are `8`, `12` and `16`. Defaults to `16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings#token_length AccessTokenSettings#token_length}
  */
  readonly tokenLength?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings cyral_access_token_settings}
*/
export class AccessTokenSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_access_token_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessTokenSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessTokenSettings to import
  * @param importFromId The id of the existing AccessTokenSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessTokenSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_access_token_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/access_token_settings cyral_access_token_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessTokenSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccessTokenSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cyral_access_token_settings',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultValidity = config.defaultValidity;
    this._maxNumberOfTokensPerUser = config.maxNumberOfTokensPerUser;
    this._maxValidity = config.maxValidity;
    this._offlineTokenValidation = config.offlineTokenValidation;
    this._tokenLength = config.tokenLength;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_validity - computed: false, optional: true, required: false
  private _defaultValidity?: string; 
  public get defaultValidity() {
    return this.getStringAttribute('default_validity');
  }
  public set defaultValidity(value: string) {
    this._defaultValidity = value;
  }
  public resetDefaultValidity() {
    this._defaultValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValidityInput() {
    return this._defaultValidity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_number_of_tokens_per_user - computed: false, optional: true, required: false
  private _maxNumberOfTokensPerUser?: number; 
  public get maxNumberOfTokensPerUser() {
    return this.getNumberAttribute('max_number_of_tokens_per_user');
  }
  public set maxNumberOfTokensPerUser(value: number) {
    this._maxNumberOfTokensPerUser = value;
  }
  public resetMaxNumberOfTokensPerUser() {
    this._maxNumberOfTokensPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfTokensPerUserInput() {
    return this._maxNumberOfTokensPerUser;
  }

  // max_validity - computed: false, optional: true, required: false
  private _maxValidity?: string; 
  public get maxValidity() {
    return this.getStringAttribute('max_validity');
  }
  public set maxValidity(value: string) {
    this._maxValidity = value;
  }
  public resetMaxValidity() {
    this._maxValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValidityInput() {
    return this._maxValidity;
  }

  // offline_token_validation - computed: false, optional: true, required: false
  private _offlineTokenValidation?: boolean | cdktf.IResolvable; 
  public get offlineTokenValidation() {
    return this.getBooleanAttribute('offline_token_validation');
  }
  public set offlineTokenValidation(value: boolean | cdktf.IResolvable) {
    this._offlineTokenValidation = value;
  }
  public resetOfflineTokenValidation() {
    this._offlineTokenValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineTokenValidationInput() {
    return this._offlineTokenValidation;
  }

  // token_length - computed: false, optional: true, required: false
  private _tokenLength?: number; 
  public get tokenLength() {
    return this.getNumberAttribute('token_length');
  }
  public set tokenLength(value: number) {
    this._tokenLength = value;
  }
  public resetTokenLength() {
    this._tokenLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLengthInput() {
    return this._tokenLength;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_validity: cdktf.stringToTerraform(this._defaultValidity),
      max_number_of_tokens_per_user: cdktf.numberToTerraform(this._maxNumberOfTokensPerUser),
      max_validity: cdktf.stringToTerraform(this._maxValidity),
      offline_token_validation: cdktf.booleanToTerraform(this._offlineTokenValidation),
      token_length: cdktf.numberToTerraform(this._tokenLength),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_validity: {
        value: cdktf.stringToHclTerraform(this._defaultValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_number_of_tokens_per_user: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfTokensPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_validity: {
        value: cdktf.stringToHclTerraform(this._maxValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_token_validation: {
        value: cdktf.booleanToHclTerraform(this._offlineTokenValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_length: {
        value: cdktf.numberToHclTerraform(this._tokenLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
