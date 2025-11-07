// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Splunkbase session token for operations like install and update that require login. Use auth or session when installing or updating an app through Splunkbase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#auth AppsLocal#auth}
  */
  readonly auth?: string;
  /**
  * For apps posted to Splunkbase, use your Splunk account username. For internal apps, use your full name and contact information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#author AppsLocal#author}
  */
  readonly author?: string;
  /**
  * Custom setup completion indicator.true = Custom app setup complete.false = Custom app setup not complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#configured AppsLocal#configured}
  */
  readonly configured?: boolean | cdktf.IResolvable;
  /**
  * Short app description also displayed below the app title in Splunk Web Launcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#description AppsLocal#description}
  */
  readonly description?: string;
  /**
  * Custom app name. Required when installing an app from a file where filename is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#explicit_appname AppsLocal#explicit_appname}
  */
  readonly explicitAppname?: string;
  /**
  * Indicates whether to use the name value as the app source location.true indicates that name is a path to a file to install.false indicates that name is the literal app name and that the app is created from Splunkbase using a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#filename AppsLocal#filename}
  */
  readonly filename?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#id AppsLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * App name displayed in Splunk Web, from five to 80 characters and excluding the prefix "Splunk For".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#label AppsLocal#label}
  */
  readonly label?: string;
  /**
  * Required. Literal app name or path for the file to install, depending on the value of filename.filename = false indicates that name is the literal app name and that the app is created from Splunkbase using a template.filename = true indicates that name is the URL or path to the local .tar, .tgz or .spl file. If name is the Splunkbase URL, set auth or session to authenticate the request. The app folder name cannot include spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#name AppsLocal#name}
  */
  readonly name: string;
  /**
  * Login session token for installing or updating an app on Splunkbase. Alternatively, use auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#session AppsLocal#session}
  */
  readonly session?: string;
  /**
  * File-based update indication: true specifies that filename should be used to update an existing app. If not specified, update defaults to false, which indicates that filename should not be used to update an existing app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#update AppsLocal#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
  /**
  * App version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#version AppsLocal#version}
  */
  readonly version?: string;
  /**
  * Indicates whether the app is visible and navigable from Splunk Web.true = App is visible and navigable.false = App is not visible or navigable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#visible AppsLocal#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#acl AppsLocal#acl}
  */
  readonly acl?: AppsLocalAcl;
}
export interface AppsLocalAcl {
  /**
  * The app context for the resource. Required for updating saved search ACL properties. Allowed values are:The name of an app and system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#app AppsLocal#app}
  */
  readonly app?: string;
  /**
  * Indicates if the active user can change permissions for this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#can_change_perms AppsLocal#can_change_perms}
  */
  readonly canChangePerms?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to app level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#can_share_app AppsLocal#can_share_app}
  */
  readonly canShareApp?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to system level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#can_share_global AppsLocal#can_share_global}
  */
  readonly canShareGlobal?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to user level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#can_share_user AppsLocal#can_share_user}
  */
  readonly canShareUser?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can edit this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#can_write AppsLocal#can_write}
  */
  readonly canWrite?: boolean | cdktf.IResolvable;
  /**
  * User name of resource owner. Defaults to the resource creator. Required for updating any knowledge object ACL properties.nobody = All users may access the resource, but write access to the resource might be restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#owner AppsLocal#owner}
  */
  readonly owner?: string;
  /**
  * Properties that indicate resource read permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#read AppsLocal#read}
  */
  readonly read?: string[];
  /**
  * Indicates whether an admin or user with sufficient permissions can delete the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#removable AppsLocal#removable}
  */
  readonly removable?: boolean | cdktf.IResolvable;
  /**
  * Indicates how the resource is shared. Required for updating any knowledge object ACL properties.app: Shared within a specific appglobal: (Default) Shared globally to all apps.user: Private to a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#sharing AppsLocal#sharing}
  */
  readonly sharing?: string;
  /**
  * Properties that indicate resource write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#write AppsLocal#write}
  */
  readonly write?: string[];
}

