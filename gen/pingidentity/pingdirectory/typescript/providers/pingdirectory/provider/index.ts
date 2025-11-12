// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PingdirectoryProviderConfig {
  /**
  * Paths to files containing PEM-encoded certificates to be trusted as root CAs when connecting to the PingDirectory server over HTTPS. If not set, the host's root CA set will be used. Default value can be set with the `PINGDIRECTORY_PROVIDER_CA_CERTIFICATE_PEM_FILES` environment variable, using commas to delimit multiple PEM files if necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#ca_certificate_pem_files PingdirectoryProvider#ca_certificate_pem_files}
  */
  readonly caCertificatePemFiles?: string[];
  /**
  * URI for PingDirectory HTTPS port. Default value can be set with the `PINGDIRECTORY_PROVIDER_HTTPS_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#https_host PingdirectoryProvider#https_host}
  */
  readonly httpsHost?: string;
  /**
  * Set to true to trust any certificate when connecting to the PingDirectory server. This is insecure and should not be enabled outside of testing. Default value can be set with the `PINGDIRECTORY_PROVIDER_INSECURE_TRUST_ALL_TLS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#insecure_trust_all_tls PingdirectoryProvider#insecure_trust_all_tls}
  */
  readonly insecureTrustAllTls?: boolean | cdktf.IResolvable;
  /**
  * Password for PingDirectory admin user. Default value can be set with the `PINGDIRECTORY_PROVIDER_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#password PingdirectoryProvider#password}
  */
  readonly password?: string;
  /**
  * Version of the PingDirectory server being configured. Default value can be set with the `PINGDIRECTORY_PROVIDER_PRODUCT_VERSION` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#product_version PingdirectoryProvider#product_version}
  */
  readonly productVersion?: string;
  /**
  * Username for PingDirectory admin user. Default value can be set with the `PINGDIRECTORY_PROVIDER_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#username PingdirectoryProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#alias PingdirectoryProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs pingdirectory}
*/
export class PingdirectoryProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PingdirectoryProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PingdirectoryProvider to import
  * @param importFromId The id of the existing PingdirectoryProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PingdirectoryProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs pingdirectory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PingdirectoryProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PingdirectoryProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      terraformProviderSource: 'pingidentity/pingdirectory'
    });
    this._caCertificatePemFiles = config.caCertificatePemFiles;
    this._httpsHost = config.httpsHost;
    this._insecureTrustAllTls = config.insecureTrustAllTls;
    this._password = config.password;
    this._productVersion = config.productVersion;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate_pem_files - computed: false, optional: true, required: false
  private _caCertificatePemFiles?: string[]; 
  public get caCertificatePemFiles() {
    return this._caCertificatePemFiles;
  }
  public set caCertificatePemFiles(value: string[] | undefined) {
    this._caCertificatePemFiles = value;
  }
  public resetCaCertificatePemFiles() {
    this._caCertificatePemFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatePemFilesInput() {
    return this._caCertificatePemFiles;
  }

  // https_host - computed: false, optional: true, required: false
  private _httpsHost?: string; 
  public get httpsHost() {
    return this._httpsHost;
  }
  public set httpsHost(value: string | undefined) {
    this._httpsHost = value;
  }
  public resetHttpsHost() {
    this._httpsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHostInput() {
    return this._httpsHost;
  }

  // insecure_trust_all_tls - computed: false, optional: true, required: false
  private _insecureTrustAllTls?: boolean | cdktf.IResolvable; 
  public get insecureTrustAllTls() {
    return this._insecureTrustAllTls;
  }
  public set insecureTrustAllTls(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureTrustAllTls = value;
  }
  public resetInsecureTrustAllTls() {
    this._insecureTrustAllTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTrustAllTlsInput() {
    return this._insecureTrustAllTls;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this._productVersion;
  }
  public set productVersion(value: string | undefined) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      ca_certificate_pem_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caCertificatePemFiles),
      https_host: cdktf.stringToTerraform(this._httpsHost),
      insecure_trust_all_tls: cdktf.booleanToTerraform(this._insecureTrustAllTls),
      password: cdktf.stringToTerraform(this._password),
      product_version: cdktf.stringToTerraform(this._productVersion),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate_pem_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caCertificatePemFiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      https_host: {
        value: cdktf.stringToHclTerraform(this._httpsHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_trust_all_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureTrustAllTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
