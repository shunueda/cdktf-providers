// https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#all Commit#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Enable empty commits to be created. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#allow_empty_commits Commit#allow_empty_commits}
  */
  readonly allowEmptyCommits?: boolean | cdktf.IResolvable;
  /**
  * The original author of the commit. If none is specified, the author will be read from the Git configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#author Commit#author}
  */
  readonly author?: CommitAuthor;
  /**
  * The person performing the commit. If none is specified, the author is used as committer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#committer Commit#committer}
  */
  readonly committer?: CommitCommitter;
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#directory Commit#directory}
  */
  readonly directory: string;
  /**
  * The commit message to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#message Commit#message}
  */
  readonly message: string;
}
export interface CommitAuthor {
  /**
  * The email address of the author.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#email Commit#email}
  */
  readonly email?: string;
  /**
  * The name of the author.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#name Commit#name}
  */
  readonly name?: string;
}

export function commitAuthorToTerraform(struct?: CommitAuthor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function commitAuthorToHclTerraform(struct?: CommitAuthor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommitAuthorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CommitAuthor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitAuthor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface CommitCommitter {
  /**
  * The email address of the committer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#email Commit#email}
  */
  readonly email?: string;
  /**
  * The name of the committer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#name Commit#name}
  */
  readonly name?: string;
}

export function commitCommitterToTerraform(struct?: CommitCommitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function commitCommitterToHclTerraform(struct?: CommitCommitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CommitCommitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CommitCommitter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CommitCommitter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit git_commit}
*/
export class Commit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_commit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Commit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Commit to import
  * @param importFromId The id of the existing Commit that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Commit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_commit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.11.14/docs/resources/commit git_commit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommitConfig
  */
  public constructor(scope: Construct, id: string, config: CommitConfig) {
    super(scope, id, {
      terraformResourceType: 'git_commit',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.11.14',
        providerVersionConstraint: '2025.11.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._allowEmptyCommits = config.allowEmptyCommits;
    this._author.internalValue = config.author;
    this._committer.internalValue = config.committer;
    this._directory = config.directory;
    this._message = config.message;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: true, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // allow_empty_commits - computed: true, optional: true, required: false
  private _allowEmptyCommits?: boolean | cdktf.IResolvable; 
  public get allowEmptyCommits() {
    return this.getBooleanAttribute('allow_empty_commits');
  }
  public set allowEmptyCommits(value: boolean | cdktf.IResolvable) {
    this._allowEmptyCommits = value;
  }
  public resetAllowEmptyCommits() {
    this._allowEmptyCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyCommitsInput() {
    return this._allowEmptyCommits;
  }

  // author - computed: true, optional: true, required: false
  private _author = new CommitAuthorOutputReference(this, "author");
  public get author() {
    return this._author;
  }
  public putAuthor(value: CommitAuthor) {
    this._author.internalValue = value;
  }
  public resetAuthor() {
    this._author.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author.internalValue;
  }

  // committer - computed: true, optional: true, required: false
  private _committer = new CommitCommitterOutputReference(this, "committer");
  public get committer() {
    return this._committer;
  }
  public putCommitter(value: CommitCommitter) {
    this._committer.internalValue = value;
  }
  public resetCommitter() {
    this._committer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get committerInput() {
    return this._committer.internalValue;
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
    return this.getNumberAttribute('id');
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.booleanToTerraform(this._all),
      allow_empty_commits: cdktf.booleanToTerraform(this._allowEmptyCommits),
      author: commitAuthorToTerraform(this._author.internalValue),
      committer: commitCommitterToTerraform(this._committer.internalValue),
      directory: cdktf.stringToTerraform(this._directory),
      message: cdktf.stringToTerraform(this._message),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.booleanToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_empty_commits: {
        value: cdktf.booleanToHclTerraform(this._allowEmptyCommits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      author: {
        value: commitAuthorToHclTerraform(this._author.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CommitAuthor",
      },
      committer: {
        value: commitCommitterToHclTerraform(this._committer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CommitCommitter",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
