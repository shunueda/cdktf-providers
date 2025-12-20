// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcAttachDataMaskPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#id DlcAttachDataMaskPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * data_mask_strategy_policy_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#data_mask_strategy_policy_set DlcAttachDataMaskPolicy#data_mask_strategy_policy_set}
  */
  readonly dataMaskStrategyPolicySet?: DlcAttachDataMaskPolicyDataMaskStrategyPolicySet;
}
export interface DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfo {
  /**
  * The name of the data source to be authorized. For administrator-level authorization, only * is allowed (representing all resources at this level). For data source-level and database-level authorization, only COSDataCatalog or * is allowed. For table-level authorization, custom data sources can be specified. Defaults to DataLakeCatalog if not specified. Note: For custom data sources, DLC can only manage a subset of permissions provided by the user during data source integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#catalog DlcAttachDataMaskPolicy#catalog}
  */
  readonly catalog: string;
  /**
  * The name of the column to be authorized. Use * to represent all columns. For administrator-level authorization, only * is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#column DlcAttachDataMaskPolicy#column}
  */
  readonly column?: string;
  /**
  * The name of the database to be authorized. Use * to represent all databases under the current Catalog. For administrator-level authorization, only * is allowed. For data connection-level authorization, leave it empty. For other types, specify the database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#database DlcAttachDataMaskPolicy#database}
  */
  readonly database: string;
  /**
  * The name of the table to be authorized. Use * to represent all tables under the current Database. For administrator-level authorization, only * is allowed. For data connection-level and database-level authorization, leave it empty. For other types, specify the table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#table DlcAttachDataMaskPolicy#table}
  */
  readonly table: string;
}

export function dlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoToTerraform(struct?: DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoOutputReference | DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    column: cdktf.stringToTerraform(struct!.column),
    database: cdktf.stringToTerraform(struct!.database),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoToHclTerraform(struct?: DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoOutputReference | DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfo): any {
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
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfo | undefined {
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
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._column = undefined;
      this._database = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._column = value.column;
      this._database = value.database;
      this._table = value.table;
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
}
export interface DlcAttachDataMaskPolicyDataMaskStrategyPolicySet {
  /**
  * The type of the bound field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#column_type DlcAttachDataMaskPolicy#column_type}
  */
  readonly columnType?: string;
  /**
  * The ID of the data masking strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#data_mask_strategy_id DlcAttachDataMaskPolicy#data_mask_strategy_id}
  */
  readonly dataMaskStrategyId?: string;
  /**
  * policy_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#policy_info DlcAttachDataMaskPolicy#policy_info}
  */
  readonly policyInfo?: DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfo;
}

export function dlcAttachDataMaskPolicyDataMaskStrategyPolicySetToTerraform(struct?: DlcAttachDataMaskPolicyDataMaskStrategyPolicySetOutputReference | DlcAttachDataMaskPolicyDataMaskStrategyPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_type: cdktf.stringToTerraform(struct!.columnType),
    data_mask_strategy_id: cdktf.stringToTerraform(struct!.dataMaskStrategyId),
    policy_info: dlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoToTerraform(struct!.policyInfo),
  }
}


export function dlcAttachDataMaskPolicyDataMaskStrategyPolicySetToHclTerraform(struct?: DlcAttachDataMaskPolicyDataMaskStrategyPolicySetOutputReference | DlcAttachDataMaskPolicyDataMaskStrategyPolicySet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_type: {
      value: cdktf.stringToHclTerraform(struct!.columnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_mask_strategy_id: {
      value: cdktf.stringToHclTerraform(struct!.dataMaskStrategyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_info: {
      value: dlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoToHclTerraform(struct!.policyInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlcAttachDataMaskPolicyDataMaskStrategyPolicySetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DlcAttachDataMaskPolicyDataMaskStrategyPolicySet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnType = this._columnType;
    }
    if (this._dataMaskStrategyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataMaskStrategyId = this._dataMaskStrategyId;
    }
    if (this._policyInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyInfo = this._policyInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlcAttachDataMaskPolicyDataMaskStrategyPolicySet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnType = undefined;
      this._dataMaskStrategyId = undefined;
      this._policyInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnType = value.columnType;
      this._dataMaskStrategyId = value.dataMaskStrategyId;
      this._policyInfo.internalValue = value.policyInfo;
    }
  }

  // column_type - computed: false, optional: true, required: false
  private _columnType?: string; 
  public get columnType() {
    return this.getStringAttribute('column_type');
  }
  public set columnType(value: string) {
    this._columnType = value;
  }
  public resetColumnType() {
    this._columnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnTypeInput() {
    return this._columnType;
  }

  // data_mask_strategy_id - computed: false, optional: true, required: false
  private _dataMaskStrategyId?: string; 
  public get dataMaskStrategyId() {
    return this.getStringAttribute('data_mask_strategy_id');
  }
  public set dataMaskStrategyId(value: string) {
    this._dataMaskStrategyId = value;
  }
  public resetDataMaskStrategyId() {
    this._dataMaskStrategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskStrategyIdInput() {
    return this._dataMaskStrategyId;
  }

  // policy_info - computed: false, optional: true, required: false
  private _policyInfo = new DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfoOutputReference(this, "policy_info");
  public get policyInfo() {
    return this._policyInfo;
  }
  public putPolicyInfo(value: DlcAttachDataMaskPolicyDataMaskStrategyPolicySetPolicyInfo) {
    this._policyInfo.internalValue = value;
  }
  public resetPolicyInfo() {
    this._policyInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInfoInput() {
    return this._policyInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy tencentcloud_dlc_attach_data_mask_policy}
*/
export class DlcAttachDataMaskPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_attach_data_mask_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcAttachDataMaskPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcAttachDataMaskPolicy to import
  * @param importFromId The id of the existing DlcAttachDataMaskPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcAttachDataMaskPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_attach_data_mask_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dlc_attach_data_mask_policy tencentcloud_dlc_attach_data_mask_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcAttachDataMaskPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DlcAttachDataMaskPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_attach_data_mask_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._dataMaskStrategyPolicySet.internalValue = config.dataMaskStrategyPolicySet;
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

  // data_mask_strategy_policy_set - computed: false, optional: true, required: false
  private _dataMaskStrategyPolicySet = new DlcAttachDataMaskPolicyDataMaskStrategyPolicySetOutputReference(this, "data_mask_strategy_policy_set");
  public get dataMaskStrategyPolicySet() {
    return this._dataMaskStrategyPolicySet;
  }
  public putDataMaskStrategyPolicySet(value: DlcAttachDataMaskPolicyDataMaskStrategyPolicySet) {
    this._dataMaskStrategyPolicySet.internalValue = value;
  }
  public resetDataMaskStrategyPolicySet() {
    this._dataMaskStrategyPolicySet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMaskStrategyPolicySetInput() {
    return this._dataMaskStrategyPolicySet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      data_mask_strategy_policy_set: dlcAttachDataMaskPolicyDataMaskStrategyPolicySetToTerraform(this._dataMaskStrategyPolicySet.internalValue),
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
      data_mask_strategy_policy_set: {
        value: dlcAttachDataMaskPolicyDataMaskStrategyPolicySetToHclTerraform(this._dataMaskStrategyPolicySet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlcAttachDataMaskPolicyDataMaskStrategyPolicySetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
