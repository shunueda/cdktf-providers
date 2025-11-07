// https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBiganimalProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Query to filter project list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects#query DataBiganimalProjects#query}
  */
  readonly query?: string;
}
export interface DataBiganimalProjectsProjectsCloudProviders {
}

export function dataBiganimalProjectsProjectsCloudProvidersToTerraform(struct?: DataBiganimalProjectsProjectsCloudProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalProjectsProjectsCloudProvidersToHclTerraform(struct?: DataBiganimalProjectsProjectsCloudProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalProjectsProjectsCloudProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalProjectsProjectsCloudProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalProjectsProjectsCloudProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // cloud_provider_id - computed: true, optional: false, required: false
  public get cloudProviderId() {
    return this.getStringAttribute('cloud_provider_id');
  }

  // cloud_provider_name - computed: true, optional: false, required: false
  public get cloudProviderName() {
    return this.getStringAttribute('cloud_provider_name');
  }
}

export class DataBiganimalProjectsProjectsCloudProvidersList extends cdktf.ComplexList {
  public internalValue? : DataBiganimalProjectsProjectsCloudProviders[] | cdktf.IResolvable

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
  public get(index: number): DataBiganimalProjectsProjectsCloudProvidersOutputReference {
    return new DataBiganimalProjectsProjectsCloudProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalProjectsProjectsTags {
}

export function dataBiganimalProjectsProjectsTagsToTerraform(struct?: DataBiganimalProjectsProjectsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBiganimalProjectsProjectsTagsToHclTerraform(struct?: DataBiganimalProjectsProjectsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBiganimalProjectsProjectsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalProjectsProjectsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalProjectsProjectsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // tag_name - computed: true, optional: false, required: false
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
}

export class DataBiganimalProjectsProjectsTagsList extends cdktf.ComplexList {
  public internalValue? : DataBiganimalProjectsProjectsTags[] | cdktf.IResolvable

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
  public get(index: number): DataBiganimalProjectsProjectsTagsOutputReference {
    return new DataBiganimalProjectsProjectsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBiganimalProjectsProjects {
  /**
  * Enabled Cloud Providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects#cloud_providers DataBiganimalProjects#cloud_providers}
  */
  readonly cloudProviders?: DataBiganimalProjectsProjectsCloudProviders[] | cdktf.IResolvable;
  /**
  * Project Name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects#project_name DataBiganimalProjects#project_name}
  */
  readonly projectName: string;
  /**
  * Show existing tags associated with this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects#tags DataBiganimalProjects#tags}
  */
  readonly tags?: DataBiganimalProjectsProjectsTags[] | cdktf.IResolvable;
}

export function dataBiganimalProjectsProjectsToTerraform(struct?: DataBiganimalProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_providers: cdktf.listMapper(dataBiganimalProjectsProjectsCloudProvidersToTerraform, false)(struct!.cloudProviders),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    tags: cdktf.listMapper(dataBiganimalProjectsProjectsTagsToTerraform, false)(struct!.tags),
  }
}


export function dataBiganimalProjectsProjectsToHclTerraform(struct?: DataBiganimalProjectsProjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_providers: {
      value: cdktf.listMapperHcl(dataBiganimalProjectsProjectsCloudProvidersToHclTerraform, false)(struct!.cloudProviders),
      isBlock: true,
      type: "set",
      storageClassType: "DataBiganimalProjectsProjectsCloudProvidersList",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataBiganimalProjectsProjectsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "DataBiganimalProjectsProjectsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBiganimalProjectsProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBiganimalProjectsProjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProviders = this._cloudProviders?.internalValue;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBiganimalProjectsProjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudProviders.internalValue = undefined;
      this._projectName = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudProviders.internalValue = value.cloudProviders;
      this._projectName = value.projectName;
      this._tags.internalValue = value.tags;
    }
  }

  // cloud_providers - computed: true, optional: true, required: false
  private _cloudProviders = new DataBiganimalProjectsProjectsCloudProvidersList(this, "cloud_providers", true);
  public get cloudProviders() {
    return this._cloudProviders;
  }
  public putCloudProviders(value: DataBiganimalProjectsProjectsCloudProviders[] | cdktf.IResolvable) {
    this._cloudProviders.internalValue = value;
  }
  public resetCloudProviders() {
    this._cloudProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProvidersInput() {
    return this._cloudProviders.internalValue;
  }

  // cluster_count - computed: true, optional: false, required: false
  public get clusterCount() {
    return this.getNumberAttribute('cluster_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DataBiganimalProjectsProjectsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataBiganimalProjectsProjectsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }
}

export class DataBiganimalProjectsProjectsList extends cdktf.ComplexList {
  public internalValue? : DataBiganimalProjectsProjects[] | cdktf.IResolvable

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
  public get(index: number): DataBiganimalProjectsProjectsOutputReference {
    return new DataBiganimalProjectsProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects biganimal_projects}
*/
export class DataBiganimalProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "biganimal_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBiganimalProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBiganimalProjects to import
  * @param importFromId The id of the existing DataBiganimalProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBiganimalProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "biganimal_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/enterprisedb/biganimal/3.1.1/docs/data-sources/projects biganimal_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBiganimalProjectsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBiganimalProjectsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'biganimal_projects',
      terraformGeneratorMetadata: {
        providerName: 'biganimal',
        providerVersion: '3.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // projects - computed: true, optional: false, required: false
  private _projects = new DataBiganimalProjectsProjectsList(this, "projects", true);
  public get projects() {
    return this._projects;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      query: cdktf.stringToTerraform(this._query),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
