// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformSecretWinrmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#description PlatformSecretWinrm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#id PlatformSecretWinrm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#identifier PlatformSecretWinrm#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#name PlatformSecretWinrm#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#org_id PlatformSecretWinrm#org_id}
  */
  readonly orgId?: string;
  /**
  * WinRM port. Default is 5986 for HTTPS, 5985 for HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#port PlatformSecretWinrm#port}
  */
  readonly port?: number;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#project_id PlatformSecretWinrm#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#tags PlatformSecretWinrm#tags}
  */
  readonly tags?: string[];
  /**
  * kerberos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#kerberos PlatformSecretWinrm#kerberos}
  */
  readonly kerberos?: PlatformSecretWinrmKerberos;
  /**
  * ntlm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#ntlm PlatformSecretWinrm#ntlm}
  */
  readonly ntlm?: PlatformSecretWinrmNtlm;
}
export interface PlatformSecretWinrmKerberosTgtKeyTabFilePathSpec {
  /**
  * Path to the key tab file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#key_path PlatformSecretWinrm#key_path}
  */
  readonly keyPath: string;
}

export function platformSecretWinrmKerberosTgtKeyTabFilePathSpecToTerraform(struct?: PlatformSecretWinrmKerberosTgtKeyTabFilePathSpecOutputReference | PlatformSecretWinrmKerberosTgtKeyTabFilePathSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_path: cdktf.stringToTerraform(struct!.keyPath),
  }
}


export function platformSecretWinrmKerberosTgtKeyTabFilePathSpecToHclTerraform(struct?: PlatformSecretWinrmKerberosTgtKeyTabFilePathSpecOutputReference | PlatformSecretWinrmKerberosTgtKeyTabFilePathSpec): any {
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

export class PlatformSecretWinrmKerberosTgtKeyTabFilePathSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretWinrmKerberosTgtKeyTabFilePathSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretWinrmKerberosTgtKeyTabFilePathSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPath = value.keyPath;
    }
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
}
export interface PlatformSecretWinrmKerberosTgtPasswordSpec {
  /**
  * Reference to a secret containing the password. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account' to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#password_ref PlatformSecretWinrm#password_ref}
  */
  readonly passwordRef: string;
}

export function platformSecretWinrmKerberosTgtPasswordSpecToTerraform(struct?: PlatformSecretWinrmKerberosTgtPasswordSpecOutputReference | PlatformSecretWinrmKerberosTgtPasswordSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
  }
}


export function platformSecretWinrmKerberosTgtPasswordSpecToHclTerraform(struct?: PlatformSecretWinrmKerberosTgtPasswordSpecOutputReference | PlatformSecretWinrmKerberosTgtPasswordSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_ref: {
      value: cdktf.stringToHclTerraform(struct!.passwordRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretWinrmKerberosTgtPasswordSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretWinrmKerberosTgtPasswordSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretWinrmKerberosTgtPasswordSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordRef = value.passwordRef;
    }
  }

  // password_ref - computed: false, optional: false, required: true
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
  }
}
export interface PlatformSecretWinrmKerberos {
  /**
  * Kerberos principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#principal PlatformSecretWinrm#principal}
  */
  readonly principal: string;
  /**
  * Kerberos realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#realm PlatformSecretWinrm#realm}
  */
  readonly realm: string;
  /**
  * Skip certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#skip_cert_check PlatformSecretWinrm#skip_cert_check}
  */
  readonly skipCertCheck?: boolean | cdktf.IResolvable;
  /**
  * Method to generate TGT (Ticket Granting Ticket).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#tgt_generation_method PlatformSecretWinrm#tgt_generation_method}
  */
  readonly tgtGenerationMethod?: string;
  /**
  * Use no profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#use_no_profile PlatformSecretWinrm#use_no_profile}
  */
  readonly useNoProfile?: boolean | cdktf.IResolvable;
  /**
  * Use SSL/TLS for WinRM communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#use_ssl PlatformSecretWinrm#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * tgt_key_tab_file_path_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#tgt_key_tab_file_path_spec PlatformSecretWinrm#tgt_key_tab_file_path_spec}
  */
  readonly tgtKeyTabFilePathSpec?: PlatformSecretWinrmKerberosTgtKeyTabFilePathSpec;
  /**
  * tgt_password_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#tgt_password_spec PlatformSecretWinrm#tgt_password_spec}
  */
  readonly tgtPasswordSpec?: PlatformSecretWinrmKerberosTgtPasswordSpec;
}

