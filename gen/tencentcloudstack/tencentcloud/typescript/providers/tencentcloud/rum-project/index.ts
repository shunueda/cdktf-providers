// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the created project (optional and up to 1,000 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#desc RumProject#desc}
  */
  readonly desc?: string;
  /**
  * Whether to enable aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#enable_url_group RumProject#enable_url_group}
  */
  readonly enableUrlGroup: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#id RumProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Business system ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#instance_id RumProject#instance_id}
  */
  readonly instanceId: string;
  /**
  * Name of the created project (required and up to 200 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#name RumProject#name}
  */
  readonly name: string;
  /**
  * Project sampling rate (greater than or equal to 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#rate RumProject#rate}
  */
  readonly rate: string;
  /**
  * Repository address of the project (optional and up to 256 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#repo RumProject#repo}
  */
  readonly repo?: string;
  /**
  * Project type (valid values: `web`, `mp`, `android`, `ios`, `node`, `hippy`, `weex`, `viola`, `rn`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#type RumProject#type}
  */
  readonly type: string;
  /**
  * Webpage address of the project (optional and up to 256 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#url RumProject#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project tencentcloud_rum_project}
*/
export class RumProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumProject to import
  * @param importFromId The id of the existing RumProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/rum_project tencentcloud_rum_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumProjectConfig
  */
  public constructor(scope: Construct, id: string, config: RumProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_project',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desc = config.desc;
    this._enableUrlGroup = config.enableUrlGroup;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._rate = config.rate;
    this._repo = config.repo;
    this._type = config.type;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
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

  // enable_url_group - computed: false, optional: false, required: true
  private _enableUrlGroup?: number; 
  public get enableUrlGroup() {
    return this.getNumberAttribute('enable_url_group');
  }
  public set enableUrlGroup(value: number) {
    this._enableUrlGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUrlGroupInput() {
    return this._enableUrlGroup;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_key - computed: true, optional: false, required: false
  public get instanceKey() {
    return this.getStringAttribute('instance_key');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // is_star - computed: true, optional: false, required: false
  public get isStar() {
    return this.getNumberAttribute('is_star');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_status - computed: true, optional: false, required: false
  public get projectStatus() {
    return this.getNumberAttribute('project_status');
  }

  // rate - computed: false, optional: false, required: true
  private _rate?: string; 
  public get rate() {
    return this.getStringAttribute('rate');
  }
  public set rate(value: string) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desc: cdktf.stringToTerraform(this._desc),
      enable_url_group: cdktf.numberToTerraform(this._enableUrlGroup),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      rate: cdktf.stringToTerraform(this._rate),
      repo: cdktf.stringToTerraform(this._repo),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_url_group: {
        value: cdktf.numberToHclTerraform(this._enableUrlGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate: {
        value: cdktf.stringToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
