// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/querypack_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuerypackAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * QueryPacks to assign to the space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/querypack_assignment#querypacks QuerypackAssignment#querypacks}
  */
  readonly querypacks?: string[];
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/querypack_assignment#space_id QuerypackAssignment#space_id}
  */
  readonly spaceId?: string;
  /**
  * QueryPack Assignment State (enabled or disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/querypack_assignment#state QuerypackAssignment#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/querypack_assignment mondoo_querypack_assignment}
*/
export class QuerypackAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_querypack_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuerypackAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuerypackAssignment to import
  * @param importFromId The id of the existing QuerypackAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/querypack_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuerypackAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_querypack_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/querypack_assignment mondoo_querypack_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuerypackAssignmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QuerypackAssignmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mondoo_querypack_assignment',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.0',
        providerVersionConstraint: '0.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._querypacks = config.querypacks;
    this._spaceId = config.spaceId;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // querypacks - computed: true, optional: true, required: false
  private _querypacks?: string[]; 
  public get querypacks() {
    return this.getListAttribute('querypacks');
  }
  public set querypacks(value: string[]) {
    this._querypacks = value;
  }
  public resetQuerypacks() {
    this._querypacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querypacksInput() {
    return this._querypacks;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      querypacks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._querypacks),
      space_id: cdktf.stringToTerraform(this._spaceId),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      querypacks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._querypacks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
