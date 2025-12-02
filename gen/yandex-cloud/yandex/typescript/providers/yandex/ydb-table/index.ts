// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YdbTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of table attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#attributes YdbTable#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Connection string for database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#connection_string YdbTable#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#id YdbTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use the Bloom filter for the primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#key_bloom_filter YdbTable#key_bloom_filter}
  */
  readonly keyBloomFilter?: boolean | cdktf.IResolvable;
  /**
  * Table path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#path YdbTable#path}
  */
  readonly path: string;
  /**
  * A list of table columns to be used as primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#primary_key YdbTable#primary_key}
  */
  readonly primaryKey: string[];
  /**
  * Read replication settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#read_replicas_settings YdbTable#read_replicas_settings}
  */
  readonly readReplicasSettings?: string;
  /**
  * Table storage type. Set to `column` for column-oriented tables. Omit for row-oriented tables (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#store YdbTable#store}
  */
  readonly store?: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#column YdbTable#column}
  */
  readonly column: YdbTableColumn[] | cdktf.IResolvable;
  /**
  * family block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#family YdbTable#family}
  */
  readonly family?: YdbTableFamily[] | cdktf.IResolvable;
  /**
  * partitioning_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#partitioning_settings YdbTable#partitioning_settings}
  */
  readonly partitioningSettings?: YdbTablePartitioningSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#timeouts YdbTable#timeouts}
  */
  readonly timeouts?: YdbTableTimeouts;
  /**
  * ttl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#ttl YdbTable#ttl}
  */
  readonly ttl?: YdbTableTtl;
}
export interface YdbTableColumn {
  /**
  * Column group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#family YdbTable#family}
  */
  readonly family?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#name YdbTable#name}
  */
  readonly name: string;
  /**
  * A column cannot have the NULL data type. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#not_null YdbTable#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
  /**
  * Column data type. YQL data types are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#type YdbTable#type}
  */
  readonly type: string;
}

