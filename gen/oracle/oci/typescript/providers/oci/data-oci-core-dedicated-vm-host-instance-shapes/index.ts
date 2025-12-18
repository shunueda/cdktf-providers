// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreDedicatedVmHostInstanceShapesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#availability_domain DataOciCoreDedicatedVmHostInstanceShapes#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#compartment_id DataOciCoreDedicatedVmHostInstanceShapes#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#dedicated_vm_host_shape DataOciCoreDedicatedVmHostInstanceShapes#dedicated_vm_host_shape}
  */
  readonly dedicatedVmHostShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#id DataOciCoreDedicatedVmHostInstanceShapes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#filter DataOciCoreDedicatedVmHostInstanceShapes#filter}
  */
  readonly filter?: DataOciCoreDedicatedVmHostInstanceShapesFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilities {
}

export function dataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilitiesToTerraform(struct?: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilitiesToHclTerraform(struct?: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_memory_encryption_supported - computed: true, optional: false, required: false
  public get isMemoryEncryptionSupported() {
    return this.getBooleanAttribute('is_memory_encryption_supported');
  }
}

export class DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilitiesOutputReference {
    return new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes {
}

export function dataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesToTerraform(struct?: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesToHclTerraform(struct?: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // instance_shape_name - computed: true, optional: false, required: false
  public get instanceShapeName() {
    return this.getStringAttribute('instance_shape_name');
  }

  // supported_capabilities - computed: true, optional: false, required: false
  private _supportedCapabilities = new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesSupportedCapabilitiesList(this, "supported_capabilities", false);
  public get supportedCapabilities() {
    return this._supportedCapabilities;
  }
}

export class DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference {
    return new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreDedicatedVmHostInstanceShapesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#name DataOciCoreDedicatedVmHostInstanceShapes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#regex DataOciCoreDedicatedVmHostInstanceShapes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#values DataOciCoreDedicatedVmHostInstanceShapes#values}
  */
  readonly values: string[];
}

export function dataOciCoreDedicatedVmHostInstanceShapesFilterToTerraform(struct?: DataOciCoreDedicatedVmHostInstanceShapesFilter | cdktf.IResolvable): any {
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


export function dataOciCoreDedicatedVmHostInstanceShapesFilterToHclTerraform(struct?: DataOciCoreDedicatedVmHostInstanceShapesFilter | cdktf.IResolvable): any {
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

export class DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreDedicatedVmHostInstanceShapesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCoreDedicatedVmHostInstanceShapesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCoreDedicatedVmHostInstanceShapesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreDedicatedVmHostInstanceShapesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference {
    return new DataOciCoreDedicatedVmHostInstanceShapesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes oci_core_dedicated_vm_host_instance_shapes}
*/
export class DataOciCoreDedicatedVmHostInstanceShapes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_dedicated_vm_host_instance_shapes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreDedicatedVmHostInstanceShapes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreDedicatedVmHostInstanceShapes to import
  * @param importFromId The id of the existing DataOciCoreDedicatedVmHostInstanceShapes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreDedicatedVmHostInstanceShapes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_dedicated_vm_host_instance_shapes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_dedicated_vm_host_instance_shapes oci_core_dedicated_vm_host_instance_shapes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreDedicatedVmHostInstanceShapesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostInstanceShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_host_instance_shapes',
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
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._dedicatedVmHostShape = config.dedicatedVmHostShape;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

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

  // dedicated_vm_host_instance_shapes - computed: true, optional: false, required: false
  private _dedicatedVmHostInstanceShapes = new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapesList(this, "dedicated_vm_host_instance_shapes", false);
  public get dedicatedVmHostInstanceShapes() {
    return this._dedicatedVmHostInstanceShapes;
  }

  // dedicated_vm_host_shape - computed: false, optional: true, required: false
  private _dedicatedVmHostShape?: string; 
  public get dedicatedVmHostShape() {
    return this.getStringAttribute('dedicated_vm_host_shape');
  }
  public set dedicatedVmHostShape(value: string) {
    this._dedicatedVmHostShape = value;
  }
  public resetDedicatedVmHostShape() {
    this._dedicatedVmHostShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostShapeInput() {
    return this._dedicatedVmHostShape;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreDedicatedVmHostInstanceShapesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreDedicatedVmHostInstanceShapesFilter[] | cdktf.IResolvable) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      dedicated_vm_host_shape: cdktf.stringToTerraform(this._dedicatedVmHostShape),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciCoreDedicatedVmHostInstanceShapesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_vm_host_shape: {
        value: cdktf.stringToHclTerraform(this._dedicatedVmHostShape),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreDedicatedVmHostInstanceShapesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreDedicatedVmHostInstanceShapesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
