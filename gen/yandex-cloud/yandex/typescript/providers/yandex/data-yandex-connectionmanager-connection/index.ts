// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexConnectionmanagerConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection_service.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#connection_id DataYandexConnectionmanagerConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#folder_id DataYandexConnectionmanagerConnection#folder_id}
  */
  readonly folderId?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection_service.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#id DataYandexConnectionmanagerConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#timeouts DataYandexConnectionmanagerConnection#timeouts}
  */
  readonly timeouts?: DataYandexConnectionmanagerConnectionTimeouts;
}
export interface DataYandexConnectionmanagerConnectionLockboxSecret {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#id DataYandexConnectionmanagerConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataYandexConnectionmanagerConnectionLockboxSecretToTerraform(struct?: DataYandexConnectionmanagerConnectionLockboxSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataYandexConnectionmanagerConnectionLockboxSecretToHclTerraform(struct?: DataYandexConnectionmanagerConnectionLockboxSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexConnectionmanagerConnectionLockboxSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionLockboxSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionLockboxSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
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

  // newest_version - computed: true, optional: false, required: false
  public get newestVersion() {
    return this.getStringAttribute('newest_version');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseAuth {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsClickhouseAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // shard_name - computed: true, optional: false, required: false
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }

  // tcp_port - computed: true, optional: false, required: false
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsClickhouseClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsClickhouseClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroups {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroupsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroupsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shard_names - computed: true, optional: false, required: false
  public get shardNames() {
    return this.getListAttribute('shard_names');
  }
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroupsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouseCluster {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouseCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouseCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouseCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsClickhouseClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // shard_groups - computed: true, optional: false, required: false
  private _shardGroups = new DataYandexConnectionmanagerConnectionParamsClickhouseClusterShardGroupsList(this, "shard_groups", false);
  public get shardGroups() {
    return this._shardGroups;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsClickhouseClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsClickhouse {
}

export function dataYandexConnectionmanagerConnectionParamsClickhouseToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsClickhouseToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsClickhouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsClickhouseAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsClickhouseClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getListAttribute('databases');
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumAuth {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsGreenplumAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplumCluster {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplumCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplumCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplumCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinator_hosts - computed: true, optional: false, required: false
  private _coordinatorHosts = new DataYandexConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsList(this, "coordinator_hosts", false);
  public get coordinatorHosts() {
    return this._coordinatorHosts;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsGreenplumClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsGreenplum {
}

export function dataYandexConnectionmanagerConnectionParamsGreenplumToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsGreenplumToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsGreenplum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsGreenplumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsGreenplum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsGreenplum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsGreenplumAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsGreenplumClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getListAttribute('databases');
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaAuthDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaAuthDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaAuthDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaAuthDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaAuthDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaAuthDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPassword {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaAuthSasl {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSasl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaAuthSaslToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuthSasl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaAuthSasl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaAuthSasl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // supported_mechanisms - computed: true, optional: false, required: false
  public get supportedMechanisms() {
    return this.getListAttribute('supported_mechanisms');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaAuth {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsKafkaAuthDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // sasl - computed: true, optional: false, required: false
  private _sasl = new DataYandexConnectionmanagerConnectionParamsKafkaAuthSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataYandexConnectionmanagerConnectionParamsKafkaClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsKafkaClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsKafkaClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafkaCluster {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsKafkaClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsKafkaClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsKafka {
}

export function dataYandexConnectionmanagerConnectionParamsKafkaToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsKafkaToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsKafkaAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsKafkaClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbAuth {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_source - computed: true, optional: false, required: false
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsMongodbAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexConnectionmanagerConnectionParamsMongodbClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsMongodbClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsMongodbClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodbCluster {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodbCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodbCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodbCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsMongodbClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsMongodbClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMongodb {
}

export function dataYandexConnectionmanagerConnectionParamsMongodbToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMongodbToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMongodb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMongodbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMongodb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMongodb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsMongodbAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsMongodbClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getListAttribute('databases');
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlAuth {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsMysqlAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataYandexConnectionmanagerConnectionParamsMysqlClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsMysqlClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsMysqlClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysqlCluster {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysqlCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysqlCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysqlCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsMysqlClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsMysqlClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsMysql {
}

export function dataYandexConnectionmanagerConnectionParamsMysqlToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsMysqlToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsMysqlAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsMysqlClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getListAttribute('databases');
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchAuth {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsOpensearchAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsOpensearchClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsOpensearchClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearchCluster {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearchCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearchCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearchCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsOpensearchClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsOpensearchClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsOpensearch {
}

export function dataYandexConnectionmanagerConnectionParamsOpensearchToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsOpensearchToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsOpensearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsOpensearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsOpensearchAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsOpensearchClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlAuth {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // replica_type - computed: true, optional: false, required: false
  public get replicaType() {
    return this.getStringAttribute('replica_type');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresqlCluster {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresqlCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresqlCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresqlCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsPostgresqlClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsPostgresql {
}

export function dataYandexConnectionmanagerConnectionParamsPostgresqlToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsPostgresqlToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsPostgresqlAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsPostgresqlClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getListAttribute('databases');
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisAuth {
}

export function dataYandexConnectionmanagerConnectionParamsRedisAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsRedisAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsRedisClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // shard_name - computed: true, optional: false, required: false
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
}

export class DataYandexConnectionmanagerConnectionParamsRedisClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsRedisClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsRedisClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedisCluster {
}

export function dataYandexConnectionmanagerConnectionParamsRedisClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedisCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedisCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedisCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsRedisClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // sentinel_port - computed: true, optional: false, required: false
  public get sentinelPort() {
    return this.getNumberAttribute('sentinel_port');
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsRedisClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsRedis {
}

export function dataYandexConnectionmanagerConnectionParamsRedisToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsRedisToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsRedis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsRedisAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsRedisClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getNumberListAttribute('databases');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocAuth {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_source - computed: true, optional: false, required: false
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsStoredocAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexConnectionmanagerConnectionParamsStoredocClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsStoredocClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsStoredocClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredocCluster {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredocCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredocCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredocCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsStoredocClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsStoredocClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsStoredoc {
}

export function dataYandexConnectionmanagerConnectionParamsStoredocToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsStoredocToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsStoredoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsStoredocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsStoredoc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsStoredoc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsStoredocAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsStoredocClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getListAttribute('databases');
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoAuth {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsTrinoAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinator {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinatorToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinatorToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrinoCluster {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrinoCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrinoCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrinoCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // coordinator - computed: true, optional: false, required: false
  private _coordinator = new DataYandexConnectionmanagerConnectionParamsTrinoClusterCoordinatorOutputReference(this, "coordinator");
  public get coordinator() {
    return this._coordinator;
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsTrinoClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsTrino {
}

export function dataYandexConnectionmanagerConnectionParamsTrinoToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrino): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsTrinoToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsTrino): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsTrinoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsTrino | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsTrino | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsTrinoAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsTrinoClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_punctuation - computed: true, optional: false, required: false
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }

  // include_digits - computed: true, optional: false, required: false
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }

  // include_lowercase - computed: true, optional: false, required: false
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }

  // include_punctuation - computed: true, optional: false, required: false
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }

  // include_uppercase - computed: true, optional: false, required: false
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }

  // included_punctuation - computed: true, optional: false, required: false
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie - computed: true, optional: false, required: false
  public get cookie() {
    return this.getStringAttribute('cookie');
  }

  // lockbox_password_generation_options - computed: true, optional: false, required: false
  private _lockboxPasswordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lockbox_secret_key - computed: true, optional: false, required: false
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }

  // password_generation_options - computed: true, optional: false, required: false
  private _passwordGenerationOptions = new DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPassword {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  private _password = new DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyAuth {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyAuthToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyAuthToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_password - computed: true, optional: false, required: false
  private _userPassword = new DataYandexConnectionmanagerConnectionParamsValkeyAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyClusterHosts {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyClusterHostsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyClusterHostsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyClusterHostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyClusterHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyClusterHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // shard_name - computed: true, optional: false, required: false
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
}

export class DataYandexConnectionmanagerConnectionParamsValkeyClusterHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexConnectionmanagerConnectionParamsValkeyClusterHostsOutputReference {
    return new DataYandexConnectionmanagerConnectionParamsValkeyClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTlsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTlsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParams {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  private _disabled = new DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkeyCluster {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyClusterToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyClusterToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkeyCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkeyCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkeyCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexConnectionmanagerConnectionParamsValkeyClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // sentinel_port - computed: true, optional: false, required: false
  public get sentinelPort() {
    return this.getNumberAttribute('sentinel_port');
  }

  // tls_params - computed: true, optional: false, required: false
  private _tlsParams = new DataYandexConnectionmanagerConnectionParamsValkeyClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
}
export interface DataYandexConnectionmanagerConnectionParamsValkey {
}

export function dataYandexConnectionmanagerConnectionParamsValkeyToTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsValkeyToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParamsValkey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsValkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParamsValkey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParamsValkey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new DataYandexConnectionmanagerConnectionParamsValkeyAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataYandexConnectionmanagerConnectionParamsValkeyClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }

  // databases - computed: true, optional: false, required: false
  public get databases() {
    return this.getNumberListAttribute('databases');
  }

  // managed_cluster_id - computed: true, optional: false, required: false
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
}
export interface DataYandexConnectionmanagerConnectionParams {
}

export function dataYandexConnectionmanagerConnectionParamsToTerraform(struct?: DataYandexConnectionmanagerConnectionParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexConnectionmanagerConnectionParamsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexConnectionmanagerConnectionParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clickhouse - computed: true, optional: false, required: false
  private _clickhouse = new DataYandexConnectionmanagerConnectionParamsClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }

  // greenplum - computed: true, optional: false, required: false
  private _greenplum = new DataYandexConnectionmanagerConnectionParamsGreenplumOutputReference(this, "greenplum");
  public get greenplum() {
    return this._greenplum;
  }

  // kafka - computed: true, optional: false, required: false
  private _kafka = new DataYandexConnectionmanagerConnectionParamsKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }

  // mongodb - computed: true, optional: false, required: false
  private _mongodb = new DataYandexConnectionmanagerConnectionParamsMongodbOutputReference(this, "mongodb");
  public get mongodb() {
    return this._mongodb;
  }

  // mysql - computed: true, optional: false, required: false
  private _mysql = new DataYandexConnectionmanagerConnectionParamsMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }

  // opensearch - computed: true, optional: false, required: false
  private _opensearch = new DataYandexConnectionmanagerConnectionParamsOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }

  // postgresql - computed: true, optional: false, required: false
  private _postgresql = new DataYandexConnectionmanagerConnectionParamsPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }

  // redis - computed: true, optional: false, required: false
  private _redis = new DataYandexConnectionmanagerConnectionParamsRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }

  // storedoc - computed: true, optional: false, required: false
  private _storedoc = new DataYandexConnectionmanagerConnectionParamsStoredocOutputReference(this, "storedoc");
  public get storedoc() {
    return this._storedoc;
  }

  // trino - computed: true, optional: false, required: false
  private _trino = new DataYandexConnectionmanagerConnectionParamsTrinoOutputReference(this, "trino");
  public get trino() {
    return this._trino;
  }

  // valkey - computed: true, optional: false, required: false
  private _valkey = new DataYandexConnectionmanagerConnectionParamsValkeyOutputReference(this, "valkey");
  public get valkey() {
    return this._valkey;
  }
}
export interface DataYandexConnectionmanagerConnectionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#create DataYandexConnectionmanagerConnection#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#delete DataYandexConnectionmanagerConnection#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#read DataYandexConnectionmanagerConnection#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#update DataYandexConnectionmanagerConnection#update}
  */
  readonly update?: string;
}

export function dataYandexConnectionmanagerConnectionTimeoutsToTerraform(struct?: DataYandexConnectionmanagerConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataYandexConnectionmanagerConnectionTimeoutsToHclTerraform(struct?: DataYandexConnectionmanagerConnectionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class DataYandexConnectionmanagerConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexConnectionmanagerConnectionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexConnectionmanagerConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection yandex_connectionmanager_connection}
*/
export class DataYandexConnectionmanagerConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_connectionmanager_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexConnectionmanagerConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexConnectionmanagerConnection to import
  * @param importFromId The id of the existing DataYandexConnectionmanagerConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexConnectionmanagerConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_connectionmanager_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/connectionmanager_connection yandex_connectionmanager_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexConnectionmanagerConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexConnectionmanagerConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_connectionmanager_connection',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._folderId = config.folderId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_use - computed: true, optional: false, required: false
  public get canUse() {
    return this.getBooleanAttribute('can_use');
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // is_managed - computed: true, optional: false, required: false
  public get isManaged() {
    return this.getBooleanAttribute('is_managed');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // lockbox_secret - computed: true, optional: false, required: false
  private _lockboxSecret = new DataYandexConnectionmanagerConnectionLockboxSecretOutputReference(this, "lockbox_secret");
  public get lockboxSecret() {
    return this._lockboxSecret;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // params - computed: true, optional: false, required: false
  private _params = new DataYandexConnectionmanagerConnectionParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexConnectionmanagerConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexConnectionmanagerConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: dataYandexConnectionmanagerConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      timeouts: {
        value: dataYandexConnectionmanagerConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexConnectionmanagerConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
