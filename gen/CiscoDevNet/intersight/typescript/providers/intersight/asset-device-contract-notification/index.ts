// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssetDeviceContractNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#account_moid AssetDeviceContractNotification#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#ancestors AssetDeviceContractNotification#ancestors}
  */
  readonly ancestors?: AssetDeviceContractNotificationAncestors[] | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Contract information for the Cisco support contract purchased for the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#contract AssetDeviceContractNotification#contract}
  */
  readonly contract?: AssetDeviceContractNotificationContract[] | cdktf.IResolvable;
  /**
  * Calculated contract status that is derived based on the service line status and contract end date. It is different from serviceLineStatus property. serviceLineStatus gives us ACTIVE, OVERDUE, EXPIRED. These are transformed into Active, Expiring Soon and Not Covered.
  * * `Unknown` - The device's contract status cannot be determined.
  * * `Not Covered` - The Cisco device does not have a valid support contract.
  * * `Active` - The Cisco device is covered under a active support contract.
  * * `Expiring Soon` - The contract for this Cisco device is going to expire in the next 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#contract_status AssetDeviceContractNotification#contract_status}
  */
  readonly contractStatus?: string;
  /**
  * Reason for contract status. In case of Not Covered, reason is either Terminated or Expired.
  * * `` - There is no reason for the specified contract status.
  * * `Line Item Expired` - The Cisco device does not have a valid support contract, it has expired.
  * * `Line Item Terminated` - The Cisco device does not have a valid support contract, it has been terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#contract_status_reason AssetDeviceContractNotification#contract_status_reason}
  */
  readonly contractStatusReason?: string;
  /**
  * Date and time indicating when the contract data is last refreshed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#contract_updated_time AssetDeviceContractNotification#contract_updated_time}
  */
  readonly contractUpdatedTime?: string;
  /**
  * End date of the covered product line. The coverage end date is fetched from Cisco SN2INFO API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#covered_product_line_end_date AssetDeviceContractNotification#covered_product_line_end_date}
  */
  readonly coveredProductLineEndDate?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#create_time AssetDeviceContractNotification#create_time}
  */
  readonly createTime?: string;
  /**
  * Unique identifier of the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#device_id AssetDeviceContractNotification#device_id}
  */
  readonly deviceId?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#domain_group_moid AssetDeviceContractNotification#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * End customer information for the Cisco support contract purchased for the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#end_customer AssetDeviceContractNotification#end_customer}
  */
  readonly endCustomer?: AssetDeviceContractNotificationEndCustomer[] | cdktf.IResolvable;
  /**
  * EndUserGlobalUltimate information listed in the contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#end_user_global_ultimate AssetDeviceContractNotification#end_user_global_ultimate}
  */
  readonly endUserGlobalUltimate?: AssetDeviceContractNotificationEndUserGlobalUltimate[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#id AssetDeviceContractNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Validates if the device is a genuine Cisco device. Validated is done using the Cisco SN2INFO APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#is_valid AssetDeviceContractNotification#is_valid}
  */
  readonly isValid?: boolean | cdktf.IResolvable;
  /**
  * Item type of this specific Cisco device. example "Chassis".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#item_type AssetDeviceContractNotification#item_type}
  */
  readonly itemType?: string;
  /**
  * The last date of hardware support for this device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#last_date_of_support AssetDeviceContractNotification#last_date_of_support}
  */
  readonly lastDateOfSupport?: string;
  /**
  * Maintenance purchase order number for the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#maintenance_purchase_order_number AssetDeviceContractNotification#maintenance_purchase_order_number}
  */
  readonly maintenancePurchaseOrderNumber?: string;
  /**
  * Maintenance sales order number for the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#maintenance_sales_order_number AssetDeviceContractNotification#maintenance_sales_order_number}
  */
  readonly maintenanceSalesOrderNumber?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#mod_time AssetDeviceContractNotification#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#owners AssetDeviceContractNotification#owners}
  */
  readonly owners?: string[];
  /**
  * A reference to a moBaseMo resource.
  * When the $expand query parameter is specified, the referenced resource is returned inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#parent AssetDeviceContractNotification#parent}
  */
  readonly parent?: AssetDeviceContractNotificationParent[] | cdktf.IResolvable;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#permission_resources AssetDeviceContractNotification#permission_resources}
  */
  readonly permissionResources?: AssetDeviceContractNotificationPermissionResources[] | cdktf.IResolvable;
  /**
  * Product information of the offering under a contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#product AssetDeviceContractNotification#product}
  */
  readonly product?: AssetDeviceContractNotificationProduct[] | cdktf.IResolvable;
  /**
  * Purchase order number for the Cisco device. It is a unique number assigned for every purchase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#purchase_order_number AssetDeviceContractNotification#purchase_order_number}
  */
  readonly purchaseOrderNumber?: string;
  /**
  * A reference to a assetDeviceRegistration resource.
  * When the $expand query parameter is specified, the referenced resource is returned inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#registered_device AssetDeviceContractNotification#registered_device}
  */
  readonly registeredDevice?: AssetDeviceContractNotificationRegisteredDevice[] | cdktf.IResolvable;
  /**
  * ResellerGlobalUltimate information listed in the contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#reseller_global_ultimate AssetDeviceContractNotification#reseller_global_ultimate}
  */
  readonly resellerGlobalUltimate?: AssetDeviceContractNotificationResellerGlobalUltimate[] | cdktf.IResolvable;
  /**
  * Sales order number for the Cisco device. It is a unique number assigned for every sale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#sales_order_number AssetDeviceContractNotification#sales_order_number}
  */
  readonly salesOrderNumber?: string;
  /**
  * The type of service contract that covers the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#service_description AssetDeviceContractNotification#service_description}
  */
  readonly serviceDescription?: string;
  /**
  * End date for the Cisco service contract that covers this Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#service_end_date AssetDeviceContractNotification#service_end_date}
  */
  readonly serviceEndDate?: string;
  /**
  * The type of service contract that covers the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#service_level AssetDeviceContractNotification#service_level}
  */
  readonly serviceLevel?: string;
  /**
  * The SKU of the service contract that covers the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#service_sku AssetDeviceContractNotification#service_sku}
  */
  readonly serviceSku?: string;
  /**
  * Start date for the Cisco service contract that covers this Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#service_start_date AssetDeviceContractNotification#service_start_date}
  */
  readonly serviceStartDate?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#shared_scope AssetDeviceContractNotification#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Internal property used for triggering and tracking actions for contract information.
  * * `Update` - Sn2Info/Contract information needs to be updated.
  * * `OK` - Sn2Info/Contract information was fetched succcessfuly and updated.
  * * `Failed` - Sn2Info/Contract information was not available  or failed while fetching.
  * * `Retry` - Sn2Info/Contract information update failed and will be retried later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#state_contract AssetDeviceContractNotification#state_contract}
  */
  readonly stateContract?: string;
  /**
  * Internal property used for triggering and tracking actions for sn2info information.
  * * `Update` - Sn2Info/Contract information needs to be updated.
  * * `OK` - Sn2Info/Contract information was fetched succcessfuly and updated.
  * * `Failed` - Sn2Info/Contract information was not available  or failed while fetching.
  * * `Retry` - Sn2Info/Contract information update failed and will be retried later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#state_sn2_info AssetDeviceContractNotification#state_sn2_info}
  */
  readonly stateSn2Info?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#tags AssetDeviceContractNotification#tags}
  */
  readonly tags?: AssetDeviceContractNotificationTags[] | cdktf.IResolvable;
  /**
  * The versioning info for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#version_context AssetDeviceContractNotification#version_context}
  */
  readonly versionContext?: AssetDeviceContractNotificationVersionContext[] | cdktf.IResolvable;
  /**
  * End date for the warranty that covers the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#warranty_end_date AssetDeviceContractNotification#warranty_end_date}
  */
  readonly warrantyEndDate?: string;
  /**
  * Type of warranty that covers the Cisco device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#warranty_type AssetDeviceContractNotification#warranty_type}
  */
  readonly warrantyType?: string;
}
export interface AssetDeviceContractNotificationAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationAncestorsToTerraform(struct?: AssetDeviceContractNotificationAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationAncestorsToHclTerraform(struct?: AssetDeviceContractNotificationAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationAncestorsList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationAncestors[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationAncestorsOutputReference {
    return new AssetDeviceContractNotificationAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationContractBillTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address1 AssetDeviceContractNotification#address1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address2 AssetDeviceContractNotification#address2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address3 AssetDeviceContractNotification#address3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#city AssetDeviceContractNotification#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#country AssetDeviceContractNotification#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#county AssetDeviceContractNotification#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#location AssetDeviceContractNotification#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#postal_code AssetDeviceContractNotification#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#province AssetDeviceContractNotification#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#state AssetDeviceContractNotification#state}
  */
  readonly state?: string;
}

export function assetDeviceContractNotificationContractBillToToTerraform(struct?: AssetDeviceContractNotificationContractBillTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    address1: cdktf.stringToTerraform(struct!.address1),
    address2: cdktf.stringToTerraform(struct!.address2),
    address3: cdktf.stringToTerraform(struct!.address3),
    city: cdktf.stringToTerraform(struct!.city),
    class_id: cdktf.stringToTerraform(struct!.classId),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function assetDeviceContractNotificationContractBillToToHclTerraform(struct?: AssetDeviceContractNotificationContractBillTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationContractBillToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationContractBillTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationContractBillTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._city = undefined;
      this._classId = undefined;
      this._country = undefined;
      this._county = undefined;
      this._location = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._city = value.city;
      this._classId = value.classId;
      this._country = value.country;
      this._county = value.county;
      this._location = value.location;
      this._name = value.name;
      this._objectType = value.objectType;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // address1 - computed: true, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address2 - computed: true, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address3 - computed: true, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: true, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: true, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class AssetDeviceContractNotificationContractBillToList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationContractBillTo[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationContractBillToOutputReference {
    return new AssetDeviceContractNotificationContractBillToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationContractBillToGlobalUltimate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#id AssetDeviceContractNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
}

export function assetDeviceContractNotificationContractBillToGlobalUltimateToTerraform(struct?: AssetDeviceContractNotificationContractBillToGlobalUltimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function assetDeviceContractNotificationContractBillToGlobalUltimateToHclTerraform(struct?: AssetDeviceContractNotificationContractBillToGlobalUltimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationContractBillToGlobalUltimateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationContractBillToGlobalUltimate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationContractBillToGlobalUltimate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._id = value.id;
      this._name = value.name;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
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

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class AssetDeviceContractNotificationContractBillToGlobalUltimateList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationContractBillToGlobalUltimate[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationContractBillToGlobalUltimateOutputReference {
    return new AssetDeviceContractNotificationContractBillToGlobalUltimateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationContract {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#bill_to AssetDeviceContractNotification#bill_to}
  */
  readonly billTo?: AssetDeviceContractNotificationContractBillTo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#bill_to_global_ultimate AssetDeviceContractNotification#bill_to_global_ultimate}
  */
  readonly billToGlobalUltimate?: AssetDeviceContractNotificationContractBillToGlobalUltimate[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#contract_number AssetDeviceContractNotification#contract_number}
  */
  readonly contractNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#line_status AssetDeviceContractNotification#line_status}
  */
  readonly lineStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
}

export function assetDeviceContractNotificationContractToTerraform(struct?: AssetDeviceContractNotificationContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bill_to: cdktf.listMapper(assetDeviceContractNotificationContractBillToToTerraform, false)(struct!.billTo),
    bill_to_global_ultimate: cdktf.listMapper(assetDeviceContractNotificationContractBillToGlobalUltimateToTerraform, false)(struct!.billToGlobalUltimate),
    class_id: cdktf.stringToTerraform(struct!.classId),
    contract_number: cdktf.stringToTerraform(struct!.contractNumber),
    line_status: cdktf.stringToTerraform(struct!.lineStatus),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function assetDeviceContractNotificationContractToHclTerraform(struct?: AssetDeviceContractNotificationContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bill_to: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationContractBillToToHclTerraform, false)(struct!.billTo),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationContractBillToList",
    },
    bill_to_global_ultimate: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationContractBillToGlobalUltimateToHclTerraform, false)(struct!.billToGlobalUltimate),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationContractBillToGlobalUltimateList",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contract_number: {
      value: cdktf.stringToHclTerraform(struct!.contractNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_status: {
      value: cdktf.stringToHclTerraform(struct!.lineStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationContractOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._billTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.billTo = this._billTo?.internalValue;
    }
    if (this._billToGlobalUltimate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.billToGlobalUltimate = this._billToGlobalUltimate?.internalValue;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._contractNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractNumber = this._contractNumber;
    }
    if (this._lineStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineStatus = this._lineStatus;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._billTo.internalValue = undefined;
      this._billToGlobalUltimate.internalValue = undefined;
      this._classId = undefined;
      this._contractNumber = undefined;
      this._lineStatus = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._billTo.internalValue = value.billTo;
      this._billToGlobalUltimate.internalValue = value.billToGlobalUltimate;
      this._classId = value.classId;
      this._contractNumber = value.contractNumber;
      this._lineStatus = value.lineStatus;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bill_to - computed: true, optional: true, required: false
  private _billTo = new AssetDeviceContractNotificationContractBillToList(this, "bill_to", false);
  public get billTo() {
    return this._billTo;
  }
  public putBillTo(value: AssetDeviceContractNotificationContractBillTo[] | cdktf.IResolvable) {
    this._billTo.internalValue = value;
  }
  public resetBillTo() {
    this._billTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billToInput() {
    return this._billTo.internalValue;
  }

  // bill_to_global_ultimate - computed: true, optional: true, required: false
  private _billToGlobalUltimate = new AssetDeviceContractNotificationContractBillToGlobalUltimateList(this, "bill_to_global_ultimate", false);
  public get billToGlobalUltimate() {
    return this._billToGlobalUltimate;
  }
  public putBillToGlobalUltimate(value: AssetDeviceContractNotificationContractBillToGlobalUltimate[] | cdktf.IResolvable) {
    this._billToGlobalUltimate.internalValue = value;
  }
  public resetBillToGlobalUltimate() {
    this._billToGlobalUltimate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billToGlobalUltimateInput() {
    return this._billToGlobalUltimate.internalValue;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // contract_number - computed: true, optional: true, required: false
  private _contractNumber?: string; 
  public get contractNumber() {
    return this.getStringAttribute('contract_number');
  }
  public set contractNumber(value: string) {
    this._contractNumber = value;
  }
  public resetContractNumber() {
    this._contractNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNumberInput() {
    return this._contractNumber;
  }

  // line_status - computed: true, optional: true, required: false
  private _lineStatus?: string; 
  public get lineStatus() {
    return this.getStringAttribute('line_status');
  }
  public set lineStatus(value: string) {
    this._lineStatus = value;
  }
  public resetLineStatus() {
    this._lineStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineStatusInput() {
    return this._lineStatus;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class AssetDeviceContractNotificationContractList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationContract[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationContractOutputReference {
    return new AssetDeviceContractNotificationContractOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationEndCustomerAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address1 AssetDeviceContractNotification#address1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address2 AssetDeviceContractNotification#address2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address3 AssetDeviceContractNotification#address3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#city AssetDeviceContractNotification#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#country AssetDeviceContractNotification#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#county AssetDeviceContractNotification#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#location AssetDeviceContractNotification#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#postal_code AssetDeviceContractNotification#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#province AssetDeviceContractNotification#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#state AssetDeviceContractNotification#state}
  */
  readonly state?: string;
}

export function assetDeviceContractNotificationEndCustomerAddressToTerraform(struct?: AssetDeviceContractNotificationEndCustomerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    address1: cdktf.stringToTerraform(struct!.address1),
    address2: cdktf.stringToTerraform(struct!.address2),
    address3: cdktf.stringToTerraform(struct!.address3),
    city: cdktf.stringToTerraform(struct!.city),
    class_id: cdktf.stringToTerraform(struct!.classId),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function assetDeviceContractNotificationEndCustomerAddressToHclTerraform(struct?: AssetDeviceContractNotificationEndCustomerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationEndCustomerAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationEndCustomerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationEndCustomerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._city = undefined;
      this._classId = undefined;
      this._country = undefined;
      this._county = undefined;
      this._location = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._city = value.city;
      this._classId = value.classId;
      this._country = value.country;
      this._county = value.county;
      this._location = value.location;
      this._name = value.name;
      this._objectType = value.objectType;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // address1 - computed: true, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address2 - computed: true, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address3 - computed: true, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: true, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: true, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class AssetDeviceContractNotificationEndCustomerAddressList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationEndCustomerAddress[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationEndCustomerAddressOutputReference {
    return new AssetDeviceContractNotificationEndCustomerAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationEndCustomer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address AssetDeviceContractNotification#address}
  */
  readonly address?: AssetDeviceContractNotificationEndCustomerAddress[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#id AssetDeviceContractNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
}

export function assetDeviceContractNotificationEndCustomerToTerraform(struct?: AssetDeviceContractNotificationEndCustomer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    address: cdktf.listMapper(assetDeviceContractNotificationEndCustomerAddressToTerraform, false)(struct!.address),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function assetDeviceContractNotificationEndCustomerToHclTerraform(struct?: AssetDeviceContractNotificationEndCustomer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationEndCustomerAddressToHclTerraform, false)(struct!.address),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationEndCustomerAddressList",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationEndCustomerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationEndCustomer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationEndCustomer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._address.internalValue = undefined;
      this._classId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._address.internalValue = value.address;
      this._classId = value.classId;
      this._id = value.id;
      this._name = value.name;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // address - computed: true, optional: true, required: false
  private _address = new AssetDeviceContractNotificationEndCustomerAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: AssetDeviceContractNotificationEndCustomerAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
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

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class AssetDeviceContractNotificationEndCustomerList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationEndCustomer[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationEndCustomerOutputReference {
    return new AssetDeviceContractNotificationEndCustomerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationEndUserGlobalUltimate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#id AssetDeviceContractNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
}

export function assetDeviceContractNotificationEndUserGlobalUltimateToTerraform(struct?: AssetDeviceContractNotificationEndUserGlobalUltimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function assetDeviceContractNotificationEndUserGlobalUltimateToHclTerraform(struct?: AssetDeviceContractNotificationEndUserGlobalUltimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationEndUserGlobalUltimateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationEndUserGlobalUltimate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationEndUserGlobalUltimate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._id = value.id;
      this._name = value.name;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
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

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class AssetDeviceContractNotificationEndUserGlobalUltimateList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationEndUserGlobalUltimate[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationEndUserGlobalUltimateOutputReference {
    return new AssetDeviceContractNotificationEndUserGlobalUltimateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationParentToTerraform(struct?: AssetDeviceContractNotificationParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationParentToHclTerraform(struct?: AssetDeviceContractNotificationParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationParent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationParent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationParentList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationParent[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationParentOutputReference {
    return new AssetDeviceContractNotificationParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationPermissionResourcesToTerraform(struct?: AssetDeviceContractNotificationPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationPermissionResourcesToHclTerraform(struct?: AssetDeviceContractNotificationPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationPermissionResourcesOutputReference {
    return new AssetDeviceContractNotificationPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationProductBillTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address1 AssetDeviceContractNotification#address1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address2 AssetDeviceContractNotification#address2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address3 AssetDeviceContractNotification#address3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#city AssetDeviceContractNotification#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#country AssetDeviceContractNotification#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#county AssetDeviceContractNotification#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#location AssetDeviceContractNotification#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#postal_code AssetDeviceContractNotification#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#province AssetDeviceContractNotification#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#state AssetDeviceContractNotification#state}
  */
  readonly state?: string;
}

export function assetDeviceContractNotificationProductBillToToTerraform(struct?: AssetDeviceContractNotificationProductBillTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    address1: cdktf.stringToTerraform(struct!.address1),
    address2: cdktf.stringToTerraform(struct!.address2),
    address3: cdktf.stringToTerraform(struct!.address3),
    city: cdktf.stringToTerraform(struct!.city),
    class_id: cdktf.stringToTerraform(struct!.classId),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function assetDeviceContractNotificationProductBillToToHclTerraform(struct?: AssetDeviceContractNotificationProductBillTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationProductBillToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationProductBillTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationProductBillTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._city = undefined;
      this._classId = undefined;
      this._country = undefined;
      this._county = undefined;
      this._location = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._city = value.city;
      this._classId = value.classId;
      this._country = value.country;
      this._county = value.county;
      this._location = value.location;
      this._name = value.name;
      this._objectType = value.objectType;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // address1 - computed: true, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address2 - computed: true, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address3 - computed: true, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: true, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: true, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class AssetDeviceContractNotificationProductBillToList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationProductBillTo[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationProductBillToOutputReference {
    return new AssetDeviceContractNotificationProductBillToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationProductShipTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address1 AssetDeviceContractNotification#address1}
  */
  readonly address1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address2 AssetDeviceContractNotification#address2}
  */
  readonly address2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#address3 AssetDeviceContractNotification#address3}
  */
  readonly address3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#city AssetDeviceContractNotification#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#country AssetDeviceContractNotification#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#county AssetDeviceContractNotification#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#location AssetDeviceContractNotification#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#postal_code AssetDeviceContractNotification#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#province AssetDeviceContractNotification#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#state AssetDeviceContractNotification#state}
  */
  readonly state?: string;
}

export function assetDeviceContractNotificationProductShipToToTerraform(struct?: AssetDeviceContractNotificationProductShipTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    address1: cdktf.stringToTerraform(struct!.address1),
    address2: cdktf.stringToTerraform(struct!.address2),
    address3: cdktf.stringToTerraform(struct!.address3),
    city: cdktf.stringToTerraform(struct!.city),
    class_id: cdktf.stringToTerraform(struct!.classId),
    country: cdktf.stringToTerraform(struct!.country),
    county: cdktf.stringToTerraform(struct!.county),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function assetDeviceContractNotificationProductShipToToHclTerraform(struct?: AssetDeviceContractNotificationProductShipTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address1: {
      value: cdktf.stringToHclTerraform(struct!.address1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address2: {
      value: cdktf.stringToHclTerraform(struct!.address2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address3: {
      value: cdktf.stringToHclTerraform(struct!.address3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    province: {
      value: cdktf.stringToHclTerraform(struct!.province),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationProductShipToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationProductShipTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._address1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address1 = this._address1;
    }
    if (this._address2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address2 = this._address2;
    }
    if (this._address3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.address3 = this._address3;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationProductShipTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._address1 = undefined;
      this._address2 = undefined;
      this._address3 = undefined;
      this._city = undefined;
      this._classId = undefined;
      this._country = undefined;
      this._county = undefined;
      this._location = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._address1 = value.address1;
      this._address2 = value.address2;
      this._address3 = value.address3;
      this._city = value.city;
      this._classId = value.classId;
      this._country = value.country;
      this._county = value.county;
      this._location = value.location;
      this._name = value.name;
      this._objectType = value.objectType;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._state = value.state;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // address1 - computed: true, optional: true, required: false
  private _address1?: string; 
  public get address1() {
    return this.getStringAttribute('address1');
  }
  public set address1(value: string) {
    this._address1 = value;
  }
  public resetAddress1() {
    this._address1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address1Input() {
    return this._address1;
  }

  // address2 - computed: true, optional: true, required: false
  private _address2?: string; 
  public get address2() {
    return this.getStringAttribute('address2');
  }
  public set address2(value: string) {
    this._address2 = value;
  }
  public resetAddress2() {
    this._address2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address2Input() {
    return this._address2;
  }

  // address3 - computed: true, optional: true, required: false
  private _address3?: string; 
  public get address3() {
    return this.getStringAttribute('address3');
  }
  public set address3(value: string) {
    this._address3 = value;
  }
  public resetAddress3() {
    this._address3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address3Input() {
    return this._address3;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // county - computed: true, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: true, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class AssetDeviceContractNotificationProductShipToList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationProductShipTo[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationProductShipToOutputReference {
    return new AssetDeviceContractNotificationProductShipToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationProduct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#bill_to AssetDeviceContractNotification#bill_to}
  */
  readonly billTo?: AssetDeviceContractNotificationProductBillTo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#description AssetDeviceContractNotification#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#family AssetDeviceContractNotification#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#group AssetDeviceContractNotification#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#number AssetDeviceContractNotification#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#ship_to AssetDeviceContractNotification#ship_to}
  */
  readonly shipTo?: AssetDeviceContractNotificationProductShipTo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#sub_type AssetDeviceContractNotification#sub_type}
  */
  readonly subType?: string;
}

export function assetDeviceContractNotificationProductToTerraform(struct?: AssetDeviceContractNotificationProduct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    bill_to: cdktf.listMapper(assetDeviceContractNotificationProductBillToToTerraform, false)(struct!.billTo),
    class_id: cdktf.stringToTerraform(struct!.classId),
    description: cdktf.stringToTerraform(struct!.description),
    family: cdktf.stringToTerraform(struct!.family),
    group: cdktf.stringToTerraform(struct!.group),
    number: cdktf.stringToTerraform(struct!.number),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ship_to: cdktf.listMapper(assetDeviceContractNotificationProductShipToToTerraform, false)(struct!.shipTo),
    sub_type: cdktf.stringToTerraform(struct!.subType),
  }
}


export function assetDeviceContractNotificationProductToHclTerraform(struct?: AssetDeviceContractNotificationProduct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bill_to: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationProductBillToToHclTerraform, false)(struct!.billTo),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationProductBillToList",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ship_to: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationProductShipToToHclTerraform, false)(struct!.shipTo),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationProductShipToList",
    },
    sub_type: {
      value: cdktf.stringToHclTerraform(struct!.subType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationProductOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationProduct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._billTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.billTo = this._billTo?.internalValue;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._shipTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipTo = this._shipTo?.internalValue;
    }
    if (this._subType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subType = this._subType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationProduct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._billTo.internalValue = undefined;
      this._classId = undefined;
      this._description = undefined;
      this._family = undefined;
      this._group = undefined;
      this._number = undefined;
      this._objectType = undefined;
      this._shipTo.internalValue = undefined;
      this._subType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._billTo.internalValue = value.billTo;
      this._classId = value.classId;
      this._description = value.description;
      this._family = value.family;
      this._group = value.group;
      this._number = value.number;
      this._objectType = value.objectType;
      this._shipTo.internalValue = value.shipTo;
      this._subType = value.subType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // bill_to - computed: true, optional: true, required: false
  private _billTo = new AssetDeviceContractNotificationProductBillToList(this, "bill_to", false);
  public get billTo() {
    return this._billTo;
  }
  public putBillTo(value: AssetDeviceContractNotificationProductBillTo[] | cdktf.IResolvable) {
    this._billTo.internalValue = value;
  }
  public resetBillTo() {
    this._billTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billToInput() {
    return this._billTo.internalValue;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
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

  // family - computed: true, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // number - computed: true, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // ship_to - computed: true, optional: true, required: false
  private _shipTo = new AssetDeviceContractNotificationProductShipToList(this, "ship_to", false);
  public get shipTo() {
    return this._shipTo;
  }
  public putShipTo(value: AssetDeviceContractNotificationProductShipTo[] | cdktf.IResolvable) {
    this._shipTo.internalValue = value;
  }
  public resetShipTo() {
    this._shipTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipToInput() {
    return this._shipTo.internalValue;
  }

  // sub_type - computed: true, optional: true, required: false
  private _subType?: string; 
  public get subType() {
    return this.getStringAttribute('sub_type');
  }
  public set subType(value: string) {
    this._subType = value;
  }
  public resetSubType() {
    this._subType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeInput() {
    return this._subType;
  }
}

export class AssetDeviceContractNotificationProductList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationProduct[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationProductOutputReference {
    return new AssetDeviceContractNotificationProductOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationRegisteredDeviceToTerraform(struct?: AssetDeviceContractNotificationRegisteredDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationRegisteredDeviceToHclTerraform(struct?: AssetDeviceContractNotificationRegisteredDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationRegisteredDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationRegisteredDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationRegisteredDeviceList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationRegisteredDevice[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationRegisteredDeviceOutputReference {
    return new AssetDeviceContractNotificationRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationResellerGlobalUltimate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#id AssetDeviceContractNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#name AssetDeviceContractNotification#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
}

export function assetDeviceContractNotificationResellerGlobalUltimateToTerraform(struct?: AssetDeviceContractNotificationResellerGlobalUltimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function assetDeviceContractNotificationResellerGlobalUltimateToHclTerraform(struct?: AssetDeviceContractNotificationResellerGlobalUltimate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationResellerGlobalUltimateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationResellerGlobalUltimate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationResellerGlobalUltimate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._id = value.id;
      this._name = value.name;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
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

  // name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class AssetDeviceContractNotificationResellerGlobalUltimateList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationResellerGlobalUltimate[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationResellerGlobalUltimateOutputReference {
    return new AssetDeviceContractNotificationResellerGlobalUltimateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationTagsAncestorDefinitionsToTerraform(struct?: AssetDeviceContractNotificationTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationTagsAncestorDefinitionsToHclTerraform(struct?: AssetDeviceContractNotificationTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationTagsAncestorDefinitionsOutputReference {
    return new AssetDeviceContractNotificationTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationTagsDefinitionToTerraform(struct?: AssetDeviceContractNotificationTagsDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationTagsDefinitionToHclTerraform(struct?: AssetDeviceContractNotificationTagsDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationTagsDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationTagsDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationTagsDefinitionList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationTagsDefinition[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationTagsDefinitionOutputReference {
    return new AssetDeviceContractNotificationTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#ancestor_definitions AssetDeviceContractNotification#ancestor_definitions}
  */
  readonly ancestorDefinitions?: AssetDeviceContractNotificationTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#definition AssetDeviceContractNotification#definition}
  */
  readonly definition?: AssetDeviceContractNotificationTagsDefinition[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#key AssetDeviceContractNotification#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#propagated AssetDeviceContractNotification#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#type AssetDeviceContractNotification#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#value AssetDeviceContractNotification#value}
  */
  readonly value?: string;
}

export function assetDeviceContractNotificationTagsToTerraform(struct?: AssetDeviceContractNotificationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ancestor_definitions: cdktf.listMapper(assetDeviceContractNotificationTagsAncestorDefinitionsToTerraform, false)(struct!.ancestorDefinitions),
    definition: cdktf.listMapper(assetDeviceContractNotificationTagsDefinitionToTerraform, false)(struct!.definition),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function assetDeviceContractNotificationTagsToHclTerraform(struct?: AssetDeviceContractNotificationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestor_definitions: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationTagsAncestorDefinitionsToHclTerraform, false)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationTagsAncestorDefinitionsList",
    },
    definition: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationTagsDefinitionToHclTerraform, false)(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationTagsDefinitionList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class AssetDeviceContractNotificationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // ancestor_definitions - computed: true, optional: true, required: false
  private _ancestorDefinitions = new AssetDeviceContractNotificationTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: AssetDeviceContractNotificationTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: true, optional: true, required: false
  private _definition = new AssetDeviceContractNotificationTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: AssetDeviceContractNotificationTagsDefinition[] | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
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

  // propagated - computed: true, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export class AssetDeviceContractNotificationTagsList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationTags[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationTagsOutputReference {
    return new AssetDeviceContractNotificationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationVersionContextInterestedMosToTerraform(struct?: AssetDeviceContractNotificationVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationVersionContextInterestedMosToHclTerraform(struct?: AssetDeviceContractNotificationVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationVersionContextInterestedMosOutputReference {
    return new AssetDeviceContractNotificationVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#moid AssetDeviceContractNotification#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#selector AssetDeviceContractNotification#selector}
  */
  readonly selector?: string;
}

export function assetDeviceContractNotificationVersionContextRefMoToTerraform(struct?: AssetDeviceContractNotificationVersionContextRefMo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function assetDeviceContractNotificationVersionContextRefMoToHclTerraform(struct?: AssetDeviceContractNotificationVersionContextRefMo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationVersionContextRefMo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationVersionContextRefMo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: true, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AssetDeviceContractNotificationVersionContextRefMoList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationVersionContextRefMo[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationVersionContextRefMoOutputReference {
    return new AssetDeviceContractNotificationVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssetDeviceContractNotificationVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#additional_properties AssetDeviceContractNotification#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#class_id AssetDeviceContractNotification#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#interested_mos AssetDeviceContractNotification#interested_mos}
  */
  readonly interestedMos?: AssetDeviceContractNotificationVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#marked_for_deletion AssetDeviceContractNotification#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#nr_version AssetDeviceContractNotification#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#object_type AssetDeviceContractNotification#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#ref_mo AssetDeviceContractNotification#ref_mo}
  */
  readonly refMo?: AssetDeviceContractNotificationVersionContextRefMo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#timestamp AssetDeviceContractNotification#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#version_type AssetDeviceContractNotification#version_type}
  */
  readonly versionType?: string;
}

export function assetDeviceContractNotificationVersionContextToTerraform(struct?: AssetDeviceContractNotificationVersionContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    interested_mos: cdktf.listMapper(assetDeviceContractNotificationVersionContextInterestedMosToTerraform, false)(struct!.interestedMos),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ref_mo: cdktf.listMapper(assetDeviceContractNotificationVersionContextRefMoToTerraform, false)(struct!.refMo),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
  }
}


export function assetDeviceContractNotificationVersionContextToHclTerraform(struct?: AssetDeviceContractNotificationVersionContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationVersionContextInterestedMosToHclTerraform, false)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationVersionContextInterestedMosList",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_mo: {
      value: cdktf.listMapperHcl(assetDeviceContractNotificationVersionContextRefMoToHclTerraform, false)(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "AssetDeviceContractNotificationVersionContextRefMoList",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetDeviceContractNotificationVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssetDeviceContractNotificationVersionContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetDeviceContractNotificationVersionContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._interestedMos.internalValue = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._refMo.internalValue = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._interestedMos.internalValue = value.interestedMos;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._refMo.internalValue = value.refMo;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // interested_mos - computed: true, optional: true, required: false
  private _interestedMos = new AssetDeviceContractNotificationVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: AssetDeviceContractNotificationVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // marked_for_deletion - computed: true, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: true, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: true, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // ref_mo - computed: true, optional: true, required: false
  private _refMo = new AssetDeviceContractNotificationVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: AssetDeviceContractNotificationVersionContextRefMo[] | cdktf.IResolvable) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: true, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }
}

export class AssetDeviceContractNotificationVersionContextList extends cdktf.ComplexList {
  public internalValue? : AssetDeviceContractNotificationVersionContext[] | cdktf.IResolvable

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
  public get(index: number): AssetDeviceContractNotificationVersionContextOutputReference {
    return new AssetDeviceContractNotificationVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification intersight_asset_device_contract_notification}
*/
export class AssetDeviceContractNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_asset_device_contract_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssetDeviceContractNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssetDeviceContractNotification to import
  * @param importFromId The id of the existing AssetDeviceContractNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssetDeviceContractNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_asset_device_contract_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/asset_device_contract_notification intersight_asset_device_contract_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssetDeviceContractNotificationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AssetDeviceContractNotificationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_asset_device_contract_notification',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._ancestors.internalValue = config.ancestors;
    this._classId = config.classId;
    this._contract.internalValue = config.contract;
    this._contractStatus = config.contractStatus;
    this._contractStatusReason = config.contractStatusReason;
    this._contractUpdatedTime = config.contractUpdatedTime;
    this._coveredProductLineEndDate = config.coveredProductLineEndDate;
    this._createTime = config.createTime;
    this._deviceId = config.deviceId;
    this._domainGroupMoid = config.domainGroupMoid;
    this._endCustomer.internalValue = config.endCustomer;
    this._endUserGlobalUltimate.internalValue = config.endUserGlobalUltimate;
    this._id = config.id;
    this._isValid = config.isValid;
    this._itemType = config.itemType;
    this._lastDateOfSupport = config.lastDateOfSupport;
    this._maintenancePurchaseOrderNumber = config.maintenancePurchaseOrderNumber;
    this._maintenanceSalesOrderNumber = config.maintenanceSalesOrderNumber;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._product.internalValue = config.product;
    this._purchaseOrderNumber = config.purchaseOrderNumber;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._resellerGlobalUltimate.internalValue = config.resellerGlobalUltimate;
    this._salesOrderNumber = config.salesOrderNumber;
    this._serviceDescription = config.serviceDescription;
    this._serviceEndDate = config.serviceEndDate;
    this._serviceLevel = config.serviceLevel;
    this._serviceSku = config.serviceSku;
    this._serviceStartDate = config.serviceStartDate;
    this._sharedScope = config.sharedScope;
    this._stateContract = config.stateContract;
    this._stateSn2Info = config.stateSn2Info;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
    this._warrantyEndDate = config.warrantyEndDate;
    this._warrantyType = config.warrantyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: true, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // ancestors - computed: true, optional: true, required: false
  private _ancestors = new AssetDeviceContractNotificationAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: AssetDeviceContractNotificationAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // contract - computed: true, optional: true, required: false
  private _contract = new AssetDeviceContractNotificationContractList(this, "contract", false);
  public get contract() {
    return this._contract;
  }
  public putContract(value: AssetDeviceContractNotificationContract[] | cdktf.IResolvable) {
    this._contract.internalValue = value;
  }
  public resetContract() {
    this._contract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract.internalValue;
  }

  // contract_status - computed: false, optional: true, required: false
  private _contractStatus?: string; 
  public get contractStatus() {
    return this.getStringAttribute('contract_status');
  }
  public set contractStatus(value: string) {
    this._contractStatus = value;
  }
  public resetContractStatus() {
    this._contractStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractStatusInput() {
    return this._contractStatus;
  }

  // contract_status_reason - computed: false, optional: true, required: false
  private _contractStatusReason?: string; 
  public get contractStatusReason() {
    return this.getStringAttribute('contract_status_reason');
  }
  public set contractStatusReason(value: string) {
    this._contractStatusReason = value;
  }
  public resetContractStatusReason() {
    this._contractStatusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractStatusReasonInput() {
    return this._contractStatusReason;
  }

  // contract_updated_time - computed: false, optional: true, required: false
  private _contractUpdatedTime?: string; 
  public get contractUpdatedTime() {
    return this.getStringAttribute('contract_updated_time');
  }
  public set contractUpdatedTime(value: string) {
    this._contractUpdatedTime = value;
  }
  public resetContractUpdatedTime() {
    this._contractUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractUpdatedTimeInput() {
    return this._contractUpdatedTime;
  }

  // covered_product_line_end_date - computed: false, optional: true, required: false
  private _coveredProductLineEndDate?: string; 
  public get coveredProductLineEndDate() {
    return this.getStringAttribute('covered_product_line_end_date');
  }
  public set coveredProductLineEndDate(value: string) {
    this._coveredProductLineEndDate = value;
  }
  public resetCoveredProductLineEndDate() {
    this._coveredProductLineEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coveredProductLineEndDateInput() {
    return this._coveredProductLineEndDate;
  }

  // create_time - computed: true, optional: true, required: false
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

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // domain_group_moid - computed: true, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
  }

  // end_customer - computed: true, optional: true, required: false
  private _endCustomer = new AssetDeviceContractNotificationEndCustomerList(this, "end_customer", false);
  public get endCustomer() {
    return this._endCustomer;
  }
  public putEndCustomer(value: AssetDeviceContractNotificationEndCustomer[] | cdktf.IResolvable) {
    this._endCustomer.internalValue = value;
  }
  public resetEndCustomer() {
    this._endCustomer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endCustomerInput() {
    return this._endCustomer.internalValue;
  }

  // end_user_global_ultimate - computed: true, optional: true, required: false
  private _endUserGlobalUltimate = new AssetDeviceContractNotificationEndUserGlobalUltimateList(this, "end_user_global_ultimate", false);
  public get endUserGlobalUltimate() {
    return this._endUserGlobalUltimate;
  }
  public putEndUserGlobalUltimate(value: AssetDeviceContractNotificationEndUserGlobalUltimate[] | cdktf.IResolvable) {
    this._endUserGlobalUltimate.internalValue = value;
  }
  public resetEndUserGlobalUltimate() {
    this._endUserGlobalUltimate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserGlobalUltimateInput() {
    return this._endUserGlobalUltimate.internalValue;
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

  // is_valid - computed: false, optional: true, required: false
  private _isValid?: boolean | cdktf.IResolvable; 
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }
  public set isValid(value: boolean | cdktf.IResolvable) {
    this._isValid = value;
  }
  public resetIsValid() {
    this._isValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValidInput() {
    return this._isValid;
  }

  // item_type - computed: false, optional: true, required: false
  private _itemType?: string; 
  public get itemType() {
    return this.getStringAttribute('item_type');
  }
  public set itemType(value: string) {
    this._itemType = value;
  }
  public resetItemType() {
    this._itemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemTypeInput() {
    return this._itemType;
  }

  // last_date_of_support - computed: false, optional: true, required: false
  private _lastDateOfSupport?: string; 
  public get lastDateOfSupport() {
    return this.getStringAttribute('last_date_of_support');
  }
  public set lastDateOfSupport(value: string) {
    this._lastDateOfSupport = value;
  }
  public resetLastDateOfSupport() {
    this._lastDateOfSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDateOfSupportInput() {
    return this._lastDateOfSupport;
  }

  // maintenance_purchase_order_number - computed: false, optional: true, required: false
  private _maintenancePurchaseOrderNumber?: string; 
  public get maintenancePurchaseOrderNumber() {
    return this.getStringAttribute('maintenance_purchase_order_number');
  }
  public set maintenancePurchaseOrderNumber(value: string) {
    this._maintenancePurchaseOrderNumber = value;
  }
  public resetMaintenancePurchaseOrderNumber() {
    this._maintenancePurchaseOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePurchaseOrderNumberInput() {
    return this._maintenancePurchaseOrderNumber;
  }

  // maintenance_sales_order_number - computed: false, optional: true, required: false
  private _maintenanceSalesOrderNumber?: string; 
  public get maintenanceSalesOrderNumber() {
    return this.getStringAttribute('maintenance_sales_order_number');
  }
  public set maintenanceSalesOrderNumber(value: string) {
    this._maintenanceSalesOrderNumber = value;
  }
  public resetMaintenanceSalesOrderNumber() {
    this._maintenanceSalesOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceSalesOrderNumberInput() {
    return this._maintenanceSalesOrderNumber;
  }

  // mod_time - computed: true, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: true, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: true, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // parent - computed: true, optional: true, required: false
  private _parent = new AssetDeviceContractNotificationParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }
  public putParent(value: AssetDeviceContractNotificationParent[] | cdktf.IResolvable) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: true, optional: true, required: false
  private _permissionResources = new AssetDeviceContractNotificationPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: AssetDeviceContractNotificationPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // product - computed: true, optional: true, required: false
  private _product = new AssetDeviceContractNotificationProductList(this, "product", false);
  public get product() {
    return this._product;
  }
  public putProduct(value: AssetDeviceContractNotificationProduct[] | cdktf.IResolvable) {
    this._product.internalValue = value;
  }
  public resetProduct() {
    this._product.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product.internalValue;
  }

  // purchase_order_number - computed: false, optional: true, required: false
  private _purchaseOrderNumber?: string; 
  public get purchaseOrderNumber() {
    return this.getStringAttribute('purchase_order_number');
  }
  public set purchaseOrderNumber(value: string) {
    this._purchaseOrderNumber = value;
  }
  public resetPurchaseOrderNumber() {
    this._purchaseOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchaseOrderNumberInput() {
    return this._purchaseOrderNumber;
  }

  // registered_device - computed: true, optional: true, required: false
  private _registeredDevice = new AssetDeviceContractNotificationRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: AssetDeviceContractNotificationRegisteredDevice[] | cdktf.IResolvable) {
    this._registeredDevice.internalValue = value;
  }
  public resetRegisteredDevice() {
    this._registeredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredDeviceInput() {
    return this._registeredDevice.internalValue;
  }

  // reseller_global_ultimate - computed: true, optional: true, required: false
  private _resellerGlobalUltimate = new AssetDeviceContractNotificationResellerGlobalUltimateList(this, "reseller_global_ultimate", false);
  public get resellerGlobalUltimate() {
    return this._resellerGlobalUltimate;
  }
  public putResellerGlobalUltimate(value: AssetDeviceContractNotificationResellerGlobalUltimate[] | cdktf.IResolvable) {
    this._resellerGlobalUltimate.internalValue = value;
  }
  public resetResellerGlobalUltimate() {
    this._resellerGlobalUltimate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resellerGlobalUltimateInput() {
    return this._resellerGlobalUltimate.internalValue;
  }

  // sales_order_number - computed: false, optional: true, required: false
  private _salesOrderNumber?: string; 
  public get salesOrderNumber() {
    return this.getStringAttribute('sales_order_number');
  }
  public set salesOrderNumber(value: string) {
    this._salesOrderNumber = value;
  }
  public resetSalesOrderNumber() {
    this._salesOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesOrderNumberInput() {
    return this._salesOrderNumber;
  }

  // service_description - computed: false, optional: true, required: false
  private _serviceDescription?: string; 
  public get serviceDescription() {
    return this.getStringAttribute('service_description');
  }
  public set serviceDescription(value: string) {
    this._serviceDescription = value;
  }
  public resetServiceDescription() {
    this._serviceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDescriptionInput() {
    return this._serviceDescription;
  }

  // service_end_date - computed: false, optional: true, required: false
  private _serviceEndDate?: string; 
  public get serviceEndDate() {
    return this.getStringAttribute('service_end_date');
  }
  public set serviceEndDate(value: string) {
    this._serviceEndDate = value;
  }
  public resetServiceEndDate() {
    this._serviceEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndDateInput() {
    return this._serviceEndDate;
  }

  // service_level - computed: false, optional: true, required: false
  private _serviceLevel?: string; 
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  public resetServiceLevel() {
    this._serviceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel;
  }

  // service_sku - computed: false, optional: true, required: false
  private _serviceSku?: string; 
  public get serviceSku() {
    return this.getStringAttribute('service_sku');
  }
  public set serviceSku(value: string) {
    this._serviceSku = value;
  }
  public resetServiceSku() {
    this._serviceSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSkuInput() {
    return this._serviceSku;
  }

  // service_start_date - computed: false, optional: true, required: false
  private _serviceStartDate?: string; 
  public get serviceStartDate() {
    return this.getStringAttribute('service_start_date');
  }
  public set serviceStartDate(value: string) {
    this._serviceStartDate = value;
  }
  public resetServiceStartDate() {
    this._serviceStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceStartDateInput() {
    return this._serviceStartDate;
  }

  // shared_scope - computed: true, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // state_contract - computed: false, optional: true, required: false
  private _stateContract?: string; 
  public get stateContract() {
    return this.getStringAttribute('state_contract');
  }
  public set stateContract(value: string) {
    this._stateContract = value;
  }
  public resetStateContract() {
    this._stateContract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateContractInput() {
    return this._stateContract;
  }

  // state_sn2_info - computed: false, optional: true, required: false
  private _stateSn2Info?: string; 
  public get stateSn2Info() {
    return this.getStringAttribute('state_sn2_info');
  }
  public set stateSn2Info(value: string) {
    this._stateSn2Info = value;
  }
  public resetStateSn2Info() {
    this._stateSn2Info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateSn2InfoInput() {
    return this._stateSn2Info;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AssetDeviceContractNotificationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AssetDeviceContractNotificationTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: true, optional: true, required: false
  private _versionContext = new AssetDeviceContractNotificationVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: AssetDeviceContractNotificationVersionContext[] | cdktf.IResolvable) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // warranty_end_date - computed: false, optional: true, required: false
  private _warrantyEndDate?: string; 
  public get warrantyEndDate() {
    return this.getStringAttribute('warranty_end_date');
  }
  public set warrantyEndDate(value: string) {
    this._warrantyEndDate = value;
  }
  public resetWarrantyEndDate() {
    this._warrantyEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warrantyEndDateInput() {
    return this._warrantyEndDate;
  }

  // warranty_type - computed: false, optional: true, required: false
  private _warrantyType?: string; 
  public get warrantyType() {
    return this.getStringAttribute('warranty_type');
  }
  public set warrantyType(value: string) {
    this._warrantyType = value;
  }
  public resetWarrantyType() {
    this._warrantyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warrantyTypeInput() {
    return this._warrantyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      ancestors: cdktf.listMapper(assetDeviceContractNotificationAncestorsToTerraform, false)(this._ancestors.internalValue),
      class_id: cdktf.stringToTerraform(this._classId),
      contract: cdktf.listMapper(assetDeviceContractNotificationContractToTerraform, false)(this._contract.internalValue),
      contract_status: cdktf.stringToTerraform(this._contractStatus),
      contract_status_reason: cdktf.stringToTerraform(this._contractStatusReason),
      contract_updated_time: cdktf.stringToTerraform(this._contractUpdatedTime),
      covered_product_line_end_date: cdktf.stringToTerraform(this._coveredProductLineEndDate),
      create_time: cdktf.stringToTerraform(this._createTime),
      device_id: cdktf.stringToTerraform(this._deviceId),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      end_customer: cdktf.listMapper(assetDeviceContractNotificationEndCustomerToTerraform, false)(this._endCustomer.internalValue),
      end_user_global_ultimate: cdktf.listMapper(assetDeviceContractNotificationEndUserGlobalUltimateToTerraform, false)(this._endUserGlobalUltimate.internalValue),
      id: cdktf.stringToTerraform(this._id),
      is_valid: cdktf.booleanToTerraform(this._isValid),
      item_type: cdktf.stringToTerraform(this._itemType),
      last_date_of_support: cdktf.stringToTerraform(this._lastDateOfSupport),
      maintenance_purchase_order_number: cdktf.stringToTerraform(this._maintenancePurchaseOrderNumber),
      maintenance_sales_order_number: cdktf.stringToTerraform(this._maintenanceSalesOrderNumber),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      parent: cdktf.listMapper(assetDeviceContractNotificationParentToTerraform, false)(this._parent.internalValue),
      permission_resources: cdktf.listMapper(assetDeviceContractNotificationPermissionResourcesToTerraform, false)(this._permissionResources.internalValue),
      product: cdktf.listMapper(assetDeviceContractNotificationProductToTerraform, false)(this._product.internalValue),
      purchase_order_number: cdktf.stringToTerraform(this._purchaseOrderNumber),
      registered_device: cdktf.listMapper(assetDeviceContractNotificationRegisteredDeviceToTerraform, false)(this._registeredDevice.internalValue),
      reseller_global_ultimate: cdktf.listMapper(assetDeviceContractNotificationResellerGlobalUltimateToTerraform, false)(this._resellerGlobalUltimate.internalValue),
      sales_order_number: cdktf.stringToTerraform(this._salesOrderNumber),
      service_description: cdktf.stringToTerraform(this._serviceDescription),
      service_end_date: cdktf.stringToTerraform(this._serviceEndDate),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      service_sku: cdktf.stringToTerraform(this._serviceSku),
      service_start_date: cdktf.stringToTerraform(this._serviceStartDate),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      state_contract: cdktf.stringToTerraform(this._stateContract),
      state_sn2_info: cdktf.stringToTerraform(this._stateSn2Info),
      tags: cdktf.listMapper(assetDeviceContractNotificationTagsToTerraform, false)(this._tags.internalValue),
      version_context: cdktf.listMapper(assetDeviceContractNotificationVersionContextToTerraform, false)(this._versionContext.internalValue),
      warranty_end_date: cdktf.stringToTerraform(this._warrantyEndDate),
      warranty_type: cdktf.stringToTerraform(this._warrantyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationAncestorsToHclTerraform, false)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationAncestorsList",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationContractToHclTerraform, false)(this._contract.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationContractList",
      },
      contract_status: {
        value: cdktf.stringToHclTerraform(this._contractStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_status_reason: {
        value: cdktf.stringToHclTerraform(this._contractStatusReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_updated_time: {
        value: cdktf.stringToHclTerraform(this._contractUpdatedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      covered_product_line_end_date: {
        value: cdktf.stringToHclTerraform(this._coveredProductLineEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_customer: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationEndCustomerToHclTerraform, false)(this._endCustomer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationEndCustomerList",
      },
      end_user_global_ultimate: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationEndUserGlobalUltimateToHclTerraform, false)(this._endUserGlobalUltimate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationEndUserGlobalUltimateList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_valid: {
        value: cdktf.booleanToHclTerraform(this._isValid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      item_type: {
        value: cdktf.stringToHclTerraform(this._itemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_date_of_support: {
        value: cdktf.stringToHclTerraform(this._lastDateOfSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_purchase_order_number: {
        value: cdktf.stringToHclTerraform(this._maintenancePurchaseOrderNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_sales_order_number: {
        value: cdktf.stringToHclTerraform(this._maintenanceSalesOrderNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parent: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationParentToHclTerraform, false)(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationPermissionResourcesToHclTerraform, false)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationPermissionResourcesList",
      },
      product: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationProductToHclTerraform, false)(this._product.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationProductList",
      },
      purchase_order_number: {
        value: cdktf.stringToHclTerraform(this._purchaseOrderNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registered_device: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationRegisteredDeviceToHclTerraform, false)(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationRegisteredDeviceList",
      },
      reseller_global_ultimate: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationResellerGlobalUltimateToHclTerraform, false)(this._resellerGlobalUltimate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationResellerGlobalUltimateList",
      },
      sales_order_number: {
        value: cdktf.stringToHclTerraform(this._salesOrderNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_description: {
        value: cdktf.stringToHclTerraform(this._serviceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_end_date: {
        value: cdktf.stringToHclTerraform(this._serviceEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_level: {
        value: cdktf.stringToHclTerraform(this._serviceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sku: {
        value: cdktf.stringToHclTerraform(this._serviceSku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_start_date: {
        value: cdktf.stringToHclTerraform(this._serviceStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_contract: {
        value: cdktf.stringToHclTerraform(this._stateContract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_sn2_info: {
        value: cdktf.stringToHclTerraform(this._stateSn2Info),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationTagsList",
      },
      version_context: {
        value: cdktf.listMapperHcl(assetDeviceContractNotificationVersionContextToHclTerraform, false)(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssetDeviceContractNotificationVersionContextList",
      },
      warranty_end_date: {
        value: cdktf.stringToHclTerraform(this._warrantyEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warranty_type: {
        value: cdktf.stringToHclTerraform(this._warrantyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
