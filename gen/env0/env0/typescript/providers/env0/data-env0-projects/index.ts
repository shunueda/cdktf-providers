// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0ProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/projects#id DataEnv0Projects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * set to 'true' to include archived projects (defaults to 'false')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/projects#include_archived_projects DataEnv0Projects#include_archived_projects}
  */
  readonly includeArchivedProjects?: boolean | cdktf.IResolvable;
}
export interface DataEnv0ProjectsProjects {
}

export function dataEnv0ProjectsProjectsToTerraform(struct?: DataEnv0ProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEnv0ProjectsProjectsToHclTerraform(struct?: DataEnv0ProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEnv0ProjectsProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEnv0ProjectsProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEnv0ProjectsProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hierarchy - computed: true, optional: false, required: false
  public get hierarchy() {
    return this.getStringAttribute('hierarchy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_archived - computed: true, optional: false, required: false
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_project_id - computed: true, optional: false, required: false
  public get parentProjectId() {
    return this.getStringAttribute('parent_project_id');
  }
}

export class DataEnv0ProjectsProjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataEnv0ProjectsProjectsOutputReference {
    return new DataEnv0ProjectsProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/projects env0_projects}
*/
export class DataEnv0Projects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0Projects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0Projects to import
  * @param importFromId The id of the existing DataEnv0Projects that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0Projects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/projects env0_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0ProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0ProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_projects',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._includeArchivedProjects = config.includeArchivedProjects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_archived_projects - computed: false, optional: true, required: false
  private _includeArchivedProjects?: boolean | cdktf.IResolvable; 
  public get includeArchivedProjects() {
    return this.getBooleanAttribute('include_archived_projects');
  }
  public set includeArchivedProjects(value: boolean | cdktf.IResolvable) {
    this._includeArchivedProjects = value;
  }
  public resetIncludeArchivedProjects() {
    this._includeArchivedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeArchivedProjectsInput() {
    return this._includeArchivedProjects;
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new DataEnv0ProjectsProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_archived_projects: cdktf.booleanToTerraform(this._includeArchivedProjects),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_archived_projects: {
        value: cdktf.booleanToHclTerraform(this._includeArchivedProjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
