// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform#device Platform#device}
  */
  readonly device?: string;
  /**
  * Disable IOSXE kernel core generation for keepalive fault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform#punt_keepalive_disable_kernel_core Platform#punt_keepalive_disable_kernel_core}
  */
  readonly puntKeepaliveDisableKernelCore?: boolean | cdktf.IResolvable;
  /**
  * Set punt-inject keepalive fatal count
  *   - Range: `15`-`60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform#punt_keepalive_settings_fatal_count Platform#punt_keepalive_settings_fatal_count}
  */
  readonly puntKeepaliveSettingsFatalCount?: number;
  /**
  * Set punt-inject keepalive transmit interval
  *   - Range: `2`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform#punt_keepalive_settings_transmit_interval Platform#punt_keepalive_settings_transmit_interval}
  */
  readonly puntKeepaliveSettingsTransmitInterval?: number;
  /**
  * Set punt-inject keepalive warning count
  *   - Range: `10`-`60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform#punt_keepalive_settings_warning_count Platform#punt_keepalive_settings_warning_count}
  */
  readonly puntKeepaliveSettingsWarningCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform iosxe_platform}
*/
export class Platform extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Platform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Platform to import
  * @param importFromId The id of the existing Platform that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Platform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/platform iosxe_platform} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PlatformConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_platform',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._puntKeepaliveDisableKernelCore = config.puntKeepaliveDisableKernelCore;
    this._puntKeepaliveSettingsFatalCount = config.puntKeepaliveSettingsFatalCount;
    this._puntKeepaliveSettingsTransmitInterval = config.puntKeepaliveSettingsTransmitInterval;
    this._puntKeepaliveSettingsWarningCount = config.puntKeepaliveSettingsWarningCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // punt_keepalive_disable_kernel_core - computed: false, optional: true, required: false
  private _puntKeepaliveDisableKernelCore?: boolean | cdktf.IResolvable; 
  public get puntKeepaliveDisableKernelCore() {
    return this.getBooleanAttribute('punt_keepalive_disable_kernel_core');
  }
  public set puntKeepaliveDisableKernelCore(value: boolean | cdktf.IResolvable) {
    this._puntKeepaliveDisableKernelCore = value;
  }
  public resetPuntKeepaliveDisableKernelCore() {
    this._puntKeepaliveDisableKernelCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puntKeepaliveDisableKernelCoreInput() {
    return this._puntKeepaliveDisableKernelCore;
  }

  // punt_keepalive_settings_fatal_count - computed: false, optional: true, required: false
  private _puntKeepaliveSettingsFatalCount?: number; 
  public get puntKeepaliveSettingsFatalCount() {
    return this.getNumberAttribute('punt_keepalive_settings_fatal_count');
  }
  public set puntKeepaliveSettingsFatalCount(value: number) {
    this._puntKeepaliveSettingsFatalCount = value;
  }
  public resetPuntKeepaliveSettingsFatalCount() {
    this._puntKeepaliveSettingsFatalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puntKeepaliveSettingsFatalCountInput() {
    return this._puntKeepaliveSettingsFatalCount;
  }

  // punt_keepalive_settings_transmit_interval - computed: false, optional: true, required: false
  private _puntKeepaliveSettingsTransmitInterval?: number; 
  public get puntKeepaliveSettingsTransmitInterval() {
    return this.getNumberAttribute('punt_keepalive_settings_transmit_interval');
  }
  public set puntKeepaliveSettingsTransmitInterval(value: number) {
    this._puntKeepaliveSettingsTransmitInterval = value;
  }
  public resetPuntKeepaliveSettingsTransmitInterval() {
    this._puntKeepaliveSettingsTransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puntKeepaliveSettingsTransmitIntervalInput() {
    return this._puntKeepaliveSettingsTransmitInterval;
  }

  // punt_keepalive_settings_warning_count - computed: false, optional: true, required: false
  private _puntKeepaliveSettingsWarningCount?: number; 
  public get puntKeepaliveSettingsWarningCount() {
    return this.getNumberAttribute('punt_keepalive_settings_warning_count');
  }
  public set puntKeepaliveSettingsWarningCount(value: number) {
    this._puntKeepaliveSettingsWarningCount = value;
  }
  public resetPuntKeepaliveSettingsWarningCount() {
    this._puntKeepaliveSettingsWarningCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puntKeepaliveSettingsWarningCountInput() {
    return this._puntKeepaliveSettingsWarningCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      punt_keepalive_disable_kernel_core: cdktf.booleanToTerraform(this._puntKeepaliveDisableKernelCore),
      punt_keepalive_settings_fatal_count: cdktf.numberToTerraform(this._puntKeepaliveSettingsFatalCount),
      punt_keepalive_settings_transmit_interval: cdktf.numberToTerraform(this._puntKeepaliveSettingsTransmitInterval),
      punt_keepalive_settings_warning_count: cdktf.numberToTerraform(this._puntKeepaliveSettingsWarningCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      punt_keepalive_disable_kernel_core: {
        value: cdktf.booleanToHclTerraform(this._puntKeepaliveDisableKernelCore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      punt_keepalive_settings_fatal_count: {
        value: cdktf.numberToHclTerraform(this._puntKeepaliveSettingsFatalCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      punt_keepalive_settings_transmit_interval: {
        value: cdktf.numberToHclTerraform(this._puntKeepaliveSettingsTransmitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      punt_keepalive_settings_warning_count: {
        value: cdktf.numberToHclTerraform(this._puntKeepaliveSettingsWarningCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
