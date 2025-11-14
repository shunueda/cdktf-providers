// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateFwmsettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#auto_scan_fgt_disk FmupdateFwmsetting#auto_scan_fgt_disk}
  */
  readonly autoScanFgtDisk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#check_fgt_disk FmupdateFwmsetting#check_fgt_disk}
  */
  readonly checkFgtDisk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#fds_failover_fmg FmupdateFwmsetting#fds_failover_fmg}
  */
  readonly fdsFailoverFmg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#fds_image_timeout FmupdateFwmsetting#fds_image_timeout}
  */
  readonly fdsImageTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#health_check FmupdateFwmsetting#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#id FmupdateFwmsetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#immx_source FmupdateFwmsetting#immx_source}
  */
  readonly immxSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#log FmupdateFwmsetting#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#max_device_history FmupdateFwmsetting#max_device_history}
  */
  readonly maxDeviceHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#max_profile_history FmupdateFwmsetting#max_profile_history}
  */
  readonly maxProfileHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#multiple_steps_interval FmupdateFwmsetting#multiple_steps_interval}
  */
  readonly multipleStepsInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#retrieve FmupdateFwmsetting#retrieve}
  */
  readonly retrieve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#retry_interval FmupdateFwmsetting#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#retry_max FmupdateFwmsetting#retry_max}
  */
  readonly retryMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#revision_diff FmupdateFwmsetting#revision_diff}
  */
  readonly revisionDiff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#send_image_retry FmupdateFwmsetting#send_image_retry}
  */
  readonly sendImageRetry?: number;
  /**
  * upgrade_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#upgrade_timeout FmupdateFwmsetting#upgrade_timeout}
  */
  readonly upgradeTimeout?: FmupdateFwmsettingUpgradeTimeout;
}
export interface FmupdateFwmsettingUpgradeTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#check_status_timeout FmupdateFwmsetting#check_status_timeout}
  */
  readonly checkStatusTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#ctrl_check_status_timeout FmupdateFwmsetting#ctrl_check_status_timeout}
  */
  readonly ctrlCheckStatusTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#ctrl_put_image_by_fds_timeout FmupdateFwmsetting#ctrl_put_image_by_fds_timeout}
  */
  readonly ctrlPutImageByFdsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#ha_sync_timeout FmupdateFwmsetting#ha_sync_timeout}
  */
  readonly haSyncTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#health_check_timeout FmupdateFwmsetting#health_check_timeout}
  */
  readonly healthCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#license_check_timeout FmupdateFwmsetting#license_check_timeout}
  */
  readonly licenseCheckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#prepare_image_timeout FmupdateFwmsetting#prepare_image_timeout}
  */
  readonly prepareImageTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#put_image_by_fds_timeout FmupdateFwmsetting#put_image_by_fds_timeout}
  */
  readonly putImageByFdsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#put_image_timeout FmupdateFwmsetting#put_image_timeout}
  */
  readonly putImageTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#reboot_of_fsck_timeout FmupdateFwmsetting#reboot_of_fsck_timeout}
  */
  readonly rebootOfFsckTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#reboot_of_upgrade_timeout FmupdateFwmsetting#reboot_of_upgrade_timeout}
  */
  readonly rebootOfUpgradeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#retrieve_timeout FmupdateFwmsetting#retrieve_timeout}
  */
  readonly retrieveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#rpc_timeout FmupdateFwmsetting#rpc_timeout}
  */
  readonly rpcTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#total_timeout FmupdateFwmsetting#total_timeout}
  */
  readonly totalTimeout?: number;
}

