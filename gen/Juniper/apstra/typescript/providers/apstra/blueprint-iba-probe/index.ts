// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlueprintIbaProbeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID. Used to identify the Blueprint that the IBA Probe belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe#blueprint_id BlueprintIbaProbe#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Id of predefined IBA Probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe#predefined_probe_id BlueprintIbaProbe#predefined_probe_id}
  */
  readonly predefinedProbeId?: string;
  /**
  * Configuration elements for the IBA Probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe#probe_config BlueprintIbaProbe#probe_config}
  */
  readonly probeConfig?: string;
  /**
  * Define the probe as json. If this is present, there can be no predefined probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe#probe_json BlueprintIbaProbe#probe_json}
  */
  readonly probeJson?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe apstra_blueprint_iba_probe}
*/
export class BlueprintIbaProbe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_blueprint_iba_probe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlueprintIbaProbe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlueprintIbaProbe to import
  * @param importFromId The id of the existing BlueprintIbaProbe that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlueprintIbaProbe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_blueprint_iba_probe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_iba_probe apstra_blueprint_iba_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlueprintIbaProbeConfig
  */
  public constructor(scope: Construct, id: string, config: BlueprintIbaProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_blueprint_iba_probe',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._predefinedProbeId = config.predefinedProbeId;
    this._probeConfig = config.probeConfig;
    this._probeJson = config.probeJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // predefined_probe_id - computed: false, optional: true, required: false
  private _predefinedProbeId?: string; 
  public get predefinedProbeId() {
    return this.getStringAttribute('predefined_probe_id');
  }
  public set predefinedProbeId(value: string) {
    this._predefinedProbeId = value;
  }
  public resetPredefinedProbeId() {
    this._predefinedProbeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedProbeIdInput() {
    return this._predefinedProbeId;
  }

  // probe_config - computed: false, optional: true, required: false
  private _probeConfig?: string; 
  public get probeConfig() {
    return this.getStringAttribute('probe_config');
  }
  public set probeConfig(value: string) {
    this._probeConfig = value;
  }
  public resetProbeConfig() {
    this._probeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeConfigInput() {
    return this._probeConfig;
  }

  // probe_json - computed: false, optional: true, required: false
  private _probeJson?: string; 
  public get probeJson() {
    return this.getStringAttribute('probe_json');
  }
  public set probeJson(value: string) {
    this._probeJson = value;
  }
  public resetProbeJson() {
    this._probeJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeJsonInput() {
    return this._probeJson;
  }

  // stages - computed: true, optional: false, required: false
  public get stages() {
    return cdktf.Fn.tolist(this.getListAttribute('stages'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      predefined_probe_id: cdktf.stringToTerraform(this._predefinedProbeId),
      probe_config: cdktf.stringToTerraform(this._probeConfig),
      probe_json: cdktf.stringToTerraform(this._probeJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predefined_probe_id: {
        value: cdktf.stringToHclTerraform(this._predefinedProbeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_config: {
        value: cdktf.stringToHclTerraform(this._probeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_json: {
        value: cdktf.stringToHclTerraform(this._probeJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
