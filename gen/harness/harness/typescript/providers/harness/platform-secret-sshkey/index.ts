// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformSecretSshkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#description PlatformSecretSshkey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#id PlatformSecretSshkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#identifier PlatformSecretSshkey#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#name PlatformSecretSshkey#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#org_id PlatformSecretSshkey#org_id}
  */
  readonly orgId?: string;
  /**
  * SSH port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#port PlatformSecretSshkey#port}
  */
  readonly port?: number;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#project_id PlatformSecretSshkey#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#tags PlatformSecretSshkey#tags}
  */
  readonly tags?: string[];
  /**
  * kerberos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#kerberos PlatformSecretSshkey#kerberos}
  */
  readonly kerberos?: PlatformSecretSshkeyKerberos;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#ssh PlatformSecretSshkey#ssh}
  */
  readonly ssh?: PlatformSecretSshkeySsh;
}
export interface PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpec {
  /**
  * key path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#key_path PlatformSecretSshkey#key_path}
  */
  readonly keyPath?: string;
}

export function platformSecretSshkeyKerberosTgtKeyTabFilePathSpecToTerraform(struct?: PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpecOutputReference | PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
  }
}


export function platformSecretSshkeyKerberosTgtKeyTabFilePathSpecToHclTerraform(struct?: PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpecOutputReference | PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPath = value.keyPath;
    }
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }
}
export interface PlatformSecretSshkeyKerberosTgtPasswordSpec {
  /**
  * password. To reference a password at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a password at the account scope, prefix 'account` to the expression: account.{identifier}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#password PlatformSecretSshkey#password}
  */
  readonly password?: string;
}

export function platformSecretSshkeyKerberosTgtPasswordSpecToTerraform(struct?: PlatformSecretSshkeyKerberosTgtPasswordSpecOutputReference | PlatformSecretSshkeyKerberosTgtPasswordSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function platformSecretSshkeyKerberosTgtPasswordSpecToHclTerraform(struct?: PlatformSecretSshkeyKerberosTgtPasswordSpecOutputReference | PlatformSecretSshkeyKerberosTgtPasswordSpec): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretSshkeyKerberosTgtPasswordSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretSshkeyKerberosTgtPasswordSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretSshkeyKerberosTgtPasswordSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
    }
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
}
export interface PlatformSecretSshkeyKerberos {
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#principal PlatformSecretSshkey#principal}
  */
  readonly principal: string;
  /**
  * Reference to a secret containing the password to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#realm PlatformSecretSshkey#realm}
  */
  readonly realm: string;
  /**
  * Method to generate tgt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#tgt_generation_method PlatformSecretSshkey#tgt_generation_method}
  */
  readonly tgtGenerationMethod?: string;
  /**
  * tgt_key_tab_file_path_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#tgt_key_tab_file_path_spec PlatformSecretSshkey#tgt_key_tab_file_path_spec}
  */
  readonly tgtKeyTabFilePathSpec?: PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpec;
  /**
  * tgt_password_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#tgt_password_spec PlatformSecretSshkey#tgt_password_spec}
  */
  readonly tgtPasswordSpec?: PlatformSecretSshkeyKerberosTgtPasswordSpec;
}

export function platformSecretSshkeyKerberosToTerraform(struct?: PlatformSecretSshkeyKerberosOutputReference | PlatformSecretSshkeyKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal: cdktf.stringToTerraform(struct!.principal),
    realm: cdktf.stringToTerraform(struct!.realm),
    tgt_generation_method: cdktf.stringToTerraform(struct!.tgtGenerationMethod),
    tgt_key_tab_file_path_spec: platformSecretSshkeyKerberosTgtKeyTabFilePathSpecToTerraform(struct!.tgtKeyTabFilePathSpec),
    tgt_password_spec: platformSecretSshkeyKerberosTgtPasswordSpecToTerraform(struct!.tgtPasswordSpec),
  }
}


