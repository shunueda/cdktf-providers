// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcdDesktopConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#amount EcdDesktop#amount}
  */
  readonly amount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#auto_pay EcdDesktop#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#auto_renew EcdDesktop#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#bundle_id EcdDesktop#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#desktop_name EcdDesktop#desktop_name}
  */
  readonly desktopName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#desktop_type EcdDesktop#desktop_type}
  */
  readonly desktopType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#end_user_ids EcdDesktop#end_user_ids}
  */
  readonly endUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#host_name EcdDesktop#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#id EcdDesktop#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#office_site_id EcdDesktop#office_site_id}
  */
  readonly officeSiteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#payment_type EcdDesktop#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#period EcdDesktop#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#period_unit EcdDesktop#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#policy_group_id EcdDesktop#policy_group_id}
  */
  readonly policyGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#root_disk_size_gib EcdDesktop#root_disk_size_gib}
  */
  readonly rootDiskSizeGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#status EcdDesktop#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#stopped_mode EcdDesktop#stopped_mode}
  */
  readonly stoppedMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#tags EcdDesktop#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#user_assign_mode EcdDesktop#user_assign_mode}
  */
  readonly userAssignMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#user_disk_size_gib EcdDesktop#user_disk_size_gib}
  */
  readonly userDiskSizeGib?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#timeouts EcdDesktop#timeouts}
  */
  readonly timeouts?: EcdDesktopTimeouts;
}
export interface EcdDesktopTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#create EcdDesktop#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#delete EcdDesktop#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#update EcdDesktop#update}
  */
  readonly update?: string;
}

