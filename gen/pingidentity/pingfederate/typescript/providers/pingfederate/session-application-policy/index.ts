// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_application_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionApplicationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The idle timeout period, in minutes. If set to `-1`, the idle timeout will be set to the maximum timeout. The default is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_application_policy#idle_timeout_mins SessionApplicationPolicy#idle_timeout_mins}
  */
  readonly idleTimeoutMins?: number;
  /**
  * The maximum timeout period, in minutes. If set to `-1`, sessions do not expire. The default is `480`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_application_policy#max_timeout_mins SessionApplicationPolicy#max_timeout_mins}
  */
  readonly maxTimeoutMins?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_application_policy pingfederate_session_application_policy}
*/
export class SessionApplicationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_session_application_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionApplicationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionApplicationPolicy to import
  * @param importFromId The id of the existing SessionApplicationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_application_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionApplicationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_session_application_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_application_policy pingfederate_session_application_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionApplicationPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SessionApplicationPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_session_application_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._idleTimeoutMins = config.idleTimeoutMins;
    this._maxTimeoutMins = config.maxTimeoutMins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // idle_timeout_mins - computed: true, optional: true, required: false
  private _idleTimeoutMins?: number; 
  public get idleTimeoutMins() {
    return this.getNumberAttribute('idle_timeout_mins');
  }
  public set idleTimeoutMins(value: number) {
    this._idleTimeoutMins = value;
  }
  public resetIdleTimeoutMins() {
    this._idleTimeoutMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMinsInput() {
    return this._idleTimeoutMins;
  }

  // max_timeout_mins - computed: true, optional: true, required: false
  private _maxTimeoutMins?: number; 
  public get maxTimeoutMins() {
    return this.getNumberAttribute('max_timeout_mins');
  }
  public set maxTimeoutMins(value: number) {
    this._maxTimeoutMins = value;
  }
  public resetMaxTimeoutMins() {
    this._maxTimeoutMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutMinsInput() {
    return this._maxTimeoutMins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      idle_timeout_mins: cdktf.numberToTerraform(this._idleTimeoutMins),
      max_timeout_mins: cdktf.numberToTerraform(this._maxTimeoutMins),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      idle_timeout_mins: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_timeout_mins: {
        value: cdktf.numberToHclTerraform(this._maxTimeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
