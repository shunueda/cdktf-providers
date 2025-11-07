// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CyralProviderConfig {
  /**
  * Client id used to authenticate against the control plane. Can be ommited and declared using the environment variable `CYRAL_TF_CLIENT_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs#client_id CyralProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret used to authenticate against the control plane. Can be ommited and declared using the environment variable `CYRAL_TF_CLIENT_SECRET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs#client_secret CyralProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Control plane host and API port (ex: `tenant.app.cyral.com`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs#control_plane CyralProvider#control_plane}
  */
  readonly controlPlane: string;
  /**
  * Specifies if the client will verify the TLS server certificate used by the control plane. If set to `true`, the client will not verify the server certificate, hence, it will allow insecure connections to be established. This should be set only for testing and is not recommended to be used in production environments. Can be set through the `CYRAL_TF_TLS_SKIP_VERIFY` environment variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs#tls_skip_verify CyralProvider#tls_skip_verify}
  */
  readonly tlsSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs#alias CyralProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs cyral}
*/
export class CyralProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CyralProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CyralProvider to import
  * @param importFromId The id of the existing CyralProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CyralProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs cyral} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CyralProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CyralProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      terraformProviderSource: 'cyralinc/cyral'
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._controlPlane = config.controlPlane;
    this._tlsSkipVerify = config.tlsSkipVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane?: string; 
  public get controlPlane() {
    return this._controlPlane;
  }
  public set controlPlane(value: string | undefined) {
    this._controlPlane = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane;
  }

  // tls_skip_verify - computed: false, optional: true, required: false
  private _tlsSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsSkipVerify() {
    return this._tlsSkipVerify;
  }
  public set tlsSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsSkipVerify = value;
  }
  public resetTlsSkipVerify() {
    this._tlsSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSkipVerifyInput() {
    return this._tlsSkipVerify;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      control_plane: cdktf.stringToTerraform(this._controlPlane),
      tls_skip_verify: cdktf.booleanToTerraform(this._tlsSkipVerify),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane: {
        value: cdktf.stringToHclTerraform(this._controlPlane),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsSkipVerify),
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
