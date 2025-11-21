// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapacityManagementOccCapacityRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}
  */
  readonly dateExpectedCapacityHandover: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}
  */
  readonly lifecycleDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}
  */
  readonly occAvailabilityCatalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}
  */
  readonly requestState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}
  */
  readonly requestType?: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#details CapacityManagementOccCapacityRequest#details}
  */
  readonly details: CapacityManagementOccCapacityRequestDetails[] | cdktf.IResolvable;
  /**
  * patch_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#patch_operations CapacityManagementOccCapacityRequest#patch_operations}
  */
  readonly patchOperations?: CapacityManagementOccCapacityRequestPatchOperations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#timeouts CapacityManagementOccCapacityRequest#timeouts}
  */
  readonly timeouts?: CapacityManagementOccCapacityRequestTimeouts;
}
export interface CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}
  */
  readonly handoverQuantity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}
  */
  readonly occHandoverResourceBlockId?: string;
}

export function capacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructToTerraform(struct?: CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handover_quantity: cdktf.stringToTerraform(struct!.handoverQuantity),
    occ_handover_resource_block_id: cdktf.stringToTerraform(struct!.occHandoverResourceBlockId),
  }
}


export function capacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructToHclTerraform(struct?: CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handover_quantity: {
      value: cdktf.stringToHclTerraform(struct!.handoverQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    occ_handover_resource_block_id: {
      value: cdktf.stringToHclTerraform(struct!.occHandoverResourceBlockId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handoverQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.handoverQuantity = this._handoverQuantity;
    }
    if (this._occHandoverResourceBlockId !== undefined) {
      hasAnyValues = true;
      internalValueResult.occHandoverResourceBlockId = this._occHandoverResourceBlockId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._handoverQuantity = undefined;
      this._occHandoverResourceBlockId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._handoverQuantity = value.handoverQuantity;
      this._occHandoverResourceBlockId = value.occHandoverResourceBlockId;
    }
  }

  // handover_quantity - computed: true, optional: true, required: false
  private _handoverQuantity?: string; 
  public get handoverQuantity() {
    return this.getStringAttribute('handover_quantity');
  }
  public set handoverQuantity(value: string) {
    this._handoverQuantity = value;
  }
  public resetHandoverQuantity() {
    this._handoverQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverQuantityInput() {
    return this._handoverQuantity;
  }

  // occ_handover_resource_block_id - computed: true, optional: true, required: false
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
}

export class CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList extends cdktf.ComplexList {
  public internalValue? : CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct[] | cdktf.IResolvable

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
  public get(index: number): CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference {
    return new CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityManagementOccCapacityRequestDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}
  */
  readonly actualHandoverQuantity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}
  */
  readonly dateActualHandover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}
  */
  readonly dateExpectedHandover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}
  */
  readonly demandQuantity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}
  */
  readonly expectedHandoverQuantity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}
  */
  readonly resourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}
  */
  readonly sourceWorkloadType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}
  */
  readonly workloadType: string;
  /**
  * associated_occ_handover_resource_block_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#associated_occ_handover_resource_block_list CapacityManagementOccCapacityRequest#associated_occ_handover_resource_block_list}
  */
  readonly associatedOccHandoverResourceBlockList?: CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct[] | cdktf.IResolvable;
}

export function capacityManagementOccCapacityRequestDetailsToTerraform(struct?: CapacityManagementOccCapacityRequestDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actual_handover_quantity: cdktf.stringToTerraform(struct!.actualHandoverQuantity),
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    date_actual_handover: cdktf.stringToTerraform(struct!.dateActualHandover),
    date_expected_handover: cdktf.stringToTerraform(struct!.dateExpectedHandover),
    demand_quantity: cdktf.stringToTerraform(struct!.demandQuantity),
    expected_handover_quantity: cdktf.stringToTerraform(struct!.expectedHandoverQuantity),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    source_workload_type: cdktf.stringToTerraform(struct!.sourceWorkloadType),
    workload_type: cdktf.stringToTerraform(struct!.workloadType),
    associated_occ_handover_resource_block_list: cdktf.listMapper(capacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructToTerraform, true)(struct!.associatedOccHandoverResourceBlockList),
  }
}


