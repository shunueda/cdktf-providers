// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InputsMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify a regular expression for a file path. The file path that matches this regular expression is not indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#blacklist InputsMonitor#blacklist}
  */
  readonly blacklist?: string;
  /**
  * A string that modifies the file tracking identity for files in this input. The magic value <SOURCE> invokes special behavior (see admin documentation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#crc_salt InputsMonitor#crc_salt}
  */
  readonly crcSalt?: string;
  /**
  * Indicates if input monitoring is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#disabled InputsMonitor#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * If set to true, files that are seen for the first time is read from the end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#follow_tail InputsMonitor#follow_tail}
  */
  readonly followTail?: boolean | cdktf.IResolvable;
  /**
  * The value to populate in the host field for events from this data input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#host InputsMonitor#host}
  */
  readonly host?: string;
  /**
  * Specify a regular expression for a file path. If the path for a file matches this regular expression, the captured value is used to populate the host field for events from this data input. The regular expression must have one capture group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#host_regex InputsMonitor#host_regex}
  */
  readonly hostRegex?: string;
  /**
  * Use the specified slash-separate segment of the filepath as the host field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#host_segment InputsMonitor#host_segment}
  */
  readonly hostSegment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#id InputsMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify a time value. If the modification time of a file being monitored falls outside of this rolling time window, the file is no longer being monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#ignore_older_than InputsMonitor#ignore_older_than}
  */
  readonly ignoreOlderThan?: string;
  /**
  * Which index events from this input should be stored in. Defaults to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#index InputsMonitor#index}
  */
  readonly index?: string;
  /**
  * The file or directory path to monitor on the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#name InputsMonitor#name}
  */
  readonly name: string;
  /**
  * Setting this to false prevents monitoring of any subdirectories encountered within this data input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#recursive InputsMonitor#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * The value to populate in the source field for events from this data input. The same source should not be used for multiple data inputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#rename_source InputsMonitor#rename_source}
  */
  readonly renameSource?: string;
  /**
  * The value to populate in the sourcetype field for incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#sourcetype InputsMonitor#sourcetype}
  */
  readonly sourcetype?: string;
  /**
  * When Splunk software reaches the end of a file that is being read, the file is kept open for a minimum of the number of seconds specified in this value. After this period has elapsed, the file is checked again for more data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#time_before_close InputsMonitor#time_before_close}
  */
  readonly timeBeforeClose?: number;
  /**
  * Specify a regular expression for a file path. Only file paths that match this regular expression are indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#whitelist InputsMonitor#whitelist}
  */
  readonly whitelist?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#acl InputsMonitor#acl}
  */
  readonly acl?: InputsMonitorAcl;
}
export interface InputsMonitorAcl {
  /**
  * The app context for the resource. Required for updating saved search ACL properties. Allowed values are:The name of an app and system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#app InputsMonitor#app}
  */
  readonly app?: string;
  /**
  * Indicates if the active user can change permissions for this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#can_change_perms InputsMonitor#can_change_perms}
  */
  readonly canChangePerms?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to app level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#can_share_app InputsMonitor#can_share_app}
  */
  readonly canShareApp?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to system level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#can_share_global InputsMonitor#can_share_global}
  */
  readonly canShareGlobal?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to user level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#can_share_user InputsMonitor#can_share_user}
  */
  readonly canShareUser?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can edit this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#can_write InputsMonitor#can_write}
  */
  readonly canWrite?: boolean | cdktf.IResolvable;
  /**
  * User name of resource owner. Defaults to the resource creator. Required for updating any knowledge object ACL properties.nobody = All users may access the resource, but write access to the resource might be restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#owner InputsMonitor#owner}
  */
  readonly owner?: string;
  /**
  * Properties that indicate resource read permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#read InputsMonitor#read}
  */
  readonly read?: string[];
  /**
  * Indicates whether an admin or user with sufficient permissions can delete the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#removable InputsMonitor#removable}
  */
  readonly removable?: boolean | cdktf.IResolvable;
  /**
  * Indicates how the resource is shared. Required for updating any knowledge object ACL properties.app: Shared within a specific appglobal: (Default) Shared globally to all apps.user: Private to a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#sharing InputsMonitor#sharing}
  */
  readonly sharing?: string;
  /**
  * Properties that indicate resource write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#write InputsMonitor#write}
  */
  readonly write?: string[];
}

