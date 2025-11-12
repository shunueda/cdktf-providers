// https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OvirtProviderConfig {
  /**
  * Additional HTTP headers to set on each API call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#extra_headers OvirtProvider#extra_headers}
  */
  readonly extraHeaders?: { [key: string]: string };
  /**
  * When set to true, the Terraform provider runs against an internal simulation. This should only be used for testing when an oVirt engine is not available as the mock backend does not persist state across runs. When set to false, one of the tls_ options is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#mock OvirtProvider#mock}
  */
  readonly mock?: boolean | cdktf.IResolvable;
  /**
  * Password for oVirt authentication. Required when mock = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#password OvirtProvider#password}
  */
  readonly password?: string;
  /**
  * Validate the Engine certificate against the provided CA certificates. The certificate chain passed should be in PEM format. Can be used in parallel with other `tls_` options, one `tls_` option is required when mock = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#tls_ca_bundle OvirtProvider#tls_ca_bundle}
  */
  readonly tlsCaBundle?: string;
  /**
  * Validate the engine certificate against the CA certificates provided in the specified directories. The directory should contain only files with certificates in PEM format. Can be used in parallel with other tls_ options, one tls_ option is required when mock = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#tls_ca_dirs OvirtProvider#tls_ca_dirs}
  */
  readonly tlsCaDirs?: string[];
  /**
  * Validate the Engine certificate against the CA certificates provided in the files in this parameter. The files should contain certificates in PEM format. Can be used in parallel with other tls_ options, one tls_ option is required when mock = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#tls_ca_files OvirtProvider#tls_ca_files}
  */
  readonly tlsCaFiles?: string[];
  /**
  * Disable certificate verification when connecting the Engine. This is not recommended. Setting this option is incompatible with other `tls_` options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#tls_insecure OvirtProvider#tls_insecure}
  */
  readonly tlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * Use the system certificate pool to verify the Engine certificate. This does not work on Windows. Can be used in parallel with other `tls_` options, one tls_ option is required when mock = false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#tls_system OvirtProvider#tls_system}
  */
  readonly tlsSystem?: boolean | cdktf.IResolvable;
  /**
  * URL for the oVirt engine API. Required when mock = false. Example: `https://example.com/ovirt-engine/api/`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#url OvirtProvider#url}
  */
  readonly url?: string;
  /**
  * Username and realm for oVirt authentication. Required when mock = false. Example: `admin@internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#username OvirtProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#alias OvirtProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs ovirt}
*/
export class OvirtProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovirt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OvirtProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OvirtProvider to import
  * @param importFromId The id of the existing OvirtProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OvirtProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovirt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovirt/ovirt/2.1.5/docs ovirt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OvirtProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OvirtProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovirt',
      terraformGeneratorMetadata: {
        providerName: 'ovirt',
        providerVersion: '2.1.5',
        providerVersionConstraint: '2.1.5'
      },
      terraformProviderSource: 'oVirt/ovirt'
    });
    this._extraHeaders = config.extraHeaders;
    this._mock = config.mock;
    this._password = config.password;
    this._tlsCaBundle = config.tlsCaBundle;
    this._tlsCaDirs = config.tlsCaDirs;
    this._tlsCaFiles = config.tlsCaFiles;
    this._tlsInsecure = config.tlsInsecure;
    this._tlsSystem = config.tlsSystem;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_headers - computed: false, optional: true, required: false
  private _extraHeaders?: { [key: string]: string }; 
  public get extraHeaders() {
    return this._extraHeaders;
  }
  public set extraHeaders(value: { [key: string]: string } | undefined) {
    this._extraHeaders = value;
  }
  public resetExtraHeaders() {
    this._extraHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraHeadersInput() {
    return this._extraHeaders;
  }

  // mock - computed: false, optional: true, required: false
  private _mock?: boolean | cdktf.IResolvable; 
  public get mock() {
    return this._mock;
  }
  public set mock(value: boolean | cdktf.IResolvable | undefined) {
    this._mock = value;
  }
  public resetMock() {
    this._mock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockInput() {
    return this._mock;
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

  // tls_ca_bundle - computed: false, optional: true, required: false
  private _tlsCaBundle?: string; 
  public get tlsCaBundle() {
    return this._tlsCaBundle;
  }
  public set tlsCaBundle(value: string | undefined) {
    this._tlsCaBundle = value;
  }
  public resetTlsCaBundle() {
    this._tlsCaBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaBundleInput() {
    return this._tlsCaBundle;
  }

  // tls_ca_dirs - computed: false, optional: true, required: false
  private _tlsCaDirs?: string[]; 
  public get tlsCaDirs() {
    return this._tlsCaDirs;
  }
  public set tlsCaDirs(value: string[] | undefined) {
    this._tlsCaDirs = value;
  }
  public resetTlsCaDirs() {
    this._tlsCaDirs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaDirsInput() {
    return this._tlsCaDirs;
  }

  // tls_ca_files - computed: false, optional: true, required: false
  private _tlsCaFiles?: string[]; 
  public get tlsCaFiles() {
    return this._tlsCaFiles;
  }
  public set tlsCaFiles(value: string[] | undefined) {
    this._tlsCaFiles = value;
  }
  public resetTlsCaFiles() {
    this._tlsCaFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaFilesInput() {
    return this._tlsCaFiles;
  }

  // tls_insecure - computed: false, optional: true, required: false
  private _tlsInsecure?: boolean | cdktf.IResolvable; 
  public get tlsInsecure() {
    return this._tlsInsecure;
  }
  public set tlsInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecure = value;
  }
  public resetTlsInsecure() {
    this._tlsInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureInput() {
    return this._tlsInsecure;
  }

  // tls_system - computed: false, optional: true, required: false
  private _tlsSystem?: boolean | cdktf.IResolvable; 
  public get tlsSystem() {
    return this._tlsSystem;
  }
  public set tlsSystem(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsSystem = value;
  }
  public resetTlsSystem() {
    this._tlsSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSystemInput() {
    return this._tlsSystem;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      extra_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraHeaders),
      mock: cdktf.booleanToTerraform(this._mock),
      password: cdktf.stringToTerraform(this._password),
      tls_ca_bundle: cdktf.stringToTerraform(this._tlsCaBundle),
      tls_ca_dirs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsCaDirs),
      tls_ca_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsCaFiles),
      tls_insecure: cdktf.booleanToTerraform(this._tlsInsecure),
      tls_system: cdktf.booleanToTerraform(this._tlsSystem),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mock: {
        value: cdktf.booleanToHclTerraform(this._mock),
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
      tls_ca_bundle: {
        value: cdktf.stringToHclTerraform(this._tlsCaBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ca_dirs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsCaDirs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tls_ca_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsCaFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tls_insecure: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_system: {
        value: cdktf.booleanToHclTerraform(this._tlsSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
