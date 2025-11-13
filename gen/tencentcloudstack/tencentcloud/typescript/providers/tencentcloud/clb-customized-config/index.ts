// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbCustomizedConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content of Customized Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config#config_content ClbCustomizedConfig#config_content}
  */
  readonly configContent: string;
  /**
  * Name of Customized Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config#config_name ClbCustomizedConfig#config_name}
  */
  readonly configName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config#id ClbCustomizedConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of LoadBalancer Ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config#load_balancer_ids ClbCustomizedConfig#load_balancer_ids}
  */
  readonly loadBalancerIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config tencentcloud_clb_customized_config}
*/
export class ClbCustomizedConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_customized_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbCustomizedConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbCustomizedConfig to import
  * @param importFromId The id of the existing ClbCustomizedConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbCustomizedConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_customized_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/clb_customized_config tencentcloud_clb_customized_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbCustomizedConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ClbCustomizedConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_customized_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configContent = config.configContent;
    this._configName = config.configName;
    this._id = config.id;
    this._loadBalancerIds = config.loadBalancerIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_content - computed: false, optional: false, required: true
  private _configContent?: string; 
  public get configContent() {
    return this.getStringAttribute('config_content');
  }
  public set configContent(value: string) {
    this._configContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configContentInput() {
    return this._configContent;
  }

  // config_name - computed: false, optional: false, required: true
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // load_balancer_ids - computed: false, optional: true, required: false
  private _loadBalancerIds?: string[]; 
  public get loadBalancerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_ids'));
  }
  public set loadBalancerIds(value: string[]) {
    this._loadBalancerIds = value;
  }
  public resetLoadBalancerIds() {
    this._loadBalancerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdsInput() {
    return this._loadBalancerIds;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_content: cdktf.stringToTerraform(this._configContent),
      config_name: cdktf.stringToTerraform(this._configName),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancerIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_content: {
        value: cdktf.stringToHclTerraform(this._configContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
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
      load_balancer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancerIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
