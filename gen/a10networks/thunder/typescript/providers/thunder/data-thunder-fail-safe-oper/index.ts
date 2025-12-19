// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFailSafeOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#id DataThunderFailSafeOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#config DataThunderFailSafeOper#config}
  */
  readonly config?: DataThunderFailSafeOperConfigA;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#oper DataThunderFailSafeOper#oper}
  */
  readonly oper?: DataThunderFailSafeOperOper;
}
export interface DataThunderFailSafeOperConfigOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#dataplane_recovery_timeout DataThunderFailSafeOper#dataplane_recovery_timeout}
  */
  readonly dataplaneRecoveryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_mon_enable DataThunderFailSafeOper#fpga_mon_enable}
  */
  readonly fpgaMonEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_mon_forced_reboot DataThunderFailSafeOper#fpga_mon_forced_reboot}
  */
  readonly fpgaMonForcedReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_mon_interval DataThunderFailSafeOper#fpga_mon_interval}
  */
  readonly fpgaMonInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_mon_threshold DataThunderFailSafeOper#fpga_mon_threshold}
  */
  readonly fpgaMonThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#hw_error_mon DataThunderFailSafeOper#hw_error_mon}
  */
  readonly hwErrorMon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#hw_recovery_timeout DataThunderFailSafeOper#hw_recovery_timeout}
  */
  readonly hwRecoveryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#mem_mon DataThunderFailSafeOper#mem_mon}
  */
  readonly memMon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#sw_error_mon DataThunderFailSafeOper#sw_error_mon}
  */
  readonly swErrorMon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#sw_recovery_timeout DataThunderFailSafeOper#sw_recovery_timeout}
  */
  readonly swRecoveryTimeout?: string;
}

export function dataThunderFailSafeOperConfigOperToTerraform(struct?: DataThunderFailSafeOperConfigOperOutputReference | DataThunderFailSafeOperConfigOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataplane_recovery_timeout: cdktf.stringToTerraform(struct!.dataplaneRecoveryTimeout),
    fpga_mon_enable: cdktf.stringToTerraform(struct!.fpgaMonEnable),
    fpga_mon_forced_reboot: cdktf.stringToTerraform(struct!.fpgaMonForcedReboot),
    fpga_mon_interval: cdktf.stringToTerraform(struct!.fpgaMonInterval),
    fpga_mon_threshold: cdktf.stringToTerraform(struct!.fpgaMonThreshold),
    hw_error_mon: cdktf.stringToTerraform(struct!.hwErrorMon),
    hw_recovery_timeout: cdktf.stringToTerraform(struct!.hwRecoveryTimeout),
    mem_mon: cdktf.stringToTerraform(struct!.memMon),
    sw_error_mon: cdktf.stringToTerraform(struct!.swErrorMon),
    sw_recovery_timeout: cdktf.stringToTerraform(struct!.swRecoveryTimeout),
  }
}


