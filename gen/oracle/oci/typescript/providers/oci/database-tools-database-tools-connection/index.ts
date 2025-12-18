// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseToolsDatabaseToolsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#advanced_properties DatabaseToolsDatabaseToolsConnection#advanced_properties}
  */
  readonly advancedProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#compartment_id DatabaseToolsDatabaseToolsConnection#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#connection_string DatabaseToolsDatabaseToolsConnection#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#defined_tags DatabaseToolsDatabaseToolsConnection#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#display_name DatabaseToolsDatabaseToolsConnection#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#freeform_tags DatabaseToolsDatabaseToolsConnection#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#id DatabaseToolsDatabaseToolsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#private_endpoint_id DatabaseToolsDatabaseToolsConnection#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#runtime_identity DatabaseToolsDatabaseToolsConnection#runtime_identity}
  */
  readonly runtimeIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#runtime_support DatabaseToolsDatabaseToolsConnection#runtime_support}
  */
  readonly runtimeSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#url DatabaseToolsDatabaseToolsConnection#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}
  */
  readonly userName: string;
  /**
  * key_stores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#key_stores DatabaseToolsDatabaseToolsConnection#key_stores}
  */
  readonly keyStores?: DatabaseToolsDatabaseToolsConnectionKeyStores[] | cdktf.IResolvable;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#locks DatabaseToolsDatabaseToolsConnection#locks}
  */
  readonly locks?: DatabaseToolsDatabaseToolsConnectionLocks[] | cdktf.IResolvable;
  /**
  * proxy_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#proxy_client DatabaseToolsDatabaseToolsConnection#proxy_client}
  */
  readonly proxyClient?: DatabaseToolsDatabaseToolsConnectionProxyClient;
  /**
  * related_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#related_resource DatabaseToolsDatabaseToolsConnection#related_resource}
  */
  readonly relatedResource?: DatabaseToolsDatabaseToolsConnectionRelatedResource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#timeouts DatabaseToolsDatabaseToolsConnection#timeouts}
  */
  readonly timeouts?: DatabaseToolsDatabaseToolsConnectionTimeouts;
  /**
  * user_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}
  */
  readonly userPassword: DatabaseToolsDatabaseToolsConnectionUserPassword;
}
export interface DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}
  */
  readonly valueType: string;
}

export function databaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference | DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function databaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference | DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretId = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretId = value.secretId;
      this._valueType = value.valueType;
    }
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

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}
export interface DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}
  */
  readonly valueType: string;
}

export function databaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference | DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function databaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference | DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretId = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretId = value.secretId;
      this._valueType = value.valueType;
    }
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

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}
export interface DatabaseToolsDatabaseToolsConnectionKeyStores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#key_store_type DatabaseToolsDatabaseToolsConnection#key_store_type}
  */
  readonly keyStoreType?: string;
  /**
  * key_store_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#key_store_content DatabaseToolsDatabaseToolsConnection#key_store_content}
  */
  readonly keyStoreContent?: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent;
  /**
  * key_store_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#key_store_password DatabaseToolsDatabaseToolsConnection#key_store_password}
  */
  readonly keyStorePassword?: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword;
}

export function databaseToolsDatabaseToolsConnectionKeyStoresToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionKeyStores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_store_type: cdktf.stringToTerraform(struct!.keyStoreType),
    key_store_content: databaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentToTerraform(struct!.keyStoreContent),
    key_store_password: databaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordToTerraform(struct!.keyStorePassword),
  }
}


