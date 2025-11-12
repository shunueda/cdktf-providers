// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account#id ServiceAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account#name ServiceAccount#name}
  */
  readonly name: string;
  /**
  * A list of the workplace permissions for the service account (or use `workplace_role`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account#workplace_permissions ServiceAccount#workplace_permissions}
  */
  readonly workplacePermissions?: string[];
  /**
  * The identifier of the workplace role for the service account (or use `workplace_permissions`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account#workplace_role ServiceAccount#workplace_role}
  */
  readonly workplaceRole?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account doppler_service_account}
*/
export class ServiceAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccount to import
  * @param importFromId The id of the existing ServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account doppler_service_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_service_account',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0',
        providerVersionConstraint: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._workplacePermissions = config.workplacePermissions;
    this._workplaceRole = config.workplaceRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // workplace_permissions - computed: false, optional: true, required: false
  private _workplacePermissions?: string[]; 
  public get workplacePermissions() {
    return this.getListAttribute('workplace_permissions');
  }
  public set workplacePermissions(value: string[]) {
    this._workplacePermissions = value;
  }
  public resetWorkplacePermissions() {
    this._workplacePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workplacePermissionsInput() {
    return this._workplacePermissions;
  }

  // workplace_role - computed: false, optional: true, required: false
  private _workplaceRole?: string; 
  public get workplaceRole() {
    return this.getStringAttribute('workplace_role');
  }
  public set workplaceRole(value: string) {
    this._workplaceRole = value;
  }
  public resetWorkplaceRole() {
    this._workplaceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workplaceRoleInput() {
    return this._workplaceRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      workplace_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workplacePermissions),
      workplace_role: cdktf.stringToTerraform(this._workplaceRole),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      workplace_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workplacePermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workplace_role: {
        value: cdktf.stringToHclTerraform(this._workplaceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
