// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YqObjectStorageBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data compression algorithm, e.g. brotli, bzip2, gzip, lz4, xz, zstd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#compression YqObjectStorageBinding#compression}
  */
  readonly compression?: string;
  /**
  * The connection identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#connection_id YqObjectStorageBinding#connection_id}
  */
  readonly connectionId: string;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#description YqObjectStorageBinding#description}
  */
  readonly description?: string;
  /**
  * The data format, e.g. csv_with_names, json_as_string, json_each_row, json_list, parquet, raw, tsv_with_names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#format YqObjectStorageBinding#format}
  */
  readonly format: string;
  /**
  * Special format setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#format_setting YqObjectStorageBinding#format_setting}
  */
  readonly formatSetting?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#name YqObjectStorageBinding#name}
  */
  readonly name: string;
  /**
  * The list of partitioning column names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#partitioned_by YqObjectStorageBinding#partitioned_by}
  */
  readonly partitionedBy?: string[];
  /**
  * The path pattern within Object Storage's bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#path_pattern YqObjectStorageBinding#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Projection rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#projection YqObjectStorageBinding#projection}
  */
  readonly projection?: { [key: string]: string };
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#column YqObjectStorageBinding#column}
  */
  readonly column?: YqObjectStorageBindingColumn[] | cdktf.IResolvable;
}
export interface YqObjectStorageBindingColumn {
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#name YqObjectStorageBinding#name}
  */
  readonly name: string;
  /**
  * A column cannot have the NULL data type. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#not_null YqObjectStorageBinding#not_null}
  */
  readonly notNull?: boolean | cdktf.IResolvable;
  /**
  * Column data type. YQL data types are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#type YqObjectStorageBinding#type}
  */
  readonly type?: string;
}

export function yqObjectStorageBindingColumnToTerraform(struct?: YqObjectStorageBindingColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    not_null: cdktf.booleanToTerraform(struct!.notNull),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function yqObjectStorageBindingColumnToHclTerraform(struct?: YqObjectStorageBindingColumn | cdktf.IResolvable): any {
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

export class YqObjectStorageBindingColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YqObjectStorageBindingColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: YqObjectStorageBindingColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._notNull = value.notNull;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class YqObjectStorageBindingColumnList extends cdktf.ComplexList {
  public internalValue? : YqObjectStorageBindingColumn[] | cdktf.IResolvable

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
  public get(index: number): YqObjectStorageBindingColumnOutputReference {
    return new YqObjectStorageBindingColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding yandex_yq_object_storage_binding}
*/
export class YqObjectStorageBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_yq_object_storage_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YqObjectStorageBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YqObjectStorageBinding to import
  * @param importFromId The id of the existing YqObjectStorageBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YqObjectStorageBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_yq_object_storage_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/yq_object_storage_binding yandex_yq_object_storage_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YqObjectStorageBindingConfig
  */
  public constructor(scope: Construct, id: string, config: YqObjectStorageBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_yq_object_storage_binding',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compression = config.compression;
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._format = config.format;
    this._formatSetting = config.formatSetting;
    this._name = config.name;
    this._partitionedBy = config.partitionedBy;
    this._pathPattern = config.pathPattern;
    this._projection = config.projection;
    this._column.internalValue = config.column;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compression - computed: true, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_setting - computed: false, optional: true, required: false
  private _formatSetting?: { [key: string]: string }; 
  public get formatSetting() {
    return this.getStringMapAttribute('format_setting');
  }
  public set formatSetting(value: { [key: string]: string }) {
    this._formatSetting = value;
  }
  public resetFormatSetting() {
    this._formatSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatSettingInput() {
    return this._formatSetting;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // partitioned_by - computed: false, optional: true, required: false
  private _partitionedBy?: string[]; 
  public get partitionedBy() {
    return this.getListAttribute('partitioned_by');
  }
  public set partitionedBy(value: string[]) {
    this._partitionedBy = value;
  }
  public resetPartitionedBy() {
    this._partitionedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionedByInput() {
    return this._partitionedBy;
  }

  // path_pattern - computed: false, optional: false, required: true
  private _pathPattern?: string; 
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern;
  }

  // projection - computed: false, optional: true, required: false
  private _projection?: { [key: string]: string }; 
  public get projection() {
    return this.getStringMapAttribute('projection');
  }
  public set projection(value: { [key: string]: string }) {
    this._projection = value;
  }
  public resetProjection() {
    this._projection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionInput() {
    return this._projection;
  }

  // column - computed: false, optional: true, required: false
  private _column = new YqObjectStorageBindingColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: YqObjectStorageBindingColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compression: cdktf.stringToTerraform(this._compression),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      format_setting: cdktf.hashMapper(cdktf.stringToTerraform)(this._formatSetting),
      name: cdktf.stringToTerraform(this._name),
      partitioned_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._partitionedBy),
      path_pattern: cdktf.stringToTerraform(this._pathPattern),
      projection: cdktf.hashMapper(cdktf.stringToTerraform)(this._projection),
      column: cdktf.listMapper(yqObjectStorageBindingColumnToTerraform, true)(this._column.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format_setting: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._formatSetting),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitioned_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._partitionedBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      path_pattern: {
        value: cdktf.stringToHclTerraform(this._pathPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projection: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._projection),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      column: {
        value: cdktf.listMapperHcl(yqObjectStorageBindingColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YqObjectStorageBindingColumnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
