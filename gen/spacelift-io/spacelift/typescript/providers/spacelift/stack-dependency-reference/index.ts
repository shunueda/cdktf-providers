// https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackDependencyReferenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference#id StackDependencyReference#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the input of the stack dependency reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference#input_name StackDependencyReference#input_name}
  */
  readonly inputName: string;
  /**
  * Name of the output of stack to depend on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference#output_name StackDependencyReference#output_name}
  */
  readonly outputName: string;
  /**
  * Immutable ID of stack dependency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference#stack_dependency_id StackDependencyReference#stack_dependency_id}
  */
  readonly stackDependencyId: string;
  /**
  * Whether the dependents should be triggered even if the value of the reference did not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference#trigger_always StackDependencyReference#trigger_always}
  */
  readonly triggerAlways?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference spacelift_stack_dependency_reference}
*/
export class StackDependencyReference extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_stack_dependency_reference";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackDependencyReference resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackDependencyReference to import
  * @param importFromId The id of the existing StackDependencyReference that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackDependencyReference to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_stack_dependency_reference", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.39.0/docs/resources/stack_dependency_reference spacelift_stack_dependency_reference} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackDependencyReferenceConfig
  */
  public constructor(scope: Construct, id: string, config: StackDependencyReferenceConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_stack_dependency_reference',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.39.0',
        providerVersionConstraint: '1.39.0'
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
    this._inputName = config.inputName;
    this._outputName = config.outputName;
    this._stackDependencyId = config.stackDependencyId;
    this._triggerAlways = config.triggerAlways;
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

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName;
  }

  // output_name - computed: false, optional: false, required: true
  private _outputName?: string; 
  public get outputName() {
    return this.getStringAttribute('output_name');
  }
  public set outputName(value: string) {
    this._outputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNameInput() {
    return this._outputName;
  }

  // stack_dependency_id - computed: false, optional: false, required: true
  private _stackDependencyId?: string; 
  public get stackDependencyId() {
    return this.getStringAttribute('stack_dependency_id');
  }
  public set stackDependencyId(value: string) {
    this._stackDependencyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackDependencyIdInput() {
    return this._stackDependencyId;
  }

  // trigger_always - computed: false, optional: true, required: false
  private _triggerAlways?: boolean | cdktf.IResolvable; 
  public get triggerAlways() {
    return this.getBooleanAttribute('trigger_always');
  }
  public set triggerAlways(value: boolean | cdktf.IResolvable) {
    this._triggerAlways = value;
  }
  public resetTriggerAlways() {
    this._triggerAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerAlwaysInput() {
    return this._triggerAlways;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      input_name: cdktf.stringToTerraform(this._inputName),
      output_name: cdktf.stringToTerraform(this._outputName),
      stack_dependency_id: cdktf.stringToTerraform(this._stackDependencyId),
      trigger_always: cdktf.booleanToTerraform(this._triggerAlways),
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
      input_name: {
        value: cdktf.stringToHclTerraform(this._inputName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_name: {
        value: cdktf.stringToHclTerraform(this._outputName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_dependency_id: {
        value: cdktf.stringToHclTerraform(this._stackDependencyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_always: {
        value: cdktf.booleanToHclTerraform(this._triggerAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