export function platformSecretWinrmKerberosToTerraform(struct?: PlatformSecretWinrmKerberosOutputReference | PlatformSecretWinrmKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principal: cdktf.stringToTerraform(struct!.principal),
    realm: cdktf.stringToTerraform(struct!.realm),
    skip_cert_check: cdktf.booleanToTerraform(struct!.skipCertCheck),
    tgt_generation_method: cdktf.stringToTerraform(struct!.tgtGenerationMethod),
    use_no_profile: cdktf.booleanToTerraform(struct!.useNoProfile),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    tgt_key_tab_file_path_spec: platformSecretWinrmKerberosTgtKeyTabFilePathSpecToTerraform(struct!.tgtKeyTabFilePathSpec),
    tgt_password_spec: platformSecretWinrmKerberosTgtPasswordSpecToTerraform(struct!.tgtPasswordSpec),
  }
}


export function platformSecretWinrmKerberosToHclTerraform(struct?: PlatformSecretWinrmKerberosOutputReference | PlatformSecretWinrmKerberos): any {
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
    skip_cert_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tgt_generation_method: {
      value: cdktf.stringToHclTerraform(struct!.tgtGenerationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_no_profile: {
      value: cdktf.booleanToHclTerraform(struct!.useNoProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tgt_key_tab_file_path_spec: {
      value: platformSecretWinrmKerberosTgtKeyTabFilePathSpecToHclTerraform(struct!.tgtKeyTabFilePathSpec),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSecretWinrmKerberosTgtKeyTabFilePathSpecList",
    },
    tgt_password_spec: {
      value: platformSecretWinrmKerberosTgtPasswordSpecToHclTerraform(struct!.tgtPasswordSpec),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformSecretWinrmKerberosTgtPasswordSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSecretWinrmKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretWinrmKerberos | undefined {
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
    if (this._skipCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCertCheck = this._skipCertCheck;
    }
    if (this._tgtGenerationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgtGenerationMethod = this._tgtGenerationMethod;
    }
    if (this._useNoProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNoProfile = this._useNoProfile;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
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

  public set internalValue(value: PlatformSecretWinrmKerberos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._principal = undefined;
      this._realm = undefined;
      this._skipCertCheck = undefined;
      this._tgtGenerationMethod = undefined;
      this._useNoProfile = undefined;
      this._useSsl = undefined;
      this._tgtKeyTabFilePathSpec.internalValue = undefined;
      this._tgtPasswordSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._principal = value.principal;
      this._realm = value.realm;
      this._skipCertCheck = value.skipCertCheck;
      this._tgtGenerationMethod = value.tgtGenerationMethod;
      this._useNoProfile = value.useNoProfile;
      this._useSsl = value.useSsl;
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

  // skip_cert_check - computed: false, optional: true, required: false
  private _skipCertCheck?: boolean | cdktf.IResolvable; 
  public get skipCertCheck() {
    return this.getBooleanAttribute('skip_cert_check');
  }
  public set skipCertCheck(value: boolean | cdktf.IResolvable) {
    this._skipCertCheck = value;
  }
  public resetSkipCertCheck() {
    this._skipCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCertCheckInput() {
    return this._skipCertCheck;
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

  // use_no_profile - computed: false, optional: true, required: false
  private _useNoProfile?: boolean | cdktf.IResolvable; 
  public get useNoProfile() {
    return this.getBooleanAttribute('use_no_profile');
  }
  public set useNoProfile(value: boolean | cdktf.IResolvable) {
    this._useNoProfile = value;
  }
  public resetUseNoProfile() {
    this._useNoProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNoProfileInput() {
    return this._useNoProfile;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // tgt_key_tab_file_path_spec - computed: false, optional: true, required: false
  private _tgtKeyTabFilePathSpec = new PlatformSecretWinrmKerberosTgtKeyTabFilePathSpecOutputReference(this, "tgt_key_tab_file_path_spec");
  public get tgtKeyTabFilePathSpec() {
    return this._tgtKeyTabFilePathSpec;
  }
  public putTgtKeyTabFilePathSpec(value: PlatformSecretWinrmKerberosTgtKeyTabFilePathSpec) {
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
  private _tgtPasswordSpec = new PlatformSecretWinrmKerberosTgtPasswordSpecOutputReference(this, "tgt_password_spec");
  public get tgtPasswordSpec() {
    return this._tgtPasswordSpec;
  }
  public putTgtPasswordSpec(value: PlatformSecretWinrmKerberosTgtPasswordSpec) {
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
export interface PlatformSecretWinrmNtlm {
  /**
  * Domain name for NTLM authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#domain PlatformSecretWinrm#domain}
  */
  readonly domain?: string;
  /**
  * Reference to a secret containing the password to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account' to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#password_ref PlatformSecretWinrm#password_ref}
  */
  readonly passwordRef: string;
  /**
  * Skip certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#skip_cert_check PlatformSecretWinrm#skip_cert_check}
  */
  readonly skipCertCheck?: boolean | cdktf.IResolvable;
  /**
  * Use no profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#use_no_profile PlatformSecretWinrm#use_no_profile}
  */
  readonly useNoProfile?: boolean | cdktf.IResolvable;
  /**
  * Use SSL/TLS for WinRM communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#use_ssl PlatformSecretWinrm#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#username PlatformSecretWinrm#username}
  */
  readonly username: string;
}

export function platformSecretWinrmNtlmToTerraform(struct?: PlatformSecretWinrmNtlmOutputReference | PlatformSecretWinrmNtlm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    skip_cert_check: cdktf.booleanToTerraform(struct!.skipCertCheck),
    use_no_profile: cdktf.booleanToTerraform(struct!.useNoProfile),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function platformSecretWinrmNtlmToHclTerraform(struct?: PlatformSecretWinrmNtlmOutputReference | PlatformSecretWinrmNtlm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_ref: {
      value: cdktf.stringToHclTerraform(struct!.passwordRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_cert_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipCertCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_no_profile: {
      value: cdktf.booleanToHclTerraform(struct!.useNoProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class PlatformSecretWinrmNtlmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSecretWinrmNtlm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    if (this._skipCertCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCertCheck = this._skipCertCheck;
    }
    if (this._useNoProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNoProfile = this._useNoProfile;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSecretWinrmNtlm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._passwordRef = undefined;
      this._skipCertCheck = undefined;
      this._useNoProfile = undefined;
      this._useSsl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._passwordRef = value.passwordRef;
      this._skipCertCheck = value.skipCertCheck;
      this._useNoProfile = value.useNoProfile;
      this._useSsl = value.useSsl;
      this._username = value.username;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // password_ref - computed: false, optional: false, required: true
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
  }

  // skip_cert_check - computed: false, optional: true, required: false
  private _skipCertCheck?: boolean | cdktf.IResolvable; 
  public get skipCertCheck() {
    return this.getBooleanAttribute('skip_cert_check');
  }
  public set skipCertCheck(value: boolean | cdktf.IResolvable) {
    this._skipCertCheck = value;
  }
  public resetSkipCertCheck() {
    this._skipCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCertCheckInput() {
    return this._skipCertCheck;
  }

  // use_no_profile - computed: false, optional: true, required: false
  private _useNoProfile?: boolean | cdktf.IResolvable; 
  public get useNoProfile() {
    return this.getBooleanAttribute('use_no_profile');
  }
  public set useNoProfile(value: boolean | cdktf.IResolvable) {
    this._useNoProfile = value;
  }
  public resetUseNoProfile() {
    this._useNoProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNoProfileInput() {
    return this._useNoProfile;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
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

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm harness_platform_secret_winrm}
*/
export class PlatformSecretWinrm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_secret_winrm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformSecretWinrm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformSecretWinrm to import
  * @param importFromId The id of the existing PlatformSecretWinrm that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformSecretWinrm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_secret_winrm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_secret_winrm harness_platform_secret_winrm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformSecretWinrmConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformSecretWinrmConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_secret_winrm',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
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
    this._ntlm.internalValue = config.ntlm;
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
  private _kerberos = new PlatformSecretWinrmKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: PlatformSecretWinrmKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // ntlm - computed: false, optional: true, required: false
  private _ntlm = new PlatformSecretWinrmNtlmOutputReference(this, "ntlm");
  public get ntlm() {
    return this._ntlm;
  }
  public putNtlm(value: PlatformSecretWinrmNtlm) {
    this._ntlm.internalValue = value;
  }
  public resetNtlm() {
    this._ntlm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmInput() {
    return this._ntlm.internalValue;
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
      kerberos: platformSecretWinrmKerberosToTerraform(this._kerberos.internalValue),
      ntlm: platformSecretWinrmNtlmToTerraform(this._ntlm.internalValue),
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
        value: platformSecretWinrmKerberosToHclTerraform(this._kerberos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSecretWinrmKerberosList",
      },
      ntlm: {
        value: platformSecretWinrmNtlmToHclTerraform(this._ntlm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSecretWinrmNtlmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
