// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4AccessListOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options#delete_mode Ipv4AccessListOptions#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options#device Ipv4AccessListOptions#device}
  */
  readonly device?: string;
  /**
  * Do not generate the ICMP message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options#icmp_off Ipv4AccessListOptions#icmp_off}
  */
  readonly icmpOff?: boolean | cdktf.IResolvable;
  /**
  * Set access-list logging rate (num. logs per second)
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options#log_update_rate Ipv4AccessListOptions#log_update_rate}
  */
  readonly logUpdateRate?: number;
  /**
  * Set access-list logging threshold
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options#log_update_threshold Ipv4AccessListOptions#log_update_threshold}
  */
  readonly logUpdateThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options iosxr_ipv4_access_list_options}
*/
export class Ipv4AccessListOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ipv4_access_list_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4AccessListOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4AccessListOptions to import
  * @param importFromId The id of the existing Ipv4AccessListOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4AccessListOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ipv4_access_list_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv4_access_list_options iosxr_ipv4_access_list_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4AccessListOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv4AccessListOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ipv4_access_list_options',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._icmpOff = config.icmpOff;
    this._logUpdateRate = config.logUpdateRate;
    this._logUpdateThreshold = config.logUpdateThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

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

  // icmp_off - computed: false, optional: true, required: false
  private _icmpOff?: boolean | cdktf.IResolvable; 
  public get icmpOff() {
    return this.getBooleanAttribute('icmp_off');
  }
  public set icmpOff(value: boolean | cdktf.IResolvable) {
    this._icmpOff = value;
  }
  public resetIcmpOff() {
    this._icmpOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOffInput() {
    return this._icmpOff;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_update_rate - computed: false, optional: true, required: false
  private _logUpdateRate?: number; 
  public get logUpdateRate() {
    return this.getNumberAttribute('log_update_rate');
  }
  public set logUpdateRate(value: number) {
    this._logUpdateRate = value;
  }
  public resetLogUpdateRate() {
    this._logUpdateRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUpdateRateInput() {
    return this._logUpdateRate;
  }

  // log_update_threshold - computed: false, optional: true, required: false
  private _logUpdateThreshold?: number; 
  public get logUpdateThreshold() {
    return this.getNumberAttribute('log_update_threshold');
  }
  public set logUpdateThreshold(value: number) {
    this._logUpdateThreshold = value;
  }
  public resetLogUpdateThreshold() {
    this._logUpdateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUpdateThresholdInput() {
    return this._logUpdateThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      icmp_off: cdktf.booleanToTerraform(this._icmpOff),
      log_update_rate: cdktf.numberToTerraform(this._logUpdateRate),
      log_update_threshold: cdktf.numberToTerraform(this._logUpdateThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_off: {
        value: cdktf.booleanToHclTerraform(this._icmpOff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_update_rate: {
        value: cdktf.numberToHclTerraform(this._logUpdateRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_update_threshold: {
        value: cdktf.numberToHclTerraform(this._logUpdateThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
