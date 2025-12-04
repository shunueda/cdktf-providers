// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiEmbedIntervalApplyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Token that needs to be applied for extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply#bi_token BiEmbedIntervalApply#bi_token}
  */
  readonly biToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply#id BiEmbedIntervalApply#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sharing page id, this is empty value 0 when embedding the board.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply#page_id BiEmbedIntervalApply#page_id}
  */
  readonly pageId?: number;
  /**
  * Sharing project id, required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply#project_id BiEmbedIntervalApply#project_id}
  */
  readonly projectId?: number;
  /**
  * Choose panel or page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply#scope BiEmbedIntervalApply#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply tencentcloud_bi_embed_interval_apply}
*/
export class BiEmbedIntervalApply extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bi_embed_interval_apply";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiEmbedIntervalApply resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiEmbedIntervalApply to import
  * @param importFromId The id of the existing BiEmbedIntervalApply that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiEmbedIntervalApply to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bi_embed_interval_apply", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/bi_embed_interval_apply tencentcloud_bi_embed_interval_apply} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiEmbedIntervalApplyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BiEmbedIntervalApplyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bi_embed_interval_apply',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._biToken = config.biToken;
    this._id = config.id;
    this._pageId = config.pageId;
    this._projectId = config.projectId;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bi_token - computed: false, optional: true, required: false
  private _biToken?: string; 
  public get biToken() {
    return this.getStringAttribute('bi_token');
  }
  public set biToken(value: string) {
    this._biToken = value;
  }
  public resetBiToken() {
    this._biToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biTokenInput() {
    return this._biToken;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bi_token: cdktf.stringToTerraform(this._biToken),
      id: cdktf.stringToTerraform(this._id),
      page_id: cdktf.numberToTerraform(this._pageId),
      project_id: cdktf.numberToTerraform(this._projectId),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bi_token: {
        value: cdktf.stringToHclTerraform(this._biToken),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