export function databaseToolsDatabaseToolsConnectionKeyStoresToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionKeyStores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_store_type: {
      value: cdktf.stringToHclTerraform(struct!.keyStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_content: {
      value: databaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentToHclTerraform(struct!.keyStoreContent),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentList",
    },
    key_store_password: {
      value: databaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordToHclTerraform(struct!.keyStorePassword),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionKeyStores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreType = this._keyStoreType;
    }
    if (this._keyStoreContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStoreContent = this._keyStoreContent?.internalValue;
    }
    if (this._keyStorePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePassword = this._keyStorePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionKeyStores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyStoreType = undefined;
      this._keyStoreContent.internalValue = undefined;
      this._keyStorePassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyStoreType = value.keyStoreType;
      this._keyStoreContent.internalValue = value.keyStoreContent;
      this._keyStorePassword.internalValue = value.keyStorePassword;
    }
  }

  // key_store_type - computed: true, optional: true, required: false
  private _keyStoreType?: string; 
  public get keyStoreType() {
    return this.getStringAttribute('key_store_type');
  }
  public set keyStoreType(value: string) {
    this._keyStoreType = value;
  }
  public resetKeyStoreType() {
    this._keyStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreTypeInput() {
    return this._keyStoreType;
  }

  // key_store_content - computed: false, optional: true, required: false
  private _keyStoreContent = new DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContentOutputReference(this, "key_store_content");
  public get keyStoreContent() {
    return this._keyStoreContent;
  }
  public putKeyStoreContent(value: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStoreContent) {
    this._keyStoreContent.internalValue = value;
  }
  public resetKeyStoreContent() {
    this._keyStoreContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreContentInput() {
    return this._keyStoreContent.internalValue;
  }

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword = new DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePasswordOutputReference(this, "key_store_password");
  public get keyStorePassword() {
    return this._keyStorePassword;
  }
  public putKeyStorePassword(value: DatabaseToolsDatabaseToolsConnectionKeyStoresKeyStorePassword) {
    this._keyStorePassword.internalValue = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword.internalValue;
  }
}

export class DatabaseToolsDatabaseToolsConnectionKeyStoresList extends cdktf.ComplexList {
  public internalValue? : DatabaseToolsDatabaseToolsConnectionKeyStores[] | cdktf.IResolvable

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
  public get(index: number): DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference {
    return new DatabaseToolsDatabaseToolsConnectionKeyStoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseToolsDatabaseToolsConnectionLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#message DatabaseToolsDatabaseToolsConnection#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#related_resource_id DatabaseToolsDatabaseToolsConnection#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#time_created DatabaseToolsDatabaseToolsConnection#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#type DatabaseToolsDatabaseToolsConnection#type}
  */
  readonly type: string;
}

export function databaseToolsDatabaseToolsConnectionLocksToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function databaseToolsDatabaseToolsConnectionLocksToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._relatedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedResourceId = this._relatedResourceId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: true, required: false
  private _relatedResourceId?: string; 
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }
  public set relatedResourceId(value: string) {
    this._relatedResourceId = value;
  }
  public resetRelatedResourceId() {
    this._relatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceIdInput() {
    return this._relatedResourceId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DatabaseToolsDatabaseToolsConnectionLocksList extends cdktf.ComplexList {
  public internalValue? : DatabaseToolsDatabaseToolsConnectionLocks[] | cdktf.IResolvable

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
  public get(index: number): DatabaseToolsDatabaseToolsConnectionLocksOutputReference {
    return new DatabaseToolsDatabaseToolsConnectionLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}
  */
  readonly valueType: string;
}

export function databaseToolsDatabaseToolsConnectionProxyClientUserPasswordToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference | DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function databaseToolsDatabaseToolsConnectionProxyClientUserPasswordToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference | DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretId = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretId = value.secretId;
      this._valueType = value.valueType;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}
export interface DatabaseToolsDatabaseToolsConnectionProxyClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#proxy_authentication_type DatabaseToolsDatabaseToolsConnection#proxy_authentication_type}
  */
  readonly proxyAuthenticationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#roles DatabaseToolsDatabaseToolsConnection#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#user_name DatabaseToolsDatabaseToolsConnection#user_name}
  */
  readonly userName?: string;
  /**
  * user_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#user_password DatabaseToolsDatabaseToolsConnection#user_password}
  */
  readonly userPassword?: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword;
}

export function databaseToolsDatabaseToolsConnectionProxyClientToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference | DatabaseToolsDatabaseToolsConnectionProxyClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_authentication_type: cdktf.stringToTerraform(struct!.proxyAuthenticationType),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_password: databaseToolsDatabaseToolsConnectionProxyClientUserPasswordToTerraform(struct!.userPassword),
  }
}


