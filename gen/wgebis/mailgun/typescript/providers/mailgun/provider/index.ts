// https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MailgunProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs#api_key MailgunProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs#alias MailgunProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs mailgun}
*/
export class MailgunProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailgun";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MailgunProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailgunProvider to import
  * @param importFromId The id of the existing MailgunProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailgunProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailgun", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs mailgun} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailgunProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MailgunProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mailgun',
      terraformGeneratorMetadata: {
        providerName: 'mailgun',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      terraformProviderSource: 'wgebis/mailgun'
    });
    this._apiKey = config.apiKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
