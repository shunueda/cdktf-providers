// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DopplerProviderConfig {
  /**
  * A Doppler token, either a personal or service token. This can also be set via the DOPPLER_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs#doppler_token DopplerProvider#doppler_token}
  */
  readonly dopplerToken: string;
  /**
  * The Doppler API host (i.e. https://api.doppler.com). This can also be set via the DOPPLER_API_HOST environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs#host DopplerProvider#host}
  */
  readonly host?: string;
  /**
  * Whether or not to verify TLS. This can also be set via the DOPPLER_VERIFY_TLS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs#verify_tls DopplerProvider#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs#alias DopplerProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs doppler}
*/
export class DopplerProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DopplerProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DopplerProvider to import
  * @param importFromId The id of the existing DopplerProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DopplerProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs doppler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DopplerProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DopplerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0',
        providerVersionConstraint: '1.21.0'
      },
      terraformProviderSource: 'DopplerHQ/doppler'
    });
    this._dopplerToken = config.dopplerToken;
    this._host = config.host;
    this._verifyTls = config.verifyTls;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // doppler_token - computed: false, optional: false, required: true
  private _dopplerToken?: string; 
  public get dopplerToken() {
    return this._dopplerToken;
  }
  public set dopplerToken(value: string | undefined) {
    this._dopplerToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dopplerTokenInput() {
    return this._dopplerToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this._verifyTls;
  }
  public set verifyTls(value: boolean | cdktf.IResolvable | undefined) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
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
      doppler_token: cdktf.stringToTerraform(this._dopplerToken),
      host: cdktf.stringToTerraform(this._host),
      verify_tls: cdktf.booleanToTerraform(this._verifyTls),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      doppler_token: {
        value: cdktf.stringToHclTerraform(this._dopplerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_tls: {
        value: cdktf.booleanToHclTerraform(this._verifyTls),
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