export function platformSecretSshkeyKerberosToHclTerraform(struct?: PlatformSecretSshkeyKerberosOutputReference | PlatformSecretSshkeyKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.stringToHclTerraform(struct!.tgtGenerationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tgt_key_tab_file_path_spec: {
      value: platformSecretSshkeyKerberosTgtKeyTabFilePathSpecToHclTerraform(struct!.tgtKeyTabFilePathSpec),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpecList",
    },
    tgt_password_spec: {
      value: platformSecretSshkeyKerberosTgtPasswordSpecToHclTerraform(struct!.tgtPasswordSpec),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSecretSshkeyKerberosTgtPasswordSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretSshkeyKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretSshkeyKerberos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._tgtGenerationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtGenerationMethod = this._tgtGenerationMethod;
    }
    if (this._tgtKeyTabFilePathSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtKeyTabFilePathSpec = this._tgtKeyTabFilePathSpec?.internalValue;
    }
    if (this._tgtPasswordSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtPasswordSpec = this._tgtPasswordSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretSshkeyKerberos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._principal = undefined;
      this._realm = undefined;
      this._tgtGenerationMethod = undefined;
      this._tgtKeyTabFilePathSpec.internalValue = undefined;
      this._tgtPasswordSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._principal = value.principal;
      this._realm = value.realm;
      this._tgtGenerationMethod = value.tgtGenerationMethod;
      this._tgtKeyTabFilePathSpec.internalValue = value.tgtKeyTabFilePathSpec;
      this._tgtPasswordSpec.internalValue = value.tgtPasswordSpec;
    }
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
  private _tgtGenerationMethod?: string; 
  public get tgtGenerationMethod() {
    return this.getStringAttribute('tgt_generation_method');
  }
  public set tgtGenerationMethod(value: string) {
    this._tgtGenerationMethod = value;
  }
  public resetTgtGenerationMethod() {
    this._tgtGenerationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtGenerationMethodInput() {
    return this._tgtGenerationMethod;
  }

  // tgt_key_tab_file_path_spec - computed: false, optional: true, required: false
  private _tgtKeyTabFilePathSpec = new PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpecOutputReference(this, "tgt_key_tab_file_path_spec");
  public get tgtKeyTabFilePathSpec() {
    return this._tgtKeyTabFilePathSpec;
  }
  public putTgtKeyTabFilePathSpec(value: PlatformSecretSshkeyKerberosTgtKeyTabFilePathSpec) {
    this._tgtKeyTabFilePathSpec.internalValue = value;
  }
  public resetTgtKeyTabFilePathSpec() {
    this._tgtKeyTabFilePathSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtKeyTabFilePathSpecInput() {
    return this._tgtKeyTabFilePathSpec.internalValue;
  }

  // tgt_password_spec - computed: false, optional: true, required: false
  private _tgtPasswordSpec = new PlatformSecretSshkeyKerberosTgtPasswordSpecOutputReference(this, "tgt_password_spec");
  public get tgtPasswordSpec() {
    return this._tgtPasswordSpec;
  }
  public putTgtPasswordSpec(value: PlatformSecretSshkeyKerberosTgtPasswordSpec) {
    this._tgtPasswordSpec.internalValue = value;
  }
  public resetTgtPasswordSpec() {
    this._tgtPasswordSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtPasswordSpecInput() {
    return this._tgtPasswordSpec.internalValue;
  }
}
export interface PlatformSecretSshkeySshSshPasswordCredential {
  /**
  * SSH Password. To reference a password at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a password at the account scope, prefix 'account` to the expression: account.{identifier}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#password PlatformSecretSshkey#password}
  */
  readonly password: string;
  /**
  * SSH Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#user_name PlatformSecretSshkey#user_name}
  */
  readonly userName: string;
}

export function platformSecretSshkeySshSshPasswordCredentialToTerraform(struct?: PlatformSecretSshkeySshSshPasswordCredentialOutputReference | PlatformSecretSshkeySshSshPasswordCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function platformSecretSshkeySshSshPasswordCredentialToHclTerraform(struct?: PlatformSecretSshkeySshSshPasswordCredentialOutputReference | PlatformSecretSshkeySshSshPasswordCredential): any {
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
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretSshkeySshSshPasswordCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretSshkeySshSshPasswordCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretSshkeySshSshPasswordCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._userName = value.userName;
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

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface PlatformSecretSshkeySshSshkeyPathCredential {
  /**
  * Encrypted Passphrase . To reference a encryptedPassphrase at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a encryptedPassPhrase at the account scope, prefix 'account` to the expression: account.{identifier}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#encrypted_passphrase PlatformSecretSshkey#encrypted_passphrase}
  */
  readonly encryptedPassphrase?: string;
  /**
  * Path of the key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#key_path PlatformSecretSshkey#key_path}
  */
  readonly keyPath: string;
  /**
  * SSH Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#user_name PlatformSecretSshkey#user_name}
  */
  readonly userName: string;
}

export function platformSecretSshkeySshSshkeyPathCredentialToTerraform(struct?: PlatformSecretSshkeySshSshkeyPathCredentialOutputReference | PlatformSecretSshkeySshSshkeyPathCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_passphrase: cdktf.stringToTerraform(struct!.encryptedPassphrase),
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function platformSecretSshkeySshSshkeyPathCredentialToHclTerraform(struct?: PlatformSecretSshkeySshSshkeyPathCredentialOutputReference | PlatformSecretSshkeySshSshkeyPathCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretSshkeySshSshkeyPathCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretSshkeySshSshkeyPathCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPassphrase = this._encryptedPassphrase;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretSshkeySshSshkeyPathCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptedPassphrase = undefined;
      this._keyPath = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptedPassphrase = value.encryptedPassphrase;
      this._keyPath = value.keyPath;
      this._userName = value.userName;
    }
  }

  // encrypted_passphrase - computed: false, optional: true, required: false
  private _encryptedPassphrase?: string; 
  public get encryptedPassphrase() {
    return this.getStringAttribute('encrypted_passphrase');
  }
  public set encryptedPassphrase(value: string) {
    this._encryptedPassphrase = value;
  }
  public resetEncryptedPassphrase() {
    this._encryptedPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPassphraseInput() {
    return this._encryptedPassphrase;
  }

  // key_path - computed: false, optional: false, required: true
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface PlatformSecretSshkeySshSshkeyReferenceCredential {
  /**
  * Encrypted Passphrase. To reference a encryptedPassphrase at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a encryptedPassPhrase at the account scope, prefix 'account` to the expression: account.{identifier}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#encrypted_passphrase PlatformSecretSshkey#encrypted_passphrase}
  */
  readonly encryptedPassphrase?: string;
  /**
  * SSH key. To reference a key at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a key at the account scope, prefix 'account` to the expression: account.{identifier}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#key PlatformSecretSshkey#key}
  */
  readonly key: string;
  /**
  * SSH Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#user_name PlatformSecretSshkey#user_name}
  */
  readonly userName: string;
}

export function platformSecretSshkeySshSshkeyReferenceCredentialToTerraform(struct?: PlatformSecretSshkeySshSshkeyReferenceCredentialOutputReference | PlatformSecretSshkeySshSshkeyReferenceCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_passphrase: cdktf.stringToTerraform(struct!.encryptedPassphrase),
    key: cdktf.stringToTerraform(struct!.key),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function platformSecretSshkeySshSshkeyReferenceCredentialToHclTerraform(struct?: PlatformSecretSshkeySshSshkeyReferenceCredentialOutputReference | PlatformSecretSshkeySshSshkeyReferenceCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretSshkeySshSshkeyReferenceCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretSshkeySshSshkeyReferenceCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPassphrase = this._encryptedPassphrase;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretSshkeySshSshkeyReferenceCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptedPassphrase = undefined;
      this._key = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptedPassphrase = value.encryptedPassphrase;
      this._key = value.key;
      this._userName = value.userName;
    }
  }

  // encrypted_passphrase - computed: false, optional: true, required: false
  private _encryptedPassphrase?: string; 
  public get encryptedPassphrase() {
    return this.getStringAttribute('encrypted_passphrase');
  }
  public set encryptedPassphrase(value: string) {
    this._encryptedPassphrase = value;
  }
  public resetEncryptedPassphrase() {
    this._encryptedPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPassphraseInput() {
    return this._encryptedPassphrase;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface PlatformSecretSshkeySsh {
  /**
  * This specifies SSH credential type as Password, KeyPath or KeyReference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#credential_type PlatformSecretSshkey#credential_type}
  */
  readonly credentialType: string;
  /**
  * ssh_password_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#ssh_password_credential PlatformSecretSshkey#ssh_password_credential}
  */
  readonly sshPasswordCredential?: PlatformSecretSshkeySshSshPasswordCredential;
  /**
  * sshkey_path_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#sshkey_path_credential PlatformSecretSshkey#sshkey_path_credential}
  */
  readonly sshkeyPathCredential?: PlatformSecretSshkeySshSshkeyPathCredential;
  /**
  * sshkey_reference_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#sshkey_reference_credential PlatformSecretSshkey#sshkey_reference_credential}
  */
  readonly sshkeyReferenceCredential?: PlatformSecretSshkeySshSshkeyReferenceCredential;
}

export function platformSecretSshkeySshToTerraform(struct?: PlatformSecretSshkeySshOutputReference | PlatformSecretSshkeySsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    ssh_password_credential: platformSecretSshkeySshSshPasswordCredentialToTerraform(struct!.sshPasswordCredential),
    sshkey_path_credential: platformSecretSshkeySshSshkeyPathCredentialToTerraform(struct!.sshkeyPathCredential),
    sshkey_reference_credential: platformSecretSshkeySshSshkeyReferenceCredentialToTerraform(struct!.sshkeyReferenceCredential),
  }
}


export function platformSecretSshkeySshToHclTerraform(struct?: PlatformSecretSshkeySshOutputReference | PlatformSecretSshkeySsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_password_credential: {
      value: platformSecretSshkeySshSshPasswordCredentialToHclTerraform(struct!.sshPasswordCredential),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSecretSshkeySshSshPasswordCredentialList",
    },
    sshkey_path_credential: {
      value: platformSecretSshkeySshSshkeyPathCredentialToHclTerraform(struct!.sshkeyPathCredential),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSecretSshkeySshSshkeyPathCredentialList",
    },
    sshkey_reference_credential: {
      value: platformSecretSshkeySshSshkeyReferenceCredentialToHclTerraform(struct!.sshkeyReferenceCredential),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSecretSshkeySshSshkeyReferenceCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretSshkeySshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretSshkeySsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._sshPasswordCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPasswordCredential = this._sshPasswordCredential?.internalValue;
    }
    if (this._sshkeyPathCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshkeyPathCredential = this._sshkeyPathCredential?.internalValue;
    }
    if (this._sshkeyReferenceCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshkeyReferenceCredential = this._sshkeyReferenceCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretSshkeySsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialType = undefined;
      this._sshPasswordCredential.internalValue = undefined;
      this._sshkeyPathCredential.internalValue = undefined;
      this._sshkeyReferenceCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialType = value.credentialType;
      this._sshPasswordCredential.internalValue = value.sshPasswordCredential;
      this._sshkeyPathCredential.internalValue = value.sshkeyPathCredential;
      this._sshkeyReferenceCredential.internalValue = value.sshkeyReferenceCredential;
    }
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // ssh_password_credential - computed: false, optional: true, required: false
  private _sshPasswordCredential = new PlatformSecretSshkeySshSshPasswordCredentialOutputReference(this, "ssh_password_credential");
  public get sshPasswordCredential() {
    return this._sshPasswordCredential;
  }
  public putSshPasswordCredential(value: PlatformSecretSshkeySshSshPasswordCredential) {
    this._sshPasswordCredential.internalValue = value;
  }
  public resetSshPasswordCredential() {
    this._sshPasswordCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordCredentialInput() {
    return this._sshPasswordCredential.internalValue;
  }

  // sshkey_path_credential - computed: false, optional: true, required: false
  private _sshkeyPathCredential = new PlatformSecretSshkeySshSshkeyPathCredentialOutputReference(this, "sshkey_path_credential");
  public get sshkeyPathCredential() {
    return this._sshkeyPathCredential;
  }
  public putSshkeyPathCredential(value: PlatformSecretSshkeySshSshkeyPathCredential) {
    this._sshkeyPathCredential.internalValue = value;
  }
  public resetSshkeyPathCredential() {
    this._sshkeyPathCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeyPathCredentialInput() {
    return this._sshkeyPathCredential.internalValue;
  }

  // sshkey_reference_credential - computed: false, optional: true, required: false
  private _sshkeyReferenceCredential = new PlatformSecretSshkeySshSshkeyReferenceCredentialOutputReference(this, "sshkey_reference_credential");
  public get sshkeyReferenceCredential() {
    return this._sshkeyReferenceCredential;
  }
  public putSshkeyReferenceCredential(value: PlatformSecretSshkeySshSshkeyReferenceCredential) {
    this._sshkeyReferenceCredential.internalValue = value;
  }
  public resetSshkeyReferenceCredential() {
    this._sshkeyReferenceCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeyReferenceCredentialInput() {
    return this._sshkeyReferenceCredential.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey harness_platform_secret_sshkey}
*/
export class PlatformSecretSshkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_secret_sshkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformSecretSshkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformSecretSshkey to import
  * @param importFromId The id of the existing PlatformSecretSshkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformSecretSshkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_secret_sshkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_secret_sshkey harness_platform_secret_sshkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformSecretSshkeyConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformSecretSshkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_secret_sshkey',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._port = config.port;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._kerberos.internalValue = config.kerberos;
    this._ssh.internalValue = config.ssh;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new PlatformSecretSshkeyKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: PlatformSecretSshkeyKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new PlatformSecretSshkeySshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: PlatformSecretSshkeySsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      port: cdktf.numberToTerraform(this._port),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      kerberos: platformSecretSshkeyKerberosToTerraform(this._kerberos.internalValue),
      ssh: platformSecretSshkeySshToTerraform(this._ssh.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      kerberos: {
        value: platformSecretSshkeyKerberosToHclTerraform(this._kerberos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSecretSshkeyKerberosList",
      },
      ssh: {
        value: platformSecretSshkeySshToHclTerraform(this._ssh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSecretSshkeySshList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
