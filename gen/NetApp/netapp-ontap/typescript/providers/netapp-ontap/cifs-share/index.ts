// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CifsShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * The permissions that users and groups have on a CIFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#acls CifsShare#acls}
  */
  readonly acls?: CifsShareAcls[] | cdktf.IResolvable;
  /**
  * Specifies whether CIFS clients can request for change notifications for directories on this share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#change_notify CifsShare#change_notify}
  */
  readonly changeNotify?: boolean | cdktf.IResolvable;
  /**
  * Specify the CIFS share descriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#comment CifsShare#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether or not the clients connecting to this share can open files in a persistent manner.Files opened in this way are protected from disruptive events, such as, failover and giveback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#continuously_available CifsShare#continuously_available}
  */
  readonly continuouslyAvailable?: boolean | cdktf.IResolvable;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#cx_profile_name CifsShare#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Directory Mode Creation Mask to be viewed as an octal number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#dir_umask CifsShare#dir_umask}
  */
  readonly dirUmask?: number;
  /**
  * Specifies that SMB encryption must be used when accessing this share. Clients that do not support encryption are not able to access this share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#encryption CifsShare#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * File Mode Creation Mask to be viewed as an octal number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#file_umask CifsShare#file_umask}
  */
  readonly fileUmask?: number;
  /**
  * Specifies that all files that CIFS users create in a specific share belong to the same group
  * 				(also called the force-group). The force-group must be a predefined group in the UNIX group
  * 				database. This setting has no effect unless the security style of the volume is UNIX or mixed
  * 				security style.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#force_group_for_create CifsShare#force_group_for_create}
  */
  readonly forceGroupForCreate?: string;
  /**
  * Specifies whether or not the share is a home directory share, where the share and path names are dynamic.
  * 				ONTAP home directory functionality automatically offer each user a dynamic share to their home directory without creating an
  * 				individual SMB share for each user.
  * 				The ONTAP CIFS home directory feature enable us to configure a share that maps to
  * 				different directories based on the user that connects to it. Instead of creating a separate shares for each user,
  * 				a single share with a home directory parameters can be created.
  * 				In a home directory share, ONTAP dynamically generates the share-name and share-path by substituting
  * 				%w, %u, and %d variables with the corresponding Windows user name, UNIX user name, and domain name, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#home_directory CifsShare#home_directory}
  */
  readonly homeDirectory?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the CIFS share that you want to create. If this
  * 				is a home directory share then the share name includes the pattern as
  * 				%w (Windows user name), %u (UNIX user name) and %d (Windows domain name)
  * 				variables in any combination with this parameter to generate shares dynamically.
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#name CifsShare#name}
  */
  readonly name: string;
  /**
  * Specifies whether or not the SMB clients connecting to this share can cache the directory enumeration
  * 				results returned by the CIFS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#namespace_caching CifsShare#namespace_caching}
  */
  readonly namespaceCaching?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not CIFS clients can follow a unix symlinks outside the share boundaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#no_strict_security CifsShare#no_strict_security}
  */
  readonly noStrictSecurity?: boolean | cdktf.IResolvable;
  /**
  * Offline Files. The supported values are:
  * 				none - Clients are not permitted to cache files for offline access.
  * 				manual - Clients may cache files that are explicitly selected by the user for offline access.
  * 				documents - Clients may automatically cache files that are used by the user for offline access.
  * 				programs - Clients may automatically cache files that are used by the user for offline access
  * 				and may use those files in an offline mode even if the share is available.
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#offline_files CifsShare#offline_files}
  */
  readonly offlineFiles?: string;
  /**
  * Specify whether opportunistic locks are enabled on this share. "Oplocks" allow clients to lock files and cache content locally,
  * 				which can increase performance for file operations.
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#oplocks CifsShare#oplocks}
  */
  readonly oplocks?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified pathname in the owning SVM namespace that is shared through this share.
  * 				If this is a home directory share then the path should be dynamic by specifying the pattern
  * 				%w (Windows user name), %u (UNIX user name), or %d (domain name) variables in any combination.
  * 				ONTAP generates the path dynamically for the connected user and this path is appended to each
  * 				search path to find the full Home Directory path.
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#path CifsShare#path}
  */
  readonly path: string;
  /**
  * Specifies whether or not the Snapshot copies can be viewed and traversed by clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#show_snapshot CifsShare#show_snapshot}
  */
  readonly showSnapshot?: boolean | cdktf.IResolvable;
  /**
  * svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#svm_name CifsShare#svm_name}
  */
  readonly svmName: string;
  /**
  * Controls the access of UNIX symbolic links to CIFS clients.
  * 				The supported values are:
  * 				* local - Enables only local symbolic links which is within the same CIFS share.
  * 				* widelink - Enables both local symlinks and widelinks.
  * 				* disable - Disables local symlinks and widelinks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#unix_symlink CifsShare#unix_symlink}
  */
  readonly unixSymlink?: string;
  /**
  *  Vscan File-Operations Profile
  * 				The supported values are:
  * 				no_scan - Virus scans are never triggered for accesses to this share.
  * 				standard - Virus scans can be triggered by open, close, and rename operations.
  * 				strict - Virus scans can be triggered by open, read, close, and rename operations.
  * 				writes_only - Virus scans can be triggered only when a file that has been modified is closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#vscan_profile CifsShare#vscan_profile}
  */
  readonly vscanProfile?: string;
}
export interface CifsShareAcls {
  /**
  * Specifies the access rights that a user or group has on the defined CIFS Share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#permission CifsShare#permission}
  */
  readonly permission?: string;
  /**
  * string Specifies the type of the user or group to add to the access control list of a CIFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#type CifsShare#type}
  */
  readonly type?: string;
  /**
  * Specifies the user or group name to add to the access control list of a CIFS share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#user_or_group CifsShare#user_or_group}
  */
  readonly userOrGroup?: string;
}

