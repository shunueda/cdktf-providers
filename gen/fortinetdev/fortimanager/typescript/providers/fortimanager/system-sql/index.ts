// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#background_rebuild SystemSql#background_rebuild}
  */
  readonly backgroundRebuild?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#compress_table_min_age SystemSql#compress_table_min_age}
  */
  readonly compressTableMinAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#database_name SystemSql#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#database_type SystemSql#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#device_count_high SystemSql#device_count_high}
  */
  readonly deviceCountHigh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#dynamic_sort_subtable SystemSql#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#event_table_partition_time SystemSql#event_table_partition_time}
  */
  readonly eventTablePartitionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#fct_table_partition_time SystemSql#fct_table_partition_time}
  */
  readonly fctTablePartitionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#id SystemSql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#logtype SystemSql#logtype}
  */
  readonly logtype?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#password SystemSql#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#prompt_sql_upgrade SystemSql#prompt_sql_upgrade}
  */
  readonly promptSqlUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#rebuild_event SystemSql#rebuild_event}
  */
  readonly rebuildEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#rebuild_event_start_time SystemSql#rebuild_event_start_time}
  */
  readonly rebuildEventStartTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#server SystemSql#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#start_time SystemSql#start_time}
  */
  readonly startTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#status SystemSql#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#text_search_index SystemSql#text_search_index}
  */
  readonly textSearchIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#traffic_table_partition_time SystemSql#traffic_table_partition_time}
  */
  readonly trafficTablePartitionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#username SystemSql#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#utm_table_partition_time SystemSql#utm_table_partition_time}
  */
  readonly utmTablePartitionTime?: number;
  /**
  * custom_index block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#custom_index SystemSql#custom_index}
  */
  readonly customIndex?: SystemSqlCustomIndex[] | cdktf.IResolvable;
  /**
  * custom_skipidx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#custom_skipidx SystemSql#custom_skipidx}
  */
  readonly customSkipidx?: SystemSqlCustomSkipidx[] | cdktf.IResolvable;
  /**
  * ts_index_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#ts_index_field SystemSql#ts_index_field}
  */
  readonly tsIndexField?: SystemSqlTsIndexField[] | cdktf.IResolvable;
}
export interface SystemSqlCustomIndex {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#case_sensitive SystemSql#case_sensitive}
  */
  readonly caseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#device_type SystemSql#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#id SystemSql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#index_field SystemSql#index_field}
  */
  readonly indexField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#log_type SystemSql#log_type}
  */
  readonly logType?: string;
}

