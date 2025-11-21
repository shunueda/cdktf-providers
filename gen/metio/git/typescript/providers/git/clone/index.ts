// https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication credentials, if required, to use with the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#auth Clone#auth}
  */
  readonly auth?: CloneAuth;
  /**
  * Whether we should perform a bare clone. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#bare Clone#bare}
  */
  readonly bare?: boolean | cdktf.IResolvable;
  /**
  * File system path to an additional CA bundle to use together with the system cert pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#ca_bundle_file_path Clone#ca_bundle_file_path}
  */
  readonly caBundleFilePath?: string;
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#directory Clone#directory}
  */
  readonly directory: string;
  /**
  * Skip SSL verification if protocol is HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#insecure_skip_tls Clone#insecure_skip_tls}
  */
  readonly insecureSkipTls?: boolean | cdktf.IResolvable;
  /**
  * Name of the remote to be added. Defaults to 'main'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#reference_name Clone#reference_name}
  */
  readonly referenceName?: string;
  /**
  * Name of the remote to be added. Defaults to 'origin'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#remote_name Clone#remote_name}
  */
  readonly remoteName?: string;
  /**
  * The (possibly remote) repository URL to clone from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#url Clone#url}
  */
  readonly url: string;
}
export interface CloneAuthBasic {
  /**
  * The basic auth password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#password Clone#password}
  */
  readonly password: string;
  /**
  * The basic auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#username Clone#username}
  */
  readonly username: string;
}