export function databaseToolsDatabaseToolsConnectionProxyClientToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference | DatabaseToolsDatabaseToolsConnectionProxyClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.proxyAuthenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_password: {
      value: databaseToolsDatabaseToolsConnectionProxyClientUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionProxyClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyAuthenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAuthenticationType = this._proxyAuthenticationType;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionProxyClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyAuthenticationType = undefined;
      this._roles = undefined;
      this._userName = undefined;
      this._userPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyAuthenticationType = value.proxyAuthenticationType;
      this._roles = value.roles;
      this._userName = value.userName;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // proxy_authentication_type - computed: false, optional: false, required: true
  private _proxyAuthenticationType?: string; 
  public get proxyAuthenticationType() {
    return this.getStringAttribute('proxy_authentication_type');
  }
  public set proxyAuthenticationType(value: string) {
    this._proxyAuthenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAuthenticationTypeInput() {
    return this._proxyAuthenticationType;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
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

  // user_password - computed: false, optional: true, required: false
  private _userPassword = new DatabaseToolsDatabaseToolsConnectionProxyClientUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: DatabaseToolsDatabaseToolsConnectionProxyClientUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface DatabaseToolsDatabaseToolsConnectionRelatedResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#entity_type DatabaseToolsDatabaseToolsConnection#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#identifier DatabaseToolsDatabaseToolsConnection#identifier}
  */
  readonly identifier?: string;
}

export function databaseToolsDatabaseToolsConnectionRelatedResourceToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference | DatabaseToolsDatabaseToolsConnectionRelatedResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function databaseToolsDatabaseToolsConnectionRelatedResourceToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference | DatabaseToolsDatabaseToolsConnectionRelatedResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionRelatedResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionRelatedResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityType = undefined;
      this._identifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityType = value.entityType;
      this._identifier = value.identifier;
    }
  }

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface DatabaseToolsDatabaseToolsConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#create DatabaseToolsDatabaseToolsConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#delete DatabaseToolsDatabaseToolsConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#update DatabaseToolsDatabaseToolsConnection#update}
  */
  readonly update?: string;
}

export function databaseToolsDatabaseToolsConnectionTimeoutsToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionTimeouts | cdktf.IResolvable): any {
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


export function databaseToolsDatabaseToolsConnectionTimeoutsToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionTimeouts | cdktf.IResolvable): any {
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

export class DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionTimeouts | cdktf.IResolvable | undefined) {
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
export interface DatabaseToolsDatabaseToolsConnectionUserPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#secret_id DatabaseToolsDatabaseToolsConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#value_type DatabaseToolsDatabaseToolsConnection#value_type}
  */
  readonly valueType: string;
}

