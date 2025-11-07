// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclMlbPlanV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#bandwidth DataEclMlbPlanV1#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#description DataEclMlbPlanV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#enabled DataEclMlbPlanV1#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#id DataEclMlbPlanV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_conditions DataEclMlbPlanV1#max_number_of_conditions}
  */
  readonly maxNumberOfConditions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_health_monitors DataEclMlbPlanV1#max_number_of_health_monitors}
  */
  readonly maxNumberOfHealthMonitors?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_interfaces DataEclMlbPlanV1#max_number_of_interfaces}
  */
  readonly maxNumberOfInterfaces?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_listeners DataEclMlbPlanV1#max_number_of_listeners}
  */
  readonly maxNumberOfListeners?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_members DataEclMlbPlanV1#max_number_of_members}
  */
  readonly maxNumberOfMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_policies DataEclMlbPlanV1#max_number_of_policies}
  */
  readonly maxNumberOfPolicies?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_routes DataEclMlbPlanV1#max_number_of_routes}
  */
  readonly maxNumberOfRoutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_rules DataEclMlbPlanV1#max_number_of_rules}
  */
  readonly maxNumberOfRules?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_server_name_indications DataEclMlbPlanV1#max_number_of_server_name_indications}
  */
  readonly maxNumberOfServerNameIndications?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#max_number_of_target_groups DataEclMlbPlanV1#max_number_of_target_groups}
  */
  readonly maxNumberOfTargetGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#name DataEclMlbPlanV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#redundancy DataEclMlbPlanV1#redundancy}
  */
  readonly redundancy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1 ecl_mlb_plan_v1}
