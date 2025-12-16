// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbbrainModifyDiagDbInstanceOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#id DbbrainModifyDiagDbInstanceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the ID of the instance whose inspection status is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#instance_ids DbbrainModifyDiagDbInstanceOperation#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Service product type, supported values include: mysql - cloud database MySQL, cynosdb - cloud database CynosDB for MySQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#product DbbrainModifyDiagDbInstanceOperation#product}
  */
  readonly product: string;
  /**
  * Effective instance region, the value is All, which means all regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#regions DbbrainModifyDiagDbInstanceOperation#regions}
  */
  readonly regions?: string;
  /**
  * instance_confs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#instance_confs DbbrainModifyDiagDbInstanceOperation#instance_confs}
  */
  readonly instanceConfs: DbbrainModifyDiagDbInstanceOperationInstanceConfs;
}
export interface DbbrainModifyDiagDbInstanceOperationInstanceConfs {
  /**
  * Database inspection switch, Yes/No.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#daily_inspection DbbrainModifyDiagDbInstanceOperation#daily_inspection}
  */
  readonly dailyInspection?: string;
  /**
  * Instance overview switch, Yes/No.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#overview_display DbbrainModifyDiagDbInstanceOperation#overview_display}
  */
  readonly overviewDisplay?: string;
}

export function dbbrainModifyDiagDbInstanceOperationInstanceConfsToTerraform(struct?: DbbrainModifyDiagDbInstanceOperationInstanceConfsOutputReference | DbbrainModifyDiagDbInstanceOperationInstanceConfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_inspection: cdktf.stringToTerraform(struct!.dailyInspection),
    overview_display: cdktf.stringToTerraform(struct!.overviewDisplay),
  }
}


export function dbbrainModifyDiagDbInstanceOperationInstanceConfsToHclTerraform(struct?: DbbrainModifyDiagDbInstanceOperationInstanceConfsOutputReference | DbbrainModifyDiagDbInstanceOperationInstanceConfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_inspection: {
      value: cdktf.stringToHclTerraform(struct!.dailyInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overview_display: {
      value: cdktf.stringToHclTerraform(struct!.overviewDisplay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbbrainModifyDiagDbInstanceOperationInstanceConfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbbrainModifyDiagDbInstanceOperationInstanceConfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyInspection = this._dailyInspection;
    }
    if (this._overviewDisplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.overviewDisplay = this._overviewDisplay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbbrainModifyDiagDbInstanceOperationInstanceConfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailyInspection = undefined;
      this._overviewDisplay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailyInspection = value.dailyInspection;
      this._overviewDisplay = value.overviewDisplay;
    }
  }

  // daily_inspection - computed: false, optional: true, required: false
  private _dailyInspection?: string; 
  public get dailyInspection() {
    return this.getStringAttribute('daily_inspection');
  }
  public set dailyInspection(value: string) {
    this._dailyInspection = value;
  }
  public resetDailyInspection() {
    this._dailyInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInspectionInput() {
    return this._dailyInspection;
  }

  // overview_display - computed: false, optional: true, required: false
  private _overviewDisplay?: string; 
  public get overviewDisplay() {
    return this.getStringAttribute('overview_display');
  }
  public set overviewDisplay(value: string) {
    this._overviewDisplay = value;
  }
  public resetOverviewDisplay() {
    this._overviewDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overviewDisplayInput() {
    return this._overviewDisplay;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation tencentcloud_dbbrain_modify_diag_db_instance_operation}
*/
export class DbbrainModifyDiagDbInstanceOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dbbrain_modify_diag_db_instance_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbbrainModifyDiagDbInstanceOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbbrainModifyDiagDbInstanceOperation to import
  * @param importFromId The id of the existing DbbrainModifyDiagDbInstanceOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbbrainModifyDiagDbInstanceOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dbbrain_modify_diag_db_instance_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/dbbrain_modify_diag_db_instance_operation tencentcloud_dbbrain_modify_diag_db_instance_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbbrainModifyDiagDbInstanceOperationConfig
  */
  public constructor(scope: Construct, id: string, config: DbbrainModifyDiagDbInstanceOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dbbrain_modify_diag_db_instance_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._instanceIds = config.instanceIds;
    this._product = config.product;
    this._regions = config.regions;
    this._instanceConfs.internalValue = config.instanceConfs;
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

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string; 
  public get regions() {
    return this.getStringAttribute('regions');
  }
  public set regions(value: string) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // instance_confs - computed: false, optional: false, required: true
  private _instanceConfs = new DbbrainModifyDiagDbInstanceOperationInstanceConfsOutputReference(this, "instance_confs");
  public get instanceConfs() {
    return this._instanceConfs;
  }
  public putInstanceConfs(value: DbbrainModifyDiagDbInstanceOperationInstanceConfs) {
    this._instanceConfs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfsInput() {
    return this._instanceConfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      product: cdktf.stringToTerraform(this._product),
      regions: cdktf.stringToTerraform(this._regions),
      instance_confs: dbbrainModifyDiagDbInstanceOperationInstanceConfsToTerraform(this._instanceConfs.internalValue),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.stringToHclTerraform(this._regions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_confs: {
        value: dbbrainModifyDiagDbInstanceOperationInstanceConfsToHclTerraform(this._instanceConfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbbrainModifyDiagDbInstanceOperationInstanceConfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
