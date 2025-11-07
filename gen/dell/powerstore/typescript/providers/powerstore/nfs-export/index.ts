// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GID (Group ID) of the anonymous user. This is the group ID of the anonymous user. The anonymous user is the user ID (UID) that is used when the true user's identity cannot be determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#anonymous_gid NfsExport#anonymous_gid}
  */
  readonly anonymousGid?: number;
  /**
  * The UID (User ID) of the anonymous user. This is the user ID of the anonymous user. The anonymous user is the user ID (UID) that is used when the true user's identity cannot be determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#anonymous_uid NfsExport#anonymous_uid}
  */
  readonly anonymousUid?: number;
  /**
  * The default access level for all hosts that can access the NFS Export. The default access level is the access level that is assigned to a host that is not explicitly Seted in the 'no_access_hosts', 'read_only_hosts', 'read_only_root_hosts', 'read_write_hosts', or 'read_write_root_hosts' Sets. Valid values are: 'No_Access', 'Read_Only', 'Read_Write', 'Root', 'Read_Only_Root'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#default_access NfsExport#default_access}
  */
  readonly defaultAccess?: string;
  /**
  * A user-defined description of the NFS Export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#description NfsExport#description}
  */
  readonly description?: string;
  /**
  * The unique identifier of the file	system on which the NFS Export will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#file_system_id NfsExport#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * If Set, do not allow access to Set SUID. Otherwise, allow access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#is_no_suid NfsExport#is_no_suid}
  */
  readonly isNoSuid?: boolean | cdktf.IResolvable;
  /**
  * The NFS enforced security type for users accessing the NFS Export. Valid values are: 'Sys', 'Kerberos', 'Kerberos_With_Integrity', 'Kerberos_With_Encryption'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#min_security NfsExport#min_security}
  */
  readonly minSecurity?: string;
  /**
  * The name of the NFS Export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#name NfsExport#name}
  */
  readonly name: string;
  /**
  * The default owner of the NFS Export associated with the datastore. Required if secure NFS enabled. For NFSv3 or NFSv4 without Kerberos, the default owner is root. Was added in version 3.0.0.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#nfs_owner_username NfsExport#nfs_owner_username}
  */
  readonly nfsOwnerUsername?: string;
  /**
  * Hosts with no access to the NFS export or its snapshots. Hosts can be entered by Hostname, IP addresses (IPv4, IPv6, IPv4/PrefixLength, IPv6/PrefixLength, or IPv4/subnetmask), or Netgroups prefixed with @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#no_access_hosts NfsExport#no_access_hosts}
  */
  readonly noAccessHosts?: string[];
  /**
  * The local path to export relative to the nfs export root directory. With NFS, each export of a file_system or file_nfs must have a unique local path. Before you can create additional Exports within an NFS shared folder, you must create directories within it from a Linux/Unix host that is connected to the nfs export. After a directory has been created from a mounted host, you can create a corresponding Export and Set access permissions accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#path NfsExport#path}
  */
  readonly path: string;
  /**
  * Hosts with read-only access to the NFS export and its snapshots. Hosts can be entered by Hostname, IP addresses (IPv4, IPv6, IPv4/PrefixLength, IPv6/PrefixLength, or IPv4/subnetmask), or Netgroups prefixed with @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#read_only_hosts NfsExport#read_only_hosts}
  */
  readonly readOnlyHosts?: string[];
  /**
  * Hosts with read-only and read-only for root user access to the NFS Export and its snapshots. Hosts can be entered by Hostname, IP addresses (IPv4, IPv6, IPv4/PrefixLength, IPv6/PrefixLength, or IPv4/subnetmask), or Netgroups prefixed with @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#read_only_root_hosts NfsExport#read_only_root_hosts}
  */
  readonly readOnlyRootHosts?: string[];
  /**
  * Hosts with read and write access to the NFS Export and its snapshots. Hosts can be entered by Hostname, IP addresses (IPv4, IPv6, IPv4/PrefixLength, IPv6/PrefixLength, or IPv4/subnetmask), or Netgroups prefixed with @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#read_write_hosts NfsExport#read_write_hosts}
  */
  readonly readWriteHosts?: string[];
  /**
  * Hosts with read and write and read and write for root user access to the NFS Export and its snapshots. Hosts can be entered by Hostname, IP addresses (IPv4, IPv6, IPv4/PrefixLength, IPv6/PrefixLength, or IPv4/subnetmask), or Netgroups prefixed with @.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#read_write_root_hosts NfsExport#read_write_root_hosts}
  */
  readonly readWriteRootHosts?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export powerstore_nfs_export}
