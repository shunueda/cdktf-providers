// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbCustomizedConfigV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Content of Customized Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2#config_content ClbCustomizedConfigV2#config_content}
  */
  readonly configContent: string;
  /**
  * Name of Customized Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2#config_name ClbCustomizedConfigV2#config_name}
  */
  readonly configName: string;
  /**
  * Type of Customized Config. Valid values: `SERVER` and `LOCATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2#config_type ClbCustomizedConfigV2#config_type}
  */
  readonly configType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2#id ClbCustomizedConfigV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2 tencentcloud_clb_customized_config_v2}
*/
export class ClbCustomizedConfigV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_customized_config_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbCustomizedConfigV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbCustomizedConfigV2 to import
  * @param importFromId The id of the existing ClbCustomizedConfigV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbCustomizedConfigV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_customized_config_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_customized_config_v2 tencentcloud_clb_customized_config_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbCustomizedConfigV2Config
  */
  public constructor(scope: Construct, id: string, config: ClbCustomizedConfigV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_customized_config_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._configType = config.configType;
    this._id = config.id;
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

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
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

  // config_type - computed: false, optional: false, required: true
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
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
      config_type: cdktf.stringToTerraform(this._configType),
      id: cdktf.stringToTerraform(this._id),
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
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
