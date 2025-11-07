// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InputsUdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Valid values: (ip | dns | none)Set the host for the remote server that is sending data.ip sets the host to the IP address of the remote server sending data.dns sets the host to the reverse DNS entry for the IP address of the remote server sending data.none leaves the host as specified in inputs.conf, which is typically the Splunk system hostname.Default value is ip. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#connection_host InputsUdp#connection_host}
  */
  readonly connectionHost?: string;
  /**
  * Indicates if input is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#disabled InputsUdp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The value to populate in the host field for incoming events. This is used during parsing/indexing, in particular to set the host field. It is also the host field used at search time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#host InputsUdp#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#id InputsUdp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Which index events from this input should be stored in. Defaults to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#index InputsUdp#index}
  */
  readonly index?: string;
  /**
  * Required. The UDP port that this input should listen on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#name InputsUdp#name}
  */
  readonly name: string;
  /**
  * If set to true, prevents Splunk software from prepending a timestamp and hostname to incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#no_appending_timestamp InputsUdp#no_appending_timestamp}
  */
  readonly noAppendingTimestamp?: boolean | cdktf.IResolvable;
  /**
  * If set to true, Splunk software does not remove the priority field from incoming syslog events. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#no_priority_stripping InputsUdp#no_priority_stripping}
  */
  readonly noPriorityStripping?: boolean | cdktf.IResolvable;
  /**
  * Which queue events from this input should be sent to. Generally this does not need to be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#queue InputsUdp#queue}
  */
  readonly queue?: string;
  /**
  * Restrict incoming connections on this port to the host specified here. If this is not set, the value specified in [udp://<remote server>:<port>] in inputs.conf is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#restrict_to_host InputsUdp#restrict_to_host}
  */
  readonly restrictToHost?: string;
  /**
  * The value to populate in the source field for incoming events. The same source should not be used for multiple data inputs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#source InputsUdp#source}
  */
  readonly source?: string;
  /**
  * The value to populate in the sourcetype field for incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#sourcetype InputsUdp#sourcetype}
  */
  readonly sourcetype?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#acl InputsUdp#acl}
  */
  readonly acl?: InputsUdpAcl;
}
export interface InputsUdpAcl {
  /**
  * The app context for the resource. Required for updating saved search ACL properties. Allowed values are:The name of an app and system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#app InputsUdp#app}
  */
  readonly app?: string;
  /**
  * Indicates if the active user can change permissions for this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#can_change_perms InputsUdp#can_change_perms}
  */
  readonly canChangePerms?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to app level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#can_share_app InputsUdp#can_share_app}
  */
  readonly canShareApp?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to system level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#can_share_global InputsUdp#can_share_global}
  */
  readonly canShareGlobal?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to user level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#can_share_user InputsUdp#can_share_user}
  */
  readonly canShareUser?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can edit this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#can_write InputsUdp#can_write}
  */
  readonly canWrite?: boolean | cdktf.IResolvable;
  /**
  * User name of resource owner. Defaults to the resource creator. Required for updating any knowledge object ACL properties.nobody = All users may access the resource, but write access to the resource might be restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#owner InputsUdp#owner}
  */
  readonly owner?: string;
  /**
  * Properties that indicate resource read permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#read InputsUdp#read}
  */
  readonly read?: string[];
  /**
  * Indicates whether an admin or user with sufficient permissions can delete the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#removable InputsUdp#removable}
  */
  readonly removable?: boolean | cdktf.IResolvable;
  /**
  * Indicates how the resource is shared. Required for updating any knowledge object ACL properties.app: Shared within a specific appglobal: (Default) Shared globally to all apps.user: Private to a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#sharing InputsUdp#sharing}
  */
  readonly sharing?: string;
  /**
  * Properties that indicate resource write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#write InputsUdp#write}
  */
  readonly write?: string[];
}

