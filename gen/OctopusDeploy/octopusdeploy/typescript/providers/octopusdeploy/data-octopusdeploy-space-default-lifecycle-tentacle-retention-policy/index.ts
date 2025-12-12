// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/space_default_lifecycle_tentacle_retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/space_default_lifecycle_tentacle_retention_policy#space_id DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicy#space_id}
  */
  readonly spaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/space_default_lifecycle_tentacle_retention_policy octopusdeploy_space_default_lifecycle_tentacle_retention_policy}
*/
export class DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_space_default_lifecycle_tentacle_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicy to import
  * @param importFromId The id of the existing DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/space_default_lifecycle_tentacle_retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_space_default_lifecycle_tentacle_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/space_default_lifecycle_tentacle_retention_policy octopusdeploy_space_default_lifecycle_tentacle_retention_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeploySpaceDefaultLifecycleTentacleRetentionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_space_default_lifecycle_tentacle_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
