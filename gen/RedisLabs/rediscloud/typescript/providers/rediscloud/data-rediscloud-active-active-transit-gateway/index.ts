// https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudActiveActiveTransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Transit Gateway as known to AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway#aws_tgw_uid DataRediscloudActiveActiveTransitGateway#aws_tgw_uid}
  */
  readonly awsTgwUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway#id DataRediscloudActiveActiveTransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of the AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway#region_id DataRediscloudActiveActiveTransitGateway#region_id}
  */
  readonly regionId: number;
  /**
  * The id of an Active Active subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway#subscription_id DataRediscloudActiveActiveTransitGateway#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The id of the Transit Gateway relative to the associated subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway#tgw_id DataRediscloudActiveActiveTransitGateway#tgw_id}
  */
  readonly tgwId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway rediscloud_active_active_transit_gateway}
*/
export class DataRediscloudActiveActiveTransitGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudActiveActiveTransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudActiveActiveTransitGateway to import
  * @param importFromId The id of the existing DataRediscloudActiveActiveTransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudActiveActiveTransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/data-sources/active_active_transit_gateway rediscloud_active_active_transit_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudActiveActiveTransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudActiveActiveTransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.8.0',
        providerVersionConstraint: '2.8.0'
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
    this._regionId = config.regionId;
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

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
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
      region_id: cdktf.numberToTerraform(this._regionId),
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
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
