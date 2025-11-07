// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#content_type MonitorFolder#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#created_at MonitorFolder#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#created_by MonitorFolder#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#description MonitorFolder#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#id MonitorFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#is_locked MonitorFolder#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#is_mutable MonitorFolder#is_mutable}
  */
  readonly isMutable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#is_system MonitorFolder#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#modified_at MonitorFolder#modified_at}
  */
  readonly modifiedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#modified_by MonitorFolder#modified_by}
  */
  readonly modifiedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#name MonitorFolder#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#parent_id MonitorFolder#parent_id}
  */
  readonly parentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#post_request_map MonitorFolder#post_request_map}
  */
  readonly postRequestMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#type MonitorFolder#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#version MonitorFolder#version}
  */
  readonly version?: number;
  /**
  * obj_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#obj_permission MonitorFolder#obj_permission}
  */
  readonly objPermission?: MonitorFolderObjPermission[] | cdktf.IResolvable;
}
export interface MonitorFolderObjPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#permissions MonitorFolder#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#subject_id MonitorFolder#subject_id}
  */
  readonly subjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#subject_type MonitorFolder#subject_type}
  */
  readonly subjectType: string;
}

export function monitorFolderObjPermissionToTerraform(struct?: MonitorFolderObjPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    subject_id: cdktf.stringToTerraform(struct!.subjectId),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function monitorFolderObjPermissionToHclTerraform(struct?: MonitorFolderObjPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subject_id: {
      value: cdktf.stringToHclTerraform(struct!.subjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorFolderObjPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorFolderObjPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._subjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectId = this._subjectId;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorFolderObjPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissions = undefined;
      this._subjectId = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissions = value.permissions;
      this._subjectId = value.subjectId;
      this._subjectType = value.subjectType;
    }
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // subject_id - computed: false, optional: false, required: true
  private _subjectId?: string; 
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }
  public set subjectId(value: string) {
    this._subjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectIdInput() {
    return this._subjectId;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}

export class MonitorFolderObjPermissionList extends cdktf.ComplexList {
  public internalValue? : MonitorFolderObjPermission[] | cdktf.IResolvable

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
  public get(index: number): MonitorFolderObjPermissionOutputReference {
    return new MonitorFolderObjPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder sumologic_monitor_folder}
*/
export class MonitorFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_monitor_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorFolder to import
  * @param importFromId The id of the existing MonitorFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_monitor_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/monitor_folder sumologic_monitor_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorFolderConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_monitor_folder',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentType = config.contentType;
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._id = config.id;
    this._isLocked = config.isLocked;
    this._isMutable = config.isMutable;
    this._isSystem = config.isSystem;
    this._modifiedAt = config.modifiedAt;
    this._modifiedBy = config.modifiedBy;
    this._name = config.name;
    this._parentId = config.parentId;
    this._postRequestMap = config.postRequestMap;
    this._type = config.type;
    this._version = config.version;
    this._objPermission.internalValue = config.objPermission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
  }

  // is_mutable - computed: true, optional: true, required: false
  private _isMutable?: boolean | cdktf.IResolvable; 
  public get isMutable() {
    return this.getBooleanAttribute('is_mutable');
  }
  public set isMutable(value: boolean | cdktf.IResolvable) {
    this._isMutable = value;
  }
  public resetIsMutable() {
    this._isMutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMutableInput() {
    return this._isMutable;
  }

  // is_system - computed: true, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // modified_at - computed: true, optional: true, required: false
  private _modifiedAt?: string; 
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }
  public set modifiedAt(value: string) {
    this._modifiedAt = value;
  }
  public resetModifiedAt() {
    this._modifiedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedAtInput() {
    return this._modifiedAt;
  }

  // modified_by - computed: true, optional: true, required: false
  private _modifiedBy?: string; 
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }
  public set modifiedBy(value: string) {
    this._modifiedBy = value;
  }
  public resetModifiedBy() {
    this._modifiedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy;
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // post_request_map - computed: false, optional: true, required: false
  private _postRequestMap?: { [key: string]: string }; 
  public get postRequestMap() {
    return this.getStringMapAttribute('post_request_map');
  }
  public set postRequestMap(value: { [key: string]: string }) {
    this._postRequestMap = value;
  }
  public resetPostRequestMap() {
    this._postRequestMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRequestMapInput() {
    return this._postRequestMap;
  }

  // type - computed: false, optional: true, required: false
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // obj_permission - computed: false, optional: true, required: false
  private _objPermission = new MonitorFolderObjPermissionList(this, "obj_permission", true);
  public get objPermission() {
    return this._objPermission;
  }
  public putObjPermission(value: MonitorFolderObjPermission[] | cdktf.IResolvable) {
    this._objPermission.internalValue = value;
  }
  public resetObjPermission() {
    this._objPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objPermissionInput() {
    return this._objPermission.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_type: cdktf.stringToTerraform(this._contentType),
      created_at: cdktf.stringToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_locked: cdktf.booleanToTerraform(this._isLocked),
      is_mutable: cdktf.booleanToTerraform(this._isMutable),
      is_system: cdktf.booleanToTerraform(this._isSystem),
      modified_at: cdktf.stringToTerraform(this._modifiedAt),
      modified_by: cdktf.stringToTerraform(this._modifiedBy),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      post_request_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._postRequestMap),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.numberToTerraform(this._version),
      obj_permission: cdktf.listMapper(monitorFolderObjPermissionToTerraform, true)(this._objPermission.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      is_locked: {
        value: cdktf.booleanToHclTerraform(this._isLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mutable: {
        value: cdktf.booleanToHclTerraform(this._isMutable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_system: {
        value: cdktf.booleanToHclTerraform(this._isSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      modified_at: {
        value: cdktf.stringToHclTerraform(this._modifiedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_by: {
        value: cdktf.stringToHclTerraform(this._modifiedBy),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_request_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._postRequestMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      obj_permission: {
        value: cdktf.listMapperHcl(monitorFolderObjPermissionToHclTerraform, true)(this._objPermission.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorFolderObjPermissionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
