// https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CouponConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#amount_off Coupon#amount_off}
  */
  readonly amountOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#code Coupon#code}
  */
  readonly code: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#currency Coupon#currency}
  */
  readonly currency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#duration Coupon#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#duration_in_months Coupon#duration_in_months}
  */
  readonly durationInMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#id Coupon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#max_redemptions Coupon#max_redemptions}
  */
  readonly maxRedemptions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#metadata Coupon#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#name Coupon#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#percent_off Coupon#percent_off}
  */
  readonly percentOff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#redeem_by Coupon#redeem_by}
  */
  readonly redeemBy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon stripe_coupon}
*/
export class Coupon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stripe_coupon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Coupon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Coupon to import
  * @param importFromId The id of the existing Coupon that should be imported. Refer to the {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Coupon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stripe_coupon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/franckverrot/stripe/1.9.0/docs/resources/coupon stripe_coupon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CouponConfig
  */
  public constructor(scope: Construct, id: string, config: CouponConfig) {
    super(scope, id, {
      terraformResourceType: 'stripe_coupon',
      terraformGeneratorMetadata: {
        providerName: 'stripe',
        providerVersion: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amountOff = config.amountOff;
    this._code = config.code;
    this._currency = config.currency;
    this._duration = config.duration;
    this._durationInMonths = config.durationInMonths;
    this._id = config.id;
    this._maxRedemptions = config.maxRedemptions;
    this._metadata = config.metadata;
    this._name = config.name;
    this._percentOff = config.percentOff;
    this._redeemBy = config.redeemBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount_off - computed: false, optional: true, required: false
  private _amountOff?: number; 
  public get amountOff() {
    return this.getNumberAttribute('amount_off');
  }
  public set amountOff(value: number) {
    this._amountOff = value;
  }
  public resetAmountOff() {
    this._amountOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountOffInput() {
    return this._amountOff;
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

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

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // duration_in_months - computed: false, optional: true, required: false
  private _durationInMonths?: number; 
  public get durationInMonths() {
    return this.getNumberAttribute('duration_in_months');
  }
  public set durationInMonths(value: number) {
    this._durationInMonths = value;
  }
  public resetDurationInMonths() {
    this._durationInMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInMonthsInput() {
    return this._durationInMonths;
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

  // livemode - computed: true, optional: false, required: false
  public get livemode() {
    return this.getBooleanAttribute('livemode');
  }

  // max_redemptions - computed: false, optional: true, required: false
  private _maxRedemptions?: number; 
  public get maxRedemptions() {
    return this.getNumberAttribute('max_redemptions');
  }
  public set maxRedemptions(value: number) {
    this._maxRedemptions = value;
  }
  public resetMaxRedemptions() {
    this._maxRedemptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRedemptionsInput() {
    return this._maxRedemptions;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // percent_off - computed: false, optional: true, required: false
  private _percentOff?: number; 
  public get percentOff() {
    return this.getNumberAttribute('percent_off');
  }
  public set percentOff(value: number) {
    this._percentOff = value;
  }
  public resetPercentOff() {
    this._percentOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOffInput() {
    return this._percentOff;
  }

  // redeem_by - computed: false, optional: true, required: false
  private _redeemBy?: string; 
  public get redeemBy() {
    return this.getStringAttribute('redeem_by');
  }
  public set redeemBy(value: string) {
    this._redeemBy = value;
  }
  public resetRedeemBy() {
    this._redeemBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeemByInput() {
    return this._redeemBy;
  }

  // times_redeemed - computed: true, optional: false, required: false
  public get timesRedeemed() {
    return this.getNumberAttribute('times_redeemed');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount_off: cdktf.numberToTerraform(this._amountOff),
      code: cdktf.stringToTerraform(this._code),
      currency: cdktf.stringToTerraform(this._currency),
      duration: cdktf.stringToTerraform(this._duration),
      duration_in_months: cdktf.numberToTerraform(this._durationInMonths),
      id: cdktf.stringToTerraform(this._id),
      max_redemptions: cdktf.numberToTerraform(this._maxRedemptions),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      percent_off: cdktf.numberToTerraform(this._percentOff),
      redeem_by: cdktf.stringToTerraform(this._redeemBy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount_off: {
        value: cdktf.numberToHclTerraform(this._amountOff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      code: {
        value: cdktf.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      currency: {
        value: cdktf.stringToHclTerraform(this._currency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration_in_months: {
        value: cdktf.numberToHclTerraform(this._durationInMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_redemptions: {
        value: cdktf.numberToHclTerraform(this._maxRedemptions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      percent_off: {
        value: cdktf.numberToHclTerraform(this._percentOff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redeem_by: {
        value: cdktf.stringToHclTerraform(this._redeemBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
