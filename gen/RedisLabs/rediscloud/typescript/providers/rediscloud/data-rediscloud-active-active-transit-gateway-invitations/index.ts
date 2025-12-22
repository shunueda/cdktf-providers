// https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_transit_gateway_invitations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRediscloudActiveActiveTransitGatewayInvitationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_transit_gateway_invitations#id DataRediscloudActiveActiveTransitGatewayInvitations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_transit_gateway_invitations#region_id DataRediscloudActiveActiveTransitGatewayInvitations#region_id}
  */
  readonly regionId: number;
  /**
  * The ID of the Active-Active subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_transit_gateway_invitations#subscription_id DataRediscloudActiveActiveTransitGatewayInvitations#subscription_id}
  */
  readonly subscriptionId: string;
}
export interface DataRediscloudActiveActiveTransitGatewayInvitationsInvitations {
}

export function dataRediscloudActiveActiveTransitGatewayInvitationsInvitationsToTerraform(struct?: DataRediscloudActiveActiveTransitGatewayInvitationsInvitations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRediscloudActiveActiveTransitGatewayInvitationsInvitationsToHclTerraform(struct?: DataRediscloudActiveActiveTransitGatewayInvitationsInvitations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRediscloudActiveActiveTransitGatewayInvitationsInvitationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRediscloudActiveActiveTransitGatewayInvitationsInvitations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRediscloudActiveActiveTransitGatewayInvitationsInvitations | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_share_uid - computed: true, optional: false, required: false
  public get resourceShareUid() {
    return this.getStringAttribute('resource_share_uid');
  }

  // shared_date - computed: true, optional: false, required: false
  public get sharedDate() {
    return this.getStringAttribute('shared_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataRediscloudActiveActiveTransitGatewayInvitationsInvitationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRediscloudActiveActiveTransitGatewayInvitationsInvitationsOutputReference {
    return new DataRediscloudActiveActiveTransitGatewayInvitationsInvitationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_transit_gateway_invitations rediscloud_active_active_transit_gateway_invitations}
*/
export class DataRediscloudActiveActiveTransitGatewayInvitations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_transit_gateway_invitations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRediscloudActiveActiveTransitGatewayInvitations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRediscloudActiveActiveTransitGatewayInvitations to import
  * @param importFromId The id of the existing DataRediscloudActiveActiveTransitGatewayInvitations that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_transit_gateway_invitations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRediscloudActiveActiveTransitGatewayInvitations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_transit_gateway_invitations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.10.0/docs/data-sources/active_active_transit_gateway_invitations rediscloud_active_active_transit_gateway_invitations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRediscloudActiveActiveTransitGatewayInvitationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataRediscloudActiveActiveTransitGatewayInvitationsConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_transit_gateway_invitations',
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
    this._regionId = config.regionId;
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

  // invitations - computed: true, optional: false, required: false
  private _invitations = new DataRediscloudActiveActiveTransitGatewayInvitationsInvitationsList(this, "invitations", false);
  public get invitations() {
    return this._invitations;
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
      region_id: cdktf.numberToTerraform(this._regionId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
