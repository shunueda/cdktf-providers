// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutputsTcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disables default tcpout settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#disabled OutputsTcpServer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#id OutputsTcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid values: (clone | balance | autobalance)The data distribution method used when two or more servers exist in the same forwarder group. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#method OutputsTcpServer#method}
  */
  readonly method?: string;
  /**
  * <host>:<port> of the Splunk receiver. <host> can be either an ip address or server name. <port> is the that port that the Splunk receiver is listening on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#name OutputsTcpServer#name}
  */
  readonly name: string;
  /**
  * The alternate name to match in the remote server's SSL certificate. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#ssl_alt_name_to_check OutputsTcpServer#ssl_alt_name_to_check}
  */
  readonly sslAltNameToCheck?: string;
  /**
  * The alternate name to match in the remote server's SSL certificate. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#ssl_cert_path OutputsTcpServer#ssl_cert_path}
  */
  readonly sslCertPath?: string;
  /**
  * SSL Cipher in the form ALL:!aNULL:!eNULL:!LOW:!EXP:RC4+RSA:+HIGH:+MEDIUM 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#ssl_cipher OutputsTcpServer#ssl_cipher}
  */
  readonly sslCipher?: string;
  /**
  * Check the common name of the server's certificate against this name.If there is no match, assume that Splunk Enterprise is not authenticated against this server. You must specify this setting if sslVerifyServerCert is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#ssl_common_name_to_check OutputsTcpServer#ssl_common_name_to_check}
  */
  readonly sslCommonNameToCheck?: string;
  /**
  * The password associated with the CAcert.The default Splunk Enterprise CAcert uses the password password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#ssl_password OutputsTcpServer#ssl_password}
  */
  readonly sslPassword?: string;
  /**
  * The path to the root certificate authority file (optional). 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#ssl_root_ca_path OutputsTcpServer#ssl_root_ca_path}
  */
  readonly sslRootCaPath?: string;
  /**
  *  	If true, make sure that the server you are connecting to is a valid one (authenticated). Both the common name and the alternate name of the server are then checked for a match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#ssl_verify_server_cert OutputsTcpServer#ssl_verify_server_cert}
  */
  readonly sslVerifyServerCert?: boolean | cdktf.IResolvable;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#acl OutputsTcpServer#acl}
  */
  readonly acl?: OutputsTcpServerAcl;
}
export interface OutputsTcpServerAcl {
  /**
  * The app context for the resource. Required for updating saved search ACL properties. Allowed values are:The name of an app and system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#app OutputsTcpServer#app}
  */
  readonly app?: string;
  /**
  * Indicates if the active user can change permissions for this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#can_change_perms OutputsTcpServer#can_change_perms}
  */
  readonly canChangePerms?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to app level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#can_share_app OutputsTcpServer#can_share_app}
  */
  readonly canShareApp?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to system level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#can_share_global OutputsTcpServer#can_share_global}
  */
  readonly canShareGlobal?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to user level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#can_share_user OutputsTcpServer#can_share_user}
  */
  readonly canShareUser?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can edit this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#can_write OutputsTcpServer#can_write}
  */
  readonly canWrite?: boolean | cdktf.IResolvable;
  /**
  * User name of resource owner. Defaults to the resource creator. Required for updating any knowledge object ACL properties.nobody = All users may access the resource, but write access to the resource might be restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#owner OutputsTcpServer#owner}
  */
  readonly owner?: string;
  /**
  * Properties that indicate resource read permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#read OutputsTcpServer#read}
  */
  readonly read?: string[];
  /**
  * Indicates whether an admin or user with sufficient permissions can delete the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#removable OutputsTcpServer#removable}
  */
  readonly removable?: boolean | cdktf.IResolvable;
  /**
  * Indicates how the resource is shared. Required for updating any knowledge object ACL properties.app: Shared within a specific appglobal: (Default) Shared globally to all apps.user: Private to a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#sharing OutputsTcpServer#sharing}
  */
  readonly sharing?: string;
  /**
  * Properties that indicate resource write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#write OutputsTcpServer#write}
  */
  readonly write?: string[];
}