export function dataThunderFailSafeOperConfigOperToHclTerraform(struct?: DataThunderFailSafeOperConfigOperOutputReference | DataThunderFailSafeOperConfigOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataplane_recovery_timeout: {
      value: cdktf.stringToHclTerraform(struct!.dataplaneRecoveryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fpga_mon_enable: {
      value: cdktf.stringToHclTerraform(struct!.fpgaMonEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fpga_mon_forced_reboot: {
      value: cdktf.stringToHclTerraform(struct!.fpgaMonForcedReboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fpga_mon_interval: {
      value: cdktf.stringToHclTerraform(struct!.fpgaMonInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fpga_mon_threshold: {
      value: cdktf.stringToHclTerraform(struct!.fpgaMonThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_error_mon: {
      value: cdktf.stringToHclTerraform(struct!.hwErrorMon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_recovery_timeout: {
      value: cdktf.stringToHclTerraform(struct!.hwRecoveryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_mon: {
      value: cdktf.stringToHclTerraform(struct!.memMon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sw_error_mon: {
      value: cdktf.stringToHclTerraform(struct!.swErrorMon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sw_recovery_timeout: {
      value: cdktf.stringToHclTerraform(struct!.swRecoveryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFailSafeOperConfigOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFailSafeOperConfigOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataplaneRecoveryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplaneRecoveryTimeout = this._dataplaneRecoveryTimeout;
    }
    if (this._fpgaMonEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaMonEnable = this._fpgaMonEnable;
    }
    if (this._fpgaMonForcedReboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaMonForcedReboot = this._fpgaMonForcedReboot;
    }
    if (this._fpgaMonInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaMonInterval = this._fpgaMonInterval;
    }
    if (this._fpgaMonThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaMonThreshold = this._fpgaMonThreshold;
    }
    if (this._hwErrorMon !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwErrorMon = this._hwErrorMon;
    }
    if (this._hwRecoveryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwRecoveryTimeout = this._hwRecoveryTimeout;
    }
    if (this._memMon !== undefined) {
      hasAnyValues = true;
      internalValueResult.memMon = this._memMon;
    }
    if (this._swErrorMon !== undefined) {
      hasAnyValues = true;
      internalValueResult.swErrorMon = this._swErrorMon;
    }
    if (this._swRecoveryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.swRecoveryTimeout = this._swRecoveryTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFailSafeOperConfigOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataplaneRecoveryTimeout = undefined;
      this._fpgaMonEnable = undefined;
      this._fpgaMonForcedReboot = undefined;
      this._fpgaMonInterval = undefined;
      this._fpgaMonThreshold = undefined;
      this._hwErrorMon = undefined;
      this._hwRecoveryTimeout = undefined;
      this._memMon = undefined;
      this._swErrorMon = undefined;
      this._swRecoveryTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataplaneRecoveryTimeout = value.dataplaneRecoveryTimeout;
      this._fpgaMonEnable = value.fpgaMonEnable;
      this._fpgaMonForcedReboot = value.fpgaMonForcedReboot;
      this._fpgaMonInterval = value.fpgaMonInterval;
      this._fpgaMonThreshold = value.fpgaMonThreshold;
      this._hwErrorMon = value.hwErrorMon;
      this._hwRecoveryTimeout = value.hwRecoveryTimeout;
      this._memMon = value.memMon;
      this._swErrorMon = value.swErrorMon;
      this._swRecoveryTimeout = value.swRecoveryTimeout;
    }
  }

  // dataplane_recovery_timeout - computed: false, optional: true, required: false
  private _dataplaneRecoveryTimeout?: string; 
  public get dataplaneRecoveryTimeout() {
    return this.getStringAttribute('dataplane_recovery_timeout');
  }
  public set dataplaneRecoveryTimeout(value: string) {
    this._dataplaneRecoveryTimeout = value;
  }
  public resetDataplaneRecoveryTimeout() {
    this._dataplaneRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneRecoveryTimeoutInput() {
    return this._dataplaneRecoveryTimeout;
  }

  // fpga_mon_enable - computed: false, optional: true, required: false
  private _fpgaMonEnable?: string; 
  public get fpgaMonEnable() {
    return this.getStringAttribute('fpga_mon_enable');
  }
  public set fpgaMonEnable(value: string) {
    this._fpgaMonEnable = value;
  }
  public resetFpgaMonEnable() {
    this._fpgaMonEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonEnableInput() {
    return this._fpgaMonEnable;
  }

  // fpga_mon_forced_reboot - computed: false, optional: true, required: false
  private _fpgaMonForcedReboot?: string; 
  public get fpgaMonForcedReboot() {
    return this.getStringAttribute('fpga_mon_forced_reboot');
  }
  public set fpgaMonForcedReboot(value: string) {
    this._fpgaMonForcedReboot = value;
  }
  public resetFpgaMonForcedReboot() {
    this._fpgaMonForcedReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonForcedRebootInput() {
    return this._fpgaMonForcedReboot;
  }

  // fpga_mon_interval - computed: false, optional: true, required: false
  private _fpgaMonInterval?: string; 
  public get fpgaMonInterval() {
    return this.getStringAttribute('fpga_mon_interval');
  }
  public set fpgaMonInterval(value: string) {
    this._fpgaMonInterval = value;
  }
  public resetFpgaMonInterval() {
    this._fpgaMonInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonIntervalInput() {
    return this._fpgaMonInterval;
  }

  // fpga_mon_threshold - computed: false, optional: true, required: false
  private _fpgaMonThreshold?: string; 
  public get fpgaMonThreshold() {
    return this.getStringAttribute('fpga_mon_threshold');
  }
  public set fpgaMonThreshold(value: string) {
    this._fpgaMonThreshold = value;
  }
  public resetFpgaMonThreshold() {
    this._fpgaMonThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaMonThresholdInput() {
    return this._fpgaMonThreshold;
  }

  // hw_error_mon - computed: false, optional: true, required: false
  private _hwErrorMon?: string; 
  public get hwErrorMon() {
    return this.getStringAttribute('hw_error_mon');
  }
  public set hwErrorMon(value: string) {
    this._hwErrorMon = value;
  }
  public resetHwErrorMon() {
    this._hwErrorMon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwErrorMonInput() {
    return this._hwErrorMon;
  }

  // hw_recovery_timeout - computed: false, optional: true, required: false
  private _hwRecoveryTimeout?: string; 
  public get hwRecoveryTimeout() {
    return this.getStringAttribute('hw_recovery_timeout');
  }
  public set hwRecoveryTimeout(value: string) {
    this._hwRecoveryTimeout = value;
  }
  public resetHwRecoveryTimeout() {
    this._hwRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwRecoveryTimeoutInput() {
    return this._hwRecoveryTimeout;
  }

  // mem_mon - computed: false, optional: true, required: false
  private _memMon?: string; 
  public get memMon() {
    return this.getStringAttribute('mem_mon');
  }
  public set memMon(value: string) {
    this._memMon = value;
  }
  public resetMemMon() {
    this._memMon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memMonInput() {
    return this._memMon;
  }

  // sw_error_mon - computed: false, optional: true, required: false
  private _swErrorMon?: string; 
  public get swErrorMon() {
    return this.getStringAttribute('sw_error_mon');
  }
  public set swErrorMon(value: string) {
    this._swErrorMon = value;
  }
  public resetSwErrorMon() {
    this._swErrorMon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swErrorMonInput() {
    return this._swErrorMon;
  }

  // sw_recovery_timeout - computed: false, optional: true, required: false
  private _swRecoveryTimeout?: string; 
  public get swRecoveryTimeout() {
    return this.getStringAttribute('sw_recovery_timeout');
  }
  public set swRecoveryTimeout(value: string) {
    this._swRecoveryTimeout = value;
  }
  public resetSwRecoveryTimeout() {
    this._swRecoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swRecoveryTimeoutInput() {
    return this._swRecoveryTimeout;
  }
}
export interface DataThunderFailSafeOperConfigA {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#oper DataThunderFailSafeOper#oper}
  */
  readonly oper?: DataThunderFailSafeOperConfigOper;
}

export function dataThunderFailSafeOperConfigAToTerraform(struct?: DataThunderFailSafeOperConfigAOutputReference | DataThunderFailSafeOperConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderFailSafeOperConfigOperToTerraform(struct!.oper),
  }
}


export function dataThunderFailSafeOperConfigAToHclTerraform(struct?: DataThunderFailSafeOperConfigAOutputReference | DataThunderFailSafeOperConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderFailSafeOperConfigOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFailSafeOperConfigOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFailSafeOperConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFailSafeOperConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFailSafeOperConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFailSafeOperConfigOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFailSafeOperConfigOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderFailSafeOperOperFpgaStatsIochan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_stats_iochan_id DataThunderFailSafeOper#fpga_stats_iochan_id}
  */
  readonly fpgaStatsIochanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_stats_iochan_rx DataThunderFailSafeOper#fpga_stats_iochan_rx}
  */
  readonly fpgaStatsIochanRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_stats_iochan_tx DataThunderFailSafeOper#fpga_stats_iochan_tx}
  */
  readonly fpgaStatsIochanTx?: number;
}

export function dataThunderFailSafeOperOperFpgaStatsIochanToTerraform(struct?: DataThunderFailSafeOperOperFpgaStatsIochan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fpga_stats_iochan_id: cdktf.numberToTerraform(struct!.fpgaStatsIochanId),
    fpga_stats_iochan_rx: cdktf.numberToTerraform(struct!.fpgaStatsIochanRx),
    fpga_stats_iochan_tx: cdktf.numberToTerraform(struct!.fpgaStatsIochanTx),
  }
}


export function dataThunderFailSafeOperOperFpgaStatsIochanToHclTerraform(struct?: DataThunderFailSafeOperOperFpgaStatsIochan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fpga_stats_iochan_id: {
      value: cdktf.numberToHclTerraform(struct!.fpgaStatsIochanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_stats_iochan_rx: {
      value: cdktf.numberToHclTerraform(struct!.fpgaStatsIochanRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_stats_iochan_tx: {
      value: cdktf.numberToHclTerraform(struct!.fpgaStatsIochanTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFailSafeOperOperFpgaStatsIochanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFailSafeOperOperFpgaStatsIochan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fpgaStatsIochanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaStatsIochanId = this._fpgaStatsIochanId;
    }
    if (this._fpgaStatsIochanRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaStatsIochanRx = this._fpgaStatsIochanRx;
    }
    if (this._fpgaStatsIochanTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaStatsIochanTx = this._fpgaStatsIochanTx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFailSafeOperOperFpgaStatsIochan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fpgaStatsIochanId = undefined;
      this._fpgaStatsIochanRx = undefined;
      this._fpgaStatsIochanTx = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fpgaStatsIochanId = value.fpgaStatsIochanId;
      this._fpgaStatsIochanRx = value.fpgaStatsIochanRx;
      this._fpgaStatsIochanTx = value.fpgaStatsIochanTx;
    }
  }

  // fpga_stats_iochan_id - computed: false, optional: true, required: false
  private _fpgaStatsIochanId?: number; 
  public get fpgaStatsIochanId() {
    return this.getNumberAttribute('fpga_stats_iochan_id');
  }
  public set fpgaStatsIochanId(value: number) {
    this._fpgaStatsIochanId = value;
  }
  public resetFpgaStatsIochanId() {
    this._fpgaStatsIochanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaStatsIochanIdInput() {
    return this._fpgaStatsIochanId;
  }

  // fpga_stats_iochan_rx - computed: false, optional: true, required: false
  private _fpgaStatsIochanRx?: number; 
  public get fpgaStatsIochanRx() {
    return this.getNumberAttribute('fpga_stats_iochan_rx');
  }
  public set fpgaStatsIochanRx(value: number) {
    this._fpgaStatsIochanRx = value;
  }
  public resetFpgaStatsIochanRx() {
    this._fpgaStatsIochanRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaStatsIochanRxInput() {
    return this._fpgaStatsIochanRx;
  }

  // fpga_stats_iochan_tx - computed: false, optional: true, required: false
  private _fpgaStatsIochanTx?: number; 
  public get fpgaStatsIochanTx() {
    return this.getNumberAttribute('fpga_stats_iochan_tx');
  }
  public set fpgaStatsIochanTx(value: number) {
    this._fpgaStatsIochanTx = value;
  }
  public resetFpgaStatsIochanTx() {
    this._fpgaStatsIochanTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaStatsIochanTxInput() {
    return this._fpgaStatsIochanTx;
  }
}

export class DataThunderFailSafeOperOperFpgaStatsIochanList extends cdktf.ComplexList {
  public internalValue? : DataThunderFailSafeOperOperFpgaStatsIochan[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFailSafeOperOperFpgaStatsIochanOutputReference {
    return new DataThunderFailSafeOperOperFpgaStatsIochanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFailSafeOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#avail_fpga_buff_domain1 DataThunderFailSafeOper#avail_fpga_buff_domain1}
  */
  readonly availFpgaBuffDomain1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#avail_fpga_buff_domain2 DataThunderFailSafeOper#avail_fpga_buff_domain2}
  */
  readonly availFpgaBuffDomain2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_buff_recovery_threshold DataThunderFailSafeOper#fpga_buff_recovery_threshold}
  */
  readonly fpgaBuffRecoveryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_stats_num_cntrs DataThunderFailSafeOper#fpga_stats_num_cntrs}
  */
  readonly fpgaStatsNumCntrs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#free_fpga_buffers DataThunderFailSafeOper#free_fpga_buffers}
  */
  readonly freeFpgaBuffers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#free_session_memory DataThunderFailSafeOper#free_session_memory}
  */
  readonly freeSessionMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#sess_mem_recovery_threshold DataThunderFailSafeOper#sess_mem_recovery_threshold}
  */
  readonly sessMemRecoveryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#total_fpga_buffers DataThunderFailSafeOper#total_fpga_buffers}
  */
  readonly totalFpgaBuffers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#total_free_fpga_buff DataThunderFailSafeOper#total_free_fpga_buff}
  */
  readonly totalFreeFpgaBuff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#total_session_memory DataThunderFailSafeOper#total_session_memory}
  */
  readonly totalSessionMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#total_system_memory DataThunderFailSafeOper#total_system_memory}
  */
  readonly totalSystemMemory?: number;
  /**
  * fpga_stats_iochan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#fpga_stats_iochan DataThunderFailSafeOper#fpga_stats_iochan}
  */
  readonly fpgaStatsIochan?: DataThunderFailSafeOperOperFpgaStatsIochan[] | cdktf.IResolvable;
}

export function dataThunderFailSafeOperOperToTerraform(struct?: DataThunderFailSafeOperOperOutputReference | DataThunderFailSafeOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avail_fpga_buff_domain1: cdktf.numberToTerraform(struct!.availFpgaBuffDomain1),
    avail_fpga_buff_domain2: cdktf.numberToTerraform(struct!.availFpgaBuffDomain2),
    fpga_buff_recovery_threshold: cdktf.numberToTerraform(struct!.fpgaBuffRecoveryThreshold),
    fpga_stats_num_cntrs: cdktf.numberToTerraform(struct!.fpgaStatsNumCntrs),
    free_fpga_buffers: cdktf.numberToTerraform(struct!.freeFpgaBuffers),
    free_session_memory: cdktf.numberToTerraform(struct!.freeSessionMemory),
    sess_mem_recovery_threshold: cdktf.numberToTerraform(struct!.sessMemRecoveryThreshold),
    total_fpga_buffers: cdktf.numberToTerraform(struct!.totalFpgaBuffers),
    total_free_fpga_buff: cdktf.numberToTerraform(struct!.totalFreeFpgaBuff),
    total_session_memory: cdktf.numberToTerraform(struct!.totalSessionMemory),
    total_system_memory: cdktf.numberToTerraform(struct!.totalSystemMemory),
    fpga_stats_iochan: cdktf.listMapper(dataThunderFailSafeOperOperFpgaStatsIochanToTerraform, true)(struct!.fpgaStatsIochan),
  }
}


export function dataThunderFailSafeOperOperToHclTerraform(struct?: DataThunderFailSafeOperOperOutputReference | DataThunderFailSafeOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avail_fpga_buff_domain1: {
      value: cdktf.numberToHclTerraform(struct!.availFpgaBuffDomain1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    avail_fpga_buff_domain2: {
      value: cdktf.numberToHclTerraform(struct!.availFpgaBuffDomain2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_buff_recovery_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fpgaBuffRecoveryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_stats_num_cntrs: {
      value: cdktf.numberToHclTerraform(struct!.fpgaStatsNumCntrs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_fpga_buffers: {
      value: cdktf.numberToHclTerraform(struct!.freeFpgaBuffers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    free_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.freeSessionMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_mem_recovery_threshold: {
      value: cdktf.numberToHclTerraform(struct!.sessMemRecoveryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fpga_buffers: {
      value: cdktf.numberToHclTerraform(struct!.totalFpgaBuffers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_free_fpga_buff: {
      value: cdktf.numberToHclTerraform(struct!.totalFreeFpgaBuff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.totalSessionMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_system_memory: {
      value: cdktf.numberToHclTerraform(struct!.totalSystemMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_stats_iochan: {
      value: cdktf.listMapperHcl(dataThunderFailSafeOperOperFpgaStatsIochanToHclTerraform, true)(struct!.fpgaStatsIochan),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFailSafeOperOperFpgaStatsIochanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFailSafeOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFailSafeOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availFpgaBuffDomain1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.availFpgaBuffDomain1 = this._availFpgaBuffDomain1;
    }
    if (this._availFpgaBuffDomain2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.availFpgaBuffDomain2 = this._availFpgaBuffDomain2;
    }
    if (this._fpgaBuffRecoveryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaBuffRecoveryThreshold = this._fpgaBuffRecoveryThreshold;
    }
    if (this._fpgaStatsNumCntrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaStatsNumCntrs = this._fpgaStatsNumCntrs;
    }
    if (this._freeFpgaBuffers !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeFpgaBuffers = this._freeFpgaBuffers;
    }
    if (this._freeSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeSessionMemory = this._freeSessionMemory;
    }
    if (this._sessMemRecoveryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessMemRecoveryThreshold = this._sessMemRecoveryThreshold;
    }
    if (this._totalFpgaBuffers !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFpgaBuffers = this._totalFpgaBuffers;
    }
    if (this._totalFreeFpgaBuff !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreeFpgaBuff = this._totalFreeFpgaBuff;
    }
    if (this._totalSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSessionMemory = this._totalSessionMemory;
    }
    if (this._totalSystemMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSystemMemory = this._totalSystemMemory;
    }
    if (this._fpgaStatsIochan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaStatsIochan = this._fpgaStatsIochan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFailSafeOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availFpgaBuffDomain1 = undefined;
      this._availFpgaBuffDomain2 = undefined;
      this._fpgaBuffRecoveryThreshold = undefined;
      this._fpgaStatsNumCntrs = undefined;
      this._freeFpgaBuffers = undefined;
      this._freeSessionMemory = undefined;
      this._sessMemRecoveryThreshold = undefined;
      this._totalFpgaBuffers = undefined;
      this._totalFreeFpgaBuff = undefined;
      this._totalSessionMemory = undefined;
      this._totalSystemMemory = undefined;
      this._fpgaStatsIochan.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availFpgaBuffDomain1 = value.availFpgaBuffDomain1;
      this._availFpgaBuffDomain2 = value.availFpgaBuffDomain2;
      this._fpgaBuffRecoveryThreshold = value.fpgaBuffRecoveryThreshold;
      this._fpgaStatsNumCntrs = value.fpgaStatsNumCntrs;
      this._freeFpgaBuffers = value.freeFpgaBuffers;
      this._freeSessionMemory = value.freeSessionMemory;
      this._sessMemRecoveryThreshold = value.sessMemRecoveryThreshold;
      this._totalFpgaBuffers = value.totalFpgaBuffers;
      this._totalFreeFpgaBuff = value.totalFreeFpgaBuff;
      this._totalSessionMemory = value.totalSessionMemory;
      this._totalSystemMemory = value.totalSystemMemory;
      this._fpgaStatsIochan.internalValue = value.fpgaStatsIochan;
    }
  }

  // avail_fpga_buff_domain1 - computed: false, optional: true, required: false
  private _availFpgaBuffDomain1?: number; 
  public get availFpgaBuffDomain1() {
    return this.getNumberAttribute('avail_fpga_buff_domain1');
  }
  public set availFpgaBuffDomain1(value: number) {
    this._availFpgaBuffDomain1 = value;
  }
  public resetAvailFpgaBuffDomain1() {
    this._availFpgaBuffDomain1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availFpgaBuffDomain1Input() {
    return this._availFpgaBuffDomain1;
  }

  // avail_fpga_buff_domain2 - computed: false, optional: true, required: false
  private _availFpgaBuffDomain2?: number; 
  public get availFpgaBuffDomain2() {
    return this.getNumberAttribute('avail_fpga_buff_domain2');
  }
  public set availFpgaBuffDomain2(value: number) {
    this._availFpgaBuffDomain2 = value;
  }
  public resetAvailFpgaBuffDomain2() {
    this._availFpgaBuffDomain2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availFpgaBuffDomain2Input() {
    return this._availFpgaBuffDomain2;
  }

  // fpga_buff_recovery_threshold - computed: false, optional: true, required: false
  private _fpgaBuffRecoveryThreshold?: number; 
  public get fpgaBuffRecoveryThreshold() {
    return this.getNumberAttribute('fpga_buff_recovery_threshold');
  }
  public set fpgaBuffRecoveryThreshold(value: number) {
    this._fpgaBuffRecoveryThreshold = value;
  }
  public resetFpgaBuffRecoveryThreshold() {
    this._fpgaBuffRecoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaBuffRecoveryThresholdInput() {
    return this._fpgaBuffRecoveryThreshold;
  }

  // fpga_stats_num_cntrs - computed: false, optional: true, required: false
  private _fpgaStatsNumCntrs?: number; 
  public get fpgaStatsNumCntrs() {
    return this.getNumberAttribute('fpga_stats_num_cntrs');
  }
  public set fpgaStatsNumCntrs(value: number) {
    this._fpgaStatsNumCntrs = value;
  }
  public resetFpgaStatsNumCntrs() {
    this._fpgaStatsNumCntrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaStatsNumCntrsInput() {
    return this._fpgaStatsNumCntrs;
  }

  // free_fpga_buffers - computed: false, optional: true, required: false
  private _freeFpgaBuffers?: number; 
  public get freeFpgaBuffers() {
    return this.getNumberAttribute('free_fpga_buffers');
  }
  public set freeFpgaBuffers(value: number) {
    this._freeFpgaBuffers = value;
  }
  public resetFreeFpgaBuffers() {
    this._freeFpgaBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeFpgaBuffersInput() {
    return this._freeFpgaBuffers;
  }

  // free_session_memory - computed: false, optional: true, required: false
  private _freeSessionMemory?: number; 
  public get freeSessionMemory() {
    return this.getNumberAttribute('free_session_memory');
  }
  public set freeSessionMemory(value: number) {
    this._freeSessionMemory = value;
  }
  public resetFreeSessionMemory() {
    this._freeSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeSessionMemoryInput() {
    return this._freeSessionMemory;
  }

  // sess_mem_recovery_threshold - computed: false, optional: true, required: false
  private _sessMemRecoveryThreshold?: number; 
  public get sessMemRecoveryThreshold() {
    return this.getNumberAttribute('sess_mem_recovery_threshold');
  }
  public set sessMemRecoveryThreshold(value: number) {
    this._sessMemRecoveryThreshold = value;
  }
  public resetSessMemRecoveryThreshold() {
    this._sessMemRecoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessMemRecoveryThresholdInput() {
    return this._sessMemRecoveryThreshold;
  }

  // total_fpga_buffers - computed: false, optional: true, required: false
  private _totalFpgaBuffers?: number; 
  public get totalFpgaBuffers() {
    return this.getNumberAttribute('total_fpga_buffers');
  }
  public set totalFpgaBuffers(value: number) {
    this._totalFpgaBuffers = value;
  }
  public resetTotalFpgaBuffers() {
    this._totalFpgaBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFpgaBuffersInput() {
    return this._totalFpgaBuffers;
  }

  // total_free_fpga_buff - computed: false, optional: true, required: false
  private _totalFreeFpgaBuff?: number; 
  public get totalFreeFpgaBuff() {
    return this.getNumberAttribute('total_free_fpga_buff');
  }
  public set totalFreeFpgaBuff(value: number) {
    this._totalFreeFpgaBuff = value;
  }
  public resetTotalFreeFpgaBuff() {
    this._totalFreeFpgaBuff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreeFpgaBuffInput() {
    return this._totalFreeFpgaBuff;
  }

  // total_session_memory - computed: false, optional: true, required: false
  private _totalSessionMemory?: number; 
  public get totalSessionMemory() {
    return this.getNumberAttribute('total_session_memory');
  }
  public set totalSessionMemory(value: number) {
    this._totalSessionMemory = value;
  }
  public resetTotalSessionMemory() {
    this._totalSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSessionMemoryInput() {
    return this._totalSessionMemory;
  }

  // total_system_memory - computed: false, optional: true, required: false
  private _totalSystemMemory?: number; 
  public get totalSystemMemory() {
    return this.getNumberAttribute('total_system_memory');
  }
  public set totalSystemMemory(value: number) {
    this._totalSystemMemory = value;
  }
  public resetTotalSystemMemory() {
    this._totalSystemMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSystemMemoryInput() {
    return this._totalSystemMemory;
  }

  // fpga_stats_iochan - computed: false, optional: true, required: false
  private _fpgaStatsIochan = new DataThunderFailSafeOperOperFpgaStatsIochanList(this, "fpga_stats_iochan", false);
  public get fpgaStatsIochan() {
    return this._fpgaStatsIochan;
  }
  public putFpgaStatsIochan(value: DataThunderFailSafeOperOperFpgaStatsIochan[] | cdktf.IResolvable) {
    this._fpgaStatsIochan.internalValue = value;
  }
  public resetFpgaStatsIochan() {
    this._fpgaStatsIochan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaStatsIochanInput() {
    return this._fpgaStatsIochan.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper thunder_fail_safe_oper}
*/
export class DataThunderFailSafeOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fail_safe_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFailSafeOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFailSafeOper to import
  * @param importFromId The id of the existing DataThunderFailSafeOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFailSafeOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fail_safe_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fail_safe_oper thunder_fail_safe_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFailSafeOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFailSafeOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fail_safe_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._config.internalValue = config.config;
    this._oper.internalValue = config.oper;
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

  // config - computed: false, optional: true, required: false
  private _config = new DataThunderFailSafeOperConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataThunderFailSafeOperConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFailSafeOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFailSafeOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      config: dataThunderFailSafeOperConfigAToTerraform(this._config.internalValue),
      oper: dataThunderFailSafeOperOperToTerraform(this._oper.internalValue),
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
      config: {
        value: dataThunderFailSafeOperConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFailSafeOperConfigAList",
      },
      oper: {
        value: dataThunderFailSafeOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFailSafeOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
