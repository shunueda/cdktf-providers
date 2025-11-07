// https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriptionPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS account id that the VPC to be peered lives in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#aws_account_id SubscriptionPeering#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * The name of the network to be peered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#gcp_network_name SubscriptionPeering#gcp_network_name}
  */
  readonly gcpNetworkName?: string;
  /**
  * GCP project ID that the VPC to be peered lives in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#gcp_project_id SubscriptionPeering#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#id SubscriptionPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The cloud provider to use with the vpc peering, (either `AWS` or `GCP`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#provider_name SubscriptionPeering#provider_name}
  */
  readonly providerName?: string;
  /**
  * AWS Region that the VPC to be peered lives in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#region SubscriptionPeering#region}
  */
  readonly region?: string;
  /**
  * A valid subscription predefined in the current account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#subscription_id SubscriptionPeering#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * CIDR range of the VPC to be peered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#vpc_cidr SubscriptionPeering#vpc_cidr}
  */
  readonly vpcCidr?: string;
  /**
  * CIDR ranges of the VPC to be peered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#vpc_cidrs SubscriptionPeering#vpc_cidrs}
  */
  readonly vpcCidrs?: string[];
  /**
  * Identifier of the VPC to be peered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#vpc_id SubscriptionPeering#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#timeouts SubscriptionPeering#timeouts}
  */
  readonly timeouts?: SubscriptionPeeringTimeouts;
}
export interface SubscriptionPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#create SubscriptionPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#delete SubscriptionPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#read SubscriptionPeering#read}
  */
  readonly read?: string;
}

export function subscriptionPeeringTimeoutsToTerraform(struct?: SubscriptionPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function subscriptionPeeringTimeoutsToHclTerraform(struct?: SubscriptionPeeringTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubscriptionPeeringTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionPeeringTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering rediscloud_subscription_peering}
*/
export class SubscriptionPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_subscription_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubscriptionPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubscriptionPeering to import
  * @param importFromId The id of the existing SubscriptionPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubscriptionPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_subscription_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.3/docs/resources/subscription_peering rediscloud_subscription_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: SubscriptionPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_subscription_peering',
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
    this._awsAccountId = config.awsAccountId;
    this._gcpNetworkName = config.gcpNetworkName;
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._providerName = config.providerName;
    this._region = config.region;
    this._subscriptionId = config.subscriptionId;
    this._vpcCidr = config.vpcCidr;
    this._vpcCidrs = config.vpcCidrs;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_peering_id - computed: true, optional: false, required: false
  public get awsPeeringId() {
    return this.getStringAttribute('aws_peering_id');
  }

  // gcp_network_name - computed: true, optional: true, required: false
  private _gcpNetworkName?: string; 
  public get gcpNetworkName() {
    return this.getStringAttribute('gcp_network_name');
  }
  public set gcpNetworkName(value: string) {
    this._gcpNetworkName = value;
  }
  public resetGcpNetworkName() {
    this._gcpNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpNetworkNameInput() {
    return this._gcpNetworkName;
  }

  // gcp_peering_id - computed: true, optional: false, required: false
  public get gcpPeeringId() {
    return this.getStringAttribute('gcp_peering_id');
  }

  // gcp_project_id - computed: true, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // gcp_redis_network_name - computed: true, optional: false, required: false
  public get gcpRedisNetworkName() {
    return this.getStringAttribute('gcp_redis_network_name');
  }

  // gcp_redis_project_id - computed: true, optional: false, required: false
  public get gcpRedisProjectId() {
    return this.getStringAttribute('gcp_redis_project_id');
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

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // vpc_cidr - computed: true, optional: true, required: false
  private _vpcCidr?: string; 
  public get vpcCidr() {
    return this.getStringAttribute('vpc_cidr');
  }
  public set vpcCidr(value: string) {
    this._vpcCidr = value;
  }
  public resetVpcCidr() {
    this._vpcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrInput() {
    return this._vpcCidr;
  }

  // vpc_cidrs - computed: true, optional: true, required: false
  private _vpcCidrs?: string[]; 
  public get vpcCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_cidrs'));
  }
  public set vpcCidrs(value: string[]) {
    this._vpcCidrs = value;
  }
  public resetVpcCidrs() {
    this._vpcCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrsInput() {
    return this._vpcCidrs;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubscriptionPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubscriptionPeeringTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      gcp_network_name: cdktf.stringToTerraform(this._gcpNetworkName),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      provider_name: cdktf.stringToTerraform(this._providerName),
      region: cdktf.stringToTerraform(this._region),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      vpc_cidr: cdktf.stringToTerraform(this._vpcCidr),
      vpc_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcCidrs),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: subscriptionPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_network_name: {
        value: cdktf.stringToHclTerraform(this._gcpNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
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
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      vpc_cidr: {
        value: cdktf.stringToHclTerraform(this._vpcCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: subscriptionPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SubscriptionPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