export function fmupdateFwmsettingUpgradeTimeoutToTerraform(struct?: FmupdateFwmsettingUpgradeTimeoutOutputReference | FmupdateFwmsettingUpgradeTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_status_timeout: cdktf.numberToTerraform(struct!.checkStatusTimeout),
    ctrl_check_status_timeout: cdktf.numberToTerraform(struct!.ctrlCheckStatusTimeout),
    ctrl_put_image_by_fds_timeout: cdktf.numberToTerraform(struct!.ctrlPutImageByFdsTimeout),
    ha_sync_timeout: cdktf.numberToTerraform(struct!.haSyncTimeout),
    health_check_timeout: cdktf.numberToTerraform(struct!.healthCheckTimeout),
    license_check_timeout: cdktf.numberToTerraform(struct!.licenseCheckTimeout),
    prepare_image_timeout: cdktf.numberToTerraform(struct!.prepareImageTimeout),
    put_image_by_fds_timeout: cdktf.numberToTerraform(struct!.putImageByFdsTimeout),
    put_image_timeout: cdktf.numberToTerraform(struct!.putImageTimeout),
    reboot_of_fsck_timeout: cdktf.numberToTerraform(struct!.rebootOfFsckTimeout),
    reboot_of_upgrade_timeout: cdktf.numberToTerraform(struct!.rebootOfUpgradeTimeout),
    retrieve_timeout: cdktf.numberToTerraform(struct!.retrieveTimeout),
    rpc_timeout: cdktf.numberToTerraform(struct!.rpcTimeout),
    total_timeout: cdktf.numberToTerraform(struct!.totalTimeout),
  }
}