export function ydbTableColumnToTerraform(struct?: YdbTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    name: cdktf.stringToTerraform(struct!.name),
    not_null: cdktf.booleanToTerraform(struct!.notNull),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ydbTableColumnToHclTerraform(struct?: YdbTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
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
    not_null: {
      value: cdktf.booleanToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class YdbTableColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YdbTableColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._name = undefined;
      this._notNull = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._name = value.name;
      this._notNull = value.notNull;
      this._type = value.type;
    }
  }

  // family - computed: true, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // not_null - computed: true, optional: true, required: false
  private _notNull?: boolean | cdktf.IResolvable; 
  public get notNull() {
    return this.getBooleanAttribute('not_null');
  }
  public set notNull(value: boolean | cdktf.IResolvable) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
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

export class YdbTableColumnList extends cdktf.ComplexList {
  public internalValue? : YdbTableColumn[] | cdktf.IResolvable

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
  public get(index: number): YdbTableColumnOutputReference {
    return new YdbTableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YdbTableFamily {
  /**
  * Data codec (acceptable values: off, lz4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#compression YdbTable#compression}
  */
  readonly compression: string;
  /**
  * Type of storage device for column data in this group (acceptable values: ssd, rot (from HDD spindle rotation)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#data YdbTable#data}
  */
  readonly data: string;
  /**
  * Column family name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#name YdbTable#name}
  */
  readonly name: string;
}

export function ydbTableFamilyToTerraform(struct?: YdbTableFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ydbTableFamilyToHclTerraform(struct?: YdbTableFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
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

export class YdbTableFamilyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YdbTableFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTableFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._data = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._data = value.data;
      this._name = value.name;
    }
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

export class YdbTableFamilyList extends cdktf.ComplexList {
  public internalValue? : YdbTableFamily[] | cdktf.IResolvable

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
  public get(index: number): YdbTableFamilyOutputReference {
    return new YdbTableFamilyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YdbTablePartitioningSettingsPartitionAtKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#keys YdbTable#keys}
  */
  readonly keys: string[];
}

export function ydbTablePartitioningSettingsPartitionAtKeysToTerraform(struct?: YdbTablePartitioningSettingsPartitionAtKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function ydbTablePartitioningSettingsPartitionAtKeysToHclTerraform(struct?: YdbTablePartitioningSettingsPartitionAtKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbTablePartitioningSettingsPartitionAtKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YdbTablePartitioningSettingsPartitionAtKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTablePartitioningSettingsPartitionAtKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}

export class YdbTablePartitioningSettingsPartitionAtKeysList extends cdktf.ComplexList {
  public internalValue? : YdbTablePartitioningSettingsPartitionAtKeys[] | cdktf.IResolvable

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
  public get(index: number): YdbTablePartitioningSettingsPartitionAtKeysOutputReference {
    return new YdbTablePartitioningSettingsPartitionAtKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YdbTablePartitioningSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#auto_partitioning_by_load YdbTable#auto_partitioning_by_load}
  */
  readonly autoPartitioningByLoad?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#auto_partitioning_by_size_enabled YdbTable#auto_partitioning_by_size_enabled}
  */
  readonly autoPartitioningBySizeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#auto_partitioning_max_partitions_count YdbTable#auto_partitioning_max_partitions_count}
  */
  readonly autoPartitioningMaxPartitionsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#auto_partitioning_min_partitions_count YdbTable#auto_partitioning_min_partitions_count}
  */
  readonly autoPartitioningMinPartitionsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#auto_partitioning_partition_size_mb YdbTable#auto_partitioning_partition_size_mb}
  */
  readonly autoPartitioningPartitionSizeMb?: number;
  /**
  * Partitioning keys constitute a subset of the table's primary keys. If not set, primary keys will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#partition_by YdbTable#partition_by}
  */
  readonly partitionBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#uniform_partitions YdbTable#uniform_partitions}
  */
  readonly uniformPartitions?: number;
  /**
  * partition_at_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#partition_at_keys YdbTable#partition_at_keys}
  */
  readonly partitionAtKeys?: YdbTablePartitioningSettingsPartitionAtKeys[] | cdktf.IResolvable;
}

export function ydbTablePartitioningSettingsToTerraform(struct?: YdbTablePartitioningSettingsOutputReference | YdbTablePartitioningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_partitioning_by_load: cdktf.booleanToTerraform(struct!.autoPartitioningByLoad),
    auto_partitioning_by_size_enabled: cdktf.booleanToTerraform(struct!.autoPartitioningBySizeEnabled),
    auto_partitioning_max_partitions_count: cdktf.numberToTerraform(struct!.autoPartitioningMaxPartitionsCount),
    auto_partitioning_min_partitions_count: cdktf.numberToTerraform(struct!.autoPartitioningMinPartitionsCount),
    auto_partitioning_partition_size_mb: cdktf.numberToTerraform(struct!.autoPartitioningPartitionSizeMb),
    partition_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.partitionBy),
    uniform_partitions: cdktf.numberToTerraform(struct!.uniformPartitions),
    partition_at_keys: cdktf.listMapper(ydbTablePartitioningSettingsPartitionAtKeysToTerraform, true)(struct!.partitionAtKeys),
  }
}


export function ydbTablePartitioningSettingsToHclTerraform(struct?: YdbTablePartitioningSettingsOutputReference | YdbTablePartitioningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_partitioning_by_load: {
      value: cdktf.booleanToHclTerraform(struct!.autoPartitioningByLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_partitioning_by_size_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoPartitioningBySizeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_partitioning_max_partitions_count: {
      value: cdktf.numberToHclTerraform(struct!.autoPartitioningMaxPartitionsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_partitioning_min_partitions_count: {
      value: cdktf.numberToHclTerraform(struct!.autoPartitioningMinPartitionsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_partitioning_partition_size_mb: {
      value: cdktf.numberToHclTerraform(struct!.autoPartitioningPartitionSizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.partitionBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uniform_partitions: {
      value: cdktf.numberToHclTerraform(struct!.uniformPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_at_keys: {
      value: cdktf.listMapperHcl(ydbTablePartitioningSettingsPartitionAtKeysToHclTerraform, true)(struct!.partitionAtKeys),
      isBlock: true,
      type: "list",
      storageClassType: "YdbTablePartitioningSettingsPartitionAtKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbTablePartitioningSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbTablePartitioningSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPartitioningByLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPartitioningByLoad = this._autoPartitioningByLoad;
    }
    if (this._autoPartitioningBySizeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPartitioningBySizeEnabled = this._autoPartitioningBySizeEnabled;
    }
    if (this._autoPartitioningMaxPartitionsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPartitioningMaxPartitionsCount = this._autoPartitioningMaxPartitionsCount;
    }
    if (this._autoPartitioningMinPartitionsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPartitioningMinPartitionsCount = this._autoPartitioningMinPartitionsCount;
    }
    if (this._autoPartitioningPartitionSizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPartitioningPartitionSizeMb = this._autoPartitioningPartitionSizeMb;
    }
    if (this._partitionBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionBy = this._partitionBy;
    }
    if (this._uniformPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformPartitions = this._uniformPartitions;
    }
    if (this._partitionAtKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionAtKeys = this._partitionAtKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTablePartitioningSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPartitioningByLoad = undefined;
      this._autoPartitioningBySizeEnabled = undefined;
      this._autoPartitioningMaxPartitionsCount = undefined;
      this._autoPartitioningMinPartitionsCount = undefined;
      this._autoPartitioningPartitionSizeMb = undefined;
      this._partitionBy = undefined;
      this._uniformPartitions = undefined;
      this._partitionAtKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPartitioningByLoad = value.autoPartitioningByLoad;
      this._autoPartitioningBySizeEnabled = value.autoPartitioningBySizeEnabled;
      this._autoPartitioningMaxPartitionsCount = value.autoPartitioningMaxPartitionsCount;
      this._autoPartitioningMinPartitionsCount = value.autoPartitioningMinPartitionsCount;
      this._autoPartitioningPartitionSizeMb = value.autoPartitioningPartitionSizeMb;
      this._partitionBy = value.partitionBy;
      this._uniformPartitions = value.uniformPartitions;
      this._partitionAtKeys.internalValue = value.partitionAtKeys;
    }
  }

  // auto_partitioning_by_load - computed: false, optional: true, required: false
  private _autoPartitioningByLoad?: boolean | cdktf.IResolvable; 
  public get autoPartitioningByLoad() {
    return this.getBooleanAttribute('auto_partitioning_by_load');
  }
  public set autoPartitioningByLoad(value: boolean | cdktf.IResolvable) {
    this._autoPartitioningByLoad = value;
  }
  public resetAutoPartitioningByLoad() {
    this._autoPartitioningByLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningByLoadInput() {
    return this._autoPartitioningByLoad;
  }

  // auto_partitioning_by_size_enabled - computed: false, optional: true, required: false
  private _autoPartitioningBySizeEnabled?: boolean | cdktf.IResolvable; 
  public get autoPartitioningBySizeEnabled() {
    return this.getBooleanAttribute('auto_partitioning_by_size_enabled');
  }
  public set autoPartitioningBySizeEnabled(value: boolean | cdktf.IResolvable) {
    this._autoPartitioningBySizeEnabled = value;
  }
  public resetAutoPartitioningBySizeEnabled() {
    this._autoPartitioningBySizeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningBySizeEnabledInput() {
    return this._autoPartitioningBySizeEnabled;
  }

  // auto_partitioning_max_partitions_count - computed: true, optional: true, required: false
  private _autoPartitioningMaxPartitionsCount?: number; 
  public get autoPartitioningMaxPartitionsCount() {
    return this.getNumberAttribute('auto_partitioning_max_partitions_count');
  }
  public set autoPartitioningMaxPartitionsCount(value: number) {
    this._autoPartitioningMaxPartitionsCount = value;
  }
  public resetAutoPartitioningMaxPartitionsCount() {
    this._autoPartitioningMaxPartitionsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningMaxPartitionsCountInput() {
    return this._autoPartitioningMaxPartitionsCount;
  }

  // auto_partitioning_min_partitions_count - computed: true, optional: true, required: false
  private _autoPartitioningMinPartitionsCount?: number; 
  public get autoPartitioningMinPartitionsCount() {
    return this.getNumberAttribute('auto_partitioning_min_partitions_count');
  }
  public set autoPartitioningMinPartitionsCount(value: number) {
    this._autoPartitioningMinPartitionsCount = value;
  }
  public resetAutoPartitioningMinPartitionsCount() {
    this._autoPartitioningMinPartitionsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningMinPartitionsCountInput() {
    return this._autoPartitioningMinPartitionsCount;
  }

  // auto_partitioning_partition_size_mb - computed: true, optional: true, required: false
  private _autoPartitioningPartitionSizeMb?: number; 
  public get autoPartitioningPartitionSizeMb() {
    return this.getNumberAttribute('auto_partitioning_partition_size_mb');
  }
  public set autoPartitioningPartitionSizeMb(value: number) {
    this._autoPartitioningPartitionSizeMb = value;
  }
  public resetAutoPartitioningPartitionSizeMb() {
    this._autoPartitioningPartitionSizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningPartitionSizeMbInput() {
    return this._autoPartitioningPartitionSizeMb;
  }

  // partition_by - computed: true, optional: true, required: false
  private _partitionBy?: string[]; 
  public get partitionBy() {
    return this.getListAttribute('partition_by');
  }
  public set partitionBy(value: string[]) {
    this._partitionBy = value;
  }
  public resetPartitionBy() {
    this._partitionBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy;
  }

  // uniform_partitions - computed: true, optional: true, required: false
  private _uniformPartitions?: number; 
  public get uniformPartitions() {
    return this.getNumberAttribute('uniform_partitions');
  }
  public set uniformPartitions(value: number) {
    this._uniformPartitions = value;
  }
  public resetUniformPartitions() {
    this._uniformPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformPartitionsInput() {
    return this._uniformPartitions;
  }

  // partition_at_keys - computed: false, optional: true, required: false
  private _partitionAtKeys = new YdbTablePartitioningSettingsPartitionAtKeysList(this, "partition_at_keys", false);
  public get partitionAtKeys() {
    return this._partitionAtKeys;
  }
  public putPartitionAtKeys(value: YdbTablePartitioningSettingsPartitionAtKeys[] | cdktf.IResolvable) {
    this._partitionAtKeys.internalValue = value;
  }
  public resetPartitionAtKeys() {
    this._partitionAtKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionAtKeysInput() {
    return this._partitionAtKeys.internalValue;
  }
}
export interface YdbTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#create YdbTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#default YdbTable#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#delete YdbTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#read YdbTable#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#update YdbTable#update}
  */
  readonly update?: string;
}

export function ydbTableTimeoutsToTerraform(struct?: YdbTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ydbTableTimeoutsToHclTerraform(struct?: YdbTableTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class YdbTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YdbTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: YdbTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface YdbTableTtl {
  /**
  * Column name for TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#column_name YdbTable#column_name}
  */
  readonly columnName: string;
  /**
  * Interval in the ISO 8601 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#expire_interval YdbTable#expire_interval}
  */
  readonly expireInterval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#unit YdbTable#unit}
  */
  readonly unit?: string;
}

export function ydbTableTtlToTerraform(struct?: YdbTableTtlOutputReference | YdbTableTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    expire_interval: cdktf.stringToTerraform(struct!.expireInterval),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function ydbTableTtlToHclTerraform(struct?: YdbTableTtlOutputReference | YdbTableTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_interval: {
      value: cdktf.stringToHclTerraform(struct!.expireInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbTableTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbTableTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._expireInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireInterval = this._expireInterval;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTableTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._expireInterval = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._expireInterval = value.expireInterval;
      this._unit = value.unit;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // expire_interval - computed: false, optional: false, required: true
  private _expireInterval?: string; 
  public get expireInterval() {
    return this.getStringAttribute('expire_interval');
  }
  public set expireInterval(value: string) {
    this._expireInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireIntervalInput() {
    return this._expireInterval;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table yandex_ydb_table}
*/
export class YdbTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ydb_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YdbTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YdbTable to import
  * @param importFromId The id of the existing YdbTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YdbTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_ydb_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/ydb_table yandex_ydb_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YdbTableConfig
  */
  public constructor(scope: Construct, id: string, config: YdbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_ydb_table',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._connectionString = config.connectionString;
    this._id = config.id;
    this._keyBloomFilter = config.keyBloomFilter;
    this._path = config.path;
    this._primaryKey = config.primaryKey;
    this._readReplicasSettings = config.readReplicasSettings;
    this._store = config.store;
    this._column.internalValue = config.column;
    this._family.internalValue = config.family;
    this._partitioningSettings.internalValue = config.partitioningSettings;
    this._timeouts.internalValue = config.timeouts;
    this._ttl.internalValue = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
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

  // key_bloom_filter - computed: true, optional: true, required: false
  private _keyBloomFilter?: boolean | cdktf.IResolvable; 
  public get keyBloomFilter() {
    return this.getBooleanAttribute('key_bloom_filter');
  }
  public set keyBloomFilter(value: boolean | cdktf.IResolvable) {
    this._keyBloomFilter = value;
  }
  public resetKeyBloomFilter() {
    this._keyBloomFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBloomFilterInput() {
    return this._keyBloomFilter;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // read_replicas_settings - computed: true, optional: true, required: false
  private _readReplicasSettings?: string; 
  public get readReplicasSettings() {
    return this.getStringAttribute('read_replicas_settings');
  }
  public set readReplicasSettings(value: string) {
    this._readReplicasSettings = value;
  }
  public resetReadReplicasSettings() {
    this._readReplicasSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicasSettingsInput() {
    return this._readReplicasSettings;
  }

  // store - computed: false, optional: true, required: false
  private _store?: string; 
  public get store() {
    return this.getStringAttribute('store');
  }
  public set store(value: string) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }

  // column - computed: false, optional: false, required: true
  private _column = new YdbTableColumnList(this, "column", true);
  public get column() {
    return this._column;
  }
  public putColumn(value: YdbTableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // family - computed: false, optional: true, required: false
  private _family = new YdbTableFamilyList(this, "family", false);
  public get family() {
    return this._family;
  }
  public putFamily(value: YdbTableFamily[] | cdktf.IResolvable) {
    this._family.internalValue = value;
  }
  public resetFamily() {
    this._family.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family.internalValue;
  }

  // partitioning_settings - computed: false, optional: true, required: false
  private _partitioningSettings = new YdbTablePartitioningSettingsOutputReference(this, "partitioning_settings");
  public get partitioningSettings() {
    return this._partitioningSettings;
  }
  public putPartitioningSettings(value: YdbTablePartitioningSettings) {
    this._partitioningSettings.internalValue = value;
  }
  public resetPartitioningSettings() {
    this._partitioningSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningSettingsInput() {
    return this._partitioningSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new YdbTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YdbTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl = new YdbTableTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: YdbTableTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      connection_string: cdktf.stringToTerraform(this._connectionString),
      id: cdktf.stringToTerraform(this._id),
      key_bloom_filter: cdktf.booleanToTerraform(this._keyBloomFilter),
      path: cdktf.stringToTerraform(this._path),
      primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaryKey),
      read_replicas_settings: cdktf.stringToTerraform(this._readReplicasSettings),
      store: cdktf.stringToTerraform(this._store),
      column: cdktf.listMapper(ydbTableColumnToTerraform, true)(this._column.internalValue),
      family: cdktf.listMapper(ydbTableFamilyToTerraform, true)(this._family.internalValue),
      partitioning_settings: ydbTablePartitioningSettingsToTerraform(this._partitioningSettings.internalValue),
      timeouts: ydbTableTimeoutsToTerraform(this._timeouts.internalValue),
      ttl: ydbTableTtlToTerraform(this._ttl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
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
      key_bloom_filter: {
        value: cdktf.booleanToHclTerraform(this._keyBloomFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaryKey),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      read_replicas_settings: {
        value: cdktf.stringToHclTerraform(this._readReplicasSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store: {
        value: cdktf.stringToHclTerraform(this._store),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column: {
        value: cdktf.listMapperHcl(ydbTableColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "YdbTableColumnList",
      },
      family: {
        value: cdktf.listMapperHcl(ydbTableFamilyToHclTerraform, true)(this._family.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YdbTableFamilyList",
      },
      partitioning_settings: {
        value: ydbTablePartitioningSettingsToHclTerraform(this._partitioningSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YdbTablePartitioningSettingsList",
      },
      timeouts: {
        value: ydbTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YdbTableTimeouts",
      },
      ttl: {
        value: ydbTableTtlToHclTerraform(this._ttl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "YdbTableTtlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
