// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentPermissionSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The incident permission set description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set#description IncidentPermissionSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set#id IncidentPermissionSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The incident permission set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set#name IncidentPermissionSet#name}
  */
  readonly name: string;
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set#private_incident_permissions IncidentPermissionSet#private_incident_permissions}
  */
  readonly privateIncidentPermissions?: string[];
  /**
  * Value must be one of `create`, `read`, `update`, `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set#public_incident_permissions IncidentPermissionSet#public_incident_permissions}
  */
  readonly publicIncidentPermissions?: string[];
  /**
  * The incident permission set slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set#slug IncidentPermissionSet#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set rootly_incident_permission_set}
*/
export class IncidentPermissionSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_incident_permission_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentPermissionSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentPermissionSet to import
  * @param importFromId The id of the existing IncidentPermissionSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentPermissionSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_incident_permission_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/incident_permission_set rootly_incident_permission_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentPermissionSetConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentPermissionSetConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_incident_permission_set',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7',
        providerVersionConstraint: '4.3.7'
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
    this._name = config.name;
    this._privateIncidentPermissions = config.privateIncidentPermissions;
    this._publicIncidentPermissions = config.publicIncidentPermissions;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // private_incident_permissions - computed: true, optional: true, required: false
  private _privateIncidentPermissions?: string[]; 
  public get privateIncidentPermissions() {
    return this.getListAttribute('private_incident_permissions');
  }
  public set privateIncidentPermissions(value: string[]) {
    this._privateIncidentPermissions = value;
  }
  public resetPrivateIncidentPermissions() {
    this._privateIncidentPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIncidentPermissionsInput() {
    return this._privateIncidentPermissions;
  }

  // public_incident_permissions - computed: true, optional: true, required: false
  private _publicIncidentPermissions?: string[]; 
  public get publicIncidentPermissions() {
    return this.getListAttribute('public_incident_permissions');
  }
  public set publicIncidentPermissions(value: string[]) {
    this._publicIncidentPermissions = value;
  }
  public resetPublicIncidentPermissions() {
    this._publicIncidentPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIncidentPermissionsInput() {
    return this._publicIncidentPermissions;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_incident_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIncidentPermissions),
      public_incident_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicIncidentPermissions),
      slug: cdktf.stringToTerraform(this._slug),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_incident_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIncidentPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_incident_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicIncidentPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
