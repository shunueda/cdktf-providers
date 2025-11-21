// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin#description ApiGatewayPlugin#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin#id ApiGatewayPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Statement to define plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin#plugin_data ApiGatewayPlugin#plugin_data}
  */
  readonly pluginData: string;
  /**
  * Name of the user define plugin. It must start with a letter and end with letter or number, the rest can contain letters, numbers and dashes(-). The length range is from 2 to 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin#plugin_name ApiGatewayPlugin#plugin_name}
  */
  readonly pluginName: string;
  /**
  * Type of plugin. Now support IPControl, TrafficControl, Cors, CustomReq, CustomAuth, Routing, TrafficControlByParameter, CircuitBreaker, ProxyCache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin#plugin_type ApiGatewayPlugin#plugin_type}
  */
  readonly pluginType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin tencentcloud_api_gateway_plugin}
*/
export class ApiGatewayPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayPlugin to import
  * @param importFromId The id of the existing ApiGatewayPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/api_gateway_plugin tencentcloud_api_gateway_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayPluginConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_plugin',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._pluginData = config.pluginData;
    this._pluginName = config.pluginName;
    this._pluginType = config.pluginType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // plugin_data - computed: false, optional: false, required: true
  private _pluginData?: string; 
  public get pluginData() {
    return this.getStringAttribute('plugin_data');
  }
  public set pluginData(value: string) {
    this._pluginData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDataInput() {
    return this._pluginData;
  }

  // plugin_name - computed: false, optional: false, required: true
  private _pluginName?: string; 
  public get pluginName() {
    return this.getStringAttribute('plugin_name');
  }
  public set pluginName(value: string) {
    this._pluginName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameInput() {
    return this._pluginName;
  }

  // plugin_type - computed: false, optional: false, required: true
  private _pluginType?: string; 
  public get pluginType() {
    return this.getStringAttribute('plugin_type');
  }
  public set pluginType(value: string) {
    this._pluginType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginTypeInput() {
    return this._pluginType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      plugin_data: cdktf.stringToTerraform(this._pluginData),
      plugin_name: cdktf.stringToTerraform(this._pluginName),
      plugin_type: cdktf.stringToTerraform(this._pluginType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      plugin_data: {
        value: cdktf.stringToHclTerraform(this._pluginData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_name: {
        value: cdktf.stringToHclTerraform(this._pluginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_type: {
        value: cdktf.stringToHclTerraform(this._pluginType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
