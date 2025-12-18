// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeteringComputationCustomTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#compartment_id MeteringComputationCustomTable#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#id MeteringComputationCustomTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#saved_report_id MeteringComputationCustomTable#saved_report_id}
  */
  readonly savedReportId: string;
  /**
  * saved_custom_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#saved_custom_table MeteringComputationCustomTable#saved_custom_table}
  */
  readonly savedCustomTable: MeteringComputationCustomTableSavedCustomTable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#timeouts MeteringComputationCustomTable#timeouts}
  */
  readonly timeouts?: MeteringComputationCustomTableTimeouts;
}
export interface MeteringComputationCustomTableSavedCustomTableGroupByTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#key MeteringComputationCustomTable#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#namespace MeteringComputationCustomTable#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#value MeteringComputationCustomTable#value}
  */
  readonly value?: string;
}

export function meteringComputationCustomTableSavedCustomTableGroupByTagToTerraform(struct?: MeteringComputationCustomTableSavedCustomTableGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function meteringComputationCustomTableSavedCustomTableGroupByTagToHclTerraform(struct?: MeteringComputationCustomTableSavedCustomTableGroupByTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeteringComputationCustomTableSavedCustomTableGroupByTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationCustomTableSavedCustomTableGroupByTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._namespace = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MeteringComputationCustomTableSavedCustomTableGroupByTagList extends cdktf.ComplexList {
  public internalValue? : MeteringComputationCustomTableSavedCustomTableGroupByTag[] | cdktf.IResolvable

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
  public get(index: number): MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference {
    return new MeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MeteringComputationCustomTableSavedCustomTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#column_group_by MeteringComputationCustomTable#column_group_by}
  */
  readonly columnGroupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#compartment_depth MeteringComputationCustomTable#compartment_depth}
  */
  readonly compartmentDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#display_name MeteringComputationCustomTable#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#row_group_by MeteringComputationCustomTable#row_group_by}
  */
  readonly rowGroupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#version MeteringComputationCustomTable#version}
  */
  readonly version?: number;
  /**
  * group_by_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#group_by_tag MeteringComputationCustomTable#group_by_tag}
  */
  readonly groupByTag?: MeteringComputationCustomTableSavedCustomTableGroupByTag[] | cdktf.IResolvable;
}

export function meteringComputationCustomTableSavedCustomTableToTerraform(struct?: MeteringComputationCustomTableSavedCustomTableOutputReference | MeteringComputationCustomTableSavedCustomTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnGroupBy),
    compartment_depth: cdktf.numberToTerraform(struct!.compartmentDepth),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    row_group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rowGroupBy),
    version: cdktf.numberToTerraform(struct!.version),
    group_by_tag: cdktf.listMapper(meteringComputationCustomTableSavedCustomTableGroupByTagToTerraform, true)(struct!.groupByTag),
  }
}


