// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * App description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app#api_app_desc ApiGatewayApiApp#api_app_desc}
  */
  readonly apiAppDesc?: string;
  /**
  * Api app name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app#api_app_name ApiGatewayApiApp#api_app_name}
  */
  readonly apiAppName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app#id ApiGatewayApiApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app#tags ApiGatewayApiApp#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app tencentcloud_api_gateway_api_app}
*/
export class ApiGatewayApiApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayApiApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayApiApp to import
  * @param importFromId The id of the existing ApiGatewayApiApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayApiApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_api_app tencentcloud_api_gateway_api_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayApiAppConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayApiAppConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api_app',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiAppDesc = config.apiAppDesc;
    this._apiAppName = config.apiAppName;
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_app_desc - computed: true, optional: true, required: false
  private _apiAppDesc?: string; 
  public get apiAppDesc() {
    return this.getStringAttribute('api_app_desc');
  }
  public set apiAppDesc(value: string) {
    this._apiAppDesc = value;
  }
  public resetApiAppDesc() {
    this._apiAppDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAppDescInput() {
    return this._apiAppDesc;
  }

  // api_app_id - computed: true, optional: false, required: false
  public get apiAppId() {
    return this.getStringAttribute('api_app_id');
  }

  // api_app_key - computed: true, optional: false, required: false
  public get apiAppKey() {
    return this.getStringAttribute('api_app_key');
  }

  // api_app_name - computed: false, optional: false, required: true
  private _apiAppName?: string; 
  public get apiAppName() {
    return this.getStringAttribute('api_app_name');
  }
  public set apiAppName(value: string) {
    this._apiAppName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAppNameInput() {
    return this._apiAppName;
  }

  // api_app_secret - computed: true, optional: false, required: false
  public get apiAppSecret() {
    return this.getStringAttribute('api_app_secret');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_app_desc: cdktf.stringToTerraform(this._apiAppDesc),
      api_app_name: cdktf.stringToTerraform(this._apiAppName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_app_desc: {
        value: cdktf.stringToHclTerraform(this._apiAppDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_app_name: {
        value: cdktf.stringToHclTerraform(this._apiAppName),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
