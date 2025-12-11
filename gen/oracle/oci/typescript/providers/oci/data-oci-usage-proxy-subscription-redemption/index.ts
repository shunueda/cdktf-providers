// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciUsageProxySubscriptionRedemptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption#id DataOciUsageProxySubscriptionRedemption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption#subscription_id DataOciUsageProxySubscriptionRedemption#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption#tenancy_id DataOciUsageProxySubscriptionRedemption#tenancy_id}
  */
  readonly tenancyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemption#time_redeemed_greater_than_or_equal_to}
  */
  readonly timeRedeemedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_less_than DataOciUsageProxySubscriptionRedemption#time_redeemed_less_than}
  */
  readonly timeRedeemedLessThan?: string;
}
export interface DataOciUsageProxySubscriptionRedemptionItems {
}

export function dataOciUsageProxySubscriptionRedemptionItemsToTerraform(struct?: DataOciUsageProxySubscriptionRedemptionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciUsageProxySubscriptionRedemptionItemsToHclTerraform(struct?: DataOciUsageProxySubscriptionRedemptionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciUsageProxySubscriptionRedemptionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciUsageProxySubscriptionRedemptionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciUsageProxySubscriptionRedemptionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_rewards - computed: true, optional: false, required: false
  public get baseRewards() {
    return this.getNumberAttribute('base_rewards');
  }

  // fx_rate - computed: true, optional: false, required: false
  public get fxRate() {
    return this.getNumberAttribute('fx_rate');
  }

  // invoice_currency - computed: true, optional: false, required: false
  public get invoiceCurrency() {
    return this.getStringAttribute('invoice_currency');
  }

  // invoice_number - computed: true, optional: false, required: false
  public get invoiceNumber() {
    return this.getStringAttribute('invoice_number');
  }

  // invoice_total_amount - computed: true, optional: false, required: false
  public get invoiceTotalAmount() {
    return this.getNumberAttribute('invoice_total_amount');
  }

  // redeemed_rewards - computed: true, optional: false, required: false
  public get redeemedRewards() {
    return this.getNumberAttribute('redeemed_rewards');
  }

  // redemption_code - computed: true, optional: false, required: false
  public get redemptionCode() {
    return this.getStringAttribute('redemption_code');
  }

  // redemption_email - computed: true, optional: false, required: false
  public get redemptionEmail() {
    return this.getStringAttribute('redemption_email');
  }

  // time_invoiced - computed: true, optional: false, required: false
  public get timeInvoiced() {
    return this.getStringAttribute('time_invoiced');
  }

  // time_redeemed - computed: true, optional: false, required: false
  public get timeRedeemed() {
    return this.getStringAttribute('time_redeemed');
  }
}

export class DataOciUsageProxySubscriptionRedemptionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciUsageProxySubscriptionRedemptionItemsOutputReference {
    return new DataOciUsageProxySubscriptionRedemptionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption oci_usage_proxy_subscription_redemption}
*/
export class DataOciUsageProxySubscriptionRedemption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_usage_proxy_subscription_redemption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciUsageProxySubscriptionRedemption to import
  * @param importFromId The id of the existing DataOciUsageProxySubscriptionRedemption that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciUsageProxySubscriptionRedemption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_usage_proxy_subscription_redemption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/usage_proxy_subscription_redemption oci_usage_proxy_subscription_redemption} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciUsageProxySubscriptionRedemptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciUsageProxySubscriptionRedemptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_usage_proxy_subscription_redemption',
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
    this._id = config.id;
    this._subscriptionId = config.subscriptionId;
    this._tenancyId = config.tenancyId;
    this._timeRedeemedGreaterThanOrEqualTo = config.timeRedeemedGreaterThanOrEqualTo;
    this._timeRedeemedLessThan = config.timeRedeemedLessThan;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataOciUsageProxySubscriptionRedemptionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // time_redeemed_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeRedeemedGreaterThanOrEqualTo?: string; 
  public get timeRedeemedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_redeemed_greater_than_or_equal_to');
  }
  public set timeRedeemedGreaterThanOrEqualTo(value: string) {
    this._timeRedeemedGreaterThanOrEqualTo = value;
  }
  public resetTimeRedeemedGreaterThanOrEqualTo() {
    this._timeRedeemedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRedeemedGreaterThanOrEqualToInput() {
    return this._timeRedeemedGreaterThanOrEqualTo;
  }

  // time_redeemed_less_than - computed: false, optional: true, required: false
  private _timeRedeemedLessThan?: string; 
  public get timeRedeemedLessThan() {
    return this.getStringAttribute('time_redeemed_less_than');
  }
  public set timeRedeemedLessThan(value: string) {
    this._timeRedeemedLessThan = value;
  }
  public resetTimeRedeemedLessThan() {
    this._timeRedeemedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRedeemedLessThanInput() {
    return this._timeRedeemedLessThan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
      time_redeemed_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeRedeemedGreaterThanOrEqualTo),
      time_redeemed_less_than: cdktf.stringToTerraform(this._timeRedeemedLessThan),
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
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_redeemed_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeRedeemedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_redeemed_less_than: {
        value: cdktf.stringToHclTerraform(this._timeRedeemedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
