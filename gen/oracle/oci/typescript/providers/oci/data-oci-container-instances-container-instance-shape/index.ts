// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/container_instances_container_instance_shape
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciContainerInstancesContainerInstanceShapeConfigA extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/container_instances_container_instance_shape#availability_domain DataOciContainerInstancesContainerInstanceShape#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/container_instances_container_instance_shape#compartment_id DataOciContainerInstancesContainerInstanceShape#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/container_instances_container_instance_shape#id DataOciContainerInstancesContainerInstanceShape#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions {
}

export function dataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsToTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsToHclTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_per_ocpu_in_gbs - computed: true, optional: false, required: false
  public get defaultPerOcpuInGbs() {
    return this.getNumberAttribute('default_per_ocpu_in_gbs');
  }

  // max_in_gbs - computed: true, optional: false, required: false
  public get maxInGbs() {
    return this.getNumberAttribute('max_in_gbs');
  }

  // max_per_ocpu_in_gbs - computed: true, optional: false, required: false
  public get maxPerOcpuInGbs() {
    return this.getNumberAttribute('max_per_ocpu_in_gbs');
  }

  // min_in_gbs - computed: true, optional: false, required: false
  public get minInGbs() {
    return this.getNumberAttribute('min_in_gbs');
  }

  // min_per_ocpu_in_gbs - computed: true, optional: false, required: false
  public get minPerOcpuInGbs() {
    return this.getNumberAttribute('min_per_ocpu_in_gbs');
  }
}

export class DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference {
    return new DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions {
}

export function dataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsToTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsToHclTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_per_ocpu_in_gbps - computed: true, optional: false, required: false
  public get defaultPerOcpuInGbps() {
    return this.getNumberAttribute('default_per_ocpu_in_gbps');
  }

  // max_in_gbps - computed: true, optional: false, required: false
  public get maxInGbps() {
    return this.getNumberAttribute('max_in_gbps');
  }

  // min_in_gbps - computed: true, optional: false, required: false
  public get minInGbps() {
    return this.getNumberAttribute('min_in_gbps');
  }
}

export class DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference {
    return new DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions {
}

export function dataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsToTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsToHclTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference {
    return new DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciContainerInstancesContainerInstanceShapeItems {
}

export function dataOciContainerInstancesContainerInstanceShapeItemsToTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerInstancesContainerInstanceShapeItemsToHclTerraform(struct?: DataOciContainerInstancesContainerInstanceShapeItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerInstancesContainerInstanceShapeItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerInstancesContainerInstanceShapeItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerInstancesContainerInstanceShapeItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_options - computed: true, optional: false, required: false
  private _memoryOptions = new DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList(this, "memory_options", false);
  public get memoryOptions() {
    return this._memoryOptions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networking_bandwidth_options - computed: true, optional: false, required: false
  private _networkingBandwidthOptions = new DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList(this, "networking_bandwidth_options", false);
  public get networkingBandwidthOptions() {
    return this._networkingBandwidthOptions;
  }

  // ocpu_options - computed: true, optional: false, required: false
  private _ocpuOptions = new DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList(this, "ocpu_options", false);
  public get ocpuOptions() {
    return this._ocpuOptions;
  }

  // processor_description - computed: true, optional: false, required: false
  public get processorDescription() {
    return this.getStringAttribute('processor_description');
  }
}

export class DataOciContainerInstancesContainerInstanceShapeItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerInstancesContainerInstanceShapeItemsOutputReference {
    return new DataOciContainerInstancesContainerInstanceShapeItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/container_instances_container_instance_shape oci_container_instances_container_instance_shape}
*/
export class DataOciContainerInstancesContainerInstanceShape extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_container_instances_container_instance_shape";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShape resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciContainerInstancesContainerInstanceShape to import
  * @param importFromId The id of the existing DataOciContainerInstancesContainerInstanceShape that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/container_instances_container_instance_shape#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciContainerInstancesContainerInstanceShape to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_container_instances_container_instance_shape", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/container_instances_container_instance_shape oci_container_instances_container_instance_shape} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciContainerInstancesContainerInstanceShapeConfigA
  */
  public constructor(scope: Construct, id: string, config: DataOciContainerInstancesContainerInstanceShapeConfigA) {
    super(scope, id, {
      terraformResourceType: 'oci_container_instances_container_instance_shape',
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
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataOciContainerInstancesContainerInstanceShapeItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
