// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformResourceGroupInMyProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user id which created the resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#created_by_id DataSamsungcloudplatformResourceGroupInMyProjects#created_by_id}
  */
  readonly createdById?: string;
  /**
  * The user name which created the resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#created_by_name DataSamsungcloudplatformResourceGroupInMyProjects#created_by_name}
  */
  readonly createdByName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#id DataSamsungcloudplatformResourceGroupInMyProjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user id which modified the resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#modified_by_id DataSamsungcloudplatformResourceGroupInMyProjects#modified_by_id}
  */
  readonly modifiedById?: string;
  /**
  * The user name which modified the resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#modified_by_name DataSamsungcloudplatformResourceGroupInMyProjects#modified_by_name}
  */
  readonly modifiedByName?: string;
  /**
  * Resource group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#resource_group_description DataSamsungcloudplatformResourceGroupInMyProjects#resource_group_description}
  */
  readonly resourceGroupDescription?: string;
  /**
  * Resource group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#resource_group_id DataSamsungcloudplatformResourceGroupInMyProjects#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * Resource group types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#target_resource_types DataSamsungcloudplatformResourceGroupInMyProjects#target_resource_types}
  */
  readonly targetResourceTypes?: string[];
}
export interface DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTag {
}

export function dataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTagToTerraform(struct?: DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTagToHclTerraform(struct?: DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTagList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTagOutputReference {
    return new DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects samsungcloudplatform_resource_group_in_my_projects}
*/
export class DataSamsungcloudplatformResourceGroupInMyProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_resource_group_in_my_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformResourceGroupInMyProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformResourceGroupInMyProjects to import
  * @param importFromId The id of the existing DataSamsungcloudplatformResourceGroupInMyProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformResourceGroupInMyProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_resource_group_in_my_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_in_my_projects samsungcloudplatform_resource_group_in_my_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformResourceGroupInMyProjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformResourceGroupInMyProjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_resource_group_in_my_projects',
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
    this._createdByName = config.createdByName;
    this._id = config.id;
    this._modifiedById = config.modifiedById;
    this._modifiedByName = config.modifiedByName;
    this._resourceGroupDescription = config.resourceGroupDescription;
    this._resourceGroupId = config.resourceGroupId;
    this._targetResourceTypes = config.targetResourceTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_id - computed: false, optional: true, required: false
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

  // created_by_name - computed: false, optional: true, required: false
  private _createdByName?: string; 
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }
  public set createdByName(value: string) {
    this._createdByName = value;
  }
  public resetCreatedByName() {
    this._createdByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByNameInput() {
    return this._createdByName;
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
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

  // modified_by_email - computed: true, optional: false, required: false
  public get modifiedByEmail() {
    return this.getStringAttribute('modified_by_email');
  }

  // modified_by_id - computed: false, optional: true, required: false
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

  // modified_by_name - computed: false, optional: true, required: false
  private _modifiedByName?: string; 
  public get modifiedByName() {
    return this.getStringAttribute('modified_by_name');
  }
  public set modifiedByName(value: string) {
    this._modifiedByName = value;
  }
  public resetModifiedByName() {
    this._modifiedByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByNameInput() {
    return this._modifiedByName;
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

  // resource_group_description - computed: true, optional: true, required: false
  private _resourceGroupDescription?: string; 
  public get resourceGroupDescription() {
    return this.getStringAttribute('resource_group_description');
  }
  public set resourceGroupDescription(value: string) {
    this._resourceGroupDescription = value;
  }
  public resetResourceGroupDescription() {
    this._resourceGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupDescriptionInput() {
    return this._resourceGroupDescription;
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // target_resource_tag - computed: true, optional: false, required: false
  private _targetResourceTag = new DataSamsungcloudplatformResourceGroupInMyProjectsTargetResourceTagList(this, "target_resource_tag", false);
  public get targetResourceTag() {
    return this._targetResourceTag;
  }

  // target_resource_types - computed: true, optional: true, required: false
  private _targetResourceTypes?: string[]; 
  public get targetResourceTypes() {
    return this.getListAttribute('target_resource_types');
  }
  public set targetResourceTypes(value: string[]) {
    this._targetResourceTypes = value;
  }
  public resetTargetResourceTypes() {
    this._targetResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypesInput() {
    return this._targetResourceTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by_id: cdktf.stringToTerraform(this._createdById),
      created_by_name: cdktf.stringToTerraform(this._createdByName),
      id: cdktf.stringToTerraform(this._id),
      modified_by_id: cdktf.stringToTerraform(this._modifiedById),
      modified_by_name: cdktf.stringToTerraform(this._modifiedByName),
      resource_group_description: cdktf.stringToTerraform(this._resourceGroupDescription),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      target_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetResourceTypes),
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
      created_by_name: {
        value: cdktf.stringToHclTerraform(this._createdByName),
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
      modified_by_id: {
        value: cdktf.stringToHclTerraform(this._modifiedById),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modified_by_name: {
        value: cdktf.stringToHclTerraform(this._modifiedByName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_description: {
        value: cdktf.stringToHclTerraform(this._resourceGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetResourceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