export function meteringComputationCustomTableSavedCustomTableToHclTerraform(struct?: MeteringComputationCustomTableSavedCustomTableOutputReference | MeteringComputationCustomTableSavedCustomTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnGroupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compartment_depth: {
      value: cdktf.numberToHclTerraform(struct!.compartmentDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    row_group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rowGroupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_by_tag: {
      value: cdktf.listMapperHcl(meteringComputationCustomTableSavedCustomTableGroupByTagToHclTerraform, true)(struct!.groupByTag),
      isBlock: true,
      type: "list",
      storageClassType: "MeteringComputationCustomTableSavedCustomTableGroupByTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeteringComputationCustomTableSavedCustomTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MeteringComputationCustomTableSavedCustomTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnGroupBy = this._columnGroupBy;
    }
    if (this._compartmentDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentDepth = this._compartmentDepth;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._rowGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowGroupBy = this._rowGroupBy;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._groupByTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTag = this._groupByTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeteringComputationCustomTableSavedCustomTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnGroupBy = undefined;
      this._compartmentDepth = undefined;
      this._displayName = undefined;
      this._rowGroupBy = undefined;
      this._version = undefined;
      this._groupByTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnGroupBy = value.columnGroupBy;
      this._compartmentDepth = value.compartmentDepth;
      this._displayName = value.displayName;
      this._rowGroupBy = value.rowGroupBy;
      this._version = value.version;
      this._groupByTag.internalValue = value.groupByTag;
    }
  }

  // column_group_by - computed: true, optional: true, required: false
  private _columnGroupBy?: string[]; 
  public get columnGroupBy() {
    return this.getListAttribute('column_group_by');
  }
  public set columnGroupBy(value: string[]) {
    this._columnGroupBy = value;
  }
  public resetColumnGroupBy() {
    this._columnGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGroupByInput() {
    return this._columnGroupBy;
  }

  // compartment_depth - computed: true, optional: true, required: false
  private _compartmentDepth?: number; 
  public get compartmentDepth() {
    return this.getNumberAttribute('compartment_depth');
  }
  public set compartmentDepth(value: number) {
    this._compartmentDepth = value;
  }
  public resetCompartmentDepth() {
    this._compartmentDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentDepthInput() {
    return this._compartmentDepth;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // row_group_by - computed: true, optional: true, required: false
  private _rowGroupBy?: string[]; 
  public get rowGroupBy() {
    return this.getListAttribute('row_group_by');
  }
  public set rowGroupBy(value: string[]) {
    this._rowGroupBy = value;
  }
  public resetRowGroupBy() {
    this._rowGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowGroupByInput() {
    return this._rowGroupBy;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // group_by_tag - computed: false, optional: true, required: false
  private _groupByTag = new MeteringComputationCustomTableSavedCustomTableGroupByTagList(this, "group_by_tag", false);
  public get groupByTag() {
    return this._groupByTag;
  }
  public putGroupByTag(value: MeteringComputationCustomTableSavedCustomTableGroupByTag[] | cdktf.IResolvable) {
    this._groupByTag.internalValue = value;
  }
  public resetGroupByTag() {
    this._groupByTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTagInput() {
    return this._groupByTag.internalValue;
  }
}
export interface MeteringComputationCustomTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#create MeteringComputationCustomTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#delete MeteringComputationCustomTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#update MeteringComputationCustomTable#update}
  */
  readonly update?: string;
}

export function meteringComputationCustomTableTimeoutsToTerraform(struct?: MeteringComputationCustomTableTimeouts | cdktf.IResolvable): any {
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


export function meteringComputationCustomTableTimeoutsToHclTerraform(struct?: MeteringComputationCustomTableTimeouts | cdktf.IResolvable): any {
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

export class MeteringComputationCustomTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MeteringComputationCustomTableTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MeteringComputationCustomTableTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table oci_metering_computation_custom_table}
*/
export class MeteringComputationCustomTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_custom_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeteringComputationCustomTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeteringComputationCustomTable to import
  * @param importFromId The id of the existing MeteringComputationCustomTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeteringComputationCustomTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_metering_computation_custom_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/metering_computation_custom_table oci_metering_computation_custom_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeteringComputationCustomTableConfig
  */
  public constructor(scope: Construct, id: string, config: MeteringComputationCustomTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_custom_table',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._id = config.id;
    this._savedReportId = config.savedReportId;
    this._savedCustomTable.internalValue = config.savedCustomTable;
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

  // saved_report_id - computed: false, optional: false, required: true
  private _savedReportId?: string; 
  public get savedReportId() {
    return this.getStringAttribute('saved_report_id');
  }
  public set savedReportId(value: string) {
    this._savedReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get savedReportIdInput() {
    return this._savedReportId;
  }

  // saved_custom_table - computed: false, optional: false, required: true
  private _savedCustomTable = new MeteringComputationCustomTableSavedCustomTableOutputReference(this, "saved_custom_table");
  public get savedCustomTable() {
    return this._savedCustomTable;
  }
  public putSavedCustomTable(value: MeteringComputationCustomTableSavedCustomTable) {
    this._savedCustomTable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get savedCustomTableInput() {
    return this._savedCustomTable.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MeteringComputationCustomTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MeteringComputationCustomTableTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      saved_report_id: cdktf.stringToTerraform(this._savedReportId),
      saved_custom_table: meteringComputationCustomTableSavedCustomTableToTerraform(this._savedCustomTable.internalValue),
      timeouts: meteringComputationCustomTableTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saved_report_id: {
        value: cdktf.stringToHclTerraform(this._savedReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saved_custom_table: {
        value: meteringComputationCustomTableSavedCustomTableToHclTerraform(this._savedCustomTable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeteringComputationCustomTableSavedCustomTableList",
      },
      timeouts: {
        value: meteringComputationCustomTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MeteringComputationCustomTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