*/
export class DataEclMlbPlanV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_mlb_plan_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclMlbPlanV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclMlbPlanV1 to import
  * @param importFromId The id of the existing DataEclMlbPlanV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclMlbPlanV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_mlb_plan_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_plan_v1 ecl_mlb_plan_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclMlbPlanV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclMlbPlanV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_mlb_plan_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._maxNumberOfConditions = config.maxNumberOfConditions;
    this._maxNumberOfHealthMonitors = config.maxNumberOfHealthMonitors;
    this._maxNumberOfInterfaces = config.maxNumberOfInterfaces;
    this._maxNumberOfListeners = config.maxNumberOfListeners;
    this._maxNumberOfMembers = config.maxNumberOfMembers;
    this._maxNumberOfPolicies = config.maxNumberOfPolicies;
    this._maxNumberOfRoutes = config.maxNumberOfRoutes;
    this._maxNumberOfRules = config.maxNumberOfRules;
    this._maxNumberOfServerNameIndications = config.maxNumberOfServerNameIndications;
    this._maxNumberOfTargetGroups = config.maxNumberOfTargetGroups;
    this._name = config.name;
    this._redundancy = config.redundancy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // description - computed: true, optional: true, required: false
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

  // max_number_of_conditions - computed: true, optional: true, required: false
  private _maxNumberOfConditions?: number; 
  public get maxNumberOfConditions() {
    return this.getNumberAttribute('max_number_of_conditions');
  }
  public set maxNumberOfConditions(value: number) {
    this._maxNumberOfConditions = value;
  }
  public resetMaxNumberOfConditions() {
    this._maxNumberOfConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfConditionsInput() {
    return this._maxNumberOfConditions;
  }

  // max_number_of_health_monitors - computed: true, optional: true, required: false
  private _maxNumberOfHealthMonitors?: number; 
  public get maxNumberOfHealthMonitors() {
    return this.getNumberAttribute('max_number_of_health_monitors');
  }
  public set maxNumberOfHealthMonitors(value: number) {
    this._maxNumberOfHealthMonitors = value;
  }
  public resetMaxNumberOfHealthMonitors() {
    this._maxNumberOfHealthMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfHealthMonitorsInput() {
    return this._maxNumberOfHealthMonitors;
  }

  // max_number_of_interfaces - computed: true, optional: true, required: false
  private _maxNumberOfInterfaces?: number; 
  public get maxNumberOfInterfaces() {
    return this.getNumberAttribute('max_number_of_interfaces');
  }
  public set maxNumberOfInterfaces(value: number) {
    this._maxNumberOfInterfaces = value;
  }
  public resetMaxNumberOfInterfaces() {
    this._maxNumberOfInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfInterfacesInput() {
    return this._maxNumberOfInterfaces;
  }

  // max_number_of_listeners - computed: true, optional: true, required: false
  private _maxNumberOfListeners?: number; 
  public get maxNumberOfListeners() {
    return this.getNumberAttribute('max_number_of_listeners');
  }
  public set maxNumberOfListeners(value: number) {
    this._maxNumberOfListeners = value;
  }
  public resetMaxNumberOfListeners() {
    this._maxNumberOfListeners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfListenersInput() {
    return this._maxNumberOfListeners;
  }

  // max_number_of_members - computed: true, optional: true, required: false
  private _maxNumberOfMembers?: number; 
  public get maxNumberOfMembers() {
    return this.getNumberAttribute('max_number_of_members');
  }
  public set maxNumberOfMembers(value: number) {
    this._maxNumberOfMembers = value;
  }
  public resetMaxNumberOfMembers() {
    this._maxNumberOfMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfMembersInput() {
    return this._maxNumberOfMembers;
  }

  // max_number_of_policies - computed: true, optional: true, required: false
  private _maxNumberOfPolicies?: number; 
  public get maxNumberOfPolicies() {
    return this.getNumberAttribute('max_number_of_policies');
  }
  public set maxNumberOfPolicies(value: number) {
    this._maxNumberOfPolicies = value;
  }
  public resetMaxNumberOfPolicies() {
    this._maxNumberOfPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfPoliciesInput() {
    return this._maxNumberOfPolicies;
  }

  // max_number_of_routes - computed: true, optional: true, required: false
  private _maxNumberOfRoutes?: number; 
  public get maxNumberOfRoutes() {
    return this.getNumberAttribute('max_number_of_routes');
  }
  public set maxNumberOfRoutes(value: number) {
    this._maxNumberOfRoutes = value;
  }
  public resetMaxNumberOfRoutes() {
    this._maxNumberOfRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfRoutesInput() {
    return this._maxNumberOfRoutes;
  }

  // max_number_of_rules - computed: true, optional: true, required: false
  private _maxNumberOfRules?: number; 
  public get maxNumberOfRules() {
    return this.getNumberAttribute('max_number_of_rules');
  }
  public set maxNumberOfRules(value: number) {
    this._maxNumberOfRules = value;
  }
  public resetMaxNumberOfRules() {
    this._maxNumberOfRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfRulesInput() {
    return this._maxNumberOfRules;
  }

  // max_number_of_server_name_indications - computed: true, optional: true, required: false
  private _maxNumberOfServerNameIndications?: number; 
  public get maxNumberOfServerNameIndications() {
    return this.getNumberAttribute('max_number_of_server_name_indications');
  }
  public set maxNumberOfServerNameIndications(value: number) {
    this._maxNumberOfServerNameIndications = value;
  }
  public resetMaxNumberOfServerNameIndications() {
    this._maxNumberOfServerNameIndications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfServerNameIndicationsInput() {
    return this._maxNumberOfServerNameIndications;
  }

  // max_number_of_target_groups - computed: true, optional: true, required: false
  private _maxNumberOfTargetGroups?: number; 
  public get maxNumberOfTargetGroups() {
    return this.getNumberAttribute('max_number_of_target_groups');
  }
  public set maxNumberOfTargetGroups(value: number) {
    this._maxNumberOfTargetGroups = value;
  }
  public resetMaxNumberOfTargetGroups() {
    this._maxNumberOfTargetGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfTargetGroupsInput() {
    return this._maxNumberOfTargetGroups;
  }

  // name - computed: true, optional: true, required: false
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

  // redundancy - computed: true, optional: true, required: false
  private _redundancy?: string; 
  public get redundancy() {
    return this.getStringAttribute('redundancy');
  }
  public set redundancy(value: string) {
    this._redundancy = value;
  }
  public resetRedundancy() {
    this._redundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      max_number_of_conditions: cdktf.numberToTerraform(this._maxNumberOfConditions),
      max_number_of_health_monitors: cdktf.numberToTerraform(this._maxNumberOfHealthMonitors),
      max_number_of_interfaces: cdktf.numberToTerraform(this._maxNumberOfInterfaces),
      max_number_of_listeners: cdktf.numberToTerraform(this._maxNumberOfListeners),
      max_number_of_members: cdktf.numberToTerraform(this._maxNumberOfMembers),
      max_number_of_policies: cdktf.numberToTerraform(this._maxNumberOfPolicies),
      max_number_of_routes: cdktf.numberToTerraform(this._maxNumberOfRoutes),
      max_number_of_rules: cdktf.numberToTerraform(this._maxNumberOfRules),
      max_number_of_server_name_indications: cdktf.numberToTerraform(this._maxNumberOfServerNameIndications),
      max_number_of_target_groups: cdktf.numberToTerraform(this._maxNumberOfTargetGroups),
      name: cdktf.stringToTerraform(this._name),
      redundancy: cdktf.stringToTerraform(this._redundancy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
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
      max_number_of_conditions: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfConditions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_health_monitors: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfHealthMonitors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_interfaces: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_listeners: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfListeners),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_members: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_policies: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_routes: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_rules: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfRules),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_server_name_indications: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfServerNameIndications),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_number_of_target_groups: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfTargetGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundancy: {
        value: cdktf.stringToHclTerraform(this._redundancy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
