// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_update_api_app_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayUpdateApiAppKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_update_api_app_key#api_app_id ApiGatewayUpdateApiAppKey#api_app_id}
  */
  readonly apiAppId: string;
  /**
  * Key of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_update_api_app_key#api_app_key ApiGatewayUpdateApiAppKey#api_app_key}
  */
  readonly apiAppKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_update_api_app_key#id ApiGatewayUpdateApiAppKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_update_api_app_key tencentcloud_api_gateway_update_api_app_key}
*/
export class ApiGatewayUpdateApiAppKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_update_api_app_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayUpdateApiAppKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayUpdateApiAppKey to import
  * @param importFromId The id of the existing ApiGatewayUpdateApiAppKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_update_api_app_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayUpdateApiAppKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_update_api_app_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/api_gateway_update_api_app_key tencentcloud_api_gateway_update_api_app_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayUpdateApiAppKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayUpdateApiAppKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_update_api_app_key',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiAppId = config.apiAppId;
    this._apiAppKey = config.apiAppKey;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_app_id - computed: false, optional: false, required: true
  private _apiAppId?: string; 
  public get apiAppId() {
    return this.getStringAttribute('api_app_id');
  }
  public set apiAppId(value: string) {
    this._apiAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAppIdInput() {
    return this._apiAppId;
  }

  // api_app_key - computed: false, optional: false, required: true
  private _apiAppKey?: string; 
  public get apiAppKey() {
    return this.getStringAttribute('api_app_key');
  }
  public set apiAppKey(value: string) {
    this._apiAppKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAppKeyInput() {
    return this._apiAppKey;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_app_id: cdktf.stringToTerraform(this._apiAppId),
      api_app_key: cdktf.stringToTerraform(this._apiAppKey),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_app_id: {
        value: cdktf.stringToHclTerraform(this._apiAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_app_key: {
        value: cdktf.stringToHclTerraform(this._apiAppKey),
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
