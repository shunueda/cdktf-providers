// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the encrypted text secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#name SshCredential#name}
  */
  readonly name: string;
  /**
  * kerberos_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#kerberos_authentication SshCredential#kerberos_authentication}
  */
  readonly kerberosAuthentication?: SshCredentialKerberosAuthentication;
  /**
  * ssh_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#ssh_authentication SshCredential#ssh_authentication}
  */
  readonly sshAuthentication?: SshCredentialSshAuthentication;
  /**
  * usage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#usage_scope SshCredential#usage_scope}
  */
  readonly usageScope?: SshCredentialUsageScope[] | cdktf.IResolvable;
}
export interface SshCredentialKerberosAuthenticationTgtGenerationMethod {
  /**
  * The id of the encrypted text secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#kerberos_password_id SshCredential#kerberos_password_id}
  */
  readonly kerberosPasswordId?: string;
  /**
  * The path to the key tab file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#key_tab_file_path SshCredential#key_tab_file_path}
  */
  readonly keyTabFilePath?: string;
}

export function sshCredentialKerberosAuthenticationTgtGenerationMethodToTerraform(struct?: SshCredentialKerberosAuthenticationTgtGenerationMethodOutputReference | SshCredentialKerberosAuthenticationTgtGenerationMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_password_id: cdktf.stringToTerraform(struct!.kerberosPasswordId),
    key_tab_file_path: cdktf.stringToTerraform(struct!.keyTabFilePath),
  }
}


