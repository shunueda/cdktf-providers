// https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScorecardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether the checks on this scorecard affect services' overall maturity level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard#affects_overall_service_levels Scorecard#affects_overall_service_levels}
  */
  readonly affectsOverallServiceLevels: boolean | cdktf.IResolvable;
  /**
  * The scorecard's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard#description Scorecard#description}
  */
  readonly description?: string;
  /**
  * The scorecard's filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard#filter_id Scorecard#filter_id}
  */
  readonly filterId?: string;
  /**
  * The scorecard's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard#name Scorecard#name}
  */
  readonly name: string;
  /**
  * The scorecard's owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard#owner_id Scorecard#owner_id}
  */
  readonly ownerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard opslevel_scorecard}
*/
export class Scorecard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_scorecard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Scorecard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Scorecard to import
  * @param importFromId The id of the existing Scorecard that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Scorecard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_scorecard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/scorecard opslevel_scorecard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScorecardConfig
  */
  public constructor(scope: Construct, id: string, config: ScorecardConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_scorecard',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affectsOverallServiceLevels = config.affectsOverallServiceLevels;
    this._description = config.description;
    this._filterId = config.filterId;
    this._name = config.name;
    this._ownerId = config.ownerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affects_overall_service_levels - computed: false, optional: false, required: true
  private _affectsOverallServiceLevels?: boolean | cdktf.IResolvable; 
  public get affectsOverallServiceLevels() {
    return this.getBooleanAttribute('affects_overall_service_levels');
  }
  public set affectsOverallServiceLevels(value: boolean | cdktf.IResolvable) {
    this._affectsOverallServiceLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get affectsOverallServiceLevelsInput() {
    return this._affectsOverallServiceLevels;
  }

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
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

  // filter_id - computed: false, optional: true, required: false
  private _filterId?: string; 
  public get filterId() {
    return this.getStringAttribute('filter_id');
  }
  public set filterId(value: string) {
    this._filterId = value;
  }
  public resetFilterId() {
    this._filterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdInput() {
    return this._filterId;
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

  // owner_id - computed: false, optional: false, required: true
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // passing_checks - computed: true, optional: false, required: false
  public get passingChecks() {
    return this.getNumberAttribute('passing_checks');
  }

  // service_count - computed: true, optional: false, required: false
  public get serviceCount() {
    return this.getNumberAttribute('service_count');
  }

  // total_checks - computed: true, optional: false, required: false
  public get totalChecks() {
    return this.getNumberAttribute('total_checks');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affects_overall_service_levels: cdktf.booleanToTerraform(this._affectsOverallServiceLevels),
      description: cdktf.stringToTerraform(this._description),
      filter_id: cdktf.stringToTerraform(this._filterId),
      name: cdktf.stringToTerraform(this._name),
      owner_id: cdktf.stringToTerraform(this._ownerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affects_overall_service_levels: {
        value: cdktf.booleanToHclTerraform(this._affectsOverallServiceLevels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_id: {
        value: cdktf.stringToHclTerraform(this._filterId),
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
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
