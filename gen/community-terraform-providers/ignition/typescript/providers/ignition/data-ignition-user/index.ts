// https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#gecos DataIgnitionUser#gecos}
  */
  readonly gecos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#groups DataIgnitionUser#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#home_dir DataIgnitionUser#home_dir}
  */
  readonly homeDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#id DataIgnitionUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#name DataIgnitionUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#no_create_home DataIgnitionUser#no_create_home}
  */
  readonly noCreateHome?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#no_log_init DataIgnitionUser#no_log_init}
  */
  readonly noLogInit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#no_user_group DataIgnitionUser#no_user_group}
  */
  readonly noUserGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#password_hash DataIgnitionUser#password_hash}
  */
  readonly passwordHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#primary_group DataIgnitionUser#primary_group}
  */
  readonly primaryGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#shell DataIgnitionUser#shell}
  */
  readonly shell?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#ssh_authorized_keys DataIgnitionUser#ssh_authorized_keys}
  */
  readonly sshAuthorizedKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#system DataIgnitionUser#system}
  */
  readonly systemAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#uid DataIgnitionUser#uid}
  */
  readonly uid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user ignition_user}
*/
export class DataIgnitionUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionUser to import
  * @param importFromId The id of the existing DataIgnitionUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/user ignition_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionUserConfig) {
    super(scope, id, {
      terraformResourceType: 'ignition_user',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
        providerVersion: '2.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gecos = config.gecos;
    this._groups = config.groups;
    this._homeDir = config.homeDir;
    this._id = config.id;
    this._name = config.name;
    this._noCreateHome = config.noCreateHome;
    this._noLogInit = config.noLogInit;
    this._noUserGroup = config.noUserGroup;
    this._passwordHash = config.passwordHash;
    this._primaryGroup = config.primaryGroup;
    this._shell = config.shell;
    this._sshAuthorizedKeys = config.sshAuthorizedKeys;
    this._system = config.systemAttribute;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gecos - computed: false, optional: true, required: false
  private _gecos?: string; 
  public get gecos() {
    return this.getStringAttribute('gecos');
  }
  public set gecos(value: string) {
    this._gecos = value;
  }
  public resetGecos() {
    this._gecos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gecosInput() {
    return this._gecos;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // home_dir - computed: false, optional: true, required: false
  private _homeDir?: string; 
  public get homeDir() {
    return this.getStringAttribute('home_dir');
  }
  public set homeDir(value: string) {
    this._homeDir = value;
  }
  public resetHomeDir() {
    this._homeDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirInput() {
    return this._homeDir;
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

  // no_create_home - computed: false, optional: true, required: false
  private _noCreateHome?: boolean | cdktf.IResolvable; 
  public get noCreateHome() {
    return this.getBooleanAttribute('no_create_home');
  }
  public set noCreateHome(value: boolean | cdktf.IResolvable) {
    this._noCreateHome = value;
  }
  public resetNoCreateHome() {
    this._noCreateHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCreateHomeInput() {
    return this._noCreateHome;
  }

  // no_log_init - computed: false, optional: true, required: false
  private _noLogInit?: boolean | cdktf.IResolvable; 
  public get noLogInit() {
    return this.getBooleanAttribute('no_log_init');
  }
  public set noLogInit(value: boolean | cdktf.IResolvable) {
    this._noLogInit = value;
  }
  public resetNoLogInit() {
    this._noLogInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLogInitInput() {
    return this._noLogInit;
  }

  // no_user_group - computed: false, optional: true, required: false
  private _noUserGroup?: boolean | cdktf.IResolvable; 
  public get noUserGroup() {
    return this.getBooleanAttribute('no_user_group');
  }
  public set noUserGroup(value: boolean | cdktf.IResolvable) {
    this._noUserGroup = value;
  }
  public resetNoUserGroup() {
    this._noUserGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUserGroupInput() {
    return this._noUserGroup;
  }

  // password_hash - computed: false, optional: true, required: false
  private _passwordHash?: string; 
  public get passwordHash() {
    return this.getStringAttribute('password_hash');
  }
  public set passwordHash(value: string) {
    this._passwordHash = value;
  }
  public resetPasswordHash() {
    this._passwordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash;
  }

  // primary_group - computed: false, optional: true, required: false
  private _primaryGroup?: string; 
  public get primaryGroup() {
    return this.getStringAttribute('primary_group');
  }
  public set primaryGroup(value: string) {
    this._primaryGroup = value;
  }
  public resetPrimaryGroup() {
    this._primaryGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryGroupInput() {
    return this._primaryGroup;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // ssh_authorized_keys - computed: false, optional: true, required: false
  private _sshAuthorizedKeys?: string[]; 
  public get sshAuthorizedKeys() {
    return this.getListAttribute('ssh_authorized_keys');
  }
  public set sshAuthorizedKeys(value: string[]) {
    this._sshAuthorizedKeys = value;
  }
  public resetSshAuthorizedKeys() {
    this._sshAuthorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthorizedKeysInput() {
    return this._sshAuthorizedKeys;
  }

  // system - computed: false, optional: true, required: false
  private _system?: boolean | cdktf.IResolvable; 
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }
  public set systemAttribute(value: boolean | cdktf.IResolvable) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gecos: cdktf.stringToTerraform(this._gecos),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      home_dir: cdktf.stringToTerraform(this._homeDir),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      no_create_home: cdktf.booleanToTerraform(this._noCreateHome),
      no_log_init: cdktf.booleanToTerraform(this._noLogInit),
      no_user_group: cdktf.booleanToTerraform(this._noUserGroup),
      password_hash: cdktf.stringToTerraform(this._passwordHash),
      primary_group: cdktf.stringToTerraform(this._primaryGroup),
      shell: cdktf.stringToTerraform(this._shell),
      ssh_authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshAuthorizedKeys),
      system: cdktf.booleanToTerraform(this._system),
      uid: cdktf.numberToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gecos: {
        value: cdktf.stringToHclTerraform(this._gecos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      home_dir: {
        value: cdktf.stringToHclTerraform(this._homeDir),
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
      no_create_home: {
        value: cdktf.booleanToHclTerraform(this._noCreateHome),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_log_init: {
        value: cdktf.booleanToHclTerraform(this._noLogInit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_user_group: {
        value: cdktf.booleanToHclTerraform(this._noUserGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_hash: {
        value: cdktf.stringToHclTerraform(this._passwordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_group: {
        value: cdktf.stringToHclTerraform(this._primaryGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shell: {
        value: cdktf.stringToHclTerraform(this._shell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_authorized_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshAuthorizedKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      system: {
        value: cdktf.booleanToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
