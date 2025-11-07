// https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudTransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Transit Gateway as known to AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway#aws_tgw_uid DataRediscloudTransitGateway#aws_tgw_uid}
  */
  readonly awsTgwUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway#id DataRediscloudTransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of a Pro/Flexible subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway#subscription_id DataRediscloudTransitGateway#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The id of the Transit Gateway relative to the associated subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway#tgw_id DataRediscloudTransitGateway#tgw_id}
  */
  readonly tgwId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway rediscloud_transit_gateway}
*/
export class DataRediscloudTransitGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudTransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudTransitGateway to import
  * @param importFromId The id of the existing DataRediscloudTransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudTransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/data-sources/transit_gateway rediscloud_transit_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudTransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudTransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsTgwUid = config.awsTgwUid;
    this._id = config.id;
    this._subscriptionId = config.subscriptionId;
    this._tgwId = config.tgwId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_status - computed: true, optional: false, required: false
  public get attachmentStatus() {
    return this.getStringAttribute('attachment_status');
  }

  // attachment_uid - computed: true, optional: false, required: false
  public get attachmentUid() {
    return this.getStringAttribute('attachment_uid');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_tgw_uid - computed: true, optional: true, required: false
  private _awsTgwUid?: string; 
  public get awsTgwUid() {
    return this.getStringAttribute('aws_tgw_uid');
  }
  public set awsTgwUid(value: string) {
    this._awsTgwUid = value;
  }
  public resetAwsTgwUid() {
    this._awsTgwUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTgwUidInput() {
    return this._awsTgwUid;
  }

  // cidrs - computed: true, optional: false, required: false
  public get cidrs() {
    return this.getListAttribute('cidrs');
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

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tgw_id - computed: true, optional: true, required: false
  private _tgwId?: number; 
  public get tgwId() {
    return this.getNumberAttribute('tgw_id');
  }
  public set tgwId(value: number) {
    this._tgwId = value;
  }
  public resetTgwId() {
    this._tgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_tgw_uid: cdktf.stringToTerraform(this._awsTgwUid),
      id: cdktf.stringToTerraform(this._id),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tgw_id: cdktf.numberToTerraform(this._tgwId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_tgw_uid: {
        value: cdktf.stringToHclTerraform(this._awsTgwUid),
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
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_id: {
        value: cdktf.numberToHclTerraform(this._tgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
