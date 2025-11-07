// https://registry.terraform.io/providers/lxc/incus/1.0.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncusProviderConfig {
  /**
  * Accept the server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#accept_remote_certificate IncusProvider#accept_remote_certificate}
  */
  readonly acceptRemoteCertificate?: boolean | cdktf.IResolvable;
  /**
  * The directory to look for existing Incus configuration. (default = $HOME/.config/incus)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#config_dir IncusProvider#config_dir}
  */
  readonly configDir?: string;
  /**
  * The default remote to use when no other remote is defined in a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#default_remote IncusProvider#default_remote}
  */
  readonly defaultRemote?: string;
  /**
  * Automatically generate the Incus client certificates if they don't exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#generate_client_certificates IncusProvider#generate_client_certificates}
  */
  readonly generateClientCertificates?: boolean | cdktf.IResolvable;
  /**
  * The project where project-scoped resources will be created. Can be overridden in individual resources. (default = default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#project IncusProvider#project}
  */
  readonly project?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#alias IncusProvider#alias}
  */
  readonly alias?: string;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#remote IncusProvider#remote}
  */
  readonly remote?: IncusProviderRemote[] | cdktf.IResolvable;
}
export interface IncusProviderRemote {
  /**
  * The URL of the Incus host. The default will be the path to the local unix socket, or leaving it as an empty string will use the default socket path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#address IncusProvider#address}
  */
  readonly address?: string;
  /**
  * Server authentication type, tls or oidc. ( Only for the `incus` protocol )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#authentication_type IncusProvider#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Name of the Incus remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#name IncusProvider#name}
  */
  readonly name: string;
  /**
  * Server protocol ( incus, oci or simplestreams )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#protocol IncusProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * Public image server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#public IncusProvider#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * The trust token used for initial authentication with the Incus remote.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#token IncusProvider#token}
  */
  readonly token?: string;
}

export function incusProviderRemoteToTerraform(struct?: IncusProviderRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    public: cdktf.booleanToTerraform(struct!.public),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function incusProviderRemoteToHclTerraform(struct?: IncusProviderRemote | cdktf.IResolvable): any {
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
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
* Represents a {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs incus}
*/
export class IncusProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncusProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncusProvider to import
  * @param importFromId The id of the existing IncusProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncusProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs incus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncusProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IncusProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incus',
      terraformGeneratorMetadata: {
        providerName: 'incus',
        providerVersion: '1.0.0'
      },
      terraformProviderSource: 'lxc/incus'
    });
    this._acceptRemoteCertificate = config.acceptRemoteCertificate;
    this._configDir = config.configDir;
    this._defaultRemote = config.defaultRemote;
    this._generateClientCertificates = config.generateClientCertificates;
    this._project = config.project;
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

  // default_remote - computed: false, optional: true, required: false
  private _defaultRemote?: string; 
  public get defaultRemote() {
    return this._defaultRemote;
  }
  public set defaultRemote(value: string | undefined) {
    this._defaultRemote = value;
  }
  public resetDefaultRemote() {
    this._defaultRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRemoteInput() {
    return this._defaultRemote;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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
  private _remote?: IncusProviderRemote[] | cdktf.IResolvable; 
  public get remote() {
    return this._remote;
  }
  public set remote(value: IncusProviderRemote[] | cdktf.IResolvable | undefined) {
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
      default_remote: cdktf.stringToTerraform(this._defaultRemote),
      generate_client_certificates: cdktf.booleanToTerraform(this._generateClientCertificates),
      project: cdktf.stringToTerraform(this._project),
      alias: cdktf.stringToTerraform(this._alias),
      remote: cdktf.listMapper(incusProviderRemoteToTerraform, true)(this._remote),
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
      default_remote: {
        value: cdktf.stringToHclTerraform(this._defaultRemote),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
      remote: {
        value: cdktf.listMapperHcl(incusProviderRemoteToHclTerraform, true)(this._remote),
        isBlock: true,
        type: "list",
        storageClassType: "IncusProviderRemoteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
