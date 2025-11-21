// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtsTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#allow_update OtsTable#allow_update}
  */
  readonly allowUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#deviation_cell_version_in_sec OtsTable#deviation_cell_version_in_sec}
  */
  readonly deviationCellVersionInSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#enable_sse OtsTable#enable_sse}
  */
  readonly enableSse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#id OtsTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#instance_name OtsTable#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#max_version OtsTable#max_version}
  */
  readonly maxVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#sse_key_id OtsTable#sse_key_id}
  */
  readonly sseKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#sse_key_type OtsTable#sse_key_type}
  */
  readonly sseKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#sse_role_arn OtsTable#sse_role_arn}
  */
  readonly sseRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#table_name OtsTable#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#time_to_live OtsTable#time_to_live}
  */
  readonly timeToLive: number;
  /**
  * defined_column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#defined_column OtsTable#defined_column}
  */
  readonly definedColumn?: OtsTableDefinedColumn[] | cdktf.IResolvable;
  /**
  * primary_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#primary_key OtsTable#primary_key}
  */
  readonly primaryKey: OtsTablePrimaryKey[] | cdktf.IResolvable;
}
export interface OtsTableDefinedColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#name OtsTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#type OtsTable#type}
  */
  readonly type: string;
}

export function otsTableDefinedColumnToTerraform(struct?: OtsTableDefinedColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function otsTableDefinedColumnToHclTerraform(struct?: OtsTableDefinedColumn | cdktf.IResolvable): any {
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

export class OtsTableDefinedColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtsTableDefinedColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtsTableDefinedColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

export class OtsTableDefinedColumnList extends cdktf.ComplexList {
  public internalValue? : OtsTableDefinedColumn[] | cdktf.IResolvable

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
  public get(index: number): OtsTableDefinedColumnOutputReference {
    return new OtsTableDefinedColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OtsTablePrimaryKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#name OtsTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#type OtsTable#type}
  */
  readonly type: string;
}

export function otsTablePrimaryKeyToTerraform(struct?: OtsTablePrimaryKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function otsTablePrimaryKeyToHclTerraform(struct?: OtsTablePrimaryKey | cdktf.IResolvable): any {
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

export class OtsTablePrimaryKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtsTablePrimaryKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtsTablePrimaryKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

export class OtsTablePrimaryKeyList extends cdktf.ComplexList {
  public internalValue? : OtsTablePrimaryKey[] | cdktf.IResolvable

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
  public get(index: number): OtsTablePrimaryKeyOutputReference {
    return new OtsTablePrimaryKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table alicloud_ots_table}
*/
export class OtsTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ots_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtsTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtsTable to import
  * @param importFromId The id of the existing OtsTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtsTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ots_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ots_table alicloud_ots_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtsTableConfig
  */
  public constructor(scope: Construct, id: string, config: OtsTableConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ots_table',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUpdate = config.allowUpdate;
    this._deviationCellVersionInSec = config.deviationCellVersionInSec;
    this._enableSse = config.enableSse;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._maxVersion = config.maxVersion;
    this._sseKeyId = config.sseKeyId;
    this._sseKeyType = config.sseKeyType;
    this._sseRoleArn = config.sseRoleArn;
    this._tableName = config.tableName;
    this._timeToLive = config.timeToLive;
    this._definedColumn.internalValue = config.definedColumn;
    this._primaryKey.internalValue = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_update - computed: false, optional: true, required: false
  private _allowUpdate?: boolean | cdktf.IResolvable; 
  public get allowUpdate() {
    return this.getBooleanAttribute('allow_update');
  }
  public set allowUpdate(value: boolean | cdktf.IResolvable) {
    this._allowUpdate = value;
  }
  public resetAllowUpdate() {
    this._allowUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpdateInput() {
    return this._allowUpdate;
  }

  // deviation_cell_version_in_sec - computed: false, optional: true, required: false
  private _deviationCellVersionInSec?: string; 
  public get deviationCellVersionInSec() {
    return this.getStringAttribute('deviation_cell_version_in_sec');
  }
  public set deviationCellVersionInSec(value: string) {
    this._deviationCellVersionInSec = value;
  }
  public resetDeviationCellVersionInSec() {
    this._deviationCellVersionInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviationCellVersionInSecInput() {
    return this._deviationCellVersionInSec;
  }

  // enable_sse - computed: false, optional: true, required: false
  private _enableSse?: boolean | cdktf.IResolvable; 
  public get enableSse() {
    return this.getBooleanAttribute('enable_sse');
  }
  public set enableSse(value: boolean | cdktf.IResolvable) {
    this._enableSse = value;
  }
  public resetEnableSse() {
    this._enableSse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSseInput() {
    return this._enableSse;
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

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // max_version - computed: false, optional: false, required: true
  private _maxVersion?: number; 
  public get maxVersion() {
    return this.getNumberAttribute('max_version');
  }
  public set maxVersion(value: number) {
    this._maxVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // sse_key_id - computed: false, optional: true, required: false
  private _sseKeyId?: string; 
  public get sseKeyId() {
    return this.getStringAttribute('sse_key_id');
  }
  public set sseKeyId(value: string) {
    this._sseKeyId = value;
  }
  public resetSseKeyId() {
    this._sseKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKeyIdInput() {
    return this._sseKeyId;
  }

  // sse_key_type - computed: false, optional: true, required: false
  private _sseKeyType?: string; 
  public get sseKeyType() {
    return this.getStringAttribute('sse_key_type');
  }
  public set sseKeyType(value: string) {
    this._sseKeyType = value;
  }
  public resetSseKeyType() {
    this._sseKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKeyTypeInput() {
    return this._sseKeyType;
  }

  // sse_role_arn - computed: false, optional: true, required: false
  private _sseRoleArn?: string; 
  public get sseRoleArn() {
    return this.getStringAttribute('sse_role_arn');
  }
  public set sseRoleArn(value: string) {
    this._sseRoleArn = value;
  }
  public resetSseRoleArn() {
    this._sseRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseRoleArnInput() {
    return this._sseRoleArn;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // time_to_live - computed: false, optional: false, required: true
  private _timeToLive?: number; 
  public get timeToLive() {
    return this.getNumberAttribute('time_to_live');
  }
  public set timeToLive(value: number) {
    this._timeToLive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }

  // defined_column - computed: false, optional: true, required: false
  private _definedColumn = new OtsTableDefinedColumnList(this, "defined_column", false);
  public get definedColumn() {
    return this._definedColumn;
  }
  public putDefinedColumn(value: OtsTableDefinedColumn[] | cdktf.IResolvable) {
    this._definedColumn.internalValue = value;
  }
  public resetDefinedColumn() {
    this._definedColumn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedColumnInput() {
    return this._definedColumn.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey = new OtsTablePrimaryKeyList(this, "primary_key", false);
  public get primaryKey() {
    return this._primaryKey;
  }
  public putPrimaryKey(value: OtsTablePrimaryKey[] | cdktf.IResolvable) {
    this._primaryKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_update: cdktf.booleanToTerraform(this._allowUpdate),
      deviation_cell_version_in_sec: cdktf.stringToTerraform(this._deviationCellVersionInSec),
      enable_sse: cdktf.booleanToTerraform(this._enableSse),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      max_version: cdktf.numberToTerraform(this._maxVersion),
      sse_key_id: cdktf.stringToTerraform(this._sseKeyId),
      sse_key_type: cdktf.stringToTerraform(this._sseKeyType),
      sse_role_arn: cdktf.stringToTerraform(this._sseRoleArn),
      table_name: cdktf.stringToTerraform(this._tableName),
      time_to_live: cdktf.numberToTerraform(this._timeToLive),
      defined_column: cdktf.listMapper(otsTableDefinedColumnToTerraform, true)(this._definedColumn.internalValue),
      primary_key: cdktf.listMapper(otsTablePrimaryKeyToTerraform, true)(this._primaryKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_update: {
        value: cdktf.booleanToHclTerraform(this._allowUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deviation_cell_version_in_sec: {
        value: cdktf.stringToHclTerraform(this._deviationCellVersionInSec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_sse: {
        value: cdktf.booleanToHclTerraform(this._enableSse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_version: {
        value: cdktf.numberToHclTerraform(this._maxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sse_key_id: {
        value: cdktf.stringToHclTerraform(this._sseKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sse_key_type: {
        value: cdktf.stringToHclTerraform(this._sseKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sse_role_arn: {
        value: cdktf.stringToHclTerraform(this._sseRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_live: {
        value: cdktf.numberToHclTerraform(this._timeToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_column: {
        value: cdktf.listMapperHcl(otsTableDefinedColumnToHclTerraform, true)(this._definedColumn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OtsTableDefinedColumnList",
      },
      primary_key: {
        value: cdktf.listMapperHcl(otsTablePrimaryKeyToHclTerraform, true)(this._primaryKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OtsTablePrimaryKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
