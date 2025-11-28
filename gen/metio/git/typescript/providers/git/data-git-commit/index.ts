// https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/commit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitCommitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/commit#directory DataGitCommit#directory}
  */
  readonly directory: string;
  /**
  * The [revision](https://www.git-scm.com/docs/gitrevisions) of the commit to fetch. Note that `go-git` does not [support](https://pkg.go.dev/github.com/go-git/go-git/v5#Repository.ResolveRevision) every revision type at the moment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/commit#revision DataGitCommit#revision}
  */
  readonly revision: string;
}
export interface DataGitCommitAuthor {
}

export function dataGitCommitAuthorToTerraform(struct?: DataGitCommitAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitCommitAuthorToHclTerraform(struct?: DataGitCommitAuthor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitCommitAuthorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitCommitAuthor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitCommitAuthor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataGitCommitCommitter {
}

export function dataGitCommitCommitterToTerraform(struct?: DataGitCommitCommitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitCommitCommitterToHclTerraform(struct?: DataGitCommitCommitter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitCommitCommitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitCommitCommitter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitCommitCommitter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/commit git_commit}
*/
export class DataGitCommit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_commit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitCommit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitCommit to import
  * @param importFromId The id of the existing DataGitCommit that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/commit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitCommit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_commit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/commit git_commit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitCommitConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitCommitConfig) {
    super(scope, id, {
      terraformResourceType: 'git_commit',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.11.28',
        providerVersionConstraint: '2025.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directory = config.directory;
    this._revision = config.revision;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: true, optional: false, required: false
  private _author = new DataGitCommitAuthorOutputReference(this, "author");
  public get author() {
    return this._author;
  }

  // committer - computed: true, optional: false, required: false
  private _committer = new DataGitCommitCommitterOutputReference(this, "committer");
  public get committer() {
    return this._committer;
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // files - computed: true, optional: false, required: false
  public get files() {
    return this.getListAttribute('files');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // revision - computed: false, optional: false, required: true
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // tree_sha1 - computed: true, optional: false, required: false
  public get treeSha1() {
    return this.getStringAttribute('tree_sha1');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory: cdktf.stringToTerraform(this._directory),
      revision: cdktf.stringToTerraform(this._revision),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
