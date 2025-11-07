// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of alternative network zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#alternative_zones NetworkZone#alternative_zones}
  */
  readonly alternativeZones?: string[];
  /**
  * A short description of the network zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#description NetworkZone#description}
  */
  readonly description?: string;
  /**
  * The fallback mode of the network zone. Possible values: `ANY_ACTIVE_GATE`, `NONE`, `ONLY_DEFAULT_ZONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#fallback_mode NetworkZone#fallback_mode}
  */
  readonly fallbackMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#id NetworkZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the network zone cannot be modified once created. Dynatrace stores the field in lowercase, allowed characters: alphanumeric, hyphen, underscore, dot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#name NetworkZone#name}
  */
  readonly name?: string;
  /**
  * The number of ActiveGates in the network zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#num_of_configured_activegates NetworkZone#num_of_configured_activegates}
  */
  readonly numOfConfiguredActivegates?: number;
  /**
  * The number of OneAgents that are configured to use the network zone as primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#num_of_configured_oneagents NetworkZone#num_of_configured_oneagents}
  */
  readonly numOfConfiguredOneagents?: number;
  /**
  * The number of OneAgents from other network zones that are using ActiveGates in the network zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#num_of_oneagents_from_other_zones NetworkZone#num_of_oneagents_from_other_zones}
  */
  readonly numOfOneagentsFromOtherZones?: number;
  /**
  * The number of OneAgents that are using ActiveGates in the network zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#num_of_oneagents_using NetworkZone#num_of_oneagents_using}
  */
  readonly numOfOneagentsUsing?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone dynatrace_network_zone}
*/
export class NetworkZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_network_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkZone to import
  * @param importFromId The id of the existing NetworkZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_network_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/network_zone dynatrace_network_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_network_zone',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alternativeZones = config.alternativeZones;
    this._description = config.description;
    this._fallbackMode = config.fallbackMode;
    this._id = config.id;
    this._name = config.name;
    this._numOfConfiguredActivegates = config.numOfConfiguredActivegates;
    this._numOfConfiguredOneagents = config.numOfConfiguredOneagents;
    this._numOfOneagentsFromOtherZones = config.numOfOneagentsFromOtherZones;
    this._numOfOneagentsUsing = config.numOfOneagentsUsing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_zones - computed: false, optional: true, required: false
  private _alternativeZones?: string[]; 
  public get alternativeZones() {
    return this.getListAttribute('alternative_zones');
  }
  public set alternativeZones(value: string[]) {
    this._alternativeZones = value;
  }
  public resetAlternativeZones() {
    this._alternativeZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeZonesInput() {
    return this._alternativeZones;
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

  // fallback_mode - computed: false, optional: true, required: false
  private _fallbackMode?: string; 
  public get fallbackMode() {
    return this.getStringAttribute('fallback_mode');
  }
  public set fallbackMode(value: string) {
    this._fallbackMode = value;
  }
  public resetFallbackMode() {
    this._fallbackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackModeInput() {
    return this._fallbackMode;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // num_of_configured_activegates - computed: false, optional: true, required: false
  private _numOfConfiguredActivegates?: number; 
  public get numOfConfiguredActivegates() {
    return this.getNumberAttribute('num_of_configured_activegates');
  }
  public set numOfConfiguredActivegates(value: number) {
    this._numOfConfiguredActivegates = value;
  }
  public resetNumOfConfiguredActivegates() {
    this._numOfConfiguredActivegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfConfiguredActivegatesInput() {
    return this._numOfConfiguredActivegates;
  }

  // num_of_configured_oneagents - computed: false, optional: true, required: false
  private _numOfConfiguredOneagents?: number; 
  public get numOfConfiguredOneagents() {
    return this.getNumberAttribute('num_of_configured_oneagents');
  }
  public set numOfConfiguredOneagents(value: number) {
    this._numOfConfiguredOneagents = value;
  }
  public resetNumOfConfiguredOneagents() {
    this._numOfConfiguredOneagents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfConfiguredOneagentsInput() {
    return this._numOfConfiguredOneagents;
  }

  // num_of_oneagents_from_other_zones - computed: false, optional: true, required: false
  private _numOfOneagentsFromOtherZones?: number; 
  public get numOfOneagentsFromOtherZones() {
    return this.getNumberAttribute('num_of_oneagents_from_other_zones');
  }
  public set numOfOneagentsFromOtherZones(value: number) {
    this._numOfOneagentsFromOtherZones = value;
  }
  public resetNumOfOneagentsFromOtherZones() {
    this._numOfOneagentsFromOtherZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfOneagentsFromOtherZonesInput() {
    return this._numOfOneagentsFromOtherZones;
  }

  // num_of_oneagents_using - computed: false, optional: true, required: false
  private _numOfOneagentsUsing?: number; 
  public get numOfOneagentsUsing() {
    return this.getNumberAttribute('num_of_oneagents_using');
  }
  public set numOfOneagentsUsing(value: number) {
    this._numOfOneagentsUsing = value;
  }
  public resetNumOfOneagentsUsing() {
    this._numOfOneagentsUsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfOneagentsUsingInput() {
    return this._numOfOneagentsUsing;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternative_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alternativeZones),
      description: cdktf.stringToTerraform(this._description),
      fallback_mode: cdktf.stringToTerraform(this._fallbackMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_of_configured_activegates: cdktf.numberToTerraform(this._numOfConfiguredActivegates),
      num_of_configured_oneagents: cdktf.numberToTerraform(this._numOfConfiguredOneagents),
      num_of_oneagents_from_other_zones: cdktf.numberToTerraform(this._numOfOneagentsFromOtherZones),
      num_of_oneagents_using: cdktf.numberToTerraform(this._numOfOneagentsUsing),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternative_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alternativeZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_mode: {
        value: cdktf.stringToHclTerraform(this._fallbackMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      num_of_configured_activegates: {
        value: cdktf.numberToHclTerraform(this._numOfConfiguredActivegates),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_configured_oneagents: {
        value: cdktf.numberToHclTerraform(this._numOfConfiguredOneagents),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_oneagents_from_other_zones: {
        value: cdktf.numberToHclTerraform(this._numOfOneagentsFromOtherZones),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_of_oneagents_using: {
        value: cdktf.numberToHclTerraform(this._numOfOneagentsUsing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
