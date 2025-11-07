// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_md_permissions_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementMdPermissionsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_md_permissions_profile#id DataCheckpointManagementMdPermissionsProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_md_permissions_profile#name DataCheckpointManagementMdPermissionsProfile#name}
  */
  readonly name?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_md_permissions_profile#uid DataCheckpointManagementMdPermissionsProfile#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_md_permissions_profile checkpoint_management_md_permissions_profile}
*/
export class DataCheckpointManagementMdPermissionsProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_md_permissions_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementMdPermissionsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementMdPermissionsProfile to import
  * @param importFromId The id of the existing DataCheckpointManagementMdPermissionsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_md_permissions_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementMdPermissionsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_md_permissions_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_md_permissions_profile checkpoint_management_md_permissions_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementMdPermissionsProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementMdPermissionsProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_md_permissions_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cme_operations - computed: true, optional: false, required: false
  public get cmeOperations() {
    return this.getStringAttribute('cme_operations');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // default_profile_global_domains - computed: true, optional: false, required: false
  public get defaultProfileGlobalDomains() {
    return this.getStringAttribute('default_profile_global_domains');
  }

  // default_profile_local_domains - computed: true, optional: false, required: false
  public get defaultProfileLocalDomains() {
    return this.getStringAttribute('default_profile_local_domains');
  }

  // domains_to_process - computed: true, optional: false, required: false
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }

  // enable_default_profile_for_global_domains - computed: true, optional: false, required: false
  public get enableDefaultProfileForGlobalDomains() {
    return this.getBooleanAttribute('enable_default_profile_for_global_domains');
  }

  // enable_default_profile_for_local_domains - computed: true, optional: false, required: false
  public get enableDefaultProfileForLocalDomains() {
    return this.getBooleanAttribute('enable_default_profile_for_local_domains');
  }

  // global_vpn_management - computed: true, optional: false, required: false
  public get globalVpnManagement() {
    return this.getBooleanAttribute('global_vpn_management');
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

  // manage_admins - computed: true, optional: false, required: false
  public get manageAdmins() {
    return this.getBooleanAttribute('manage_admins');
  }

  // manage_global_assignments - computed: true, optional: false, required: false
  public get manageGlobalAssignments() {
    return this.getBooleanAttribute('manage_global_assignments');
  }

  // manage_sessions - computed: true, optional: false, required: false
  public get manageSessions() {
    return this.getBooleanAttribute('manage_sessions');
  }

  // management_api_login - computed: true, optional: false, required: false
  public get managementApiLogin() {
    return this.getBooleanAttribute('management_api_login');
  }

  // mds_provisioning - computed: true, optional: false, required: false
  public get mdsProvisioning() {
    return this.getBooleanAttribute('mds_provisioning');
  }

  // name - computed: false, optional: true, required: false
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

  // permission_level - computed: true, optional: false, required: false
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // view_global_objects_in_domain - computed: true, optional: false, required: false
  public get viewGlobalObjectsInDomain() {
    return this.getBooleanAttribute('view_global_objects_in_domain');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
