// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcDetachWorkGroupPolicyOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#id DlcDetachWorkGroupPolicyOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Work group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#work_group_id DlcDetachWorkGroupPolicyOperation#work_group_id}
  */
  readonly workGroupId: number;
  /**
  * policy_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#policy_set DlcDetachWorkGroupPolicyOperation#policy_set}
  */
  readonly policySet?: DlcDetachWorkGroupPolicyOperationPolicySet[] | cdktf.IResolvable;
}
export interface DlcDetachWorkGroupPolicyOperationPolicySet {
  /**
  * The name of the target data source. To grant admin permission, it must be `*` (all resources at this level); to grant data source and database permissions, it must be `COSDataCatalog` or `*`; to grant table permissions, it can be a custom data source; if it is left empty, `DataLakeCatalog` is used. Note: To grant permissions on a custom data source, the permissions that can be managed in the Data Lake Compute console are subsets of the account permissions granted when you connect the data source to the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#catalog DlcDetachWorkGroupPolicyOperation#catalog}
  */
  readonly catalog: string;
  /**
  *  The name of the target column. `*` represents all columns. To grant admin permissions, it must be `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#column DlcDetachWorkGroupPolicyOperation#column}
  */
  readonly column?: string;
  /**
  * The permission policy creation time, which is not required as an input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#create_time DlcDetachWorkGroupPolicyOperation#create_time}
  */
  readonly createTime?: string;
  /**
  * The name of the target data engine. `*` represents all engines. To grant admin permissions, it must be `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#data_engine DlcDetachWorkGroupPolicyOperation#data_engine}
  */
  readonly dataEngine?: string;
  /**
  * The name of the target database. `*` represents all databases in the current catalog. To grant admin permissions, it must be `*`; to grant data connection permissions, it must be null; to grant other permissions, it can be any database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#database DlcDetachWorkGroupPolicyOperation#database}
  */
  readonly database: string;
  /**
  * The name of the target function. `*` represents all functions in the current catalog. To grant admin permissions, it must be `*`; to grant data connection permissions, it must be null; to grant other permissions, it can be any function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#function DlcDetachWorkGroupPolicyOperation#function}
  */
  readonly function?: string;
  /**
  * The policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#id DlcDetachWorkGroupPolicyOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The grant mode, which is not required as an input parameter. Valid values: `COMMON` and `SENIOR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#mode DlcDetachWorkGroupPolicyOperation#mode}
  */
  readonly mode?: string;
  /**
  * The target permissions, which vary by permission level. Admin: `ALL` (default); data connection: `CREATE`; database: `ALL`, `CREATE`, `ALTER`, and `DROP`; table: `ALL`, `SELECT`, `INSERT`, `ALTER`, `DELETE`, `DROP`, and `UPDATE`. Note: For table permissions, if a data source other than `COSDataCatalog` is specified, only the `SELECT` permission can be granted here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#operation DlcDetachWorkGroupPolicyOperation#operation}
  */
  readonly operation: string;
  /**
  * The operator, which is not required as an input parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#operator DlcDetachWorkGroupPolicyOperation#operator}
  */
  readonly operator?: string;
  /**
  * The permission type. Valid values: `ADMIN`, `DATASOURCE`, `DATABASE`, `TABLE`, `VIEW`, `FUNCTION`, `COLUMN`, and `ENGINE`. Note: If it is left empty, `ADMIN` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#policy_type DlcDetachWorkGroupPolicyOperation#policy_type}
  */
  readonly policyType?: string;
  /**
  * Whether the grantee is allowed to further grant the permissions. Valid values: `false` (default) and `true` (the grantee can grant permissions gained here to other sub-users).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#re_auth DlcDetachWorkGroupPolicyOperation#re_auth}
  */
  readonly reAuth?: boolean | cdktf.IResolvable;
  /**
  * The permission source, which is not required when input parameters are passed in. Valid values: `USER` (from the user) and `WORKGROUP` (from one or more associated work groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#source DlcDetachWorkGroupPolicyOperation#source}
  */
  readonly source?: string;
  /**
  *  The ID of the work group, which applies only when the value of the `Source` field is `WORKGROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#source_id DlcDetachWorkGroupPolicyOperation#source_id}
  */
  readonly sourceId?: number;
  /**
  * The name of the work group, which applies only when the value of the `Source` field is `WORKGROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#source_name DlcDetachWorkGroupPolicyOperation#source_name}
  */
  readonly sourceName?: string;
  /**
  * The name of the target table. `*` represents all tables in the current database. To grant admin permissions, it must be `*`; to grant data connection and database permissions, it must be null; to grant other permissions, it can be any table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#table DlcDetachWorkGroupPolicyOperation#table}
  */
  readonly table: string;
  /**
  * The name of the target view. `*` represents all views in the current database. To grant admin permissions, it must be `*`; to grant data connection and database permissions, it must be null; to grant other permissions, it can be any view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#view DlcDetachWorkGroupPolicyOperation#view}
  */
  readonly view?: string;
}

