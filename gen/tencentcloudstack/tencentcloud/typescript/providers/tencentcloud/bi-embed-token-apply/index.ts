// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiEmbedTokenApplyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Expiration. Unit: Minutes Maximum value: 240. i.e. 4 hours Default: 240.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#expire_time BiEmbedTokenApply#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#id BiEmbedTokenApply#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sharing page id, this is empty value 0 when embedding the board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#page_id BiEmbedTokenApply#page_id}
  */
  readonly pageId?: number;
  /**
  * Share project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#project_id BiEmbedTokenApply#project_id}
  */
  readonly projectId?: number;
  /**
  * Page means embedding the page, and panel means embedding the entire board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#scope BiEmbedTokenApply#scope}
  */
  readonly scope?: string;
  /**
  * Access limit, the limit range is 1-99999, if it is empty, no access limit will be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#ticket_num BiEmbedTokenApply#ticket_num}
  */
  readonly ticketNum?: number;
  /**
  * User enterprise ID (for multi-user only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#user_corp_id BiEmbedTokenApply#user_corp_id}
  */
  readonly userCorpId?: string;
  /**
  * UserId (for multi-user only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#user_id BiEmbedTokenApply#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply tencentcloud_bi_embed_token_apply}
*/
export class BiEmbedTokenApply extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bi_embed_token_apply";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiEmbedTokenApply resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiEmbedTokenApply to import
  * @param importFromId The id of the existing BiEmbedTokenApply that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiEmbedTokenApply to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bi_embed_token_apply", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/bi_embed_token_apply tencentcloud_bi_embed_token_apply} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiEmbedTokenApplyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BiEmbedTokenApplyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bi_embed_token_apply',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expireTime = config.expireTime;
    this._id = config.id;
    this._pageId = config.pageId;
    this._projectId = config.projectId;
    this._scope = config.scope;
    this._ticketNum = config.ticketNum;
    this._userCorpId = config.userCorpId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bi_token - computed: true, optional: false, required: false
  public get biToken() {
    return this.getStringAttribute('bi_token');
  }

  // create_at - computed: true, optional: false, required: false
  public get createAt() {
    return this.getStringAttribute('create_at');
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
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

  // page_id - computed: false, optional: true, required: false
  private _pageId?: number; 
  public get pageId() {
    return this.getNumberAttribute('page_id');
  }
  public set pageId(value: number) {
    this._pageId = value;
  }
  public resetPageId() {
    this._pageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // ticket_num - computed: false, optional: true, required: false
  private _ticketNum?: number; 
  public get ticketNum() {
    return this.getNumberAttribute('ticket_num');
  }
  public set ticketNum(value: number) {
    this._ticketNum = value;
  }
  public resetTicketNum() {
    this._ticketNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketNumInput() {
    return this._ticketNum;
  }

  // udpate_at - computed: true, optional: false, required: false
  public get udpateAt() {
    return this.getStringAttribute('udpate_at');
  }

  // user_corp_id - computed: false, optional: true, required: false
  private _userCorpId?: string; 
  public get userCorpId() {
    return this.getStringAttribute('user_corp_id');
  }
  public set userCorpId(value: string) {
    this._userCorpId = value;
  }
  public resetUserCorpId() {
    this._userCorpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCorpIdInput() {
    return this._userCorpId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expire_time: cdktf.stringToTerraform(this._expireTime),
      id: cdktf.stringToTerraform(this._id),
      page_id: cdktf.numberToTerraform(this._pageId),
      project_id: cdktf.numberToTerraform(this._projectId),
      scope: cdktf.stringToTerraform(this._scope),
      ticket_num: cdktf.numberToTerraform(this._ticketNum),
      user_corp_id: cdktf.stringToTerraform(this._userCorpId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
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
      page_id: {
        value: cdktf.numberToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ticket_num: {
        value: cdktf.numberToHclTerraform(this._ticketNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_corp_id: {
        value: cdktf.stringToHclTerraform(this._userCorpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
