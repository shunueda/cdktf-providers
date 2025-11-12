// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/token_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/token_settings#id TokenSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Check out this [blog post](http://www.dynatrace.com/blog/further-increased-security-of-your-api-tokens-by-automating-token-protection/) to find out more about the new Dynatrace API token format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/token_settings#new_token_format TokenSettings#new_token_format}
  */
  readonly newTokenFormat: boolean | cdktf.IResolvable;
  /**
  * Allow users of this environment to generate personal access tokens based on user permissions. 
  *  Note that existing personal access tokens will become unusable while this setting is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/token_settings#personal_tokens TokenSettings#personal_tokens}
  */
  readonly personalTokens: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/token_settings dynatrace_token_settings}
*/
export class TokenSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_token_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TokenSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TokenSettings to import
  * @param importFromId The id of the existing TokenSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/token_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TokenSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_token_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/token_settings dynatrace_token_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: TokenSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_token_settings',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._newTokenFormat = config.newTokenFormat;
    this._personalTokens = config.personalTokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // new_token_format - computed: false, optional: false, required: true
  private _newTokenFormat?: boolean | cdktf.IResolvable; 
  public get newTokenFormat() {
    return this.getBooleanAttribute('new_token_format');
  }
  public set newTokenFormat(value: boolean | cdktf.IResolvable) {
    this._newTokenFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newTokenFormatInput() {
    return this._newTokenFormat;
  }

  // personal_tokens - computed: false, optional: false, required: true
  private _personalTokens?: boolean | cdktf.IResolvable; 
  public get personalTokens() {
    return this.getBooleanAttribute('personal_tokens');
  }
  public set personalTokens(value: boolean | cdktf.IResolvable) {
    this._personalTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get personalTokensInput() {
    return this._personalTokens;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      new_token_format: cdktf.booleanToTerraform(this._newTokenFormat),
      personal_tokens: cdktf.booleanToTerraform(this._personalTokens),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_token_format: {
        value: cdktf.booleanToHclTerraform(this._newTokenFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      personal_tokens: {
        value: cdktf.booleanToHclTerraform(this._personalTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
