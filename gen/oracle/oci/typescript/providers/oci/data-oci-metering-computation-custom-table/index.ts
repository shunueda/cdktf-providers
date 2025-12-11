// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/metering_computation_custom_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMeteringComputationCustomTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/metering_computation_custom_table#custom_table_id DataOciMeteringComputationCustomTable#custom_table_id}
  */
  readonly customTableId: string;
}
export interface DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag {
}

export function dataOciMeteringComputationCustomTableSavedCustomTableGroupByTagToTerraform(struct?: DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationCustomTableSavedCustomTableGroupByTagToHclTerraform(struct?: DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference {
    return new DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMeteringComputationCustomTableSavedCustomTable {
}

export function dataOciMeteringComputationCustomTableSavedCustomTableToTerraform(struct?: DataOciMeteringComputationCustomTableSavedCustomTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMeteringComputationCustomTableSavedCustomTableToHclTerraform(struct?: DataOciMeteringComputationCustomTableSavedCustomTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMeteringComputationCustomTableSavedCustomTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMeteringComputationCustomTableSavedCustomTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMeteringComputationCustomTableSavedCustomTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_group_by - computed: true, optional: false, required: false
  public get columnGroupBy() {
    return this.getListAttribute('column_group_by');
  }

  // compartment_depth - computed: true, optional: false, required: false
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_by_tag - computed: true, optional: false, required: false
  private _groupByTag = new DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }

  // row_group_by - computed: true, optional: false, required: false
  public get rowGroupBy() {
    return this.getListAttribute('row_group_by');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataOciMeteringComputationCustomTableSavedCustomTableList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMeteringComputationCustomTableSavedCustomTableOutputReference {
    return new DataOciMeteringComputationCustomTableSavedCustomTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/metering_computation_custom_table oci_metering_computation_custom_table}
*/
export class DataOciMeteringComputationCustomTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_custom_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMeteringComputationCustomTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMeteringComputationCustomTable to import
  * @param importFromId The id of the existing DataOciMeteringComputationCustomTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/metering_computation_custom_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMeteringComputationCustomTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_custom_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/metering_computation_custom_table oci_metering_computation_custom_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMeteringComputationCustomTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMeteringComputationCustomTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_custom_table',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customTableId = config.customTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // custom_table_id - computed: false, optional: false, required: true
  private _customTableId?: string; 
  public get customTableId() {
    return this.getStringAttribute('custom_table_id');
  }
  public set customTableId(value: string) {
    this._customTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customTableIdInput() {
    return this._customTableId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // saved_custom_table - computed: true, optional: false, required: false
  private _savedCustomTable = new DataOciMeteringComputationCustomTableSavedCustomTableList(this, "saved_custom_table", false);
  public get savedCustomTable() {
    return this._savedCustomTable;
  }

  // saved_report_id - computed: true, optional: false, required: false
  public get savedReportId() {
    return this.getStringAttribute('saved_report_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_table_id: cdktf.stringToTerraform(this._customTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_table_id: {
        value: cdktf.stringToHclTerraform(this._customTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
