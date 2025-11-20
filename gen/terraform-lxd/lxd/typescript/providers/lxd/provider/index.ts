// https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LxdProviderConfig {
  /**
  * Accept the server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#accept_remote_certificate LxdProvider#accept_remote_certificate}
  */
  readonly acceptRemoteCertificate?: boolean | cdktf.IResolvable;
  /**
  * The directory to look for existing LXD configuration. (default = $HOME/snap/lxd/common/config:$HOME/.config/lxc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#config_dir LxdProvider#config_dir}
  */
  readonly configDir?: string;
  /**
  * Automatically generate the LXD client certificates if they don't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#generate_client_certificates LxdProvider#generate_client_certificates}
  */
  readonly generateClientCertificates?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#alias LxdProvider#alias}
  */
  readonly alias?: string;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#remote LxdProvider#remote}
  */
  readonly remote?: LxdProviderRemote[] | cdktf.IResolvable;
}
export interface LxdProviderRemote {
  /**
  * The FQDN or IP where the LXD daemon can be contacted. (default = "")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#address LxdProvider#address}
  */
  readonly address?: string;
  /**
  * Set this remote as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#default LxdProvider#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Name of the LXD remote. Required when lxd_scheme set to https, to enable locating server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#name LxdProvider#name}
  */
  readonly name: string;
  /**
  * The trust password used for initial authentication with the LXD remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#password LxdProvider#password}
  */
  readonly password?: string;
  /**
  * Port LXD Daemon API is listening on. (default = 8443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#port LxdProvider#port}
  */
  readonly port?: string;
  /**
  * Remote protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#protocol LxdProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * Unix (unix) or HTTPs (https). (default = unix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#scheme LxdProvider#scheme}
  */
  readonly scheme?: string;
  /**
  * The trust token used for initial authentication with the LXD remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#token LxdProvider#token}
  */
  readonly token?: string;
}

export function lxdProviderRemoteToTerraform(struct?: LxdProviderRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    default: cdktf.booleanToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function lxdProviderRemoteToHclTerraform(struct?: LxdProviderRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs lxd}
*/
export class LxdProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lxd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LxdProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LxdProvider to import
  * @param importFromId The id of the existing LxdProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LxdProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lxd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.1/docs lxd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LxdProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LxdProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'lxd',
      terraformGeneratorMetadata: {
        providerName: 'lxd',
        providerVersion: '2.6.1',
        providerVersionConstraint: '2.6.1'
      },
      terraformProviderSource: 'terraform-lxd/lxd'
    });
    this._acceptRemoteCertificate = config.acceptRemoteCertificate;
    this._configDir = config.configDir;
    this._generateClientCertificates = config.generateClientCertificates;
    this._alias = config.alias;
    this._remote = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_remote_certificate - computed: false, optional: true, required: false
  private _acceptRemoteCertificate?: boolean | cdktf.IResolvable; 
  public get acceptRemoteCertificate() {
    return this._acceptRemoteCertificate;
  }
  public set acceptRemoteCertificate(value: boolean | cdktf.IResolvable | undefined) {
    this._acceptRemoteCertificate = value;
  }
  public resetAcceptRemoteCertificate() {
    this._acceptRemoteCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRemoteCertificateInput() {
    return this._acceptRemoteCertificate;
  }

  // config_dir - computed: false, optional: true, required: false
  private _configDir?: string; 
  public get configDir() {
    return this._configDir;
  }
  public set configDir(value: string | undefined) {
    this._configDir = value;
  }
  public resetConfigDir() {
    this._configDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDirInput() {
    return this._configDir;
  }

  // generate_client_certificates - computed: false, optional: true, required: false
  private _generateClientCertificates?: boolean | cdktf.IResolvable; 
  public get generateClientCertificates() {
    return this._generateClientCertificates;
  }
  public set generateClientCertificates(value: boolean | cdktf.IResolvable | undefined) {
    this._generateClientCertificates = value;
  }
  public resetGenerateClientCertificates() {
    this._generateClientCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateClientCertificatesInput() {
    return this._generateClientCertificates;
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

  // remote - computed: false, optional: true, required: false
  private _remote?: LxdProviderRemote[] | cdktf.IResolvable; 
  public get remote() {
    return this._remote;
  }
  public set remote(value: LxdProviderRemote[] | cdktf.IResolvable | undefined) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_remote_certificate: cdktf.booleanToTerraform(this._acceptRemoteCertificate),
      config_dir: cdktf.stringToTerraform(this._configDir),
      generate_client_certificates: cdktf.booleanToTerraform(this._generateClientCertificates),
      alias: cdktf.stringToTerraform(this._alias),
      remote: cdktf.listMapper(lxdProviderRemoteToTerraform, true)(this._remote),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_remote_certificate: {
        value: cdktf.booleanToHclTerraform(this._acceptRemoteCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_dir: {
        value: cdktf.stringToHclTerraform(this._configDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_client_certificates: {
        value: cdktf.booleanToHclTerraform(this._generateClientCertificates),
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
      remote: {
        value: cdktf.listMapperHcl(lxdProviderRemoteToHclTerraform, true)(this._remote),
        isBlock: true,
        type: "list",
        storageClassType: "LxdProviderRemoteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
