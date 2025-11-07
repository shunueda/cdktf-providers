// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Fortanix DSM group object id to be mapped to the app by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#default_group App#default_group}
  */
  readonly defaultGroup: string;
  /**
  * The description of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#description App#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#id App#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To modify the permissions of any existing group that includes default group. Please refer the example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#mod_group_permissions App#mod_group_permissions}
  */
  readonly modGroupPermissions?: { [key: string]: string };
  /**
  * The Fortanix DSM App name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#name App#name}
  */
  readonly name: string;
  /**
  * Set this if you want to rotate/regenerate the API key. The values can be set as true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#new_credential App#new_credential}
  */
  readonly newCredential?: boolean | cdktf.IResolvable;
  /**
  * The Fortanix DSM group object id the app needs to be assigned to. If you want to delete the existing groups from an app, remove the ids during update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#other_group App#other_group}
  */
  readonly otherGroup?: string[];
  /**
  * Incase if you want to change the default permissions of a new group that includes default group. Please refer the example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#other_group_permissions App#other_group_permissions}
  */
  readonly otherGroupPermissions?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app dsm_app}
*/
export class App extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a App resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the App to import
  * @param importFromId The id of the existing App that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the App to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/app dsm_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppConfig
  */
  public constructor(scope: Construct, id: string, config: AppConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_app',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36'
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
    this._newCredential = config.newCredential;
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

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
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

  // new_credential - computed: false, optional: true, required: false
  private _newCredential?: boolean | cdktf.IResolvable; 
  public get newCredential() {
    return this.getBooleanAttribute('new_credential');
  }
  public set newCredential(value: boolean | cdktf.IResolvable) {
    this._newCredential = value;
  }
  public resetNewCredential() {
    this._newCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newCredentialInput() {
    return this._newCredential;
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
      new_credential: cdktf.booleanToTerraform(this._newCredential),
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
      new_credential: {
        value: cdktf.booleanToHclTerraform(this._newCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
