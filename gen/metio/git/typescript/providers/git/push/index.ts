// https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PushConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication credentials, if required, to use with the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#auth Push#auth}
  */
  readonly auth?: PushAuth;
  /**
  * File system path to an additional CA bundle to use together with the system cert pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#ca_bundle_file_path Push#ca_bundle_file_path}
  */
  readonly caBundleFilePath?: string;
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#directory Push#directory}
  */
  readonly directory: string;
  /**
  * Allow updating a remote ref that is not an ancestor of the local ref used to overwrite it. Can cause the remote repository to lose commits; use it with care. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#force Push#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Skip SSL verification if protocol is HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#insecure_skip_tls Push#insecure_skip_tls}
  */
  readonly insecureSkipTls?: boolean | cdktf.IResolvable;
  /**
  * Remove remote branches that don’t have a local counterpart. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#prune Push#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Specify what destination refs to update with what source objects. Note that these must be fully qualified refspecs, e.g. `refs/heads/master` instead of just `master`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#refspecs Push#refspecs}
  */
  readonly refspecs: string[];
  /**
  * The name of the remote to push into. Defaults to `origin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#remote Push#remote}
  */
  readonly remote?: string;
}
export interface PushAuthBasic {
  /**
  * The basic auth password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#password Push#password}
  */
  readonly password: string;
  /**
  * The basic auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#username Push#username}
  */
  readonly username: string;
}

