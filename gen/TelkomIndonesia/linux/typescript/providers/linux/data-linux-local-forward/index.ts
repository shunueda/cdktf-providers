// https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinuxLocalForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#id DataLinuxLocalForward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The local host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#local_host DataLinuxLocalForward#local_host}
  */
  readonly localHost?: string;
  /**
  * The local port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#local_port DataLinuxLocalForward#local_port}
  */
  readonly localPort?: number;
  /**
  * The remote host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#remote_host DataLinuxLocalForward#remote_host}
  */
  readonly remoteHost: string;
  /**
  * The remote port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#remote_port DataLinuxLocalForward#remote_port}
  */
  readonly remotePort: number;
  /**
  * provider_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#provider_override DataLinuxLocalForward#provider_override}
  */
  readonly providerOverride?: DataLinuxLocalForwardProviderOverride;
}
export interface DataLinuxLocalForwardProviderOverride {
  /**
  * Set to `false` to disable using ssh-agent to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#agent DataLinuxLocalForward#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The preferred identity from the ssh agent for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#agent_identity DataLinuxLocalForward#agent_identity}
  */
  readonly agentIdentity?: string;
  /**
  * The contents of a signed CA Certificate. The certificate argument must be used in conjunction with a `bastion_private_key`. These can be loaded from a file on disk using the the `file` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#bastion_certificate DataLinuxLocalForward#bastion_certificate}
  */
  readonly bastionCertificate?: string;
  /**
  * Setting this enables the bastion Host connection. This host will be connected to first, and then the `host` connection will be made from there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#bastion_host DataLinuxLocalForward#bastion_host}
  */
  readonly bastionHost?: string;
  /**
  * The public key from the remote host or the signing CA, used to verify the host connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#bastion_host_key DataLinuxLocalForward#bastion_host_key}
  */
  readonly bastionHostKey?: string;
  /**
  * The password we should use for the bastion host. Defaults to the value of the `password` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#bastion_password DataLinuxLocalForward#bastion_password}
  */
  readonly bastionPassword?: string;
  /**
  * The port to use connect to the bastion host. Defaults to the value of the `port` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#bastion_port DataLinuxLocalForward#bastion_port}
  */
  readonly bastionPort?: number;
  /**
  * The contents of an SSH key file to use for the bastion host. These can be loaded from a file on disk using the `file` function. Defaults to the value of the `private_key` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#bastion_private_key DataLinuxLocalForward#bastion_private_key}
  */
  readonly bastionPrivateKey?: string;
  /**
  * The user for the connection to the bastion host. Defaults to the value of the `user` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#bastion_user DataLinuxLocalForward#bastion_user}
  */
  readonly bastionUser?: string;
  /**
  * The contents of a signed CA Certificate. The certificate argument must be used in conjunction with a `private_key`. These can be loaded from a file on disk using the the `file` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#certificate DataLinuxLocalForward#certificate}
  */
  readonly certificate?: string;
  /**
  * The address of the resource to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#host DataLinuxLocalForward#host}
  */
  readonly host?: string;
  /**
  * The public key from the remote host or the signing CA, used to verify the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#host_key DataLinuxLocalForward#host_key}
  */
  readonly hostKey?: string;
  /**
  * Connection instance ID for locking purpose when defined in resource/datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#id DataLinuxLocalForward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The password we should use for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#password DataLinuxLocalForward#password}
  */
  readonly password?: string;
  /**
  * The port to connect to. Defaults to `22`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#port DataLinuxLocalForward#port}
  */
  readonly port?: number;
  /**
  * The contents of an SSH key to use for the connection. These can be loaded from a file on disk using the `file` function. This takes preference over the `password` if provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#private_key DataLinuxLocalForward#private_key}
  */
  readonly privateKey?: string;
  /**
  * The path used to copy scripts meant for remote execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#script_path DataLinuxLocalForward#script_path}
  */
  readonly scriptPath?: string;
  /**
  *  The timeout to wait for the connection to become available. Should be provided as a string like `30s` or `5m`. Defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#timeout DataLinuxLocalForward#timeout}
  */
  readonly timeout?: string;
  /**
  * The user that we should use for the connection. Defaults to `root`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#user DataLinuxLocalForward#user}
  */
  readonly user?: string;
}

