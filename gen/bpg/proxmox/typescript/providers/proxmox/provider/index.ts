// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxmoxProviderConfig {
  /**
  * The API token for the Proxmox VE API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#api_token ProxmoxProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * The pre-authenticated Ticket for the Proxmox VE API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#auth_ticket ProxmoxProvider#auth_ticket}
  */
  readonly authTicket?: string;
  /**
  * The pre-authenticated CSRF Prevention Token for the Proxmox VE API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#csrf_prevention_token ProxmoxProvider#csrf_prevention_token}
  */
  readonly csrfPreventionToken?: string;
  /**
  * The endpoint for the Proxmox VE API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#endpoint ProxmoxProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to skip the TLS verification step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#insecure ProxmoxProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The minimum required TLS version for API calls.Supported values: `1.0|1.1|1.2|1.3`. Defaults to `1.3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#min_tls ProxmoxProvider#min_tls}
  */
  readonly minTls?: string;
  /**
  * The one-time password for the Proxmox VE API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#otp ProxmoxProvider#otp}
  */
  readonly otp?: string;
  /**
  * The password for the Proxmox VE API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#password ProxmoxProvider#password}
  */
  readonly password?: string;
  /**
  * The ending number for random VM / Container IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#random_vm_id_end ProxmoxProvider#random_vm_id_end}
  */
  readonly randomVmIdEnd?: number;
  /**
  * The starting number for random VM / Container IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#random_vm_id_start ProxmoxProvider#random_vm_id_start}
  */
  readonly randomVmIdStart?: number;
  /**
  * Whether to generate random VM / Container IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#random_vm_ids ProxmoxProvider#random_vm_ids}
  */
  readonly randomVmIds?: boolean | cdktf.IResolvable;
  /**
  * The alternative temporary directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#tmp_dir ProxmoxProvider#tmp_dir}
  */
  readonly tmpDir?: string;
  /**
  * The username for the Proxmox VE API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#username ProxmoxProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#alias ProxmoxProvider#alias}
  */
  readonly alias?: string;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#ssh ProxmoxProvider#ssh}
  */
  readonly ssh?: ProxmoxProviderSsh;
}
export interface ProxmoxProviderSshNode {
  /**
  * The address of the Proxmox VE node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#address ProxmoxProvider#address}
  */
  readonly address: string;
  /**
  * The name of the Proxmox VE node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#name ProxmoxProvider#name}
  */
  readonly name: string;
  /**
  * The port of the Proxmox VE node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#port ProxmoxProvider#port}
  */
  readonly port?: number;
}