export function cloneAuthBasicToTerraform(struct?: CloneAuthBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloneAuthBasicToHclTerraform(struct?: CloneAuthBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloneAuthBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloneAuthBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloneAuthBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CloneAuthSshAgent {
  /**
  * The list of known hosts files to accept. If none are specified, system defaults will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#known_hosts Clone#known_hosts}
  */
  readonly knownHosts?: string[];
  /**
  * The system username of the user talking to the SSH agent. Use an empty string in order to automatically fetch this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#username Clone#username}
  */
  readonly username?: string;
}

export function cloneAuthSshAgentToTerraform(struct?: CloneAuthSshAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knownHosts),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloneAuthSshAgentToHclTerraform(struct?: CloneAuthSshAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    known_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.knownHosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloneAuthSshAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloneAuthSshAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knownHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownHosts = this._knownHosts;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloneAuthSshAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knownHosts = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knownHosts = value.knownHosts;
      this._username = value.username;
    }
  }

  // known_hosts - computed: false, optional: true, required: false
  private _knownHosts?: string[]; 
  public get knownHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('known_hosts'));
  }
  public set knownHosts(value: string[]) {
    this._knownHosts = value;
  }
  public resetKnownHosts() {
    this._knownHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownHostsInput() {
    return this._knownHosts;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CloneAuthSshKey {
  /**
  * The list of known hosts files to accept. If none are specified, system defaults will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#known_hosts Clone#known_hosts}
  */
  readonly knownHosts?: string[];
  /**
  * The SSH key password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#password Clone#password}
  */
  readonly password?: string;
  /**
  * The absolute path to the private SSH key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#private_key_path Clone#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * The private SSH key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#private_key_pem Clone#private_key_pem}
  */
  readonly privateKeyPem?: string;
  /**
  * The SSH auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#username Clone#username}
  */
  readonly username?: string;
}

export function cloneAuthSshKeyToTerraform(struct?: CloneAuthSshKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knownHosts),
    password: cdktf.stringToTerraform(struct!.password),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    private_key_pem: cdktf.stringToTerraform(struct!.privateKeyPem),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloneAuthSshKeyToHclTerraform(struct?: CloneAuthSshKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    known_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.knownHosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_pem: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPem),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloneAuthSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloneAuthSshKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knownHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownHosts = this._knownHosts;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._privateKeyPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPem = this._privateKeyPem;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloneAuthSshKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knownHosts = undefined;
      this._password = undefined;
      this._privateKeyPath = undefined;
      this._privateKeyPem = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knownHosts = value.knownHosts;
      this._password = value.password;
      this._privateKeyPath = value.privateKeyPath;
      this._privateKeyPem = value.privateKeyPem;
      this._username = value.username;
    }
  }

  // known_hosts - computed: false, optional: true, required: false
  private _knownHosts?: string[]; 
  public get knownHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('known_hosts'));
  }
  public set knownHosts(value: string[]) {
    this._knownHosts = value;
  }
  public resetKnownHosts() {
    this._knownHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownHostsInput() {
    return this._knownHosts;
  }

  // password - computed: true, optional: true, required: false
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

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // private_key_pem - computed: false, optional: true, required: false
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  public resetPrivateKeyPem() {
    this._privateKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CloneAuthSshPassword {
  /**
  * The list of known hosts files to accept. If none are specified, system defaults will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#known_hosts Clone#known_hosts}
  */
  readonly knownHosts?: string[];
  /**
  * The SSH password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#password Clone#password}
  */
  readonly password: string;
  /**
  * The SSH username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#username Clone#username}
  */
  readonly username: string;
}

export function cloneAuthSshPasswordToTerraform(struct?: CloneAuthSshPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knownHosts),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function cloneAuthSshPasswordToHclTerraform(struct?: CloneAuthSshPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    known_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.knownHosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloneAuthSshPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloneAuthSshPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knownHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownHosts = this._knownHosts;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloneAuthSshPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._knownHosts = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._knownHosts = value.knownHosts;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // known_hosts - computed: false, optional: true, required: false
  private _knownHosts?: string[]; 
  public get knownHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('known_hosts'));
  }
  public set knownHosts(value: string[]) {
    this._knownHosts = value;
  }
  public resetKnownHosts() {
    this._knownHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownHostsInput() {
    return this._knownHosts;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CloneAuth {
  /**
  * Configure basic auth authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#basic Clone#basic}
  */
  readonly basic?: CloneAuthBasic;
  /**
  * Configure HTTP bearer token authentication. **Note**: Services like GitHub use basic auth with your OAuth2 personal access token as the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#bearer Clone#bearer}
  */
  readonly bearer?: string;
  /**
  * Configure SSH agent based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#ssh_agent Clone#ssh_agent}
  */
  readonly sshAgent?: CloneAuthSshAgent;
  /**
  * Configure SSH public/private key authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#ssh_key Clone#ssh_key}
  */
  readonly sshKey?: CloneAuthSshKey;
  /**
  * Configure password based SSH authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#ssh_password Clone#ssh_password}
  */
  readonly sshPassword?: CloneAuthSshPassword;
}

export function cloneAuthToTerraform(struct?: CloneAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: cloneAuthBasicToTerraform(struct!.basic),
    bearer: cdktf.stringToTerraform(struct!.bearer),
    ssh_agent: cloneAuthSshAgentToTerraform(struct!.sshAgent),
    ssh_key: cloneAuthSshKeyToTerraform(struct!.sshKey),
    ssh_password: cloneAuthSshPasswordToTerraform(struct!.sshPassword),
  }
}


export function cloneAuthToHclTerraform(struct?: CloneAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: cloneAuthBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "CloneAuthBasic",
    },
    bearer: {
      value: cdktf.stringToHclTerraform(struct!.bearer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_agent: {
      value: cloneAuthSshAgentToHclTerraform(struct!.sshAgent),
      isBlock: true,
      type: "struct",
      storageClassType: "CloneAuthSshAgent",
    },
    ssh_key: {
      value: cloneAuthSshKeyToHclTerraform(struct!.sshKey),
      isBlock: true,
      type: "struct",
      storageClassType: "CloneAuthSshKey",
    },
    ssh_password: {
      value: cloneAuthSshPasswordToHclTerraform(struct!.sshPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "CloneAuthSshPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloneAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloneAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._bearer !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearer = this._bearer;
    }
    if (this._sshAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAgent = this._sshAgent?.internalValue;
    }
    if (this._sshKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey?.internalValue;
    }
    if (this._sshPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPassword = this._sshPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloneAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basic.internalValue = undefined;
      this._bearer = undefined;
      this._sshAgent.internalValue = undefined;
      this._sshKey.internalValue = undefined;
      this._sshPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basic.internalValue = value.basic;
      this._bearer = value.bearer;
      this._sshAgent.internalValue = value.sshAgent;
      this._sshKey.internalValue = value.sshKey;
      this._sshPassword.internalValue = value.sshPassword;
    }
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new CloneAuthBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: CloneAuthBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // bearer - computed: false, optional: true, required: false
  private _bearer?: string; 
  public get bearer() {
    return this.getStringAttribute('bearer');
  }
  public set bearer(value: string) {
    this._bearer = value;
  }
  public resetBearer() {
    this._bearer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerInput() {
    return this._bearer;
  }

  // ssh_agent - computed: false, optional: true, required: false
  private _sshAgent = new CloneAuthSshAgentOutputReference(this, "ssh_agent");
  public get sshAgent() {
    return this._sshAgent;
  }
  public putSshAgent(value: CloneAuthSshAgent) {
    this._sshAgent.internalValue = value;
  }
  public resetSshAgent() {
    this._sshAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAgentInput() {
    return this._sshAgent.internalValue;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey = new CloneAuthSshKeyOutputReference(this, "ssh_key");
  public get sshKey() {
    return this._sshKey;
  }
  public putSshKey(value: CloneAuthSshKey) {
    this._sshKey.internalValue = value;
  }
  public resetSshKey() {
    this._sshKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey.internalValue;
  }

  // ssh_password - computed: false, optional: true, required: false
  private _sshPassword = new CloneAuthSshPasswordOutputReference(this, "ssh_password");
  public get sshPassword() {
    return this._sshPassword;
  }
  public putSshPassword(value: CloneAuthSshPassword) {
    this._sshPassword.internalValue = value;
  }
  public resetSshPassword() {
    this._sshPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone git_clone}
*/
export class Clone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_clone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clone to import
  * @param importFromId The id of the existing Clone that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_clone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.11.21/docs/resources/clone git_clone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloneConfig
  */
  public constructor(scope: Construct, id: string, config: CloneConfig) {
    super(scope, id, {
      terraformResourceType: 'git_clone',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.11.21',
        providerVersionConstraint: '2025.11.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auth.internalValue = config.auth;
    this._bare = config.bare;
    this._caBundleFilePath = config.caBundleFilePath;
    this._directory = config.directory;
    this._insecureSkipTls = config.insecureSkipTls;
    this._referenceName = config.referenceName;
    this._remoteName = config.remoteName;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth = new CloneAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: CloneAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // bare - computed: true, optional: true, required: false
  private _bare?: boolean | cdktf.IResolvable; 
  public get bare() {
    return this.getBooleanAttribute('bare');
  }
  public set bare(value: boolean | cdktf.IResolvable) {
    this._bare = value;
  }
  public resetBare() {
    this._bare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bareInput() {
    return this._bare;
  }

  // ca_bundle_file_path - computed: true, optional: true, required: false
  private _caBundleFilePath?: string; 
  public get caBundleFilePath() {
    return this.getStringAttribute('ca_bundle_file_path');
  }
  public set caBundleFilePath(value: string) {
    this._caBundleFilePath = value;
  }
  public resetCaBundleFilePath() {
    this._caBundleFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleFilePathInput() {
    return this._caBundleFilePath;
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure_skip_tls - computed: true, optional: true, required: false
  private _insecureSkipTls?: boolean | cdktf.IResolvable; 
  public get insecureSkipTls() {
    return this.getBooleanAttribute('insecure_skip_tls');
  }
  public set insecureSkipTls(value: boolean | cdktf.IResolvable) {
    this._insecureSkipTls = value;
  }
  public resetInsecureSkipTls() {
    this._insecureSkipTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipTlsInput() {
    return this._insecureSkipTls;
  }

  // reference_name - computed: true, optional: true, required: false
  private _referenceName?: string; 
  public get referenceName() {
    return this.getStringAttribute('reference_name');
  }
  public set referenceName(value: string) {
    this._referenceName = value;
  }
  public resetReferenceName() {
    this._referenceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceNameInput() {
    return this._referenceName;
  }

  // remote_name - computed: true, optional: true, required: false
  private _remoteName?: string; 
  public get remoteName() {
    return this.getStringAttribute('remote_name');
  }
  public set remoteName(value: string) {
    this._remoteName = value;
  }
  public resetRemoteName() {
    this._remoteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNameInput() {
    return this._remoteName;
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cloneAuthToTerraform(this._auth.internalValue),
      bare: cdktf.booleanToTerraform(this._bare),
      ca_bundle_file_path: cdktf.stringToTerraform(this._caBundleFilePath),
      directory: cdktf.stringToTerraform(this._directory),
      insecure_skip_tls: cdktf.booleanToTerraform(this._insecureSkipTls),
      reference_name: cdktf.stringToTerraform(this._referenceName),
      remote_name: cdktf.stringToTerraform(this._remoteName),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cloneAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloneAuth",
      },
      bare: {
        value: cdktf.booleanToHclTerraform(this._bare),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_bundle_file_path: {
        value: cdktf.stringToHclTerraform(this._caBundleFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_skip_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reference_name: {
        value: cdktf.stringToHclTerraform(this._referenceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_name: {
        value: cdktf.stringToHclTerraform(this._remoteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
