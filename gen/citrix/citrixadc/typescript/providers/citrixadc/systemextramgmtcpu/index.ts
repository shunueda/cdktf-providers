// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemextramgmtcpuConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#enabled Systemextramgmtcpu#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#id Systemextramgmtcpu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#reachable_poll_delay Systemextramgmtcpu#reachable_poll_delay}
  */
  readonly reachablePollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#reachable_poll_interval Systemextramgmtcpu#reachable_poll_interval}
  */
  readonly reachablePollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#reachable_poll_timeout Systemextramgmtcpu#reachable_poll_timeout}
  */
  readonly reachablePollTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#reachable_timeout Systemextramgmtcpu#reachable_timeout}
  */
  readonly reachableTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#reboot Systemextramgmtcpu#reboot}
  */
  readonly reboot?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu citrixadc_systemextramgmtcpu}
*/
export class Systemextramgmtcpu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_systemextramgmtcpu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemextramgmtcpu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemextramgmtcpu to import
  * @param importFromId The id of the existing Systemextramgmtcpu that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemextramgmtcpu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_systemextramgmtcpu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/systemextramgmtcpu citrixadc_systemextramgmtcpu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemextramgmtcpuConfig
  */
  public constructor(scope: Construct, id: string, config: SystemextramgmtcpuConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_systemextramgmtcpu',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._reachablePollDelay = config.reachablePollDelay;
    this._reachablePollInterval = config.reachablePollInterval;
    this._reachablePollTimeout = config.reachablePollTimeout;
    this._reachableTimeout = config.reachableTimeout;
    this._reboot = config.reboot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // reachable_poll_delay - computed: false, optional: true, required: false
  private _reachablePollDelay?: string; 
  public get reachablePollDelay() {
    return this.getStringAttribute('reachable_poll_delay');
  }
  public set reachablePollDelay(value: string) {
    this._reachablePollDelay = value;
  }
  public resetReachablePollDelay() {
    this._reachablePollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachablePollDelayInput() {
    return this._reachablePollDelay;
  }

  // reachable_poll_interval - computed: false, optional: true, required: false
  private _reachablePollInterval?: string; 
  public get reachablePollInterval() {
    return this.getStringAttribute('reachable_poll_interval');
  }
  public set reachablePollInterval(value: string) {
    this._reachablePollInterval = value;
  }
  public resetReachablePollInterval() {
    this._reachablePollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachablePollIntervalInput() {
    return this._reachablePollInterval;
  }

  // reachable_poll_timeout - computed: false, optional: true, required: false
  private _reachablePollTimeout?: string; 
  public get reachablePollTimeout() {
    return this.getStringAttribute('reachable_poll_timeout');
  }
  public set reachablePollTimeout(value: string) {
    this._reachablePollTimeout = value;
  }
  public resetReachablePollTimeout() {
    this._reachablePollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachablePollTimeoutInput() {
    return this._reachablePollTimeout;
  }

  // reachable_timeout - computed: false, optional: true, required: false
  private _reachableTimeout?: string; 
  public get reachableTimeout() {
    return this.getStringAttribute('reachable_timeout');
  }
  public set reachableTimeout(value: string) {
    this._reachableTimeout = value;
  }
  public resetReachableTimeout() {
    this._reachableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeoutInput() {
    return this._reachableTimeout;
  }

  // reboot - computed: false, optional: true, required: false
  private _reboot?: boolean | cdktf.IResolvable; 
  public get reboot() {
    return this.getBooleanAttribute('reboot');
  }
  public set reboot(value: boolean | cdktf.IResolvable) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      reachable_poll_delay: cdktf.stringToTerraform(this._reachablePollDelay),
      reachable_poll_interval: cdktf.stringToTerraform(this._reachablePollInterval),
      reachable_poll_timeout: cdktf.stringToTerraform(this._reachablePollTimeout),
      reachable_timeout: cdktf.stringToTerraform(this._reachableTimeout),
      reboot: cdktf.booleanToTerraform(this._reboot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_poll_delay: {
        value: cdktf.stringToHclTerraform(this._reachablePollDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_poll_interval: {
        value: cdktf.stringToHclTerraform(this._reachablePollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_poll_timeout: {
        value: cdktf.stringToHclTerraform(this._reachablePollTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_timeout: {
        value: cdktf.stringToHclTerraform(this._reachableTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot: {
        value: cdktf.booleanToHclTerraform(this._reboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
