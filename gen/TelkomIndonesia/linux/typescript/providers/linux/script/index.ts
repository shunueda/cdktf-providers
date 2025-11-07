// https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#__dirty_output__ Script#__dirty_output__}
  */
  readonly dirtyOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#__faulty_output__ Script#__faulty_output__}
  */
  readonly faultyOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#environment Script#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#id Script#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#interpreter Script#interpreter}
  */
  readonly interpreter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#sensitive_environment Script#sensitive_environment}
  */
  readonly sensitiveEnvironment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#triggers Script#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#working_directory Script#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * lifecycle_commands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#lifecycle_commands Script#lifecycle_commands}
  */
  readonly lifecycleCommands: ScriptLifecycleCommands;
  /**
  * provider_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#provider_override Script#provider_override}
  */
  readonly providerOverride?: ScriptProviderOverride;
}
export interface ScriptLifecycleCommands {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#create Script#create}
  */
  readonly create: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#delete Script#delete}
  */
  readonly delete: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#read Script#read}
  */
  readonly read: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#update Script#update}
  */
  readonly update?: string;
}

export function scriptLifecycleCommandsToTerraform(struct?: ScriptLifecycleCommandsOutputReference | ScriptLifecycleCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function scriptLifecycleCommandsToHclTerraform(struct?: ScriptLifecycleCommandsOutputReference | ScriptLifecycleCommands): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScriptLifecycleCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScriptLifecycleCommands | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScriptLifecycleCommands | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: false, required: true
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: false, required: true
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ScriptProviderOverride {
  /**
  * Set to `false` to disable using ssh-agent to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#agent Script#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The preferred identity from the ssh agent for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#agent_identity Script#agent_identity}
  */
  readonly agentIdentity?: string;
  /**
  * The contents of a signed CA Certificate. The certificate argument must be used in conjunction with a `bastion_private_key`. These can be loaded from a file on disk using the the `file` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#bastion_certificate Script#bastion_certificate}
  */
  readonly bastionCertificate?: string;
  /**
  * Setting this enables the bastion Host connection. This host will be connected to first, and then the `host` connection will be made from there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#bastion_host Script#bastion_host}
  */
  readonly bastionHost?: string;
  /**
  * The public key from the remote host or the signing CA, used to verify the host connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#bastion_host_key Script#bastion_host_key}
  */
  readonly bastionHostKey?: string;
  /**
  * The password we should use for the bastion host. Defaults to the value of the `password` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#bastion_password Script#bastion_password}
  */
  readonly bastionPassword?: string;
  /**
  * The port to use connect to the bastion host. Defaults to the value of the `port` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#bastion_port Script#bastion_port}
  */
  readonly bastionPort?: number;
  /**
  * The contents of an SSH key file to use for the bastion host. These can be loaded from a file on disk using the `file` function. Defaults to the value of the `private_key` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#bastion_private_key Script#bastion_private_key}
  */
  readonly bastionPrivateKey?: string;
  /**
  * The user for the connection to the bastion host. Defaults to the value of the `user` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#bastion_user Script#bastion_user}
  */
  readonly bastionUser?: string;
  /**
  * The contents of a signed CA Certificate. The certificate argument must be used in conjunction with a `private_key`. These can be loaded from a file on disk using the the `file` function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#certificate Script#certificate}
  */
  readonly certificate?: string;
  /**
  * The address of the resource to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#host Script#host}
  */
  readonly host?: string;
  /**
  * The public key from the remote host or the signing CA, used to verify the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#host_key Script#host_key}
  */
  readonly hostKey?: string;
  /**
  * Connection instance ID for locking purpose when defined in resource/datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#id Script#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The password we should use for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#password Script#password}
  */
  readonly password?: string;
  /**
  * The port to connect to. Defaults to `22`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#port Script#port}
  */
  readonly port?: number;
  /**
  * The contents of an SSH key to use for the connection. These can be loaded from a file on disk using the `file` function. This takes preference over the `password` if provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#private_key Script#private_key}
  */
  readonly privateKey?: string;
  /**
  * The path used to copy scripts meant for remote execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#script_path Script#script_path}
  */
  readonly scriptPath?: string;
  /**
  *  The timeout to wait for the connection to become available. Should be provided as a string like `30s` or `5m`. Defaults to 5 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#timeout Script#timeout}
  */
  readonly timeout?: string;
  /**
  * The user that we should use for the connection. Defaults to `root`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#user Script#user}
  */
  readonly user?: string;
}

export function scriptProviderOverrideToTerraform(struct?: ScriptProviderOverrideOutputReference | ScriptProviderOverride): any {
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


export function scriptProviderOverrideToHclTerraform(struct?: ScriptProviderOverrideOutputReference | ScriptProviderOverride): any {
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

export class ScriptProviderOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScriptProviderOverride | undefined {
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

  public set internalValue(value: ScriptProviderOverride | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script linux_script}
*/
export class Script extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linux_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Script resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Script to import
  * @param importFromId The id of the existing Script that should be imported. Refer to the {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Script to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linux_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/telkomindonesia/linux/0.7.1/docs/resources/script linux_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScriptConfig
  */
  public constructor(scope: Construct, id: string, config: ScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'linux_script',
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
    this._dirtyOutput = config.dirtyOutput;
    this._faultyOutput = config.faultyOutput;
    this._environment = config.environment;
    this._id = config.id;
    this._interpreter = config.interpreter;
    this._sensitiveEnvironment = config.sensitiveEnvironment;
    this._triggers = config.triggers;
    this._workingDirectory = config.workingDirectory;
    this._lifecycleCommands.internalValue = config.lifecycleCommands;
    this._providerOverride.internalValue = config.providerOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // __dirty_output__ - computed: false, optional: true, required: false
  private _dirtyOutput?: string; 
  public get dirtyOutput() {
    return this.getStringAttribute('__dirty_output__');
  }
  public set dirtyOutput(value: string) {
    this._dirtyOutput = value;
  }
  public resetDirtyOutput() {
    this._dirtyOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirtyOutputInput() {
    return this._dirtyOutput;
  }

  // __faulty_output__ - computed: false, optional: true, required: false
  private _faultyOutput?: string; 
  public get faultyOutput() {
    return this.getStringAttribute('__faulty_output__');
  }
  public set faultyOutput(value: string) {
    this._faultyOutput = value;
  }
  public resetFaultyOutput() {
    this._faultyOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyOutputInput() {
    return this._faultyOutput;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string[]; 
  public get interpreter() {
    return this.getListAttribute('interpreter');
  }
  public set interpreter(value: string[]) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output - computed: true, optional: false, required: false
  public get output() {
    return this.getStringAttribute('output');
  }

  // sensitive_environment - computed: false, optional: true, required: false
  private _sensitiveEnvironment?: { [key: string]: string }; 
  public get sensitiveEnvironment() {
    return this.getStringMapAttribute('sensitive_environment');
  }
  public set sensitiveEnvironment(value: { [key: string]: string }) {
    this._sensitiveEnvironment = value;
  }
  public resetSensitiveEnvironment() {
    this._sensitiveEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveEnvironmentInput() {
    return this._sensitiveEnvironment;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // lifecycle_commands - computed: false, optional: false, required: true
  private _lifecycleCommands = new ScriptLifecycleCommandsOutputReference(this, "lifecycle_commands");
  public get lifecycleCommands() {
    return this._lifecycleCommands;
  }
  public putLifecycleCommands(value: ScriptLifecycleCommands) {
    this._lifecycleCommands.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleCommandsInput() {
    return this._lifecycleCommands.internalValue;
  }

  // provider_override - computed: false, optional: true, required: false
  private _providerOverride = new ScriptProviderOverrideOutputReference(this, "provider_override");
  public get providerOverride() {
    return this._providerOverride;
  }
  public putProviderOverride(value: ScriptProviderOverride) {
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
      __dirty_output__: cdktf.stringToTerraform(this._dirtyOutput),
      __faulty_output__: cdktf.stringToTerraform(this._faultyOutput),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      id: cdktf.stringToTerraform(this._id),
      interpreter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interpreter),
      sensitive_environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._sensitiveEnvironment),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      lifecycle_commands: scriptLifecycleCommandsToTerraform(this._lifecycleCommands.internalValue),
      provider_override: scriptProviderOverrideToTerraform(this._providerOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      __dirty_output__: {
        value: cdktf.stringToHclTerraform(this._dirtyOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      __faulty_output__: {
        value: cdktf.stringToHclTerraform(this._faultyOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interpreter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interpreter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitive_environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._sensitiveEnvironment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_commands: {
        value: scriptLifecycleCommandsToHclTerraform(this._lifecycleCommands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScriptLifecycleCommandsList",
      },
      provider_override: {
        value: scriptProviderOverrideToHclTerraform(this._providerOverride.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScriptProviderOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
