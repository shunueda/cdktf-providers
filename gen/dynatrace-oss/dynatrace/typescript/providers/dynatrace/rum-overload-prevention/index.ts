// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rum_overload_prevention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumOverloadPreventionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rum_overload_prevention#id RumOverloadPrevention#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Once this limit is reached, Dynatrace [throttles the number of captured user sessions](https://dt-url.net/fm3v0p7g).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rum_overload_prevention#overload_prevention_limit RumOverloadPrevention#overload_prevention_limit}
  */
  readonly overloadPreventionLimit: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rum_overload_prevention dynatrace_rum_overload_prevention}
*/
export class RumOverloadPrevention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_rum_overload_prevention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumOverloadPrevention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumOverloadPrevention to import
  * @param importFromId The id of the existing RumOverloadPrevention that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rum_overload_prevention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumOverloadPrevention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_rum_overload_prevention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/rum_overload_prevention dynatrace_rum_overload_prevention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumOverloadPreventionConfig
  */
  public constructor(scope: Construct, id: string, config: RumOverloadPreventionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_rum_overload_prevention',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._overloadPreventionLimit = config.overloadPreventionLimit;
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

  // overload_prevention_limit - computed: false, optional: false, required: true
  private _overloadPreventionLimit?: number; 
  public get overloadPreventionLimit() {
    return this.getNumberAttribute('overload_prevention_limit');
  }
  public set overloadPreventionLimit(value: number) {
    this._overloadPreventionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadPreventionLimitInput() {
    return this._overloadPreventionLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      overload_prevention_limit: cdktf.numberToTerraform(this._overloadPreventionLimit),
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
      overload_prevention_limit: {
        value: cdktf.numberToHclTerraform(this._overloadPreventionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
