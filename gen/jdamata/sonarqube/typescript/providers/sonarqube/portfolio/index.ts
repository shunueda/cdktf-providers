// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortfolioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which branch to analyze. If nothing, or '' is specified, the main branch is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#branch Portfolio#branch}
  */
  readonly branch?: string;
  /**
  * A description of the Portfolio to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#description Portfolio#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#id Portfolio#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key of the Portfolio to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#key Portfolio#key}
  */
  readonly key: string;
  /**
  * The name of the Portfolio to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#name Portfolio#name}
  */
  readonly name: string;
  /**
  * A regular expression that is used to match Projects with a matching name OR key. If they match, they are added to the Portfolio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#regexp Portfolio#regexp}
  */
  readonly regexp?: string;
  /**
  * How to populate the Portfolio to create. Possible values are `NONE`, `MANUAL`, `TAGS`, `REGEXP` or `REST`. [See docs](https://docs.sonarqube.org/9.8/project-administration/managing-portfolios/#populating-portfolios) for how Portfolio population works
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#selection_mode Portfolio#selection_mode}
  */
  readonly selectionMode?: string;
  /**
  * List of Project tags to populate the Portfolio from. Only active when `selection_mode` is `TAGS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#tags Portfolio#tags}
  */
  readonly tags?: string[];
  /**
  * Whether the created portfolio should be visible to everyone, or only specific user/groups. If no visibility is specified, the default portfolio visibility will be `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#visibility Portfolio#visibility}
  */
  readonly visibility?: string;
  /**
  * selected_projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#selected_projects Portfolio#selected_projects}
  */
  readonly selectedProjects?: PortfolioSelectedProjects[] | cdktf.IResolvable;
}
export interface PortfolioSelectedProjects {
  /**
  * The project key of the project to add to the portfolio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#project_key Portfolio#project_key}
  */
  readonly projectKey: string;
  /**
  * A set of branches for the project to add to the portfolio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#selected_branches Portfolio#selected_branches}
  */
  readonly selectedBranches?: string[];
}

export function portfolioSelectedProjectsToTerraform(struct?: PortfolioSelectedProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    selected_branches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectedBranches),
  }
}


export function portfolioSelectedProjectsToHclTerraform(struct?: PortfolioSelectedProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_branches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectedBranches),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortfolioSelectedProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortfolioSelectedProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._selectedBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedBranches = this._selectedBranches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortfolioSelectedProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectKey = undefined;
      this._selectedBranches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectKey = value.projectKey;
      this._selectedBranches = value.selectedBranches;
    }
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // selected_branches - computed: false, optional: true, required: false
  private _selectedBranches?: string[]; 
  public get selectedBranches() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_branches'));
  }
  public set selectedBranches(value: string[]) {
    this._selectedBranches = value;
  }
  public resetSelectedBranches() {
    this._selectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedBranchesInput() {
    return this._selectedBranches;
  }
}

export class PortfolioSelectedProjectsList extends cdktf.ComplexList {
  public internalValue? : PortfolioSelectedProjects[] | cdktf.IResolvable

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
  public get(index: number): PortfolioSelectedProjectsOutputReference {
    return new PortfolioSelectedProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio sonarqube_portfolio}
*/
export class Portfolio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_portfolio";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Portfolio resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Portfolio to import
  * @param importFromId The id of the existing Portfolio that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Portfolio to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_portfolio", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/portfolio sonarqube_portfolio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortfolioConfig
  */
  public constructor(scope: Construct, id: string, config: PortfolioConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_portfolio',
      terraformGeneratorMetadata: {
        providerName: 'sonarqube',
        providerVersion: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._description = config.description;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._regexp = config.regexp;
    this._selectionMode = config.selectionMode;
    this._tags = config.tags;
    this._visibility = config.visibility;
    this._selectedProjects.internalValue = config.selectedProjects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // selection_mode - computed: false, optional: true, required: false
  private _selectionMode?: string; 
  public get selectionMode() {
    return this.getStringAttribute('selection_mode');
  }
  public set selectionMode(value: string) {
    this._selectionMode = value;
  }
  public resetSelectionMode() {
    this._selectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // selected_projects - computed: false, optional: true, required: false
  private _selectedProjects = new PortfolioSelectedProjectsList(this, "selected_projects", true);
  public get selectedProjects() {
    return this._selectedProjects;
  }
  public putSelectedProjects(value: PortfolioSelectedProjects[] | cdktf.IResolvable) {
    this._selectedProjects.internalValue = value;
  }
  public resetSelectedProjects() {
    this._selectedProjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedProjectsInput() {
    return this._selectedProjects.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      regexp: cdktf.stringToTerraform(this._regexp),
      selection_mode: cdktf.stringToTerraform(this._selectionMode),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      visibility: cdktf.stringToTerraform(this._visibility),
      selected_projects: cdktf.listMapper(portfolioSelectedProjectsToTerraform, true)(this._selectedProjects.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      regexp: {
        value: cdktf.stringToHclTerraform(this._regexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_mode: {
        value: cdktf.stringToHclTerraform(this._selectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_projects: {
        value: cdktf.listMapperHcl(portfolioSelectedProjectsToHclTerraform, true)(this._selectedProjects.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PortfolioSelectedProjectsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
