// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaBandwidthPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#auto_pay GaBandwidthPackage#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#auto_renew_duration GaBandwidthPackage#auto_renew_duration}
  */
  readonly autoRenewDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#auto_use_coupon GaBandwidthPackage#auto_use_coupon}
  */
  readonly autoUseCoupon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#bandwidth GaBandwidthPackage#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#bandwidth_package_name GaBandwidthPackage#bandwidth_package_name}
  */
  readonly bandwidthPackageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#bandwidth_type GaBandwidthPackage#bandwidth_type}
  */
  readonly bandwidthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#billing_type GaBandwidthPackage#billing_type}
  */
  readonly billingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#cbn_geographic_region_ida GaBandwidthPackage#cbn_geographic_region_ida}
  */
  readonly cbnGeographicRegionIda?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#cbn_geographic_region_idb GaBandwidthPackage#cbn_geographic_region_idb}
  */
  readonly cbnGeographicRegionIdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#description GaBandwidthPackage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#duration GaBandwidthPackage#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#id GaBandwidthPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#payment_type GaBandwidthPackage#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#promotion_option_no GaBandwidthPackage#promotion_option_no}
  */
  readonly promotionOptionNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#ratio GaBandwidthPackage#ratio}
  */
  readonly ratio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#renewal_status GaBandwidthPackage#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#resource_group_id GaBandwidthPackage#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#tags GaBandwidthPackage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#type GaBandwidthPackage#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#timeouts GaBandwidthPackage#timeouts}
  */
  readonly timeouts?: GaBandwidthPackageTimeouts;
}
export interface GaBandwidthPackageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#create GaBandwidthPackage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#delete GaBandwidthPackage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#update GaBandwidthPackage#update}
  */
  readonly update?: string;
}

export function gaBandwidthPackageTimeoutsToTerraform(struct?: GaBandwidthPackageTimeouts | cdktf.IResolvable): any {
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


export function gaBandwidthPackageTimeoutsToHclTerraform(struct?: GaBandwidthPackageTimeouts | cdktf.IResolvable): any {
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

export class GaBandwidthPackageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GaBandwidthPackageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GaBandwidthPackageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package alicloud_ga_bandwidth_package}
*/
export class GaBandwidthPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_bandwidth_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaBandwidthPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaBandwidthPackage to import
  * @param importFromId The id of the existing GaBandwidthPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaBandwidthPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_bandwidth_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_bandwidth_package alicloud_ga_bandwidth_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaBandwidthPackageConfig
  */
  public constructor(scope: Construct, id: string, config: GaBandwidthPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_bandwidth_package',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPay = config.autoPay;
    this._autoRenewDuration = config.autoRenewDuration;
    this._autoUseCoupon = config.autoUseCoupon;
    this._bandwidth = config.bandwidth;
    this._bandwidthPackageName = config.bandwidthPackageName;
    this._bandwidthType = config.bandwidthType;
    this._billingType = config.billingType;
    this._cbnGeographicRegionIda = config.cbnGeographicRegionIda;
    this._cbnGeographicRegionIdb = config.cbnGeographicRegionIdb;
    this._description = config.description;
    this._duration = config.duration;
    this._id = config.id;
    this._paymentType = config.paymentType;
    this._promotionOptionNo = config.promotionOptionNo;
    this._ratio = config.ratio;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: boolean | cdktf.IResolvable; 
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }
  public set autoPay(value: boolean | cdktf.IResolvable) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
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

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidth_package_name - computed: false, optional: true, required: false
  private _bandwidthPackageName?: string; 
  public get bandwidthPackageName() {
    return this.getStringAttribute('bandwidth_package_name');
  }
  public set bandwidthPackageName(value: string) {
    this._bandwidthPackageName = value;
  }
  public resetBandwidthPackageName() {
    this._bandwidthPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageNameInput() {
    return this._bandwidthPackageName;
  }

  // bandwidth_type - computed: false, optional: true, required: false
  private _bandwidthType?: string; 
  public get bandwidthType() {
    return this.getStringAttribute('bandwidth_type');
  }
  public set bandwidthType(value: string) {
    this._bandwidthType = value;
  }
  public resetBandwidthType() {
    this._bandwidthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthTypeInput() {
    return this._bandwidthType;
  }

  // billing_type - computed: false, optional: true, required: false
  private _billingType?: string; 
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }
  public set billingType(value: string) {
    this._billingType = value;
  }
  public resetBillingType() {
    this._billingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTypeInput() {
    return this._billingType;
  }

  // cbn_geographic_region_ida - computed: true, optional: true, required: false
  private _cbnGeographicRegionIda?: string; 
  public get cbnGeographicRegionIda() {
    return this.getStringAttribute('cbn_geographic_region_ida');
  }
  public set cbnGeographicRegionIda(value: string) {
    this._cbnGeographicRegionIda = value;
  }
  public resetCbnGeographicRegionIda() {
    this._cbnGeographicRegionIda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbnGeographicRegionIdaInput() {
    return this._cbnGeographicRegionIda;
  }

  // cbn_geographic_region_idb - computed: true, optional: true, required: false
  private _cbnGeographicRegionIdb?: string; 
  public get cbnGeographicRegionIdb() {
    return this.getStringAttribute('cbn_geographic_region_idb');
  }
  public set cbnGeographicRegionIdb(value: string) {
    this._cbnGeographicRegionIdb = value;
  }
  public resetCbnGeographicRegionIdb() {
    this._cbnGeographicRegionIdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbnGeographicRegionIdbInput() {
    return this._cbnGeographicRegionIdb;
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
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
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

  // payment_type - computed: false, optional: true, required: false
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

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GaBandwidthPackageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GaBandwidthPackageTimeouts) {
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
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      auto_renew_duration: cdktf.numberToTerraform(this._autoRenewDuration),
      auto_use_coupon: cdktf.booleanToTerraform(this._autoUseCoupon),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bandwidth_package_name: cdktf.stringToTerraform(this._bandwidthPackageName),
      bandwidth_type: cdktf.stringToTerraform(this._bandwidthType),
      billing_type: cdktf.stringToTerraform(this._billingType),
      cbn_geographic_region_ida: cdktf.stringToTerraform(this._cbnGeographicRegionIda),
      cbn_geographic_region_idb: cdktf.stringToTerraform(this._cbnGeographicRegionIdb),
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.stringToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      promotion_option_no: cdktf.stringToTerraform(this._promotionOptionNo),
      ratio: cdktf.numberToTerraform(this._ratio),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: gaBandwidthPackageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_package_name: {
        value: cdktf.stringToHclTerraform(this._bandwidthPackageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_type: {
        value: cdktf.stringToHclTerraform(this._bandwidthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_type: {
        value: cdktf.stringToHclTerraform(this._billingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbn_geographic_region_ida: {
        value: cdktf.stringToHclTerraform(this._cbnGeographicRegionIda),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cbn_geographic_region_idb: {
        value: cdktf.stringToHclTerraform(this._cbnGeographicRegionIdb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      promotion_option_no: {
        value: cdktf.stringToHclTerraform(this._promotionOptionNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ratio: {
        value: cdktf.numberToHclTerraform(this._ratio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gaBandwidthPackageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GaBandwidthPackageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
