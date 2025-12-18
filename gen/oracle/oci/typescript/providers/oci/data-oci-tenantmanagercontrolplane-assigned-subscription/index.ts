// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscription#assigned_subscription_id DataOciTenantmanagercontrolplaneAssignedSubscription#assigned_subscription_id}
  */
  readonly assignedSubscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscription#id DataOciTenantmanagercontrolplaneAssignedSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotion {
}

export function dataOciTenantmanagercontrolplaneAssignedSubscriptionPromotionToTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneAssignedSubscriptionPromotionToHclTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // currency_unit - computed: true, optional: false, required: false
  public get currencyUnit() {
    return this.getStringAttribute('currency_unit');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // duration_unit - computed: true, optional: false, required: false
  public get durationUnit() {
    return this.getStringAttribute('duration_unit');
  }

  // is_intent_to_pay - computed: true, optional: false, required: false
  public get isIntentToPay() {
    return this.getBooleanAttribute('is_intent_to_pay');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_expired - computed: true, optional: false, required: false
  public get timeExpired() {
    return this.getStringAttribute('time_expired');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotionOutputReference {
    return new DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciTenantmanagercontrolplaneAssignedSubscriptionSkus {
}

export function dataOciTenantmanagercontrolplaneAssignedSubscriptionSkusToTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciTenantmanagercontrolplaneAssignedSubscriptionSkusToHclTerraform(struct?: DataOciTenantmanagercontrolplaneAssignedSubscriptionSkus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionSkusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciTenantmanagercontrolplaneAssignedSubscriptionSkus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciTenantmanagercontrolplaneAssignedSubscriptionSkus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // gsi_order_line_id - computed: true, optional: false, required: false
  public get gsiOrderLineId() {
    return this.getStringAttribute('gsi_order_line_id');
  }

  // is_additional_instance - computed: true, optional: false, required: false
  public get isAdditionalInstance() {
    return this.getBooleanAttribute('is_additional_instance');
  }

  // is_base_service_component - computed: true, optional: false, required: false
  public get isBaseServiceComponent() {
    return this.getBooleanAttribute('is_base_service_component');
  }

  // license_part_description - computed: true, optional: false, required: false
  public get licensePartDescription() {
    return this.getStringAttribute('license_part_description');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
}

export class DataOciTenantmanagercontrolplaneAssignedSubscriptionSkusList extends cdktf.ComplexList {

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
  public get(index: number): DataOciTenantmanagercontrolplaneAssignedSubscriptionSkusOutputReference {
    return new DataOciTenantmanagercontrolplaneAssignedSubscriptionSkusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscription oci_tenantmanagercontrolplane_assigned_subscription}
*/
export class DataOciTenantmanagercontrolplaneAssignedSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_tenantmanagercontrolplane_assigned_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciTenantmanagercontrolplaneAssignedSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciTenantmanagercontrolplaneAssignedSubscription to import
  * @param importFromId The id of the existing DataOciTenantmanagercontrolplaneAssignedSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciTenantmanagercontrolplaneAssignedSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_tenantmanagercontrolplane_assigned_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_assigned_subscription oci_tenantmanagercontrolplane_assigned_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciTenantmanagercontrolplaneAssignedSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciTenantmanagercontrolplaneAssignedSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_tenantmanagercontrolplane_assigned_subscription',
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
    this._assignedSubscriptionId = config.assignedSubscriptionId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_subscription_id - computed: false, optional: false, required: true
  private _assignedSubscriptionId?: string; 
  public get assignedSubscriptionId() {
    return this.getStringAttribute('assigned_subscription_id');
  }
  public set assignedSubscriptionId(value: string) {
    this._assignedSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedSubscriptionIdInput() {
    return this._assignedSubscriptionId;
  }

  // classic_subscription_id - computed: true, optional: false, required: false
  public get classicSubscriptionId() {
    return this.getStringAttribute('classic_subscription_id');
  }

  // cloud_amount_currency - computed: true, optional: false, required: false
  public get cloudAmountCurrency() {
    return this.getStringAttribute('cloud_amount_currency');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // csi_number - computed: true, optional: false, required: false
  public get csiNumber() {
    return this.getStringAttribute('csi_number');
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // customer_country_code - computed: true, optional: false, required: false
  public get customerCountryCode() {
    return this.getStringAttribute('customer_country_code');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getStringAttribute('entity_version');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
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

  // is_classic_subscription - computed: true, optional: false, required: false
  public get isClassicSubscription() {
    return this.getBooleanAttribute('is_classic_subscription');
  }

  // is_government_subscription - computed: true, optional: false, required: false
  public get isGovernmentSubscription() {
    return this.getBooleanAttribute('is_government_subscription');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // order_ids - computed: true, optional: false, required: false
  public get orderIds() {
    return this.getListAttribute('order_ids');
  }

  // program_type - computed: true, optional: false, required: false
  public get programType() {
    return this.getStringAttribute('program_type');
  }

  // promotion - computed: true, optional: false, required: false
  private _promotion = new DataOciTenantmanagercontrolplaneAssignedSubscriptionPromotionList(this, "promotion", false);
  public get promotion() {
    return this._promotion;
  }

  // purchase_entitlement_id - computed: true, optional: false, required: false
  public get purchaseEntitlementId() {
    return this.getStringAttribute('purchase_entitlement_id');
  }

  // region_assignment - computed: true, optional: false, required: false
  public get regionAssignment() {
    return this.getStringAttribute('region_assignment');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // skus - computed: true, optional: false, required: false
  private _skus = new DataOciTenantmanagercontrolplaneAssignedSubscriptionSkusList(this, "skus", false);
  public get skus() {
    return this._skus;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_number - computed: true, optional: false, required: false
  public get subscriptionNumber() {
    return this.getStringAttribute('subscription_number');
  }

  // subscription_tier - computed: true, optional: false, required: false
  public get subscriptionTier() {
    return this.getStringAttribute('subscription_tier');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_subscription_id: cdktf.stringToTerraform(this._assignedSubscriptionId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_subscription_id: {
        value: cdktf.stringToHclTerraform(this._assignedSubscriptionId),
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
