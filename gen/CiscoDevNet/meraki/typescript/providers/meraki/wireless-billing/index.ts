// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessBillingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The currency code of this node group`s billing plans
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#currency WirelessBilling#currency}
  */
  readonly currency?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#network_id WirelessBilling#network_id}
  */
  readonly networkId: string;
  /**
  * Array of billing plans in the node group. (Can configure a maximum of 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#plans WirelessBilling#plans}
  */
  readonly plans?: WirelessBillingPlans[] | cdktf.IResolvable;
}
export interface WirelessBillingPlans {
  /**
  * The maximum download limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#bandwidth_limits_limit_down WirelessBilling#bandwidth_limits_limit_down}
  */
  readonly bandwidthLimitsLimitDown?: number;
  /**
  * The maximum upload limit (integer, in Kbps). null indicates no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#bandwidth_limits_limit_up WirelessBilling#bandwidth_limits_limit_up}
  */
  readonly bandwidthLimitsLimitUp?: number;
  /**
  * The price of the billing plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#price WirelessBilling#price}
  */
  readonly price: number;
  /**
  * The time limit of the pricing plan in minutes. Can be `1 hour`, `1 day`, `1 week`, or `30 days`.
  *   - Choices: `1 day`, `1 hour`, `1 week`, `30 days`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#time_limit WirelessBilling#time_limit}
  */
  readonly timeLimit: string;
}

export function wirelessBillingPlansToTerraform(struct?: WirelessBillingPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_limits_limit_down: cdktf.numberToTerraform(struct!.bandwidthLimitsLimitDown),
    bandwidth_limits_limit_up: cdktf.numberToTerraform(struct!.bandwidthLimitsLimitUp),
    price: cdktf.numberToTerraform(struct!.price),
    time_limit: cdktf.stringToTerraform(struct!.timeLimit),
  }
}


export function wirelessBillingPlansToHclTerraform(struct?: WirelessBillingPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_limits_limit_down: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimitsLimitDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_limits_limit_up: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthLimitsLimitUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    price: {
      value: cdktf.numberToHclTerraform(struct!.price),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_limit: {
      value: cdktf.stringToHclTerraform(struct!.timeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessBillingPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessBillingPlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthLimitsLimitDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimitsLimitDown = this._bandwidthLimitsLimitDown;
    }
    if (this._bandwidthLimitsLimitUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimitsLimitUp = this._bandwidthLimitsLimitUp;
    }
    if (this._price !== undefined) {
      hasAnyValues = true;
      internalValueResult.price = this._price;
    }
    if (this._timeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeLimit = this._timeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessBillingPlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthLimitsLimitDown = undefined;
      this._bandwidthLimitsLimitUp = undefined;
      this._price = undefined;
      this._timeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthLimitsLimitDown = value.bandwidthLimitsLimitDown;
      this._bandwidthLimitsLimitUp = value.bandwidthLimitsLimitUp;
      this._price = value.price;
      this._timeLimit = value.timeLimit;
    }
  }

  // bandwidth_limits_limit_down - computed: false, optional: true, required: false
  private _bandwidthLimitsLimitDown?: number; 
  public get bandwidthLimitsLimitDown() {
    return this.getNumberAttribute('bandwidth_limits_limit_down');
  }
  public set bandwidthLimitsLimitDown(value: number) {
    this._bandwidthLimitsLimitDown = value;
  }
  public resetBandwidthLimitsLimitDown() {
    this._bandwidthLimitsLimitDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitsLimitDownInput() {
    return this._bandwidthLimitsLimitDown;
  }

  // bandwidth_limits_limit_up - computed: false, optional: true, required: false
  private _bandwidthLimitsLimitUp?: number; 
  public get bandwidthLimitsLimitUp() {
    return this.getNumberAttribute('bandwidth_limits_limit_up');
  }
  public set bandwidthLimitsLimitUp(value: number) {
    this._bandwidthLimitsLimitUp = value;
  }
  public resetBandwidthLimitsLimitUp() {
    this._bandwidthLimitsLimitUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitsLimitUpInput() {
    return this._bandwidthLimitsLimitUp;
  }

  // price - computed: false, optional: false, required: true
  private _price?: number; 
  public get price() {
    return this.getNumberAttribute('price');
  }
  public set price(value: number) {
    this._price = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priceInput() {
    return this._price;
  }

  // time_limit - computed: false, optional: false, required: true
  private _timeLimit?: string; 
  public get timeLimit() {
    return this.getStringAttribute('time_limit');
  }
  public set timeLimit(value: string) {
    this._timeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLimitInput() {
    return this._timeLimit;
  }
}

export class WirelessBillingPlansList extends cdktf.ComplexList {
  public internalValue? : WirelessBillingPlans[] | cdktf.IResolvable

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
  public get(index: number): WirelessBillingPlansOutputReference {
    return new WirelessBillingPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing meraki_wireless_billing}
*/
export class WirelessBilling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_billing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessBilling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessBilling to import
  * @param importFromId The id of the existing WirelessBilling that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessBilling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_billing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_billing meraki_wireless_billing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessBillingConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessBillingConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_billing',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currency = config.currency;
    this._networkId = config.networkId;
    this._plans.internalValue = config.plans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // currency - computed: false, optional: true, required: false
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  public resetCurrency() {
    this._currency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // plans - computed: false, optional: true, required: false
  private _plans = new WirelessBillingPlansList(this, "plans", false);
  public get plans() {
    return this._plans;
  }
  public putPlans(value: WirelessBillingPlans[] | cdktf.IResolvable) {
    this._plans.internalValue = value;
  }
  public resetPlans() {
    this._plans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plansInput() {
    return this._plans.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      currency: cdktf.stringToTerraform(this._currency),
      network_id: cdktf.stringToTerraform(this._networkId),
      plans: cdktf.listMapper(wirelessBillingPlansToTerraform, false)(this._plans.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      currency: {
        value: cdktf.stringToHclTerraform(this._currency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plans: {
        value: cdktf.listMapperHcl(wirelessBillingPlansToHclTerraform, false)(this._plans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessBillingPlansList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
