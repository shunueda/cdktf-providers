// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}
  */
  readonly handoverDateGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}
  */
  readonly handoverDateLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementInternalOccHandoverResourceBlocks#handover_resource_name}
  */
  readonly handoverResourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#id DataOciCapacityManagementInternalOccHandoverResourceBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#namespace DataOciCapacityManagementInternalOccHandoverResourceBlocks#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_customer_group_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_customer_group_id}
  */
  readonly occCustomerGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlocks#occ_handover_resource_block_id}
  */
  readonly occHandoverResourceBlockId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#filter DataOciCapacityManagementInternalOccHandoverResourceBlocks#filter}
  */
  readonly filter?: DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter[] | cdktf.IResolvable;
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests {
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // handover_quantity - computed: true, optional: false, required: false
  public get handoverQuantity() {
    return this.getStringAttribute('handover_quantity');
  }

  // occ_capacity_request_id - computed: true, optional: false, required: false
  public get occCapacityRequestId() {
    return this.getStringAttribute('occ_capacity_request_id');
  }
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails {
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails | undefined) {
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

  // block - computed: true, optional: false, required: false
  public get block() {
    return this.getStringAttribute('block');
  }

  // building - computed: true, optional: false, required: false
  public get building() {
    return this.getStringAttribute('building');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // room - computed: true, optional: false, required: false
  public get room() {
    return this.getStringAttribute('room');
  }

  // workload_type - computed: true, optional: false, required: false
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems {
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_capacity_requests - computed: true, optional: false, required: false
  private _associatedCapacityRequests = new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList(this, "associated_capacity_requests", false);
  public get associatedCapacityRequests() {
    return this._associatedCapacityRequests;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // handover_date - computed: true, optional: false, required: false
  public get handoverDate() {
    return this.getStringAttribute('handover_date');
  }

  // handover_resource_name - computed: true, optional: false, required: false
  public get handoverResourceName() {
    return this.getStringAttribute('handover_resource_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // occ_customer_group_id - computed: true, optional: false, required: false
  public get occCustomerGroupId() {
    return this.getStringAttribute('occ_customer_group_id');
  }

  // placement_details - computed: true, optional: false, required: false
  private _placementDetails = new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList(this, "placement_details", false);
  public get placementDetails() {
    return this._placementDetails;
  }

  // total_handover_quantity - computed: true, optional: false, required: false
  public get totalHandoverQuantity() {
    return this.getStringAttribute('total_handover_quantity');
  }
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection {
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#name DataOciCapacityManagementInternalOccHandoverResourceBlocks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#regex DataOciCapacityManagementInternalOccHandoverResourceBlocks#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#values DataOciCapacityManagementInternalOccHandoverResourceBlocks#values}
  */
  readonly values: string[];
}

export function dataOciCapacityManagementInternalOccHandoverResourceBlocksFilterToTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter | cdktf.IResolvable): any {
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


export function dataOciCapacityManagementInternalOccHandoverResourceBlocksFilterToHclTerraform(struct?: DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter | cdktf.IResolvable): any {
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

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference {
    return new DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks oci_capacity_management_internal_occ_handover_resource_blocks}
*/
export class DataOciCapacityManagementInternalOccHandoverResourceBlocks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_internal_occ_handover_resource_blocks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCapacityManagementInternalOccHandoverResourceBlocks to import
  * @param importFromId The id of the existing DataOciCapacityManagementInternalOccHandoverResourceBlocks that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCapacityManagementInternalOccHandoverResourceBlocks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_internal_occ_handover_resource_blocks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/capacity_management_internal_occ_handover_resource_blocks oci_capacity_management_internal_occ_handover_resource_blocks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementInternalOccHandoverResourceBlocksConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_internal_occ_handover_resource_blocks',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._handoverDateGreaterThanOrEqualTo = config.handoverDateGreaterThanOrEqualTo;
    this._handoverDateLessThanOrEqualTo = config.handoverDateLessThanOrEqualTo;
    this._handoverResourceName = config.handoverResourceName;
    this._id = config.id;
    this._namespace = config.namespace;
    this._occCustomerGroupId = config.occCustomerGroupId;
    this._occHandoverResourceBlockId = config.occHandoverResourceBlockId;
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

  // handover_date_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _handoverDateGreaterThanOrEqualTo?: string; 
  public get handoverDateGreaterThanOrEqualTo() {
    return this.getStringAttribute('handover_date_greater_than_or_equal_to');
  }
  public set handoverDateGreaterThanOrEqualTo(value: string) {
    this._handoverDateGreaterThanOrEqualTo = value;
  }
  public resetHandoverDateGreaterThanOrEqualTo() {
    this._handoverDateGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverDateGreaterThanOrEqualToInput() {
    return this._handoverDateGreaterThanOrEqualTo;
  }

  // handover_date_less_than_or_equal_to - computed: false, optional: true, required: false
  private _handoverDateLessThanOrEqualTo?: string; 
  public get handoverDateLessThanOrEqualTo() {
    return this.getStringAttribute('handover_date_less_than_or_equal_to');
  }
  public set handoverDateLessThanOrEqualTo(value: string) {
    this._handoverDateLessThanOrEqualTo = value;
  }
  public resetHandoverDateLessThanOrEqualTo() {
    this._handoverDateLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverDateLessThanOrEqualToInput() {
    return this._handoverDateLessThanOrEqualTo;
  }

  // handover_resource_name - computed: false, optional: true, required: false
  private _handoverResourceName?: string; 
  public get handoverResourceName() {
    return this.getStringAttribute('handover_resource_name');
  }
  public set handoverResourceName(value: string) {
    this._handoverResourceName = value;
  }
  public resetHandoverResourceName() {
    this._handoverResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverResourceNameInput() {
    return this._handoverResourceName;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // occ_customer_group_id - computed: false, optional: false, required: true
  private _occCustomerGroupId?: string; 
  public get occCustomerGroupId() {
    return this.getStringAttribute('occ_customer_group_id');
  }
  public set occCustomerGroupId(value: string) {
    this._occCustomerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occCustomerGroupIdInput() {
    return this._occCustomerGroupId;
  }

  // occ_handover_resource_block_collection - computed: true, optional: false, required: false
  private _occHandoverResourceBlockCollection = new DataOciCapacityManagementInternalOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList(this, "occ_handover_resource_block_collection", false);
  public get occHandoverResourceBlockCollection() {
    return this._occHandoverResourceBlockCollection;
  }

  // occ_handover_resource_block_id - computed: false, optional: true, required: false
  private _occHandoverResourceBlockId?: string; 
  public get occHandoverResourceBlockId() {
    return this.getStringAttribute('occ_handover_resource_block_id');
  }
  public set occHandoverResourceBlockId(value: string) {
    this._occHandoverResourceBlockId = value;
  }
  public resetOccHandoverResourceBlockId() {
    this._occHandoverResourceBlockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occHandoverResourceBlockIdInput() {
    return this._occHandoverResourceBlockId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCapacityManagementInternalOccHandoverResourceBlocksFilter[] | cdktf.IResolvable) {
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
      handover_date_greater_than_or_equal_to: cdktf.stringToTerraform(this._handoverDateGreaterThanOrEqualTo),
      handover_date_less_than_or_equal_to: cdktf.stringToTerraform(this._handoverDateLessThanOrEqualTo),
      handover_resource_name: cdktf.stringToTerraform(this._handoverResourceName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      occ_customer_group_id: cdktf.stringToTerraform(this._occCustomerGroupId),
      occ_handover_resource_block_id: cdktf.stringToTerraform(this._occHandoverResourceBlockId),
      filter: cdktf.listMapper(dataOciCapacityManagementInternalOccHandoverResourceBlocksFilterToTerraform, true)(this._filter.internalValue),
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
      handover_date_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._handoverDateGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handover_date_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._handoverDateLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handover_resource_name: {
        value: cdktf.stringToHclTerraform(this._handoverResourceName),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      occ_customer_group_id: {
        value: cdktf.stringToHclTerraform(this._occCustomerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      occ_handover_resource_block_id: {
        value: cdktf.stringToHclTerraform(this._occHandoverResourceBlockId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCapacityManagementInternalOccHandoverResourceBlocksFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCapacityManagementInternalOccHandoverResourceBlocksFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