export function systemSqlCustomIndexToTerraform(struct?: SystemSqlCustomIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.stringToTerraform(struct!.caseSensitive),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    id: cdktf.numberToTerraform(struct!.id),
    index_field: cdktf.stringToTerraform(struct!.indexField),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


export function systemSqlCustomIndexToHclTerraform(struct?: SystemSqlCustomIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index_field: {
      value: cdktf.stringToHclTerraform(struct!.indexField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSqlCustomIndexOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSqlCustomIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._indexField !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexField = this._indexField;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSqlCustomIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._deviceType = undefined;
      this._id = undefined;
      this._indexField = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._deviceType = value.deviceType;
      this._id = value.id;
      this._indexField = value.indexField;
      this._logType = value.logType;
    }
  }

  // case_sensitive - computed: true, optional: true, required: false
  private _caseSensitive?: string; 
  public get caseSensitive() {
    return this.getStringAttribute('case_sensitive');
  }
  public set caseSensitive(value: string) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index_field - computed: false, optional: true, required: false
  private _indexField?: string; 
  public get indexField() {
    return this.getStringAttribute('index_field');
  }
  public set indexField(value: string) {
    this._indexField = value;
  }
  public resetIndexField() {
    this._indexField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldInput() {
    return this._indexField;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class SystemSqlCustomIndexList extends cdktf.ComplexList {
  public internalValue? : SystemSqlCustomIndex[] | cdktf.IResolvable

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
  public get(index: number): SystemSqlCustomIndexOutputReference {
    return new SystemSqlCustomIndexOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSqlCustomSkipidx {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#device_type SystemSql#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#id SystemSql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#index_field SystemSql#index_field}
  */
  readonly indexField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#log_type SystemSql#log_type}
  */
  readonly logType?: string;
}

export function systemSqlCustomSkipidxToTerraform(struct?: SystemSqlCustomSkipidx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    id: cdktf.numberToTerraform(struct!.id),
    index_field: cdktf.stringToTerraform(struct!.indexField),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}


export function systemSqlCustomSkipidxToHclTerraform(struct?: SystemSqlCustomSkipidx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    index_field: {
      value: cdktf.stringToHclTerraform(struct!.indexField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSqlCustomSkipidxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSqlCustomSkipidx | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._indexField !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexField = this._indexField;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSqlCustomSkipidx | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceType = undefined;
      this._id = undefined;
      this._indexField = undefined;
      this._logType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceType = value.deviceType;
      this._id = value.id;
      this._indexField = value.indexField;
      this._logType = value.logType;
    }
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index_field - computed: false, optional: true, required: false
  private _indexField?: string; 
  public get indexField() {
    return this.getStringAttribute('index_field');
  }
  public set indexField(value: string) {
    this._indexField = value;
  }
  public resetIndexField() {
    this._indexField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldInput() {
    return this._indexField;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }
}

export class SystemSqlCustomSkipidxList extends cdktf.ComplexList {
  public internalValue? : SystemSqlCustomSkipidx[] | cdktf.IResolvable

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
  public get(index: number): SystemSqlCustomSkipidxOutputReference {
    return new SystemSqlCustomSkipidxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSqlTsIndexField {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#category SystemSql#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#value SystemSql#value}
  */
  readonly value?: string;
}

export function systemSqlTsIndexFieldToTerraform(struct?: SystemSqlTsIndexField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function systemSqlTsIndexFieldToHclTerraform(struct?: SystemSqlTsIndexField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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

export class SystemSqlTsIndexFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSqlTsIndexField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSqlTsIndexField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._value = value.value;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SystemSqlTsIndexFieldList extends cdktf.ComplexList {
  public internalValue? : SystemSqlTsIndexField[] | cdktf.IResolvable

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
  public get(index: number): SystemSqlTsIndexFieldOutputReference {
    return new SystemSqlTsIndexFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql fortimanager_system_sql}
*/
export class SystemSql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_sql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSql to import
  * @param importFromId The id of the existing SystemSql that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_sql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_sql fortimanager_system_sql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSqlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSqlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_sql',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backgroundRebuild = config.backgroundRebuild;
    this._compressTableMinAge = config.compressTableMinAge;
    this._databaseName = config.databaseName;
    this._databaseType = config.databaseType;
    this._deviceCountHigh = config.deviceCountHigh;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eventTablePartitionTime = config.eventTablePartitionTime;
    this._fctTablePartitionTime = config.fctTablePartitionTime;
    this._id = config.id;
    this._logtype = config.logtype;
    this._password = config.password;
    this._promptSqlUpgrade = config.promptSqlUpgrade;
    this._rebuildEvent = config.rebuildEvent;
    this._rebuildEventStartTime = config.rebuildEventStartTime;
    this._server = config.server;
    this._startTime = config.startTime;
    this._status = config.status;
    this._textSearchIndex = config.textSearchIndex;
    this._trafficTablePartitionTime = config.trafficTablePartitionTime;
    this._username = config.username;
    this._utmTablePartitionTime = config.utmTablePartitionTime;
    this._customIndex.internalValue = config.customIndex;
    this._customSkipidx.internalValue = config.customSkipidx;
    this._tsIndexField.internalValue = config.tsIndexField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // background_rebuild - computed: true, optional: true, required: false
  private _backgroundRebuild?: string; 
  public get backgroundRebuild() {
    return this.getStringAttribute('background_rebuild');
  }
  public set backgroundRebuild(value: string) {
    this._backgroundRebuild = value;
  }
  public resetBackgroundRebuild() {
    this._backgroundRebuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundRebuildInput() {
    return this._backgroundRebuild;
  }

  // compress_table_min_age - computed: true, optional: true, required: false
  private _compressTableMinAge?: number; 
  public get compressTableMinAge() {
    return this.getNumberAttribute('compress_table_min_age');
  }
  public set compressTableMinAge(value: number) {
    this._compressTableMinAge = value;
  }
  public resetCompressTableMinAge() {
    this._compressTableMinAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressTableMinAgeInput() {
    return this._compressTableMinAge;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // database_type - computed: true, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // device_count_high - computed: true, optional: true, required: false
  private _deviceCountHigh?: string; 
  public get deviceCountHigh() {
    return this.getStringAttribute('device_count_high');
  }
  public set deviceCountHigh(value: string) {
    this._deviceCountHigh = value;
  }
  public resetDeviceCountHigh() {
    this._deviceCountHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCountHighInput() {
    return this._deviceCountHigh;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // event_table_partition_time - computed: false, optional: true, required: false
  private _eventTablePartitionTime?: number; 
  public get eventTablePartitionTime() {
    return this.getNumberAttribute('event_table_partition_time');
  }
  public set eventTablePartitionTime(value: number) {
    this._eventTablePartitionTime = value;
  }
  public resetEventTablePartitionTime() {
    this._eventTablePartitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTablePartitionTimeInput() {
    return this._eventTablePartitionTime;
  }

  // fct_table_partition_time - computed: true, optional: true, required: false
  private _fctTablePartitionTime?: number; 
  public get fctTablePartitionTime() {
    return this.getNumberAttribute('fct_table_partition_time');
  }
  public set fctTablePartitionTime(value: number) {
    this._fctTablePartitionTime = value;
  }
  public resetFctTablePartitionTime() {
    this._fctTablePartitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fctTablePartitionTimeInput() {
    return this._fctTablePartitionTime;
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

  // logtype - computed: true, optional: true, required: false
  private _logtype?: string[]; 
  public get logtype() {
    return cdktf.Fn.tolist(this.getListAttribute('logtype'));
  }
  public set logtype(value: string[]) {
    this._logtype = value;
  }
  public resetLogtype() {
    this._logtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtypeInput() {
    return this._logtype;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prompt_sql_upgrade - computed: true, optional: true, required: false
  private _promptSqlUpgrade?: string; 
  public get promptSqlUpgrade() {
    return this.getStringAttribute('prompt_sql_upgrade');
  }
  public set promptSqlUpgrade(value: string) {
    this._promptSqlUpgrade = value;
  }
  public resetPromptSqlUpgrade() {
    this._promptSqlUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptSqlUpgradeInput() {
    return this._promptSqlUpgrade;
  }

  // rebuild_event - computed: true, optional: true, required: false
  private _rebuildEvent?: string; 
  public get rebuildEvent() {
    return this.getStringAttribute('rebuild_event');
  }
  public set rebuildEvent(value: string) {
    this._rebuildEvent = value;
  }
  public resetRebuildEvent() {
    this._rebuildEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildEventInput() {
    return this._rebuildEvent;
  }

  // rebuild_event_start_time - computed: true, optional: true, required: false
  private _rebuildEventStartTime?: string[]; 
  public get rebuildEventStartTime() {
    return cdktf.Fn.tolist(this.getListAttribute('rebuild_event_start_time'));
  }
  public set rebuildEventStartTime(value: string[]) {
    this._rebuildEventStartTime = value;
  }
  public resetRebuildEventStartTime() {
    this._rebuildEventStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildEventStartTimeInput() {
    return this._rebuildEventStartTime;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string[]; 
  public get startTime() {
    return cdktf.Fn.tolist(this.getListAttribute('start_time'));
  }
  public set startTime(value: string[]) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // text_search_index - computed: true, optional: true, required: false
  private _textSearchIndex?: string; 
  public get textSearchIndex() {
    return this.getStringAttribute('text_search_index');
  }
  public set textSearchIndex(value: string) {
    this._textSearchIndex = value;
  }
  public resetTextSearchIndex() {
    this._textSearchIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textSearchIndexInput() {
    return this._textSearchIndex;
  }

  // traffic_table_partition_time - computed: false, optional: true, required: false
  private _trafficTablePartitionTime?: number; 
  public get trafficTablePartitionTime() {
    return this.getNumberAttribute('traffic_table_partition_time');
  }
  public set trafficTablePartitionTime(value: number) {
    this._trafficTablePartitionTime = value;
  }
  public resetTrafficTablePartitionTime() {
    this._trafficTablePartitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTablePartitionTimeInput() {
    return this._trafficTablePartitionTime;
  }

  // username - computed: false, optional: true, required: false
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

  // utm_table_partition_time - computed: false, optional: true, required: false
  private _utmTablePartitionTime?: number; 
  public get utmTablePartitionTime() {
    return this.getNumberAttribute('utm_table_partition_time');
  }
  public set utmTablePartitionTime(value: number) {
    this._utmTablePartitionTime = value;
  }
  public resetUtmTablePartitionTime() {
    this._utmTablePartitionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmTablePartitionTimeInput() {
    return this._utmTablePartitionTime;
  }

  // custom_index - computed: false, optional: true, required: false
  private _customIndex = new SystemSqlCustomIndexList(this, "custom_index", false);
  public get customIndex() {
    return this._customIndex;
  }
  public putCustomIndex(value: SystemSqlCustomIndex[] | cdktf.IResolvable) {
    this._customIndex.internalValue = value;
  }
  public resetCustomIndex() {
    this._customIndex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIndexInput() {
    return this._customIndex.internalValue;
  }

  // custom_skipidx - computed: false, optional: true, required: false
  private _customSkipidx = new SystemSqlCustomSkipidxList(this, "custom_skipidx", false);
  public get customSkipidx() {
    return this._customSkipidx;
  }
  public putCustomSkipidx(value: SystemSqlCustomSkipidx[] | cdktf.IResolvable) {
    this._customSkipidx.internalValue = value;
  }
  public resetCustomSkipidx() {
    this._customSkipidx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSkipidxInput() {
    return this._customSkipidx.internalValue;
  }

  // ts_index_field - computed: false, optional: true, required: false
  private _tsIndexField = new SystemSqlTsIndexFieldList(this, "ts_index_field", false);
  public get tsIndexField() {
    return this._tsIndexField;
  }
  public putTsIndexField(value: SystemSqlTsIndexField[] | cdktf.IResolvable) {
    this._tsIndexField.internalValue = value;
  }
  public resetTsIndexField() {
    this._tsIndexField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsIndexFieldInput() {
    return this._tsIndexField.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      background_rebuild: cdktf.stringToTerraform(this._backgroundRebuild),
      compress_table_min_age: cdktf.numberToTerraform(this._compressTableMinAge),
      database_name: cdktf.stringToTerraform(this._databaseName),
      database_type: cdktf.stringToTerraform(this._databaseType),
      device_count_high: cdktf.stringToTerraform(this._deviceCountHigh),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      event_table_partition_time: cdktf.numberToTerraform(this._eventTablePartitionTime),
      fct_table_partition_time: cdktf.numberToTerraform(this._fctTablePartitionTime),
      id: cdktf.stringToTerraform(this._id),
      logtype: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logtype),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      prompt_sql_upgrade: cdktf.stringToTerraform(this._promptSqlUpgrade),
      rebuild_event: cdktf.stringToTerraform(this._rebuildEvent),
      rebuild_event_start_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rebuildEventStartTime),
      server: cdktf.stringToTerraform(this._server),
      start_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      text_search_index: cdktf.stringToTerraform(this._textSearchIndex),
      traffic_table_partition_time: cdktf.numberToTerraform(this._trafficTablePartitionTime),
      username: cdktf.stringToTerraform(this._username),
      utm_table_partition_time: cdktf.numberToTerraform(this._utmTablePartitionTime),
      custom_index: cdktf.listMapper(systemSqlCustomIndexToTerraform, true)(this._customIndex.internalValue),
      custom_skipidx: cdktf.listMapper(systemSqlCustomSkipidxToTerraform, true)(this._customSkipidx.internalValue),
      ts_index_field: cdktf.listMapper(systemSqlTsIndexFieldToTerraform, true)(this._tsIndexField.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      background_rebuild: {
        value: cdktf.stringToHclTerraform(this._backgroundRebuild),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_table_min_age: {
        value: cdktf.numberToHclTerraform(this._compressTableMinAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_count_high: {
        value: cdktf.stringToHclTerraform(this._deviceCountHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_table_partition_time: {
        value: cdktf.numberToHclTerraform(this._eventTablePartitionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fct_table_partition_time: {
        value: cdktf.numberToHclTerraform(this._fctTablePartitionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logtype: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logtype),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prompt_sql_upgrade: {
        value: cdktf.stringToHclTerraform(this._promptSqlUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rebuild_event: {
        value: cdktf.stringToHclTerraform(this._rebuildEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rebuild_event_start_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rebuildEventStartTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._startTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text_search_index: {
        value: cdktf.stringToHclTerraform(this._textSearchIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_table_partition_time: {
        value: cdktf.numberToHclTerraform(this._trafficTablePartitionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utm_table_partition_time: {
        value: cdktf.numberToHclTerraform(this._utmTablePartitionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_index: {
        value: cdktf.listMapperHcl(systemSqlCustomIndexToHclTerraform, true)(this._customIndex.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSqlCustomIndexList",
      },
      custom_skipidx: {
        value: cdktf.listMapperHcl(systemSqlCustomSkipidxToHclTerraform, true)(this._customSkipidx.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSqlCustomSkipidxList",
      },
      ts_index_field: {
        value: cdktf.listMapperHcl(systemSqlTsIndexFieldToHclTerraform, true)(this._tsIndexField.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSqlTsIndexFieldList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
