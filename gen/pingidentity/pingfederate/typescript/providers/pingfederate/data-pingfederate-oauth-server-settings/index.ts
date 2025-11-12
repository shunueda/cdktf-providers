// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_server_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateOauthServerSettingsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPingfederateOauthServerSettingsAdminWebServicePcvRef {
}

export function dataPingfederateOauthServerSettingsAdminWebServicePcvRefToTerraform(struct?: DataPingfederateOauthServerSettingsAdminWebServicePcvRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsAdminWebServicePcvRefToHclTerraform(struct?: DataPingfederateOauthServerSettingsAdminWebServicePcvRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsAdminWebServicePcvRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthServerSettingsAdminWebServicePcvRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsAdminWebServicePcvRef | undefined) {
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
export interface DataPingfederateOauthServerSettingsExclusiveScopeGroups {
}

export function dataPingfederateOauthServerSettingsExclusiveScopeGroupsToTerraform(struct?: DataPingfederateOauthServerSettingsExclusiveScopeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsExclusiveScopeGroupsToHclTerraform(struct?: DataPingfederateOauthServerSettingsExclusiveScopeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsExclusiveScopeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthServerSettingsExclusiveScopeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsExclusiveScopeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
}

export class DataPingfederateOauthServerSettingsExclusiveScopeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthServerSettingsExclusiveScopeGroupsOutputReference {
    return new DataPingfederateOauthServerSettingsExclusiveScopeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthServerSettingsExclusiveScopes {
}

export function dataPingfederateOauthServerSettingsExclusiveScopesToTerraform(struct?: DataPingfederateOauthServerSettingsExclusiveScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsExclusiveScopesToHclTerraform(struct?: DataPingfederateOauthServerSettingsExclusiveScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsExclusiveScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthServerSettingsExclusiveScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsExclusiveScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPingfederateOauthServerSettingsExclusiveScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthServerSettingsExclusiveScopesOutputReference {
    return new DataPingfederateOauthServerSettingsExclusiveScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributes {
}

export function dataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributesToTerraform(struct?: DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributesToHclTerraform(struct?: DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributes | undefined) {
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
}

export class DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributesOutputReference {
    return new DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributes {
}

export function dataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributesToTerraform(struct?: DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributesToHclTerraform(struct?: DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributes | undefined) {
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
}

export class DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributesOutputReference {
    return new DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthServerSettingsPersistentGrantContract {
}

export function dataPingfederateOauthServerSettingsPersistentGrantContractToTerraform(struct?: DataPingfederateOauthServerSettingsPersistentGrantContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsPersistentGrantContractToHclTerraform(struct?: DataPingfederateOauthServerSettingsPersistentGrantContract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsPersistentGrantContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthServerSettingsPersistentGrantContract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsPersistentGrantContract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new DataPingfederateOauthServerSettingsPersistentGrantContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: false, required: false
  private _extendedAttributes = new DataPingfederateOauthServerSettingsPersistentGrantContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
}
export interface DataPingfederateOauthServerSettingsScopeGroups {
}

export function dataPingfederateOauthServerSettingsScopeGroupsToTerraform(struct?: DataPingfederateOauthServerSettingsScopeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsScopeGroupsToHclTerraform(struct?: DataPingfederateOauthServerSettingsScopeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsScopeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthServerSettingsScopeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsScopeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
}

export class DataPingfederateOauthServerSettingsScopeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthServerSettingsScopeGroupsOutputReference {
    return new DataPingfederateOauthServerSettingsScopeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthServerSettingsScopes {
}

export function dataPingfederateOauthServerSettingsScopesToTerraform(struct?: DataPingfederateOauthServerSettingsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthServerSettingsScopesToHclTerraform(struct?: DataPingfederateOauthServerSettingsScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthServerSettingsScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthServerSettingsScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthServerSettingsScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataPingfederateOauthServerSettingsScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthServerSettingsScopesOutputReference {
    return new DataPingfederateOauthServerSettingsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_server_settings pingfederate_oauth_server_settings}
*/
export class DataPingfederateOauthServerSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_server_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateOauthServerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateOauthServerSettings to import
  * @param importFromId The id of the existing DataPingfederateOauthServerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_server_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateOauthServerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_server_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_server_settings pingfederate_oauth_server_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateOauthServerSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateOauthServerSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_server_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_code_check_mode - computed: true, optional: false, required: false
  public get activationCodeCheckMode() {
    return this.getStringAttribute('activation_code_check_mode');
  }

  // admin_web_service_pcv_ref - computed: true, optional: false, required: false
  private _adminWebServicePcvRef = new DataPingfederateOauthServerSettingsAdminWebServicePcvRefOutputReference(this, "admin_web_service_pcv_ref");
  public get adminWebServicePcvRef() {
    return this._adminWebServicePcvRef;
  }

  // allow_unidentified_client_extension_grants - computed: true, optional: false, required: false
  public get allowUnidentifiedClientExtensionGrants() {
    return this.getBooleanAttribute('allow_unidentified_client_extension_grants');
  }

  // allow_unidentified_client_ro_creds - computed: true, optional: false, required: false
  public get allowUnidentifiedClientRoCreds() {
    return this.getBooleanAttribute('allow_unidentified_client_ro_creds');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }

  // approved_authorization_detail_attribute - computed: true, optional: false, required: false
  public get approvedAuthorizationDetailAttribute() {
    return this.getStringAttribute('approved_authorization_detail_attribute');
  }

  // approved_scopes_attribute - computed: true, optional: false, required: false
  public get approvedScopesAttribute() {
    return this.getStringAttribute('approved_scopes_attribute');
  }

  // atm_id_for_oauth_grant_management - computed: true, optional: false, required: false
  public get atmIdForOauthGrantManagement() {
    return this.getStringAttribute('atm_id_for_oauth_grant_management');
  }

  // authorization_code_entropy - computed: true, optional: false, required: false
  public get authorizationCodeEntropy() {
    return this.getNumberAttribute('authorization_code_entropy');
  }

  // authorization_code_timeout - computed: true, optional: false, required: false
  public get authorizationCodeTimeout() {
    return this.getNumberAttribute('authorization_code_timeout');
  }

  // bypass_activation_code_confirmation - computed: true, optional: false, required: false
  public get bypassActivationCodeConfirmation() {
    return this.getBooleanAttribute('bypass_activation_code_confirmation');
  }

  // bypass_authorization_for_approved_consents - computed: true, optional: false, required: false
  public get bypassAuthorizationForApprovedConsents() {
    return this.getBooleanAttribute('bypass_authorization_for_approved_consents');
  }

  // bypass_authorization_for_approved_grants - computed: true, optional: false, required: false
  public get bypassAuthorizationForApprovedGrants() {
    return this.getBooleanAttribute('bypass_authorization_for_approved_grants');
  }

  // client_secret_retention_period - computed: true, optional: false, required: false
  public get clientSecretRetentionPeriod() {
    return this.getNumberAttribute('client_secret_retention_period');
  }

  // consent_lifetime_days - computed: true, optional: false, required: false
  public get consentLifetimeDays() {
    return this.getNumberAttribute('consent_lifetime_days');
  }

  // default_scope_description - computed: true, optional: false, required: false
  public get defaultScopeDescription() {
    return this.getStringAttribute('default_scope_description');
  }

  // device_polling_interval - computed: true, optional: false, required: false
  public get devicePollingInterval() {
    return this.getNumberAttribute('device_polling_interval');
  }

  // disallow_plain_pkce - computed: true, optional: false, required: false
  public get disallowPlainPkce() {
    return this.getBooleanAttribute('disallow_plain_pkce');
  }

  // dpop_proof_enforce_replay_prevention - computed: true, optional: false, required: false
  public get dpopProofEnforceReplayPrevention() {
    return this.getBooleanAttribute('dpop_proof_enforce_replay_prevention');
  }

  // dpop_proof_lifetime_seconds - computed: true, optional: false, required: false
  public get dpopProofLifetimeSeconds() {
    return this.getNumberAttribute('dpop_proof_lifetime_seconds');
  }

  // dpop_proof_require_nonce - computed: true, optional: false, required: false
  public get dpopProofRequireNonce() {
    return this.getBooleanAttribute('dpop_proof_require_nonce');
  }

  // enable_cookieless_user_authorization_authentication_api - computed: true, optional: false, required: false
  public get enableCookielessUserAuthorizationAuthenticationApi() {
    return this.getBooleanAttribute('enable_cookieless_user_authorization_authentication_api');
  }

  // exclusive_scope_groups - computed: true, optional: false, required: false
  private _exclusiveScopeGroups = new DataPingfederateOauthServerSettingsExclusiveScopeGroupsList(this, "exclusive_scope_groups", true);
  public get exclusiveScopeGroups() {
    return this._exclusiveScopeGroups;
  }

  // exclusive_scopes - computed: true, optional: false, required: false
  private _exclusiveScopes = new DataPingfederateOauthServerSettingsExclusiveScopesList(this, "exclusive_scopes", true);
  public get exclusiveScopes() {
    return this._exclusiveScopes;
  }

  // include_issuer_in_authorization_response - computed: true, optional: false, required: false
  public get includeIssuerInAuthorizationResponse() {
    return this.getBooleanAttribute('include_issuer_in_authorization_response');
  }

  // jwt_secured_authorization_response_mode_lifetime - computed: true, optional: false, required: false
  public get jwtSecuredAuthorizationResponseModeLifetime() {
    return this.getNumberAttribute('jwt_secured_authorization_response_mode_lifetime');
  }

  // offline_access_require_consent_prompt - computed: true, optional: false, required: false
  public get offlineAccessRequireConsentPrompt() {
    return this.getBooleanAttribute('offline_access_require_consent_prompt');
  }

  // par_reference_length - computed: true, optional: false, required: false
  public get parReferenceLength() {
    return this.getNumberAttribute('par_reference_length');
  }

  // par_reference_timeout - computed: true, optional: false, required: false
  public get parReferenceTimeout() {
    return this.getNumberAttribute('par_reference_timeout');
  }

  // par_status - computed: true, optional: false, required: false
  public get parStatus() {
    return this.getStringAttribute('par_status');
  }

  // pending_authorization_timeout - computed: true, optional: false, required: false
  public get pendingAuthorizationTimeout() {
    return this.getNumberAttribute('pending_authorization_timeout');
  }

  // persistent_grant_contract - computed: true, optional: false, required: false
  private _persistentGrantContract = new DataPingfederateOauthServerSettingsPersistentGrantContractOutputReference(this, "persistent_grant_contract");
  public get persistentGrantContract() {
    return this._persistentGrantContract;
  }

  // persistent_grant_idle_timeout - computed: true, optional: false, required: false
  public get persistentGrantIdleTimeout() {
    return this.getNumberAttribute('persistent_grant_idle_timeout');
  }

  // persistent_grant_idle_timeout_time_unit - computed: true, optional: false, required: false
  public get persistentGrantIdleTimeoutTimeUnit() {
    return this.getStringAttribute('persistent_grant_idle_timeout_time_unit');
  }

  // persistent_grant_lifetime - computed: true, optional: false, required: false
  public get persistentGrantLifetime() {
    return this.getNumberAttribute('persistent_grant_lifetime');
  }

  // persistent_grant_lifetime_unit - computed: true, optional: false, required: false
  public get persistentGrantLifetimeUnit() {
    return this.getStringAttribute('persistent_grant_lifetime_unit');
  }

  // persistent_grant_reuse_grant_types - computed: true, optional: false, required: false
  public get persistentGrantReuseGrantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('persistent_grant_reuse_grant_types'));
  }

  // refresh_rolling_interval - computed: true, optional: false, required: false
  public get refreshRollingInterval() {
    return this.getNumberAttribute('refresh_rolling_interval');
  }

  // refresh_rolling_interval_time_unit - computed: true, optional: false, required: false
  public get refreshRollingIntervalTimeUnit() {
    return this.getStringAttribute('refresh_rolling_interval_time_unit');
  }

  // refresh_token_length - computed: true, optional: false, required: false
  public get refreshTokenLength() {
    return this.getNumberAttribute('refresh_token_length');
  }

  // refresh_token_rolling_grace_period - computed: true, optional: false, required: false
  public get refreshTokenRollingGracePeriod() {
    return this.getNumberAttribute('refresh_token_rolling_grace_period');
  }

  // registered_authorization_path - computed: true, optional: false, required: false
  public get registeredAuthorizationPath() {
    return this.getStringAttribute('registered_authorization_path');
  }

  // require_offline_access_scope_to_issue_refresh_tokens - computed: true, optional: false, required: false
  public get requireOfflineAccessScopeToIssueRefreshTokens() {
    return this.getBooleanAttribute('require_offline_access_scope_to_issue_refresh_tokens');
  }

  // return_id_token_on_open_id_with_device_authz_grant - computed: true, optional: false, required: false
  public get returnIdTokenOnOpenIdWithDeviceAuthzGrant() {
    return this.getBooleanAttribute('return_id_token_on_open_id_with_device_authz_grant');
  }

  // roll_refresh_token_values - computed: true, optional: false, required: false
  public get rollRefreshTokenValues() {
    return this.getBooleanAttribute('roll_refresh_token_values');
  }

  // scope_for_oauth_grant_management - computed: true, optional: false, required: false
  public get scopeForOauthGrantManagement() {
    return this.getStringAttribute('scope_for_oauth_grant_management');
  }

  // scope_groups - computed: true, optional: false, required: false
  private _scopeGroups = new DataPingfederateOauthServerSettingsScopeGroupsList(this, "scope_groups", true);
  public get scopeGroups() {
    return this._scopeGroups;
  }

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataPingfederateOauthServerSettingsScopesList(this, "scopes", true);
  public get scopes() {
    return this._scopes;
  }

  // token_endpoint_base_url - computed: true, optional: false, required: false
  public get tokenEndpointBaseUrl() {
    return this.getStringAttribute('token_endpoint_base_url');
  }

  // track_user_sessions_for_logout - computed: true, optional: false, required: false
  public get trackUserSessionsForLogout() {
    return this.getBooleanAttribute('track_user_sessions_for_logout');
  }

  // user_authorization_consent_adapter - computed: true, optional: false, required: false
  public get userAuthorizationConsentAdapter() {
    return this.getStringAttribute('user_authorization_consent_adapter');
  }

  // user_authorization_consent_page_setting - computed: true, optional: false, required: false
  public get userAuthorizationConsentPageSetting() {
    return this.getStringAttribute('user_authorization_consent_page_setting');
  }

  // user_authorization_url - computed: true, optional: false, required: false
  public get userAuthorizationUrl() {
    return this.getStringAttribute('user_authorization_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
