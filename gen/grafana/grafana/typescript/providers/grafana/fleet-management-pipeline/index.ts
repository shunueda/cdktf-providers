// https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetManagementPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration contents of the pipeline to be used by collectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline#contents FleetManagementPipeline#contents}
  */
  readonly contents: string;
  /**
  * Whether the pipeline is enabled for collectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline#enabled FleetManagementPipeline#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Used to match against collectors and assign pipelines to them; follows the syntax of Prometheus Alertmanager matchers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline#matchers FleetManagementPipeline#matchers}
  */
  readonly matchers?: string[];
  /**
  * Name of the pipeline which is the unique identifier for the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline#name FleetManagementPipeline#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline grafana_fleet_management_pipeline}
*/
export class FleetManagementPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_fleet_management_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetManagementPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetManagementPipeline to import
  * @param importFromId The id of the existing FleetManagementPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetManagementPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_fleet_management_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.18.0/docs/resources/fleet_management_pipeline grafana_fleet_management_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetManagementPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: FleetManagementPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_fleet_management_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.18.0',
        providerVersionConstraint: '4.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contents = config.contents;
    this._enabled = config.enabled;
    this._matchers = config.matchers;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matchers - computed: true, optional: true, required: false
  private _matchers?: string[]; 
  public get matchers() {
    return this.getListAttribute('matchers');
  }
  public set matchers(value: string[]) {
    this._matchers = value;
  }
  public resetMatchers() {
    this._matchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contents: cdktf.stringToTerraform(this._contents),
      enabled: cdktf.booleanToTerraform(this._enabled),
      matchers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchers),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contents: {
        value: cdktf.stringToHclTerraform(this._contents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      matchers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
