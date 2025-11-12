// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WanoptSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#auto_detect_algorithm WanoptSettings#auto_detect_algorithm}
  */
  readonly autoDetectAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#device_name WanoptSettings#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#device_vdom WanoptSettings#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#host_id WanoptSettings#host_id}
  */
  readonly hostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#id WanoptSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#tunnel_optimization WanoptSettings#tunnel_optimization}
  */
  readonly tunnelOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#tunnel_ssl_algorithm WanoptSettings#tunnel_ssl_algorithm}
  */
  readonly tunnelSslAlgorithm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings fmgdevice_wanopt_settings}
*/
export class WanoptSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wanopt_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WanoptSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WanoptSettings to import
  * @param importFromId The id of the existing WanoptSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WanoptSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wanopt_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wanopt_settings fmgdevice_wanopt_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WanoptSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WanoptSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wanopt_settings',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoDetectAlgorithm = config.autoDetectAlgorithm;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._hostId = config.hostId;
    this._id = config.id;
    this._tunnelOptimization = config.tunnelOptimization;
    this._tunnelSslAlgorithm = config.tunnelSslAlgorithm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_detect_algorithm - computed: true, optional: true, required: false
  private _autoDetectAlgorithm?: string; 
  public get autoDetectAlgorithm() {
    return this.getStringAttribute('auto_detect_algorithm');
  }
  public set autoDetectAlgorithm(value: string) {
    this._autoDetectAlgorithm = value;
  }
  public resetAutoDetectAlgorithm() {
    this._autoDetectAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectAlgorithmInput() {
    return this._autoDetectAlgorithm;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // tunnel_optimization - computed: true, optional: true, required: false
  private _tunnelOptimization?: string; 
  public get tunnelOptimization() {
    return this.getStringAttribute('tunnel_optimization');
  }
  public set tunnelOptimization(value: string) {
    this._tunnelOptimization = value;
  }
  public resetTunnelOptimization() {
    this._tunnelOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelOptimizationInput() {
    return this._tunnelOptimization;
  }

  // tunnel_ssl_algorithm - computed: true, optional: true, required: false
  private _tunnelSslAlgorithm?: string; 
  public get tunnelSslAlgorithm() {
    return this.getStringAttribute('tunnel_ssl_algorithm');
  }
  public set tunnelSslAlgorithm(value: string) {
    this._tunnelSslAlgorithm = value;
  }
  public resetTunnelSslAlgorithm() {
    this._tunnelSslAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSslAlgorithmInput() {
    return this._tunnelSslAlgorithm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_detect_algorithm: cdktf.stringToTerraform(this._autoDetectAlgorithm),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      tunnel_optimization: cdktf.stringToTerraform(this._tunnelOptimization),
      tunnel_ssl_algorithm: cdktf.stringToTerraform(this._tunnelSslAlgorithm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_detect_algorithm: {
        value: cdktf.stringToHclTerraform(this._autoDetectAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      tunnel_optimization: {
        value: cdktf.stringToHclTerraform(this._tunnelOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_ssl_algorithm: {
        value: cdktf.stringToHclTerraform(this._tunnelSslAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
