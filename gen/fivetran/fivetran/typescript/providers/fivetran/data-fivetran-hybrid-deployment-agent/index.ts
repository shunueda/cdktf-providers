// https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/hybrid_deployment_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranHybridDeploymentAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the hybrid deployment agent within your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/hybrid_deployment_agent#id DataFivetranHybridDeploymentAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/hybrid_deployment_agent fivetran_hybrid_deployment_agent}
*/
export class DataFivetranHybridDeploymentAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_hybrid_deployment_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranHybridDeploymentAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranHybridDeploymentAgent to import
  * @param importFromId The id of the existing DataFivetranHybridDeploymentAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/hybrid_deployment_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranHybridDeploymentAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_hybrid_deployment_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/hybrid_deployment_agent fivetran_hybrid_deployment_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranHybridDeploymentAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranHybridDeploymentAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_hybrid_deployment_agent',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.17',
        providerVersionConstraint: '1.9.17'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // registered_at - computed: true, optional: false, required: false
  public get registeredAt() {
    return this.getStringAttribute('registered_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
