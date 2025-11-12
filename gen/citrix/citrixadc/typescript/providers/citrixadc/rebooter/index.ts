// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RebooterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#id Rebooter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#reachable_poll_delay Rebooter#reachable_poll_delay}
  */
  readonly reachablePollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#reachable_poll_interval Rebooter#reachable_poll_interval}
  */
  readonly reachablePollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#reachable_poll_timeout Rebooter#reachable_poll_timeout}
  */
  readonly reachablePollTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#reachable_timeout Rebooter#reachable_timeout}
  */
  readonly reachableTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#timestamp Rebooter#timestamp}
  */
  readonly timestamp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#wait_until_reachable Rebooter#wait_until_reachable}
  */
  readonly waitUntilReachable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#warm Rebooter#warm}
  */
  readonly warm: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter citrixadc_rebooter}
*/
export class Rebooter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rebooter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rebooter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rebooter to import
  * @param importFromId The id of the existing Rebooter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rebooter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rebooter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rebooter citrixadc_rebooter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RebooterConfig
  */
  public constructor(scope: Construct, id: string, config: RebooterConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rebooter',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._reachablePollDelay = config.reachablePollDelay;
    this._reachablePollInterval = config.reachablePollInterval;
    this._reachablePollTimeout = config.reachablePollTimeout;
    this._reachableTimeout = config.reachableTimeout;
    this._timestamp = config.timestamp;
    this._waitUntilReachable = config.waitUntilReachable;
    this._warm = config.warm;
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

  // timestamp - computed: false, optional: false, required: true
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // wait_until_reachable - computed: false, optional: false, required: true
  private _waitUntilReachable?: boolean | cdktf.IResolvable; 
  public get waitUntilReachable() {
    return this.getBooleanAttribute('wait_until_reachable');
  }
  public set waitUntilReachable(value: boolean | cdktf.IResolvable) {
    this._waitUntilReachable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReachableInput() {
    return this._waitUntilReachable;
  }

  // warm - computed: false, optional: false, required: true
  private _warm?: boolean | cdktf.IResolvable; 
  public get warm() {
    return this.getBooleanAttribute('warm');
  }
  public set warm(value: boolean | cdktf.IResolvable) {
    this._warm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warmInput() {
    return this._warm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      reachable_poll_delay: cdktf.stringToTerraform(this._reachablePollDelay),
      reachable_poll_interval: cdktf.stringToTerraform(this._reachablePollInterval),
      reachable_poll_timeout: cdktf.stringToTerraform(this._reachablePollTimeout),
      reachable_timeout: cdktf.stringToTerraform(this._reachableTimeout),
      timestamp: cdktf.stringToTerraform(this._timestamp),
      wait_until_reachable: cdktf.booleanToTerraform(this._waitUntilReachable),
      warm: cdktf.booleanToTerraform(this._warm),
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
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_reachable: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReachable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      warm: {
        value: cdktf.booleanToHclTerraform(this._warm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