export function proxmoxProviderSshNodeToTerraform(struct?: ProxmoxProviderSshNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function proxmoxProviderSshNodeToHclTerraform(struct?: ProxmoxProviderSshNode | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface ProxmoxProviderSsh {
  /**
  * Whether to use the SSH agent for authentication. Takes precedence over the `private_key` and `password` fields. Defaults to the value of the `PROXMOX_VE_SSH_AGENT` environment variable, or `false` if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#agent ProxmoxProvider#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable SSH agent forwarding. Defaults to the value of the `PROXMOX_VE_SSH_AGENT_FORWARDING` environment variable, or `false` if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#agent_forwarding ProxmoxProvider#agent_forwarding}
  */
  readonly agentForwarding?: boolean | cdktf.IResolvable;
  /**
  * The path to the SSH agent socket. Defaults to the value of the `SSH_AUTH_SOCK` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#agent_socket ProxmoxProvider#agent_socket}
  */
  readonly agentSocket?: string;
  /**
  * The password used for the SSH connection. Defaults to the value of the `password` field of the `provider` block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#password ProxmoxProvider#password}
  */
  readonly password?: string;
  /**
  * The unencrypted private key (in PEM format) used for the SSH connection. Defaults to the value of the `PROXMOX_VE_SSH_PRIVATE_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#private_key ProxmoxProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * The password for the SOCKS5 proxy server. Defaults to the value of the `PROXMOX_VE_SSH_SOCKS5_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#socks5_password ProxmoxProvider#socks5_password}
  */
  readonly socks5Password?: string;
  /**
  * The address:port of the SOCKS5 proxy server. Defaults to the value of the `PROXMOX_VE_SSH_SOCKS5_SERVER` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#socks5_server ProxmoxProvider#socks5_server}
  */
  readonly socks5Server?: string;
  /**
  * The username for the SOCKS5 proxy server. Defaults to the value of the `PROXMOX_VE_SSH_SOCKS5_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#socks5_username ProxmoxProvider#socks5_username}
  */
  readonly socks5Username?: string;
  /**
  * The username used for the SSH connection. Defaults to the value of the `username` field of the `provider` block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#username ProxmoxProvider#username}
  */
  readonly username?: string;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#node ProxmoxProvider#node}
  */
  readonly nodeAttribute?: ProxmoxProviderSshNode[] | cdktf.IResolvable;
}

export function proxmoxProviderSshToTerraform(struct?: ProxmoxProviderSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.booleanToTerraform(struct!.agent),
    agent_forwarding: cdktf.booleanToTerraform(struct!.agentForwarding),
    agent_socket: cdktf.stringToTerraform(struct!.agentSocket),
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    socks5_password: cdktf.stringToTerraform(struct!.socks5Password),
    socks5_server: cdktf.stringToTerraform(struct!.socks5Server),
    socks5_username: cdktf.stringToTerraform(struct!.socks5Username),
    username: cdktf.stringToTerraform(struct!.username),
    node: cdktf.listMapper(proxmoxProviderSshNodeToTerraform, true)(struct!.nodeAttribute),
  }
}


export function proxmoxProviderSshToHclTerraform(struct?: ProxmoxProviderSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.booleanToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    agent_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.agentForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    agent_socket: {
      value: cdktf.stringToHclTerraform(struct!.agentSocket),
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
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socks5_password: {
      value: cdktf.stringToHclTerraform(struct!.socks5Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socks5_server: {
      value: cdktf.stringToHclTerraform(struct!.socks5Server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socks5_username: {
      value: cdktf.stringToHclTerraform(struct!.socks5Username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.listMapperHcl(proxmoxProviderSshNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "ProxmoxProviderSshNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs proxmox}
*/
export class ProxmoxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProxmoxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProxmoxProvider to import
  * @param importFromId The id of the existing ProxmoxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProxmoxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs proxmox} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProxmoxProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProxmoxProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0',
        providerVersionConstraint: '0.86.0'
      },
      terraformProviderSource: 'bpg/proxmox'
    });
    this._apiToken = config.apiToken;
    this._authTicket = config.authTicket;
    this._csrfPreventionToken = config.csrfPreventionToken;
    this._endpoint = config.endpoint;
    this._insecure = config.insecure;
    this._minTls = config.minTls;
    this._otp = config.otp;
    this._password = config.password;
    this._randomVmIdEnd = config.randomVmIdEnd;
    this._randomVmIdStart = config.randomVmIdStart;
    this._randomVmIds = config.randomVmIds;
    this._tmpDir = config.tmpDir;
    this._username = config.username;
    this._alias = config.alias;
    this._ssh = config.ssh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // auth_ticket - computed: false, optional: true, required: false
  private _authTicket?: string; 
  public get authTicket() {
    return this._authTicket;
  }
  public set authTicket(value: string | undefined) {
    this._authTicket = value;
  }
  public resetAuthTicket() {
    this._authTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTicketInput() {
    return this._authTicket;
  }

  // csrf_prevention_token - computed: false, optional: true, required: false
  private _csrfPreventionToken?: string; 
  public get csrfPreventionToken() {
    return this._csrfPreventionToken;
  }
  public set csrfPreventionToken(value: string | undefined) {
    this._csrfPreventionToken = value;
  }
  public resetCsrfPreventionToken() {
    this._csrfPreventionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfPreventionTokenInput() {
    return this._csrfPreventionToken;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // min_tls - computed: false, optional: true, required: false
  private _minTls?: string; 
  public get minTls() {
    return this._minTls;
  }
  public set minTls(value: string | undefined) {
    this._minTls = value;
  }
  public resetMinTls() {
    this._minTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsInput() {
    return this._minTls;
  }

  // otp - computed: false, optional: true, required: false
  private _otp?: string; 
  public get otp() {
    return this._otp;
  }
  public set otp(value: string | undefined) {
    this._otp = value;
  }
  public resetOtp() {
    this._otp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp;
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

  // random_vm_id_end - computed: false, optional: true, required: false
  private _randomVmIdEnd?: number; 
  public get randomVmIdEnd() {
    return this._randomVmIdEnd;
  }
  public set randomVmIdEnd(value: number | undefined) {
    this._randomVmIdEnd = value;
  }
  public resetRandomVmIdEnd() {
    this._randomVmIdEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomVmIdEndInput() {
    return this._randomVmIdEnd;
  }

  // random_vm_id_start - computed: false, optional: true, required: false
  private _randomVmIdStart?: number; 
  public get randomVmIdStart() {
    return this._randomVmIdStart;
  }
  public set randomVmIdStart(value: number | undefined) {
    this._randomVmIdStart = value;
  }
  public resetRandomVmIdStart() {
    this._randomVmIdStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomVmIdStartInput() {
    return this._randomVmIdStart;
  }

  // random_vm_ids - computed: false, optional: true, required: false
  private _randomVmIds?: boolean | cdktf.IResolvable; 
  public get randomVmIds() {
    return this._randomVmIds;
  }
  public set randomVmIds(value: boolean | cdktf.IResolvable | undefined) {
    this._randomVmIds = value;
  }
  public resetRandomVmIds() {
    this._randomVmIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomVmIdsInput() {
    return this._randomVmIds;
  }

  // tmp_dir - computed: false, optional: true, required: false
  private _tmpDir?: string; 
  public get tmpDir() {
    return this._tmpDir;
  }
  public set tmpDir(value: string | undefined) {
    this._tmpDir = value;
  }
  public resetTmpDir() {
    this._tmpDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpDirInput() {
    return this._tmpDir;
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

  // ssh - computed: false, optional: true, required: false
  private _ssh?: ProxmoxProviderSsh; 
  public get ssh() {
    return this._ssh;
  }
  public set ssh(value: ProxmoxProviderSsh | undefined) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      auth_ticket: cdktf.stringToTerraform(this._authTicket),
      csrf_prevention_token: cdktf.stringToTerraform(this._csrfPreventionToken),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      insecure: cdktf.booleanToTerraform(this._insecure),
      min_tls: cdktf.stringToTerraform(this._minTls),
      otp: cdktf.stringToTerraform(this._otp),
      password: cdktf.stringToTerraform(this._password),
      random_vm_id_end: cdktf.numberToTerraform(this._randomVmIdEnd),
      random_vm_id_start: cdktf.numberToTerraform(this._randomVmIdStart),
      random_vm_ids: cdktf.booleanToTerraform(this._randomVmIds),
      tmp_dir: cdktf.stringToTerraform(this._tmpDir),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      ssh: proxmoxProviderSshToTerraform(this._ssh),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_ticket: {
        value: cdktf.stringToHclTerraform(this._authTicket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csrf_prevention_token: {
        value: cdktf.stringToHclTerraform(this._csrfPreventionToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_tls: {
        value: cdktf.stringToHclTerraform(this._minTls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otp: {
        value: cdktf.stringToHclTerraform(this._otp),
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
      random_vm_id_end: {
        value: cdktf.numberToHclTerraform(this._randomVmIdEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      random_vm_id_start: {
        value: cdktf.numberToHclTerraform(this._randomVmIdStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      random_vm_ids: {
        value: cdktf.booleanToHclTerraform(this._randomVmIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tmp_dir: {
        value: cdktf.stringToHclTerraform(this._tmpDir),
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
      ssh: {
        value: proxmoxProviderSshToHclTerraform(this._ssh),
        isBlock: true,
        type: "list",
        storageClassType: "ProxmoxProviderSshList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
