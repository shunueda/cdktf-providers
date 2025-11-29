// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/context_parameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContextParametersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/context_parameters#params ContextParameters#params}
  */
  readonly params: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/context_parameters#project_id ContextParameters#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/context_parameters teamcity_context_parameters}
*/
export class ContextParameters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_context_parameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContextParameters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContextParameters to import
  * @param importFromId The id of the existing ContextParameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/context_parameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContextParameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_context_parameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/context_parameters teamcity_context_parameters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContextParametersConfig
  */
  public constructor(scope: Construct, id: string, config: ContextParametersConfig) {
    super(scope, id, {
      terraformResourceType: 'teamcity_context_parameters',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.86',
        providerVersionConstraint: '0.0.86'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._params = config.params;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // params - computed: false, optional: false, required: true
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      params: cdktf.hashMapper(cdktf.stringToTerraform)(this._params),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._params),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
