// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsCompareTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#id DtsCompareTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * job id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#job_id DtsCompareTask#job_id}
  */
  readonly jobId: string;
  /**
  * object mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#object_mode DtsCompareTask#object_mode}
  */
  readonly objectMode?: string;
  /**
  * task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#task_name DtsCompareTask#task_name}
  */
  readonly taskName?: string;
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#objects DtsCompareTask#objects}
  */
  readonly objects?: DtsCompareTaskObjects;
}
export interface DtsCompareTaskObjectsObjectItemsTables {
  /**
  * table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#table_name DtsCompareTask#table_name}
  */
  readonly tableName?: string;
}

export function dtsCompareTaskObjectsObjectItemsTablesToTerraform(struct?: DtsCompareTaskObjectsObjectItemsTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function dtsCompareTaskObjectsObjectItemsTablesToHclTerraform(struct?: DtsCompareTaskObjectsObjectItemsTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsCompareTaskObjectsObjectItemsTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsCompareTaskObjectsObjectItemsTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsCompareTaskObjectsObjectItemsTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tableName = value.tableName;
    }
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class DtsCompareTaskObjectsObjectItemsTablesList extends cdktf.ComplexList {
  public internalValue? : DtsCompareTaskObjectsObjectItemsTables[] | cdktf.IResolvable

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
  public get(index: number): DtsCompareTaskObjectsObjectItemsTablesOutputReference {
    return new DtsCompareTaskObjectsObjectItemsTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsCompareTaskObjectsObjectItemsViews {
  /**
  * view name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#view_name DtsCompareTask#view_name}
  */
  readonly viewName?: string;
}

export function dtsCompareTaskObjectsObjectItemsViewsToTerraform(struct?: DtsCompareTaskObjectsObjectItemsViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    view_name: cdktf.stringToTerraform(struct!.viewName),
  }
}


export function dtsCompareTaskObjectsObjectItemsViewsToHclTerraform(struct?: DtsCompareTaskObjectsObjectItemsViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    view_name: {
      value: cdktf.stringToHclTerraform(struct!.viewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsCompareTaskObjectsObjectItemsViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsCompareTaskObjectsObjectItemsViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._viewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewName = this._viewName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsCompareTaskObjectsObjectItemsViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._viewName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._viewName = value.viewName;
    }
  }

  // view_name - computed: true, optional: true, required: false
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  public resetViewName() {
    this._viewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }
}

export class DtsCompareTaskObjectsObjectItemsViewsList extends cdktf.ComplexList {
  public internalValue? : DtsCompareTaskObjectsObjectItemsViews[] | cdktf.IResolvable

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
  public get(index: number): DtsCompareTaskObjectsObjectItemsViewsOutputReference {
    return new DtsCompareTaskObjectsObjectItemsViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsCompareTaskObjectsObjectItems {
  /**
  * database mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#db_mode DtsCompareTask#db_mode}
  */
  readonly dbMode?: string;
  /**
  * database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#db_name DtsCompareTask#db_name}
  */
  readonly dbName?: string;
  /**
  * schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#schema_name DtsCompareTask#schema_name}
  */
  readonly schemaName?: string;
  /**
  * table mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#table_mode DtsCompareTask#table_mode}
  */
  readonly tableMode?: string;
  /**
  * view mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#view_mode DtsCompareTask#view_mode}
  */
  readonly viewMode?: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#tables DtsCompareTask#tables}
  */
  readonly tables?: DtsCompareTaskObjectsObjectItemsTables[] | cdktf.IResolvable;
  /**
  * views block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#views DtsCompareTask#views}
  */
  readonly views?: DtsCompareTaskObjectsObjectItemsViews[] | cdktf.IResolvable;
}

export function dtsCompareTaskObjectsObjectItemsToTerraform(struct?: DtsCompareTaskObjectsObjectItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_mode: cdktf.stringToTerraform(struct!.dbMode),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_mode: cdktf.stringToTerraform(struct!.tableMode),
    view_mode: cdktf.stringToTerraform(struct!.viewMode),
    tables: cdktf.listMapper(dtsCompareTaskObjectsObjectItemsTablesToTerraform, true)(struct!.tables),
    views: cdktf.listMapper(dtsCompareTaskObjectsObjectItemsViewsToTerraform, true)(struct!.views),
  }
}


export function dtsCompareTaskObjectsObjectItemsToHclTerraform(struct?: DtsCompareTaskObjectsObjectItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_mode: {
      value: cdktf.stringToHclTerraform(struct!.dbMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_mode: {
      value: cdktf.stringToHclTerraform(struct!.tableMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_mode: {
      value: cdktf.stringToHclTerraform(struct!.viewMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(dtsCompareTaskObjectsObjectItemsTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DtsCompareTaskObjectsObjectItemsTablesList",
    },
    views: {
      value: cdktf.listMapperHcl(dtsCompareTaskObjectsObjectItemsViewsToHclTerraform, true)(struct!.views),
      isBlock: true,
      type: "list",
      storageClassType: "DtsCompareTaskObjectsObjectItemsViewsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsCompareTaskObjectsObjectItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsCompareTaskObjectsObjectItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbMode = this._dbMode;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMode = this._tableMode;
    }
    if (this._viewMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewMode = this._viewMode;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    if (this._views?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsCompareTaskObjectsObjectItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbMode = undefined;
      this._dbName = undefined;
      this._schemaName = undefined;
      this._tableMode = undefined;
      this._viewMode = undefined;
      this._tables.internalValue = undefined;
      this._views.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbMode = value.dbMode;
      this._dbName = value.dbName;
      this._schemaName = value.schemaName;
      this._tableMode = value.tableMode;
      this._viewMode = value.viewMode;
      this._tables.internalValue = value.tables;
      this._views.internalValue = value.views;
    }
  }

  // db_mode - computed: true, optional: true, required: false
  private _dbMode?: string; 
  public get dbMode() {
    return this.getStringAttribute('db_mode');
  }
  public set dbMode(value: string) {
    this._dbMode = value;
  }
  public resetDbMode() {
    this._dbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbModeInput() {
    return this._dbMode;
  }

  // db_name - computed: true, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_mode - computed: true, optional: true, required: false
  private _tableMode?: string; 
  public get tableMode() {
    return this.getStringAttribute('table_mode');
  }
  public set tableMode(value: string) {
    this._tableMode = value;
  }
  public resetTableMode() {
    this._tableMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableModeInput() {
    return this._tableMode;
  }

  // view_mode - computed: true, optional: true, required: false
  private _viewMode?: string; 
  public get viewMode() {
    return this.getStringAttribute('view_mode');
  }
  public set viewMode(value: string) {
    this._viewMode = value;
  }
  public resetViewMode() {
    this._viewMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewModeInput() {
    return this._viewMode;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DtsCompareTaskObjectsObjectItemsTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DtsCompareTaskObjectsObjectItemsTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // views - computed: false, optional: true, required: false
  private _views = new DtsCompareTaskObjectsObjectItemsViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
  public putViews(value: DtsCompareTaskObjectsObjectItemsViews[] | cdktf.IResolvable) {
    this._views.internalValue = value;
  }
  public resetViews() {
    this._views.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views.internalValue;
  }
}

export class DtsCompareTaskObjectsObjectItemsList extends cdktf.ComplexList {
  public internalValue? : DtsCompareTaskObjectsObjectItems[] | cdktf.IResolvable

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
  public get(index: number): DtsCompareTaskObjectsObjectItemsOutputReference {
    return new DtsCompareTaskObjectsObjectItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsCompareTaskObjects {
  /**
  * object mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#object_mode DtsCompareTask#object_mode}
  */
  readonly objectMode: string;
  /**
  * object_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#object_items DtsCompareTask#object_items}
  */
  readonly objectItems?: DtsCompareTaskObjectsObjectItems[] | cdktf.IResolvable;
}

export function dtsCompareTaskObjectsToTerraform(struct?: DtsCompareTaskObjectsOutputReference | DtsCompareTaskObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_mode: cdktf.stringToTerraform(struct!.objectMode),
    object_items: cdktf.listMapper(dtsCompareTaskObjectsObjectItemsToTerraform, true)(struct!.objectItems),
  }
}


export function dtsCompareTaskObjectsToHclTerraform(struct?: DtsCompareTaskObjectsOutputReference | DtsCompareTaskObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_mode: {
      value: cdktf.stringToHclTerraform(struct!.objectMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_items: {
      value: cdktf.listMapperHcl(dtsCompareTaskObjectsObjectItemsToHclTerraform, true)(struct!.objectItems),
      isBlock: true,
      type: "list",
      storageClassType: "DtsCompareTaskObjectsObjectItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsCompareTaskObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsCompareTaskObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectMode = this._objectMode;
    }
    if (this._objectItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectItems = this._objectItems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsCompareTaskObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectMode = undefined;
      this._objectItems.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectMode = value.objectMode;
      this._objectItems.internalValue = value.objectItems;
    }
  }

  // object_mode - computed: false, optional: false, required: true
  private _objectMode?: string; 
  public get objectMode() {
    return this.getStringAttribute('object_mode');
  }
  public set objectMode(value: string) {
    this._objectMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectModeInput() {
    return this._objectMode;
  }

  // object_items - computed: false, optional: true, required: false
  private _objectItems = new DtsCompareTaskObjectsObjectItemsList(this, "object_items", false);
  public get objectItems() {
    return this._objectItems;
  }
  public putObjectItems(value: DtsCompareTaskObjectsObjectItems[] | cdktf.IResolvable) {
    this._objectItems.internalValue = value;
  }
  public resetObjectItems() {
    this._objectItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectItemsInput() {
    return this._objectItems.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task tencentcloud_dts_compare_task}
*/
export class DtsCompareTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_compare_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsCompareTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsCompareTask to import
  * @param importFromId The id of the existing DtsCompareTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsCompareTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_compare_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dts_compare_task tencentcloud_dts_compare_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsCompareTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DtsCompareTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_compare_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._jobId = config.jobId;
    this._objectMode = config.objectMode;
    this._taskName = config.taskName;
    this._objects.internalValue = config.objects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compare_task_id - computed: true, optional: false, required: false
  public get compareTaskId() {
    return this.getStringAttribute('compare_task_id');
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // object_mode - computed: false, optional: true, required: false
  private _objectMode?: string; 
  public get objectMode() {
    return this.getStringAttribute('object_mode');
  }
  public set objectMode(value: string) {
    this._objectMode = value;
  }
  public resetObjectMode() {
    this._objectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectModeInput() {
    return this._objectMode;
  }

  // task_name - computed: false, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new DtsCompareTaskObjectsOutputReference(this, "objects");
  public get objects() {
    return this._objects;
  }
  public putObjects(value: DtsCompareTaskObjects) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      object_mode: cdktf.stringToTerraform(this._objectMode),
      task_name: cdktf.stringToTerraform(this._taskName),
      objects: dtsCompareTaskObjectsToTerraform(this._objects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_mode: {
        value: cdktf.stringToHclTerraform(this._objectMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objects: {
        value: dtsCompareTaskObjectsToHclTerraform(this._objects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsCompareTaskObjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
