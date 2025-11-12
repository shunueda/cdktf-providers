// generated from terraform resource schema

import { AuthenticationPoliciesFragmentInputs, 
authenticationPoliciesFragmentInputsToTerraform, 
authenticationPoliciesFragmentInputsToHclTerraform, 
AuthenticationPoliciesFragmentInputsOutputReference, 
AuthenticationPoliciesFragmentOutputs, 
authenticationPoliciesFragmentOutputsToTerraform, 
authenticationPoliciesFragmentOutputsToHclTerraform, 
AuthenticationPoliciesFragmentOutputsOutputReference, 
AuthenticationPoliciesFragmentRootNode, 
authenticationPoliciesFragmentRootNodeToTerraform, 
authenticationPoliciesFragmentRootNodeToHclTerraform, 
AuthenticationPoliciesFragmentRootNodeOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuthenticationPoliciesFragmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description for the authentication policy fragment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment#description AuthenticationPoliciesFragment#description}
  */
  readonly description?: string;
  /**
  * The authentication policy fragment ID. ID is unique. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment#fragment_id AuthenticationPoliciesFragment#fragment_id}
  */
  readonly fragmentId?: string;
  /**
  * The reference to the authentication policy contract to use as the attribute inputs for this authentication policy fragment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment#inputs AuthenticationPoliciesFragment#inputs}
  */
  readonly inputs?: AuthenticationPoliciesFragmentInputs;
  /**
  * The authentication policy fragment name. Name is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment#name AuthenticationPoliciesFragment#name}
  */
  readonly name: string;
  /**
  * The reference to the authentication policy contract to use as the attribute outputs for this authentication policy fragment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment#outputs AuthenticationPoliciesFragment#outputs}
  */
  readonly outputs?: AuthenticationPoliciesFragmentOutputs;
  /**
  * The beginning action for the authentication fragment policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment#root_node AuthenticationPoliciesFragment#root_node}
  */
  readonly rootNode: AuthenticationPoliciesFragmentRootNode;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment pingfederate_authentication_policies_fragment}
*/
export class AuthenticationPoliciesFragment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_policies_fragment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPoliciesFragment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPoliciesFragment to import
  * @param importFromId The id of the existing AuthenticationPoliciesFragment that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPoliciesFragment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_policies_fragment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies_fragment pingfederate_authentication_policies_fragment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPoliciesFragmentConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPoliciesFragmentConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_policies_fragment',
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
    this._description = config.description;
    this._fragmentId = config.fragmentId;
    this._inputs.internalValue = config.inputs;
    this._name = config.name;
    this._outputs.internalValue = config.outputs;
    this._rootNode.internalValue = config.rootNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fragment_id - computed: true, optional: true, required: false
  private _fragmentId?: string; 
  public get fragmentId() {
    return this.getStringAttribute('fragment_id');
  }
  public set fragmentId(value: string) {
    this._fragmentId = value;
  }
  public resetFragmentId() {
    this._fragmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentIdInput() {
    return this._fragmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new AuthenticationPoliciesFragmentInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: AuthenticationPoliciesFragmentInputs) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
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

  // outputs - computed: false, optional: true, required: false
  private _outputs = new AuthenticationPoliciesFragmentOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: AuthenticationPoliciesFragmentOutputs) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // root_node - computed: false, optional: false, required: true
  private _rootNode = new AuthenticationPoliciesFragmentRootNodeOutputReference(this, "root_node");
  public get rootNode() {
    return this._rootNode;
  }
  public putRootNode(value: AuthenticationPoliciesFragmentRootNode) {
    this._rootNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNodeInput() {
    return this._rootNode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fragment_id: cdktf.stringToTerraform(this._fragmentId),
      inputs: authenticationPoliciesFragmentInputsToTerraform(this._inputs.internalValue),
      name: cdktf.stringToTerraform(this._name),
      outputs: authenticationPoliciesFragmentOutputsToTerraform(this._outputs.internalValue),
      root_node: authenticationPoliciesFragmentRootNodeToTerraform(this._rootNode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fragment_id: {
        value: cdktf.stringToHclTerraform(this._fragmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inputs: {
        value: authenticationPoliciesFragmentInputsToHclTerraform(this._inputs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationPoliciesFragmentInputs",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outputs: {
        value: authenticationPoliciesFragmentOutputsToHclTerraform(this._outputs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationPoliciesFragmentOutputs",
      },
      root_node: {
        value: authenticationPoliciesFragmentRootNodeToHclTerraform(this._rootNode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationPoliciesFragmentRootNode",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