export function sshCredentialKerberosAuthenticationTgtGenerationMethodToHclTerraform(struct?: SshCredentialKerberosAuthenticationTgtGenerationMethodOutputReference | SshCredentialKerberosAuthenticationTgtGenerationMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_password_id: {
      value: cdktf.stringToHclTerraform(struct!.kerberosPasswordId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tab_file_path: {
      value: cdktf.stringToHclTerraform(struct!.keyTabFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshCredentialKerberosAuthenticationTgtGenerationMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SshCredentialKerberosAuthenticationTgtGenerationMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosPasswordId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPasswordId = this._kerberosPasswordId;
    }
    if (this._keyTabFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTabFilePath = this._keyTabFilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshCredentialKerberosAuthenticationTgtGenerationMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kerberosPasswordId = undefined;
      this._keyTabFilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kerberosPasswordId = value.kerberosPasswordId;
      this._keyTabFilePath = value.keyTabFilePath;
    }
  }

  // kerberos_password_id - computed: false, optional: true, required: false
  private _kerberosPasswordId?: string; 
  public get kerberosPasswordId() {
    return this.getStringAttribute('kerberos_password_id');
  }
  public set kerberosPasswordId(value: string) {
    this._kerberosPasswordId = value;
  }
  public resetKerberosPasswordId() {
    this._kerberosPasswordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPasswordIdInput() {
    return this._kerberosPasswordId;
  }

  // key_tab_file_path - computed: false, optional: true, required: false
  private _keyTabFilePath?: string; 
  public get keyTabFilePath() {
    return this.getStringAttribute('key_tab_file_path');
  }
  public set keyTabFilePath(value: string) {
    this._keyTabFilePath = value;
  }
  public resetKeyTabFilePath() {
    this._keyTabFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTabFilePathInput() {
    return this._keyTabFilePath;
  }
}
export interface SshCredentialKerberosAuthentication {
  /**
  * Port to use for Kerberos authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#port SshCredential#port}
  */
  readonly port: number;
  /**
  * Name of the principal for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#principal SshCredential#principal}
  */
  readonly principal: string;
  /**
  * Realm associated with the Kerberos authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#realm SshCredential#realm}
  */
  readonly realm: string;
  /**
  * tgt_generation_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#tgt_generation_method SshCredential#tgt_generation_method}
  */
  readonly tgtGenerationMethod?: SshCredentialKerberosAuthenticationTgtGenerationMethod;
}

export function sshCredentialKerberosAuthenticationToTerraform(struct?: SshCredentialKerberosAuthenticationOutputReference | SshCredentialKerberosAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    principal: cdktf.stringToTerraform(struct!.principal),
    realm: cdktf.stringToTerraform(struct!.realm),
    tgt_generation_method: sshCredentialKerberosAuthenticationTgtGenerationMethodToTerraform(struct!.tgtGenerationMethod),
  }
}


export function sshCredentialKerberosAuthenticationToHclTerraform(struct?: SshCredentialKerberosAuthenticationOutputReference | SshCredentialKerberosAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_generation_method: {
      value: sshCredentialKerberosAuthenticationTgtGenerationMethodToHclTerraform(struct!.tgtGenerationMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SshCredentialKerberosAuthenticationTgtGenerationMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshCredentialKerberosAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SshCredentialKerberosAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._tgtGenerationMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtGenerationMethod = this._tgtGenerationMethod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshCredentialKerberosAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._principal = undefined;
      this._realm = undefined;
      this._tgtGenerationMethod.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._principal = value.principal;
      this._realm = value.realm;
      this._tgtGenerationMethod.internalValue = value.tgtGenerationMethod;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // tgt_generation_method - computed: false, optional: true, required: false
  private _tgtGenerationMethod = new SshCredentialKerberosAuthenticationTgtGenerationMethodOutputReference(this, "tgt_generation_method");
  public get tgtGenerationMethod() {
    return this._tgtGenerationMethod;
  }
  public putTgtGenerationMethod(value: SshCredentialKerberosAuthenticationTgtGenerationMethod) {
    this._tgtGenerationMethod.internalValue = value;
  }
  public resetTgtGenerationMethod() {
    this._tgtGenerationMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtGenerationMethodInput() {
    return this._tgtGenerationMethod.internalValue;
  }
}
export interface SshCredentialSshAuthenticationInlineSsh {
  /**
  * The id of the encrypted secret to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#passphrase_secret_id SshCredential#passphrase_secret_id}
  */
  readonly passphraseSecretId?: string;
  /**
  * The id of the secret containing the SSH key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#ssh_key_file_id SshCredential#ssh_key_file_id}
  */
  readonly sshKeyFileId: string;
}

export function sshCredentialSshAuthenticationInlineSshToTerraform(struct?: SshCredentialSshAuthenticationInlineSshOutputReference | SshCredentialSshAuthenticationInlineSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase_secret_id: cdktf.stringToTerraform(struct!.passphraseSecretId),
    ssh_key_file_id: cdktf.stringToTerraform(struct!.sshKeyFileId),
  }
}


export function sshCredentialSshAuthenticationInlineSshToHclTerraform(struct?: SshCredentialSshAuthenticationInlineSshOutputReference | SshCredentialSshAuthenticationInlineSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passphraseSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_file_id: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshCredentialSshAuthenticationInlineSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SshCredentialSshAuthenticationInlineSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphraseSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseSecretId = this._passphraseSecretId;
    }
    if (this._sshKeyFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyFileId = this._sshKeyFileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshCredentialSshAuthenticationInlineSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passphraseSecretId = undefined;
      this._sshKeyFileId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passphraseSecretId = value.passphraseSecretId;
      this._sshKeyFileId = value.sshKeyFileId;
    }
  }

  // passphrase_secret_id - computed: false, optional: true, required: false
  private _passphraseSecretId?: string; 
  public get passphraseSecretId() {
    return this.getStringAttribute('passphrase_secret_id');
  }
  public set passphraseSecretId(value: string) {
    this._passphraseSecretId = value;
  }
  public resetPassphraseSecretId() {
    this._passphraseSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseSecretIdInput() {
    return this._passphraseSecretId;
  }

  // ssh_key_file_id - computed: false, optional: false, required: true
  private _sshKeyFileId?: string; 
  public get sshKeyFileId() {
    return this.getStringAttribute('ssh_key_file_id');
  }
  public set sshKeyFileId(value: string) {
    this._sshKeyFileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyFileIdInput() {
    return this._sshKeyFileId;
  }
}
export interface SshCredentialSshAuthenticationServerPassword {
  /**
  * The id of the encrypted secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#password_secret_id SshCredential#password_secret_id}
  */
  readonly passwordSecretId: string;
}

export function sshCredentialSshAuthenticationServerPasswordToTerraform(struct?: SshCredentialSshAuthenticationServerPasswordOutputReference | SshCredentialSshAuthenticationServerPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
  }
}


export function sshCredentialSshAuthenticationServerPasswordToHclTerraform(struct?: SshCredentialSshAuthenticationServerPasswordOutputReference | SshCredentialSshAuthenticationServerPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshCredentialSshAuthenticationServerPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SshCredentialSshAuthenticationServerPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshCredentialSshAuthenticationServerPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordSecretId = value.passwordSecretId;
    }
  }

  // password_secret_id - computed: false, optional: false, required: true
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }
}
export interface SshCredentialSshAuthenticationSshKeyFile {
  /**
  * The id of the secret containing the password to use for the ssh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#passphrase_secret_id SshCredential#passphrase_secret_id}
  */
  readonly passphraseSecretId?: string;
  /**
  * The path to the key file on the delegate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#path SshCredential#path}
  */
  readonly path: string;
}

export function sshCredentialSshAuthenticationSshKeyFileToTerraform(struct?: SshCredentialSshAuthenticationSshKeyFileOutputReference | SshCredentialSshAuthenticationSshKeyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase_secret_id: cdktf.stringToTerraform(struct!.passphraseSecretId),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function sshCredentialSshAuthenticationSshKeyFileToHclTerraform(struct?: SshCredentialSshAuthenticationSshKeyFileOutputReference | SshCredentialSshAuthenticationSshKeyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passphraseSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshCredentialSshAuthenticationSshKeyFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SshCredentialSshAuthenticationSshKeyFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphraseSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseSecretId = this._passphraseSecretId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshCredentialSshAuthenticationSshKeyFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passphraseSecretId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passphraseSecretId = value.passphraseSecretId;
      this._path = value.path;
    }
  }

  // passphrase_secret_id - computed: false, optional: true, required: false
  private _passphraseSecretId?: string; 
  public get passphraseSecretId() {
    return this.getStringAttribute('passphrase_secret_id');
  }
  public set passphraseSecretId(value: string) {
    this._passphraseSecretId = value;
  }
  public resetPassphraseSecretId() {
    this._passphraseSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseSecretIdInput() {
    return this._passphraseSecretId;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface SshCredentialSshAuthentication {
  /**
  * The port to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#port SshCredential#port}
  */
  readonly port: number;
  /**
  * The username to use when connecting to ssh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#username SshCredential#username}
  */
  readonly username: string;
  /**
  * inline_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#inline_ssh SshCredential#inline_ssh}
  */
  readonly inlineSsh?: SshCredentialSshAuthenticationInlineSsh;
  /**
  * server_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#server_password SshCredential#server_password}
  */
  readonly serverPassword?: SshCredentialSshAuthenticationServerPassword;
  /**
  * ssh_key_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#ssh_key_file SshCredential#ssh_key_file}
  */
  readonly sshKeyFile?: SshCredentialSshAuthenticationSshKeyFile;
}

export function sshCredentialSshAuthenticationToTerraform(struct?: SshCredentialSshAuthenticationOutputReference | SshCredentialSshAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
    inline_ssh: sshCredentialSshAuthenticationInlineSshToTerraform(struct!.inlineSsh),
    server_password: sshCredentialSshAuthenticationServerPasswordToTerraform(struct!.serverPassword),
    ssh_key_file: sshCredentialSshAuthenticationSshKeyFileToTerraform(struct!.sshKeyFile),
  }
}


export function sshCredentialSshAuthenticationToHclTerraform(struct?: SshCredentialSshAuthenticationOutputReference | SshCredentialSshAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inline_ssh: {
      value: sshCredentialSshAuthenticationInlineSshToHclTerraform(struct!.inlineSsh),
      isBlock: true,
      type: "list",
      storageClassType: "SshCredentialSshAuthenticationInlineSshList",
    },
    server_password: {
      value: sshCredentialSshAuthenticationServerPasswordToHclTerraform(struct!.serverPassword),
      isBlock: true,
      type: "list",
      storageClassType: "SshCredentialSshAuthenticationServerPasswordList",
    },
    ssh_key_file: {
      value: sshCredentialSshAuthenticationSshKeyFileToHclTerraform(struct!.sshKeyFile),
      isBlock: true,
      type: "list",
      storageClassType: "SshCredentialSshAuthenticationSshKeyFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshCredentialSshAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SshCredentialSshAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._inlineSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineSsh = this._inlineSsh?.internalValue;
    }
    if (this._serverPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPassword = this._serverPassword?.internalValue;
    }
    if (this._sshKeyFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyFile = this._sshKeyFile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshCredentialSshAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._username = undefined;
      this._inlineSsh.internalValue = undefined;
      this._serverPassword.internalValue = undefined;
      this._sshKeyFile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._username = value.username;
      this._inlineSsh.internalValue = value.inlineSsh;
      this._serverPassword.internalValue = value.serverPassword;
      this._sshKeyFile.internalValue = value.sshKeyFile;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // inline_ssh - computed: false, optional: true, required: false
  private _inlineSsh = new SshCredentialSshAuthenticationInlineSshOutputReference(this, "inline_ssh");
  public get inlineSsh() {
    return this._inlineSsh;
  }
  public putInlineSsh(value: SshCredentialSshAuthenticationInlineSsh) {
    this._inlineSsh.internalValue = value;
  }
  public resetInlineSsh() {
    this._inlineSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineSshInput() {
    return this._inlineSsh.internalValue;
  }

  // server_password - computed: false, optional: true, required: false
  private _serverPassword = new SshCredentialSshAuthenticationServerPasswordOutputReference(this, "server_password");
  public get serverPassword() {
    return this._serverPassword;
  }
  public putServerPassword(value: SshCredentialSshAuthenticationServerPassword) {
    this._serverPassword.internalValue = value;
  }
  public resetServerPassword() {
    this._serverPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPasswordInput() {
    return this._serverPassword.internalValue;
  }

  // ssh_key_file - computed: false, optional: true, required: false
  private _sshKeyFile = new SshCredentialSshAuthenticationSshKeyFileOutputReference(this, "ssh_key_file");
  public get sshKeyFile() {
    return this._sshKeyFile;
  }
  public putSshKeyFile(value: SshCredentialSshAuthenticationSshKeyFile) {
    this._sshKeyFile.internalValue = value;
  }
  public resetSshKeyFile() {
    this._sshKeyFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyFileInput() {
    return this._sshKeyFile.internalValue;
  }
}
export interface SshCredentialUsageScope {
  /**
  * Id of the application to scope to. If empty then this scope applies to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#application_id SshCredential#application_id}
  */
  readonly applicationId?: string;
  /**
  * Type of environment filter applied. Cannot be used with `environment_id`. Valid options are NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#environment_filter_type SshCredential#environment_filter_type}
  */
  readonly environmentFilterType?: string;
  /**
  * Id of the id of the specific environment to scope to. Cannot be used with `environment_filter_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#environment_id SshCredential#environment_id}
  */
  readonly environmentId?: string;
}

export function sshCredentialUsageScopeToTerraform(struct?: SshCredentialUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    environment_filter_type: cdktf.stringToTerraform(struct!.environmentFilterType),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
  }
}


export function sshCredentialUsageScopeToHclTerraform(struct?: SshCredentialUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SshCredentialUsageScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SshCredentialUsageScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._environmentFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilterType = this._environmentFilterType;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshCredentialUsageScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._environmentFilterType = undefined;
      this._environmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._environmentFilterType = value.environmentFilterType;
      this._environmentId = value.environmentId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_filter_type - computed: false, optional: true, required: false
  private _environmentFilterType?: string; 
  public get environmentFilterType() {
    return this.getStringAttribute('environment_filter_type');
  }
  public set environmentFilterType(value: string) {
    this._environmentFilterType = value;
  }
  public resetEnvironmentFilterType() {
    this._environmentFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterTypeInput() {
    return this._environmentFilterType;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }
}

export class SshCredentialUsageScopeList extends cdktf.ComplexList {
  public internalValue? : SshCredentialUsageScope[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SshCredentialUsageScopeOutputReference {
    return new SshCredentialUsageScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential harness_ssh_credential}
*/
export class SshCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_ssh_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshCredential to import
  * @param importFromId The id of the existing SshCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_ssh_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/ssh_credential harness_ssh_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: SshCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_ssh_credential',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._kerberosAuthentication.internalValue = config.kerberosAuthentication;
    this._sshAuthentication.internalValue = config.sshAuthentication;
    this._usageScope.internalValue = config.usageScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // kerberos_authentication - computed: false, optional: true, required: false
  private _kerberosAuthentication = new SshCredentialKerberosAuthenticationOutputReference(this, "kerberos_authentication");
  public get kerberosAuthentication() {
    return this._kerberosAuthentication;
  }
  public putKerberosAuthentication(value: SshCredentialKerberosAuthentication) {
    this._kerberosAuthentication.internalValue = value;
  }
  public resetKerberosAuthentication() {
    this._kerberosAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosAuthenticationInput() {
    return this._kerberosAuthentication.internalValue;
  }

  // ssh_authentication - computed: false, optional: true, required: false
  private _sshAuthentication = new SshCredentialSshAuthenticationOutputReference(this, "ssh_authentication");
  public get sshAuthentication() {
    return this._sshAuthentication;
  }
  public putSshAuthentication(value: SshCredentialSshAuthentication) {
    this._sshAuthentication.internalValue = value;
  }
  public resetSshAuthentication() {
    this._sshAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthenticationInput() {
    return this._sshAuthentication.internalValue;
  }

  // usage_scope - computed: false, optional: true, required: false
  private _usageScope = new SshCredentialUsageScopeList(this, "usage_scope", true);
  public get usageScope() {
    return this._usageScope;
  }
  public putUsageScope(value: SshCredentialUsageScope[] | cdktf.IResolvable) {
    this._usageScope.internalValue = value;
  }
  public resetUsageScope() {
    this._usageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageScopeInput() {
    return this._usageScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      kerberos_authentication: sshCredentialKerberosAuthenticationToTerraform(this._kerberosAuthentication.internalValue),
      ssh_authentication: sshCredentialSshAuthenticationToTerraform(this._sshAuthentication.internalValue),
      usage_scope: cdktf.listMapper(sshCredentialUsageScopeToTerraform, true)(this._usageScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_authentication: {
        value: sshCredentialKerberosAuthenticationToHclTerraform(this._kerberosAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SshCredentialKerberosAuthenticationList",
      },
      ssh_authentication: {
        value: sshCredentialSshAuthenticationToHclTerraform(this._sshAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SshCredentialSshAuthenticationList",
      },
      usage_scope: {
        value: cdktf.listMapperHcl(sshCredentialUsageScopeToHclTerraform, true)(this._usageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SshCredentialUsageScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
