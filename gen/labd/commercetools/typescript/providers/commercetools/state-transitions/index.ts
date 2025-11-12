// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/state_transitions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StateTransitionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the state to transition from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/state_transitions#from StateTransitions#from}
  */
  readonly from: string;
  /**
  * Transitions are a way to describe possible transformations of the current state to other states of the same type (for example: Initial -> Shipped). When performing a transitionState update action and transitions is set, the currently referenced state must have a transition to the new state.
  * If transitions is an empty list, it means the current state is a final state and no further transitions are allowed.
  * If transitions is not set, the validation is turned off. When performing a transitionState update action, any other state of the same type can be transitioned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/state_transitions#to StateTransitions#to}
  */
  readonly to: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/state_transitions commercetools_state_transitions}
*/
export class StateTransitions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_state_transitions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StateTransitions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StateTransitions to import
  * @param importFromId The id of the existing StateTransitions that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/state_transitions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StateTransitions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_state_transitions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/state_transitions commercetools_state_transitions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StateTransitionsConfig
  */
  public constructor(scope: Construct, id: string, config: StateTransitionsConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_state_transitions',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._from = config.from;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return cdktf.Fn.tolist(this.getListAttribute('to'));
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      from: cdktf.stringToTerraform(this._from),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
