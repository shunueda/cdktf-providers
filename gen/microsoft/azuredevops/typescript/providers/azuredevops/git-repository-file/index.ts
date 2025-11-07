// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitRepositoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#author_email GitRepositoryFile#author_email}
  */
  readonly authorEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#author_name GitRepositoryFile#author_name}
  */
  readonly authorName?: string;
  /**
  * The branch name, defaults to "refs/heads/master"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#branch GitRepositoryFile#branch}
  */
  readonly branch?: string;
  /**
  * The commit message when creating or updating the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#commit_message GitRepositoryFile#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#committer_email GitRepositoryFile#committer_email}
  */
  readonly committerEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#committer_name GitRepositoryFile#committer_name}
  */
  readonly committerName?: string;
  /**
  * The file's content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#content GitRepositoryFile#content}
  */
  readonly content: string;
  /**
  * The file path to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#file GitRepositoryFile#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#id GitRepositoryFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable overwriting existing files, defaults to "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#overwrite_on_create GitRepositoryFile#overwrite_on_create}
  */
  readonly overwriteOnCreate?: boolean | cdktf.IResolvable;
  /**
  * The repository ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#repository_id GitRepositoryFile#repository_id}
  */
  readonly repositoryId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#timeouts GitRepositoryFile#timeouts}
  */
  readonly timeouts?: GitRepositoryFileTimeouts;
}
export interface GitRepositoryFileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#create GitRepositoryFile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#delete GitRepositoryFile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#read GitRepositoryFile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#update GitRepositoryFile#update}
  */
  readonly update?: string;
}

export function gitRepositoryFileTimeoutsToTerraform(struct?: GitRepositoryFileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gitRepositoryFileTimeoutsToHclTerraform(struct?: GitRepositoryFileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GitRepositoryFileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GitRepositoryFileTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GitRepositoryFileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file azuredevops_git_repository_file}
*/
export class GitRepositoryFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_git_repository_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GitRepositoryFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GitRepositoryFile to import
  * @param importFromId The id of the existing GitRepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GitRepositoryFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_git_repository_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/git_repository_file azuredevops_git_repository_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitRepositoryFileConfig
  */
  public constructor(scope: Construct, id: string, config: GitRepositoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_git_repository_file',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorEmail = config.authorEmail;
    this._authorName = config.authorName;
    this._branch = config.branch;
    this._commitMessage = config.commitMessage;
    this._committerEmail = config.committerEmail;
    this._committerName = config.committerName;
    this._content = config.content;
    this._file = config.file;
    this._id = config.id;
    this._overwriteOnCreate = config.overwriteOnCreate;
    this._repositoryId = config.repositoryId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_email - computed: true, optional: true, required: false
  private _authorEmail?: string; 
  public get authorEmail() {
    return this.getStringAttribute('author_email');
  }
  public set authorEmail(value: string) {
    this._authorEmail = value;
  }
  public resetAuthorEmail() {
    this._authorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailInput() {
    return this._authorEmail;
  }

  // author_name - computed: true, optional: true, required: false
  private _authorName?: string; 
  public get authorName() {
    return this.getStringAttribute('author_name');
  }
  public set authorName(value: string) {
    this._authorName = value;
  }
  public resetAuthorName() {
    this._authorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorNameInput() {
    return this._authorName;
  }

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

  // commit_message - computed: true, optional: true, required: false
  private _commitMessage?: string; 
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
  public set commitMessage(value: string) {
    this._commitMessage = value;
  }
  public resetCommitMessage() {
    this._commitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageInput() {
    return this._commitMessage;
  }

  // committer_email - computed: true, optional: true, required: false
  private _committerEmail?: string; 
  public get committerEmail() {
    return this.getStringAttribute('committer_email');
  }
  public set committerEmail(value: string) {
    this._committerEmail = value;
  }
  public resetCommitterEmail() {
    this._committerEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get committerEmailInput() {
    return this._committerEmail;
  }

  // committer_name - computed: true, optional: true, required: false
  private _committerName?: string; 
  public get committerName() {
    return this.getStringAttribute('committer_name');
  }
  public set committerName(value: string) {
    this._committerName = value;
  }
  public resetCommitterName() {
    this._committerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get committerNameInput() {
    return this._committerName;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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

  // overwrite_on_create - computed: false, optional: true, required: false
  private _overwriteOnCreate?: boolean | cdktf.IResolvable; 
  public get overwriteOnCreate() {
    return this.getBooleanAttribute('overwrite_on_create');
  }
  public set overwriteOnCreate(value: boolean | cdktf.IResolvable) {
    this._overwriteOnCreate = value;
  }
  public resetOverwriteOnCreate() {
    this._overwriteOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteOnCreateInput() {
    return this._overwriteOnCreate;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GitRepositoryFileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GitRepositoryFileTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author_email: cdktf.stringToTerraform(this._authorEmail),
      author_name: cdktf.stringToTerraform(this._authorName),
      branch: cdktf.stringToTerraform(this._branch),
      commit_message: cdktf.stringToTerraform(this._commitMessage),
      committer_email: cdktf.stringToTerraform(this._committerEmail),
      committer_name: cdktf.stringToTerraform(this._committerName),
      content: cdktf.stringToTerraform(this._content),
      file: cdktf.stringToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      overwrite_on_create: cdktf.booleanToTerraform(this._overwriteOnCreate),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      timeouts: gitRepositoryFileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author_email: {
        value: cdktf.stringToHclTerraform(this._authorEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      author_name: {
        value: cdktf.stringToHclTerraform(this._authorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_message: {
        value: cdktf.stringToHclTerraform(this._commitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      committer_email: {
        value: cdktf.stringToHclTerraform(this._committerEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      committer_name: {
        value: cdktf.stringToHclTerraform(this._committerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
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
      overwrite_on_create: {
        value: cdktf.booleanToHclTerraform(this._overwriteOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: gitRepositoryFileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GitRepositoryFileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