export function ecdDesktopTimeoutsToTerraform(struct?: EcdDesktopTimeouts | cdktf.IResolvable): any {
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


export function ecdDesktopTimeoutsToHclTerraform(struct?: EcdDesktopTimeouts | cdktf.IResolvable): any {
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

export class EcdDesktopTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcdDesktopTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcdDesktopTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop alicloud_ecd_desktop}
*/
export class EcdDesktop extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecd_desktop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcdDesktop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcdDesktop to import
  * @param importFromId The id of the existing EcdDesktop that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcdDesktop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecd_desktop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecd_desktop alicloud_ecd_desktop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcdDesktopConfig
  */
  public constructor(scope: Construct, id: string, config: EcdDesktopConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecd_desktop',
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
    this._amount = config.amount;
    this._autoPay = config.autoPay;
    this._autoRenew = config.autoRenew;
    this._bundleId = config.bundleId;
    this._desktopName = config.desktopName;
    this._desktopType = config.desktopType;
    this._endUserIds = config.endUserIds;
    this._hostName = config.hostName;
    this._id = config.id;
    this._officeSiteId = config.officeSiteId;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._policyGroupId = config.policyGroupId;
    this._rootDiskSizeGib = config.rootDiskSizeGib;
    this._status = config.status;
    this._stoppedMode = config.stoppedMode;
    this._tags = config.tags;
    this._userAssignMode = config.userAssignMode;
    this._userDiskSizeGib = config.userDiskSizeGib;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

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

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // desktop_name - computed: false, optional: true, required: false
  private _desktopName?: string; 
  public get desktopName() {
    return this.getStringAttribute('desktop_name');
  }
  public set desktopName(value: string) {
    this._desktopName = value;
  }
  public resetDesktopName() {
    this._desktopName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopNameInput() {
    return this._desktopName;
  }

  // desktop_type - computed: true, optional: true, required: false
  private _desktopType?: string; 
  public get desktopType() {
    return this.getStringAttribute('desktop_type');
  }
  public set desktopType(value: string) {
    this._desktopType = value;
  }
  public resetDesktopType() {
    this._desktopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopTypeInput() {
    return this._desktopType;
  }

  // end_user_ids - computed: false, optional: true, required: false
  private _endUserIds?: string[]; 
  public get endUserIds() {
    return this.getListAttribute('end_user_ids');
  }
  public set endUserIds(value: string[]) {
    this._endUserIds = value;
  }
  public resetEndUserIds() {
    this._endUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserIdsInput() {
    return this._endUserIds;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // office_site_id - computed: false, optional: false, required: true
  private _officeSiteId?: string; 
  public get officeSiteId() {
    return this.getStringAttribute('office_site_id');
  }
  public set officeSiteId(value: string) {
    this._officeSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get officeSiteIdInput() {
    return this._officeSiteId;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // policy_group_id - computed: false, optional: false, required: true
  private _policyGroupId?: string; 
  public get policyGroupId() {
    return this.getStringAttribute('policy_group_id');
  }
  public set policyGroupId(value: string) {
    this._policyGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupIdInput() {
    return this._policyGroupId;
  }

  // root_disk_size_gib - computed: false, optional: true, required: false
  private _rootDiskSizeGib?: number; 
  public get rootDiskSizeGib() {
    return this.getNumberAttribute('root_disk_size_gib');
  }
  public set rootDiskSizeGib(value: number) {
    this._rootDiskSizeGib = value;
  }
  public resetRootDiskSizeGib() {
    this._rootDiskSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDiskSizeGibInput() {
    return this._rootDiskSizeGib;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // stopped_mode - computed: true, optional: true, required: false
  private _stoppedMode?: string; 
  public get stoppedMode() {
    return this.getStringAttribute('stopped_mode');
  }
  public set stoppedMode(value: string) {
    this._stoppedMode = value;
  }
  public resetStoppedMode() {
    this._stoppedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedModeInput() {
    return this._stoppedMode;
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

  // user_assign_mode - computed: true, optional: true, required: false
  private _userAssignMode?: string; 
  public get userAssignMode() {
    return this.getStringAttribute('user_assign_mode');
  }
  public set userAssignMode(value: string) {
    this._userAssignMode = value;
  }
  public resetUserAssignMode() {
    this._userAssignMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignModeInput() {
    return this._userAssignMode;
  }

  // user_disk_size_gib - computed: false, optional: true, required: false
  private _userDiskSizeGib?: number; 
  public get userDiskSizeGib() {
    return this.getNumberAttribute('user_disk_size_gib');
  }
  public set userDiskSizeGib(value: number) {
    this._userDiskSizeGib = value;
  }
  public resetUserDiskSizeGib() {
    this._userDiskSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDiskSizeGibInput() {
    return this._userDiskSizeGib;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcdDesktopTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcdDesktopTimeouts) {
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
      amount: cdktf.numberToTerraform(this._amount),
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      desktop_name: cdktf.stringToTerraform(this._desktopName),
      desktop_type: cdktf.stringToTerraform(this._desktopType),
      end_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endUserIds),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      office_site_id: cdktf.stringToTerraform(this._officeSiteId),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      policy_group_id: cdktf.stringToTerraform(this._policyGroupId),
      root_disk_size_gib: cdktf.numberToTerraform(this._rootDiskSizeGib),
      status: cdktf.stringToTerraform(this._status),
      stopped_mode: cdktf.stringToTerraform(this._stoppedMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_assign_mode: cdktf.stringToTerraform(this._userAssignMode),
      user_disk_size_gib: cdktf.numberToTerraform(this._userDiskSizeGib),
      timeouts: ecdDesktopTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount: {
        value: cdktf.numberToHclTerraform(this._amount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desktop_name: {
        value: cdktf.stringToHclTerraform(this._desktopName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desktop_type: {
        value: cdktf.stringToHclTerraform(this._desktopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endUserIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      office_site_id: {
        value: cdktf.stringToHclTerraform(this._officeSiteId),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_group_id: {
        value: cdktf.stringToHclTerraform(this._policyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_disk_size_gib: {
        value: cdktf.numberToHclTerraform(this._rootDiskSizeGib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stopped_mode: {
        value: cdktf.stringToHclTerraform(this._stoppedMode),
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
      user_assign_mode: {
        value: cdktf.stringToHclTerraform(this._userAssignMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_disk_size_gib: {
        value: cdktf.numberToHclTerraform(this._userDiskSizeGib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: ecdDesktopTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcdDesktopTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
