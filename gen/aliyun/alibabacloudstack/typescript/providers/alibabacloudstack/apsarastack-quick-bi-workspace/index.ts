// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackQuickBiWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace#allow_publish ApsarastackQuickBiWorkspace#allow_publish}
  */
  readonly allowPublish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace#allow_share ApsarastackQuickBiWorkspace#allow_share}
  */
  readonly allowShare?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace#id ApsarastackQuickBiWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace#use_comment ApsarastackQuickBiWorkspace#use_comment}
  */
  readonly useComment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace#workspace_desc ApsarastackQuickBiWorkspace#workspace_desc}
  */
  readonly workspaceDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace#workspace_name ApsarastackQuickBiWorkspace#workspace_name}
  */
  readonly workspaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace apsarastack_quick_bi_workspace}
*/
export class ApsarastackQuickBiWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_quick_bi_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackQuickBiWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackQuickBiWorkspace to import
  * @param importFromId The id of the existing ApsarastackQuickBiWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackQuickBiWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_quick_bi_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_quick_bi_workspace apsarastack_quick_bi_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackQuickBiWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackQuickBiWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_quick_bi_workspace',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPublish = config.allowPublish;
    this._allowShare = config.allowShare;
    this._id = config.id;
    this._useComment = config.useComment;
    this._workspaceDesc = config.workspaceDesc;
    this._workspaceName = config.workspaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_publish - computed: false, optional: true, required: false
  private _allowPublish?: boolean | cdktf.IResolvable; 
  public get allowPublish() {
    return this.getBooleanAttribute('allow_publish');
  }
  public set allowPublish(value: boolean | cdktf.IResolvable) {
    this._allowPublish = value;
  }
  public resetAllowPublish() {
    this._allowPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPublishInput() {
    return this._allowPublish;
  }

  // allow_share - computed: false, optional: true, required: false
  private _allowShare?: boolean | cdktf.IResolvable; 
  public get allowShare() {
    return this.getBooleanAttribute('allow_share');
  }
  public set allowShare(value: boolean | cdktf.IResolvable) {
    this._allowShare = value;
  }
  public resetAllowShare() {
    this._allowShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowShareInput() {
    return this._allowShare;
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

  // use_comment - computed: false, optional: true, required: false
  private _useComment?: boolean | cdktf.IResolvable; 
  public get useComment() {
    return this.getBooleanAttribute('use_comment');
  }
  public set useComment(value: boolean | cdktf.IResolvable) {
    this._useComment = value;
  }
  public resetUseComment() {
    this._useComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCommentInput() {
    return this._useComment;
  }

  // workspace_desc - computed: false, optional: true, required: false
  private _workspaceDesc?: string; 
  public get workspaceDesc() {
    return this.getStringAttribute('workspace_desc');
  }
  public set workspaceDesc(value: string) {
    this._workspaceDesc = value;
  }
  public resetWorkspaceDesc() {
    this._workspaceDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceDescInput() {
    return this._workspaceDesc;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_name - computed: false, optional: false, required: true
  private _workspaceName?: string; 
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }
  public set workspaceName(value: string) {
    this._workspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceNameInput() {
    return this._workspaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_publish: cdktf.booleanToTerraform(this._allowPublish),
      allow_share: cdktf.booleanToTerraform(this._allowShare),
      id: cdktf.stringToTerraform(this._id),
      use_comment: cdktf.booleanToTerraform(this._useComment),
      workspace_desc: cdktf.stringToTerraform(this._workspaceDesc),
      workspace_name: cdktf.stringToTerraform(this._workspaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_publish: {
        value: cdktf.booleanToHclTerraform(this._allowPublish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_share: {
        value: cdktf.booleanToHclTerraform(this._allowShare),
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
      use_comment: {
        value: cdktf.booleanToHclTerraform(this._useComment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace_desc: {
        value: cdktf.stringToHclTerraform(this._workspaceDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_name: {
        value: cdktf.stringToHclTerraform(this._workspaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
