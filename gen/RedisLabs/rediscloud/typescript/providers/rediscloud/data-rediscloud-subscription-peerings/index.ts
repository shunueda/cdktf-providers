// https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/subscription_peerings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudSubscriptionPeeringsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/subscription_peerings#id DataRediscloudSubscriptionPeerings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Current status of the account - `initiating-request`, `pending-acceptance`, `active`, `inactive` or `failed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/subscription_peerings#status DataRediscloudSubscriptionPeerings#status}
  */
  readonly status?: string;
  /**
  * A valid subscription predefined in the current account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/subscription_peerings#subscription_id DataRediscloudSubscriptionPeerings#subscription_id}
  */
  readonly subscriptionId: string;
}
export interface DataRediscloudSubscriptionPeeringsPeerings {
}

export function dataRediscloudSubscriptionPeeringsPeeringsToTerraform(struct?: DataRediscloudSubscriptionPeeringsPeerings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudSubscriptionPeeringsPeeringsToHclTerraform(struct?: DataRediscloudSubscriptionPeeringsPeerings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudSubscriptionPeeringsPeeringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRediscloudSubscriptionPeeringsPeerings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudSubscriptionPeeringsPeerings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_peering_id - computed: true, optional: false, required: false
  public get awsPeeringId() {
    return this.getStringAttribute('aws_peering_id');
  }

  // gcp_network_name - computed: true, optional: false, required: false
  public get gcpNetworkName() {
    return this.getStringAttribute('gcp_network_name');
  }

  // gcp_peering_id - computed: true, optional: false, required: false
  public get gcpPeeringId() {
    return this.getStringAttribute('gcp_peering_id');
  }

  // gcp_project_id - computed: true, optional: false, required: false
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }

  // gcp_redis_network_name - computed: true, optional: false, required: false
  public get gcpRedisNetworkName() {
    return this.getStringAttribute('gcp_redis_network_name');
  }

  // gcp_redis_project_id - computed: true, optional: false, required: false
  public get gcpRedisProjectId() {
    return this.getStringAttribute('gcp_redis_project_id');
  }

  // peering_id - computed: true, optional: false, required: false
  public get peeringId() {
    return this.getNumberAttribute('peering_id');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_cidr - computed: true, optional: false, required: false
  public get vpcCidr() {
    return this.getStringAttribute('vpc_cidr');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataRediscloudSubscriptionPeeringsPeeringsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataRediscloudSubscriptionPeeringsPeeringsOutputReference {
    return new DataRediscloudSubscriptionPeeringsPeeringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/subscription_peerings rediscloud_subscription_peerings}
*/
export class DataRediscloudSubscriptionPeerings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_subscription_peerings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudSubscriptionPeerings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudSubscriptionPeerings to import
  * @param importFromId The id of the existing DataRediscloudSubscriptionPeerings that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/subscription_peerings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudSubscriptionPeerings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_subscription_peerings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/subscription_peerings rediscloud_subscription_peerings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudSubscriptionPeeringsConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudSubscriptionPeeringsConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_subscription_peerings',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._status = config.status;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peerings - computed: true, optional: false, required: false
  private _peerings = new DataRediscloudSubscriptionPeeringsPeeringsList(this, "peerings", true);
  public get peerings() {
    return this._peerings;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
