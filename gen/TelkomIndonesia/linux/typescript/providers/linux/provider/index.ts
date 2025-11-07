// https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinuxProviderConfig {
  /**
  * Set to `false` to disable using ssh-agent to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#agent LinuxProvider#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The preferred identity from the ssh agent for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#agent_identity LinuxProvider#agent_identity}
  */
  readonly agentIdentity?: string;
  /**
  * The contents of a signed CA Certificate. The certificate argument must be used in conjunction with a `bastion_private_key`. These can be loaded from a file on disk using the the `file` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#bastion_certificate LinuxProvider#bastion_certificate}
  */
  readonly bastionCertificate?: string;
  /**
  * Setting this enables the bastion Host connection. This host will be connected to first, and then the `host` connection will be made from there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#bastion_host LinuxProvider#bastion_host}
  */
  readonly bastionHost?: string;
  /**
  * The public key from the remote host or the signing CA, used to verify the host connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#bastion_host_key LinuxProvider#bastion_host_key}
  */
  readonly bastionHostKey?: string;
  /**
  * The password we should use for the bastion host. Defaults to the value of the `password` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#bastion_password LinuxProvider#bastion_password}
  */
  readonly bastionPassword?: string;
  /**
  * The port to use connect to the bastion host. Defaults to the value of the `port` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#bastion_port LinuxProvider#bastion_port}
  */
  readonly bastionPort?: number;
  /**
  * The contents of an SSH key file to use for the bastion host. These can be loaded from a file on disk using the `file` function. Defaults to the value of the `private_key` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#bastion_private_key LinuxProvider#bastion_private_key}
  */
  readonly bastionPrivateKey?: string;
  /**
  * The user for the connection to the bastion host. Defaults to the value of the `user` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#bastion_user LinuxProvider#bastion_user}
  */
  readonly bastionUser?: string;
  /**
  * The contents of a signed CA Certificate. The certificate argument must be used in conjunction with a `private_key`. These can be loaded from a file on disk using the the `file` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#certificate LinuxProvider#certificate}
  */
  readonly certificate?: string;
  /**
  * The address of the resource to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#host LinuxProvider#host}
  */
  readonly host?: string;
  /**
  * The public key from the remote host or the signing CA, used to verify the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#host_key LinuxProvider#host_key}
  */
  readonly hostKey?: string;
  /**
  * The password we should use for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#password LinuxProvider#password}
  */
  readonly password?: string;
  /**
  * The port to connect to. Defaults to `22`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#port LinuxProvider#port}
  */
  readonly port?: number;
  /**
  * The contents of an SSH key to use for the connection. These can be loaded from a file on disk using the `file` function. This takes preference over the `password` if provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#private_key LinuxProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * The path used to copy scripts meant for remote execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#script_path LinuxProvider#script_path}
  */
  readonly scriptPath?: string;
  /**
  *  The timeout to wait for the connection to become available. Should be provided as a string like `30s` or `5m`. Defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#timeout LinuxProvider#timeout}
  */
  readonly timeout?: string;
  /**
  * The user that we should use for the connection. Defaults to `root`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#user LinuxProvider#user}
  */
  readonly user?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#alias LinuxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs linux}
