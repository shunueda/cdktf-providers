// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_writepasswdprofiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminProfileWritepasswdprofilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_writepasswdprofiles#id SystemAdminProfileWritepasswdprofiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_writepasswdprofiles#profile SystemAdminProfileWritepasswdprofiles#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_writepasswdprofiles#profileid SystemAdminProfileWritepasswdprofiles#profileid}
  */
  readonly profileid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_writepasswdprofiles fortimanager_system_admin_profile_writepasswdprofiles}
*/
export class SystemAdminProfileWritepasswdprofiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_admin_profile_writepasswdprofiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminProfileWritepasswdprofiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminProfileWritepasswdprofiles to import
  * @param importFromId The id of the existing SystemAdminProfileWritepasswdprofiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_writepasswdprofiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminProfileWritepasswdprofiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_admin_profile_writepasswdprofiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_profile_writepasswdprofiles fortimanager_system_admin_profile_writepasswdprofiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminProfileWritepasswdprofilesConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAdminProfileWritepasswdprofilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_admin_profile_writepasswdprofiles',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._profile = config.profile;
    this._profileid = config.profileid;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // profileid - computed: false, optional: true, required: false
  private _profileid?: string; 
  public get profileid() {
    return this.getStringAttribute('profileid');
  }
  public set profileid(value: string) {
    this._profileid = value;
  }
  public resetProfileid() {
    this._profileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileidInput() {
    return this._profileid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
      profileid: cdktf.stringToTerraform(this._profileid),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profileid: {
        value: cdktf.stringToHclTerraform(this._profileid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