export function capacityManagementOccCapacityRequestDetailsToHclTerraform(struct?: CapacityManagementOccCapacityRequestDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actual_handover_quantity: {
      value: cdktf.stringToHclTerraform(struct!.actualHandoverQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_actual_handover: {
      value: cdktf.stringToHclTerraform(struct!.dateActualHandover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_expected_handover: {
      value: cdktf.stringToHclTerraform(struct!.dateExpectedHandover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    demand_quantity: {
      value: cdktf.stringToHclTerraform(struct!.demandQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_handover_quantity: {
      value: cdktf.stringToHclTerraform(struct!.expectedHandoverQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_workload_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceWorkloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_type: {
      value: cdktf.stringToHclTerraform(struct!.workloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    associated_occ_handover_resource_block_list: {
      value: cdktf.listMapperHcl(capacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructToHclTerraform, true)(struct!.associatedOccHandoverResourceBlockList),
      isBlock: true,
      type: "list",
      storageClassType: "CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapacityManagementOccCapacityRequestDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapacityManagementOccCapacityRequestDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actualHandoverQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.actualHandoverQuantity = this._actualHandoverQuantity;
    }
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._dateActualHandover !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateActualHandover = this._dateActualHandover;
    }
    if (this._dateExpectedHandover !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateExpectedHandover = this._dateExpectedHandover;
    }
    if (this._demandQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.demandQuantity = this._demandQuantity;
    }
    if (this._expectedHandoverQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedHandoverQuantity = this._expectedHandoverQuantity;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._sourceWorkloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceWorkloadType = this._sourceWorkloadType;
    }
    if (this._workloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadType = this._workloadType;
    }
    if (this._associatedOccHandoverResourceBlockList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedOccHandoverResourceBlockList = this._associatedOccHandoverResourceBlockList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityManagementOccCapacityRequestDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actualHandoverQuantity = undefined;
      this._availabilityDomain = undefined;
      this._dateActualHandover = undefined;
      this._dateExpectedHandover = undefined;
      this._demandQuantity = undefined;
      this._expectedHandoverQuantity = undefined;
      this._resourceName = undefined;
      this._resourceType = undefined;
      this._sourceWorkloadType = undefined;
      this._workloadType = undefined;
      this._associatedOccHandoverResourceBlockList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actualHandoverQuantity = value.actualHandoverQuantity;
      this._availabilityDomain = value.availabilityDomain;
      this._dateActualHandover = value.dateActualHandover;
      this._dateExpectedHandover = value.dateExpectedHandover;
      this._demandQuantity = value.demandQuantity;
      this._expectedHandoverQuantity = value.expectedHandoverQuantity;
      this._resourceName = value.resourceName;
      this._resourceType = value.resourceType;
      this._sourceWorkloadType = value.sourceWorkloadType;
      this._workloadType = value.workloadType;
      this._associatedOccHandoverResourceBlockList.internalValue = value.associatedOccHandoverResourceBlockList;
    }
  }

  // actual_handover_quantity - computed: true, optional: true, required: false
  private _actualHandoverQuantity?: string; 
  public get actualHandoverQuantity() {
    return this.getStringAttribute('actual_handover_quantity');
  }
  public set actualHandoverQuantity(value: string) {
    this._actualHandoverQuantity = value;
  }
  public resetActualHandoverQuantity() {
    this._actualHandoverQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actualHandoverQuantityInput() {
    return this._actualHandoverQuantity;
  }

  // availability_domain - computed: true, optional: true, required: false
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

  // date_actual_handover - computed: true, optional: true, required: false
  private _dateActualHandover?: string; 
  public get dateActualHandover() {
    return this.getStringAttribute('date_actual_handover');
  }
  public set dateActualHandover(value: string) {
    this._dateActualHandover = value;
  }
  public resetDateActualHandover() {
    this._dateActualHandover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateActualHandoverInput() {
    return this._dateActualHandover;
  }

  // date_expected_handover - computed: true, optional: true, required: false
  private _dateExpectedHandover?: string; 
  public get dateExpectedHandover() {
    return this.getStringAttribute('date_expected_handover');
  }
  public set dateExpectedHandover(value: string) {
    this._dateExpectedHandover = value;
  }
  public resetDateExpectedHandover() {
    this._dateExpectedHandover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateExpectedHandoverInput() {
    return this._dateExpectedHandover;
  }

  // demand_quantity - computed: false, optional: false, required: true
  private _demandQuantity?: string; 
  public get demandQuantity() {
    return this.getStringAttribute('demand_quantity');
  }
  public set demandQuantity(value: string) {
    this._demandQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get demandQuantityInput() {
    return this._demandQuantity;
  }

  // expected_handover_quantity - computed: true, optional: true, required: false
  private _expectedHandoverQuantity?: string; 
  public get expectedHandoverQuantity() {
    return this.getStringAttribute('expected_handover_quantity');
  }
  public set expectedHandoverQuantity(value: string) {
    this._expectedHandoverQuantity = value;
  }
  public resetExpectedHandoverQuantity() {
    this._expectedHandoverQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedHandoverQuantityInput() {
    return this._expectedHandoverQuantity;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // source_workload_type - computed: true, optional: true, required: false
  private _sourceWorkloadType?: string; 
  public get sourceWorkloadType() {
    return this.getStringAttribute('source_workload_type');
  }
  public set sourceWorkloadType(value: string) {
    this._sourceWorkloadType = value;
  }
  public resetSourceWorkloadType() {
    this._sourceWorkloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceWorkloadTypeInput() {
    return this._sourceWorkloadType;
  }

  // workload_type - computed: false, optional: false, required: true
  private _workloadType?: string; 
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
  public set workloadType(value: string) {
    this._workloadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType;
  }

  // associated_occ_handover_resource_block_list - computed: false, optional: true, required: false
  private _associatedOccHandoverResourceBlockList = new CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(this, "associated_occ_handover_resource_block_list", false);
  public get associatedOccHandoverResourceBlockList() {
    return this._associatedOccHandoverResourceBlockList;
  }
  public putAssociatedOccHandoverResourceBlockList(value: CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct[] | cdktf.IResolvable) {
    this._associatedOccHandoverResourceBlockList.internalValue = value;
  }
  public resetAssociatedOccHandoverResourceBlockList() {
    this._associatedOccHandoverResourceBlockList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedOccHandoverResourceBlockListInput() {
    return this._associatedOccHandoverResourceBlockList.internalValue;
  }
}

export class CapacityManagementOccCapacityRequestDetailsList extends cdktf.ComplexList {
  public internalValue? : CapacityManagementOccCapacityRequestDetails[] | cdktf.IResolvable

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
  public get(index: number): CapacityManagementOccCapacityRequestDetailsOutputReference {
    return new CapacityManagementOccCapacityRequestDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityManagementOccCapacityRequestPatchOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}
  */
  readonly selectedItem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}
  */
  readonly selection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}
  */
  readonly value: { [key: string]: string };
}

export function capacityManagementOccCapacityRequestPatchOperationsToTerraform(struct?: CapacityManagementOccCapacityRequestPatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    operation: cdktf.stringToTerraform(struct!.operation),
    position: cdktf.stringToTerraform(struct!.position),
    selected_item: cdktf.stringToTerraform(struct!.selectedItem),
    selection: cdktf.stringToTerraform(struct!.selection),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function capacityManagementOccCapacityRequestPatchOperationsToHclTerraform(struct?: CapacityManagementOccCapacityRequestPatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
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
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_item: {
      value: cdktf.stringToHclTerraform(struct!.selectedItem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection: {
      value: cdktf.stringToHclTerraform(struct!.selection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapacityManagementOccCapacityRequestPatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapacityManagementOccCapacityRequestPatchOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._selectedItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedItem = this._selectedItem;
    }
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityManagementOccCapacityRequestPatchOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._operation = undefined;
      this._position = undefined;
      this._selectedItem = undefined;
      this._selection = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._operation = value.operation;
      this._position = value.position;
      this._selectedItem = value.selectedItem;
      this._selection = value.selection;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // selected_item - computed: false, optional: true, required: false
  private _selectedItem?: string; 
  public get selectedItem() {
    return this.getStringAttribute('selected_item');
  }
  public set selectedItem(value: string) {
    this._selectedItem = value;
  }
  public resetSelectedItem() {
    this._selectedItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedItemInput() {
    return this._selectedItem;
  }

  // selection - computed: false, optional: false, required: true
  private _selection?: string; 
  public get selection() {
    return this.getStringAttribute('selection');
  }
  public set selection(value: string) {
    this._selection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
  }

  // value - computed: false, optional: false, required: true
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CapacityManagementOccCapacityRequestPatchOperationsList extends cdktf.ComplexList {
  public internalValue? : CapacityManagementOccCapacityRequestPatchOperations[] | cdktf.IResolvable

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
  public get(index: number): CapacityManagementOccCapacityRequestPatchOperationsOutputReference {
    return new CapacityManagementOccCapacityRequestPatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapacityManagementOccCapacityRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}
  */
  readonly update?: string;
}

export function capacityManagementOccCapacityRequestTimeoutsToTerraform(struct?: CapacityManagementOccCapacityRequestTimeouts | cdktf.IResolvable): any {
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


export function capacityManagementOccCapacityRequestTimeoutsToHclTerraform(struct?: CapacityManagementOccCapacityRequestTimeouts | cdktf.IResolvable): any {
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

export class CapacityManagementOccCapacityRequestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CapacityManagementOccCapacityRequestTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapacityManagementOccCapacityRequestTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}
*/
export class CapacityManagementOccCapacityRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_occ_capacity_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapacityManagementOccCapacityRequest to import
  * @param importFromId The id of the existing CapacityManagementOccCapacityRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapacityManagementOccCapacityRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_occ_capacity_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapacityManagementOccCapacityRequestConfig
  */
  public constructor(scope: Construct, id: string, config: CapacityManagementOccCapacityRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_occ_capacity_request',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._dateExpectedCapacityHandover = config.dateExpectedCapacityHandover;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._lifecycleDetails = config.lifecycleDetails;
    this._namespace = config.namespace;
    this._occAvailabilityCatalogId = config.occAvailabilityCatalogId;
    this._region = config.region;
    this._requestState = config.requestState;
    this._requestType = config.requestType;
    this._details.internalValue = config.details;
    this._patchOperations.internalValue = config.patchOperations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: true, required: false
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

  // date_expected_capacity_handover - computed: false, optional: false, required: true
  private _dateExpectedCapacityHandover?: string; 
  public get dateExpectedCapacityHandover() {
    return this.getStringAttribute('date_expected_capacity_handover');
  }
  public set dateExpectedCapacityHandover(value: string) {
    this._dateExpectedCapacityHandover = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateExpectedCapacityHandoverInput() {
    return this._dateExpectedCapacityHandover;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: true, required: false
  private _lifecycleDetails?: string; 
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }
  public set lifecycleDetails(value: string) {
    this._lifecycleDetails = value;
  }
  public resetLifecycleDetails() {
    this._lifecycleDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleDetailsInput() {
    return this._lifecycleDetails;
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

  // occ_availability_catalog_id - computed: false, optional: false, required: true
  private _occAvailabilityCatalogId?: string; 
  public get occAvailabilityCatalogId() {
    return this.getStringAttribute('occ_availability_catalog_id');
  }
  public set occAvailabilityCatalogId(value: string) {
    this._occAvailabilityCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occAvailabilityCatalogIdInput() {
    return this._occAvailabilityCatalogId;
  }

  // occ_customer_group_id - computed: true, optional: false, required: false
  public get occCustomerGroupId() {
    return this.getStringAttribute('occ_customer_group_id');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_state - computed: true, optional: true, required: false
  private _requestState?: string; 
  public get requestState() {
    return this.getStringAttribute('request_state');
  }
  public set requestState(value: string) {
    this._requestState = value;
  }
  public resetRequestState() {
    this._requestState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestStateInput() {
    return this._requestState;
  }

  // request_type - computed: true, optional: true, required: false
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  public resetRequestType() {
    this._requestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // details - computed: false, optional: false, required: true
  private _details = new CapacityManagementOccCapacityRequestDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }
  public putDetails(value: CapacityManagementOccCapacityRequestDetails[] | cdktf.IResolvable) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // patch_operations - computed: false, optional: true, required: false
  private _patchOperations = new CapacityManagementOccCapacityRequestPatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }
  public putPatchOperations(value: CapacityManagementOccCapacityRequestPatchOperations[] | cdktf.IResolvable) {
    this._patchOperations.internalValue = value;
  }
  public resetPatchOperations() {
    this._patchOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchOperationsInput() {
    return this._patchOperations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CapacityManagementOccCapacityRequestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CapacityManagementOccCapacityRequestTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      date_expected_capacity_handover: cdktf.stringToTerraform(this._dateExpectedCapacityHandover),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_details: cdktf.stringToTerraform(this._lifecycleDetails),
      namespace: cdktf.stringToTerraform(this._namespace),
      occ_availability_catalog_id: cdktf.stringToTerraform(this._occAvailabilityCatalogId),
      region: cdktf.stringToTerraform(this._region),
      request_state: cdktf.stringToTerraform(this._requestState),
      request_type: cdktf.stringToTerraform(this._requestType),
      details: cdktf.listMapper(capacityManagementOccCapacityRequestDetailsToTerraform, true)(this._details.internalValue),
      patch_operations: cdktf.listMapper(capacityManagementOccCapacityRequestPatchOperationsToTerraform, true)(this._patchOperations.internalValue),
      timeouts: capacityManagementOccCapacityRequestTimeoutsToTerraform(this._timeouts.internalValue),
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
      date_expected_capacity_handover: {
        value: cdktf.stringToHclTerraform(this._dateExpectedCapacityHandover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_details: {
        value: cdktf.stringToHclTerraform(this._lifecycleDetails),
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
      occ_availability_catalog_id: {
        value: cdktf.stringToHclTerraform(this._occAvailabilityCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_state: {
        value: cdktf.stringToHclTerraform(this._requestState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_type: {
        value: cdktf.stringToHclTerraform(this._requestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: cdktf.listMapperHcl(capacityManagementOccCapacityRequestDetailsToHclTerraform, true)(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapacityManagementOccCapacityRequestDetailsList",
      },
      patch_operations: {
        value: cdktf.listMapperHcl(capacityManagementOccCapacityRequestPatchOperationsToHclTerraform, true)(this._patchOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapacityManagementOccCapacityRequestPatchOperationsList",
      },
      timeouts: {
        value: capacityManagementOccCapacityRequestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CapacityManagementOccCapacityRequestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
