// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryPolicyAuthorEmailPatternConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#author_email_patterns RepositoryPolicyAuthorEmailPattern#author_email_patterns}
  */
  readonly authorEmailPatterns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#blocking RepositoryPolicyAuthorEmailPattern#blocking}
  */
  readonly blocking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#enabled RepositoryPolicyAuthorEmailPattern#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#id RepositoryPolicyAuthorEmailPattern#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#project_id RepositoryPolicyAuthorEmailPattern#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#repository_ids RepositoryPolicyAuthorEmailPattern#repository_ids}
  */
  readonly repositoryIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#timeouts RepositoryPolicyAuthorEmailPattern#timeouts}
  */
  readonly timeouts?: RepositoryPolicyAuthorEmailPatternTimeouts;
}
export interface RepositoryPolicyAuthorEmailPatternTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#create RepositoryPolicyAuthorEmailPattern#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#delete RepositoryPolicyAuthorEmailPattern#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#read RepositoryPolicyAuthorEmailPattern#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#update RepositoryPolicyAuthorEmailPattern#update}
  */
  readonly update?: string;
}

export function repositoryPolicyAuthorEmailPatternTimeoutsToTerraform(struct?: RepositoryPolicyAuthorEmailPatternTimeouts | cdktf.IResolvable): any {
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


export function repositoryPolicyAuthorEmailPatternTimeoutsToHclTerraform(struct?: RepositoryPolicyAuthorEmailPatternTimeouts | cdktf.IResolvable): any {
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

export class RepositoryPolicyAuthorEmailPatternTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RepositoryPolicyAuthorEmailPatternTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RepositoryPolicyAuthorEmailPatternTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern azuredevops_repository_policy_author_email_pattern}
*/
export class RepositoryPolicyAuthorEmailPattern extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_repository_policy_author_email_pattern";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryPolicyAuthorEmailPattern resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryPolicyAuthorEmailPattern to import
  * @param importFromId The id of the existing RepositoryPolicyAuthorEmailPattern that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryPolicyAuthorEmailPattern to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_repository_policy_author_email_pattern", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/repository_policy_author_email_pattern azuredevops_repository_policy_author_email_pattern} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryPolicyAuthorEmailPatternConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryPolicyAuthorEmailPatternConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_repository_policy_author_email_pattern',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorEmailPatterns = config.authorEmailPatterns;
    this._blocking = config.blocking;
    this._enabled = config.enabled;
    this._id = config.id;
    this._projectId = config.projectId;
    this._repositoryIds = config.repositoryIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author_email_patterns - computed: false, optional: false, required: true
  private _authorEmailPatterns?: string[]; 
  public get authorEmailPatterns() {
    return this.getListAttribute('author_email_patterns');
  }
  public set authorEmailPatterns(value: string[]) {
    this._authorEmailPatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorEmailPatternsInput() {
    return this._authorEmailPatterns;
  }

  // blocking - computed: false, optional: true, required: false
  private _blocking?: boolean | cdktf.IResolvable; 
  public get blocking() {
    return this.getBooleanAttribute('blocking');
  }
  public set blocking(value: boolean | cdktf.IResolvable) {
    this._blocking = value;
  }
  public resetBlocking() {
    this._blocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingInput() {
    return this._blocking;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repository_ids - computed: false, optional: true, required: false
  private _repositoryIds?: string[]; 
  public get repositoryIds() {
    return this.getListAttribute('repository_ids');
  }
  public set repositoryIds(value: string[]) {
    this._repositoryIds = value;
  }
  public resetRepositoryIds() {
    this._repositoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdsInput() {
    return this._repositoryIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RepositoryPolicyAuthorEmailPatternTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RepositoryPolicyAuthorEmailPatternTimeouts) {
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
      author_email_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorEmailPatterns),
      blocking: cdktf.booleanToTerraform(this._blocking),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      repository_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repositoryIds),
      timeouts: repositoryPolicyAuthorEmailPatternTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author_email_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorEmailPatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocking: {
        value: cdktf.booleanToHclTerraform(this._blocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repositoryIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: repositoryPolicyAuthorEmailPatternTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RepositoryPolicyAuthorEmailPatternTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
