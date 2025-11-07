// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAirbyteConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Include deleted connections in the returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections#include_deleted DataAirbyteConnections#include_deleted}
  */
  readonly includeDeleted?: boolean | cdktf.IResolvable;
  /**
  * Set the limit on the number of Connections returned. The default is 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections#limit DataAirbyteConnections#limit}
  */
  readonly limit?: number;
  /**
  * Set the offset to start at when returning Connections. The default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections#offset DataAirbyteConnections#offset}
  */
  readonly offset?: number;
  /**
  * The UUIDs of the tags you wish to list connections for. Empty list will retrieve all connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections#tag_ids DataAirbyteConnections#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * The UUIDs of the workspaces you wish to list connections for. Empty list will retrieve all allowed workspaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections#workspace_ids DataAirbyteConnections#workspace_ids}
  */
  readonly workspaceIds?: string[];
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAes {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAesToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAesToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // field_name_suffix - computed: true, optional: false, required: false
  public get fieldNameSuffix() {
    return this.getStringAttribute('field_name_suffix');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // padding - computed: true, optional: false, required: false
  public get padding() {
    return this.getStringAttribute('padding');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsa {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // field_name_suffix - computed: true, optional: false, required: false
  public get fieldNameSuffix() {
    return this.getStringAttribute('field_name_suffix');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryption {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aes - computed: true, optional: false, required: false
  private _aes = new DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionAesOutputReference(this, "aes");
  public get aes() {
    return this._aes;
  }

  // rsa - computed: true, optional: false, required: false
  private _rsa = new DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionRsaOutputReference(this, "rsa");
  public get rsa() {
    return this._rsa;
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenaming {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenamingToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenamingToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenaming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // new_field_name - computed: true, optional: false, required: false
  public get newFieldName() {
    return this.getStringAttribute('new_field_name');
  }

  // original_field_name - computed: true, optional: false, required: false
  public get originalFieldName() {
    return this.getStringAttribute('original_field_name');
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashing {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashingToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashingToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name_suffix - computed: true, optional: false, required: false
  public get fieldNameSuffix() {
    return this.getStringAttribute('field_name_suffix');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFiltering {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFilteringToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFilteringToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFilteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFiltering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFiltering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    return this.getStringAttribute('conditions');
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfiguration {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // field_renaming - computed: true, optional: false, required: false
  private _fieldRenaming = new DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationFieldRenamingOutputReference(this, "field_renaming");
  public get fieldRenaming() {
    return this._fieldRenaming;
  }

  // hashing - computed: true, optional: false, required: false
  private _hashing = new DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationHashingOutputReference(this, "hashing");
  public get hashing() {
    return this._hashing;
  }

  // row_filtering - computed: true, optional: false, required: false
  private _rowFiltering = new DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationRowFilteringOutputReference(this, "row_filtering");
  public get rowFiltering() {
    return this._rowFiltering;
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsMappers {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsMappersToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsMappersToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsMappers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsMappers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsMappers | undefined) {
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

  // mapper_configuration - computed: true, optional: false, required: false
  private _mapperConfiguration = new DataAirbyteConnectionsDataConfigurationsStreamsMappersMapperConfigurationOutputReference(this, "mapper_configuration");
  public get mapperConfiguration() {
    return this._mapperConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAirbyteConnectionsDataConfigurationsStreamsMappersList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionsDataConfigurationsStreamsMappersOutputReference {
    return new DataAirbyteConnectionsDataConfigurationsStreamsMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreamsSelectedFields {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsSelectedFieldsToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsSelectedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsSelectedFieldsToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreamsSelectedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsSelectedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreamsSelectedFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreamsSelectedFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getListAttribute('field_path');
  }
}

export class DataAirbyteConnectionsDataConfigurationsStreamsSelectedFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionsDataConfigurationsStreamsSelectedFieldsOutputReference {
    return new DataAirbyteConnectionsDataConfigurationsStreamsSelectedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAirbyteConnectionsDataConfigurationsStreams {
}

export function dataAirbyteConnectionsDataConfigurationsStreamsToTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsStreamsToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurationsStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionsDataConfigurationsStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurationsStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cursor_field - computed: true, optional: false, required: false
  public get cursorField() {
    return this.getListAttribute('cursor_field');
  }

  // destination_object_name - computed: true, optional: false, required: false
  public get destinationObjectName() {
    return this.getStringAttribute('destination_object_name');
  }

  // include_files - computed: true, optional: false, required: false
  public get includeFiles() {
    return this.getBooleanAttribute('include_files');
  }

  // mappers - computed: true, optional: false, required: false
  private _mappers = new DataAirbyteConnectionsDataConfigurationsStreamsMappersList(this, "mappers", false);
  public get mappers() {
    return this._mappers;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // primary_key - computed: true, optional: false, required: false
  private _primaryKey = new cdktf.StringListList(this, "primary_key", false);
  public get primaryKey() {
    return this._primaryKey;
  }

  // selected_fields - computed: true, optional: false, required: false
  private _selectedFields = new DataAirbyteConnectionsDataConfigurationsStreamsSelectedFieldsList(this, "selected_fields", false);
  public get selectedFields() {
    return this._selectedFields;
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
}

export class DataAirbyteConnectionsDataConfigurationsStreamsList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionsDataConfigurationsStreamsOutputReference {
    return new DataAirbyteConnectionsDataConfigurationsStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAirbyteConnectionsDataConfigurations {
}

export function dataAirbyteConnectionsDataConfigurationsToTerraform(struct?: DataAirbyteConnectionsDataConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataConfigurationsToHclTerraform(struct?: DataAirbyteConnectionsDataConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // streams - computed: true, optional: false, required: false
  private _streams = new DataAirbyteConnectionsDataConfigurationsStreamsList(this, "streams", true);
  public get streams() {
    return this._streams;
  }
}
export interface DataAirbyteConnectionsDataSchedule {
}

export function dataAirbyteConnectionsDataScheduleToTerraform(struct?: DataAirbyteConnectionsDataSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataScheduleToHclTerraform(struct?: DataAirbyteConnectionsDataSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionsDataSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_timing - computed: true, optional: false, required: false
  public get basicTiming() {
    return this.getStringAttribute('basic_timing');
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // schedule_type - computed: true, optional: false, required: false
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
}
export interface DataAirbyteConnectionsDataTags {
}

export function dataAirbyteConnectionsDataTagsToTerraform(struct?: DataAirbyteConnectionsDataTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataTagsToHclTerraform(struct?: DataAirbyteConnectionsDataTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionsDataTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsDataTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataAirbyteConnectionsDataTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionsDataTagsOutputReference {
    return new DataAirbyteConnectionsDataTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAirbyteConnectionsData {
}

export function dataAirbyteConnectionsDataToTerraform(struct?: DataAirbyteConnectionsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionsDataToHclTerraform(struct?: DataAirbyteConnectionsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataAirbyteConnectionsDataConfigurationsOutputReference(this, "configurations");
  public get configurations() {
    return this._configurations;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace_definition - computed: true, optional: false, required: false
  public get namespaceDefinition() {
    return this.getStringAttribute('namespace_definition');
  }

  // namespace_format - computed: true, optional: false, required: false
  public get namespaceFormat() {
    return this.getStringAttribute('namespace_format');
  }

  // non_breaking_schema_updates_behavior - computed: true, optional: false, required: false
  public get nonBreakingSchemaUpdatesBehavior() {
    return this.getStringAttribute('non_breaking_schema_updates_behavior');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataAirbyteConnectionsDataScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAirbyteConnectionsDataTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataAirbyteConnectionsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionsDataOutputReference {
    return new DataAirbyteConnectionsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections airbyte_connections}
*/
export class DataAirbyteConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAirbyteConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAirbyteConnections to import
  * @param importFromId The id of the existing DataAirbyteConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAirbyteConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connections airbyte_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAirbyteConnectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAirbyteConnectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'airbyte_connections',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._includeDeleted = config.includeDeleted;
    this._limit = config.limit;
    this._offset = config.offset;
    this._tagIds = config.tagIds;
    this._workspaceIds = config.workspaceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataAirbyteConnectionsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: boolean | cdktf.IResolvable; 
  public get includeDeleted() {
    return this.getBooleanAttribute('include_deleted');
  }
  public set includeDeleted(value: boolean | cdktf.IResolvable) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // previous - computed: true, optional: false, required: false
  public get previous() {
    return this.getStringAttribute('previous');
  }

  // tag_ids - computed: false, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return this.getListAttribute('tag_ids');
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // workspace_ids - computed: false, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return this.getListAttribute('workspace_ids');
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_deleted: cdktf.booleanToTerraform(this._includeDeleted),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_deleted: {
        value: cdktf.booleanToHclTerraform(this._includeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
