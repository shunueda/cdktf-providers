// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformResourceGroupResourcesInMyProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user id which created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects#created_by_id DataSamsungcloudplatformResourceGroupResourcesInMyProjects#created_by_id}
  */
  readonly createdById?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects#id DataSamsungcloudplatformResourceGroupResourcesInMyProjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user id which modified the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects#modified_by_id DataSamsungcloudplatformResourceGroupResourcesInMyProjects#modified_by_id}
  */
  readonly modifiedById?: string;
  /**
  * Resource group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects#resource_group_id DataSamsungcloudplatformResourceGroupResourcesInMyProjects#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * Resource id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects#resource_id DataSamsungcloudplatformResourceGroupResourcesInMyProjects#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects#resource_name DataSamsungcloudplatformResourceGroupResourcesInMyProjects#resource_name}
  */
  readonly resourceName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects samsungcloudplatform_resource_group_resources_in_my_projects}
*/
export class DataSamsungcloudplatformResourceGroupResourcesInMyProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_resource_group_resources_in_my_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformResourceGroupResourcesInMyProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformResourceGroupResourcesInMyProjects to import
  * @param importFromId The id of the existing DataSamsungcloudplatformResourceGroupResourcesInMyProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformResourceGroupResourcesInMyProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_resource_group_resources_in_my_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/resource_group_resources_in_my_projects samsungcloudplatform_resource_group_resources_in_my_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformResourceGroupResourcesInMyProjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformResourceGroupResourcesInMyProjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_resource_group_resources_in_my_projects',
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
    this._modifiedById = config.modifiedById;
    this._resourceGroupId = config.resourceGroupId;
    this._resourceId = config.resourceId;
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new cdktf.StringMapList(this, "contents", false);
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
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
      modified_by_id: cdktf.stringToTerraform(this._modifiedById),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
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
      modified_by_id: {
        value: cdktf.stringToHclTerraform(this._modifiedById),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
