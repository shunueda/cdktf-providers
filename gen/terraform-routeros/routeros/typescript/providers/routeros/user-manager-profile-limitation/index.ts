// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerProfileLimitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#___path___ UserManagerProfileLimitation#___path___}
  */
  readonly path?: string;
  /**
  * Time of the day when the limitation should take place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#from_time UserManagerProfileLimitation#from_time}
  */
  readonly fromTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#id UserManagerProfileLimitation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The limitation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#limitation UserManagerProfileLimitation#limitation}
  */
  readonly limitation: string;
  /**
  * The profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#profile UserManagerProfileLimitation#profile}
  */
  readonly profile: string;
  /**
  * Time of the day when the limitation should end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#till_time UserManagerProfileLimitation#till_time}
  */
  readonly tillTime?: string;
  /**
  * Days of the week when the limitation is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#weekdays UserManagerProfileLimitation#weekdays}
  */
  readonly weekdays?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation routeros_user_manager_profile_limitation}
*/
export class UserManagerProfileLimitation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_profile_limitation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerProfileLimitation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerProfileLimitation to import
  * @param importFromId The id of the existing UserManagerProfileLimitation that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerProfileLimitation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_profile_limitation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/user_manager_profile_limitation routeros_user_manager_profile_limitation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerProfileLimitationConfig
  */
  public constructor(scope: Construct, id: string, config: UserManagerProfileLimitationConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_profile_limitation',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._fromTime = config.fromTime;
    this._id = config.id;
    this._limitation = config.limitation;
    this._profile = config.profile;
    this._tillTime = config.tillTime;
    this._weekdays = config.weekdays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // from_time - computed: false, optional: true, required: false
  private _fromTime?: string; 
  public get fromTime() {
    return this.getStringAttribute('from_time');
  }
  public set fromTime(value: string) {
    this._fromTime = value;
  }
  public resetFromTime() {
    this._fromTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromTimeInput() {
    return this._fromTime;
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

  // limitation - computed: false, optional: false, required: true
  private _limitation?: string; 
  public get limitation() {
    return this.getStringAttribute('limitation');
  }
  public set limitation(value: string) {
    this._limitation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitationInput() {
    return this._limitation;
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

  // till_time - computed: false, optional: true, required: false
  private _tillTime?: string; 
  public get tillTime() {
    return this.getStringAttribute('till_time');
  }
  public set tillTime(value: string) {
    this._tillTime = value;
  }
  public resetTillTime() {
    this._tillTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tillTimeInput() {
    return this._tillTime;
  }

  // weekdays - computed: false, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('weekdays'));
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      from_time: cdktf.stringToTerraform(this._fromTime),
      id: cdktf.stringToTerraform(this._id),
      limitation: cdktf.stringToTerraform(this._limitation),
      profile: cdktf.stringToTerraform(this._profile),
      till_time: cdktf.stringToTerraform(this._tillTime),
      weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._weekdays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_time: {
        value: cdktf.stringToHclTerraform(this._fromTime),
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
      limitation: {
        value: cdktf.stringToHclTerraform(this._limitation),
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
      till_time: {
        value: cdktf.stringToHclTerraform(this._tillTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weekdays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._weekdays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
