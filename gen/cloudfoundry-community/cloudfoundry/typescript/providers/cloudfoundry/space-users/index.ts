// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users#auditors SpaceUsers#auditors}
  */
  readonly auditors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users#developers SpaceUsers#developers}
  */
  readonly developers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users#force SpaceUsers#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users#id SpaceUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users#managers SpaceUsers#managers}
  */
  readonly managers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users#space SpaceUsers#space}
  */
  readonly space: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users cloudfoundry_space_users}
*/
export class SpaceUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_space_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpaceUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpaceUsers to import
  * @param importFromId The id of the existing SpaceUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpaceUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_space_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_users cloudfoundry_space_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceUsersConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_space_users',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditors = config.auditors;
    this._developers = config.developers;
    this._force = config.force;
    this._id = config.id;
    this._managers = config.managers;
    this._space = config.space;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auditors - computed: true, optional: true, required: false
  private _auditors?: string[]; 
  public get auditors() {
    return cdktf.Fn.tolist(this.getListAttribute('auditors'));
  }
  public set auditors(value: string[]) {
    this._auditors = value;
  }
  public resetAuditors() {
    this._auditors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorsInput() {
    return this._auditors;
  }

  // developers - computed: true, optional: true, required: false
  private _developers?: string[]; 
  public get developers() {
    return cdktf.Fn.tolist(this.getListAttribute('developers'));
  }
  public set developers(value: string[]) {
    this._developers = value;
  }
  public resetDevelopers() {
    this._developers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developersInput() {
    return this._developers;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // managers - computed: true, optional: true, required: false
  private _managers?: string[]; 
  public get managers() {
    return cdktf.Fn.tolist(this.getListAttribute('managers'));
  }
  public set managers(value: string[]) {
    this._managers = value;
  }
  public resetManagers() {
    this._managers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managersInput() {
    return this._managers;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auditors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditors),
      developers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._developers),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      managers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managers),
      space: cdktf.stringToTerraform(this._space),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auditors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      developers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._developers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
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
      managers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
