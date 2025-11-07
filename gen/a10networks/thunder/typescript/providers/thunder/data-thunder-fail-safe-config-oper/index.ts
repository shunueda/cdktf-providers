// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFailSafeConfigOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#id DataThunderFailSafeConfigOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#oper DataThunderFailSafeConfigOper#oper}
  */
  readonly oper?: DataThunderFailSafeConfigOperOper;
}
export interface DataThunderFailSafeConfigOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#dataplane_recovery_timeout DataThunderFailSafeConfigOper#dataplane_recovery_timeout}
  */
  readonly dataplaneRecoveryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#fpga_mon_enable DataThunderFailSafeConfigOper#fpga_mon_enable}
  */
  readonly fpgaMonEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#fpga_mon_forced_reboot DataThunderFailSafeConfigOper#fpga_mon_forced_reboot}
  */
  readonly fpgaMonForcedReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#fpga_mon_interval DataThunderFailSafeConfigOper#fpga_mon_interval}
  */
  readonly fpgaMonInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#fpga_mon_threshold DataThunderFailSafeConfigOper#fpga_mon_threshold}
  */
  readonly fpgaMonThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#hw_error_mon DataThunderFailSafeConfigOper#hw_error_mon}
  */
  readonly hwErrorMon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#hw_recovery_timeout DataThunderFailSafeConfigOper#hw_recovery_timeout}
  */
  readonly hwRecoveryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#mem_mon DataThunderFailSafeConfigOper#mem_mon}
  */
  readonly memMon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#sw_error_mon DataThunderFailSafeConfigOper#sw_error_mon}
  */
  readonly swErrorMon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#sw_recovery_timeout DataThunderFailSafeConfigOper#sw_recovery_timeout}
  */
  readonly swRecoveryTimeout?: string;
}

export function dataThunderFailSafeConfigOperOperToTerraform(struct?: DataThunderFailSafeConfigOperOperOutputReference | DataThunderFailSafeConfigOperOper): any {
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


export function dataThunderFailSafeConfigOperOperToHclTerraform(struct?: DataThunderFailSafeConfigOperOperOutputReference | DataThunderFailSafeConfigOperOper): any {
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

export class DataThunderFailSafeConfigOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFailSafeConfigOperOper | undefined {
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

  public set internalValue(value: DataThunderFailSafeConfigOperOper | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper thunder_fail_safe_config_oper}
*/
export class DataThunderFailSafeConfigOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fail_safe_config_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFailSafeConfigOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFailSafeConfigOper to import
  * @param importFromId The id of the existing DataThunderFailSafeConfigOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFailSafeConfigOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fail_safe_config_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fail_safe_config_oper thunder_fail_safe_config_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFailSafeConfigOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFailSafeConfigOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fail_safe_config_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderFailSafeConfigOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFailSafeConfigOperOper) {
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
      oper: dataThunderFailSafeConfigOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderFailSafeConfigOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFailSafeConfigOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
