// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryUserAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database name that this User Account is scoped to, for `cyral_repository` types that support multiple databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#auth_database_name RepositoryUserAccount#auth_database_name}
  */
  readonly authDatabaseName?: string;
  /**
  * The name of the User Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#name RepositoryUserAccount#name}
  */
  readonly name: string;
  /**
  * ID of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#repository_id RepositoryUserAccount#repository_id}
  */
  readonly repositoryId: string;
  /**
  * approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#approval_config RepositoryUserAccount#approval_config}
  */
  readonly approvalConfig?: RepositoryUserAccountApprovalConfig;
  /**
  * auth_scheme block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#auth_scheme RepositoryUserAccount#auth_scheme}
  */
  readonly authScheme: RepositoryUserAccountAuthScheme;
}
export interface RepositoryUserAccountApprovalConfig {
  /**
  * If `true`, approvals can be automatically granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#automatic_grant RepositoryUserAccount#automatic_grant}
  */
  readonly automaticGrant: boolean | cdktf.IResolvable;
  /**
  * The maximum duration in seconds for approvals can be automatically granted. E.g.: `"2000s"`, `"3000.5s"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#max_auto_grant_duration RepositoryUserAccount#max_auto_grant_duration}
  */
  readonly maxAutoGrantDuration: string;
}

export function repositoryUserAccountApprovalConfigToTerraform(struct?: RepositoryUserAccountApprovalConfigOutputReference | RepositoryUserAccountApprovalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_grant: cdktf.booleanToTerraform(struct!.automaticGrant),
    max_auto_grant_duration: cdktf.stringToTerraform(struct!.maxAutoGrantDuration),
  }
}


