// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaiWorkspaceCodeSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#accessibility PaiWorkspaceCodeSource#accessibility}
  */
  readonly accessibility: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#code_branch PaiWorkspaceCodeSource#code_branch}
  */
  readonly codeBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#code_commit PaiWorkspaceCodeSource#code_commit}
  */
  readonly codeCommit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#code_repo PaiWorkspaceCodeSource#code_repo}
  */
  readonly codeRepo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#code_repo_access_token PaiWorkspaceCodeSource#code_repo_access_token}
  */
  readonly codeRepoAccessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#code_repo_user_name PaiWorkspaceCodeSource#code_repo_user_name}
  */
  readonly codeRepoUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#description PaiWorkspaceCodeSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#display_name PaiWorkspaceCodeSource#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#id PaiWorkspaceCodeSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#mount_path PaiWorkspaceCodeSource#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#workspace_id PaiWorkspaceCodeSource#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#timeouts PaiWorkspaceCodeSource#timeouts}
  */
  readonly timeouts?: PaiWorkspaceCodeSourceTimeouts;
}
export interface PaiWorkspaceCodeSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#create PaiWorkspaceCodeSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#delete PaiWorkspaceCodeSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#update PaiWorkspaceCodeSource#update}
  */
  readonly update?: string;
}

export function paiWorkspaceCodeSourceTimeoutsToTerraform(struct?: PaiWorkspaceCodeSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function paiWorkspaceCodeSourceTimeoutsToHclTerraform(struct?: PaiWorkspaceCodeSourceTimeouts | cdktf.IResolvable): any {
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

export class PaiWorkspaceCodeSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaiWorkspaceCodeSourceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaiWorkspaceCodeSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source alicloud_pai_workspace_code_source}
*/
export class PaiWorkspaceCodeSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_pai_workspace_code_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaiWorkspaceCodeSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaiWorkspaceCodeSource to import
  * @param importFromId The id of the existing PaiWorkspaceCodeSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaiWorkspaceCodeSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_pai_workspace_code_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_code_source alicloud_pai_workspace_code_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaiWorkspaceCodeSourceConfig
  */
  public constructor(scope: Construct, id: string, config: PaiWorkspaceCodeSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_pai_workspace_code_source',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessibility = config.accessibility;
    this._codeBranch = config.codeBranch;
    this._codeCommit = config.codeCommit;
    this._codeRepo = config.codeRepo;
    this._codeRepoAccessToken = config.codeRepoAccessToken;
    this._codeRepoUserName = config.codeRepoUserName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._mountPath = config.mountPath;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility - computed: false, optional: false, required: true
  private _accessibility?: string; 
  public get accessibility() {
    return this.getStringAttribute('accessibility');
  }
  public set accessibility(value: string) {
    this._accessibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityInput() {
    return this._accessibility;
  }

  // code_branch - computed: false, optional: true, required: false
  private _codeBranch?: string; 
  public get codeBranch() {
    return this.getStringAttribute('code_branch');
  }
  public set codeBranch(value: string) {
    this._codeBranch = value;
  }
  public resetCodeBranch() {
    this._codeBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBranchInput() {
    return this._codeBranch;
  }

  // code_commit - computed: false, optional: true, required: false
  private _codeCommit?: string; 
  public get codeCommit() {
    return this.getStringAttribute('code_commit');
  }
  public set codeCommit(value: string) {
    this._codeCommit = value;
  }
  public resetCodeCommit() {
    this._codeCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeCommitInput() {
    return this._codeCommit;
  }

  // code_repo - computed: false, optional: false, required: true
  private _codeRepo?: string; 
  public get codeRepo() {
    return this.getStringAttribute('code_repo');
  }
  public set codeRepo(value: string) {
    this._codeRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepoInput() {
    return this._codeRepo;
  }

  // code_repo_access_token - computed: false, optional: true, required: false
  private _codeRepoAccessToken?: string; 
  public get codeRepoAccessToken() {
    return this.getStringAttribute('code_repo_access_token');
  }
  public set codeRepoAccessToken(value: string) {
    this._codeRepoAccessToken = value;
  }
  public resetCodeRepoAccessToken() {
    this._codeRepoAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepoAccessTokenInput() {
    return this._codeRepoAccessToken;
  }

  // code_repo_user_name - computed: false, optional: true, required: false
  private _codeRepoUserName?: string; 
  public get codeRepoUserName() {
    return this.getStringAttribute('code_repo_user_name');
  }
  public set codeRepoUserName(value: string) {
    this._codeRepoUserName = value;
  }
  public resetCodeRepoUserName() {
    this._codeRepoUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepoUserNameInput() {
    return this._codeRepoUserName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaiWorkspaceCodeSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaiWorkspaceCodeSourceTimeouts) {
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
      accessibility: cdktf.stringToTerraform(this._accessibility),
      code_branch: cdktf.stringToTerraform(this._codeBranch),
      code_commit: cdktf.stringToTerraform(this._codeCommit),
      code_repo: cdktf.stringToTerraform(this._codeRepo),
      code_repo_access_token: cdktf.stringToTerraform(this._codeRepoAccessToken),
      code_repo_user_name: cdktf.stringToTerraform(this._codeRepoUserName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      mount_path: cdktf.stringToTerraform(this._mountPath),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: paiWorkspaceCodeSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessibility: {
        value: cdktf.stringToHclTerraform(this._accessibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_branch: {
        value: cdktf.stringToHclTerraform(this._codeBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_commit: {
        value: cdktf.stringToHclTerraform(this._codeCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_repo: {
        value: cdktf.stringToHclTerraform(this._codeRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_repo_access_token: {
        value: cdktf.stringToHclTerraform(this._codeRepoAccessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_repo_user_name: {
        value: cdktf.stringToHclTerraform(this._codeRepoUserName),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      mount_path: {
        value: cdktf.stringToHclTerraform(this._mountPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: paiWorkspaceCodeSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaiWorkspaceCodeSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
