// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpEkmSaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Fortanix DSM group ID to be mapped to the app by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#default_group GcpEkmSa#default_group}
  */
  readonly defaultGroup: string;
  /**
  * The description of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#description GcpEkmSa#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#id GcpEkmSa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To modify the permissions of any existing group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#mod_group_permissions GcpEkmSa#mod_group_permissions}
  */
  readonly modGroupPermissions?: { [key: string]: string };
  /**
  * The Google service account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#name GcpEkmSa#name}
  */
  readonly name: string;
  /**
  * The Fortanix DSM group object ID the app needs to be assigned to. If you want to delete the existing groups from an app, remove the IDs during update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#other_group GcpEkmSa#other_group}
  */
  readonly otherGroup?: string[];
  /**
  * If you want to change the default permissions of a new group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#other_group_permissions GcpEkmSa#other_group_permissions}
  */
  readonly otherGroupPermissions?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa dsm_gcp_ekm_sa}
*/
export class GcpEkmSa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_gcp_ekm_sa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpEkmSa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpEkmSa to import
  * @param importFromId The id of the existing GcpEkmSa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpEkmSa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_gcp_ekm_sa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/gcp_ekm_sa dsm_gcp_ekm_sa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpEkmSaConfig
  */
  public constructor(scope: Construct, id: string, config: GcpEkmSaConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_gcp_ekm_sa',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36',
        providerVersionConstraint: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGroup = config.defaultGroup;
    this._description = config.description;
    this._id = config.id;
    this._modGroupPermissions = config.modGroupPermissions;
    this._name = config.name;
    this._otherGroup = config.otherGroup;
    this._otherGroupPermissions = config.otherGroupPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acct_id - computed: true, optional: false, required: false
  public get acctId() {
    return this.getStringAttribute('acct_id');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // creator - computed: true, optional: false, required: false
  private _creator = new cdktf.StringMap(this, "creator");
  public get creator() {
    return this._creator;
  }

  // default_group - computed: false, optional: false, required: true
  private _defaultGroup?: string; 
  public get defaultGroup() {
    return this.getStringAttribute('default_group');
  }
  public set defaultGroup(value: string) {
    this._defaultGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGroupInput() {
    return this._defaultGroup;
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

  // mod_group_permissions - computed: false, optional: true, required: false
  private _modGroupPermissions?: { [key: string]: string }; 
  public get modGroupPermissions() {
    return this.getStringMapAttribute('mod_group_permissions');
  }
  public set modGroupPermissions(value: { [key: string]: string }) {
    this._modGroupPermissions = value;
  }
  public resetModGroupPermissions() {
    this._modGroupPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modGroupPermissionsInput() {
    return this._modGroupPermissions;
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

  // other_group - computed: false, optional: true, required: false
  private _otherGroup?: string[]; 
  public get otherGroup() {
    return this.getListAttribute('other_group');
  }
  public set otherGroup(value: string[]) {
    this._otherGroup = value;
  }
  public resetOtherGroup() {
    this._otherGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherGroupInput() {
    return this._otherGroup;
  }

  // other_group_permissions - computed: false, optional: true, required: false
  private _otherGroupPermissions?: { [key: string]: string }; 
  public get otherGroupPermissions() {
    return this.getStringMapAttribute('other_group_permissions');
  }
  public set otherGroupPermissions(value: { [key: string]: string }) {
    this._otherGroupPermissions = value;
  }
  public resetOtherGroupPermissions() {
    this._otherGroupPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherGroupPermissionsInput() {
    return this._otherGroupPermissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_group: cdktf.stringToTerraform(this._defaultGroup),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mod_group_permissions: cdktf.hashMapper(cdktf.stringToTerraform)(this._modGroupPermissions),
      name: cdktf.stringToTerraform(this._name),
      other_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherGroup),
      other_group_permissions: cdktf.hashMapper(cdktf.stringToTerraform)(this._otherGroupPermissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_group: {
        value: cdktf.stringToHclTerraform(this._defaultGroup),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_group_permissions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._modGroupPermissions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._otherGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      other_group_permissions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._otherGroupPermissions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
