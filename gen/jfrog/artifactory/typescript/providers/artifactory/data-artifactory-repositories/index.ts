// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/repositories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryRepositoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter for repositories of a specific package type. Allowed values are: alpine, bower, cargo, chef, cocoapods, composer, conan, conda, cran, debian, docker, gems, generic, gitlfs, go, gradle, helm, hex, huggingfaceml, ivy, maven, npm, nuget, opkg, p2, pub, puppet, pypi, rpm, sbt, swift, terraform, terraformbackend, vagrant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/repositories#package_type DataArtifactoryRepositories#package_type}
  */
  readonly packageType?: string;
  /**
  * Filter for repositories assigned to a specific project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/repositories#project_key DataArtifactoryRepositories#project_key}
  */
  readonly projectKey?: string;
  /**
  * Filter for repositories of a specific type. Allowed values are: local, remote, virtual, federated, distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/repositories#repository_type DataArtifactoryRepositories#repository_type}
  */
  readonly repositoryType?: string;
}
export interface DataArtifactoryRepositoriesRepos {
}

export function dataArtifactoryRepositoriesReposToTerraform(struct?: DataArtifactoryRepositoriesRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataArtifactoryRepositoriesReposToHclTerraform(struct?: DataArtifactoryRepositoriesRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataArtifactoryRepositoriesReposOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataArtifactoryRepositoriesRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataArtifactoryRepositoriesRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataArtifactoryRepositoriesReposList extends cdktf.ComplexList {

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
  public get(index: number): DataArtifactoryRepositoriesReposOutputReference {
    return new DataArtifactoryRepositoriesReposOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/repositories artifactory_repositories}
*/
export class DataArtifactoryRepositories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_repositories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryRepositories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryRepositories to import
  * @param importFromId The id of the existing DataArtifactoryRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/repositories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryRepositories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_repositories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/repositories artifactory_repositories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryRepositoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryRepositoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'artifactory_repositories',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._packageType = config.packageType;
    this._projectKey = config.projectKey;
    this._repositoryType = config.repositoryType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // repos - computed: true, optional: false, required: false
  private _repos = new DataArtifactoryRepositoriesReposList(this, "repos", true);
  public get repos() {
    return this._repos;
  }

  // repository_type - computed: false, optional: true, required: false
  private _repositoryType?: string; 
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }
  public set repositoryType(value: string) {
    this._repositoryType = value;
  }
  public resetRepositoryType() {
    this._repositoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryTypeInput() {
    return this._repositoryType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      package_type: cdktf.stringToTerraform(this._packageType),
      project_key: cdktf.stringToTerraform(this._projectKey),
      repository_type: cdktf.stringToTerraform(this._repositoryType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_type: {
        value: cdktf.stringToHclTerraform(this._repositoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
