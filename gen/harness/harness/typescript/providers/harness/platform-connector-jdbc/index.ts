// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorJdbcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#delegate_selectors PlatformConnectorJdbc#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#description PlatformConnectorJdbc#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#id PlatformConnectorJdbc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#identifier PlatformConnectorJdbc#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#name PlatformConnectorJdbc#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#org_id PlatformConnectorJdbc#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#project_id PlatformConnectorJdbc#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#tags PlatformConnectorJdbc#tags}
  */
  readonly tags?: string[];
  /**
  * The URL of the database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#url PlatformConnectorJdbc#url}
  */
  readonly url: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#credentials PlatformConnectorJdbc#credentials}
  */
  readonly credentials: PlatformConnectorJdbcCredentials;
}
export interface PlatformConnectorJdbcCredentialsServiceAccount {
  /**
  * Reference to a secret containing the token to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#token_ref PlatformConnectorJdbc#token_ref}
  */
  readonly tokenRef: string;
}

export function platformConnectorJdbcCredentialsServiceAccountToTerraform(struct?: PlatformConnectorJdbcCredentialsServiceAccountOutputReference | PlatformConnectorJdbcCredentialsServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_ref: cdktf.stringToTerraform(struct!.tokenRef),
  }
}


export function platformConnectorJdbcCredentialsServiceAccountToHclTerraform(struct?: PlatformConnectorJdbcCredentialsServiceAccountOutputReference | PlatformConnectorJdbcCredentialsServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_ref: {
      value: cdktf.stringToHclTerraform(struct!.tokenRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorJdbcCredentialsServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorJdbcCredentialsServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorJdbcCredentialsServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenRef = value.tokenRef;
    }
  }

  // token_ref - computed: false, optional: false, required: true
  private _tokenRef?: string; 
  public get tokenRef() {
    return this.getStringAttribute('token_ref');
  }
  public set tokenRef(value: string) {
    this._tokenRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef;
  }
}
export interface PlatformConnectorJdbcCredentialsUsernamePassword {
  /**
  * Reference to a secret containing the password to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#password_ref PlatformConnectorJdbc#password_ref}
  */
  readonly passwordRef: string;
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#username PlatformConnectorJdbc#username}
  */
  readonly username?: string;
  /**
  * Reference to a secret containing the username to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#username_ref PlatformConnectorJdbc#username_ref}
  */
  readonly usernameRef?: string;
}

export function platformConnectorJdbcCredentialsUsernamePasswordToTerraform(struct?: PlatformConnectorJdbcCredentialsUsernamePasswordOutputReference | PlatformConnectorJdbcCredentialsUsernamePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
  }
}


export function platformConnectorJdbcCredentialsUsernamePasswordToHclTerraform(struct?: PlatformConnectorJdbcCredentialsUsernamePasswordOutputReference | PlatformConnectorJdbcCredentialsUsernamePassword): any {
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_ref: {
      value: cdktf.stringToHclTerraform(struct!.usernameRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorJdbcCredentialsUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorJdbcCredentialsUsernamePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameRef = this._usernameRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorJdbcCredentialsUsernamePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordRef = value.passwordRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
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

  // username - computed: false, optional: true, required: false
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

  // username_ref - computed: false, optional: true, required: false
  private _usernameRef?: string; 
  public get usernameRef() {
    return this.getStringAttribute('username_ref');
  }
  public set usernameRef(value: string) {
    this._usernameRef = value;
  }
  public resetUsernameRef() {
    this._usernameRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameRefInput() {
    return this._usernameRef;
  }
}
export interface PlatformConnectorJdbcCredentials {
  /**
  * Authentication types for JDBC connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#auth_type PlatformConnectorJdbc#auth_type}
  */
  readonly authType?: string;
  /**
  * The reference to the Harness secret containing the password to use for the database server. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#password_ref PlatformConnectorJdbc#password_ref}
  */
  readonly passwordRef?: string;
  /**
  * The username to use for the database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#username PlatformConnectorJdbc#username}
  */
  readonly username?: string;
  /**
  * The reference to the Harness secret containing the username to use for the database server. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#username_ref PlatformConnectorJdbc#username_ref}
  */
  readonly usernameRef?: string;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#service_account PlatformConnectorJdbc#service_account}
  */
  readonly serviceAccount?: PlatformConnectorJdbcCredentialsServiceAccount;
  /**
  * username_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#username_password PlatformConnectorJdbc#username_password}
  */
  readonly usernamePassword?: PlatformConnectorJdbcCredentialsUsernamePassword;
}

export function platformConnectorJdbcCredentialsToTerraform(struct?: PlatformConnectorJdbcCredentialsOutputReference | PlatformConnectorJdbcCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
    service_account: platformConnectorJdbcCredentialsServiceAccountToTerraform(struct!.serviceAccount),
    username_password: platformConnectorJdbcCredentialsUsernamePasswordToTerraform(struct!.usernamePassword),
  }
}


export function platformConnectorJdbcCredentialsToHclTerraform(struct?: PlatformConnectorJdbcCredentialsOutputReference | PlatformConnectorJdbcCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_ref: {
      value: cdktf.stringToHclTerraform(struct!.usernameRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: platformConnectorJdbcCredentialsServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorJdbcCredentialsServiceAccountList",
    },
    username_password: {
      value: platformConnectorJdbcCredentialsUsernamePasswordToHclTerraform(struct!.usernamePassword),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorJdbcCredentialsUsernamePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorJdbcCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorJdbcCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameRef = this._usernameRef;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    if (this._usernamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorJdbcCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._passwordRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
      this._serviceAccount.internalValue = undefined;
      this._usernamePassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._passwordRef = value.passwordRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
      this._serviceAccount.internalValue = value.serviceAccount;
      this._usernamePassword.internalValue = value.usernamePassword;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // password_ref - computed: false, optional: true, required: false
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  public resetPasswordRef() {
    this._passwordRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
  }

  // username - computed: false, optional: true, required: false
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

  // username_ref - computed: false, optional: true, required: false
  private _usernameRef?: string; 
  public get usernameRef() {
    return this.getStringAttribute('username_ref');
  }
  public set usernameRef(value: string) {
    this._usernameRef = value;
  }
  public resetUsernameRef() {
    this._usernameRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameRefInput() {
    return this._usernameRef;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new PlatformConnectorJdbcCredentialsServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: PlatformConnectorJdbcCredentialsServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // username_password - computed: false, optional: true, required: false
  private _usernamePassword = new PlatformConnectorJdbcCredentialsUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: PlatformConnectorJdbcCredentialsUsernamePassword) {
    this._usernamePassword.internalValue = value;
  }
  public resetUsernamePassword() {
    this._usernamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordInput() {
    return this._usernamePassword.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc harness_platform_connector_jdbc}
*/
export class PlatformConnectorJdbc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_jdbc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorJdbc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorJdbc to import
  * @param importFromId The id of the existing PlatformConnectorJdbc that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorJdbc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_jdbc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_jdbc harness_platform_connector_jdbc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorJdbcConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorJdbcConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_jdbc',
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
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._url = config.url;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }

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

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PlatformConnectorJdbcCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PlatformConnectorJdbcCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      credentials: platformConnectorJdbcCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: platformConnectorJdbcCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorJdbcCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
