// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafDomainPostActionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config#domain WafDomainPostActionConfig#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config#id WafDomainPostActionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 0- Disable shipping, 1- Enable shipping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config#post_ckafka_action WafDomainPostActionConfig#post_ckafka_action}
  */
  readonly postCkafkaAction: number;
  /**
  * 0- Disable shipping, 1- Enable shipping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config#post_cls_action WafDomainPostActionConfig#post_cls_action}
  */
  readonly postClsAction: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config tencentcloud_waf_domain_post_action_config}
*/
export class WafDomainPostActionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_domain_post_action_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafDomainPostActionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafDomainPostActionConfig to import
  * @param importFromId The id of the existing WafDomainPostActionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafDomainPostActionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_domain_post_action_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/waf_domain_post_action_config tencentcloud_waf_domain_post_action_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafDomainPostActionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: WafDomainPostActionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_domain_post_action_config',
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
    this._domain = config.domain;
    this._id = config.id;
    this._postCkafkaAction = config.postCkafkaAction;
    this._postClsAction = config.postClsAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // post_ckafka_action - computed: false, optional: false, required: true
  private _postCkafkaAction?: number; 
  public get postCkafkaAction() {
    return this.getNumberAttribute('post_ckafka_action');
  }
  public set postCkafkaAction(value: number) {
    this._postCkafkaAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postCkafkaActionInput() {
    return this._postCkafkaAction;
  }

  // post_cls_action - computed: false, optional: false, required: true
  private _postClsAction?: number; 
  public get postClsAction() {
    return this.getNumberAttribute('post_cls_action');
  }
  public set postClsAction(value: number) {
    this._postClsAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postClsActionInput() {
    return this._postClsAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      post_ckafka_action: cdktf.numberToTerraform(this._postCkafkaAction),
      post_cls_action: cdktf.numberToTerraform(this._postClsAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      post_ckafka_action: {
        value: cdktf.numberToHclTerraform(this._postCkafkaAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      post_cls_action: {
        value: cdktf.numberToHclTerraform(this._postClsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
