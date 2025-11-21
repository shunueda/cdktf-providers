// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NosqlTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#compartment_id NosqlTable#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#ddl_statement NosqlTable#ddl_statement}
  */
  readonly ddlStatement: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#defined_tags NosqlTable#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#freeform_tags NosqlTable#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#id NosqlTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#is_auto_reclaimable NosqlTable#is_auto_reclaimable}
  */
  readonly isAutoReclaimable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#name NosqlTable#name}
  */
  readonly name: string;
  /**
  * table_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#table_limits NosqlTable#table_limits}
  */
  readonly tableLimits?: NosqlTableTableLimits;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#timeouts NosqlTable#timeouts}
  */
  readonly timeouts?: NosqlTableTimeouts;
}
export interface NosqlTableReplicas {
}

export function nosqlTableReplicasToTerraform(struct?: NosqlTableReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nosqlTableReplicasToHclTerraform(struct?: NosqlTableReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NosqlTableReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NosqlTableReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NosqlTableReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_mode - computed: true, optional: false, required: false
  public get capacityMode() {
    return this.getStringAttribute('capacity_mode');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_write_units - computed: true, optional: false, required: false
  public get maxWriteUnits() {
    return this.getNumberAttribute('max_write_units');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
}

export class NosqlTableReplicasList extends cdktf.ComplexList {

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
  public get(index: number): NosqlTableReplicasOutputReference {
    return new NosqlTableReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NosqlTableSchemaColumns {
}

export function nosqlTableSchemaColumnsToTerraform(struct?: NosqlTableSchemaColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nosqlTableSchemaColumnsToHclTerraform(struct?: NosqlTableSchemaColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NosqlTableSchemaColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NosqlTableSchemaColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NosqlTableSchemaColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // is_as_uuid - computed: true, optional: false, required: false
  public get isAsUuid() {
    return this.getBooleanAttribute('is_as_uuid');
  }

  // is_generated - computed: true, optional: false, required: false
  public get isGenerated() {
    return this.getBooleanAttribute('is_generated');
  }

  // is_nullable - computed: true, optional: false, required: false
  public get isNullable() {
    return this.getBooleanAttribute('is_nullable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NosqlTableSchemaColumnsList extends cdktf.ComplexList {

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
  public get(index: number): NosqlTableSchemaColumnsOutputReference {
    return new NosqlTableSchemaColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NosqlTableSchemaIdentity {
}

export function nosqlTableSchemaIdentityToTerraform(struct?: NosqlTableSchemaIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nosqlTableSchemaIdentityToHclTerraform(struct?: NosqlTableSchemaIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NosqlTableSchemaIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NosqlTableSchemaIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NosqlTableSchemaIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // is_always - computed: true, optional: false, required: false
  public get isAlways() {
    return this.getBooleanAttribute('is_always');
  }

  // is_null - computed: true, optional: false, required: false
  public get isNull() {
    return this.getBooleanAttribute('is_null');
  }
}

export class NosqlTableSchemaIdentityList extends cdktf.ComplexList {

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
  public get(index: number): NosqlTableSchemaIdentityOutputReference {
    return new NosqlTableSchemaIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NosqlTableSchema {
}

export function nosqlTableSchemaToTerraform(struct?: NosqlTableSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nosqlTableSchemaToHclTerraform(struct?: NosqlTableSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NosqlTableSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NosqlTableSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NosqlTableSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new NosqlTableSchemaColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // identity - computed: true, optional: false, required: false
  private _identity = new NosqlTableSchemaIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }

  // shard_key - computed: true, optional: false, required: false
  public get shardKey() {
    return this.getListAttribute('shard_key');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

export class NosqlTableSchemaList extends cdktf.ComplexList {

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
  public get(index: number): NosqlTableSchemaOutputReference {
    return new NosqlTableSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NosqlTableTableLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#capacity_mode NosqlTable#capacity_mode}
  */
  readonly capacityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#max_read_units NosqlTable#max_read_units}
  */
  readonly maxReadUnits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#max_storage_in_gbs NosqlTable#max_storage_in_gbs}
  */
  readonly maxStorageInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#max_write_units NosqlTable#max_write_units}
  */
  readonly maxWriteUnits: number;
}

export function nosqlTableTableLimitsToTerraform(struct?: NosqlTableTableLimitsOutputReference | NosqlTableTableLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_mode: cdktf.stringToTerraform(struct!.capacityMode),
    max_read_units: cdktf.numberToTerraform(struct!.maxReadUnits),
    max_storage_in_gbs: cdktf.numberToTerraform(struct!.maxStorageInGbs),
    max_write_units: cdktf.numberToTerraform(struct!.maxWriteUnits),
  }
}


export function nosqlTableTableLimitsToHclTerraform(struct?: NosqlTableTableLimitsOutputReference | NosqlTableTableLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_mode: {
      value: cdktf.stringToHclTerraform(struct!.capacityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_read_units: {
      value: cdktf.numberToHclTerraform(struct!.maxReadUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_storage_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.maxStorageInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_write_units: {
      value: cdktf.numberToHclTerraform(struct!.maxWriteUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NosqlTableTableLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NosqlTableTableLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityMode = this._capacityMode;
    }
    if (this._maxReadUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadUnits = this._maxReadUnits;
    }
    if (this._maxStorageInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStorageInGbs = this._maxStorageInGbs;
    }
    if (this._maxWriteUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWriteUnits = this._maxWriteUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NosqlTableTableLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityMode = undefined;
      this._maxReadUnits = undefined;
      this._maxStorageInGbs = undefined;
      this._maxWriteUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityMode = value.capacityMode;
      this._maxReadUnits = value.maxReadUnits;
      this._maxStorageInGbs = value.maxStorageInGbs;
      this._maxWriteUnits = value.maxWriteUnits;
    }
  }

  // capacity_mode - computed: true, optional: true, required: false
  private _capacityMode?: string; 
  public get capacityMode() {
    return this.getStringAttribute('capacity_mode');
  }
  public set capacityMode(value: string) {
    this._capacityMode = value;
  }
  public resetCapacityMode() {
    this._capacityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityModeInput() {
    return this._capacityMode;
  }

  // max_read_units - computed: false, optional: false, required: true
  private _maxReadUnits?: number; 
  public get maxReadUnits() {
    return this.getNumberAttribute('max_read_units');
  }
  public set maxReadUnits(value: number) {
    this._maxReadUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadUnitsInput() {
    return this._maxReadUnits;
  }

  // max_storage_in_gbs - computed: false, optional: false, required: true
  private _maxStorageInGbs?: number; 
  public get maxStorageInGbs() {
    return this.getNumberAttribute('max_storage_in_gbs');
  }
  public set maxStorageInGbs(value: number) {
    this._maxStorageInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStorageInGbsInput() {
    return this._maxStorageInGbs;
  }

  // max_write_units - computed: false, optional: false, required: true
  private _maxWriteUnits?: number; 
  public get maxWriteUnits() {
    return this.getNumberAttribute('max_write_units');
  }
  public set maxWriteUnits(value: number) {
    this._maxWriteUnits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWriteUnitsInput() {
    return this._maxWriteUnits;
  }
}
export interface NosqlTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#create NosqlTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#delete NosqlTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#update NosqlTable#update}
  */
  readonly update?: string;
}

export function nosqlTableTimeoutsToTerraform(struct?: NosqlTableTimeouts | cdktf.IResolvable): any {
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


export function nosqlTableTimeoutsToHclTerraform(struct?: NosqlTableTimeouts | cdktf.IResolvable): any {
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

export class NosqlTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NosqlTableTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NosqlTableTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table oci_nosql_table}
*/
export class NosqlTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_nosql_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NosqlTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NosqlTable to import
  * @param importFromId The id of the existing NosqlTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NosqlTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_nosql_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/nosql_table oci_nosql_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NosqlTableConfig
  */
  public constructor(scope: Construct, id: string, config: NosqlTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_nosql_table',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._ddlStatement = config.ddlStatement;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoReclaimable = config.isAutoReclaimable;
    this._name = config.name;
    this._tableLimits.internalValue = config.tableLimits;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ddl_statement - computed: false, optional: false, required: true
  private _ddlStatement?: string; 
  public get ddlStatement() {
    return this.getStringAttribute('ddl_statement');
  }
  public set ddlStatement(value: string) {
    this._ddlStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlStatementInput() {
    return this._ddlStatement;
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

  // is_auto_reclaimable - computed: true, optional: true, required: false
  private _isAutoReclaimable?: boolean | cdktf.IResolvable; 
  public get isAutoReclaimable() {
    return this.getBooleanAttribute('is_auto_reclaimable');
  }
  public set isAutoReclaimable(value: boolean | cdktf.IResolvable) {
    this._isAutoReclaimable = value;
  }
  public resetIsAutoReclaimable() {
    this._isAutoReclaimable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoReclaimableInput() {
    return this._isAutoReclaimable;
  }

  // is_multi_region - computed: true, optional: false, required: false
  public get isMultiRegion() {
    return this.getBooleanAttribute('is_multi_region');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_replica_initialization_in_percent - computed: true, optional: false, required: false
  public get localReplicaInitializationInPercent() {
    return this.getNumberAttribute('local_replica_initialization_in_percent');
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

  // replicas - computed: true, optional: false, required: false
  private _replicas = new NosqlTableReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }

  // schema - computed: true, optional: false, required: false
  private _schema = new NosqlTableSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }

  // schema_state - computed: true, optional: false, required: false
  public get schemaState() {
    return this.getStringAttribute('schema_state');
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

  // time_of_expiration - computed: true, optional: false, required: false
  public get timeOfExpiration() {
    return this.getStringAttribute('time_of_expiration');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // table_limits - computed: false, optional: true, required: false
  private _tableLimits = new NosqlTableTableLimitsOutputReference(this, "table_limits");
  public get tableLimits() {
    return this._tableLimits;
  }
  public putTableLimits(value: NosqlTableTableLimits) {
    this._tableLimits.internalValue = value;
  }
  public resetTableLimits() {
    this._tableLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableLimitsInput() {
    return this._tableLimits.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NosqlTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NosqlTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      ddl_statement: cdktf.stringToTerraform(this._ddlStatement),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_reclaimable: cdktf.booleanToTerraform(this._isAutoReclaimable),
      name: cdktf.stringToTerraform(this._name),
      table_limits: nosqlTableTableLimitsToTerraform(this._tableLimits.internalValue),
      timeouts: nosqlTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddl_statement: {
        value: cdktf.stringToHclTerraform(this._ddlStatement),
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
      is_auto_reclaimable: {
        value: cdktf.booleanToHclTerraform(this._isAutoReclaimable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_limits: {
        value: nosqlTableTableLimitsToHclTerraform(this._tableLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NosqlTableTableLimitsList",
      },
      timeouts: {
        value: nosqlTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NosqlTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
