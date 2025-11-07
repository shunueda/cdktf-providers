// https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster Name, it is required for Replicated or Distributed tables and forbidden in other case
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#cluster Table#cluster}
  */
  readonly cluster?: string;
  /**
  * Database comment, it will be codified in a json along with come metadata information (like cluster name in case of clustering)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * DB Name where the table will bellow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#database Table#database}
  */
  readonly database: string;
  /**
  * Table engine type (Supported types so far: Distributed, ReplicatedReplacingMergeTree, ReplacingMergeTree)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#engine Table#engine}
  */
  readonly engine: string;
  /**
  * Engine params in case the engine type requires them
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#engine_params Table#engine_params}
  */
  readonly engineParams: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#id Table#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Table Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#name Table#name}
  */
  readonly name: string;
  /**
  * Order by columns to use as sorting key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#order_by Table#order_by}
  */
  readonly orderBy?: string[];
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#column Table#column}
  */
  readonly column?: TableColumn[] | cdktf.IResolvable;
  /**
  * partition_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#partition_by Table#partition_by}
  */
  readonly partitionBy?: TablePartitionBy[] | cdktf.IResolvable;
}
export interface TableColumn {
  /**
  * Column Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#name Table#name}
  */
  readonly name: string;
  /**
  * Column Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#type Table#type}
  */
  readonly type: string;
}

export function tableColumnToTerraform(struct?: TableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tableColumnToHclTerraform(struct?: TableColumn | cdktf.IResolvable): any {
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

export class TableColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TableColumn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TableColumn | cdktf.IResolvable | undefined) {
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

export class TableColumnList extends cdktf.ComplexList {
  public internalValue? : TableColumn[] | cdktf.IResolvable

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
  public get(index: number): TableColumnOutputReference {
    return new TableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TablePartitionBy {
  /**
  * Column to use as part of the partition key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#by Table#by}
  */
  readonly by: string;
  /**
  * Partition function, could be empty or one of following: toYYYYMM, toYYYYMMDD or toYYYYMMDDhhmmss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#partition_function Table#partition_function}
  */
  readonly partitionFunction?: string;
}

export function tablePartitionByToTerraform(struct?: TablePartitionBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by: cdktf.stringToTerraform(struct!.by),
    partition_function: cdktf.stringToTerraform(struct!.partitionFunction),
  }
}


export function tablePartitionByToHclTerraform(struct?: TablePartitionBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by: {
      value: cdktf.stringToHclTerraform(struct!.by),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_function: {
      value: cdktf.stringToHclTerraform(struct!.partitionFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TablePartitionByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TablePartitionBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._by !== undefined) {
      hasAnyValues = true;
      internalValueResult.by = this._by;
    }
    if (this._partitionFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionFunction = this._partitionFunction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TablePartitionBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._by = undefined;
      this._partitionFunction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._by = value.by;
      this._partitionFunction = value.partitionFunction;
    }
  }

  // by - computed: false, optional: false, required: true
  private _by?: string; 
  public get by() {
    return this.getStringAttribute('by');
  }
  public set by(value: string) {
    this._by = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byInput() {
    return this._by;
  }

  // partition_function - computed: false, optional: true, required: false
  private _partitionFunction?: string; 
  public get partitionFunction() {
    return this.getStringAttribute('partition_function');
  }
  public set partitionFunction(value: string) {
    this._partitionFunction = value;
  }
  public resetPartitionFunction() {
    this._partitionFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFunctionInput() {
    return this._partitionFunction;
  }
}

export class TablePartitionByList extends cdktf.ComplexList {
  public internalValue? : TablePartitionBy[] | cdktf.IResolvable

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
  public get(index: number): TablePartitionByOutputReference {
    return new TablePartitionByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table clickhouse_table}
*/
export class Table extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Table resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Table to import
  * @param importFromId The id of the existing Table that should be imported. Refer to the {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Table to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ivanofthings/clickhouse/3.8.0/docs/resources/table clickhouse_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConfig
  */
  public constructor(scope: Construct, id: string, config: TableConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhouse_table',
      terraformGeneratorMetadata: {
        providerName: 'clickhouse',
        providerVersion: '3.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._comment = config.comment;
    this._database = config.database;
    this._engine = config.engine;
    this._engineParams = config.engineParams;
    this._id = config.id;
    this._name = config.name;
    this._orderBy = config.orderBy;
    this._column.internalValue = config.column;
    this._partitionBy.internalValue = config.partitionBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_params - computed: false, optional: false, required: true
  private _engineParams?: string[]; 
  public get engineParams() {
    return this.getListAttribute('engine_params');
  }
  public set engineParams(value: string[]) {
    this._engineParams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineParamsInput() {
    return this._engineParams;
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

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string[]; 
  public get orderBy() {
    return this.getListAttribute('order_by');
  }
  public set orderBy(value: string[]) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // column - computed: false, optional: true, required: false
  private _column = new TableColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: TableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy = new TablePartitionByList(this, "partition_by", false);
  public get partitionBy() {
    return this._partitionBy;
  }
  public putPartitionBy(value: TablePartitionBy[] | cdktf.IResolvable) {
    this._partitionBy.internalValue = value;
  }
  public resetPartitionBy() {
    this._partitionBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      engine: cdktf.stringToTerraform(this._engine),
      engine_params: cdktf.listMapper(cdktf.stringToTerraform, false)(this._engineParams),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      order_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orderBy),
      column: cdktf.listMapper(tableColumnToTerraform, true)(this._column.internalValue),
      partition_by: cdktf.listMapper(tablePartitionByToTerraform, true)(this._partitionBy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_params: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._engineParams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orderBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      column: {
        value: cdktf.listMapperHcl(tableColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableColumnList",
      },
      partition_by: {
        value: cdktf.listMapperHcl(tablePartitionByToHclTerraform, true)(this._partitionBy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TablePartitionByList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
