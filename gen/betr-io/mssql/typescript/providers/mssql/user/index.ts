// https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#database User#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#default_language User#default_language}
  */
  readonly defaultLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#default_schema User#default_schema}
  */
  readonly defaultSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#login_name User#login_name}
  */
  readonly loginName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#object_id User#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#roles User#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#server User#server}
  */
  readonly server: UserServer;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#timeouts User#timeouts}
  */
  readonly timeouts?: UserTimeouts;
}
export interface UserServerAzureLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#client_id User#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#client_secret User#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#tenant_id User#tenant_id}
  */
  readonly tenantId: string;
}

export function userServerAzureLoginToTerraform(struct?: UserServerAzureLoginOutputReference | UserServerAzureLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function userServerAzureLoginToHclTerraform(struct?: UserServerAzureLoginOutputReference | UserServerAzureLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserServerAzureLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserServerAzureLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserServerAzureLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface UserServerAzureadDefaultChainAuth {
}

export function userServerAzureadDefaultChainAuthToTerraform(struct?: UserServerAzureadDefaultChainAuthOutputReference | UserServerAzureadDefaultChainAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userServerAzureadDefaultChainAuthToHclTerraform(struct?: UserServerAzureadDefaultChainAuthOutputReference | UserServerAzureadDefaultChainAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserServerAzureadDefaultChainAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserServerAzureadDefaultChainAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserServerAzureadDefaultChainAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface UserServerAzureadManagedIdentityAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#user_id User#user_id}
  */
  readonly userId?: string;
}

export function userServerAzureadManagedIdentityAuthToTerraform(struct?: UserServerAzureadManagedIdentityAuthOutputReference | UserServerAzureadManagedIdentityAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function userServerAzureadManagedIdentityAuthToHclTerraform(struct?: UserServerAzureadManagedIdentityAuthOutputReference | UserServerAzureadManagedIdentityAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserServerAzureadManagedIdentityAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserServerAzureadManagedIdentityAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserServerAzureadManagedIdentityAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userId = value.userId;
    }
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface UserServerLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#password User#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#username User#username}
  */
  readonly username: string;
}

export function userServerLoginToTerraform(struct?: UserServerLoginOutputReference | UserServerLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function userServerLoginToHclTerraform(struct?: UserServerLoginOutputReference | UserServerLogin): any {
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

export class UserServerLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserServerLogin | undefined {
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

  public set internalValue(value: UserServerLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface UserServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#host User#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#port User#port}
  */
  readonly port?: string;
  /**
  * azure_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#azure_login User#azure_login}
  */
  readonly azureLogin?: UserServerAzureLogin;
  /**
  * azuread_default_chain_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#azuread_default_chain_auth User#azuread_default_chain_auth}
  */
  readonly azureadDefaultChainAuth?: UserServerAzureadDefaultChainAuth;
  /**
  * azuread_managed_identity_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#azuread_managed_identity_auth User#azuread_managed_identity_auth}
  */
  readonly azureadManagedIdentityAuth?: UserServerAzureadManagedIdentityAuth;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#login User#login}
  */
  readonly login?: UserServerLogin;
}

export function userServerToTerraform(struct?: UserServerOutputReference | UserServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    azure_login: userServerAzureLoginToTerraform(struct!.azureLogin),
    azuread_default_chain_auth: userServerAzureadDefaultChainAuthToTerraform(struct!.azureadDefaultChainAuth),
    azuread_managed_identity_auth: userServerAzureadManagedIdentityAuthToTerraform(struct!.azureadManagedIdentityAuth),
    login: userServerLoginToTerraform(struct!.login),
  }
}


export function userServerToHclTerraform(struct?: UserServerOutputReference | UserServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_login: {
      value: userServerAzureLoginToHclTerraform(struct!.azureLogin),
      isBlock: true,
      type: "list",
      storageClassType: "UserServerAzureLoginList",
    },
    azuread_default_chain_auth: {
      value: userServerAzureadDefaultChainAuthToHclTerraform(struct!.azureadDefaultChainAuth),
      isBlock: true,
      type: "list",
      storageClassType: "UserServerAzureadDefaultChainAuthList",
    },
    azuread_managed_identity_auth: {
      value: userServerAzureadManagedIdentityAuthToHclTerraform(struct!.azureadManagedIdentityAuth),
      isBlock: true,
      type: "list",
      storageClassType: "UserServerAzureadManagedIdentityAuthList",
    },
    login: {
      value: userServerLoginToHclTerraform(struct!.login),
      isBlock: true,
      type: "list",
      storageClassType: "UserServerLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._azureLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLogin = this._azureLogin?.internalValue;
    }
    if (this._azureadDefaultChainAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureadDefaultChainAuth = this._azureadDefaultChainAuth?.internalValue;
    }
    if (this._azureadManagedIdentityAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureadManagedIdentityAuth = this._azureadManagedIdentityAuth?.internalValue;
    }
    if (this._login?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._azureLogin.internalValue = undefined;
      this._azureadDefaultChainAuth.internalValue = undefined;
      this._azureadManagedIdentityAuth.internalValue = undefined;
      this._login.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._azureLogin.internalValue = value.azureLogin;
      this._azureadDefaultChainAuth.internalValue = value.azureadDefaultChainAuth;
      this._azureadManagedIdentityAuth.internalValue = value.azureadManagedIdentityAuth;
      this._login.internalValue = value.login;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // azure_login - computed: false, optional: true, required: false
  private _azureLogin = new UserServerAzureLoginOutputReference(this, "azure_login");
  public get azureLogin() {
    return this._azureLogin;
  }
  public putAzureLogin(value: UserServerAzureLogin) {
    this._azureLogin.internalValue = value;
  }
  public resetAzureLogin() {
    this._azureLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLoginInput() {
    return this._azureLogin.internalValue;
  }

  // azuread_default_chain_auth - computed: false, optional: true, required: false
  private _azureadDefaultChainAuth = new UserServerAzureadDefaultChainAuthOutputReference(this, "azuread_default_chain_auth");
  public get azureadDefaultChainAuth() {
    return this._azureadDefaultChainAuth;
  }
  public putAzureadDefaultChainAuth(value: UserServerAzureadDefaultChainAuth) {
    this._azureadDefaultChainAuth.internalValue = value;
  }
  public resetAzureadDefaultChainAuth() {
    this._azureadDefaultChainAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureadDefaultChainAuthInput() {
    return this._azureadDefaultChainAuth.internalValue;
  }

  // azuread_managed_identity_auth - computed: false, optional: true, required: false
  private _azureadManagedIdentityAuth = new UserServerAzureadManagedIdentityAuthOutputReference(this, "azuread_managed_identity_auth");
  public get azureadManagedIdentityAuth() {
    return this._azureadManagedIdentityAuth;
  }
  public putAzureadManagedIdentityAuth(value: UserServerAzureadManagedIdentityAuth) {
    this._azureadManagedIdentityAuth.internalValue = value;
  }
  public resetAzureadManagedIdentityAuth() {
    this._azureadManagedIdentityAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureadManagedIdentityAuthInput() {
    return this._azureadManagedIdentityAuth.internalValue;
  }

  // login - computed: false, optional: true, required: false
  private _login = new UserServerLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: UserServerLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }
}
export interface UserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#default User#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#read User#read}
  */
  readonly read?: string;
}

export function userTimeoutsToTerraform(struct?: UserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function userTimeoutsToHclTerraform(struct?: UserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._read = value.read;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user mssql_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mssql_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mssql_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betr-io/mssql/0.3.1/docs/resources/user mssql_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'mssql_user',
      terraformGeneratorMetadata: {
        providerName: 'mssql',
        providerVersion: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._database = config.database;
    this._defaultLanguage = config.defaultLanguage;
    this._defaultSchema = config.defaultSchema;
    this._id = config.id;
    this._loginName = config.loginName;
    this._objectId = config.objectId;
    this._password = config.password;
    this._roles = config.roles;
    this._username = config.username;
    this._server.internalValue = config.server;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // default_language - computed: false, optional: true, required: false
  private _defaultLanguage?: string; 
  public get defaultLanguage() {
    return this.getStringAttribute('default_language');
  }
  public set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  public resetDefaultLanguage() {
    this._defaultLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageInput() {
    return this._defaultLanguage;
  }

  // default_schema - computed: false, optional: true, required: false
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  public resetDefaultSchema() {
    this._defaultSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaInput() {
    return this._defaultSchema;
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

  // login_name - computed: false, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
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

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getNumberAttribute('principal_id');
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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

  // server - computed: false, optional: false, required: true
  private _server = new UserServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: UserServer) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      default_language: cdktf.stringToTerraform(this._defaultLanguage),
      default_schema: cdktf.stringToTerraform(this._defaultSchema),
      id: cdktf.stringToTerraform(this._id),
      login_name: cdktf.stringToTerraform(this._loginName),
      object_id: cdktf.stringToTerraform(this._objectId),
      password: cdktf.stringToTerraform(this._password),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      username: cdktf.stringToTerraform(this._username),
      server: userServerToTerraform(this._server.internalValue),
      timeouts: userTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_language: {
        value: cdktf.stringToHclTerraform(this._defaultLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_schema: {
        value: cdktf.stringToHclTerraform(this._defaultSchema),
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
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
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
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: userServerToHclTerraform(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserServerList",
      },
      timeouts: {
        value: userTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
