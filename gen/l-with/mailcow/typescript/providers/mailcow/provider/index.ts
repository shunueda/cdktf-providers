// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MailcowProviderConfig {
  /**
  * The mailcow API key, can optionally be passed as `MAILCOW_API_KEY` environmental variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs#api_key MailcowProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * The name of the mailcow host, can optionally be passed as `MAILCOW_HOST_NAME` environmental variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs#host_name MailcowProvider#host_name}
  */
  readonly hostName: string;
  /**
  * Whether to skip TLS verification, can optionally be passed as `MAILCOW_INSECURE` environmental variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs#insecure MailcowProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs#alias MailcowProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs mailcow}
*/
export class MailcowProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MailcowProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailcowProvider to import
  * @param importFromId The id of the existing MailcowProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailcowProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs mailcow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailcowProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MailcowProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2'
      },
      terraformProviderSource: 'l-with/mailcow'
    });
    this._apiKey = config.apiKey;
    this._hostName = config.hostName;
    this._insecure = config.insecure;
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

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this._hostName;
  }
  public set hostName(value: string | undefined) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
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
      host_name: cdktf.stringToTerraform(this._hostName),
      insecure: cdktf.booleanToTerraform(this._insecure),
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
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
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
