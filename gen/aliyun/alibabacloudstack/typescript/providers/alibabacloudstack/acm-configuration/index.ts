// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#app_name AcmConfiguration#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#beta_app_name AcmConfiguration#beta_app_name}
  */
  readonly betaAppName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#beta_content AcmConfiguration#beta_content}
  */
  readonly betaContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#beta_ips AcmConfiguration#beta_ips}
  */
  readonly betaIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#content AcmConfiguration#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#data_id AcmConfiguration#data_id}
  */
  readonly dataId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#desc AcmConfiguration#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#encrypt_algorithm AcmConfiguration#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#group AcmConfiguration#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#id AcmConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#namespace_id AcmConfiguration#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#tags AcmConfiguration#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#type AcmConfiguration#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration alibabacloudstack_acm_configuration}
*/
export class AcmConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_acm_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcmConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcmConfiguration to import
  * @param importFromId The id of the existing AcmConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcmConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_acm_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/acm_configuration alibabacloudstack_acm_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AcmConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_acm_configuration',
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
    this._appName = config.appName;
    this._betaAppName = config.betaAppName;
    this._betaContent = config.betaContent;
    this._betaIps = config.betaIps;
    this._content = config.content;
    this._dataId = config.dataId;
    this._desc = config.desc;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._group = config.group;
    this._id = config.id;
    this._namespaceId = config.namespaceId;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // beta_app_name - computed: false, optional: true, required: false
  private _betaAppName?: string; 
  public get betaAppName() {
    return this.getStringAttribute('beta_app_name');
  }
  public set betaAppName(value: string) {
    this._betaAppName = value;
  }
  public resetBetaAppName() {
    this._betaAppName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaAppNameInput() {
    return this._betaAppName;
  }

  // beta_content - computed: false, optional: true, required: false
  private _betaContent?: string; 
  public get betaContent() {
    return this.getStringAttribute('beta_content');
  }
  public set betaContent(value: string) {
    this._betaContent = value;
  }
  public resetBetaContent() {
    this._betaContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaContentInput() {
    return this._betaContent;
  }

  // beta_ips - computed: false, optional: true, required: false
  private _betaIps?: string; 
  public get betaIps() {
    return this.getStringAttribute('beta_ips');
  }
  public set betaIps(value: string) {
    this._betaIps = value;
  }
  public resetBetaIps() {
    this._betaIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaIpsInput() {
    return this._betaIps;
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

  // data_id - computed: false, optional: false, required: true
  private _dataId?: string; 
  public get dataId() {
    return this.getStringAttribute('data_id');
  }
  public set dataId(value: string) {
    this._dataId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIdInput() {
    return this._dataId;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      beta_app_name: cdktf.stringToTerraform(this._betaAppName),
      beta_content: cdktf.stringToTerraform(this._betaContent),
      beta_ips: cdktf.stringToTerraform(this._betaIps),
      content: cdktf.stringToTerraform(this._content),
      data_id: cdktf.stringToTerraform(this._dataId),
      desc: cdktf.stringToTerraform(this._desc),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      tags: cdktf.stringToTerraform(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beta_app_name: {
        value: cdktf.stringToHclTerraform(this._betaAppName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beta_content: {
        value: cdktf.stringToHclTerraform(this._betaContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beta_ips: {
        value: cdktf.stringToHclTerraform(this._betaIps),
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
      data_id: {
        value: cdktf.stringToHclTerraform(this._dataId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