export function fmupdateFwmsettingUpgradeTimeoutToHclTerraform(struct?: FmupdateFwmsettingUpgradeTimeoutOutputReference | FmupdateFwmsettingUpgradeTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_status_timeout: {
      value: cdktf.numberToHclTerraform(struct!.checkStatusTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctrl_check_status_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ctrlCheckStatusTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctrl_put_image_by_fds_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ctrlPutImageByFdsTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_sync_timeout: {
      value: cdktf.numberToHclTerraform(struct!.haSyncTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_timeout: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    license_check_timeout: {
      value: cdktf.numberToHclTerraform(struct!.licenseCheckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prepare_image_timeout: {
      value: cdktf.numberToHclTerraform(struct!.prepareImageTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    put_image_by_fds_timeout: {
      value: cdktf.numberToHclTerraform(struct!.putImageByFdsTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    put_image_timeout: {
      value: cdktf.numberToHclTerraform(struct!.putImageTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reboot_of_fsck_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rebootOfFsckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reboot_of_upgrade_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rebootOfUpgradeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrieve_timeout: {
      value: cdktf.numberToHclTerraform(struct!.retrieveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpc_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rpcTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_timeout: {
      value: cdktf.numberToHclTerraform(struct!.totalTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FmupdateFwmsettingUpgradeTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FmupdateFwmsettingUpgradeTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkStatusTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkStatusTimeout = this._checkStatusTimeout;
    }
    if (this._ctrlCheckStatusTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctrlCheckStatusTimeout = this._ctrlCheckStatusTimeout;
    }
    if (this._ctrlPutImageByFdsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctrlPutImageByFdsTimeout = this._ctrlPutImageByFdsTimeout;
    }
    if (this._haSyncTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSyncTimeout = this._haSyncTimeout;
    }
    if (this._healthCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckTimeout = this._healthCheckTimeout;
    }
    if (this._licenseCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseCheckTimeout = this._licenseCheckTimeout;
    }
    if (this._prepareImageTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepareImageTimeout = this._prepareImageTimeout;
    }
    if (this._putImageByFdsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.putImageByFdsTimeout = this._putImageByFdsTimeout;
    }
    if (this._putImageTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.putImageTimeout = this._putImageTimeout;
    }
    if (this._rebootOfFsckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootOfFsckTimeout = this._rebootOfFsckTimeout;
    }
    if (this._rebootOfUpgradeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootOfUpgradeTimeout = this._rebootOfUpgradeTimeout;
    }
    if (this._retrieveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrieveTimeout = this._retrieveTimeout;
    }
    if (this._rpcTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpcTimeout = this._rpcTimeout;
    }
    if (this._totalTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTimeout = this._totalTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FmupdateFwmsettingUpgradeTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkStatusTimeout = undefined;
      this._ctrlCheckStatusTimeout = undefined;
      this._ctrlPutImageByFdsTimeout = undefined;
      this._haSyncTimeout = undefined;
      this._healthCheckTimeout = undefined;
      this._licenseCheckTimeout = undefined;
      this._prepareImageTimeout = undefined;
      this._putImageByFdsTimeout = undefined;
      this._putImageTimeout = undefined;
      this._rebootOfFsckTimeout = undefined;
      this._rebootOfUpgradeTimeout = undefined;
      this._retrieveTimeout = undefined;
      this._rpcTimeout = undefined;
      this._totalTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkStatusTimeout = value.checkStatusTimeout;
      this._ctrlCheckStatusTimeout = value.ctrlCheckStatusTimeout;
      this._ctrlPutImageByFdsTimeout = value.ctrlPutImageByFdsTimeout;
      this._haSyncTimeout = value.haSyncTimeout;
      this._healthCheckTimeout = value.healthCheckTimeout;
      this._licenseCheckTimeout = value.licenseCheckTimeout;
      this._prepareImageTimeout = value.prepareImageTimeout;
      this._putImageByFdsTimeout = value.putImageByFdsTimeout;
      this._putImageTimeout = value.putImageTimeout;
      this._rebootOfFsckTimeout = value.rebootOfFsckTimeout;
      this._rebootOfUpgradeTimeout = value.rebootOfUpgradeTimeout;
      this._retrieveTimeout = value.retrieveTimeout;
      this._rpcTimeout = value.rpcTimeout;
      this._totalTimeout = value.totalTimeout;
    }
  }

  // check_status_timeout - computed: true, optional: true, required: false
  private _checkStatusTimeout?: number; 
  public get checkStatusTimeout() {
    return this.getNumberAttribute('check_status_timeout');
  }
  public set checkStatusTimeout(value: number) {
    this._checkStatusTimeout = value;
  }
  public resetCheckStatusTimeout() {
    this._checkStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStatusTimeoutInput() {
    return this._checkStatusTimeout;
  }

  // ctrl_check_status_timeout - computed: true, optional: true, required: false
  private _ctrlCheckStatusTimeout?: number; 
  public get ctrlCheckStatusTimeout() {
    return this.getNumberAttribute('ctrl_check_status_timeout');
  }
  public set ctrlCheckStatusTimeout(value: number) {
    this._ctrlCheckStatusTimeout = value;
  }
  public resetCtrlCheckStatusTimeout() {
    this._ctrlCheckStatusTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlCheckStatusTimeoutInput() {
    return this._ctrlCheckStatusTimeout;
  }

  // ctrl_put_image_by_fds_timeout - computed: true, optional: true, required: false
  private _ctrlPutImageByFdsTimeout?: number; 
  public get ctrlPutImageByFdsTimeout() {
    return this.getNumberAttribute('ctrl_put_image_by_fds_timeout');
  }
  public set ctrlPutImageByFdsTimeout(value: number) {
    this._ctrlPutImageByFdsTimeout = value;
  }
  public resetCtrlPutImageByFdsTimeout() {
    this._ctrlPutImageByFdsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlPutImageByFdsTimeoutInput() {
    return this._ctrlPutImageByFdsTimeout;
  }

  // ha_sync_timeout - computed: true, optional: true, required: false
  private _haSyncTimeout?: number; 
  public get haSyncTimeout() {
    return this.getNumberAttribute('ha_sync_timeout');
  }
  public set haSyncTimeout(value: number) {
    this._haSyncTimeout = value;
  }
  public resetHaSyncTimeout() {
    this._haSyncTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSyncTimeoutInput() {
    return this._haSyncTimeout;
  }

  // health_check_timeout - computed: true, optional: true, required: false
  private _healthCheckTimeout?: number; 
  public get healthCheckTimeout() {
    return this.getNumberAttribute('health_check_timeout');
  }
  public set healthCheckTimeout(value: number) {
    this._healthCheckTimeout = value;
  }
  public resetHealthCheckTimeout() {
    this._healthCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTimeoutInput() {
    return this._healthCheckTimeout;
  }

  // license_check_timeout - computed: true, optional: true, required: false
  private _licenseCheckTimeout?: number; 
  public get licenseCheckTimeout() {
    return this.getNumberAttribute('license_check_timeout');
  }
  public set licenseCheckTimeout(value: number) {
    this._licenseCheckTimeout = value;
  }
  public resetLicenseCheckTimeout() {
    this._licenseCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseCheckTimeoutInput() {
    return this._licenseCheckTimeout;
  }

  // prepare_image_timeout - computed: true, optional: true, required: false
  private _prepareImageTimeout?: number; 
  public get prepareImageTimeout() {
    return this.getNumberAttribute('prepare_image_timeout');
  }
  public set prepareImageTimeout(value: number) {
    this._prepareImageTimeout = value;
  }
  public resetPrepareImageTimeout() {
    this._prepareImageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareImageTimeoutInput() {
    return this._prepareImageTimeout;
  }

  // put_image_by_fds_timeout - computed: true, optional: true, required: false
  private _putImageByFdsTimeout?: number; 
  public get putImageByFdsTimeout() {
    return this.getNumberAttribute('put_image_by_fds_timeout');
  }
  public set putImageByFdsTimeout(value: number) {
    this._putImageByFdsTimeout = value;
  }
  public resetPutImageByFdsTimeout() {
    this._putImageByFdsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putImageByFdsTimeoutInput() {
    return this._putImageByFdsTimeout;
  }

  // put_image_timeout - computed: true, optional: true, required: false
  private _putImageTimeout?: number; 
  public get putImageTimeout() {
    return this.getNumberAttribute('put_image_timeout');
  }
  public set putImageTimeout(value: number) {
    this._putImageTimeout = value;
  }
  public resetPutImageTimeout() {
    this._putImageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putImageTimeoutInput() {
    return this._putImageTimeout;
  }

  // reboot_of_fsck_timeout - computed: true, optional: true, required: false
  private _rebootOfFsckTimeout?: number; 
  public get rebootOfFsckTimeout() {
    return this.getNumberAttribute('reboot_of_fsck_timeout');
  }
  public set rebootOfFsckTimeout(value: number) {
    this._rebootOfFsckTimeout = value;
  }
  public resetRebootOfFsckTimeout() {
    this._rebootOfFsckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootOfFsckTimeoutInput() {
    return this._rebootOfFsckTimeout;
  }

  // reboot_of_upgrade_timeout - computed: true, optional: true, required: false
  private _rebootOfUpgradeTimeout?: number; 
  public get rebootOfUpgradeTimeout() {
    return this.getNumberAttribute('reboot_of_upgrade_timeout');
  }
  public set rebootOfUpgradeTimeout(value: number) {
    this._rebootOfUpgradeTimeout = value;
  }
  public resetRebootOfUpgradeTimeout() {
    this._rebootOfUpgradeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootOfUpgradeTimeoutInput() {
    return this._rebootOfUpgradeTimeout;
  }

  // retrieve_timeout - computed: true, optional: true, required: false
  private _retrieveTimeout?: number; 
  public get retrieveTimeout() {
    return this.getNumberAttribute('retrieve_timeout');
  }
  public set retrieveTimeout(value: number) {
    this._retrieveTimeout = value;
  }
  public resetRetrieveTimeout() {
    this._retrieveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveTimeoutInput() {
    return this._retrieveTimeout;
  }

  // rpc_timeout - computed: true, optional: true, required: false
  private _rpcTimeout?: number; 
  public get rpcTimeout() {
    return this.getNumberAttribute('rpc_timeout');
  }
  public set rpcTimeout(value: number) {
    this._rpcTimeout = value;
  }
  public resetRpcTimeout() {
    this._rpcTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcTimeoutInput() {
    return this._rpcTimeout;
  }

  // total_timeout - computed: true, optional: true, required: false
  private _totalTimeout?: number; 
  public get totalTimeout() {
    return this.getNumberAttribute('total_timeout');
  }
  public set totalTimeout(value: number) {
    this._totalTimeout = value;
  }
  public resetTotalTimeout() {
    this._totalTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTimeoutInput() {
    return this._totalTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting fortimanager_fmupdate_fwmsetting}
*/
export class FmupdateFwmsetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_fmupdate_fwmsetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateFwmsetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateFwmsetting to import
  * @param importFromId The id of the existing FmupdateFwmsetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateFwmsetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_fmupdate_fwmsetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/fmupdate_fwmsetting fortimanager_fmupdate_fwmsetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateFwmsettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateFwmsettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_fmupdate_fwmsetting',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScanFgtDisk = config.autoScanFgtDisk;
    this._checkFgtDisk = config.checkFgtDisk;
    this._fdsFailoverFmg = config.fdsFailoverFmg;
    this._fdsImageTimeout = config.fdsImageTimeout;
    this._healthCheck = config.healthCheck;
    this._id = config.id;
    this._immxSource = config.immxSource;
    this._log = config.log;
    this._maxDeviceHistory = config.maxDeviceHistory;
    this._maxProfileHistory = config.maxProfileHistory;
    this._multipleStepsInterval = config.multipleStepsInterval;
    this._retrieve = config.retrieve;
    this._retryInterval = config.retryInterval;
    this._retryMax = config.retryMax;
    this._revisionDiff = config.revisionDiff;
    this._sendImageRetry = config.sendImageRetry;
    this._upgradeTimeout.internalValue = config.upgradeTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scan_fgt_disk - computed: true, optional: true, required: false
  private _autoScanFgtDisk?: string; 
  public get autoScanFgtDisk() {
    return this.getStringAttribute('auto_scan_fgt_disk');
  }
  public set autoScanFgtDisk(value: string) {
    this._autoScanFgtDisk = value;
  }
  public resetAutoScanFgtDisk() {
    this._autoScanFgtDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScanFgtDiskInput() {
    return this._autoScanFgtDisk;
  }

  // check_fgt_disk - computed: true, optional: true, required: false
  private _checkFgtDisk?: string; 
  public get checkFgtDisk() {
    return this.getStringAttribute('check_fgt_disk');
  }
  public set checkFgtDisk(value: string) {
    this._checkFgtDisk = value;
  }
  public resetCheckFgtDisk() {
    this._checkFgtDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFgtDiskInput() {
    return this._checkFgtDisk;
  }

  // fds_failover_fmg - computed: true, optional: true, required: false
  private _fdsFailoverFmg?: string; 
  public get fdsFailoverFmg() {
    return this.getStringAttribute('fds_failover_fmg');
  }
  public set fdsFailoverFmg(value: string) {
    this._fdsFailoverFmg = value;
  }
  public resetFdsFailoverFmg() {
    this._fdsFailoverFmg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsFailoverFmgInput() {
    return this._fdsFailoverFmg;
  }

  // fds_image_timeout - computed: true, optional: true, required: false
  private _fdsImageTimeout?: number; 
  public get fdsImageTimeout() {
    return this.getNumberAttribute('fds_image_timeout');
  }
  public set fdsImageTimeout(value: number) {
    this._fdsImageTimeout = value;
  }
  public resetFdsImageTimeout() {
    this._fdsImageTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdsImageTimeoutInput() {
    return this._fdsImageTimeout;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
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

  // immx_source - computed: true, optional: true, required: false
  private _immxSource?: string; 
  public get immxSource() {
    return this.getStringAttribute('immx_source');
  }
  public set immxSource(value: string) {
    this._immxSource = value;
  }
  public resetImmxSource() {
    this._immxSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immxSourceInput() {
    return this._immxSource;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // max_device_history - computed: true, optional: true, required: false
  private _maxDeviceHistory?: number; 
  public get maxDeviceHistory() {
    return this.getNumberAttribute('max_device_history');
  }
  public set maxDeviceHistory(value: number) {
    this._maxDeviceHistory = value;
  }
  public resetMaxDeviceHistory() {
    this._maxDeviceHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeviceHistoryInput() {
    return this._maxDeviceHistory;
  }

  // max_profile_history - computed: true, optional: true, required: false
  private _maxProfileHistory?: number; 
  public get maxProfileHistory() {
    return this.getNumberAttribute('max_profile_history');
  }
  public set maxProfileHistory(value: number) {
    this._maxProfileHistory = value;
  }
  public resetMaxProfileHistory() {
    this._maxProfileHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProfileHistoryInput() {
    return this._maxProfileHistory;
  }

  // multiple_steps_interval - computed: true, optional: true, required: false
  private _multipleStepsInterval?: number; 
  public get multipleStepsInterval() {
    return this.getNumberAttribute('multiple_steps_interval');
  }
  public set multipleStepsInterval(value: number) {
    this._multipleStepsInterval = value;
  }
  public resetMultipleStepsInterval() {
    this._multipleStepsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleStepsIntervalInput() {
    return this._multipleStepsInterval;
  }

  // retrieve - computed: true, optional: true, required: false
  private _retrieve?: string; 
  public get retrieve() {
    return this.getStringAttribute('retrieve');
  }
  public set retrieve(value: string) {
    this._retrieve = value;
  }
  public resetRetrieve() {
    this._retrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveInput() {
    return this._retrieve;
  }

  // retry_interval - computed: true, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // retry_max - computed: true, optional: true, required: false
  private _retryMax?: number; 
  public get retryMax() {
    return this.getNumberAttribute('retry_max');
  }
  public set retryMax(value: number) {
    this._retryMax = value;
  }
  public resetRetryMax() {
    this._retryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxInput() {
    return this._retryMax;
  }

  // revision_diff - computed: true, optional: true, required: false
  private _revisionDiff?: string; 
  public get revisionDiff() {
    return this.getStringAttribute('revision_diff');
  }
  public set revisionDiff(value: string) {
    this._revisionDiff = value;
  }
  public resetRevisionDiff() {
    this._revisionDiff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionDiffInput() {
    return this._revisionDiff;
  }

  // send_image_retry - computed: false, optional: true, required: false
  private _sendImageRetry?: number; 
  public get sendImageRetry() {
    return this.getNumberAttribute('send_image_retry');
  }
  public set sendImageRetry(value: number) {
    this._sendImageRetry = value;
  }
  public resetSendImageRetry() {
    this._sendImageRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendImageRetryInput() {
    return this._sendImageRetry;
  }

  // upgrade_timeout - computed: false, optional: true, required: false
  private _upgradeTimeout = new FmupdateFwmsettingUpgradeTimeoutOutputReference(this, "upgrade_timeout");
  public get upgradeTimeout() {
    return this._upgradeTimeout;
  }
  public putUpgradeTimeout(value: FmupdateFwmsettingUpgradeTimeout) {
    this._upgradeTimeout.internalValue = value;
  }
  public resetUpgradeTimeout() {
    this._upgradeTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeoutInput() {
    return this._upgradeTimeout.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scan_fgt_disk: cdktf.stringToTerraform(this._autoScanFgtDisk),
      check_fgt_disk: cdktf.stringToTerraform(this._checkFgtDisk),
      fds_failover_fmg: cdktf.stringToTerraform(this._fdsFailoverFmg),
      fds_image_timeout: cdktf.numberToTerraform(this._fdsImageTimeout),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      id: cdktf.stringToTerraform(this._id),
      immx_source: cdktf.stringToTerraform(this._immxSource),
      log: cdktf.stringToTerraform(this._log),
      max_device_history: cdktf.numberToTerraform(this._maxDeviceHistory),
      max_profile_history: cdktf.numberToTerraform(this._maxProfileHistory),
      multiple_steps_interval: cdktf.numberToTerraform(this._multipleStepsInterval),
      retrieve: cdktf.stringToTerraform(this._retrieve),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      retry_max: cdktf.numberToTerraform(this._retryMax),
      revision_diff: cdktf.stringToTerraform(this._revisionDiff),
      send_image_retry: cdktf.numberToTerraform(this._sendImageRetry),
      upgrade_timeout: fmupdateFwmsettingUpgradeTimeoutToTerraform(this._upgradeTimeout.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scan_fgt_disk: {
        value: cdktf.stringToHclTerraform(this._autoScanFgtDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_fgt_disk: {
        value: cdktf.stringToHclTerraform(this._checkFgtDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fds_failover_fmg: {
        value: cdktf.stringToHclTerraform(this._fdsFailoverFmg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fds_image_timeout: {
        value: cdktf.numberToHclTerraform(this._fdsImageTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
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
      immx_source: {
        value: cdktf.stringToHclTerraform(this._immxSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_device_history: {
        value: cdktf.numberToHclTerraform(this._maxDeviceHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_profile_history: {
        value: cdktf.numberToHclTerraform(this._maxProfileHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiple_steps_interval: {
        value: cdktf.numberToHclTerraform(this._multipleStepsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrieve: {
        value: cdktf.stringToHclTerraform(this._retrieve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_max: {
        value: cdktf.numberToHclTerraform(this._retryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      revision_diff: {
        value: cdktf.stringToHclTerraform(this._revisionDiff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_image_retry: {
        value: cdktf.numberToHclTerraform(this._sendImageRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_timeout: {
        value: fmupdateFwmsettingUpgradeTimeoutToHclTerraform(this._upgradeTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FmupdateFwmsettingUpgradeTimeoutList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
