// https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DelphixProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs#debug DelphixProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs#host DelphixProvider#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs#host_scheme DelphixProvider#host_scheme}
  */
  readonly hostScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs#key DelphixProvider#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs#tls_insecure_skip DelphixProvider#tls_insecure_skip}
  */
  readonly tlsInsecureSkip?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs#alias DelphixProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs delphix}
*/
export class DelphixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "delphix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DelphixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DelphixProvider to import
  * @param importFromId The id of the existing DelphixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DelphixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "delphix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs delphix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DelphixProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DelphixProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'delphix',
      terraformGeneratorMetadata: {
        providerName: 'delphix',
        providerVersion: '4.1.0'
      },
      terraformProviderSource: 'delphix-integrations/delphix'
    });
    this._debug = config.debug;
    this._host = config.host;
    this._hostScheme = config.hostScheme;
    this._key = config.key;
    this._tlsInsecureSkip = config.tlsInsecureSkip;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_scheme - computed: false, optional: true, required: false
  private _hostScheme?: string; 
  public get hostScheme() {
    return this._hostScheme;
  }
  public set hostScheme(value: string | undefined) {
    this._hostScheme = value;
  }
  public resetHostScheme() {
    this._hostScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSchemeInput() {
    return this._hostScheme;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // tls_insecure_skip - computed: false, optional: true, required: false
  private _tlsInsecureSkip?: boolean | cdktf.IResolvable; 
  public get tlsInsecureSkip() {
    return this._tlsInsecureSkip;
  }
  public set tlsInsecureSkip(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecureSkip = value;
  }
  public resetTlsInsecureSkip() {
    this._tlsInsecureSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureSkipInput() {
    return this._tlsInsecureSkip;
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
      debug: cdktf.booleanToTerraform(this._debug),
      host: cdktf.stringToTerraform(this._host),
      host_scheme: cdktf.stringToTerraform(this._hostScheme),
      key: cdktf.stringToTerraform(this._key),
      tls_insecure_skip: cdktf.booleanToTerraform(this._tlsInsecureSkip),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_scheme: {
        value: cdktf.stringToHclTerraform(this._hostScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_insecure_skip: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecureSkip),
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