export function dlcDetachWorkGroupPolicyOperationPolicySetToTerraform(struct?: DlcDetachWorkGroupPolicyOperationPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    column: cdktf.stringToTerraform(struct!.column),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    data_engine: cdktf.stringToTerraform(struct!.dataEngine),
    database: cdktf.stringToTerraform(struct!.database),
    function: cdktf.stringToTerraform(struct!.function),
    id: cdktf.numberToTerraform(struct!.id),
    mode: cdktf.stringToTerraform(struct!.mode),
    operation: cdktf.stringToTerraform(struct!.operation),
    operator: cdktf.stringToTerraform(struct!.operator),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    re_auth: cdktf.booleanToTerraform(struct!.reAuth),
    source: cdktf.stringToTerraform(struct!.source),
    source_id: cdktf.numberToTerraform(struct!.sourceId),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
    table: cdktf.stringToTerraform(struct!.table),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dlcDetachWorkGroupPolicyOperationPolicySetToHclTerraform(struct?: DlcDetachWorkGroupPolicyOperationPolicySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_engine: {
      value: cdktf.stringToHclTerraform(struct!.dataEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
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
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    re_auth: {
      value: cdktf.booleanToHclTerraform(struct!.reAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.numberToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcDetachWorkGroupPolicyOperationPolicySetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlcDetachWorkGroupPolicyOperationPolicySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._dataEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEngine = this._dataEngine;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._reAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.reAuth = this._reAuth;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcDetachWorkGroupPolicyOperationPolicySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalog = undefined;
      this._column = undefined;
      this._createTime = undefined;
      this._dataEngine = undefined;
      this._database = undefined;
      this._function = undefined;
      this._id = undefined;
      this._mode = undefined;
      this._operation = undefined;
      this._operator = undefined;
      this._policyType = undefined;
      this._reAuth = undefined;
      this._source = undefined;
      this._sourceId = undefined;
      this._sourceName = undefined;
      this._table = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalog = value.catalog;
      this._column = value.column;
      this._createTime = value.createTime;
      this._dataEngine = value.dataEngine;
      this._database = value.database;
      this._function = value.function;
      this._id = value.id;
      this._mode = value.mode;
      this._operation = value.operation;
      this._operator = value.operator;
      this._policyType = value.policyType;
      this._reAuth = value.reAuth;
      this._source = value.source;
      this._sourceId = value.sourceId;
      this._sourceName = value.sourceName;
      this._table = value.table;
      this._view = value.view;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // data_engine - computed: false, optional: true, required: false
  private _dataEngine?: string; 
  public get dataEngine() {
    return this.getStringAttribute('data_engine');
  }
  public set dataEngine(value: string) {
    this._dataEngine = value;
  }
  public resetDataEngine() {
    this._dataEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineInput() {
    return this._dataEngine;
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

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // re_auth - computed: false, optional: true, required: false
  private _reAuth?: boolean | cdktf.IResolvable; 
  public get reAuth() {
    return this.getBooleanAttribute('re_auth');
  }
  public set reAuth(value: boolean | cdktf.IResolvable) {
    this._reAuth = value;
  }
  public resetReAuth() {
    this._reAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reAuthInput() {
    return this._reAuth;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: number; 
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }
  public set sourceId(value: number) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class DlcDetachWorkGroupPolicyOperationPolicySetList extends cdktf.ComplexList {
  public internalValue? : DlcDetachWorkGroupPolicyOperationPolicySet[] | cdktf.IResolvable

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
  public get(index: number): DlcDetachWorkGroupPolicyOperationPolicySetOutputReference {
    return new DlcDetachWorkGroupPolicyOperationPolicySetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation tencentcloud_dlc_detach_work_group_policy_operation}
*/
export class DlcDetachWorkGroupPolicyOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_detach_work_group_policy_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcDetachWorkGroupPolicyOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcDetachWorkGroupPolicyOperation to import
  * @param importFromId The id of the existing DlcDetachWorkGroupPolicyOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcDetachWorkGroupPolicyOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_detach_work_group_policy_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_detach_work_group_policy_operation tencentcloud_dlc_detach_work_group_policy_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcDetachWorkGroupPolicyOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DlcDetachWorkGroupPolicyOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_detach_work_group_policy_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._workGroupId = config.workGroupId;
    this._policySet.internalValue = config.policySet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // work_group_id - computed: false, optional: false, required: true
  private _workGroupId?: number; 
  public get workGroupId() {
    return this.getNumberAttribute('work_group_id');
  }
  public set workGroupId(value: number) {
    this._workGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupIdInput() {
    return this._workGroupId;
  }

  // policy_set - computed: false, optional: true, required: false
  private _policySet = new DlcDetachWorkGroupPolicyOperationPolicySetList(this, "policy_set", false);
  public get policySet() {
    return this._policySet;
  }
  public putPolicySet(value: DlcDetachWorkGroupPolicyOperationPolicySet[] | cdktf.IResolvable) {
    this._policySet.internalValue = value;
  }
  public resetPolicySet() {
    this._policySet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetInput() {
    return this._policySet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      work_group_id: cdktf.numberToTerraform(this._workGroupId),
      policy_set: cdktf.listMapper(dlcDetachWorkGroupPolicyOperationPolicySetToTerraform, true)(this._policySet.internalValue),
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
      work_group_id: {
        value: cdktf.numberToHclTerraform(this._workGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_set: {
        value: cdktf.listMapperHcl(dlcDetachWorkGroupPolicyOperationPolicySetToHclTerraform, true)(this._policySet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcDetachWorkGroupPolicyOperationPolicySetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
