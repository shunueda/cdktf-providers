// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmployeeperformanceExternalmetricsDefinitionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default objective type of the External Metric Definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#default_objective_type EmployeeperformanceExternalmetricsDefinitions#default_objective_type}
  */
  readonly defaultObjectiveType: string;
  /**
  * True if the External Metric Definition is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#enabled EmployeeperformanceExternalmetricsDefinitions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#id EmployeeperformanceExternalmetricsDefinitions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the External Metric Definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#name EmployeeperformanceExternalmetricsDefinitions#name}
  */
  readonly name: string;
  /**
  * The decimal precision of the External Metric Definition. Must be at least 0 and at most 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#precision EmployeeperformanceExternalmetricsDefinitions#precision}
  */
  readonly precision: number;
  /**
  * The unit of the External Metric Definition. Note: Changing the unit property will cause the external metric object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#unit EmployeeperformanceExternalmetricsDefinitions#unit}
  */
  readonly unit: string;
  /**
  * The unit definition of the External Metric Definition. Note: Changing the unit definition property will cause the external metric object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#unit_definition EmployeeperformanceExternalmetricsDefinitions#unit_definition}
  */
  readonly unitDefinition?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions genesyscloud_employeeperformance_externalmetrics_definitions}
*/
export class EmployeeperformanceExternalmetricsDefinitions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_employeeperformance_externalmetrics_definitions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmployeeperformanceExternalmetricsDefinitions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmployeeperformanceExternalmetricsDefinitions to import
  * @param importFromId The id of the existing EmployeeperformanceExternalmetricsDefinitions that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmployeeperformanceExternalmetricsDefinitions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_employeeperformance_externalmetrics_definitions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/employeeperformance_externalmetrics_definitions genesyscloud_employeeperformance_externalmetrics_definitions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmployeeperformanceExternalmetricsDefinitionsConfig
  */
  public constructor(scope: Construct, id: string, config: EmployeeperformanceExternalmetricsDefinitionsConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_employeeperformance_externalmetrics_definitions',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultObjectiveType = config.defaultObjectiveType;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._precision = config.precision;
    this._unit = config.unit;
    this._unitDefinition = config.unitDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_objective_type - computed: false, optional: false, required: true
  private _defaultObjectiveType?: string; 
  public get defaultObjectiveType() {
    return this.getStringAttribute('default_objective_type');
  }
  public set defaultObjectiveType(value: string) {
    this._defaultObjectiveType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultObjectiveTypeInput() {
    return this._defaultObjectiveType;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // precision - computed: false, optional: false, required: true
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // unit_definition - computed: false, optional: true, required: false
  private _unitDefinition?: string; 
  public get unitDefinition() {
    return this.getStringAttribute('unit_definition');
  }
  public set unitDefinition(value: string) {
    this._unitDefinition = value;
  }
  public resetUnitDefinition() {
    this._unitDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitDefinitionInput() {
    return this._unitDefinition;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_objective_type: cdktf.stringToTerraform(this._defaultObjectiveType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      precision: cdktf.numberToTerraform(this._precision),
      unit: cdktf.stringToTerraform(this._unit),
      unit_definition: cdktf.stringToTerraform(this._unitDefinition),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_objective_type: {
        value: cdktf.stringToHclTerraform(this._defaultObjectiveType),
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
      precision: {
        value: cdktf.numberToHclTerraform(this._precision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_definition: {
        value: cdktf.stringToHclTerraform(this._unitDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