export function appsLocalAclToTerraform(struct?: AppsLocalAclOutputReference | AppsLocalAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    can_change_perms: cdktf.booleanToTerraform(struct!.canChangePerms),
    can_share_app: cdktf.booleanToTerraform(struct!.canShareApp),
    can_share_global: cdktf.booleanToTerraform(struct!.canShareGlobal),
    can_share_user: cdktf.booleanToTerraform(struct!.canShareUser),
    can_write: cdktf.booleanToTerraform(struct!.canWrite),
    owner: cdktf.stringToTerraform(struct!.owner),
    read: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.read),
    removable: cdktf.booleanToTerraform(struct!.removable),
    sharing: cdktf.stringToTerraform(struct!.sharing),
    write: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.write),
  }
}


export function appsLocalAclToHclTerraform(struct?: AppsLocalAclOutputReference | AppsLocalAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_change_perms: {
      value: cdktf.booleanToHclTerraform(struct!.canChangePerms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_app: {
      value: cdktf.booleanToHclTerraform(struct!.canShareApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_global: {
      value: cdktf.booleanToHclTerraform(struct!.canShareGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_user: {
      value: cdktf.booleanToHclTerraform(struct!.canShareUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_write: {
      value: cdktf.booleanToHclTerraform(struct!.canWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.read),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    removable: {
      value: cdktf.booleanToHclTerraform(struct!.removable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sharing: {
      value: cdktf.stringToHclTerraform(struct!.sharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.write),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsLocalAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsLocalAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._canChangePerms !== undefined) {
      hasAnyValues = true;
      internalValueResult.canChangePerms = this._canChangePerms;
    }
    if (this._canShareApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareApp = this._canShareApp;
    }
    if (this._canShareGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareGlobal = this._canShareGlobal;
    }
    if (this._canShareUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareUser = this._canShareUser;
    }
    if (this._canWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.canWrite = this._canWrite;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._removable !== undefined) {
      hasAnyValues = true;
      internalValueResult.removable = this._removable;
    }
    if (this._sharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsLocalAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._app = undefined;
      this._canChangePerms = undefined;
      this._canShareApp = undefined;
      this._canShareGlobal = undefined;
      this._canShareUser = undefined;
      this._canWrite = undefined;
      this._owner = undefined;
      this._read = undefined;
      this._removable = undefined;
      this._sharing = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._app = value.app;
      this._canChangePerms = value.canChangePerms;
      this._canShareApp = value.canShareApp;
      this._canShareGlobal = value.canShareGlobal;
      this._canShareUser = value.canShareUser;
      this._canWrite = value.canWrite;
      this._owner = value.owner;
      this._read = value.read;
      this._removable = value.removable;
      this._sharing = value.sharing;
      this._write = value.write;
    }
  }

  // app - computed: true, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // can_change_perms - computed: true, optional: true, required: false
  private _canChangePerms?: boolean | cdktf.IResolvable; 
  public get canChangePerms() {
    return this.getBooleanAttribute('can_change_perms');
  }
  public set canChangePerms(value: boolean | cdktf.IResolvable) {
    this._canChangePerms = value;
  }
  public resetCanChangePerms() {
    this._canChangePerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canChangePermsInput() {
    return this._canChangePerms;
  }

  // can_share_app - computed: true, optional: true, required: false
  private _canShareApp?: boolean | cdktf.IResolvable; 
  public get canShareApp() {
    return this.getBooleanAttribute('can_share_app');
  }
  public set canShareApp(value: boolean | cdktf.IResolvable) {
    this._canShareApp = value;
  }
  public resetCanShareApp() {
    this._canShareApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareAppInput() {
    return this._canShareApp;
  }

  // can_share_global - computed: true, optional: true, required: false
  private _canShareGlobal?: boolean | cdktf.IResolvable; 
  public get canShareGlobal() {
    return this.getBooleanAttribute('can_share_global');
  }
  public set canShareGlobal(value: boolean | cdktf.IResolvable) {
    this._canShareGlobal = value;
  }
  public resetCanShareGlobal() {
    this._canShareGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareGlobalInput() {
    return this._canShareGlobal;
  }

  // can_share_user - computed: true, optional: true, required: false
  private _canShareUser?: boolean | cdktf.IResolvable; 
  public get canShareUser() {
    return this.getBooleanAttribute('can_share_user');
  }
  public set canShareUser(value: boolean | cdktf.IResolvable) {
    this._canShareUser = value;
  }
  public resetCanShareUser() {
    this._canShareUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareUserInput() {
    return this._canShareUser;
  }

  // can_write - computed: true, optional: true, required: false
  private _canWrite?: boolean | cdktf.IResolvable; 
  public get canWrite() {
    return this.getBooleanAttribute('can_write');
  }
  public set canWrite(value: boolean | cdktf.IResolvable) {
    this._canWrite = value;
  }
  public resetCanWrite() {
    this._canWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canWriteInput() {
    return this._canWrite;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // read - computed: true, optional: true, required: false
  private _read?: string[]; 
  public get read() {
    return this.getListAttribute('read');
  }
  public set read(value: string[]) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // removable - computed: true, optional: true, required: false
  private _removable?: boolean | cdktf.IResolvable; 
  public get removable() {
    return this.getBooleanAttribute('removable');
  }
  public set removable(value: boolean | cdktf.IResolvable) {
    this._removable = value;
  }
  public resetRemovable() {
    this._removable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removableInput() {
    return this._removable;
  }

  // sharing - computed: true, optional: true, required: false
  private _sharing?: string; 
  public get sharing() {
    return this.getStringAttribute('sharing');
  }
  public set sharing(value: string) {
    this._sharing = value;
  }
  public resetSharing() {
    this._sharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing;
  }

  // write - computed: true, optional: true, required: false
  private _write?: string[]; 
  public get write() {
    return this.getListAttribute('write');
  }
  public set write(value: string[]) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local splunk_apps_local}
*/
export class AppsLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_apps_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsLocal to import
  * @param importFromId The id of the existing AppsLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_apps_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/apps_local splunk_apps_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsLocalConfig
  */
  public constructor(scope: Construct, id: string, config: AppsLocalConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_apps_local',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auth = config.auth;
    this._author = config.author;
    this._configured = config.configured;
    this._description = config.description;
    this._explicitAppname = config.explicitAppname;
    this._filename = config.filename;
    this._id = config.id;
    this._label = config.label;
    this._name = config.name;
    this._session = config.session;
    this._update = config.update;
    this._version = config.version;
    this._visible = config.visible;
    this._acl.internalValue = config.acl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // author - computed: true, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // configured - computed: true, optional: true, required: false
  private _configured?: boolean | cdktf.IResolvable; 
  public get configured() {
    return this.getBooleanAttribute('configured');
  }
  public set configured(value: boolean | cdktf.IResolvable) {
    this._configured = value;
  }
  public resetConfigured() {
    this._configured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredInput() {
    return this._configured;
  }

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

  // explicit_appname - computed: false, optional: true, required: false
  private _explicitAppname?: string; 
  public get explicitAppname() {
    return this.getStringAttribute('explicit_appname');
  }
  public set explicitAppname(value: string) {
    this._explicitAppname = value;
  }
  public resetExplicitAppname() {
    this._explicitAppname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitAppnameInput() {
    return this._explicitAppname;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: boolean | cdktf.IResolvable; 
  public get filename() {
    return this.getBooleanAttribute('filename');
  }
  public set filename(value: boolean | cdktf.IResolvable) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // session - computed: false, optional: true, required: false
  private _session?: string; 
  public get session() {
    return this.getStringAttribute('session');
  }
  public set session(value: string) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // visible - computed: true, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new AppsLocalAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: AppsLocalAcl) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      author: cdktf.stringToTerraform(this._author),
      configured: cdktf.booleanToTerraform(this._configured),
      description: cdktf.stringToTerraform(this._description),
      explicit_appname: cdktf.stringToTerraform(this._explicitAppname),
      filename: cdktf.booleanToTerraform(this._filename),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      session: cdktf.stringToTerraform(this._session),
      update: cdktf.booleanToTerraform(this._update),
      version: cdktf.stringToTerraform(this._version),
      visible: cdktf.booleanToTerraform(this._visible),
      acl: appsLocalAclToTerraform(this._acl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configured: {
        value: cdktf.booleanToHclTerraform(this._configured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      explicit_appname: {
        value: cdktf.stringToHclTerraform(this._explicitAppname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.booleanToHclTerraform(this._filename),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      session: {
        value: cdktf.stringToHclTerraform(this._session),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update: {
        value: cdktf.booleanToHclTerraform(this._update),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visible: {
        value: cdktf.booleanToHclTerraform(this._visible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acl: {
        value: appsLocalAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsLocalAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
