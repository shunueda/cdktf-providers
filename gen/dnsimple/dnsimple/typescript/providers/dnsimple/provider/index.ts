// https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsimpleProviderConfig {
  /**
  * The account for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#account DnsimpleProvider#account}
  */
  readonly account?: string;
  /**
  * Flag to enable the prefetch of zone records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#prefetch DnsimpleProvider#prefetch}
  */
  readonly prefetch?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable the sandbox API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#sandbox DnsimpleProvider#sandbox}
  */
  readonly sandbox?: boolean | cdktf.IResolvable;
  /**
  * The API v2 token for API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#token DnsimpleProvider#token}
  */
  readonly token?: string;
  /**
  * Custom string to append to the user agent used for sending HTTP requests to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#user_agent DnsimpleProvider#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#alias DnsimpleProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs dnsimple}
*/
export class DnsimpleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnsimple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsimpleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsimpleProvider to import
  * @param importFromId The id of the existing DnsimpleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsimpleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnsimple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsimple/dnsimple/1.10.0/docs dnsimple} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsimpleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsimpleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnsimple',
      terraformGeneratorMetadata: {
        providerName: 'dnsimple',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      terraformProviderSource: 'dnsimple/dnsimple'
    });
    this._account = config.account;
    this._prefetch = config.prefetch;
    this._sandbox = config.sandbox;
    this._token = config.token;
    this._userAgent = config.userAgent;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // prefetch - computed: false, optional: true, required: false
  private _prefetch?: boolean | cdktf.IResolvable; 
  public get prefetch() {
    return this._prefetch;
  }
  public set prefetch(value: boolean | cdktf.IResolvable | undefined) {
    this._prefetch = value;
  }
  public resetPrefetch() {
    this._prefetch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefetchInput() {
    return this._prefetch;
  }

  // sandbox - computed: false, optional: true, required: false
  private _sandbox?: boolean | cdktf.IResolvable; 
  public get sandbox() {
    return this._sandbox;
  }
  public set sandbox(value: boolean | cdktf.IResolvable | undefined) {
    this._sandbox = value;
  }
  public resetSandbox() {
    this._sandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxInput() {
    return this._sandbox;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this._userAgent;
  }
  public set userAgent(value: string | undefined) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
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
      account: cdktf.stringToTerraform(this._account),
      prefetch: cdktf.booleanToTerraform(this._prefetch),
      sandbox: cdktf.booleanToTerraform(this._sandbox),
      token: cdktf.stringToTerraform(this._token),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefetch: {
        value: cdktf.booleanToHclTerraform(this._prefetch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sandbox: {
        value: cdktf.booleanToHclTerraform(this._sandbox),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
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