*/
export class LinuxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linux";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LinuxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LinuxProvider to import
  * @param importFromId The id of the existing LinuxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LinuxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linux", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs linux} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinuxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LinuxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linux',
      terraformGeneratorMetadata: {
        providerName: 'linux',
        providerVersion: '0.7.1'
      },
      terraformProviderSource: 'TelkomIndonesia/linux'
    });
    this._agent = config.agent;
    this._agentIdentity = config.agentIdentity;
    this._bastionCertificate = config.bastionCertificate;
    this._bastionHost = config.bastionHost;
    this._bastionHostKey = config.bastionHostKey;
    this._bastionPassword = config.bastionPassword;
    this._bastionPort = config.bastionPort;
    this._bastionPrivateKey = config.bastionPrivateKey;
    this._bastionUser = config.bastionUser;
    this._certificate = config.certificate;
    this._host = config.host;
    this._hostKey = config.hostKey;
    this._password = config.password;
    this._port = config.port;
    this._privateKey = config.privateKey;
    this._scriptPath = config.scriptPath;
    this._timeout = config.timeout;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent - computed: false, optional: true, required: false
  private _agent?: boolean | cdktf.IResolvable; 
  public get agent() {
    return this._agent;
  }
  public set agent(value: boolean | cdktf.IResolvable | undefined) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // agent_identity - computed: false, optional: true, required: false
  private _agentIdentity?: string; 
  public get agentIdentity() {
    return this._agentIdentity;
  }
  public set agentIdentity(value: string | undefined) {
    this._agentIdentity = value;
  }
  public resetAgentIdentity() {
    this._agentIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdentityInput() {
    return this._agentIdentity;
  }

  // bastion_certificate - computed: false, optional: true, required: false
  private _bastionCertificate?: string; 
  public get bastionCertificate() {
    return this._bastionCertificate;
  }
  public set bastionCertificate(value: string | undefined) {
    this._bastionCertificate = value;
  }
  public resetBastionCertificate() {
    this._bastionCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionCertificateInput() {
    return this._bastionCertificate;
  }

  // bastion_host - computed: false, optional: true, required: false
  private _bastionHost?: string; 
  public get bastionHost() {
    return this._bastionHost;
  }
  public set bastionHost(value: string | undefined) {
    this._bastionHost = value;
  }
  public resetBastionHost() {
    this._bastionHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionHostInput() {
    return this._bastionHost;
  }

  // bastion_host_key - computed: false, optional: true, required: false
  private _bastionHostKey?: string; 
  public get bastionHostKey() {
    return this._bastionHostKey;
  }
  public set bastionHostKey(value: string | undefined) {
    this._bastionHostKey = value;
  }
  public resetBastionHostKey() {
    this._bastionHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionHostKeyInput() {
    return this._bastionHostKey;
  }

  // bastion_password - computed: false, optional: true, required: false
  private _bastionPassword?: string; 
  public get bastionPassword() {
    return this._bastionPassword;
  }
  public set bastionPassword(value: string | undefined) {
    this._bastionPassword = value;
  }
  public resetBastionPassword() {
    this._bastionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionPasswordInput() {
    return this._bastionPassword;
  }

  // bastion_port - computed: false, optional: true, required: false
  private _bastionPort?: number; 
  public get bastionPort() {
    return this._bastionPort;
  }
  public set bastionPort(value: number | undefined) {
    this._bastionPort = value;
  }
  public resetBastionPort() {
    this._bastionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionPortInput() {
    return this._bastionPort;
  }

  // bastion_private_key - computed: false, optional: true, required: false
  private _bastionPrivateKey?: string; 
  public get bastionPrivateKey() {
    return this._bastionPrivateKey;
  }
  public set bastionPrivateKey(value: string | undefined) {
    this._bastionPrivateKey = value;
  }
  public resetBastionPrivateKey() {
    this._bastionPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionPrivateKeyInput() {
    return this._bastionPrivateKey;
  }

  // bastion_user - computed: false, optional: true, required: false
  private _bastionUser?: string; 
  public get bastionUser() {
    return this._bastionUser;
  }
  public set bastionUser(value: string | undefined) {
    this._bastionUser = value;
  }
  public resetBastionUser() {
    this._bastionUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionUserInput() {
    return this._bastionUser;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: string | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this._hostKey;
  }
  public set hostKey(value: string | undefined) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this._scriptPath;
  }
  public set scriptPath(value: string | undefined) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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
      agent: cdktf.booleanToTerraform(this._agent),
      agent_identity: cdktf.stringToTerraform(this._agentIdentity),
      bastion_certificate: cdktf.stringToTerraform(this._bastionCertificate),
      bastion_host: cdktf.stringToTerraform(this._bastionHost),
      bastion_host_key: cdktf.stringToTerraform(this._bastionHostKey),
      bastion_password: cdktf.stringToTerraform(this._bastionPassword),
      bastion_port: cdktf.numberToTerraform(this._bastionPort),
      bastion_private_key: cdktf.stringToTerraform(this._bastionPrivateKey),
      bastion_user: cdktf.stringToTerraform(this._bastionUser),
      certificate: cdktf.stringToTerraform(this._certificate),
      host: cdktf.stringToTerraform(this._host),
      host_key: cdktf.stringToTerraform(this._hostKey),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      private_key: cdktf.stringToTerraform(this._privateKey),
      script_path: cdktf.stringToTerraform(this._scriptPath),
      timeout: cdktf.stringToTerraform(this._timeout),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent: {
        value: cdktf.booleanToHclTerraform(this._agent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      agent_identity: {
        value: cdktf.stringToHclTerraform(this._agentIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_certificate: {
        value: cdktf.stringToHclTerraform(this._bastionCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_host: {
        value: cdktf.stringToHclTerraform(this._bastionHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_host_key: {
        value: cdktf.stringToHclTerraform(this._bastionHostKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_password: {
        value: cdktf.stringToHclTerraform(this._bastionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_port: {
        value: cdktf.numberToHclTerraform(this._bastionPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bastion_private_key: {
        value: cdktf.stringToHclTerraform(this._bastionPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bastion_user: {
        value: cdktf.stringToHclTerraform(this._bastionUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
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
      host_key: {
        value: cdktf.stringToHclTerraform(this._hostKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_path: {
        value: cdktf.stringToHclTerraform(this._scriptPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