export function databaseToolsDatabaseToolsConnectionUserPasswordToTerraform(struct?: DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference | DatabaseToolsDatabaseToolsConnectionUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function databaseToolsDatabaseToolsConnectionUserPasswordToHclTerraform(struct?: DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference | DatabaseToolsDatabaseToolsConnectionUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseToolsDatabaseToolsConnectionUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseToolsDatabaseToolsConnectionUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretId = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretId = value.secretId;
      this._valueType = value.valueType;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection oci_database_tools_database_tools_connection}
*/
export class DatabaseToolsDatabaseToolsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_tools_database_tools_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseToolsDatabaseToolsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseToolsDatabaseToolsConnection to import
  * @param importFromId The id of the existing DatabaseToolsDatabaseToolsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseToolsDatabaseToolsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_tools_database_tools_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_tools_database_tools_connection oci_database_tools_database_tools_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseToolsDatabaseToolsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseToolsDatabaseToolsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_tools_database_tools_connection',
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
    this._advancedProperties = config.advancedProperties;
    this._compartmentId = config.compartmentId;
    this._connectionString = config.connectionString;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._privateEndpointId = config.privateEndpointId;
    this._runtimeIdentity = config.runtimeIdentity;
    this._runtimeSupport = config.runtimeSupport;
    this._type = config.type;
    this._url = config.url;
    this._userName = config.userName;
    this._keyStores.internalValue = config.keyStores;
    this._locks.internalValue = config.locks;
    this._proxyClient.internalValue = config.proxyClient;
    this._relatedResource.internalValue = config.relatedResource;
    this._timeouts.internalValue = config.timeouts;
    this._userPassword.internalValue = config.userPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_properties - computed: true, optional: true, required: false
  private _advancedProperties?: { [key: string]: string }; 
  public get advancedProperties() {
    return this.getStringMapAttribute('advanced_properties');
  }
  public set advancedProperties(value: { [key: string]: string }) {
    this._advancedProperties = value;
  }
  public resetAdvancedProperties() {
    this._advancedProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPropertiesInput() {
    return this._advancedProperties;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // private_endpoint_id - computed: true, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // runtime_endpoint - computed: true, optional: false, required: false
  public get runtimeEndpoint() {
    return this.getStringAttribute('runtime_endpoint');
  }

  // runtime_identity - computed: true, optional: true, required: false
  private _runtimeIdentity?: string; 
  public get runtimeIdentity() {
    return this.getStringAttribute('runtime_identity');
  }
  public set runtimeIdentity(value: string) {
    this._runtimeIdentity = value;
  }
  public resetRuntimeIdentity() {
    this._runtimeIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeIdentityInput() {
    return this._runtimeIdentity;
  }

  // runtime_support - computed: true, optional: true, required: false
  private _runtimeSupport?: string; 
  public get runtimeSupport() {
    return this.getStringAttribute('runtime_support');
  }
  public set runtimeSupport(value: string) {
    this._runtimeSupport = value;
  }
  public resetRuntimeSupport() {
    this._runtimeSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeSupportInput() {
    return this._runtimeSupport;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // key_stores - computed: false, optional: true, required: false
  private _keyStores = new DatabaseToolsDatabaseToolsConnectionKeyStoresList(this, "key_stores", false);
  public get keyStores() {
    return this._keyStores;
  }
  public putKeyStores(value: DatabaseToolsDatabaseToolsConnectionKeyStores[] | cdktf.IResolvable) {
    this._keyStores.internalValue = value;
  }
  public resetKeyStores() {
    this._keyStores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoresInput() {
    return this._keyStores.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new DatabaseToolsDatabaseToolsConnectionLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: DatabaseToolsDatabaseToolsConnectionLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // proxy_client - computed: false, optional: true, required: false
  private _proxyClient = new DatabaseToolsDatabaseToolsConnectionProxyClientOutputReference(this, "proxy_client");
  public get proxyClient() {
    return this._proxyClient;
  }
  public putProxyClient(value: DatabaseToolsDatabaseToolsConnectionProxyClient) {
    this._proxyClient.internalValue = value;
  }
  public resetProxyClient() {
    this._proxyClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyClientInput() {
    return this._proxyClient.internalValue;
  }

  // related_resource - computed: false, optional: true, required: false
  private _relatedResource = new DatabaseToolsDatabaseToolsConnectionRelatedResourceOutputReference(this, "related_resource");
  public get relatedResource() {
    return this._relatedResource;
  }
  public putRelatedResource(value: DatabaseToolsDatabaseToolsConnectionRelatedResource) {
    this._relatedResource.internalValue = value;
  }
  public resetRelatedResource() {
    this._relatedResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceInput() {
    return this._relatedResource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseToolsDatabaseToolsConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseToolsDatabaseToolsConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword = new DatabaseToolsDatabaseToolsConnectionUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: DatabaseToolsDatabaseToolsConnectionUserPassword) {
    this._userPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._advancedProperties),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      private_endpoint_id: cdktf.stringToTerraform(this._privateEndpointId),
      runtime_identity: cdktf.stringToTerraform(this._runtimeIdentity),
      runtime_support: cdktf.stringToTerraform(this._runtimeSupport),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      user_name: cdktf.stringToTerraform(this._userName),
      key_stores: cdktf.listMapper(databaseToolsDatabaseToolsConnectionKeyStoresToTerraform, true)(this._keyStores.internalValue),
      locks: cdktf.listMapper(databaseToolsDatabaseToolsConnectionLocksToTerraform, true)(this._locks.internalValue),
      proxy_client: databaseToolsDatabaseToolsConnectionProxyClientToTerraform(this._proxyClient.internalValue),
      related_resource: databaseToolsDatabaseToolsConnectionRelatedResourceToTerraform(this._relatedResource.internalValue),
      timeouts: databaseToolsDatabaseToolsConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      user_password: databaseToolsDatabaseToolsConnectionUserPasswordToTerraform(this._userPassword.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._advancedProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
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
      private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._privateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_identity: {
        value: cdktf.stringToHclTerraform(this._runtimeIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_support: {
        value: cdktf.stringToHclTerraform(this._runtimeSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_stores: {
        value: cdktf.listMapperHcl(databaseToolsDatabaseToolsConnectionKeyStoresToHclTerraform, true)(this._keyStores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseToolsDatabaseToolsConnectionKeyStoresList",
      },
      locks: {
        value: cdktf.listMapperHcl(databaseToolsDatabaseToolsConnectionLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseToolsDatabaseToolsConnectionLocksList",
      },
      proxy_client: {
        value: databaseToolsDatabaseToolsConnectionProxyClientToHclTerraform(this._proxyClient.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseToolsDatabaseToolsConnectionProxyClientList",
      },
      related_resource: {
        value: databaseToolsDatabaseToolsConnectionRelatedResourceToHclTerraform(this._relatedResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseToolsDatabaseToolsConnectionRelatedResourceList",
      },
      timeouts: {
        value: databaseToolsDatabaseToolsConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseToolsDatabaseToolsConnectionTimeouts",
      },
      user_password: {
        value: databaseToolsDatabaseToolsConnectionUserPasswordToHclTerraform(this._userPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseToolsDatabaseToolsConnectionUserPasswordList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
