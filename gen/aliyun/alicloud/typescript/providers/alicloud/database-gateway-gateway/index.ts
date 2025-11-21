// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/database_gateway_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseGatewayGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/database_gateway_gateway#gateway_desc DatabaseGatewayGateway#gateway_desc}
  */
  readonly gatewayDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/database_gateway_gateway#gateway_name DatabaseGatewayGateway#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/database_gateway_gateway#id DatabaseGatewayGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/database_gateway_gateway alicloud_database_gateway_gateway}
*/
export class DatabaseGatewayGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_database_gateway_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseGatewayGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseGatewayGateway to import
  * @param importFromId The id of the existing DatabaseGatewayGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/database_gateway_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseGatewayGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_database_gateway_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/database_gateway_gateway alicloud_database_gateway_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseGatewayGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseGatewayGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_database_gateway_gateway',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayDesc = config.gatewayDesc;
    this._gatewayName = config.gatewayName;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_desc - computed: false, optional: true, required: false
  private _gatewayDesc?: string; 
  public get gatewayDesc() {
    return this.getStringAttribute('gateway_desc');
  }
  public set gatewayDesc(value: string) {
    this._gatewayDesc = value;
  }
  public resetGatewayDesc() {
    this._gatewayDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDescInput() {
    return this._gatewayDesc;
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_desc: cdktf.stringToTerraform(this._gatewayDesc),
      gateway_name: cdktf.stringToTerraform(this._gatewayName),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_desc: {
        value: cdktf.stringToHclTerraform(this._gatewayDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_name: {
        value: cdktf.stringToHclTerraform(this._gatewayName),
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
