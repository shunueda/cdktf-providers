// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAirbyteConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connection#connection_id DataAirbyteConnection#connection_id}
  */
  readonly connectionId: string;
}
export interface DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAes | undefined) {
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
export interface DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsa | undefined) {
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
export interface DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryption {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aes - computed: true, optional: false, required: false
  private _aes = new DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionAesOutputReference(this, "aes");
  public get aes() {
    return this._aes;
  }

  // rsa - computed: true, optional: false, required: false
  private _rsa = new DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionRsaOutputReference(this, "rsa");
  public get rsa() {
    return this._rsa;
  }
}
export interface DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenaming | undefined) {
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
export interface DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashing {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashingToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashingToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashing | undefined) {
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
export interface DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFilteringToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFilteringToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFilteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFiltering | undefined) {
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
export interface DataAirbyteConnectionConfigurationsStreamsMappersMapperConfiguration {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappersMapperConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappersMapperConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // field_renaming - computed: true, optional: false, required: false
  private _fieldRenaming = new DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationFieldRenamingOutputReference(this, "field_renaming");
  public get fieldRenaming() {
    return this._fieldRenaming;
  }

  // hashing - computed: true, optional: false, required: false
  private _hashing = new DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationHashingOutputReference(this, "hashing");
  public get hashing() {
    return this._hashing;
  }

  // row_filtering - computed: true, optional: false, required: false
  private _rowFiltering = new DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationRowFilteringOutputReference(this, "row_filtering");
  public get rowFiltering() {
    return this._rowFiltering;
  }
}
export interface DataAirbyteConnectionConfigurationsStreamsMappers {
}

export function dataAirbyteConnectionConfigurationsStreamsMappersToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsMappersToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsMappers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsMappers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsMappers | undefined) {
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
  private _mapperConfiguration = new DataAirbyteConnectionConfigurationsStreamsMappersMapperConfigurationOutputReference(this, "mapper_configuration");
  public get mapperConfiguration() {
    return this._mapperConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAirbyteConnectionConfigurationsStreamsMappersList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionConfigurationsStreamsMappersOutputReference {
    return new DataAirbyteConnectionConfigurationsStreamsMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAirbyteConnectionConfigurationsStreamsSelectedFields {
}

export function dataAirbyteConnectionConfigurationsStreamsSelectedFieldsToTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsSelectedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsSelectedFieldsToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreamsSelectedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsSelectedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionConfigurationsStreamsSelectedFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreamsSelectedFields | undefined) {
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

export class DataAirbyteConnectionConfigurationsStreamsSelectedFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionConfigurationsStreamsSelectedFieldsOutputReference {
    return new DataAirbyteConnectionConfigurationsStreamsSelectedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAirbyteConnectionConfigurationsStreams {
}

export function dataAirbyteConnectionConfigurationsStreamsToTerraform(struct?: DataAirbyteConnectionConfigurationsStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsStreamsToHclTerraform(struct?: DataAirbyteConnectionConfigurationsStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionConfigurationsStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurationsStreams | undefined) {
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
  private _mappers = new DataAirbyteConnectionConfigurationsStreamsMappersList(this, "mappers", false);
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
  private _selectedFields = new DataAirbyteConnectionConfigurationsStreamsSelectedFieldsList(this, "selected_fields", false);
  public get selectedFields() {
    return this._selectedFields;
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
}

export class DataAirbyteConnectionConfigurationsStreamsList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionConfigurationsStreamsOutputReference {
    return new DataAirbyteConnectionConfigurationsStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAirbyteConnectionConfigurations {
}

export function dataAirbyteConnectionConfigurationsToTerraform(struct?: DataAirbyteConnectionConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionConfigurationsToHclTerraform(struct?: DataAirbyteConnectionConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // streams - computed: true, optional: false, required: false
  private _streams = new DataAirbyteConnectionConfigurationsStreamsList(this, "streams", true);
  public get streams() {
    return this._streams;
  }
}
export interface DataAirbyteConnectionSchedule {
}

export function dataAirbyteConnectionScheduleToTerraform(struct?: DataAirbyteConnectionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionScheduleToHclTerraform(struct?: DataAirbyteConnectionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAirbyteConnectionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionSchedule | undefined) {
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
export interface DataAirbyteConnectionTags {
}

export function dataAirbyteConnectionTagsToTerraform(struct?: DataAirbyteConnectionTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAirbyteConnectionTagsToHclTerraform(struct?: DataAirbyteConnectionTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAirbyteConnectionTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAirbyteConnectionTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAirbyteConnectionTags | undefined) {
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

export class DataAirbyteConnectionTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAirbyteConnectionTagsOutputReference {
    return new DataAirbyteConnectionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connection airbyte_connection}
*/
export class DataAirbyteConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAirbyteConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAirbyteConnection to import
  * @param importFromId The id of the existing DataAirbyteConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAirbyteConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/connection airbyte_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAirbyteConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAirbyteConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_connection',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataAirbyteConnectionConfigurationsOutputReference(this, "configurations");
  public get configurations() {
    return this._configurations;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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
  private _schedule = new DataAirbyteConnectionScheduleOutputReference(this, "schedule");
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
  private _tags = new DataAirbyteConnectionTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
