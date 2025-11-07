// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFmgSasemanagerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#address ObjectFmgSasemanagerSettings#address}
  */
  readonly address?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#adom ObjectFmgSasemanagerSettings#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#id ObjectFmgSasemanagerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#profile_group ObjectFmgSasemanagerSettings#profile_group}
  */
  readonly profileGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#scopetype ObjectFmgSasemanagerSettings#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#sync_address ObjectFmgSasemanagerSettings#sync_address}
  */
  readonly syncAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#sync_profile_group ObjectFmgSasemanagerSettings#sync_profile_group}
  */
  readonly syncProfileGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#sync_user ObjectFmgSasemanagerSettings#sync_user}
  */
  readonly syncUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#user ObjectFmgSasemanagerSettings#user}
  */
  readonly user?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings fortimanager_object_fmg_sasemanager_settings}
*/
export class ObjectFmgSasemanagerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fmg_sasemanager_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFmgSasemanagerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFmgSasemanagerSettings to import
  * @param importFromId The id of the existing ObjectFmgSasemanagerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFmgSasemanagerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fmg_sasemanager_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_sasemanager_settings fortimanager_object_fmg_sasemanager_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFmgSasemanagerSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFmgSasemanagerSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fmg_sasemanager_settings',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._adom = config.adom;
    this._id = config.id;
    this._profileGroup = config.profileGroup;
    this._scopetype = config.scopetype;
    this._syncAddress = config.syncAddress;
    this._syncProfileGroup = config.syncProfileGroup;
    this._syncUser = config.syncUser;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // profile_group - computed: true, optional: true, required: false
  private _profileGroup?: string[]; 
  public get profileGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('profile_group'));
  }
  public set profileGroup(value: string[]) {
    this._profileGroup = value;
  }
  public resetProfileGroup() {
    this._profileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGroupInput() {
    return this._profileGroup;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sync_address - computed: true, optional: true, required: false
  private _syncAddress?: string; 
  public get syncAddress() {
    return this.getStringAttribute('sync_address');
  }
  public set syncAddress(value: string) {
    this._syncAddress = value;
  }
  public resetSyncAddress() {
    this._syncAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncAddressInput() {
    return this._syncAddress;
  }

  // sync_profile_group - computed: true, optional: true, required: false
  private _syncProfileGroup?: string; 
  public get syncProfileGroup() {
    return this.getStringAttribute('sync_profile_group');
  }
  public set syncProfileGroup(value: string) {
    this._syncProfileGroup = value;
  }
  public resetSyncProfileGroup() {
    this._syncProfileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncProfileGroupInput() {
    return this._syncProfileGroup;
  }

  // sync_user - computed: true, optional: true, required: false
  private _syncUser?: string; 
  public get syncUser() {
    return this.getStringAttribute('sync_user');
  }
  public set syncUser(value: string) {
    this._syncUser = value;
  }
  public resetSyncUser() {
    this._syncUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUserInput() {
    return this._syncUser;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string[]; 
  public get user() {
    return cdktf.Fn.tolist(this.getListAttribute('user'));
  }
  public set user(value: string[]) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._address),
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      profile_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profileGroup),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sync_address: cdktf.stringToTerraform(this._syncAddress),
      sync_profile_group: cdktf.stringToTerraform(this._syncProfileGroup),
      sync_user: cdktf.stringToTerraform(this._syncUser),
      user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._address),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      profile_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profileGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_address: {
        value: cdktf.stringToHclTerraform(this._syncAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_profile_group: {
        value: cdktf.stringToHclTerraform(this._syncProfileGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_user: {
        value: cdktf.stringToHclTerraform(this._syncUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._user),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
