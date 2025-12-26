// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * User defined key ID, required when access_key_type is manual. The length is 5-50 characters, consisting of letters, numbers, and English underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key#access_key_id ApiGatewayApiKey#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The user-defined key must be passed when the access_key_type is manual. The length is 10-50 characters, consisting of letters, numbers, and English underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key#access_key_secret ApiGatewayApiKey#access_key_secret}
  */
  readonly accessKeySecret?: string;
  /**
  * Key type, supports both auto and manual (custom keys), defaults to auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key#access_key_type ApiGatewayApiKey#access_key_type}
  */
  readonly accessKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key#id ApiGatewayApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Custom key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key#secret_name ApiGatewayApiKey#secret_name}
  */
  readonly secretName: string;
  /**
  * Key status. Valid values: `on`, `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key#status ApiGatewayApiKey#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key tencentcloud_api_gateway_api_key}
*/
export class ApiGatewayApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayApiKey to import
  * @param importFromId The id of the existing ApiGatewayApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_api_key tencentcloud_api_gateway_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api_key',
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
    this._accessKeyId = config.accessKeyId;
    this._accessKeySecret = config.accessKeySecret;
    this._accessKeyType = config.accessKeyType;
    this._id = config.id;
    this._secretName = config.secretName;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: true, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_secret - computed: true, optional: true, required: false
  private _accessKeySecret?: string; 
  public get accessKeySecret() {
    return this.getStringAttribute('access_key_secret');
  }
  public set accessKeySecret(value: string) {
    this._accessKeySecret = value;
  }
  public resetAccessKeySecret() {
    this._accessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretInput() {
    return this._accessKeySecret;
  }

  // access_key_type - computed: false, optional: true, required: false
  private _accessKeyType?: string; 
  public get accessKeyType() {
    return this.getStringAttribute('access_key_type');
  }
  public set accessKeyType(value: string) {
    this._accessKeyType = value;
  }
  public resetAccessKeyType() {
    this._accessKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyTypeInput() {
    return this._accessKeyType;
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

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      access_key_secret: cdktf.stringToTerraform(this._accessKeySecret),
      access_key_type: cdktf.stringToTerraform(this._accessKeyType),
      id: cdktf.stringToTerraform(this._id),
      secret_name: cdktf.stringToTerraform(this._secretName),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key_secret: {
        value: cdktf.stringToHclTerraform(this._accessKeySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key_type: {
        value: cdktf.stringToHclTerraform(this._accessKeyType),
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
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
