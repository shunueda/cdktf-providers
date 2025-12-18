// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#id DatabaseManagementManagedDatabasesChangeDatabaseParameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#managed_database_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#scope DatabaseManagementManagedDatabasesChangeDatabaseParameter#scope}
  */
  readonly scope: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#credentials DatabaseManagementManagedDatabasesChangeDatabaseParameter#credentials}
  */
  readonly credentials?: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials;
  /**
  * database_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#database_credential DatabaseManagementManagedDatabasesChangeDatabaseParameter#database_credential}
  */
  readonly databaseCredential?: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#parameters DatabaseManagementManagedDatabasesChangeDatabaseParameter#parameters}
  */
  readonly parameters: DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#timeouts DatabaseManagementManagedDatabasesChangeDatabaseParameter#timeouts}
  */
  readonly timeouts?: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts;
}
export interface DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#user_name DatabaseManagementManagedDatabasesChangeDatabaseParameter#user_name}
  */
  readonly userName?: string;
}

export function databaseManagementManagedDatabasesChangeDatabaseParameterCredentialsToTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference | DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    role: cdktf.stringToTerraform(struct!.role),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function databaseManagementManagedDatabasesChangeDatabaseParameterCredentialsToHclTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference | DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials): any {
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
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

export class DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._role = undefined;
      this._secretId = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._role = value.role;
      this._secretId = value.secretId;
      this._userName = value.userName;
    }
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#credential_type DatabaseManagementManagedDatabasesChangeDatabaseParameter#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#named_credential_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#named_credential_id}
  */
  readonly namedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#password DatabaseManagementManagedDatabasesChangeDatabaseParameter#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#password_secret_id DatabaseManagementManagedDatabasesChangeDatabaseParameter#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#role DatabaseManagementManagedDatabasesChangeDatabaseParameter#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#username DatabaseManagementManagedDatabasesChangeDatabaseParameter#username}
  */
  readonly username?: string;
}

export function databaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialToTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference | DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    named_credential_id: cdktf.stringToTerraform(struct!.namedCredentialId),
    password: cdktf.stringToTerraform(struct!.password),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialToHclTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference | DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential): any {
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
    named_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.namedCredentialId),
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
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._namedCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedCredentialId = this._namedCredentialId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialType = undefined;
      this._namedCredentialId = undefined;
      this._password = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialType = value.credentialType;
      this._namedCredentialId = value.namedCredentialId;
      this._password = value.password;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._username = value.username;
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

  // named_credential_id - computed: true, optional: true, required: false
  private _namedCredentialId?: string; 
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }
  public set namedCredentialId(value: string) {
    this._namedCredentialId = value;
  }
  public resetNamedCredentialId() {
    this._namedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCredentialIdInput() {
    return this._namedCredentialId;
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

  // password_secret_id - computed: true, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
export interface DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#name DatabaseManagementManagedDatabasesChangeDatabaseParameter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#update_comment DatabaseManagementManagedDatabasesChangeDatabaseParameter#update_comment}
  */
  readonly updateComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#value DatabaseManagementManagedDatabasesChangeDatabaseParameter#value}
  */
  readonly value: string;
}

export function databaseManagementManagedDatabasesChangeDatabaseParameterParametersToTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    update_comment: cdktf.stringToTerraform(struct!.updateComment),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function databaseManagementManagedDatabasesChangeDatabaseParameterParametersToHclTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_comment: {
      value: cdktf.stringToHclTerraform(struct!.updateComment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._updateComment !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateComment = this._updateComment;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._updateComment = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._updateComment = value.updateComment;
      this._value = value.value;
    }
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

  // update_comment - computed: true, optional: true, required: false
  private _updateComment?: string; 
  public get updateComment() {
    return this.getStringAttribute('update_comment');
  }
  public set updateComment(value: string) {
    this._updateComment = value;
  }
  public resetUpdateComment() {
    this._updateComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCommentInput() {
    return this._updateComment;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList extends cdktf.ComplexList {
  public internalValue? : DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters[] | cdktf.IResolvable

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
  public get(index: number): DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference {
    return new DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#create DatabaseManagementManagedDatabasesChangeDatabaseParameter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#delete DatabaseManagementManagedDatabasesChangeDatabaseParameter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#update DatabaseManagementManagedDatabasesChangeDatabaseParameter#update}
  */
  readonly update?: string;
}

export function databaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsToTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsToHclTerraform(struct?: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts | cdktf.IResolvable): any {
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

export class DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter oci_database_management_managed_databases_change_database_parameter}
*/
export class DatabaseManagementManagedDatabasesChangeDatabaseParameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_databases_change_database_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementManagedDatabasesChangeDatabaseParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementManagedDatabasesChangeDatabaseParameter to import
  * @param importFromId The id of the existing DatabaseManagementManagedDatabasesChangeDatabaseParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementManagedDatabasesChangeDatabaseParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_databases_change_database_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_management_managed_databases_change_database_parameter oci_database_management_managed_databases_change_database_parameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementManagedDatabasesChangeDatabaseParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_databases_change_database_parameter',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._managedDatabaseId = config.managedDatabaseId;
    this._scope = config.scope;
    this._credentials.internalValue = config.credentials;
    this._databaseCredential.internalValue = config.databaseCredential;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // database_credential - computed: false, optional: true, required: false
  private _databaseCredential = new DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialOutputReference(this, "database_credential");
  public get databaseCredential() {
    return this._databaseCredential;
  }
  public putDatabaseCredential(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredential) {
    this._databaseCredential.internalValue = value;
  }
  public resetDatabaseCredential() {
    this._databaseCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCredentialInput() {
    return this._databaseCredential.internalValue;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      scope: cdktf.stringToTerraform(this._scope),
      credentials: databaseManagementManagedDatabasesChangeDatabaseParameterCredentialsToTerraform(this._credentials.internalValue),
      database_credential: databaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialToTerraform(this._databaseCredential.internalValue),
      parameters: cdktf.listMapper(databaseManagementManagedDatabasesChangeDatabaseParameterParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: databaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsToTerraform(this._timeouts.internalValue),
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
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: databaseManagementManagedDatabasesChangeDatabaseParameterCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementManagedDatabasesChangeDatabaseParameterCredentialsList",
      },
      database_credential: {
        value: databaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialToHclTerraform(this._databaseCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementManagedDatabasesChangeDatabaseParameterDatabaseCredentialList",
      },
      parameters: {
        value: cdktf.listMapperHcl(databaseManagementManagedDatabasesChangeDatabaseParameterParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementManagedDatabasesChangeDatabaseParameterParametersList",
      },
      timeouts: {
        value: databaseManagementManagedDatabasesChangeDatabaseParameterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementManagedDatabasesChangeDatabaseParameterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
