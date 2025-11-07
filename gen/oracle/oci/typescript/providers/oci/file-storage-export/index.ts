// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileStorageExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#export_set_id FileStorageExport#export_set_id}
  */
  readonly exportSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#file_system_id FileStorageExport#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#id FileStorageExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#is_idmap_groups_for_sys_auth FileStorageExport#is_idmap_groups_for_sys_auth}
  */
  readonly isIdmapGroupsForSysAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#is_lock_override FileStorageExport#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#path FileStorageExport#path}
  */
  readonly path: string;
  /**
  * export_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#export_options FileStorageExport#export_options}
  */
  readonly exportOptions?: FileStorageExportExportOptions[] | cdktf.IResolvable;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#locks FileStorageExport#locks}
  */
  readonly locks?: FileStorageExportLocks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#timeouts FileStorageExport#timeouts}
  */
  readonly timeouts?: FileStorageExportTimeouts;
}
export interface FileStorageExportExportOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#access FileStorageExport#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#allowed_auth FileStorageExport#allowed_auth}
  */
  readonly allowedAuth?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#anonymous_gid FileStorageExport#anonymous_gid}
  */
  readonly anonymousGid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#anonymous_uid FileStorageExport#anonymous_uid}
  */
  readonly anonymousUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#identity_squash FileStorageExport#identity_squash}
  */
  readonly identitySquash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#is_anonymous_access_allowed FileStorageExport#is_anonymous_access_allowed}
  */
  readonly isAnonymousAccessAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#require_privileged_source_port FileStorageExport#require_privileged_source_port}
  */
  readonly requirePrivilegedSourcePort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#source FileStorageExport#source}
  */
  readonly source: string;
}