export function repositoryUserAccountApprovalConfigToHclTerraform(struct?: RepositoryUserAccountApprovalConfigOutputReference | RepositoryUserAccountApprovalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_grant: {
      value: cdktf.booleanToHclTerraform(struct!.automaticGrant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_auto_grant_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxAutoGrantDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountApprovalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountApprovalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticGrant !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticGrant = this._automaticGrant;
    }
    if (this._maxAutoGrantDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAutoGrantDuration = this._maxAutoGrantDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountApprovalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticGrant = undefined;
      this._maxAutoGrantDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticGrant = value.automaticGrant;
      this._maxAutoGrantDuration = value.maxAutoGrantDuration;
    }
  }

  // automatic_grant - computed: false, optional: false, required: true
  private _automaticGrant?: boolean | cdktf.IResolvable; 
  public get automaticGrant() {
    return this.getBooleanAttribute('automatic_grant');
  }
  public set automaticGrant(value: boolean | cdktf.IResolvable) {
    this._automaticGrant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticGrantInput() {
    return this._automaticGrant;
  }

  // max_auto_grant_duration - computed: false, optional: false, required: true
  private _maxAutoGrantDuration?: string; 
  public get maxAutoGrantDuration() {
    return this.getStringAttribute('max_auto_grant_duration');
  }
  public set maxAutoGrantDuration(value: string) {
    this._maxAutoGrantDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAutoGrantDurationInput() {
    return this._maxAutoGrantDuration;
  }
}
export interface RepositoryUserAccountAuthSchemeAwsIam {
  /**
  * Indicates whether to access as an AWS IAM role (`true`)or a native database user (`false`). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#authenticate_as_iam_role RepositoryUserAccount#authenticate_as_iam_role}
  */
  readonly authenticateAsIamRole?: boolean | cdktf.IResolvable;
  /**
  * The AWS IAM roleARN to gain access to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#role_arn RepositoryUserAccount#role_arn}
  */
  readonly roleArn: string;
}

export function repositoryUserAccountAuthSchemeAwsIamToTerraform(struct?: RepositoryUserAccountAuthSchemeAwsIamOutputReference | RepositoryUserAccountAuthSchemeAwsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_as_iam_role: cdktf.booleanToTerraform(struct!.authenticateAsIamRole),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function repositoryUserAccountAuthSchemeAwsIamToHclTerraform(struct?: RepositoryUserAccountAuthSchemeAwsIamOutputReference | RepositoryUserAccountAuthSchemeAwsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_as_iam_role: {
      value: cdktf.booleanToHclTerraform(struct!.authenticateAsIamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountAuthSchemeAwsIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeAwsIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateAsIamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateAsIamRole = this._authenticateAsIamRole;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeAwsIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticateAsIamRole = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticateAsIamRole = value.authenticateAsIamRole;
      this._roleArn = value.roleArn;
    }
  }

  // authenticate_as_iam_role - computed: false, optional: true, required: false
  private _authenticateAsIamRole?: boolean | cdktf.IResolvable; 
  public get authenticateAsIamRole() {
    return this.getBooleanAttribute('authenticate_as_iam_role');
  }
  public set authenticateAsIamRole(value: boolean | cdktf.IResolvable) {
    this._authenticateAsIamRole = value;
  }
  public resetAuthenticateAsIamRole() {
    this._authenticateAsIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateAsIamRoleInput() {
    return this._authenticateAsIamRole;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface RepositoryUserAccountAuthSchemeAwsSecretsManager {
  /**
  * The AWS Secrets Manager secretARN to gain access to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#secret_arn RepositoryUserAccount#secret_arn}
  */
  readonly secretArn: string;
}

export function repositoryUserAccountAuthSchemeAwsSecretsManagerToTerraform(struct?: RepositoryUserAccountAuthSchemeAwsSecretsManagerOutputReference | RepositoryUserAccountAuthSchemeAwsSecretsManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


export function repositoryUserAccountAuthSchemeAwsSecretsManagerToHclTerraform(struct?: RepositoryUserAccountAuthSchemeAwsSecretsManagerOutputReference | RepositoryUserAccountAuthSchemeAwsSecretsManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountAuthSchemeAwsSecretsManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeAwsSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeAwsSecretsManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretArn = value.secretArn;
    }
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface RepositoryUserAccountAuthSchemeAzureKeyVault {
  /**
  * The URL of the secret in the Azure Key Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#secret_url RepositoryUserAccount#secret_url}
  */
  readonly secretUrl: string;
}

export function repositoryUserAccountAuthSchemeAzureKeyVaultToTerraform(struct?: RepositoryUserAccountAuthSchemeAzureKeyVaultOutputReference | RepositoryUserAccountAuthSchemeAzureKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_url: cdktf.stringToTerraform(struct!.secretUrl),
  }
}


export function repositoryUserAccountAuthSchemeAzureKeyVaultToHclTerraform(struct?: RepositoryUserAccountAuthSchemeAzureKeyVaultOutputReference | RepositoryUserAccountAuthSchemeAzureKeyVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_url: {
      value: cdktf.stringToHclTerraform(struct!.secretUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountAuthSchemeAzureKeyVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeAzureKeyVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUrl = this._secretUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeAzureKeyVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUrl = value.secretUrl;
    }
  }

  // secret_url - computed: false, optional: false, required: true
  private _secretUrl?: string; 
  public get secretUrl() {
    return this.getStringAttribute('secret_url');
  }
  public set secretUrl(value: string) {
    this._secretUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUrlInput() {
    return this._secretUrl;
  }
}
export interface RepositoryUserAccountAuthSchemeCyralStorage {
  /**
  * The Cyral Storage password to gain access to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#password RepositoryUserAccount#password}
  */
  readonly password: string;
}

export function repositoryUserAccountAuthSchemeCyralStorageToTerraform(struct?: RepositoryUserAccountAuthSchemeCyralStorageOutputReference | RepositoryUserAccountAuthSchemeCyralStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function repositoryUserAccountAuthSchemeCyralStorageToHclTerraform(struct?: RepositoryUserAccountAuthSchemeCyralStorageOutputReference | RepositoryUserAccountAuthSchemeCyralStorage): any {
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

export class RepositoryUserAccountAuthSchemeCyralStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeCyralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeCyralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
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
}
export interface RepositoryUserAccountAuthSchemeEnvironmentVariable {
  /**
  * Name of the environment variable that will store credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#variable_name RepositoryUserAccount#variable_name}
  */
  readonly variableName: string;
}

export function repositoryUserAccountAuthSchemeEnvironmentVariableToTerraform(struct?: RepositoryUserAccountAuthSchemeEnvironmentVariableOutputReference | RepositoryUserAccountAuthSchemeEnvironmentVariable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable_name: cdktf.stringToTerraform(struct!.variableName),
  }
}


export function repositoryUserAccountAuthSchemeEnvironmentVariableToHclTerraform(struct?: RepositoryUserAccountAuthSchemeEnvironmentVariableOutputReference | RepositoryUserAccountAuthSchemeEnvironmentVariable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountAuthSchemeEnvironmentVariableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeEnvironmentVariable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeEnvironmentVariable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variableName = value.variableName;
    }
  }

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }
}
export interface RepositoryUserAccountAuthSchemeGcpSecretsManager {
  /**
  * The unique identifier of the secret in GCP Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#secret_name RepositoryUserAccount#secret_name}
  */
  readonly secretName: string;
}

export function repositoryUserAccountAuthSchemeGcpSecretsManagerToTerraform(struct?: RepositoryUserAccountAuthSchemeGcpSecretsManagerOutputReference | RepositoryUserAccountAuthSchemeGcpSecretsManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function repositoryUserAccountAuthSchemeGcpSecretsManagerToHclTerraform(struct?: RepositoryUserAccountAuthSchemeGcpSecretsManagerOutputReference | RepositoryUserAccountAuthSchemeGcpSecretsManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountAuthSchemeGcpSecretsManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeGcpSecretsManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeGcpSecretsManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface RepositoryUserAccountAuthSchemeHashicorpVault {
  /**
  * Some Vault engines allow the dynamic creation of user accounts, meaning the username used to log in to the database may change from time to time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#is_dynamic_user_account RepositoryUserAccount#is_dynamic_user_account}
  */
  readonly isDynamicUserAccount: boolean | cdktf.IResolvable;
  /**
  * The location in the Vault where the database username and password may be retrieved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#path RepositoryUserAccount#path}
  */
  readonly path: string;
}

export function repositoryUserAccountAuthSchemeHashicorpVaultToTerraform(struct?: RepositoryUserAccountAuthSchemeHashicorpVaultOutputReference | RepositoryUserAccountAuthSchemeHashicorpVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_dynamic_user_account: cdktf.booleanToTerraform(struct!.isDynamicUserAccount),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function repositoryUserAccountAuthSchemeHashicorpVaultToHclTerraform(struct?: RepositoryUserAccountAuthSchemeHashicorpVaultOutputReference | RepositoryUserAccountAuthSchemeHashicorpVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_dynamic_user_account: {
      value: cdktf.booleanToHclTerraform(struct!.isDynamicUserAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class RepositoryUserAccountAuthSchemeHashicorpVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeHashicorpVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDynamicUserAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDynamicUserAccount = this._isDynamicUserAccount;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeHashicorpVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDynamicUserAccount = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDynamicUserAccount = value.isDynamicUserAccount;
      this._path = value.path;
    }
  }

  // is_dynamic_user_account - computed: false, optional: false, required: true
  private _isDynamicUserAccount?: boolean | cdktf.IResolvable; 
  public get isDynamicUserAccount() {
    return this.getBooleanAttribute('is_dynamic_user_account');
  }
  public set isDynamicUserAccount(value: boolean | cdktf.IResolvable) {
    this._isDynamicUserAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDynamicUserAccountInput() {
    return this._isDynamicUserAccount;
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
export interface RepositoryUserAccountAuthSchemeKubernetesSecret {
  /**
  * The key of the credentials JSON blob within the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#secret_key RepositoryUserAccount#secret_key}
  */
  readonly secretKey: string;
  /**
  * The unique identifier of the secret in Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#secret_name RepositoryUserAccount#secret_name}
  */
  readonly secretName: string;
}

export function repositoryUserAccountAuthSchemeKubernetesSecretToTerraform(struct?: RepositoryUserAccountAuthSchemeKubernetesSecretOutputReference | RepositoryUserAccountAuthSchemeKubernetesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function repositoryUserAccountAuthSchemeKubernetesSecretToHclTerraform(struct?: RepositoryUserAccountAuthSchemeKubernetesSecretOutputReference | RepositoryUserAccountAuthSchemeKubernetesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountAuthSchemeKubernetesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthSchemeKubernetesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthSchemeKubernetesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretKey = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretKey = value.secretKey;
      this._secretName = value.secretName;
    }
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface RepositoryUserAccountAuthScheme {
  /**
  * aws_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#aws_iam RepositoryUserAccount#aws_iam}
  */
  readonly awsIam?: RepositoryUserAccountAuthSchemeAwsIam;
  /**
  * aws_secrets_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#aws_secrets_manager RepositoryUserAccount#aws_secrets_manager}
  */
  readonly awsSecretsManager?: RepositoryUserAccountAuthSchemeAwsSecretsManager;
  /**
  * azure_key_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#azure_key_vault RepositoryUserAccount#azure_key_vault}
  */
  readonly azureKeyVault?: RepositoryUserAccountAuthSchemeAzureKeyVault;
  /**
  * cyral_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#cyral_storage RepositoryUserAccount#cyral_storage}
  */
  readonly cyralStorage?: RepositoryUserAccountAuthSchemeCyralStorage;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#environment_variable RepositoryUserAccount#environment_variable}
  */
  readonly environmentVariable?: RepositoryUserAccountAuthSchemeEnvironmentVariable;
  /**
  * gcp_secrets_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#gcp_secrets_manager RepositoryUserAccount#gcp_secrets_manager}
  */
  readonly gcpSecretsManager?: RepositoryUserAccountAuthSchemeGcpSecretsManager;
  /**
  * hashicorp_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#hashicorp_vault RepositoryUserAccount#hashicorp_vault}
  */
  readonly hashicorpVault?: RepositoryUserAccountAuthSchemeHashicorpVault;
  /**
  * kubernetes_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#kubernetes_secret RepositoryUserAccount#kubernetes_secret}
  */
  readonly kubernetesSecret?: RepositoryUserAccountAuthSchemeKubernetesSecret;
}

export function repositoryUserAccountAuthSchemeToTerraform(struct?: RepositoryUserAccountAuthSchemeOutputReference | RepositoryUserAccountAuthScheme): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_iam: repositoryUserAccountAuthSchemeAwsIamToTerraform(struct!.awsIam),
    aws_secrets_manager: repositoryUserAccountAuthSchemeAwsSecretsManagerToTerraform(struct!.awsSecretsManager),
    azure_key_vault: repositoryUserAccountAuthSchemeAzureKeyVaultToTerraform(struct!.azureKeyVault),
    cyral_storage: repositoryUserAccountAuthSchemeCyralStorageToTerraform(struct!.cyralStorage),
    environment_variable: repositoryUserAccountAuthSchemeEnvironmentVariableToTerraform(struct!.environmentVariable),
    gcp_secrets_manager: repositoryUserAccountAuthSchemeGcpSecretsManagerToTerraform(struct!.gcpSecretsManager),
    hashicorp_vault: repositoryUserAccountAuthSchemeHashicorpVaultToTerraform(struct!.hashicorpVault),
    kubernetes_secret: repositoryUserAccountAuthSchemeKubernetesSecretToTerraform(struct!.kubernetesSecret),
  }
}


export function repositoryUserAccountAuthSchemeToHclTerraform(struct?: RepositoryUserAccountAuthSchemeOutputReference | RepositoryUserAccountAuthScheme): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_iam: {
      value: repositoryUserAccountAuthSchemeAwsIamToHclTerraform(struct!.awsIam),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeAwsIamList",
    },
    aws_secrets_manager: {
      value: repositoryUserAccountAuthSchemeAwsSecretsManagerToHclTerraform(struct!.awsSecretsManager),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeAwsSecretsManagerList",
    },
    azure_key_vault: {
      value: repositoryUserAccountAuthSchemeAzureKeyVaultToHclTerraform(struct!.azureKeyVault),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeAzureKeyVaultList",
    },
    cyral_storage: {
      value: repositoryUserAccountAuthSchemeCyralStorageToHclTerraform(struct!.cyralStorage),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeCyralStorageList",
    },
    environment_variable: {
      value: repositoryUserAccountAuthSchemeEnvironmentVariableToHclTerraform(struct!.environmentVariable),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeEnvironmentVariableList",
    },
    gcp_secrets_manager: {
      value: repositoryUserAccountAuthSchemeGcpSecretsManagerToHclTerraform(struct!.gcpSecretsManager),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeGcpSecretsManagerList",
    },
    hashicorp_vault: {
      value: repositoryUserAccountAuthSchemeHashicorpVaultToHclTerraform(struct!.hashicorpVault),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeHashicorpVaultList",
    },
    kubernetes_secret: {
      value: repositoryUserAccountAuthSchemeKubernetesSecretToHclTerraform(struct!.kubernetesSecret),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryUserAccountAuthSchemeKubernetesSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryUserAccountAuthSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryUserAccountAuthScheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsIam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIam = this._awsIam?.internalValue;
    }
    if (this._awsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretsManager = this._awsSecretsManager?.internalValue;
    }
    if (this._azureKeyVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureKeyVault = this._azureKeyVault?.internalValue;
    }
    if (this._cyralStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cyralStorage = this._cyralStorage?.internalValue;
    }
    if (this._environmentVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariable = this._environmentVariable?.internalValue;
    }
    if (this._gcpSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretsManager = this._gcpSecretsManager?.internalValue;
    }
    if (this._hashicorpVault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashicorpVault = this._hashicorpVault?.internalValue;
    }
    if (this._kubernetesSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSecret = this._kubernetesSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryUserAccountAuthScheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsIam.internalValue = undefined;
      this._awsSecretsManager.internalValue = undefined;
      this._azureKeyVault.internalValue = undefined;
      this._cyralStorage.internalValue = undefined;
      this._environmentVariable.internalValue = undefined;
      this._gcpSecretsManager.internalValue = undefined;
      this._hashicorpVault.internalValue = undefined;
      this._kubernetesSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsIam.internalValue = value.awsIam;
      this._awsSecretsManager.internalValue = value.awsSecretsManager;
      this._azureKeyVault.internalValue = value.azureKeyVault;
      this._cyralStorage.internalValue = value.cyralStorage;
      this._environmentVariable.internalValue = value.environmentVariable;
      this._gcpSecretsManager.internalValue = value.gcpSecretsManager;
      this._hashicorpVault.internalValue = value.hashicorpVault;
      this._kubernetesSecret.internalValue = value.kubernetesSecret;
    }
  }

  // aws_iam - computed: false, optional: true, required: false
  private _awsIam = new RepositoryUserAccountAuthSchemeAwsIamOutputReference(this, "aws_iam");
  public get awsIam() {
    return this._awsIam;
  }
  public putAwsIam(value: RepositoryUserAccountAuthSchemeAwsIam) {
    this._awsIam.internalValue = value;
  }
  public resetAwsIam() {
    this._awsIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamInput() {
    return this._awsIam.internalValue;
  }

  // aws_secrets_manager - computed: false, optional: true, required: false
  private _awsSecretsManager = new RepositoryUserAccountAuthSchemeAwsSecretsManagerOutputReference(this, "aws_secrets_manager");
  public get awsSecretsManager() {
    return this._awsSecretsManager;
  }
  public putAwsSecretsManager(value: RepositoryUserAccountAuthSchemeAwsSecretsManager) {
    this._awsSecretsManager.internalValue = value;
  }
  public resetAwsSecretsManager() {
    this._awsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretsManagerInput() {
    return this._awsSecretsManager.internalValue;
  }

  // azure_key_vault - computed: false, optional: true, required: false
  private _azureKeyVault = new RepositoryUserAccountAuthSchemeAzureKeyVaultOutputReference(this, "azure_key_vault");
  public get azureKeyVault() {
    return this._azureKeyVault;
  }
  public putAzureKeyVault(value: RepositoryUserAccountAuthSchemeAzureKeyVault) {
    this._azureKeyVault.internalValue = value;
  }
  public resetAzureKeyVault() {
    this._azureKeyVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyVaultInput() {
    return this._azureKeyVault.internalValue;
  }

  // cyral_storage - computed: false, optional: true, required: false
  private _cyralStorage = new RepositoryUserAccountAuthSchemeCyralStorageOutputReference(this, "cyral_storage");
  public get cyralStorage() {
    return this._cyralStorage;
  }
  public putCyralStorage(value: RepositoryUserAccountAuthSchemeCyralStorage) {
    this._cyralStorage.internalValue = value;
  }
  public resetCyralStorage() {
    this._cyralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyralStorageInput() {
    return this._cyralStorage.internalValue;
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new RepositoryUserAccountAuthSchemeEnvironmentVariableOutputReference(this, "environment_variable");
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: RepositoryUserAccountAuthSchemeEnvironmentVariable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }

  // gcp_secrets_manager - computed: false, optional: true, required: false
  private _gcpSecretsManager = new RepositoryUserAccountAuthSchemeGcpSecretsManagerOutputReference(this, "gcp_secrets_manager");
  public get gcpSecretsManager() {
    return this._gcpSecretsManager;
  }
  public putGcpSecretsManager(value: RepositoryUserAccountAuthSchemeGcpSecretsManager) {
    this._gcpSecretsManager.internalValue = value;
  }
  public resetGcpSecretsManager() {
    this._gcpSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretsManagerInput() {
    return this._gcpSecretsManager.internalValue;
  }

  // hashicorp_vault - computed: false, optional: true, required: false
  private _hashicorpVault = new RepositoryUserAccountAuthSchemeHashicorpVaultOutputReference(this, "hashicorp_vault");
  public get hashicorpVault() {
    return this._hashicorpVault;
  }
  public putHashicorpVault(value: RepositoryUserAccountAuthSchemeHashicorpVault) {
    this._hashicorpVault.internalValue = value;
  }
  public resetHashicorpVault() {
    this._hashicorpVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashicorpVaultInput() {
    return this._hashicorpVault.internalValue;
  }

  // kubernetes_secret - computed: false, optional: true, required: false
  private _kubernetesSecret = new RepositoryUserAccountAuthSchemeKubernetesSecretOutputReference(this, "kubernetes_secret");
  public get kubernetesSecret() {
    return this._kubernetesSecret;
  }
  public putKubernetesSecret(value: RepositoryUserAccountAuthSchemeKubernetesSecret) {
    this._kubernetesSecret.internalValue = value;
  }
  public resetKubernetesSecret() {
    this._kubernetesSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSecretInput() {
    return this._kubernetesSecret.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account cyral_repository_user_account}
*/
export class RepositoryUserAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_repository_user_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryUserAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryUserAccount to import
  * @param importFromId The id of the existing RepositoryUserAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryUserAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_repository_user_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_user_account cyral_repository_user_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryUserAccountConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryUserAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_repository_user_account',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authDatabaseName = config.authDatabaseName;
    this._name = config.name;
    this._repositoryId = config.repositoryId;
    this._approvalConfig.internalValue = config.approvalConfig;
    this._authScheme.internalValue = config.authScheme;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_database_name - computed: false, optional: true, required: false
  private _authDatabaseName?: string; 
  public get authDatabaseName() {
    return this.getStringAttribute('auth_database_name');
  }
  public set authDatabaseName(value: string) {
    this._authDatabaseName = value;
  }
  public resetAuthDatabaseName() {
    this._authDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDatabaseNameInput() {
    return this._authDatabaseName;
  }

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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // user_account_id - computed: true, optional: false, required: false
  public get userAccountId() {
    return this.getStringAttribute('user_account_id');
  }

  // approval_config - computed: false, optional: true, required: false
  private _approvalConfig = new RepositoryUserAccountApprovalConfigOutputReference(this, "approval_config");
  public get approvalConfig() {
    return this._approvalConfig;
  }
  public putApprovalConfig(value: RepositoryUserAccountApprovalConfig) {
    this._approvalConfig.internalValue = value;
  }
  public resetApprovalConfig() {
    this._approvalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalConfigInput() {
    return this._approvalConfig.internalValue;
  }

  // auth_scheme - computed: false, optional: false, required: true
  private _authScheme = new RepositoryUserAccountAuthSchemeOutputReference(this, "auth_scheme");
  public get authScheme() {
    return this._authScheme;
  }
  public putAuthScheme(value: RepositoryUserAccountAuthScheme) {
    this._authScheme.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authSchemeInput() {
    return this._authScheme.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_database_name: cdktf.stringToTerraform(this._authDatabaseName),
      name: cdktf.stringToTerraform(this._name),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      approval_config: repositoryUserAccountApprovalConfigToTerraform(this._approvalConfig.internalValue),
      auth_scheme: repositoryUserAccountAuthSchemeToTerraform(this._authScheme.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_database_name: {
        value: cdktf.stringToHclTerraform(this._authDatabaseName),
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
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_config: {
        value: repositoryUserAccountApprovalConfigToHclTerraform(this._approvalConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RepositoryUserAccountApprovalConfigList",
      },
      auth_scheme: {
        value: repositoryUserAccountAuthSchemeToHclTerraform(this._authScheme.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryUserAccountAuthSchemeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
