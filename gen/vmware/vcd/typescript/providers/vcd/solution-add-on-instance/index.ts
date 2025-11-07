// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolutionAddOnInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines if EULA is accepted. `false` will return an error and print EULA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#accept_eula SolutionAddOnInstance#accept_eula}
  */
  readonly acceptEula: boolean | cdktf.IResolvable;
  /**
  * Parent Solution Add-On ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#add_on_id SolutionAddOnInstance#add_on_id}
  */
  readonly addOnId: string;
  /**
  * Key value map for deletion of Solution Add-On Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#delete_input SolutionAddOnInstance#delete_input}
  */
  readonly deleteInput?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#id SolutionAddOnInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key value map of Solution Add-On Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#input SolutionAddOnInstance#input}
  */
  readonly input?: { [key: string]: string };
  /**
  * Solution Add-On Instance Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#name SolutionAddOnInstance#name}
  */
  readonly name: string;
  /**
  * Defines if all or only required inputs should be validated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#validate_only_required_inputs SolutionAddOnInstance#validate_only_required_inputs}
  */
  readonly validateOnlyRequiredInputs?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance vcd_solution_add_on_instance}
*/
export class SolutionAddOnInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_solution_add_on_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolutionAddOnInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolutionAddOnInstance to import
  * @param importFromId The id of the existing SolutionAddOnInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolutionAddOnInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_solution_add_on_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_add_on_instance vcd_solution_add_on_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolutionAddOnInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SolutionAddOnInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_solution_add_on_instance',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptEula = config.acceptEula;
    this._addOnId = config.addOnId;
    this._deleteInput = config.deleteInput;
    this._id = config.id;
    this._input = config.input;
    this._name = config.name;
    this._validateOnlyRequiredInputs = config.validateOnlyRequiredInputs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktf.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktf.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }

  // add_on_id - computed: false, optional: false, required: true
  private _addOnId?: string; 
  public get addOnId() {
    return this.getStringAttribute('add_on_id');
  }
  public set addOnId(value: string) {
    this._addOnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnIdInput() {
    return this._addOnId;
  }

  // delete_input - computed: false, optional: true, required: false
  private _deleteInput?: { [key: string]: string }; 
  public get deleteInput() {
    return this.getStringMapAttribute('delete_input');
  }
  public set deleteInput(value: { [key: string]: string }) {
    this._deleteInput = value;
  }
  public resetDeleteInput() {
    this._deleteInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInputInput() {
    return this._deleteInput;
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

  // input - computed: false, optional: true, required: false
  private _input?: { [key: string]: string }; 
  public get input() {
    return this.getStringMapAttribute('input');
  }
  public set input(value: { [key: string]: string }) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rde_state - computed: true, optional: false, required: false
  public get rdeState() {
    return this.getStringAttribute('rde_state');
  }

  // validate_only_required_inputs - computed: false, optional: true, required: false
  private _validateOnlyRequiredInputs?: boolean | cdktf.IResolvable; 
  public get validateOnlyRequiredInputs() {
    return this.getBooleanAttribute('validate_only_required_inputs');
  }
  public set validateOnlyRequiredInputs(value: boolean | cdktf.IResolvable) {
    this._validateOnlyRequiredInputs = value;
  }
  public resetValidateOnlyRequiredInputs() {
    this._validateOnlyRequiredInputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateOnlyRequiredInputsInput() {
    return this._validateOnlyRequiredInputs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_eula: cdktf.booleanToTerraform(this._acceptEula),
      add_on_id: cdktf.stringToTerraform(this._addOnId),
      delete_input: cdktf.hashMapper(cdktf.stringToTerraform)(this._deleteInput),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.hashMapper(cdktf.stringToTerraform)(this._input),
      name: cdktf.stringToTerraform(this._name),
      validate_only_required_inputs: cdktf.booleanToTerraform(this._validateOnlyRequiredInputs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_eula: {
        value: cdktf.booleanToHclTerraform(this._acceptEula),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      add_on_id: {
        value: cdktf.stringToHclTerraform(this._addOnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_input: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._deleteInput),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._input),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_only_required_inputs: {
        value: cdktf.booleanToHclTerraform(this._validateOnlyRequiredInputs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
