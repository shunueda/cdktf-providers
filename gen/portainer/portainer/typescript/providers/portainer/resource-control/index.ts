// https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#administrators_only ResourceControl#administrators_only}
  */
  readonly administratorsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#id ResourceControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#public ResourceControl#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#resource_control_id ResourceControl#resource_control_id}
  */
  readonly resourceControlId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#resource_id ResourceControl#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#teams ResourceControl#teams}
  */
  readonly teams?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#type ResourceControl#type}
  */
  readonly type?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#users ResourceControl#users}
  */
  readonly users?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control portainer_resource_control}
*/
export class ResourceControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_resource_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceControl to import
  * @param importFromId The id of the existing ResourceControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_resource_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.0/docs/resources/resource_control portainer_resource_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceControlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ResourceControlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'portainer_resource_control',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.0',
        providerVersionConstraint: '1.20.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administratorsOnly = config.administratorsOnly;
    this._id = config.id;
    this._public = config.public;
    this._resourceControlId = config.resourceControlId;
    this._resourceId = config.resourceId;
    this._teams = config.teams;
    this._type = config.type;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrators_only - computed: false, optional: true, required: false
  private _administratorsOnly?: boolean | cdktf.IResolvable; 
  public get administratorsOnly() {
    return this.getBooleanAttribute('administrators_only');
  }
  public set administratorsOnly(value: boolean | cdktf.IResolvable) {
    this._administratorsOnly = value;
  }
  public resetAdministratorsOnly() {
    this._administratorsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorsOnlyInput() {
    return this._administratorsOnly;
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

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // resource_control_id - computed: false, optional: true, required: false
  private _resourceControlId?: number; 
  public get resourceControlId() {
    return this.getNumberAttribute('resource_control_id');
  }
  public set resourceControlId(value: number) {
    this._resourceControlId = value;
  }
  public resetResourceControlId() {
    this._resourceControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceControlIdInput() {
    return this._resourceControlId;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: number[]; 
  public get teams() {
    return this.getNumberListAttribute('teams');
  }
  public set teams(value: number[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // users - computed: false, optional: true, required: false
  private _users?: number[]; 
  public get users() {
    return this.getNumberListAttribute('users');
  }
  public set users(value: number[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrators_only: cdktf.booleanToTerraform(this._administratorsOnly),
      id: cdktf.stringToTerraform(this._id),
      public: cdktf.booleanToTerraform(this._public),
      resource_control_id: cdktf.numberToTerraform(this._resourceControlId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      teams: cdktf.listMapper(cdktf.numberToTerraform, false)(this._teams),
      type: cdktf.numberToTerraform(this._type),
      users: cdktf.listMapper(cdktf.numberToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrators_only: {
        value: cdktf.booleanToHclTerraform(this._administratorsOnly),
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
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_control_id: {
        value: cdktf.numberToHclTerraform(this._resourceControlId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
