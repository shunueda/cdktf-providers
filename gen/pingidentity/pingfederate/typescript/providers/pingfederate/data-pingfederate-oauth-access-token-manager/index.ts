// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_access_token_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateOauthAccessTokenManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_access_token_manager#manager_id DataPingfederateOauthAccessTokenManager#manager_id}
  */
  readonly managerId: string;
}
export interface DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClients {
}

export function dataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClientsToTerraform(struct?: DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClientsToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClientsOutputReference {
    return new DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthAccessTokenManagerAccessControlSettings {
}

export function dataPingfederateOauthAccessTokenManagerAccessControlSettingsToTerraform(struct?: DataPingfederateOauthAccessTokenManagerAccessControlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerAccessControlSettingsToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerAccessControlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerAccessControlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthAccessTokenManagerAccessControlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerAccessControlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_clients - computed: true, optional: false, required: false
  private _allowedClients = new DataPingfederateOauthAccessTokenManagerAccessControlSettingsAllowedClientsList(this, "allowed_clients", true);
  public get allowedClients() {
    return this._allowedClients;
  }

  // restrict_clients - computed: true, optional: false, required: false
  public get restrictClients() {
    return this.getBooleanAttribute('restrict_clients');
  }
}
export interface DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributes {
}

export function dataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributesToTerraform(struct?: DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributesToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributesOutputReference {
    return new DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributes {
}

export function dataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributesToTerraform(struct?: DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributesToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multi_valued - computed: true, optional: false, required: false
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributesOutputReference {
    return new DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthAccessTokenManagerAttributeContract {
}

export function dataPingfederateOauthAccessTokenManagerAttributeContractToTerraform(struct?: DataPingfederateOauthAccessTokenManagerAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerAttributeContractToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerAttributeContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthAccessTokenManagerAttributeContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerAttributeContract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new DataPingfederateOauthAccessTokenManagerAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // default_subject_attribute - computed: true, optional: false, required: false
  public get defaultSubjectAttribute() {
    return this.getStringAttribute('default_subject_attribute');
  }

  // extended_attributes - computed: true, optional: false, required: false
  private _extendedAttributes = new DataPingfederateOauthAccessTokenManagerAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
}
export interface DataPingfederateOauthAccessTokenManagerConfigurationFields {
}

export function dataPingfederateOauthAccessTokenManagerConfigurationFieldsToTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerConfigurationFieldsToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthAccessTokenManagerConfigurationFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerConfigurationFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_value - computed: true, optional: false, required: false
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateOauthAccessTokenManagerConfigurationFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthAccessTokenManagerConfigurationFieldsOutputReference {
    return new DataPingfederateOauthAccessTokenManagerConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFields {
}

export function dataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFieldsToTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFieldsToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_value - computed: true, optional: false, required: false
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFieldsOutputReference {
    return new DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthAccessTokenManagerConfigurationTablesRows {
}

export function dataPingfederateOauthAccessTokenManagerConfigurationTablesRowsToTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationTablesRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerConfigurationTablesRowsToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationTablesRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthAccessTokenManagerConfigurationTablesRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerConfigurationTablesRows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_row - computed: true, optional: false, required: false
  public get defaultRow() {
    return this.getBooleanAttribute('default_row');
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
}

export class DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsOutputReference {
    return new DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthAccessTokenManagerConfigurationTables {
}

export function dataPingfederateOauthAccessTokenManagerConfigurationTablesToTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerConfigurationTablesToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfigurationTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthAccessTokenManagerConfigurationTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerConfigurationTables | undefined) {
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

  // rows - computed: true, optional: false, required: false
  private _rows = new DataPingfederateOauthAccessTokenManagerConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
}

export class DataPingfederateOauthAccessTokenManagerConfigurationTablesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthAccessTokenManagerConfigurationTablesOutputReference {
    return new DataPingfederateOauthAccessTokenManagerConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthAccessTokenManagerConfiguration {
}

export function dataPingfederateOauthAccessTokenManagerConfigurationToTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerConfigurationToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthAccessTokenManagerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataPingfederateOauthAccessTokenManagerConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }

  // tables - computed: true, optional: false, required: false
  private _tables = new DataPingfederateOauthAccessTokenManagerConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
}
export interface DataPingfederateOauthAccessTokenManagerParentRef {
}

export function dataPingfederateOauthAccessTokenManagerParentRefToTerraform(struct?: DataPingfederateOauthAccessTokenManagerParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerParentRefToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthAccessTokenManagerParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateOauthAccessTokenManagerPluginDescriptorRef {
}

export function dataPingfederateOauthAccessTokenManagerPluginDescriptorRefToTerraform(struct?: DataPingfederateOauthAccessTokenManagerPluginDescriptorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerPluginDescriptorRefToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerPluginDescriptorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerPluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthAccessTokenManagerPluginDescriptorRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerPluginDescriptorRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateOauthAccessTokenManagerSelectionSettings {
}

export function dataPingfederateOauthAccessTokenManagerSelectionSettingsToTerraform(struct?: DataPingfederateOauthAccessTokenManagerSelectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerSelectionSettingsToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerSelectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerSelectionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthAccessTokenManagerSelectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerSelectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_uris - computed: true, optional: false, required: false
  public get resourceUris() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_uris'));
  }
}
export interface DataPingfederateOauthAccessTokenManagerSessionValidationSettings {
}

export function dataPingfederateOauthAccessTokenManagerSessionValidationSettingsToTerraform(struct?: DataPingfederateOauthAccessTokenManagerSessionValidationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthAccessTokenManagerSessionValidationSettingsToHclTerraform(struct?: DataPingfederateOauthAccessTokenManagerSessionValidationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthAccessTokenManagerSessionValidationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthAccessTokenManagerSessionValidationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthAccessTokenManagerSessionValidationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_session_revocation_status - computed: true, optional: false, required: false
  public get checkSessionRevocationStatus() {
    return this.getBooleanAttribute('check_session_revocation_status');
  }

  // check_valid_authn_session - computed: true, optional: false, required: false
  public get checkValidAuthnSession() {
    return this.getBooleanAttribute('check_valid_authn_session');
  }

  // include_session_id - computed: true, optional: false, required: false
  public get includeSessionId() {
    return this.getBooleanAttribute('include_session_id');
  }

  // update_authn_session_activity - computed: true, optional: false, required: false
  public get updateAuthnSessionActivity() {
    return this.getBooleanAttribute('update_authn_session_activity');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_access_token_manager pingfederate_oauth_access_token_manager}
*/
export class DataPingfederateOauthAccessTokenManager extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_access_token_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateOauthAccessTokenManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateOauthAccessTokenManager to import
  * @param importFromId The id of the existing DataPingfederateOauthAccessTokenManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_access_token_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateOauthAccessTokenManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_access_token_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_access_token_manager pingfederate_oauth_access_token_manager} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateOauthAccessTokenManagerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateOauthAccessTokenManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_access_token_manager',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._managerId = config.managerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_settings - computed: true, optional: false, required: false
  private _accessControlSettings = new DataPingfederateOauthAccessTokenManagerAccessControlSettingsOutputReference(this, "access_control_settings");
  public get accessControlSettings() {
    return this._accessControlSettings;
  }

  // attribute_contract - computed: true, optional: false, required: false
  private _attributeContract = new DataPingfederateOauthAccessTokenManagerAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataPingfederateOauthAccessTokenManagerConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manager_id - computed: false, optional: false, required: true
  private _managerId?: string; 
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }
  public set managerId(value: string) {
    this._managerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataPingfederateOauthAccessTokenManagerParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }

  // plugin_descriptor_ref - computed: true, optional: false, required: false
  private _pluginDescriptorRef = new DataPingfederateOauthAccessTokenManagerPluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }

  // selection_settings - computed: true, optional: false, required: false
  private _selectionSettings = new DataPingfederateOauthAccessTokenManagerSelectionSettingsOutputReference(this, "selection_settings");
  public get selectionSettings() {
    return this._selectionSettings;
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // session_validation_settings - computed: true, optional: false, required: false
  private _sessionValidationSettings = new DataPingfederateOauthAccessTokenManagerSessionValidationSettingsOutputReference(this, "session_validation_settings");
  public get sessionValidationSettings() {
    return this._sessionValidationSettings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      manager_id: cdktf.stringToTerraform(this._managerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      manager_id: {
        value: cdktf.stringToHclTerraform(this._managerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
