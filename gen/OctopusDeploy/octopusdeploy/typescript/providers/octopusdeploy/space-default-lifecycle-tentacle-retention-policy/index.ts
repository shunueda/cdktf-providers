// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceDefaultLifecycleTentacleRetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of days/releases to keep files on tentacles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy#quantity_to_keep SpaceDefaultLifecycleTentacleRetentionPolicy#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * The ID of the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy#space_id SpaceDefaultLifecycleTentacleRetentionPolicy#space_id}
  */
  readonly spaceId: string;
  /**
  * How retention will be set. Valid strategies are `Forever`, and `Count`.
  *   - `strategy = "Forever"`, is used if files on tentacles should never be deleted.
  *   - `strategy = "Count"`, is used if a specific number of days/releases files on tentacles should be kept for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy#strategy SpaceDefaultLifecycleTentacleRetentionPolicy#strategy}
  */
  readonly strategy: string;
  /**
  * The unit of quantity to keep. Valid Units are `Days` or `Items`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy#unit SpaceDefaultLifecycleTentacleRetentionPolicy#unit}
  */
  readonly unit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy octopusdeploy_space_default_lifecycle_tentacle_retention_policy}
*/
export class SpaceDefaultLifecycleTentacleRetentionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_space_default_lifecycle_tentacle_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpaceDefaultLifecycleTentacleRetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpaceDefaultLifecycleTentacleRetentionPolicy to import
  * @param importFromId The id of the existing SpaceDefaultLifecycleTentacleRetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpaceDefaultLifecycleTentacleRetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_space_default_lifecycle_tentacle_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/space_default_lifecycle_tentacle_retention_policy octopusdeploy_space_default_lifecycle_tentacle_retention_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceDefaultLifecycleTentacleRetentionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceDefaultLifecycleTentacleRetentionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_space_default_lifecycle_tentacle_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._quantityToKeep = config.quantityToKeep;
    this._spaceId = config.spaceId;
    this._strategy = config.strategy;
    this._unit = config.unit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quantity_to_keep - computed: false, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
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

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      quantity_to_keep: cdktf.numberToTerraform(this._quantityToKeep),
      space_id: cdktf.stringToTerraform(this._spaceId),
      strategy: cdktf.stringToTerraform(this._strategy),
      unit: cdktf.stringToTerraform(this._unit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      quantity_to_keep: {
        value: cdktf.numberToHclTerraform(this._quantityToKeep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
