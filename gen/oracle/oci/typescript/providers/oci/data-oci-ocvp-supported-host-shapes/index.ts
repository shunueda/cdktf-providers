// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOcvpSupportedHostShapesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#compartment_id DataOciOcvpSupportedHostShapes#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#id DataOciOcvpSupportedHostShapes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#initial_host_shape_name DataOciOcvpSupportedHostShapes#initial_host_shape_name}
  */
  readonly initialHostShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#is_single_host_sddc_supported DataOciOcvpSupportedHostShapes#is_single_host_sddc_supported}
  */
  readonly isSingleHostSddcSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#sddc_type DataOciOcvpSupportedHostShapes#sddc_type}
  */
  readonly sddcType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#filter DataOciOcvpSupportedHostShapes#filter}
  */
  readonly filter?: DataOciOcvpSupportedHostShapesFilter[] | cdktf.IResolvable;
}
export interface DataOciOcvpSupportedHostShapesItems {
}

export function dataOciOcvpSupportedHostShapesItemsToTerraform(struct?: DataOciOcvpSupportedHostShapesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpSupportedHostShapesItemsToHclTerraform(struct?: DataOciOcvpSupportedHostShapesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpSupportedHostShapesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSupportedHostShapesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSupportedHostShapesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ocpu_count - computed: true, optional: false, required: false
  public get defaultOcpuCount() {
    return this.getNumberAttribute('default_ocpu_count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_single_host_sddc_supported - computed: true, optional: false, required: false
  public get isSingleHostSddcSupported() {
    return this.getBooleanAttribute('is_single_host_sddc_supported');
  }

  // is_support_monthly_commitment - computed: true, optional: false, required: false
  public get isSupportMonthlyCommitment() {
    return this.getBooleanAttribute('is_support_monthly_commitment');
  }

  // is_support_monthly_sku - computed: true, optional: false, required: false
  public get isSupportMonthlySku() {
    return this.getBooleanAttribute('is_support_monthly_sku');
  }

  // is_support_shielded_instances - computed: true, optional: false, required: false
  public get isSupportShieldedInstances() {
    return this.getBooleanAttribute('is_support_shielded_instances');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shape_family - computed: true, optional: false, required: false
  public get shapeFamily() {
    return this.getStringAttribute('shape_family');
  }

  // supported_ocpu_count - computed: true, optional: false, required: false
  public get supportedOcpuCount() {
    return this.getNumberListAttribute('supported_ocpu_count');
  }

  // supported_operations - computed: true, optional: false, required: false
  public get supportedOperations() {
    return this.getListAttribute('supported_operations');
  }

  // supported_sddc_types - computed: true, optional: false, required: false
  public get supportedSddcTypes() {
    return this.getListAttribute('supported_sddc_types');
  }

  // supported_vmware_software_versions - computed: true, optional: false, required: false
  public get supportedVmwareSoftwareVersions() {
    return this.getListAttribute('supported_vmware_software_versions');
  }
}

export class DataOciOcvpSupportedHostShapesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpSupportedHostShapesItemsOutputReference {
    return new DataOciOcvpSupportedHostShapesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpSupportedHostShapesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#name DataOciOcvpSupportedHostShapes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#regex DataOciOcvpSupportedHostShapes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#values DataOciOcvpSupportedHostShapes#values}
  */
  readonly values: string[];
}

export function dataOciOcvpSupportedHostShapesFilterToTerraform(struct?: DataOciOcvpSupportedHostShapesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOcvpSupportedHostShapesFilterToHclTerraform(struct?: DataOciOcvpSupportedHostShapesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOcvpSupportedHostShapesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpSupportedHostShapesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpSupportedHostShapesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOcvpSupportedHostShapesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOcvpSupportedHostShapesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOcvpSupportedHostShapesFilterOutputReference {
    return new DataOciOcvpSupportedHostShapesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes oci_ocvp_supported_host_shapes}
*/
export class DataOciOcvpSupportedHostShapes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_supported_host_shapes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOcvpSupportedHostShapes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOcvpSupportedHostShapes to import
  * @param importFromId The id of the existing DataOciOcvpSupportedHostShapes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOcvpSupportedHostShapes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_supported_host_shapes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/ocvp_supported_host_shapes oci_ocvp_supported_host_shapes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOcvpSupportedHostShapesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOcvpSupportedHostShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_supported_host_shapes',
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
    this._initialHostShapeName = config.initialHostShapeName;
    this._isSingleHostSddcSupported = config.isSingleHostSddcSupported;
    this._name = config.name;
    this._sddcType = config.sddcType;
    this._filter.internalValue = config.filter;
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

  // initial_host_shape_name - computed: false, optional: true, required: false
  private _initialHostShapeName?: string; 
  public get initialHostShapeName() {
    return this.getStringAttribute('initial_host_shape_name');
  }
  public set initialHostShapeName(value: string) {
    this._initialHostShapeName = value;
  }
  public resetInitialHostShapeName() {
    this._initialHostShapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialHostShapeNameInput() {
    return this._initialHostShapeName;
  }

  // is_single_host_sddc_supported - computed: false, optional: true, required: false
  private _isSingleHostSddcSupported?: boolean | cdktf.IResolvable; 
  public get isSingleHostSddcSupported() {
    return this.getBooleanAttribute('is_single_host_sddc_supported');
  }
  public set isSingleHostSddcSupported(value: boolean | cdktf.IResolvable) {
    this._isSingleHostSddcSupported = value;
  }
  public resetIsSingleHostSddcSupported() {
    this._isSingleHostSddcSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleHostSddcSupportedInput() {
    return this._isSingleHostSddcSupported;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOcvpSupportedHostShapesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sddc_type - computed: false, optional: true, required: false
  private _sddcType?: string; 
  public get sddcType() {
    return this.getStringAttribute('sddc_type');
  }
  public set sddcType(value: string) {
    this._sddcType = value;
  }
  public resetSddcType() {
    this._sddcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcTypeInput() {
    return this._sddcType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOcvpSupportedHostShapesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOcvpSupportedHostShapesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      initial_host_shape_name: cdktf.stringToTerraform(this._initialHostShapeName),
      is_single_host_sddc_supported: cdktf.booleanToTerraform(this._isSingleHostSddcSupported),
      name: cdktf.stringToTerraform(this._name),
      sddc_type: cdktf.stringToTerraform(this._sddcType),
      filter: cdktf.listMapper(dataOciOcvpSupportedHostShapesFilterToTerraform, true)(this._filter.internalValue),
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
      initial_host_shape_name: {
        value: cdktf.stringToHclTerraform(this._initialHostShapeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_single_host_sddc_supported: {
        value: cdktf.booleanToHclTerraform(this._isSingleHostSddcSupported),
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
      sddc_type: {
        value: cdktf.stringToHclTerraform(this._sddcType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOcvpSupportedHostShapesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOcvpSupportedHostShapesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
