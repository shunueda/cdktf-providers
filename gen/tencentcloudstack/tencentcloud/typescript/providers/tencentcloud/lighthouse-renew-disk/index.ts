// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseRenewDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically use the voucher. Not used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#auto_voucher LighthouseRenewDisk#auto_voucher}
  */
  readonly autoVoucher?: boolean | cdktf.IResolvable;
  /**
  * List of disk ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#disk_id LighthouseRenewDisk#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#id LighthouseRenewDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * renew_disk_charge_prepaid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#renew_disk_charge_prepaid LighthouseRenewDisk#renew_disk_charge_prepaid}
  */
  readonly renewDiskChargePrepaid: LighthouseRenewDiskRenewDiskChargePrepaid;
}
export interface LighthouseRenewDiskRenewDiskChargePrepaid {
  /**
  * Current instance expiration time. Such as 2018-01-01 00:00:00. Specifying this parameter can align the expiration time of the instance attached to the disk. One of this parameter and Period must be specified, and cannot be specified at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#cur_instance_deadline LighthouseRenewDisk#cur_instance_deadline}
  */
  readonly curInstanceDeadline?: string;
  /**
  * Renewal period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#period LighthouseRenewDisk#period}
  */
  readonly period?: number;
  /**
  * Automatic renewal falg. Value:NOTIFY_AND_AUTO_RENEW: Notice expires and auto-renews.NOTIFY_AND_MANUAL_RENEW: Notification expires without automatic renewal, users need to manually renew.DISABLE_NOTIFY_AND_AUTO_RENEW: No automatic renewal and no notification.Default: NOTIFY_AND_MANUAL_RENEW. If this parameter is specified as NOTIFY_AND_AUTO_RENEW, the disk will be automatically renewed monthly when the account balance is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#renew_flag LighthouseRenewDisk#renew_flag}
  */
  readonly renewFlag?: string;
  /**
  * newly purchased unit. Default: m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#time_unit LighthouseRenewDisk#time_unit}
  */
  readonly timeUnit?: string;
}

export function lighthouseRenewDiskRenewDiskChargePrepaidToTerraform(struct?: LighthouseRenewDiskRenewDiskChargePrepaidOutputReference | LighthouseRenewDiskRenewDiskChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cur_instance_deadline: cdktf.stringToTerraform(struct!.curInstanceDeadline),
    period: cdktf.numberToTerraform(struct!.period),
    renew_flag: cdktf.stringToTerraform(struct!.renewFlag),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
  }
}


export function lighthouseRenewDiskRenewDiskChargePrepaidToHclTerraform(struct?: LighthouseRenewDiskRenewDiskChargePrepaidOutputReference | LighthouseRenewDiskRenewDiskChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cur_instance_deadline: {
      value: cdktf.stringToHclTerraform(struct!.curInstanceDeadline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.renewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LighthouseRenewDiskRenewDiskChargePrepaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LighthouseRenewDiskRenewDiskChargePrepaid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curInstanceDeadline !== undefined) {
      hasAnyValues = true;
      internalValueResult.curInstanceDeadline = this._curInstanceDeadline;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._renewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewFlag = this._renewFlag;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LighthouseRenewDiskRenewDiskChargePrepaid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._curInstanceDeadline = undefined;
      this._period = undefined;
      this._renewFlag = undefined;
      this._timeUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._curInstanceDeadline = value.curInstanceDeadline;
      this._period = value.period;
      this._renewFlag = value.renewFlag;
      this._timeUnit = value.timeUnit;
    }
  }

  // cur_instance_deadline - computed: false, optional: true, required: false
  private _curInstanceDeadline?: string; 
  public get curInstanceDeadline() {
    return this.getStringAttribute('cur_instance_deadline');
  }
  public set curInstanceDeadline(value: string) {
    this._curInstanceDeadline = value;
  }
  public resetCurInstanceDeadline() {
    this._curInstanceDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curInstanceDeadlineInput() {
    return this._curInstanceDeadline;
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

  // renew_flag - computed: false, optional: true, required: false
  private _renewFlag?: string; 
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
  public set renewFlag(value: string) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk tencentcloud_lighthouse_renew_disk}
*/
export class LighthouseRenewDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lighthouse_renew_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LighthouseRenewDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LighthouseRenewDisk to import
  * @param importFromId The id of the existing LighthouseRenewDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LighthouseRenewDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lighthouse_renew_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/lighthouse_renew_disk tencentcloud_lighthouse_renew_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseRenewDiskConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseRenewDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lighthouse_renew_disk',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoVoucher = config.autoVoucher;
    this._diskId = config.diskId;
    this._id = config.id;
    this._renewDiskChargePrepaid.internalValue = config.renewDiskChargePrepaid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_voucher - computed: false, optional: true, required: false
  private _autoVoucher?: boolean | cdktf.IResolvable; 
  public get autoVoucher() {
    return this.getBooleanAttribute('auto_voucher');
  }
  public set autoVoucher(value: boolean | cdktf.IResolvable) {
    this._autoVoucher = value;
  }
  public resetAutoVoucher() {
    this._autoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVoucherInput() {
    return this._autoVoucher;
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId?: string; 
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
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

  // renew_disk_charge_prepaid - computed: false, optional: false, required: true
  private _renewDiskChargePrepaid = new LighthouseRenewDiskRenewDiskChargePrepaidOutputReference(this, "renew_disk_charge_prepaid");
  public get renewDiskChargePrepaid() {
    return this._renewDiskChargePrepaid;
  }
  public putRenewDiskChargePrepaid(value: LighthouseRenewDiskRenewDiskChargePrepaid) {
    this._renewDiskChargePrepaid.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewDiskChargePrepaidInput() {
    return this._renewDiskChargePrepaid.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_voucher: cdktf.booleanToTerraform(this._autoVoucher),
      disk_id: cdktf.stringToTerraform(this._diskId),
      id: cdktf.stringToTerraform(this._id),
      renew_disk_charge_prepaid: lighthouseRenewDiskRenewDiskChargePrepaidToTerraform(this._renewDiskChargePrepaid.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_voucher: {
        value: cdktf.booleanToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_id: {
        value: cdktf.stringToHclTerraform(this._diskId),
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
      renew_disk_charge_prepaid: {
        value: lighthouseRenewDiskRenewDiskChargePrepaidToHclTerraform(this._renewDiskChargePrepaid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LighthouseRenewDiskRenewDiskChargePrepaidList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