export function pushAuthBasicToTerraform(struct?: PushAuthBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pushAuthBasicToHclTerraform(struct?: PushAuthBasic | cdktf.IResolvable): any {
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

export class PushAuthBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushAuthBasic | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PushAuthBasic | cdktf.IResolvable | undefined) {
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
export interface PushAuthSshAgent {
  /**
  * The list of known hosts files to accept. If none are specified, system defaults will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#known_hosts Push#known_hosts}
  */
  readonly knownHosts?: string[];
  /**
  * The system username of the user talking to the SSH agent. Use an empty string in order to automatically fetch this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#username Push#username}
  */
  readonly username?: string;
}

export function pushAuthSshAgentToTerraform(struct?: PushAuthSshAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knownHosts),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function pushAuthSshAgentToHclTerraform(struct?: PushAuthSshAgent | cdktf.IResolvable): any {
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

export class PushAuthSshAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushAuthSshAgent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PushAuthSshAgent | cdktf.IResolvable | undefined) {
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
export interface PushAuthSshKey {
  /**
  * The list of known hosts files to accept. If none are specified, system defaults will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#known_hosts Push#known_hosts}
  */
  readonly knownHosts?: string[];
  /**
  * The SSH key password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#password Push#password}
  */
  readonly password?: string;
  /**
  * The absolute path to the private SSH key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#private_key_path Push#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * The private SSH key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#private_key_pem Push#private_key_pem}
  */
  readonly privateKeyPem?: string;
  /**
  * The SSH auth username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#username Push#username}
  */
  readonly username?: string;
}

export function pushAuthSshKeyToTerraform(struct?: PushAuthSshKey | cdktf.IResolvable): any {
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


export function pushAuthSshKeyToHclTerraform(struct?: PushAuthSshKey | cdktf.IResolvable): any {
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

export class PushAuthSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushAuthSshKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PushAuthSshKey | cdktf.IResolvable | undefined) {
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
export interface PushAuthSshPassword {
  /**
  * The list of known hosts files to accept. If none are specified, system defaults will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#known_hosts Push#known_hosts}
  */
  readonly knownHosts?: string[];
  /**
  * The SSH password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#password Push#password}
  */
  readonly password: string;
  /**
  * The SSH username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#username Push#username}
  */
  readonly username: string;
}

export function pushAuthSshPasswordToTerraform(struct?: PushAuthSshPassword | cdktf.IResolvable): any {
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


export function pushAuthSshPasswordToHclTerraform(struct?: PushAuthSshPassword | cdktf.IResolvable): any {
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

export class PushAuthSshPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushAuthSshPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PushAuthSshPassword | cdktf.IResolvable | undefined) {
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
export interface PushAuth {
  /**
  * Configure basic auth authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#basic Push#basic}
  */
  readonly basic?: PushAuthBasic;
  /**
  * Configure HTTP bearer token authentication. **Note**: Services like GitHub use basic auth with your OAuth2 personal access token as the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#bearer Push#bearer}
  */
  readonly bearer?: string;
  /**
  * Configure SSH agent based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#ssh_agent Push#ssh_agent}
  */
  readonly sshAgent?: PushAuthSshAgent;
  /**
  * Configure SSH public/private key authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#ssh_key Push#ssh_key}
  */
  readonly sshKey?: PushAuthSshKey;
  /**
  * Configure password based SSH authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#ssh_password Push#ssh_password}
  */
  readonly sshPassword?: PushAuthSshPassword;
}

export function pushAuthToTerraform(struct?: PushAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: pushAuthBasicToTerraform(struct!.basic),
    bearer: cdktf.stringToTerraform(struct!.bearer),
    ssh_agent: pushAuthSshAgentToTerraform(struct!.sshAgent),
    ssh_key: pushAuthSshKeyToTerraform(struct!.sshKey),
    ssh_password: pushAuthSshPasswordToTerraform(struct!.sshPassword),
  }
}


export function pushAuthToHclTerraform(struct?: PushAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: pushAuthBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "PushAuthBasic",
    },
    bearer: {
      value: cdktf.stringToHclTerraform(struct!.bearer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_agent: {
      value: pushAuthSshAgentToHclTerraform(struct!.sshAgent),
      isBlock: true,
      type: "struct",
      storageClassType: "PushAuthSshAgent",
    },
    ssh_key: {
      value: pushAuthSshKeyToHclTerraform(struct!.sshKey),
      isBlock: true,
      type: "struct",
      storageClassType: "PushAuthSshKey",
    },
    ssh_password: {
      value: pushAuthSshPasswordToHclTerraform(struct!.sshPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "PushAuthSshPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PushAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PushAuth | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PushAuth | cdktf.IResolvable | undefined) {
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
  private _basic = new PushAuthBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: PushAuthBasic) {
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
  private _sshAgent = new PushAuthSshAgentOutputReference(this, "ssh_agent");
  public get sshAgent() {
    return this._sshAgent;
  }
  public putSshAgent(value: PushAuthSshAgent) {
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
  private _sshKey = new PushAuthSshKeyOutputReference(this, "ssh_key");
  public get sshKey() {
    return this._sshKey;
  }
  public putSshKey(value: PushAuthSshKey) {
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
  private _sshPassword = new PushAuthSshPasswordOutputReference(this, "ssh_password");
  public get sshPassword() {
    return this._sshPassword;
  }
  public putSshPassword(value: PushAuthSshPassword) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push git_push}
*/
export class Push extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_push";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Push resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Push to import
  * @param importFromId The id of the existing Push that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Push to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_push", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.10.31/docs/resources/push git_push} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PushConfig
  */
  public constructor(scope: Construct, id: string, config: PushConfig) {
    super(scope, id, {
      terraformResourceType: 'git_push',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.10.31'
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
    this._caBundleFilePath = config.caBundleFilePath;
    this._directory = config.directory;
    this._force = config.force;
    this._insecureSkipTls = config.insecureSkipTls;
    this._prune = config.prune;
    this._refspecs = config.refspecs;
    this._remote = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth = new PushAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: PushAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // prune - computed: true, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // refspecs - computed: false, optional: false, required: true
  private _refspecs?: string[]; 
  public get refspecs() {
    return this.getListAttribute('refspecs');
  }
  public set refspecs(value: string[]) {
    this._refspecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refspecsInput() {
    return this._refspecs;
  }

  // remote - computed: true, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
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
      auth: pushAuthToTerraform(this._auth.internalValue),
      ca_bundle_file_path: cdktf.stringToTerraform(this._caBundleFilePath),
      directory: cdktf.stringToTerraform(this._directory),
      force: cdktf.booleanToTerraform(this._force),
      insecure_skip_tls: cdktf.booleanToTerraform(this._insecureSkipTls),
      prune: cdktf.booleanToTerraform(this._prune),
      refspecs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._refspecs),
      remote: cdktf.stringToTerraform(this._remote),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: pushAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PushAuth",
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
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insecure_skip_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureSkipTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prune: {
        value: cdktf.booleanToHclTerraform(this._prune),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      refspecs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._refspecs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
