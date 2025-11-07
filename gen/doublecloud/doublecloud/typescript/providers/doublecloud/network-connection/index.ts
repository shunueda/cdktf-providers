// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS connection info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#aws NetworkConnection#aws}
  */
  readonly aws?: NetworkConnectionAws;
  /**
  * Network connection description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#description NetworkConnection#description}
  */
  readonly description?: string;
  /**
  * Google Cloud connection info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#google NetworkConnection#google}
  */
  readonly google?: NetworkConnectionGoogle;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#network_id NetworkConnection#network_id}
  */
  readonly networkId: string;
}
export interface NetworkConnectionAwsPeering {
  /**
  * ID of the VPC owner account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#account_id NetworkConnection#account_id}
  */
  readonly accountId: string;
  /**
  * Customer's IPv4 CIDR block.
  *     DoubleCloud will create a route to this CIDR using the Peering Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#ipv4_cidr_block NetworkConnection#ipv4_cidr_block}
  */
  readonly ipv4CidrBlock: string;
  /**
  * Customer's IPv6 CIDR block.
  *     DoubleCloud will create a route to this CIDR using the Peering Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#ipv6_cidr_block NetworkConnection#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * AWS region ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#region_id NetworkConnection#region_id}
  */
  readonly regionId: string;
  /**
  * VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#vpc_id NetworkConnection#vpc_id}
  */
  readonly vpcId: string;
}

export function networkConnectionAwsPeeringToTerraform(struct?: NetworkConnectionAwsPeering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    ipv4_cidr_block: cdktf.stringToTerraform(struct!.ipv4CidrBlock),
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    region_id: cdktf.stringToTerraform(struct!.regionId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function networkConnectionAwsPeeringToHclTerraform(struct?: NetworkConnectionAwsPeering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionAwsPeeringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectionAwsPeering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._ipv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4CidrBlock = this._ipv4CidrBlock;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionAwsPeering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._ipv4CidrBlock = undefined;
      this._ipv6CidrBlock = undefined;
      this._regionId = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._ipv4CidrBlock = value.ipv4CidrBlock;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._regionId = value.regionId;
      this._vpcId = value.vpcId;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // ipv4_cidr_block - computed: false, optional: false, required: true
  private _ipv4CidrBlock?: string; 
  public get ipv4CidrBlock() {
    return this.getStringAttribute('ipv4_cidr_block');
  }
  public set ipv4CidrBlock(value: string) {
    this._ipv4CidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrBlockInput() {
    return this._ipv4CidrBlock;
  }

  // ipv6_cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // managed_ipv4_cidr_block - computed: true, optional: false, required: false
  public get managedIpv4CidrBlock() {
    return this.getStringAttribute('managed_ipv4_cidr_block');
  }

  // managed_ipv6_cidr_block - computed: true, optional: false, required: false
  public get managedIpv6CidrBlock() {
    return this.getStringAttribute('managed_ipv6_cidr_block');
  }

  // peering_connection_id - computed: true, optional: false, required: false
  public get peeringConnectionId() {
    return this.getStringAttribute('peering_connection_id');
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface NetworkConnectionAws {
  /**
  * VPC Peering connection info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#peering NetworkConnection#peering}
  */
  readonly peering: NetworkConnectionAwsPeering;
}

export function networkConnectionAwsToTerraform(struct?: NetworkConnectionAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peering: networkConnectionAwsPeeringToTerraform(struct!.peering),
  }
}


export function networkConnectionAwsToHclTerraform(struct?: NetworkConnectionAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peering: {
      value: networkConnectionAwsPeeringToHclTerraform(struct!.peering),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkConnectionAwsPeering",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectionAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peering = this._peering?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peering.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peering.internalValue = value.peering;
    }
  }

  // peering - computed: false, optional: false, required: true
  private _peering = new NetworkConnectionAwsPeeringOutputReference(this, "peering");
  public get peering() {
    return this._peering;
  }
  public putPeering(value: NetworkConnectionAwsPeering) {
    this._peering.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringInput() {
    return this._peering.internalValue;
  }
}
export interface NetworkConnectionGoogle {
  /**
  * Name of this peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#name NetworkConnection#name}
  */
  readonly name: string;
  /**
  * Peer network URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#peer_network_url NetworkConnection#peer_network_url}
  */
  readonly peerNetworkUrl: string;
}

export function networkConnectionGoogleToTerraform(struct?: NetworkConnectionGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    peer_network_url: cdktf.stringToTerraform(struct!.peerNetworkUrl),
  }
}


export function networkConnectionGoogleToHclTerraform(struct?: NetworkConnectionGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_network_url: {
      value: cdktf.stringToHclTerraform(struct!.peerNetworkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkConnectionGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkConnectionGoogle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peerNetworkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerNetworkUrl = this._peerNetworkUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkConnectionGoogle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._peerNetworkUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._peerNetworkUrl = value.peerNetworkUrl;
    }
  }

  // managed_network_url - computed: true, optional: false, required: false
  public get managedNetworkUrl() {
    return this.getStringAttribute('managed_network_url');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peer_network_url - computed: false, optional: false, required: true
  private _peerNetworkUrl?: string; 
  public get peerNetworkUrl() {
    return this.getStringAttribute('peer_network_url');
  }
  public set peerNetworkUrl(value: string) {
    this._peerNetworkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkUrlInput() {
    return this._peerNetworkUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection doublecloud_network_connection}
*/
export class NetworkConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_network_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkConnection to import
  * @param importFromId The id of the existing NetworkConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_network_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/resources/network_connection doublecloud_network_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_network_connection',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aws.internalValue = config.aws;
    this._description = config.description;
    this._google.internalValue = config.google;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: false, optional: true, required: false
  private _aws = new NetworkConnectionAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: NetworkConnectionAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // google - computed: false, optional: true, required: false
  private _google = new NetworkConnectionGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: NetworkConnectionGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws: networkConnectionAwsToTerraform(this._aws.internalValue),
      description: cdktf.stringToTerraform(this._description),
      google: networkConnectionGoogleToTerraform(this._google.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws: {
        value: networkConnectionAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkConnectionAws",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google: {
        value: networkConnectionGoogleToHclTerraform(this._google.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkConnectionGoogle",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