*/
export class NfsExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_nfs_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfsExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfsExport to import
  * @param importFromId The id of the existing NfsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfsExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_nfs_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/nfs_export powerstore_nfs_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfsExportConfig
  */
  public constructor(scope: Construct, id: string, config: NfsExportConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_nfs_export',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anonymousGid = config.anonymousGid;
    this._anonymousUid = config.anonymousUid;
    this._defaultAccess = config.defaultAccess;
    this._description = config.description;
    this._fileSystemId = config.fileSystemId;
    this._isNoSuid = config.isNoSuid;
    this._minSecurity = config.minSecurity;
    this._name = config.name;
    this._nfsOwnerUsername = config.nfsOwnerUsername;
    this._noAccessHosts = config.noAccessHosts;
    this._path = config.path;
    this._readOnlyHosts = config.readOnlyHosts;
    this._readOnlyRootHosts = config.readOnlyRootHosts;
    this._readWriteHosts = config.readWriteHosts;
    this._readWriteRootHosts = config.readWriteRootHosts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous_gid - computed: true, optional: true, required: false
  private _anonymousGid?: number; 
  public get anonymousGid() {
    return this.getNumberAttribute('anonymous_gid');
  }
  public set anonymousGid(value: number) {
    this._anonymousGid = value;
  }
  public resetAnonymousGid() {
    this._anonymousGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousGidInput() {
    return this._anonymousGid;
  }

  // anonymous_uid - computed: true, optional: true, required: false
  private _anonymousUid?: number; 
  public get anonymousUid() {
    return this.getNumberAttribute('anonymous_uid');
  }
  public set anonymousUid(value: number) {
    this._anonymousUid = value;
  }
  public resetAnonymousUid() {
    this._anonymousUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousUidInput() {
    return this._anonymousUid;
  }

  // default_access - computed: true, optional: true, required: false
  private _defaultAccess?: string; 
  public get defaultAccess() {
    return this.getStringAttribute('default_access');
  }
  public set defaultAccess(value: string) {
    this._defaultAccess = value;
  }
  public resetDefaultAccess() {
    this._defaultAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessInput() {
    return this._defaultAccess;
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

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_no_suid - computed: true, optional: true, required: false
  private _isNoSuid?: boolean | cdktf.IResolvable; 
  public get isNoSuid() {
    return this.getBooleanAttribute('is_no_suid');
  }
  public set isNoSuid(value: boolean | cdktf.IResolvable) {
    this._isNoSuid = value;
  }
  public resetIsNoSuid() {
    this._isNoSuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNoSuidInput() {
    return this._isNoSuid;
  }

  // min_security - computed: true, optional: true, required: false
  private _minSecurity?: string; 
  public get minSecurity() {
    return this.getStringAttribute('min_security');
  }
  public set minSecurity(value: string) {
    this._minSecurity = value;
  }
  public resetMinSecurity() {
    this._minSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecurityInput() {
    return this._minSecurity;
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

  // nfs_owner_username - computed: true, optional: true, required: false
  private _nfsOwnerUsername?: string; 
  public get nfsOwnerUsername() {
    return this.getStringAttribute('nfs_owner_username');
  }
  public set nfsOwnerUsername(value: string) {
    this._nfsOwnerUsername = value;
  }
  public resetNfsOwnerUsername() {
    this._nfsOwnerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsOwnerUsernameInput() {
    return this._nfsOwnerUsername;
  }

  // no_access_hosts - computed: true, optional: true, required: false
  private _noAccessHosts?: string[]; 
  public get noAccessHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('no_access_hosts'));
  }
  public set noAccessHosts(value: string[]) {
    this._noAccessHosts = value;
  }
  public resetNoAccessHosts() {
    this._noAccessHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAccessHostsInput() {
    return this._noAccessHosts;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only_hosts - computed: true, optional: true, required: false
  private _readOnlyHosts?: string[]; 
  public get readOnlyHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('read_only_hosts'));
  }
  public set readOnlyHosts(value: string[]) {
    this._readOnlyHosts = value;
  }
  public resetReadOnlyHosts() {
    this._readOnlyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyHostsInput() {
    return this._readOnlyHosts;
  }

  // read_only_root_hosts - computed: true, optional: true, required: false
  private _readOnlyRootHosts?: string[]; 
  public get readOnlyRootHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('read_only_root_hosts'));
  }
  public set readOnlyRootHosts(value: string[]) {
    this._readOnlyRootHosts = value;
  }
  public resetReadOnlyRootHosts() {
    this._readOnlyRootHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootHostsInput() {
    return this._readOnlyRootHosts;
  }

  // read_write_hosts - computed: true, optional: true, required: false
  private _readWriteHosts?: string[]; 
  public get readWriteHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('read_write_hosts'));
  }
  public set readWriteHosts(value: string[]) {
    this._readWriteHosts = value;
  }
  public resetReadWriteHosts() {
    this._readWriteHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteHostsInput() {
    return this._readWriteHosts;
  }

  // read_write_root_hosts - computed: true, optional: true, required: false
  private _readWriteRootHosts?: string[]; 
  public get readWriteRootHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('read_write_root_hosts'));
  }
  public set readWriteRootHosts(value: string[]) {
    this._readWriteRootHosts = value;
  }
  public resetReadWriteRootHosts() {
    this._readWriteRootHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteRootHostsInput() {
    return this._readWriteRootHosts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anonymous_gid: cdktf.numberToTerraform(this._anonymousGid),
      anonymous_uid: cdktf.numberToTerraform(this._anonymousUid),
      default_access: cdktf.stringToTerraform(this._defaultAccess),
      description: cdktf.stringToTerraform(this._description),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      is_no_suid: cdktf.booleanToTerraform(this._isNoSuid),
      min_security: cdktf.stringToTerraform(this._minSecurity),
      name: cdktf.stringToTerraform(this._name),
      nfs_owner_username: cdktf.stringToTerraform(this._nfsOwnerUsername),
      no_access_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noAccessHosts),
      path: cdktf.stringToTerraform(this._path),
      read_only_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readOnlyHosts),
      read_only_root_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readOnlyRootHosts),
      read_write_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readWriteHosts),
      read_write_root_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readWriteRootHosts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymous_gid: {
        value: cdktf.numberToHclTerraform(this._anonymousGid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anonymous_uid: {
        value: cdktf.numberToHclTerraform(this._anonymousUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_access: {
        value: cdktf.stringToHclTerraform(this._defaultAccess),
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
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_no_suid: {
        value: cdktf.booleanToHclTerraform(this._isNoSuid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_security: {
        value: cdktf.stringToHclTerraform(this._minSecurity),
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
      nfs_owner_username: {
        value: cdktf.stringToHclTerraform(this._nfsOwnerUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_access_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noAccessHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readOnlyHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      read_only_root_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readOnlyRootHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      read_write_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readWriteHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      read_write_root_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readWriteRootHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
