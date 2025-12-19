// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAsicMmuFailSafeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#id SystemAsicMmuFailSafeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Inject MMU SER/Parity errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#inject_error SystemAsicMmuFailSafeA#inject_error}
  */
  readonly injectError?: number;
  /**
  * Enable Fail-safe software error monitoring and act on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#monitor_disable SystemAsicMmuFailSafeA#monitor_disable}
  */
  readonly monitorDisable?: number;
  /**
  * ASIC Fail-safe monitoring intervals in Seconds (Units of 1 Seconds (default 60))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#monitor_interval SystemAsicMmuFailSafeA#monitor_interval}
  */
  readonly monitorInterval?: number;
  /**
  * Disable system reboot if system encounters mmu error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#reboot_disable SystemAsicMmuFailSafeA#reboot_disable}
  */
  readonly rebootDisable?: number;
  /**
  * ASIC Fail-safe recovery threshold in Errors (Units of 1 Errors (default 2))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#recovery_threshold SystemAsicMmuFailSafeA#recovery_threshold}
  */
  readonly recoveryThreshold?: number;
  /**
  * 'all-zeros': Inject all bits 0s in a byte; 'all-ones': Inject all bits 1s in a byte; 'lcb': Logical checker board; 'inverse-lcb': Inverse Logical checker board;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#test_pattern_type SystemAsicMmuFailSafeA#test_pattern_type}
  */
  readonly testPatternType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#uuid SystemAsicMmuFailSafeA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe thunder_system_asic_mmu_fail_safe}
*/
export class SystemAsicMmuFailSafeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_asic_mmu_fail_safe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAsicMmuFailSafeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAsicMmuFailSafeA to import
  * @param importFromId The id of the existing SystemAsicMmuFailSafeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAsicMmuFailSafeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_asic_mmu_fail_safe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_asic_mmu_fail_safe thunder_system_asic_mmu_fail_safe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAsicMmuFailSafeAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAsicMmuFailSafeAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_asic_mmu_fail_safe',
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
    this._injectError = config.injectError;
    this._monitorDisable = config.monitorDisable;
    this._monitorInterval = config.monitorInterval;
    this._rebootDisable = config.rebootDisable;
    this._recoveryThreshold = config.recoveryThreshold;
    this._testPatternType = config.testPatternType;
    this._uuid = config.uuid;
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

  // inject_error - computed: false, optional: true, required: false
  private _injectError?: number; 
  public get injectError() {
    return this.getNumberAttribute('inject_error');
  }
  public set injectError(value: number) {
    this._injectError = value;
  }
  public resetInjectError() {
    this._injectError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectErrorInput() {
    return this._injectError;
  }

  // monitor_disable - computed: false, optional: true, required: false
  private _monitorDisable?: number; 
  public get monitorDisable() {
    return this.getNumberAttribute('monitor_disable');
  }
  public set monitorDisable(value: number) {
    this._monitorDisable = value;
  }
  public resetMonitorDisable() {
    this._monitorDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisableInput() {
    return this._monitorDisable;
  }

  // monitor_interval - computed: false, optional: true, required: false
  private _monitorInterval?: number; 
  public get monitorInterval() {
    return this.getNumberAttribute('monitor_interval');
  }
  public set monitorInterval(value: number) {
    this._monitorInterval = value;
  }
  public resetMonitorInterval() {
    this._monitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIntervalInput() {
    return this._monitorInterval;
  }

  // reboot_disable - computed: false, optional: true, required: false
  private _rebootDisable?: number; 
  public get rebootDisable() {
    return this.getNumberAttribute('reboot_disable');
  }
  public set rebootDisable(value: number) {
    this._rebootDisable = value;
  }
  public resetRebootDisable() {
    this._rebootDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDisableInput() {
    return this._rebootDisable;
  }

  // recovery_threshold - computed: false, optional: true, required: false
  private _recoveryThreshold?: number; 
  public get recoveryThreshold() {
    return this.getNumberAttribute('recovery_threshold');
  }
  public set recoveryThreshold(value: number) {
    this._recoveryThreshold = value;
  }
  public resetRecoveryThreshold() {
    this._recoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryThresholdInput() {
    return this._recoveryThreshold;
  }

  // test_pattern_type - computed: false, optional: true, required: false
  private _testPatternType?: string; 
  public get testPatternType() {
    return this.getStringAttribute('test_pattern_type');
  }
  public set testPatternType(value: string) {
    this._testPatternType = value;
  }
  public resetTestPatternType() {
    this._testPatternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testPatternTypeInput() {
    return this._testPatternType;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      inject_error: cdktf.numberToTerraform(this._injectError),
      monitor_disable: cdktf.numberToTerraform(this._monitorDisable),
      monitor_interval: cdktf.numberToTerraform(this._monitorInterval),
      reboot_disable: cdktf.numberToTerraform(this._rebootDisable),
      recovery_threshold: cdktf.numberToTerraform(this._recoveryThreshold),
      test_pattern_type: cdktf.stringToTerraform(this._testPatternType),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      inject_error: {
        value: cdktf.numberToHclTerraform(this._injectError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_disable: {
        value: cdktf.numberToHclTerraform(this._monitorDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_interval: {
        value: cdktf.numberToHclTerraform(this._monitorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reboot_disable: {
        value: cdktf.numberToHclTerraform(this._rebootDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recovery_threshold: {
        value: cdktf.numberToHclTerraform(this._recoveryThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      test_pattern_type: {
        value: cdktf.stringToHclTerraform(this._testPatternType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
