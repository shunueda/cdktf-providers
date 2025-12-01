// https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A color representation of the registry. Accepts hex codes, eg #BADA55.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#color Registry#color}
  */
  readonly color?: string;
  /**
  * This is a description for the registry, this may describe the usage for it, the region, or something else
  * which would help identify the registry's purpose.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#description Registry#description}
  */
  readonly description?: string;
  /**
  * The ecosystem of the registry. **Warning:** This value cannot be changed after creation. Any attempts to update this field will result in API errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#ecosystem Registry#ecosystem}
  */
  readonly ecosystem: string;
  /**
  * An emoji to use with the registry, this can either be set using :buildkite: notation, or with the
  * emoji itself, such as 🚀.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#emoji Registry#emoji}
  */
  readonly emoji?: string;
  /**
  * The name of the registry. Can only contain numbers and letters, no spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#name Registry#name}
  */
  readonly name: string;
  /**
  * The registry's OIDC policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#oidc_policy Registry#oidc_policy}
  */
  readonly oidcPolicy?: string;
  /**
  * The team IDs that have access to the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#team_ids Registry#team_ids}
  */
  readonly teamIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry buildkite_registry}
*/
export class Registry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buildkite_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Registry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Registry to import
  * @param importFromId The id of the existing Registry that should be imported. Refer to the {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Registry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buildkite_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buildkite/buildkite/1.27.1/docs/resources/registry buildkite_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'buildkite_registry',
      terraformGeneratorMetadata: {
        providerName: 'buildkite',
        providerVersion: '1.27.1',
        providerVersionConstraint: '1.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._description = config.description;
    this._ecosystem = config.ecosystem;
    this._emoji = config.emoji;
    this._name = config.name;
    this._oidcPolicy = config.oidcPolicy;
    this._teamIds = config.teamIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

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

  // ecosystem - computed: false, optional: false, required: true
  private _ecosystem?: string; 
  public get ecosystem() {
    return this.getStringAttribute('ecosystem');
  }
  public set ecosystem(value: string) {
    this._ecosystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecosystemInput() {
    return this._ecosystem;
  }

  // emoji - computed: false, optional: true, required: false
  private _emoji?: string; 
  public get emoji() {
    return this.getStringAttribute('emoji');
  }
  public set emoji(value: string) {
    this._emoji = value;
  }
  public resetEmoji() {
    this._emoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emojiInput() {
    return this._emoji;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // oidc_policy - computed: false, optional: true, required: false
  private _oidcPolicy?: string; 
  public get oidcPolicy() {
    return this.getStringAttribute('oidc_policy');
  }
  public set oidcPolicy(value: string) {
    this._oidcPolicy = value;
  }
  public resetOidcPolicy() {
    this._oidcPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcPolicyInput() {
    return this._oidcPolicy;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return this.getListAttribute('team_ids');
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      description: cdktf.stringToTerraform(this._description),
      ecosystem: cdktf.stringToTerraform(this._ecosystem),
      emoji: cdktf.stringToTerraform(this._emoji),
      name: cdktf.stringToTerraform(this._name),
      oidc_policy: cdktf.stringToTerraform(this._oidcPolicy),
      team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teamIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecosystem: {
        value: cdktf.stringToHclTerraform(this._ecosystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emoji: {
        value: cdktf.stringToHclTerraform(this._emoji),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_policy: {
        value: cdktf.stringToHclTerraform(this._oidcPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teamIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