export function cifsShareAclsToTerraform(struct?: CifsShareAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.stringToTerraform(struct!.permission),
    type: cdktf.stringToTerraform(struct!.type),
    user_or_group: cdktf.stringToTerraform(struct!.userOrGroup),
  }
}


export function cifsShareAclsToHclTerraform(struct?: CifsShareAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_or_group: {
      value: cdktf.stringToHclTerraform(struct!.userOrGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CifsShareAclsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CifsShareAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userOrGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOrGroup = this._userOrGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CifsShareAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permission = undefined;
      this._type = undefined;
      this._userOrGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permission = value.permission;
      this._type = value.type;
      this._userOrGroup = value.userOrGroup;
    }
  }

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_or_group - computed: true, optional: true, required: false
  private _userOrGroup?: string; 
  public get userOrGroup() {
    return this.getStringAttribute('user_or_group');
  }
  public set userOrGroup(value: string) {
    this._userOrGroup = value;
  }
  public resetUserOrGroup() {
    this._userOrGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOrGroupInput() {
    return this._userOrGroup;
  }
}

export class CifsShareAclsList extends cdktf.ComplexList {
  public internalValue? : CifsShareAcls[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CifsShareAclsOutputReference {
    return new CifsShareAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share netapp-ontap_cifs_share}
*/
export class CifsShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_cifs_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CifsShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CifsShare to import
  * @param importFromId The id of the existing CifsShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CifsShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_cifs_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/cifs_share netapp-ontap_cifs_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CifsShareConfig
  */
  public constructor(scope: Construct, id: string, config: CifsShareConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_cifs_share',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acls.internalValue = config.acls;
    this._changeNotify = config.changeNotify;
    this._comment = config.comment;
    this._continuouslyAvailable = config.continuouslyAvailable;
    this._cxProfileName = config.cxProfileName;
    this._dirUmask = config.dirUmask;
    this._encryption = config.encryption;
    this._fileUmask = config.fileUmask;
    this._forceGroupForCreate = config.forceGroupForCreate;
    this._homeDirectory = config.homeDirectory;
    this._name = config.name;
    this._namespaceCaching = config.namespaceCaching;
    this._noStrictSecurity = config.noStrictSecurity;
    this._offlineFiles = config.offlineFiles;
    this._oplocks = config.oplocks;
    this._path = config.path;
    this._showSnapshot = config.showSnapshot;
    this._svmName = config.svmName;
    this._unixSymlink = config.unixSymlink;
    this._vscanProfile = config.vscanProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acls - computed: true, optional: true, required: false
  private _acls = new CifsShareAclsList(this, "acls", true);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: CifsShareAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // change_notify - computed: true, optional: true, required: false
  private _changeNotify?: boolean | cdktf.IResolvable; 
  public get changeNotify() {
    return this.getBooleanAttribute('change_notify');
  }
  public set changeNotify(value: boolean | cdktf.IResolvable) {
    this._changeNotify = value;
  }
  public resetChangeNotify() {
    this._changeNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeNotifyInput() {
    return this._changeNotify;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // continuously_available - computed: true, optional: true, required: false
  private _continuouslyAvailable?: boolean | cdktf.IResolvable; 
  public get continuouslyAvailable() {
    return this.getBooleanAttribute('continuously_available');
  }
  public set continuouslyAvailable(value: boolean | cdktf.IResolvable) {
    this._continuouslyAvailable = value;
  }
  public resetContinuouslyAvailable() {
    this._continuouslyAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuouslyAvailableInput() {
    return this._continuouslyAvailable;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // dir_umask - computed: true, optional: true, required: false
  private _dirUmask?: number; 
  public get dirUmask() {
    return this.getNumberAttribute('dir_umask');
  }
  public set dirUmask(value: number) {
    this._dirUmask = value;
  }
  public resetDirUmask() {
    this._dirUmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirUmaskInput() {
    return this._dirUmask;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // file_umask - computed: true, optional: true, required: false
  private _fileUmask?: number; 
  public get fileUmask() {
    return this.getNumberAttribute('file_umask');
  }
  public set fileUmask(value: number) {
    this._fileUmask = value;
  }
  public resetFileUmask() {
    this._fileUmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUmaskInput() {
    return this._fileUmask;
  }

  // force_group_for_create - computed: true, optional: true, required: false
  private _forceGroupForCreate?: string; 
  public get forceGroupForCreate() {
    return this.getStringAttribute('force_group_for_create');
  }
  public set forceGroupForCreate(value: string) {
    this._forceGroupForCreate = value;
  }
  public resetForceGroupForCreate() {
    this._forceGroupForCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceGroupForCreateInput() {
    return this._forceGroupForCreate;
  }

  // home_directory - computed: true, optional: true, required: false
  private _homeDirectory?: boolean | cdktf.IResolvable; 
  public get homeDirectory() {
    return this.getBooleanAttribute('home_directory');
  }
  public set homeDirectory(value: boolean | cdktf.IResolvable) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_caching - computed: true, optional: true, required: false
  private _namespaceCaching?: boolean | cdktf.IResolvable; 
  public get namespaceCaching() {
    return this.getBooleanAttribute('namespace_caching');
  }
  public set namespaceCaching(value: boolean | cdktf.IResolvable) {
    this._namespaceCaching = value;
  }
  public resetNamespaceCaching() {
    this._namespaceCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceCachingInput() {
    return this._namespaceCaching;
  }

  // no_strict_security - computed: true, optional: true, required: false
  private _noStrictSecurity?: boolean | cdktf.IResolvable; 
  public get noStrictSecurity() {
    return this.getBooleanAttribute('no_strict_security');
  }
  public set noStrictSecurity(value: boolean | cdktf.IResolvable) {
    this._noStrictSecurity = value;
  }
  public resetNoStrictSecurity() {
    this._noStrictSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStrictSecurityInput() {
    return this._noStrictSecurity;
  }

  // offline_files - computed: true, optional: true, required: false
  private _offlineFiles?: string; 
  public get offlineFiles() {
    return this.getStringAttribute('offline_files');
  }
  public set offlineFiles(value: string) {
    this._offlineFiles = value;
  }
  public resetOfflineFiles() {
    this._offlineFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineFilesInput() {
    return this._offlineFiles;
  }

  // oplocks - computed: true, optional: true, required: false
  private _oplocks?: boolean | cdktf.IResolvable; 
  public get oplocks() {
    return this.getBooleanAttribute('oplocks');
  }
  public set oplocks(value: boolean | cdktf.IResolvable) {
    this._oplocks = value;
  }
  public resetOplocks() {
    this._oplocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplocksInput() {
    return this._oplocks;
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

  // show_snapshot - computed: true, optional: true, required: false
  private _showSnapshot?: boolean | cdktf.IResolvable; 
  public get showSnapshot() {
    return this.getBooleanAttribute('show_snapshot');
  }
  public set showSnapshot(value: boolean | cdktf.IResolvable) {
    this._showSnapshot = value;
  }
  public resetShowSnapshot() {
    this._showSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSnapshotInput() {
    return this._showSnapshot;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // unix_symlink - computed: true, optional: true, required: false
  private _unixSymlink?: string; 
  public get unixSymlink() {
    return this.getStringAttribute('unix_symlink');
  }
  public set unixSymlink(value: string) {
    this._unixSymlink = value;
  }
  public resetUnixSymlink() {
    this._unixSymlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unixSymlinkInput() {
    return this._unixSymlink;
  }

  // vscan_profile - computed: true, optional: true, required: false
  private _vscanProfile?: string; 
  public get vscanProfile() {
    return this.getStringAttribute('vscan_profile');
  }
  public set vscanProfile(value: string) {
    this._vscanProfile = value;
  }
  public resetVscanProfile() {
    this._vscanProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vscanProfileInput() {
    return this._vscanProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acls: cdktf.listMapper(cifsShareAclsToTerraform, false)(this._acls.internalValue),
      change_notify: cdktf.booleanToTerraform(this._changeNotify),
      comment: cdktf.stringToTerraform(this._comment),
      continuously_available: cdktf.booleanToTerraform(this._continuouslyAvailable),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      dir_umask: cdktf.numberToTerraform(this._dirUmask),
      encryption: cdktf.booleanToTerraform(this._encryption),
      file_umask: cdktf.numberToTerraform(this._fileUmask),
      force_group_for_create: cdktf.stringToTerraform(this._forceGroupForCreate),
      home_directory: cdktf.booleanToTerraform(this._homeDirectory),
      name: cdktf.stringToTerraform(this._name),
      namespace_caching: cdktf.booleanToTerraform(this._namespaceCaching),
      no_strict_security: cdktf.booleanToTerraform(this._noStrictSecurity),
      offline_files: cdktf.stringToTerraform(this._offlineFiles),
      oplocks: cdktf.booleanToTerraform(this._oplocks),
      path: cdktf.stringToTerraform(this._path),
      show_snapshot: cdktf.booleanToTerraform(this._showSnapshot),
      svm_name: cdktf.stringToTerraform(this._svmName),
      unix_symlink: cdktf.stringToTerraform(this._unixSymlink),
      vscan_profile: cdktf.stringToTerraform(this._vscanProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acls: {
        value: cdktf.listMapperHcl(cifsShareAclsToHclTerraform, false)(this._acls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CifsShareAclsList",
      },
      change_notify: {
        value: cdktf.booleanToHclTerraform(this._changeNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continuously_available: {
        value: cdktf.booleanToHclTerraform(this._continuouslyAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dir_umask: {
        value: cdktf.numberToHclTerraform(this._dirUmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_umask: {
        value: cdktf.numberToHclTerraform(this._fileUmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_group_for_create: {
        value: cdktf.stringToHclTerraform(this._forceGroupForCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_directory: {
        value: cdktf.booleanToHclTerraform(this._homeDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_caching: {
        value: cdktf.booleanToHclTerraform(this._namespaceCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_strict_security: {
        value: cdktf.booleanToHclTerraform(this._noStrictSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      offline_files: {
        value: cdktf.stringToHclTerraform(this._offlineFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oplocks: {
        value: cdktf.booleanToHclTerraform(this._oplocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_snapshot: {
        value: cdktf.booleanToHclTerraform(this._showSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unix_symlink: {
        value: cdktf.stringToHclTerraform(this._unixSymlink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vscan_profile: {
        value: cdktf.stringToHclTerraform(this._vscanProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
