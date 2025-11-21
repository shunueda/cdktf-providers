// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaAcceleratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#accelerator_name GaAccelerator#accelerator_name}
  */
  readonly acceleratorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#auto_renew_duration GaAccelerator#auto_renew_duration}
  */
  readonly autoRenewDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#auto_use_coupon GaAccelerator#auto_use_coupon}
  */
  readonly autoUseCoupon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#bandwidth_billing_type GaAccelerator#bandwidth_billing_type}
  */
  readonly bandwidthBillingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#cross_border_mode GaAccelerator#cross_border_mode}
  */
  readonly crossBorderMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#cross_border_status GaAccelerator#cross_border_status}
  */
  readonly crossBorderStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#description GaAccelerator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#duration GaAccelerator#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#id GaAccelerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#payment_type GaAccelerator#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#pricing_cycle GaAccelerator#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#promotion_option_no GaAccelerator#promotion_option_no}
  */
  readonly promotionOptionNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#renewal_status GaAccelerator#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#resource_group_id GaAccelerator#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#spec GaAccelerator#spec}
  */
  readonly spec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#tags GaAccelerator#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#timeouts GaAccelerator#timeouts}
  */
  readonly timeouts?: GaAcceleratorTimeouts;
}
export interface GaAcceleratorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#create GaAccelerator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#delete GaAccelerator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#update GaAccelerator#update}
  */
  readonly update?: string;
}

export function gaAcceleratorTimeoutsToTerraform(struct?: GaAcceleratorTimeouts | cdktf.IResolvable): any {
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


export function gaAcceleratorTimeoutsToHclTerraform(struct?: GaAcceleratorTimeouts | cdktf.IResolvable): any {
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

export class GaAcceleratorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GaAcceleratorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GaAcceleratorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator alicloud_ga_accelerator}
*/
export class GaAccelerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_accelerator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaAccelerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaAccelerator to import
  * @param importFromId The id of the existing GaAccelerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaAccelerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_accelerator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/ga_accelerator alicloud_ga_accelerator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaAcceleratorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GaAcceleratorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_accelerator',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratorName = config.acceleratorName;
    this._autoRenewDuration = config.autoRenewDuration;
    this._autoUseCoupon = config.autoUseCoupon;
    this._bandwidthBillingType = config.bandwidthBillingType;
    this._crossBorderMode = config.crossBorderMode;
    this._crossBorderStatus = config.crossBorderStatus;
    this._description = config.description;
    this._duration = config.duration;
    this._id = config.id;
    this._paymentType = config.paymentType;
    this._pricingCycle = config.pricingCycle;
    this._promotionOptionNo = config.promotionOptionNo;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._spec = config.spec;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_name - computed: false, optional: true, required: false
  private _acceleratorName?: string; 
  public get acceleratorName() {
    return this.getStringAttribute('accelerator_name');
  }
  public set acceleratorName(value: string) {
    this._acceleratorName = value;
  }
  public resetAcceleratorName() {
    this._acceleratorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNameInput() {
    return this._acceleratorName;
  }

  // auto_renew_duration - computed: true, optional: true, required: false
  private _autoRenewDuration?: number; 
  public get autoRenewDuration() {
    return this.getNumberAttribute('auto_renew_duration');
  }
  public set autoRenewDuration(value: number) {
    this._autoRenewDuration = value;
  }
  public resetAutoRenewDuration() {
    this._autoRenewDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewDurationInput() {
    return this._autoRenewDuration;
  }

  // auto_use_coupon - computed: false, optional: true, required: false
  private _autoUseCoupon?: boolean | cdktf.IResolvable; 
  public get autoUseCoupon() {
    return this.getBooleanAttribute('auto_use_coupon');
  }
  public set autoUseCoupon(value: boolean | cdktf.IResolvable) {
    this._autoUseCoupon = value;
  }
  public resetAutoUseCoupon() {
    this._autoUseCoupon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUseCouponInput() {
    return this._autoUseCoupon;
  }

  // bandwidth_billing_type - computed: true, optional: true, required: false
  private _bandwidthBillingType?: string; 
  public get bandwidthBillingType() {
    return this.getStringAttribute('bandwidth_billing_type');
  }
  public set bandwidthBillingType(value: string) {
    this._bandwidthBillingType = value;
  }
  public resetBandwidthBillingType() {
    this._bandwidthBillingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthBillingTypeInput() {
    return this._bandwidthBillingType;
  }

  // cross_border_mode - computed: true, optional: true, required: false
  private _crossBorderMode?: string; 
  public get crossBorderMode() {
    return this.getStringAttribute('cross_border_mode');
  }
  public set crossBorderMode(value: string) {
    this._crossBorderMode = value;
  }
  public resetCrossBorderMode() {
    this._crossBorderMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossBorderModeInput() {
    return this._crossBorderMode;
  }

  // cross_border_status - computed: false, optional: true, required: false
  private _crossBorderStatus?: boolean | cdktf.IResolvable; 
  public get crossBorderStatus() {
    return this.getBooleanAttribute('cross_border_status');
  }
  public set crossBorderStatus(value: boolean | cdktf.IResolvable) {
    this._crossBorderStatus = value;
  }
  public resetCrossBorderStatus() {
    this._crossBorderStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossBorderStatusInput() {
    return this._crossBorderStatus;
  }

  // description - computed: false, optional: true, required: false
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

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // promotion_option_no - computed: false, optional: true, required: false
  private _promotionOptionNo?: string; 
  public get promotionOptionNo() {
    return this.getStringAttribute('promotion_option_no');
  }
  public set promotionOptionNo(value: string) {
    this._promotionOptionNo = value;
  }
  public resetPromotionOptionNo() {
    this._promotionOptionNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionOptionNoInput() {
    return this._promotionOptionNo;
  }

  // renewal_status - computed: true, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GaAcceleratorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GaAcceleratorTimeouts) {
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
      accelerator_name: cdktf.stringToTerraform(this._acceleratorName),
      auto_renew_duration: cdktf.numberToTerraform(this._autoRenewDuration),
      auto_use_coupon: cdktf.booleanToTerraform(this._autoUseCoupon),
      bandwidth_billing_type: cdktf.stringToTerraform(this._bandwidthBillingType),
      cross_border_mode: cdktf.stringToTerraform(this._crossBorderMode),
      cross_border_status: cdktf.booleanToTerraform(this._crossBorderStatus),
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      promotion_option_no: cdktf.stringToTerraform(this._promotionOptionNo),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      spec: cdktf.stringToTerraform(this._spec),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: gaAcceleratorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_name: {
        value: cdktf.stringToHclTerraform(this._acceleratorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_duration: {
        value: cdktf.numberToHclTerraform(this._autoRenewDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_use_coupon: {
        value: cdktf.booleanToHclTerraform(this._autoUseCoupon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth_billing_type: {
        value: cdktf.stringToHclTerraform(this._bandwidthBillingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_border_mode: {
        value: cdktf.stringToHclTerraform(this._crossBorderMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_border_status: {
        value: cdktf.booleanToHclTerraform(this._crossBorderStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promotion_option_no: {
        value: cdktf.stringToHclTerraform(this._promotionOptionNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: gaAcceleratorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GaAcceleratorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
