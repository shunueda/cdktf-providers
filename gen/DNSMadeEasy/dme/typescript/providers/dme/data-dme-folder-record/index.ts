// https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDmeFolderRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#default_folder DataDmeFolderRecord#default_folder}
  */
  readonly defaultFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#domains DataDmeFolderRecord#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#id DataDmeFolderRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#name DataDmeFolderRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#secondaries DataDmeFolderRecord#secondaries}
  */
  readonly secondaries?: string[];
  /**
  * folder_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#folder_permissions DataDmeFolderRecord#folder_permissions}
  */
  readonly folderPermissions?: DataDmeFolderRecordFolderPermissions[] | cdktf.IResolvable;
}
export interface DataDmeFolderRecordFolderPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#group_id DataDmeFolderRecord#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#group_name DataDmeFolderRecord#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#permission DataDmeFolderRecord#permission}
  */
  readonly permission?: string;
}

export function dataDmeFolderRecordFolderPermissionsToTerraform(struct?: DataDmeFolderRecordFolderPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataDmeFolderRecordFolderPermissionsToHclTerraform(struct?: DataDmeFolderRecordFolderPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDmeFolderRecordFolderPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDmeFolderRecordFolderPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDmeFolderRecordFolderPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._groupName = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._groupName = value.groupName;
      this._permission = value.permission;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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
}

export class DataDmeFolderRecordFolderPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataDmeFolderRecordFolderPermissions[] | cdktf.IResolvable

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
  public get(index: number): DataDmeFolderRecordFolderPermissionsOutputReference {
    return new DataDmeFolderRecordFolderPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record dme_folder_record}
*/
export class DataDmeFolderRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dme_folder_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDmeFolderRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDmeFolderRecord to import
  * @param importFromId The id of the existing DataDmeFolderRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDmeFolderRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dme_folder_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/data-sources/folder_record dme_folder_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDmeFolderRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataDmeFolderRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'dme_folder_record',
      terraformGeneratorMetadata: {
        providerName: 'dme',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultFolder = config.defaultFolder;
    this._domains = config.domains;
    this._id = config.id;
    this._name = config.name;
    this._secondaries = config.secondaries;
    this._folderPermissions.internalValue = config.folderPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_folder - computed: true, optional: true, required: false
  private _defaultFolder?: string; 
  public get defaultFolder() {
    return this.getStringAttribute('default_folder');
  }
  public set defaultFolder(value: string) {
    this._defaultFolder = value;
  }
  public resetDefaultFolder() {
    this._defaultFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFolderInput() {
    return this._defaultFolder;
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // secondaries - computed: true, optional: true, required: false
  private _secondaries?: string[]; 
  public get secondaries() {
    return this.getListAttribute('secondaries');
  }
  public set secondaries(value: string[]) {
    this._secondaries = value;
  }
  public resetSecondaries() {
    this._secondaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondariesInput() {
    return this._secondaries;
  }

  // folder_permissions - computed: false, optional: true, required: false
  private _folderPermissions = new DataDmeFolderRecordFolderPermissionsList(this, "folder_permissions", true);
  public get folderPermissions() {
    return this._folderPermissions;
  }
  public putFolderPermissions(value: DataDmeFolderRecordFolderPermissions[] | cdktf.IResolvable) {
    this._folderPermissions.internalValue = value;
  }
  public resetFolderPermissions() {
    this._folderPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPermissionsInput() {
    return this._folderPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_folder: cdktf.stringToTerraform(this._defaultFolder),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secondaries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaries),
      folder_permissions: cdktf.listMapper(dataDmeFolderRecordFolderPermissionsToTerraform, true)(this._folderPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_folder: {
        value: cdktf.stringToHclTerraform(this._defaultFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      secondaries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folder_permissions: {
        value: cdktf.listMapperHcl(dataDmeFolderRecordFolderPermissionsToHclTerraform, true)(this._folderPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataDmeFolderRecordFolderPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
