// generated from terraform resource schema

import { DataPingfederateAuthenticationPoliciesFragmentInputsOutputReference, 
DataPingfederateAuthenticationPoliciesFragmentOutputsOutputReference, 
DataPingfederateAuthenticationPoliciesFragmentRootNodeOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataPingfederateAuthenticationPoliciesFragmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication policy fragment ID. ID is unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#fragment_id DataPingfederateAuthenticationPoliciesFragment#fragment_id}
  */
  readonly fragmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment pingfederate_authentication_policies_fragment}
*/
export class DataPingfederateAuthenticationPoliciesFragment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_policies_fragment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateAuthenticationPoliciesFragment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateAuthenticationPoliciesFragment to import
  * @param importFromId The id of the existing DataPingfederateAuthenticationPoliciesFragment that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateAuthenticationPoliciesFragment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_policies_fragment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/authentication_policies_fragment pingfederate_authentication_policies_fragment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateAuthenticationPoliciesFragmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateAuthenticationPoliciesFragmentConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_policies_fragment',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fragmentId = config.fragmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fragment_id - computed: false, optional: false, required: true
  private _fragmentId?: string; 
  public get fragmentId() {
    return this.getStringAttribute('fragment_id');
  }
  public set fragmentId(value: string) {
    this._fragmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentIdInput() {
    return this._fragmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inputs - computed: true, optional: false, required: false
  private _inputs = new DataPingfederateAuthenticationPoliciesFragmentInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataPingfederateAuthenticationPoliciesFragmentOutputsOutputReference(this, "outputs");
  public get outputs() {
    return this._outputs;
  }

  // root_node - computed: true, optional: false, required: false
  private _rootNode = new DataPingfederateAuthenticationPoliciesFragmentRootNodeOutputReference(this, "root_node");
  public get rootNode() {
    return this._rootNode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fragment_id: cdktf.stringToTerraform(this._fragmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fragment_id: {
        value: cdktf.stringToHclTerraform(this._fragmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