export function dataLinuxLocalForwardProviderOverrideToTerraform(struct?: DataLinuxLocalForwardProviderOverrideOutputReference | DataLinuxLocalForwardProviderOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.booleanToTerraform(struct!.agent),
    agent_identity: cdktf.stringToTerraform(struct!.agentIdentity),
    bastion_certificate: cdktf.stringToTerraform(struct!.bastionCertificate),
    bastion_host: cdktf.stringToTerraform(struct!.bastionHost),
    bastion_host_key: cdktf.stringToTerraform(struct!.bastionHostKey),
    bastion_password: cdktf.stringToTerraform(struct!.bastionPassword),
    bastion_port: cdktf.numberToTerraform(struct!.bastionPort),
    bastion_private_key: cdktf.stringToTerraform(struct!.bastionPrivateKey),
    bastion_user: cdktf.stringToTerraform(struct!.bastionUser),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    host: cdktf.stringToTerraform(struct!.host),
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataLinuxLocalForwardProviderOverrideToHclTerraform(struct?: DataLinuxLocalForwardProviderOverrideOutputReference | DataLinuxLocalForwardProviderOverride): any {
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
    agent_identity: {
      value: cdktf.stringToHclTerraform(struct!.agentIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastion_certificate: {
      value: cdktf.stringToHclTerraform(struct!.bastionCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastion_host: {
      value: cdktf.stringToHclTerraform(struct!.bastionHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastion_host_key: {
      value: cdktf.stringToHclTerraform(struct!.bastionHostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastion_password: {
      value: cdktf.stringToHclTerraform(struct!.bastionPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastion_port: {
      value: cdktf.numberToHclTerraform(struct!.bastionPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bastion_private_key: {
      value: cdktf.stringToHclTerraform(struct!.bastionPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bastion_user: {
      value: cdktf.stringToHclTerraform(struct!.bastionUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktf.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinuxLocalForwardProviderOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLinuxLocalForwardProviderOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._agentIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentIdentity = this._agentIdentity;
    }
    if (this._bastionCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionCertificate = this._bastionCertificate;
    }
    if (this._bastionHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionHost = this._bastionHost;
    }
    if (this._bastionHostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionHostKey = this._bastionHostKey;
    }
    if (this._bastionPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionPassword = this._bastionPassword;
    }
    if (this._bastionPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionPort = this._bastionPort;
    }
    if (this._bastionPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionPrivateKey = this._bastionPrivateKey;
    }
    if (this._bastionUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.bastionUser = this._bastionUser;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinuxLocalForwardProviderOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agent = undefined;
      this._agentIdentity = undefined;
      this._bastionCertificate = undefined;
      this._bastionHost = undefined;
      this._bastionHostKey = undefined;
      this._bastionPassword = undefined;
      this._bastionPort = undefined;
      this._bastionPrivateKey = undefined;
      this._bastionUser = undefined;
      this._certificate = undefined;
      this._host = undefined;
      this._hostKey = undefined;
      this._id = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateKey = undefined;
      this._scriptPath = undefined;
      this._timeout = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agent = value.agent;
      this._agentIdentity = value.agentIdentity;
      this._bastionCertificate = value.bastionCertificate;
      this._bastionHost = value.bastionHost;
      this._bastionHostKey = value.bastionHostKey;
      this._bastionPassword = value.bastionPassword;
      this._bastionPort = value.bastionPort;
      this._bastionPrivateKey = value.bastionPrivateKey;
      this._bastionUser = value.bastionUser;
      this._certificate = value.certificate;
      this._host = value.host;
      this._hostKey = value.hostKey;
      this._id = value.id;
      this._password = value.password;
      this._port = value.port;
      this._privateKey = value.privateKey;
      this._scriptPath = value.scriptPath;
      this._timeout = value.timeout;
      this._user = value.user;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: boolean | cdktf.IResolvable; 
  public get agent() {
    return this.getBooleanAttribute('agent');
  }
  public set agent(value: boolean | cdktf.IResolvable) {
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
    return this.getStringAttribute('agent_identity');
  }
  public set agentIdentity(value: string) {
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
    return this.getStringAttribute('bastion_certificate');
  }
  public set bastionCertificate(value: string) {
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
    return this.getStringAttribute('bastion_host');
  }
  public set bastionHost(value: string) {
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
    return this.getStringAttribute('bastion_host_key');
  }
  public set bastionHostKey(value: string) {
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
    return this.getStringAttribute('bastion_password');
  }
  public set bastionPassword(value: string) {
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
    return this.getNumberAttribute('bastion_port');
  }
  public set bastionPort(value: number) {
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
    return this.getStringAttribute('bastion_private_key');
  }
  public set bastionPrivateKey(value: string) {
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
    return this.getStringAttribute('bastion_user');
  }
  public set bastionUser(value: string) {
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
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
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
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
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
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
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
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
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
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
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
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
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
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
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
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward linux_local_forward}
*/
export class DataLinuxLocalForward extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linux_local_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinuxLocalForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinuxLocalForward to import
  * @param importFromId The id of the existing DataLinuxLocalForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinuxLocalForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linux_local_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/data-sources/local_forward linux_local_forward} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinuxLocalForwardConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinuxLocalForwardConfig) {
    super(scope, id, {
      terraformResourceType: 'linux_local_forward',
      terraformGeneratorMetadata: {
        providerName: 'linux',
        providerVersion: '0.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._localHost = config.localHost;
    this._localPort = config.localPort;
    this._remoteHost = config.remoteHost;
    this._remotePort = config.remotePort;
    this._providerOverride.internalValue = config.providerOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_host - computed: false, optional: true, required: false
  private _localHost?: string; 
  public get localHost() {
    return this.getStringAttribute('local_host');
  }
  public set localHost(value: string) {
    this._localHost = value;
  }
  public resetLocalHost() {
    this._localHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localHostInput() {
    return this._localHost;
  }

  // local_port - computed: false, optional: true, required: false
  private _localPort?: number; 
  public get localPort() {
    return this.getNumberAttribute('local_port');
  }
  public set localPort(value: number) {
    this._localPort = value;
  }
  public resetLocalPort() {
    this._localPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // remote_host - computed: false, optional: false, required: true
  private _remoteHost?: string; 
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }
  public set remoteHost(value: string) {
    this._remoteHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostInput() {
    return this._remoteHost;
  }

  // remote_port - computed: false, optional: false, required: true
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // provider_override - computed: false, optional: true, required: false
  private _providerOverride = new DataLinuxLocalForwardProviderOverrideOutputReference(this, "provider_override");
  public get providerOverride() {
    return this._providerOverride;
  }
  public putProviderOverride(value: DataLinuxLocalForwardProviderOverride) {
    this._providerOverride.internalValue = value;
  }
  public resetProviderOverride() {
    this._providerOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerOverrideInput() {
    return this._providerOverride.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      local_host: cdktf.stringToTerraform(this._localHost),
      local_port: cdktf.numberToTerraform(this._localPort),
      remote_host: cdktf.stringToTerraform(this._remoteHost),
      remote_port: cdktf.numberToTerraform(this._remotePort),
      provider_override: dataLinuxLocalForwardProviderOverrideToTerraform(this._providerOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_host: {
        value: cdktf.stringToHclTerraform(this._localHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_port: {
        value: cdktf.numberToHclTerraform(this._localPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_host: {
        value: cdktf.stringToHclTerraform(this._remoteHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_port: {
        value: cdktf.numberToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_override: {
        value: dataLinuxLocalForwardProviderOverrideToHclTerraform(this._providerOverride.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLinuxLocalForwardProviderOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
