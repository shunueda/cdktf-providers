// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayIpStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy#id ApiGatewayIpStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the API gateway service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy#service_id ApiGatewayIpStrategy#service_id}
  */
  readonly serviceId: string;
  /**
  * IP address data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy#strategy_data ApiGatewayIpStrategy#strategy_data}
  */
  readonly strategyData: string;
  /**
  * User defined strategy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy#strategy_name ApiGatewayIpStrategy#strategy_name}
  */
  readonly strategyName: string;
  /**
  * Blacklist or whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy#strategy_type ApiGatewayIpStrategy#strategy_type}
  */
  readonly strategyType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy tencentcloud_api_gateway_ip_strategy}
*/
export class ApiGatewayIpStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_ip_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayIpStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayIpStrategy to import
  * @param importFromId The id of the existing ApiGatewayIpStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayIpStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_ip_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/api_gateway_ip_strategy tencentcloud_api_gateway_ip_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayIpStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayIpStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_ip_strategy',
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
    this._id = config.id;
    this._serviceId = config.serviceId;
    this._strategyData = config.strategyData;
    this._strategyName = config.strategyName;
    this._strategyType = config.strategyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // strategy_data - computed: false, optional: false, required: true
  private _strategyData?: string; 
  public get strategyData() {
    return this.getStringAttribute('strategy_data');
  }
  public set strategyData(value: string) {
    this._strategyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyDataInput() {
    return this._strategyData;
  }

  // strategy_id - computed: true, optional: false, required: false
  public get strategyId() {
    return this.getStringAttribute('strategy_id');
  }

  // strategy_name - computed: false, optional: false, required: true
  private _strategyName?: string; 
  public get strategyName() {
    return this.getStringAttribute('strategy_name');
  }
  public set strategyName(value: string) {
    this._strategyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyNameInput() {
    return this._strategyName;
  }

  // strategy_type - computed: false, optional: false, required: true
  private _strategyType?: string; 
  public get strategyType() {
    return this.getStringAttribute('strategy_type');
  }
  public set strategyType(value: string) {
    this._strategyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyTypeInput() {
    return this._strategyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
      strategy_data: cdktf.stringToTerraform(this._strategyData),
      strategy_name: cdktf.stringToTerraform(this._strategyName),
      strategy_type: cdktf.stringToTerraform(this._strategyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_data: {
        value: cdktf.stringToHclTerraform(this._strategyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_name: {
        value: cdktf.stringToHclTerraform(this._strategyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_type: {
        value: cdktf.stringToHclTerraform(this._strategyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
