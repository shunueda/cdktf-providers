// https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-specified description of the scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#description Scope#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#id Scope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * What resource field to use when evaluating the scope query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#parent_app_scope_id Scope#parent_app_scope_id}
  */
  readonly parentAppScopeId: string;
  /**
  * Used to sort application priorities; default is last.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#policy_priority Scope#policy_priority}
  */
  readonly policyPriority?: number;
  /**
  * User-specified name for the scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#short_name Scope#short_name}
  */
  readonly shortName: string;
  /**
  * What resource field to use when evaluating the scope query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#short_query_field Scope#short_query_field}
  */
  readonly shortQueryField: string;
  /**
  * Scope short query type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#short_query_type Scope#short_query_type}
  */
  readonly shortQueryType: string;
  /**
  * What resource value to use when evaluating the scope query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#short_query_value Scope#short_query_value}
  */
  readonly shortQueryValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope tetration_scope}
*/
export class Scope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tetration_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Scope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Scope to import
  * @param importFromId The id of the existing Scope that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Scope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tetration_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/tetration/0.1.1/docs/resources/scope tetration_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScopeConfig
  */
  public constructor(scope: Construct, id: string, config: ScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'tetration_scope',
      terraformGeneratorMetadata: {
        providerName: 'tetration',
        providerVersion: '0.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._parentAppScopeId = config.parentAppScopeId;
    this._policyPriority = config.policyPriority;
    this._shortName = config.shortName;
    this._shortQueryField = config.shortQueryField;
    this._shortQueryType = config.shortQueryType;
    this._shortQueryValue = config.shortQueryValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_app_scope_ids - computed: true, optional: false, required: false
  public get childAppScopeIds() {
    return this.getListAttribute('child_app_scope_ids');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
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

  // dirty - computed: true, optional: false, required: false
  public get dirty() {
    return this.getBooleanAttribute('dirty');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_app_scope_id - computed: false, optional: false, required: true
  private _parentAppScopeId?: string; 
  public get parentAppScopeId() {
    return this.getStringAttribute('parent_app_scope_id');
  }
  public set parentAppScopeId(value: string) {
    this._parentAppScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentAppScopeIdInput() {
    return this._parentAppScopeId;
  }

  // policy_priority - computed: true, optional: true, required: false
  private _policyPriority?: number; 
  public get policyPriority() {
    return this.getNumberAttribute('policy_priority');
  }
  public set policyPriority(value: number) {
    this._policyPriority = value;
  }
  public resetPolicyPriority() {
    this._policyPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPriorityInput() {
    return this._policyPriority;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // root_app_scope_id - computed: true, optional: false, required: false
  public get rootAppScopeId() {
    return this.getStringAttribute('root_app_scope_id');
  }

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // short_priority - computed: true, optional: false, required: false
  public get shortPriority() {
    return this.getNumberAttribute('short_priority');
  }

  // short_query_field - computed: false, optional: false, required: true
  private _shortQueryField?: string; 
  public get shortQueryField() {
    return this.getStringAttribute('short_query_field');
  }
  public set shortQueryField(value: string) {
    this._shortQueryField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortQueryFieldInput() {
    return this._shortQueryField;
  }

  // short_query_type - computed: false, optional: false, required: true
  private _shortQueryType?: string; 
  public get shortQueryType() {
    return this.getStringAttribute('short_query_type');
  }
  public set shortQueryType(value: string) {
    this._shortQueryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortQueryTypeInput() {
    return this._shortQueryType;
  }

  // short_query_value - computed: false, optional: false, required: true
  private _shortQueryValue?: string; 
  public get shortQueryValue() {
    return this.getStringAttribute('short_query_value');
  }
  public set shortQueryValue(value: string) {
    this._shortQueryValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortQueryValueInput() {
    return this._shortQueryValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // vrf_id - computed: true, optional: false, required: false
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      parent_app_scope_id: cdktf.stringToTerraform(this._parentAppScopeId),
      policy_priority: cdktf.numberToTerraform(this._policyPriority),
      short_name: cdktf.stringToTerraform(this._shortName),
      short_query_field: cdktf.stringToTerraform(this._shortQueryField),
      short_query_type: cdktf.stringToTerraform(this._shortQueryType),
      short_query_value: cdktf.stringToTerraform(this._shortQueryValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      parent_app_scope_id: {
        value: cdktf.stringToHclTerraform(this._parentAppScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_priority: {
        value: cdktf.numberToHclTerraform(this._policyPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_query_field: {
        value: cdktf.stringToHclTerraform(this._shortQueryField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_query_type: {
        value: cdktf.stringToHclTerraform(this._shortQueryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_query_value: {
        value: cdktf.stringToHclTerraform(this._shortQueryValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