export function inputsUdpAclToTerraform(struct?: InputsUdpAclOutputReference | InputsUdpAcl): any {
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


export function inputsUdpAclToHclTerraform(struct?: InputsUdpAclOutputReference | InputsUdpAcl): any {
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

export class InputsUdpAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InputsUdpAcl | undefined {
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

  public set internalValue(value: InputsUdpAcl | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp splunk_inputs_udp}
*/
export class InputsUdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_inputs_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InputsUdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InputsUdp to import
  * @param importFromId The id of the existing InputsUdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InputsUdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_inputs_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/inputs_udp splunk_inputs_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InputsUdpConfig
  */
  public constructor(scope: Construct, id: string, config: InputsUdpConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_inputs_udp',
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
    this._connectionHost = config.connectionHost;
    this._disabled = config.disabled;
    this._host = config.host;
    this._id = config.id;
    this._index = config.index;
    this._name = config.name;
    this._noAppendingTimestamp = config.noAppendingTimestamp;
    this._noPriorityStripping = config.noPriorityStripping;
    this._queue = config.queue;
    this._restrictToHost = config.restrictToHost;
    this._source = config.source;
    this._sourcetype = config.sourcetype;
    this._acl.internalValue = config.acl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_host - computed: true, optional: true, required: false
  private _connectionHost?: string; 
  public get connectionHost() {
    return this.getStringAttribute('connection_host');
  }
  public set connectionHost(value: string) {
    this._connectionHost = value;
  }
  public resetConnectionHost() {
    this._connectionHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionHostInput() {
    return this._connectionHost;
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

  // no_appending_timestamp - computed: true, optional: true, required: false
  private _noAppendingTimestamp?: boolean | cdktf.IResolvable; 
  public get noAppendingTimestamp() {
    return this.getBooleanAttribute('no_appending_timestamp');
  }
  public set noAppendingTimestamp(value: boolean | cdktf.IResolvable) {
    this._noAppendingTimestamp = value;
  }
  public resetNoAppendingTimestamp() {
    this._noAppendingTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAppendingTimestampInput() {
    return this._noAppendingTimestamp;
  }

  // no_priority_stripping - computed: true, optional: true, required: false
  private _noPriorityStripping?: boolean | cdktf.IResolvable; 
  public get noPriorityStripping() {
    return this.getBooleanAttribute('no_priority_stripping');
  }
  public set noPriorityStripping(value: boolean | cdktf.IResolvable) {
    this._noPriorityStripping = value;
  }
  public resetNoPriorityStripping() {
    this._noPriorityStripping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPriorityStrippingInput() {
    return this._noPriorityStripping;
  }

  // queue - computed: true, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // restrict_to_host - computed: true, optional: true, required: false
  private _restrictToHost?: string; 
  public get restrictToHost() {
    return this.getStringAttribute('restrict_to_host');
  }
  public set restrictToHost(value: string) {
    this._restrictToHost = value;
  }
  public resetRestrictToHost() {
    this._restrictToHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToHostInput() {
    return this._restrictToHost;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // acl - computed: false, optional: true, required: false
  private _acl = new InputsUdpAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: InputsUdpAcl) {
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
      connection_host: cdktf.stringToTerraform(this._connectionHost),
      disabled: cdktf.booleanToTerraform(this._disabled),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      name: cdktf.stringToTerraform(this._name),
      no_appending_timestamp: cdktf.booleanToTerraform(this._noAppendingTimestamp),
      no_priority_stripping: cdktf.booleanToTerraform(this._noPriorityStripping),
      queue: cdktf.stringToTerraform(this._queue),
      restrict_to_host: cdktf.stringToTerraform(this._restrictToHost),
      source: cdktf.stringToTerraform(this._source),
      sourcetype: cdktf.stringToTerraform(this._sourcetype),
      acl: inputsUdpAclToTerraform(this._acl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_host: {
        value: cdktf.stringToHclTerraform(this._connectionHost),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      no_appending_timestamp: {
        value: cdktf.booleanToHclTerraform(this._noAppendingTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_priority_stripping: {
        value: cdktf.booleanToHclTerraform(this._noPriorityStripping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queue: {
        value: cdktf.stringToHclTerraform(this._queue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_to_host: {
        value: cdktf.stringToHclTerraform(this._restrictToHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
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
      acl: {
        value: inputsUdpAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InputsUdpAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