export function outputsTcpServerAclToTerraform(struct?: OutputsTcpServerAclOutputReference | OutputsTcpServerAcl): any {
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


export function outputsTcpServerAclToHclTerraform(struct?: OutputsTcpServerAclOutputReference | OutputsTcpServerAcl): any {
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

export class OutputsTcpServerAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OutputsTcpServerAcl | undefined {
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

  public set internalValue(value: OutputsTcpServerAcl | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server splunk_outputs_tcp_server}
*/
export class OutputsTcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_outputs_tcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutputsTcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutputsTcpServer to import
  * @param importFromId The id of the existing OutputsTcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutputsTcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_outputs_tcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/outputs_tcp_server splunk_outputs_tcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutputsTcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: OutputsTcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_outputs_tcp_server',
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._method = config.method;
    this._name = config.name;
    this._sslAltNameToCheck = config.sslAltNameToCheck;
    this._sslCertPath = config.sslCertPath;
    this._sslCipher = config.sslCipher;
    this._sslCommonNameToCheck = config.sslCommonNameToCheck;
    this._sslPassword = config.sslPassword;
    this._sslRootCaPath = config.sslRootCaPath;
    this._sslVerifyServerCert = config.sslVerifyServerCert;
    this._acl.internalValue = config.acl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // ssl_alt_name_to_check - computed: true, optional: true, required: false
  private _sslAltNameToCheck?: string; 
  public get sslAltNameToCheck() {
    return this.getStringAttribute('ssl_alt_name_to_check');
  }
  public set sslAltNameToCheck(value: string) {
    this._sslAltNameToCheck = value;
  }
  public resetSslAltNameToCheck() {
    this._sslAltNameToCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAltNameToCheckInput() {
    return this._sslAltNameToCheck;
  }

  // ssl_cert_path - computed: true, optional: true, required: false
  private _sslCertPath?: string; 
  public get sslCertPath() {
    return this.getStringAttribute('ssl_cert_path');
  }
  public set sslCertPath(value: string) {
    this._sslCertPath = value;
  }
  public resetSslCertPath() {
    this._sslCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertPathInput() {
    return this._sslCertPath;
  }

  // ssl_cipher - computed: true, optional: true, required: false
  private _sslCipher?: string; 
  public get sslCipher() {
    return this.getStringAttribute('ssl_cipher');
  }
  public set sslCipher(value: string) {
    this._sslCipher = value;
  }
  public resetSslCipher() {
    this._sslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherInput() {
    return this._sslCipher;
  }

  // ssl_common_name_to_check - computed: true, optional: true, required: false
  private _sslCommonNameToCheck?: string; 
  public get sslCommonNameToCheck() {
    return this.getStringAttribute('ssl_common_name_to_check');
  }
  public set sslCommonNameToCheck(value: string) {
    this._sslCommonNameToCheck = value;
  }
  public resetSslCommonNameToCheck() {
    this._sslCommonNameToCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCommonNameToCheckInput() {
    return this._sslCommonNameToCheck;
  }

  // ssl_password - computed: true, optional: true, required: false
  private _sslPassword?: string; 
  public get sslPassword() {
    return this.getStringAttribute('ssl_password');
  }
  public set sslPassword(value: string) {
    this._sslPassword = value;
  }
  public resetSslPassword() {
    this._sslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPasswordInput() {
    return this._sslPassword;
  }

  // ssl_root_ca_path - computed: true, optional: true, required: false
  private _sslRootCaPath?: string; 
  public get sslRootCaPath() {
    return this.getStringAttribute('ssl_root_ca_path');
  }
  public set sslRootCaPath(value: string) {
    this._sslRootCaPath = value;
  }
  public resetSslRootCaPath() {
    this._sslRootCaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRootCaPathInput() {
    return this._sslRootCaPath;
  }

  // ssl_verify_server_cert - computed: true, optional: true, required: false
  private _sslVerifyServerCert?: boolean | cdktf.IResolvable; 
  public get sslVerifyServerCert() {
    return this.getBooleanAttribute('ssl_verify_server_cert');
  }
  public set sslVerifyServerCert(value: boolean | cdktf.IResolvable) {
    this._sslVerifyServerCert = value;
  }
  public resetSslVerifyServerCert() {
    this._sslVerifyServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyServerCertInput() {
    return this._sslVerifyServerCert;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new OutputsTcpServerAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: OutputsTcpServerAcl) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      ssl_alt_name_to_check: cdktf.stringToTerraform(this._sslAltNameToCheck),
      ssl_cert_path: cdktf.stringToTerraform(this._sslCertPath),
      ssl_cipher: cdktf.stringToTerraform(this._sslCipher),
      ssl_common_name_to_check: cdktf.stringToTerraform(this._sslCommonNameToCheck),
      ssl_password: cdktf.stringToTerraform(this._sslPassword),
      ssl_root_ca_path: cdktf.stringToTerraform(this._sslRootCaPath),
      ssl_verify_server_cert: cdktf.booleanToTerraform(this._sslVerifyServerCert),
      acl: outputsTcpServerAclToTerraform(this._acl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      ssl_alt_name_to_check: {
        value: cdktf.stringToHclTerraform(this._sslAltNameToCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert_path: {
        value: cdktf.stringToHclTerraform(this._sslCertPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cipher: {
        value: cdktf.stringToHclTerraform(this._sslCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_common_name_to_check: {
        value: cdktf.stringToHclTerraform(this._sslCommonNameToCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_password: {
        value: cdktf.stringToHclTerraform(this._sslPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_root_ca_path: {
        value: cdktf.stringToHclTerraform(this._sslRootCaPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_verify_server_cert: {
        value: cdktf.booleanToHclTerraform(this._sslVerifyServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      acl: {
        value: outputsTcpServerAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OutputsTcpServerAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
