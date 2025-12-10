// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/fleet_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataElasticstackFleetIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The integration package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/fleet_integration#name DataElasticstackFleetIntegration#name}
  */
  readonly name: string;
  /**
  * Include prerelease packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/fleet_integration#prerelease DataElasticstackFleetIntegration#prerelease}
  */
  readonly prerelease?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/fleet_integration elasticstack_fleet_integration}
*/
export class DataElasticstackFleetIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_fleet_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataElasticstackFleetIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataElasticstackFleetIntegration to import
  * @param importFromId The id of the existing DataElasticstackFleetIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/fleet_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataElasticstackFleetIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_fleet_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/data-sources/fleet_integration elasticstack_fleet_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataElasticstackFleetIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataElasticstackFleetIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_fleet_integration',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._prerelease = config.prerelease;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // prerelease - computed: false, optional: true, required: false
  private _prerelease?: boolean | cdktf.IResolvable; 
  public get prerelease() {
    return this.getBooleanAttribute('prerelease');
  }
  public set prerelease(value: boolean | cdktf.IResolvable) {
    this._prerelease = value;
  }
  public resetPrerelease() {
    this._prerelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prereleaseInput() {
    return this._prerelease;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      prerelease: cdktf.booleanToTerraform(this._prerelease),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prerelease: {
        value: cdktf.booleanToHclTerraform(this._prerelease),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