export function fileStorageExportExportOptionsToTerraform(struct?: FileStorageExportExportOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    allowed_auth: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAuth),
    anonymous_gid: cdktf.stringToTerraform(struct!.anonymousGid),
    anonymous_uid: cdktf.stringToTerraform(struct!.anonymousUid),
    identity_squash: cdktf.stringToTerraform(struct!.identitySquash),
    is_anonymous_access_allowed: cdktf.booleanToTerraform(struct!.isAnonymousAccessAllowed),
    require_privileged_source_port: cdktf.booleanToTerraform(struct!.requirePrivilegedSourcePort),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function fileStorageExportExportOptionsToHclTerraform(struct?: FileStorageExportExportOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_auth: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAuth),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    anonymous_gid: {
      value: cdktf.stringToHclTerraform(struct!.anonymousGid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anonymous_uid: {
      value: cdktf.stringToHclTerraform(struct!.anonymousUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_squash: {
      value: cdktf.stringToHclTerraform(struct!.identitySquash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_anonymous_access_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isAnonymousAccessAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_privileged_source_port: {
      value: cdktf.booleanToHclTerraform(struct!.requirePrivilegedSourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageExportExportOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStorageExportExportOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._allowedAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAuth = this._allowedAuth;
    }
    if (this._anonymousGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousGid = this._anonymousGid;
    }
    if (this._anonymousUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousUid = this._anonymousUid;
    }
    if (this._identitySquash !== undefined) {
      hasAnyValues = true;
      internalValueResult.identitySquash = this._identitySquash;
    }
    if (this._isAnonymousAccessAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnonymousAccessAllowed = this._isAnonymousAccessAllowed;
    }
    if (this._requirePrivilegedSourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePrivilegedSourcePort = this._requirePrivilegedSourcePort;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageExportExportOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._allowedAuth = undefined;
      this._anonymousGid = undefined;
      this._anonymousUid = undefined;
      this._identitySquash = undefined;
      this._isAnonymousAccessAllowed = undefined;
      this._requirePrivilegedSourcePort = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._allowedAuth = value.allowedAuth;
      this._anonymousGid = value.anonymousGid;
      this._anonymousUid = value.anonymousUid;
      this._identitySquash = value.identitySquash;
      this._isAnonymousAccessAllowed = value.isAnonymousAccessAllowed;
      this._requirePrivilegedSourcePort = value.requirePrivilegedSourcePort;
      this._source = value.source;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // allowed_auth - computed: true, optional: true, required: false
  private _allowedAuth?: string[]; 
  public get allowedAuth() {
    return this.getListAttribute('allowed_auth');
  }
  public set allowedAuth(value: string[]) {
    this._allowedAuth = value;
  }
  public resetAllowedAuth() {
    this._allowedAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthInput() {
    return this._allowedAuth;
  }

  // anonymous_gid - computed: true, optional: true, required: false
  private _anonymousGid?: string; 
  public get anonymousGid() {
    return this.getStringAttribute('anonymous_gid');
  }
  public set anonymousGid(value: string) {
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
  private _anonymousUid?: string; 
  public get anonymousUid() {
    return this.getStringAttribute('anonymous_uid');
  }
  public set anonymousUid(value: string) {
    this._anonymousUid = value;
  }
  public resetAnonymousUid() {
    this._anonymousUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousUidInput() {
    return this._anonymousUid;
  }

  // identity_squash - computed: true, optional: true, required: false
  private _identitySquash?: string; 
  public get identitySquash() {
    return this.getStringAttribute('identity_squash');
  }
  public set identitySquash(value: string) {
    this._identitySquash = value;
  }
  public resetIdentitySquash() {
    this._identitySquash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySquashInput() {
    return this._identitySquash;
  }

  // is_anonymous_access_allowed - computed: true, optional: true, required: false
  private _isAnonymousAccessAllowed?: boolean | cdktf.IResolvable; 
  public get isAnonymousAccessAllowed() {
    return this.getBooleanAttribute('is_anonymous_access_allowed');
  }
  public set isAnonymousAccessAllowed(value: boolean | cdktf.IResolvable) {
    this._isAnonymousAccessAllowed = value;
  }
  public resetIsAnonymousAccessAllowed() {
    this._isAnonymousAccessAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnonymousAccessAllowedInput() {
    return this._isAnonymousAccessAllowed;
  }

  // require_privileged_source_port - computed: true, optional: true, required: false
  private _requirePrivilegedSourcePort?: boolean | cdktf.IResolvable; 
  public get requirePrivilegedSourcePort() {
    return this.getBooleanAttribute('require_privileged_source_port');
  }
  public set requirePrivilegedSourcePort(value: boolean | cdktf.IResolvable) {
    this._requirePrivilegedSourcePort = value;
  }
  public resetRequirePrivilegedSourcePort() {
    this._requirePrivilegedSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePrivilegedSourcePortInput() {
    return this._requirePrivilegedSourcePort;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class FileStorageExportExportOptionsList extends cdktf.ComplexList {
  public internalValue? : FileStorageExportExportOptions[] | cdktf.IResolvable

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
  public get(index: number): FileStorageExportExportOptionsOutputReference {
    return new FileStorageExportExportOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileStorageExportLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#message FileStorageExport#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#related_resource_id FileStorageExport#related_resource_id}
  */
  readonly relatedResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#time_created FileStorageExport#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#type FileStorageExport#type}
  */
  readonly type: string;
}

export function fileStorageExportLocksToTerraform(struct?: FileStorageExportLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    related_resource_id: cdktf.stringToTerraform(struct!.relatedResourceId),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fileStorageExportLocksToHclTerraform(struct?: FileStorageExportLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.relatedResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageExportLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileStorageExportLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._relatedResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relatedResourceId = this._relatedResourceId;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageExportLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._relatedResourceId = undefined;
      this._timeCreated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._relatedResourceId = value.relatedResourceId;
      this._timeCreated = value.timeCreated;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: true, required: false
  private _relatedResourceId?: string; 
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }
  public set relatedResourceId(value: string) {
    this._relatedResourceId = value;
  }
  public resetRelatedResourceId() {
    this._relatedResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedResourceIdInput() {
    return this._relatedResourceId;
  }

  // time_created - computed: true, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FileStorageExportLocksList extends cdktf.ComplexList {
  public internalValue? : FileStorageExportLocks[] | cdktf.IResolvable

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
  public get(index: number): FileStorageExportLocksOutputReference {
    return new FileStorageExportLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileStorageExportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#create FileStorageExport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#delete FileStorageExport#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#update FileStorageExport#update}
  */
  readonly update?: string;
}

export function fileStorageExportTimeoutsToTerraform(struct?: FileStorageExportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fileStorageExportTimeoutsToHclTerraform(struct?: FileStorageExportTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileStorageExportTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FileStorageExportTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileStorageExportTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export oci_file_storage_export}
*/
export class FileStorageExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_file_storage_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileStorageExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileStorageExport to import
  * @param importFromId The id of the existing FileStorageExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileStorageExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_file_storage_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/file_storage_export oci_file_storage_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileStorageExportConfig
  */
  public constructor(scope: Construct, id: string, config: FileStorageExportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_export',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportSetId = config.exportSetId;
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._isIdmapGroupsForSysAuth = config.isIdmapGroupsForSysAuth;
    this._isLockOverride = config.isLockOverride;
    this._path = config.path;
    this._exportOptions.internalValue = config.exportOptions;
    this._locks.internalValue = config.locks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_set_id - computed: false, optional: false, required: true
  private _exportSetId?: string; 
  public get exportSetId() {
    return this.getStringAttribute('export_set_id');
  }
  public set exportSetId(value: string) {
    this._exportSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportSetIdInput() {
    return this._exportSetId;
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

  // is_idmap_groups_for_sys_auth - computed: true, optional: true, required: false
  private _isIdmapGroupsForSysAuth?: boolean | cdktf.IResolvable; 
  public get isIdmapGroupsForSysAuth() {
    return this.getBooleanAttribute('is_idmap_groups_for_sys_auth');
  }
  public set isIdmapGroupsForSysAuth(value: boolean | cdktf.IResolvable) {
    this._isIdmapGroupsForSysAuth = value;
  }
  public resetIsIdmapGroupsForSysAuth() {
    this._isIdmapGroupsForSysAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIdmapGroupsForSysAuthInput() {
    return this._isIdmapGroupsForSysAuth;
  }

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // export_options - computed: false, optional: true, required: false
  private _exportOptions = new FileStorageExportExportOptionsList(this, "export_options", false);
  public get exportOptions() {
    return this._exportOptions;
  }
  public putExportOptions(value: FileStorageExportExportOptions[] | cdktf.IResolvable) {
    this._exportOptions.internalValue = value;
  }
  public resetExportOptions() {
    this._exportOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportOptionsInput() {
    return this._exportOptions.internalValue;
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new FileStorageExportLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: FileStorageExportLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FileStorageExportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FileStorageExportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_set_id: cdktf.stringToTerraform(this._exportSetId),
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      is_idmap_groups_for_sys_auth: cdktf.booleanToTerraform(this._isIdmapGroupsForSysAuth),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      path: cdktf.stringToTerraform(this._path),
      export_options: cdktf.listMapper(fileStorageExportExportOptionsToTerraform, true)(this._exportOptions.internalValue),
      locks: cdktf.listMapper(fileStorageExportLocksToTerraform, true)(this._locks.internalValue),
      timeouts: fileStorageExportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_set_id: {
        value: cdktf.stringToHclTerraform(this._exportSetId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_idmap_groups_for_sys_auth: {
        value: cdktf.booleanToHclTerraform(this._isIdmapGroupsForSysAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
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
      export_options: {
        value: cdktf.listMapperHcl(fileStorageExportExportOptionsToHclTerraform, true)(this._exportOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageExportExportOptionsList",
      },
      locks: {
        value: cdktf.listMapperHcl(fileStorageExportLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileStorageExportLocksList",
      },
      timeouts: {
        value: fileStorageExportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FileStorageExportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
