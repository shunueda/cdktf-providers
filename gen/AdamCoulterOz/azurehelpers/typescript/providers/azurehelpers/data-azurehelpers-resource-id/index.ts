// https://registry.terraform.io/providers/adamcoulteroz/azurehelpers/0.2.0/docs/data-sources/resource_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurehelpersResourceIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/adamcoulteroz/azurehelpers/0.2.0/docs/data-sources/resource_id#id DataAzurehelpersResourceId#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource id to parse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/adamcoulteroz/azurehelpers/0.2.0/docs/data-sources/resource_id#resource_id DataAzurehelpersResourceId#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/adamcoulteroz/azurehelpers/0.2.0/docs/data-sources/resource_id azurehelpers_resource_id}
*/
export class DataAzurehelpersResourceId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurehelpers_resource_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurehelpersResourceId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurehelpersResourceId to import
  * @param importFromId The id of the existing DataAzurehelpersResourceId that should be imported. Refer to the {@link https://registry.terraform.io/providers/adamcoulteroz/azurehelpers/0.2.0/docs/data-sources/resource_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurehelpersResourceId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurehelpers_resource_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/adamcoulteroz/azurehelpers/0.2.0/docs/data-sources/resource_id azurehelpers_resource_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurehelpersResourceIdConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurehelpersResourceIdConfig) {
    super(scope, id, {
      terraformResourceType: 'azurehelpers_resource_id',
      terraformGeneratorMetadata: {
        providerName: 'azurehelpers',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
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
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_resource_type - computed: true, optional: false, required: false
  public get fullResourceType() {
    return this.getStringAttribute('full_resource_type');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_resources - computed: true, optional: false, required: false
  private _parentResources = new cdktf.StringMap(this, "parent_resources");
  public get parentResources() {
    return this._parentResources;
  }

  // provider_namespace - computed: true, optional: false, required: false
  public get providerNamespace() {
    return this.getStringAttribute('provider_namespace');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
