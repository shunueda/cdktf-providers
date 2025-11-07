// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/data_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateDataStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique ID for the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/data_store#data_store_id DataPingfederateDataStore#data_store_id}
  */
  readonly dataStoreId: string;
}
export interface DataPingfederateDataStoreCustomDataStoreConfigurationFields {
}

export function dataPingfederateDataStoreCustomDataStoreConfigurationFieldsToTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStoreConfigurationFieldsToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStoreConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateDataStoreCustomDataStoreConfigurationFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStoreConfigurationFields | undefined) {
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

export class DataPingfederateDataStoreCustomDataStoreConfigurationFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateDataStoreCustomDataStoreConfigurationFieldsOutputReference {
    return new DataPingfederateDataStoreCustomDataStoreConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFields {
}

export function dataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFieldsToTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFieldsToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFields | undefined) {
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

export class DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFieldsOutputReference {
    return new DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateDataStoreCustomDataStoreConfigurationTablesRows {
}

export function dataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsToTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationTablesRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationTablesRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateDataStoreCustomDataStoreConfigurationTablesRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStoreConfigurationTablesRows | undefined) {
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
  private _fields = new DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
}

export class DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsOutputReference {
    return new DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateDataStoreCustomDataStoreConfigurationTables {
}

export function dataPingfederateDataStoreCustomDataStoreConfigurationTablesToTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStoreConfigurationTablesToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfigurationTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStoreConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateDataStoreCustomDataStoreConfigurationTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStoreConfigurationTables | undefined) {
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
  private _rows = new DataPingfederateDataStoreCustomDataStoreConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
}

export class DataPingfederateDataStoreCustomDataStoreConfigurationTablesList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateDataStoreCustomDataStoreConfigurationTablesOutputReference {
    return new DataPingfederateDataStoreCustomDataStoreConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateDataStoreCustomDataStoreConfiguration {
}

export function dataPingfederateDataStoreCustomDataStoreConfigurationToTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStoreConfigurationToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStoreConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStoreConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStoreCustomDataStoreConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStoreConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataPingfederateDataStoreCustomDataStoreConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }

  // tables - computed: true, optional: false, required: false
  private _tables = new DataPingfederateDataStoreCustomDataStoreConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
}
export interface DataPingfederateDataStoreCustomDataStoreParentRef {
}

export function dataPingfederateDataStoreCustomDataStoreParentRefToTerraform(struct?: DataPingfederateDataStoreCustomDataStoreParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStoreParentRefToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStoreParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStoreParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStoreCustomDataStoreParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStoreParentRef | undefined) {
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
export interface DataPingfederateDataStoreCustomDataStorePluginDescriptorRef {
}

export function dataPingfederateDataStoreCustomDataStorePluginDescriptorRefToTerraform(struct?: DataPingfederateDataStoreCustomDataStorePluginDescriptorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStorePluginDescriptorRefToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStorePluginDescriptorRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStorePluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStoreCustomDataStorePluginDescriptorRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStorePluginDescriptorRef | undefined) {
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
export interface DataPingfederateDataStoreCustomDataStore {
}

export function dataPingfederateDataStoreCustomDataStoreToTerraform(struct?: DataPingfederateDataStoreCustomDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreCustomDataStoreToHclTerraform(struct?: DataPingfederateDataStoreCustomDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreCustomDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStoreCustomDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreCustomDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataPingfederateDataStoreCustomDataStoreConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataPingfederateDataStoreCustomDataStoreParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }

  // plugin_descriptor_ref - computed: true, optional: false, required: false
  private _pluginDescriptorRef = new DataPingfederateDataStoreCustomDataStorePluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateDataStoreJdbcDataStoreConnectionUrlTags {
}

export function dataPingfederateDataStoreJdbcDataStoreConnectionUrlTagsToTerraform(struct?: DataPingfederateDataStoreJdbcDataStoreConnectionUrlTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreJdbcDataStoreConnectionUrlTagsToHclTerraform(struct?: DataPingfederateDataStoreJdbcDataStoreConnectionUrlTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreJdbcDataStoreConnectionUrlTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateDataStoreJdbcDataStoreConnectionUrlTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreJdbcDataStoreConnectionUrlTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // default_source - computed: true, optional: false, required: false
  public get defaultSource() {
    return this.getBooleanAttribute('default_source');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }
}

export class DataPingfederateDataStoreJdbcDataStoreConnectionUrlTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateDataStoreJdbcDataStoreConnectionUrlTagsOutputReference {
    return new DataPingfederateDataStoreJdbcDataStoreConnectionUrlTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateDataStoreJdbcDataStore {
}

export function dataPingfederateDataStoreJdbcDataStoreToTerraform(struct?: DataPingfederateDataStoreJdbcDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreJdbcDataStoreToHclTerraform(struct?: DataPingfederateDataStoreJdbcDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreJdbcDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStoreJdbcDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreJdbcDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_multi_value_attributes - computed: true, optional: false, required: false
  public get allowMultiValueAttributes() {
    return this.getBooleanAttribute('allow_multi_value_attributes');
  }

  // blocking_timeout - computed: true, optional: false, required: false
  public get blockingTimeout() {
    return this.getNumberAttribute('blocking_timeout');
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // connection_url_tags - computed: true, optional: false, required: false
  private _connectionUrlTags = new DataPingfederateDataStoreJdbcDataStoreConnectionUrlTagsList(this, "connection_url_tags", true);
  public get connectionUrlTags() {
    return this._connectionUrlTags;
  }

  // driver_class - computed: true, optional: false, required: false
  public get driverClass() {
    return this.getStringAttribute('driver_class');
  }

  // encrypted_password - computed: true, optional: false, required: false
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // max_pool_size - computed: true, optional: false, required: false
  public get maxPoolSize() {
    return this.getNumberAttribute('max_pool_size');
  }

  // min_pool_size - computed: true, optional: false, required: false
  public get minPoolSize() {
    return this.getNumberAttribute('min_pool_size');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // validate_connection_sql - computed: true, optional: false, required: false
  public get validateConnectionSql() {
    return this.getStringAttribute('validate_connection_sql');
  }
}
export interface DataPingfederateDataStoreLdapDataStoreClientTlsCertificateRef {
}

export function dataPingfederateDataStoreLdapDataStoreClientTlsCertificateRefToTerraform(struct?: DataPingfederateDataStoreLdapDataStoreClientTlsCertificateRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreLdapDataStoreClientTlsCertificateRefToHclTerraform(struct?: DataPingfederateDataStoreLdapDataStoreClientTlsCertificateRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreLdapDataStoreClientTlsCertificateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStoreLdapDataStoreClientTlsCertificateRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreLdapDataStoreClientTlsCertificateRef | undefined) {
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
export interface DataPingfederateDataStoreLdapDataStoreHostnamesTags {
}

export function dataPingfederateDataStoreLdapDataStoreHostnamesTagsToTerraform(struct?: DataPingfederateDataStoreLdapDataStoreHostnamesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStoreLdapDataStoreHostnamesTagsToHclTerraform(struct?: DataPingfederateDataStoreLdapDataStoreHostnamesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStoreLdapDataStoreHostnamesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateDataStoreLdapDataStoreHostnamesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreLdapDataStoreHostnamesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_source - computed: true, optional: false, required: false
  public get defaultSource() {
    return this.getBooleanAttribute('default_source');
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }
}

export class DataPingfederateDataStoreLdapDataStoreHostnamesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateDataStoreLdapDataStoreHostnamesTagsOutputReference {
    return new DataPingfederateDataStoreLdapDataStoreHostnamesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateDataStoreLdapDataStore {
  /**
  * The data store name with a unique value across all data sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/data_store#name DataPingfederateDataStore#name}
  */
  readonly name?: string;
}

export function dataPingfederateDataStoreLdapDataStoreToTerraform(struct?: DataPingfederateDataStoreLdapDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPingfederateDataStoreLdapDataStoreToHclTerraform(struct?: DataPingfederateDataStoreLdapDataStore): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPingfederateDataStoreLdapDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStoreLdapDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStoreLdapDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // binary_attributes - computed: true, optional: false, required: false
  public get binaryAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('binary_attributes'));
  }

  // bind_anonymously - computed: true, optional: false, required: false
  public get bindAnonymously() {
    return this.getBooleanAttribute('bind_anonymously');
  }

  // client_tls_certificate_ref - computed: true, optional: false, required: false
  private _clientTlsCertificateRef = new DataPingfederateDataStoreLdapDataStoreClientTlsCertificateRefOutputReference(this, "client_tls_certificate_ref");
  public get clientTlsCertificateRef() {
    return this._clientTlsCertificateRef;
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // create_if_necessary - computed: true, optional: false, required: false
  public get createIfNecessary() {
    return this.getBooleanAttribute('create_if_necessary');
  }

  // dns_ttl - computed: true, optional: false, required: false
  public get dnsTtl() {
    return this.getNumberAttribute('dns_ttl');
  }

  // encrypted_password - computed: true, optional: false, required: false
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }

  // follow_ldap_referrals - computed: true, optional: false, required: false
  public get followLdapReferrals() {
    return this.getBooleanAttribute('follow_ldap_referrals');
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // hostnames_tags - computed: true, optional: false, required: false
  private _hostnamesTags = new DataPingfederateDataStoreLdapDataStoreHostnamesTagsList(this, "hostnames_tags", true);
  public get hostnamesTags() {
    return this._hostnamesTags;
  }

  // ldap_dns_srv_prefix - computed: true, optional: false, required: false
  public get ldapDnsSrvPrefix() {
    return this.getStringAttribute('ldap_dns_srv_prefix');
  }

  // ldap_type - computed: true, optional: false, required: false
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }

  // ldaps_dns_srv_prefix - computed: true, optional: false, required: false
  public get ldapsDnsSrvPrefix() {
    return this.getStringAttribute('ldaps_dns_srv_prefix');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_wait - computed: true, optional: false, required: false
  public get maxWait() {
    return this.getNumberAttribute('max_wait');
  }

  // min_connections - computed: true, optional: false, required: false
  public get minConnections() {
    return this.getNumberAttribute('min_connections');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // retry_failed_operations - computed: true, optional: false, required: false
  public get retryFailedOperations() {
    return this.getBooleanAttribute('retry_failed_operations');
  }

  // test_on_borrow - computed: true, optional: false, required: false
  public get testOnBorrow() {
    return this.getBooleanAttribute('test_on_borrow');
  }

  // test_on_return - computed: true, optional: false, required: false
  public get testOnReturn() {
    return this.getBooleanAttribute('test_on_return');
  }

  // time_between_evictions - computed: true, optional: false, required: false
  public get timeBetweenEvictions() {
    return this.getNumberAttribute('time_between_evictions');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_dns_srv_records - computed: true, optional: false, required: false
  public get useDnsSrvRecords() {
    return this.getBooleanAttribute('use_dns_srv_records');
  }

  // use_ssl - computed: true, optional: false, required: false
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }

  // use_start_tls - computed: true, optional: false, required: false
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }

  // user_dn - computed: true, optional: false, required: false
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }

  // verify_host - computed: true, optional: false, required: false
  public get verifyHost() {
    return this.getBooleanAttribute('verify_host');
  }
}
export interface DataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRef {
}

export function dataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRefToTerraform(struct?: DataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRefToHclTerraform(struct?: DataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRef | undefined) {
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
export interface DataPingfederateDataStorePingOneLdapGatewayDataStore {
}

export function dataPingfederateDataStorePingOneLdapGatewayDataStoreToTerraform(struct?: DataPingfederateDataStorePingOneLdapGatewayDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateDataStorePingOneLdapGatewayDataStoreToHclTerraform(struct?: DataPingfederateDataStorePingOneLdapGatewayDataStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateDataStorePingOneLdapGatewayDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateDataStorePingOneLdapGatewayDataStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateDataStorePingOneLdapGatewayDataStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_attributes - computed: true, optional: false, required: false
  public get binaryAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('binary_attributes'));
  }

  // ldap_type - computed: true, optional: false, required: false
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ping_one_connection_ref - computed: true, optional: false, required: false
  private _pingOneConnectionRef = new DataPingfederateDataStorePingOneLdapGatewayDataStorePingOneConnectionRefOutputReference(this, "ping_one_connection_ref");
  public get pingOneConnectionRef() {
    return this._pingOneConnectionRef;
  }

  // ping_one_environment_id - computed: true, optional: false, required: false
  public get pingOneEnvironmentId() {
    return this.getStringAttribute('ping_one_environment_id');
  }

  // ping_one_ldap_gateway_id - computed: true, optional: false, required: false
  public get pingOneLdapGatewayId() {
    return this.getStringAttribute('ping_one_ldap_gateway_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_ssl - computed: true, optional: false, required: false
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }

  // use_start_tls - computed: true, optional: false, required: false
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/data_store pingfederate_data_store}
*/
export class DataPingfederateDataStore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_data_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateDataStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateDataStore to import
  * @param importFromId The id of the existing DataPingfederateDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/data_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateDataStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_data_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/data_store pingfederate_data_store} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateDataStoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateDataStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_data_store',
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
    this._dataStoreId = config.dataStoreId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_data_store - computed: true, optional: false, required: false
  private _customDataStore = new DataPingfederateDataStoreCustomDataStoreOutputReference(this, "custom_data_store");
  public get customDataStore() {
    return this._customDataStore;
  }

  // data_store_id - computed: false, optional: false, required: true
  private _dataStoreId?: string; 
  public get dataStoreId() {
    return this.getStringAttribute('data_store_id');
  }
  public set dataStoreId(value: string) {
    this._dataStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdInput() {
    return this._dataStoreId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jdbc_data_store - computed: true, optional: false, required: false
  private _jdbcDataStore = new DataPingfederateDataStoreJdbcDataStoreOutputReference(this, "jdbc_data_store");
  public get jdbcDataStore() {
    return this._jdbcDataStore;
  }

  // ldap_data_store - computed: true, optional: false, required: false
  private _ldapDataStore = new DataPingfederateDataStoreLdapDataStoreOutputReference(this, "ldap_data_store");
  public get ldapDataStore() {
    return this._ldapDataStore;
  }

  // mask_attribute_values - computed: true, optional: false, required: false
  public get maskAttributeValues() {
    return this.getBooleanAttribute('mask_attribute_values');
  }

  // ping_one_ldap_gateway_data_store - computed: true, optional: false, required: false
  private _pingOneLdapGatewayDataStore = new DataPingfederateDataStorePingOneLdapGatewayDataStoreOutputReference(this, "ping_one_ldap_gateway_data_store");
  public get pingOneLdapGatewayDataStore() {
    return this._pingOneLdapGatewayDataStore;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_store_id: cdktf.stringToTerraform(this._dataStoreId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_store_id: {
        value: cdktf.stringToHclTerraform(this._dataStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
