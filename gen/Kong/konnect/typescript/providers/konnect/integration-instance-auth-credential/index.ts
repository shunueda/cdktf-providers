// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationInstanceAuthCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `id` of the integration instance. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential#integration_instance_id IntegrationInstanceAuthCredential#integration_instance_id}
  */
  readonly integrationInstanceId: string;
  /**
  * Payload used to create an `Multi Key` credential for an integration instance. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential#multi_key_auth IntegrationInstanceAuthCredential#multi_key_auth}
  */
  readonly multiKeyAuth?: IntegrationInstanceAuthCredentialMultiKeyAuth;
}
export interface IntegrationInstanceAuthCredentialIntegrationInstance {
}

export function integrationInstanceAuthCredentialIntegrationInstanceToTerraform(struct?: IntegrationInstanceAuthCredentialIntegrationInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationInstanceAuthCredentialIntegrationInstanceToHclTerraform(struct?: IntegrationInstanceAuthCredentialIntegrationInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationInstanceAuthCredentialIntegrationInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationInstanceAuthCredentialIntegrationInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialIntegrationInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IntegrationInstanceAuthCredentialMissingPermissions {
}

export function integrationInstanceAuthCredentialMissingPermissionsToTerraform(struct?: IntegrationInstanceAuthCredentialMissingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationInstanceAuthCredentialMissingPermissionsToHclTerraform(struct?: IntegrationInstanceAuthCredentialMissingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationInstanceAuthCredentialMissingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationInstanceAuthCredentialMissingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialMissingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}

export class IntegrationInstanceAuthCredentialMissingPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationInstanceAuthCredentialMissingPermissionsOutputReference {
    return new IntegrationInstanceAuthCredentialMissingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders {
  /**
  * The key used to populate the request header. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential#key IntegrationInstanceAuthCredential#key}
  */
  readonly key: string;
  /**
  * Name of the request header. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential#name IntegrationInstanceAuthCredential#name}
  */
  readonly name: string;
}

export function integrationInstanceAuthCredentialMultiKeyAuthConfigHeadersToTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function integrationInstanceAuthCredentialMultiKeyAuthConfigHeadersToHclTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
    }
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
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeadersList extends cdktf.ComplexList {
  public internalValue? : IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders[] | cdktf.IResolvable

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
  public get(index: number): IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeadersOutputReference {
    return new IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationInstanceAuthCredentialMultiKeyAuthConfig {
  /**
  * A list of header key/value pairs used to transmit API credentials to the integration's external API.
  * Header names are defined by the integration within its `Multi Key` authorization strategy definition.
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential#headers IntegrationInstanceAuthCredential#headers}
  */
  readonly headers: IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders[] | cdktf.IResolvable;
}

export function integrationInstanceAuthCredentialMultiKeyAuthConfigToTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(integrationInstanceAuthCredentialMultiKeyAuthConfigHeadersToTerraform, false)(struct!.headers),
  }
}


export function integrationInstanceAuthCredentialMultiKeyAuthConfigToHclTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(integrationInstanceAuthCredentialMultiKeyAuthConfigHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationInstanceAuthCredentialMultiKeyAuthConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialMultiKeyAuthConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers = new IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: IntegrationInstanceAuthCredentialMultiKeyAuthConfigHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface IntegrationInstanceAuthCredentialMultiKeyAuth {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential#config IntegrationInstanceAuthCredential#config}
  */
  readonly config: IntegrationInstanceAuthCredentialMultiKeyAuthConfig;
}

export function integrationInstanceAuthCredentialMultiKeyAuthToTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: integrationInstanceAuthCredentialMultiKeyAuthConfigToTerraform(struct!.config),
  }
}


export function integrationInstanceAuthCredentialMultiKeyAuthToHclTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: integrationInstanceAuthCredentialMultiKeyAuthConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "IntegrationInstanceAuthCredentialMultiKeyAuthConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationInstanceAuthCredentialMultiKeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialMultiKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new IntegrationInstanceAuthCredentialMultiKeyAuthConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: IntegrationInstanceAuthCredentialMultiKeyAuthConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface IntegrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstance {
}

export function integrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstanceToTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstanceToHclTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissions {
}

export function integrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissionsToTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissionsToHclTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissionsList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissionsOutputReference {
    return new IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationInstanceAuthCredentialMultiKeyAuthCredential {
}

export function integrationInstanceAuthCredentialMultiKeyAuthCredentialToTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationInstanceAuthCredentialMultiKeyAuthCredentialToHclTerraform(struct?: IntegrationInstanceAuthCredentialMultiKeyAuthCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationInstanceAuthCredentialMultiKeyAuthCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationInstanceAuthCredentialMultiKeyAuthCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationInstanceAuthCredentialMultiKeyAuthCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_instance - computed: true, optional: false, required: false
  private _integrationInstance = new IntegrationInstanceAuthCredentialMultiKeyAuthCredentialIntegrationInstanceOutputReference(this, "integration_instance");
  public get integrationInstance() {
    return this._integrationInstance;
  }

  // missing_permissions - computed: true, optional: false, required: false
  private _missingPermissions = new IntegrationInstanceAuthCredentialMultiKeyAuthCredentialMissingPermissionsList(this, "missing_permissions", false);
  public get missingPermissions() {
    return this._missingPermissions;
  }

  // tainted - computed: true, optional: false, required: false
  public get tainted() {
    return this.getBooleanAttribute('tainted');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential konnect_integration_instance_auth_credential}
*/
export class IntegrationInstanceAuthCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_integration_instance_auth_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationInstanceAuthCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationInstanceAuthCredential to import
  * @param importFromId The id of the existing IntegrationInstanceAuthCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationInstanceAuthCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_integration_instance_auth_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/integration_instance_auth_credential konnect_integration_instance_auth_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationInstanceAuthCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationInstanceAuthCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_integration_instance_auth_credential',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._integrationInstanceId = config.integrationInstanceId;
    this._multiKeyAuth.internalValue = config.multiKeyAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_instance - computed: true, optional: false, required: false
  private _integrationInstance = new IntegrationInstanceAuthCredentialIntegrationInstanceOutputReference(this, "integration_instance");
  public get integrationInstance() {
    return this._integrationInstance;
  }

  // integration_instance_id - computed: false, optional: false, required: true
  private _integrationInstanceId?: string; 
  public get integrationInstanceId() {
    return this.getStringAttribute('integration_instance_id');
  }
  public set integrationInstanceId(value: string) {
    this._integrationInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInstanceIdInput() {
    return this._integrationInstanceId;
  }

  // missing_permissions - computed: true, optional: false, required: false
  private _missingPermissions = new IntegrationInstanceAuthCredentialMissingPermissionsList(this, "missing_permissions", false);
  public get missingPermissions() {
    return this._missingPermissions;
  }

  // multi_key_auth - computed: false, optional: true, required: false
  private _multiKeyAuth = new IntegrationInstanceAuthCredentialMultiKeyAuthOutputReference(this, "multi_key_auth");
  public get multiKeyAuth() {
    return this._multiKeyAuth;
  }
  public putMultiKeyAuth(value: IntegrationInstanceAuthCredentialMultiKeyAuth) {
    this._multiKeyAuth.internalValue = value;
  }
  public resetMultiKeyAuth() {
    this._multiKeyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiKeyAuthInput() {
    return this._multiKeyAuth.internalValue;
  }

  // multi_key_auth_credential - computed: true, optional: false, required: false
  private _multiKeyAuthCredential = new IntegrationInstanceAuthCredentialMultiKeyAuthCredentialOutputReference(this, "multi_key_auth_credential");
  public get multiKeyAuthCredential() {
    return this._multiKeyAuthCredential;
  }

  // tainted - computed: true, optional: false, required: false
  public get tainted() {
    return this.getBooleanAttribute('tainted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_instance_id: cdktf.stringToTerraform(this._integrationInstanceId),
      multi_key_auth: integrationInstanceAuthCredentialMultiKeyAuthToTerraform(this._multiKeyAuth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      integration_instance_id: {
        value: cdktf.stringToHclTerraform(this._integrationInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_key_auth: {
        value: integrationInstanceAuthCredentialMultiKeyAuthToHclTerraform(this._multiKeyAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationInstanceAuthCredentialMultiKeyAuth",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