export function inputsMonitorAclToTerraform(struct?: InputsMonitorAclOutputReference | InputsMonitorAcl): any {
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


export function inputsMonitorAclToHclTerraform(struct?: InputsMonitorAclOutputReference | InputsMonitorAcl): any {
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

export class InputsMonitorAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsMonitorAcl | undefined {
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

  public set internalValue(value: InputsMonitorAcl | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor splunk_inputs_monitor}
*/
export class InputsMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_inputs_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InputsMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InputsMonitor to import
  * @param importFromId The id of the existing InputsMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InputsMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_inputs_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_monitor splunk_inputs_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InputsMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: InputsMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_inputs_monitor',
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
    this._blacklist = config.blacklist;
    this._crcSalt = config.crcSalt;
    this._disabled = config.disabled;
    this._followTail = config.followTail;
    this._host = config.host;
    this._hostRegex = config.hostRegex;
    this._hostSegment = config.hostSegment;
    this._id = config.id;
    this._ignoreOlderThan = config.ignoreOlderThan;
    this._index = config.index;
    this._name = config.name;
    this._recursive = config.recursive;
    this._renameSource = config.renameSource;
    this._sourcetype = config.sourcetype;
    this._timeBeforeClose = config.timeBeforeClose;
    this._whitelist = config.whitelist;
    this._acl.internalValue = config.acl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blacklist - computed: true, optional: true, required: false
  private _blacklist?: string; 
  public get blacklist() {
    return this.getStringAttribute('blacklist');
  }
  public set blacklist(value: string) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // crc_salt - computed: true, optional: true, required: false
  private _crcSalt?: string; 
  public get crcSalt() {
    return this.getStringAttribute('crc_salt');
  }
  public set crcSalt(value: string) {
    this._crcSalt = value;
  }
  public resetCrcSalt() {
    this._crcSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crcSaltInput() {
    return this._crcSalt;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // follow_tail - computed: true, optional: true, required: false
  private _followTail?: boolean | cdktf.IResolvable; 
  public get followTail() {
    return this.getBooleanAttribute('follow_tail');
  }
  public set followTail(value: boolean | cdktf.IResolvable) {
    this._followTail = value;
  }
  public resetFollowTail() {
    this._followTail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followTailInput() {
    return this._followTail;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_regex - computed: true, optional: true, required: false
  private _hostRegex?: string; 
  public get hostRegex() {
    return this.getStringAttribute('host_regex');
  }
  public set hostRegex(value: string) {
    this._hostRegex = value;
  }
  public resetHostRegex() {
    this._hostRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRegexInput() {
    return this._hostRegex;
  }

  // host_segment - computed: true, optional: true, required: false
  private _hostSegment?: number; 
  public get hostSegment() {
    return this.getNumberAttribute('host_segment');
  }
  public set hostSegment(value: number) {
    this._hostSegment = value;
  }
  public resetHostSegment() {
    this._hostSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSegmentInput() {
    return this._hostSegment;
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

  // ignore_older_than - computed: true, optional: true, required: false
  private _ignoreOlderThan?: string; 
  public get ignoreOlderThan() {
    return this.getStringAttribute('ignore_older_than');
  }
  public set ignoreOlderThan(value: string) {
    this._ignoreOlderThan = value;
  }
  public resetIgnoreOlderThan() {
    this._ignoreOlderThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOlderThanInput() {
    return this._ignoreOlderThan;
  }

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // recursive - computed: true, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // rename_source - computed: true, optional: true, required: false
  private _renameSource?: string; 
  public get renameSource() {
    return this.getStringAttribute('rename_source');
  }
  public set renameSource(value: string) {
    this._renameSource = value;
  }
  public resetRenameSource() {
    this._renameSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameSourceInput() {
    return this._renameSource;
  }

  // sourcetype - computed: true, optional: true, required: false
  private _sourcetype?: string; 
  public get sourcetype() {
    return this.getStringAttribute('sourcetype');
  }
  public set sourcetype(value: string) {
    this._sourcetype = value;
  }
  public resetSourcetype() {
    this._sourcetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcetypeInput() {
    return this._sourcetype;
  }

  // time_before_close - computed: true, optional: true, required: false
  private _timeBeforeClose?: number; 
  public get timeBeforeClose() {
    return this.getNumberAttribute('time_before_close');
  }
  public set timeBeforeClose(value: number) {
    this._timeBeforeClose = value;
  }
  public resetTimeBeforeClose() {
    this._timeBeforeClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBeforeCloseInput() {
    return this._timeBeforeClose;
  }

  // whitelist - computed: true, optional: true, required: false
  private _whitelist?: string; 
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }
  public set whitelist(value: string) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new InputsMonitorAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: InputsMonitorAcl) {
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
      blacklist: cdktf.stringToTerraform(this._blacklist),
      crc_salt: cdktf.stringToTerraform(this._crcSalt),
      disabled: cdktf.booleanToTerraform(this._disabled),
      follow_tail: cdktf.booleanToTerraform(this._followTail),
      host: cdktf.stringToTerraform(this._host),
      host_regex: cdktf.stringToTerraform(this._hostRegex),
      host_segment: cdktf.numberToTerraform(this._hostSegment),
      id: cdktf.stringToTerraform(this._id),
      ignore_older_than: cdktf.stringToTerraform(this._ignoreOlderThan),
      index: cdktf.stringToTerraform(this._index),
      name: cdktf.stringToTerraform(this._name),
      recursive: cdktf.booleanToTerraform(this._recursive),
      rename_source: cdktf.stringToTerraform(this._renameSource),
      sourcetype: cdktf.stringToTerraform(this._sourcetype),
      time_before_close: cdktf.numberToTerraform(this._timeBeforeClose),
      whitelist: cdktf.stringToTerraform(this._whitelist),
      acl: inputsMonitorAclToTerraform(this._acl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blacklist: {
        value: cdktf.stringToHclTerraform(this._blacklist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crc_salt: {
        value: cdktf.stringToHclTerraform(this._crcSalt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      follow_tail: {
        value: cdktf.booleanToHclTerraform(this._followTail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_regex: {
        value: cdktf.stringToHclTerraform(this._hostRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_segment: {
        value: cdktf.numberToHclTerraform(this._hostSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_older_than: {
        value: cdktf.stringToHclTerraform(this._ignoreOlderThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.stringToHclTerraform(this._index),
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
      recursive: {
        value: cdktf.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rename_source: {
        value: cdktf.stringToHclTerraform(this._renameSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sourcetype: {
        value: cdktf.stringToHclTerraform(this._sourcetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_before_close: {
        value: cdktf.numberToHclTerraform(this._timeBeforeClose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      whitelist: {
        value: cdktf.stringToHclTerraform(this._whitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: inputsMonitorAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InputsMonitorAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
