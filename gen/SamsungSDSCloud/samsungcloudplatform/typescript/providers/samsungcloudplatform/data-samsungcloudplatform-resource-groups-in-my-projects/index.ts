// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformResourceGroupsInMyProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user id which created the resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects#created_by_id DataSamsungcloudplatformResourceGroupsInMyProjects#created_by_id}
  */
  readonly createdById?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects#id DataSamsungcloudplatformResourceGroupsInMyProjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user email which modified the resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects#modified_by_email DataSamsungcloudplatformResourceGroupsInMyProjects#modified_by_email}
  */
  readonly modifiedByEmail?: string;
  /**
  * The user id which modified the resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects#modified_by_id DataSamsungcloudplatformResourceGroupsInMyProjects#modified_by_id}
  */
  readonly modifiedById?: string;
  /**
  * Project id list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects#project_ids DataSamsungcloudplatformResourceGroupsInMyProjects#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Resource group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects#resource_group_name DataSamsungcloudplatformResourceGroupsInMyProjects#resource_group_name}
  */
  readonly resourceGroupName?: string;
}
export interface DataSamsungcloudplatformResourceGroupsInMyProjectsContents {
}

export function dataSamsungcloudplatformResourceGroupsInMyProjectsContentsToTerraform(struct?: DataSamsungcloudplatformResourceGroupsInMyProjectsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformResourceGroupsInMyProjectsContentsToHclTerraform(struct?: DataSamsungcloudplatformResourceGroupsInMyProjectsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformResourceGroupsInMyProjectsContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSamsungcloudplatformResourceGroupsInMyProjectsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformResourceGroupsInMyProjectsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // modified_by_email - computed: true, optional: false, required: false
  public get modifiedByEmail() {
    return this.getStringAttribute('modified_by_email');
  }

  // modified_by_id - computed: true, optional: false, required: false
  public get modifiedById() {
    return this.getStringAttribute('modified_by_id');
  }

  // modified_by_name - computed: true, optional: false, required: false
  public get modifiedByName() {
    return this.getStringAttribute('modified_by_name');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // resource_group_description - computed: true, optional: false, required: false
  public get resourceGroupDescription() {
    return this.getStringAttribute('resource_group_description');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
}

export class DataSamsungcloudplatformResourceGroupsInMyProjectsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformResourceGroupsInMyProjectsContentsOutputReference {
    return new DataSamsungcloudplatformResourceGroupsInMyProjectsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects samsungcloudplatform_resource_groups_in_my_projects}
*/
export class DataSamsungcloudplatformResourceGroupsInMyProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_resource_groups_in_my_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformResourceGroupsInMyProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformResourceGroupsInMyProjects to import
  * @param importFromId The id of the existing DataSamsungcloudplatformResourceGroupsInMyProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformResourceGroupsInMyProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_resource_groups_in_my_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_groups_in_my_projects samsungcloudplatform_resource_groups_in_my_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformResourceGroupsInMyProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformResourceGroupsInMyProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_resource_groups_in_my_projects',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdById = config.createdById;
    this._id = config.id;
    this._modifiedByEmail = config.modifiedByEmail;
    this._modifiedById = config.modifiedById;
    this._projectIds = config.projectIds;
    this._resourceGroupName = config.resourceGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformResourceGroupsInMyProjectsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

  // created_by_id - computed: true, optional: true, required: false
  private _createdById?: string; 
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }
  public set createdById(value: string) {
    this._createdById = value;
  }
  public resetCreatedById() {
    this._createdById = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByIdInput() {
    return this._createdById;
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

  // modified_by_email - computed: false, optional: true, required: false
  private _modifiedByEmail?: string; 
  public get modifiedByEmail() {
    return this.getStringAttribute('modified_by_email');
  }
  public set modifiedByEmail(value: string) {
    this._modifiedByEmail = value;
  }
  public resetModifiedByEmail() {
    this._modifiedByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByEmailInput() {
    return this._modifiedByEmail;
  }

  // modified_by_id - computed: true, optional: true, required: false
  private _modifiedById?: string; 
  public get modifiedById() {
    return this.getStringAttribute('modified_by_id');
  }
  public set modifiedById(value: string) {
    this._modifiedById = value;
  }
  public resetModifiedById() {
    this._modifiedById = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByIdInput() {
    return this._modifiedById;
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by_id: cdktf.stringToTerraform(this._createdById),
      id: cdktf.stringToTerraform(this._id),
      modified_by_email: cdktf.stringToTerraform(this._modifiedByEmail),
      modified_by_id: cdktf.stringToTerraform(this._modifiedById),
      project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectIds),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by_id: {
        value: cdktf.stringToHclTerraform(this._createdById),
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
      modified_by_email: {
        value: cdktf.stringToHclTerraform(this._modifiedByEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_by_id: {
        value: cdktf.stringToHclTerraform(this._modifiedById),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
