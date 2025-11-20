// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to force the requested action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration#force FleetIntegration#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * The integration package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration#name FleetIntegration#name}
  */
  readonly name: string;
  /**
  * Set to true if you do not wish the integration package to be uninstalled at destroy time, and instead just remove the integration package from the Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration#skip_destroy FleetIntegration#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktf.IResolvable;
  /**
  * The Kibana space IDs where this integration package should be installed. When set, the package will be installed and managed within the specified space. Note: The order of space IDs does not matter as this is a set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration#space_ids FleetIntegration#space_ids}
  */
  readonly spaceIds?: string[];
  /**
  * The integration package version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration#version FleetIntegration#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration elasticstack_fleet_integration}
*/
export class FleetIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_fleet_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetIntegration to import
  * @param importFromId The id of the existing FleetIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_fleet_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_integration elasticstack_fleet_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: FleetIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_fleet_integration',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._force = config.force;
    this._name = config.name;
    this._skipDestroy = config.skipDestroy;
    this._spaceIds = config.spaceIds;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktf.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktf.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
  }

  // space_ids - computed: true, optional: true, required: false
  private _spaceIds?: string[]; 
  public get spaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('space_ids'));
  }
  public set spaceIds(value: string[]) {
    this._spaceIds = value;
  }
  public resetSpaceIds() {
    this._spaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdsInput() {
    return this._spaceIds;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force: cdktf.booleanToTerraform(this._force),
      name: cdktf.stringToTerraform(this._name),
      skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
      space_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spaceIds),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktf.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      space_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
