// https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfraProviderConfig {
  /**
  * The access key used to authenticate with the Infra server. Can also be sourced from `INFRA_ACCESS_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs#access_key InfraProvider#access_key}
  */
  readonly accessKey: string;
  /**
  * The Infra server instance Terraform will communicate with. Can also be sourced from `INFRA_HOST`. Default is `https://api.infrahq.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs#host InfraProvider#host}
  */
  readonly host?: string;
  /**
  * The server's PEM-encoded public certificate for client verification. Can also be sourced from `INFRA_SERVER_CERTIFICATE`. Cannot be used with `skip_tls_verify`, `server_certificate_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs#server_certificate InfraProvider#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * The server's PEM-encoded public certificate file for client verification. Can also be sourced from `INFRA_SERVER_CERTIFICATE_FILE`. Cannot be used with `skip_tls_verify`, `server_certificate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs#server_certificate_file InfraProvider#server_certificate_file}
  */
  readonly serverCertificateFile?: string;
  /**
  * Controls client verification of the server certificate. This should only be `true` for testing or development. Can also be sourced from`INFRA_SKIP_TLS_VERIFY`. Cannot be used with `server_certificate`, `server_certificate_file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs#skip_tls_verify InfraProvider#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs#alias InfraProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs infra}
*/
export class InfraProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfraProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfraProvider to import
  * @param importFromId The id of the existing InfraProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfraProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infrahq/infra/0.3.0/docs infra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfraProviderConfig
  */
  public constructor(scope: Construct, id: string, config: InfraProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'infra',
      terraformGeneratorMetadata: {
        providerName: 'infra',
        providerVersion: '0.3.0'
      },
      terraformProviderSource: 'infrahq/infra'
    });
    this._accessKey = config.accessKey;
    this._host = config.host;
    this._serverCertificate = config.serverCertificate;
    this._serverCertificateFile = config.serverCertificateFile;
    this._skipTlsVerify = config.skipTlsVerify;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
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

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this._serverCertificate;
  }
  public set serverCertificate(value: string | undefined) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // server_certificate_file - computed: false, optional: true, required: false
  private _serverCertificateFile?: string; 
  public get serverCertificateFile() {
    return this._serverCertificateFile;
  }
  public set serverCertificateFile(value: string | undefined) {
    this._serverCertificateFile = value;
  }
  public resetServerCertificateFile() {
    this._serverCertificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateFileInput() {
    return this._serverCertificateFile;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this._skipTlsVerify;
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
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
      access_key: cdktf.stringToTerraform(this._accessKey),
      host: cdktf.stringToTerraform(this._host),
      server_certificate: cdktf.stringToTerraform(this._serverCertificate),
      server_certificate_file: cdktf.stringToTerraform(this._serverCertificateFile),
      skip_tls_verify: cdktf.booleanToTerraform(this._skipTlsVerify),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
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
      server_certificate: {
        value: cdktf.stringToHclTerraform(this._serverCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_file: {
        value: cdktf.stringToHclTerraform(this._serverCertificateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._skipTlsVerify),
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
