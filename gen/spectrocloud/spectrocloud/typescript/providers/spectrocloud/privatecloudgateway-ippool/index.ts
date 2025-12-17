// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecloudgatewayIppoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network gateway IP address for the IP pool. Typically, this is the default network gateway for the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#gateway PrivatecloudgatewayIppool#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#id PrivatecloudgatewayIppool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The end IP address of the IP pool. Required if `network_type` is `range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#ip_end_range PrivatecloudgatewayIppool#ip_end_range}
  */
  readonly ipEndRange?: string;
  /**
  * The start IP address of the IP pool. Required if `network_type` is `range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#ip_start_range PrivatecloudgatewayIppool#ip_start_range}
  */
  readonly ipStartRange?: string;
  /**
  * The name of the IP pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#name PrivatecloudgatewayIppool#name}
  */
  readonly name: string;
  /**
  * The list of nameserver IP addresses for the IP pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#nameserver_addresses PrivatecloudgatewayIppool#nameserver_addresses}
  */
  readonly nameserverAddresses?: string[];
  /**
  * The list of nameserver search suffixes for the IP pool. For example, `example.org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#nameserver_search_suffix PrivatecloudgatewayIppool#nameserver_search_suffix}
  */
  readonly nameserverSearchSuffix?: string[];
  /**
  * The type of network for the IP pool. Allowed values are: `range` and `subnet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#network_type PrivatecloudgatewayIppool#network_type}
  */
  readonly networkType: string;
  /**
  * The prefix of the IP pool provided network range or subnet. For example `24` for a `/24` subnet or a range that falls inside a `24` subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#prefix PrivatecloudgatewayIppool#prefix}
  */
  readonly prefix: number;
  /**
  * The ID of the Private Cloud Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#private_cloud_gateway_id PrivatecloudgatewayIppool#private_cloud_gateway_id}
  */
  readonly privateCloudGatewayId: string;
  /**
  * Restrict the IP pool to a single cluster. If set to `true`, the IP pool is restricted to a single cluster. We recommend setting this to `true` for production environments and creating separate IP pools for each cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#restrict_to_single_cluster PrivatecloudgatewayIppool#restrict_to_single_cluster}
  */
  readonly restrictToSingleCluster?: boolean | cdktf.IResolvable;
  /**
  * The subnet CIDR of the IP pool. Required if `network_type` is `subnet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#subnet_cidr PrivatecloudgatewayIppool#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#timeouts PrivatecloudgatewayIppool#timeouts}
  */
  readonly timeouts?: PrivatecloudgatewayIppoolTimeouts;
}
export interface PrivatecloudgatewayIppoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#create PrivatecloudgatewayIppool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#delete PrivatecloudgatewayIppool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#update PrivatecloudgatewayIppool#update}
  */
  readonly update?: string;
}

export function privatecloudgatewayIppoolTimeoutsToTerraform(struct?: PrivatecloudgatewayIppoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function privatecloudgatewayIppoolTimeoutsToHclTerraform(struct?: PrivatecloudgatewayIppoolTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatecloudgatewayIppoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivatecloudgatewayIppoolTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecloudgatewayIppoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool spectrocloud_privatecloudgateway_ippool}
*/
export class PrivatecloudgatewayIppool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_privatecloudgateway_ippool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivatecloudgatewayIppool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivatecloudgatewayIppool to import
  * @param importFromId The id of the existing PrivatecloudgatewayIppool that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivatecloudgatewayIppool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_privatecloudgateway_ippool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/privatecloudgateway_ippool spectrocloud_privatecloudgateway_ippool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecloudgatewayIppoolConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecloudgatewayIppoolConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_privatecloudgateway_ippool',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.1',
        providerVersionConstraint: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gateway = config.gateway;
    this._id = config.id;
    this._ipEndRange = config.ipEndRange;
    this._ipStartRange = config.ipStartRange;
    this._name = config.name;
    this._nameserverAddresses = config.nameserverAddresses;
    this._nameserverSearchSuffix = config.nameserverSearchSuffix;
    this._networkType = config.networkType;
    this._prefix = config.prefix;
    this._privateCloudGatewayId = config.privateCloudGatewayId;
    this._restrictToSingleCluster = config.restrictToSingleCluster;
    this._subnetCidr = config.subnetCidr;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip_end_range - computed: false, optional: true, required: false
  private _ipEndRange?: string; 
  public get ipEndRange() {
    return this.getStringAttribute('ip_end_range');
  }
  public set ipEndRange(value: string) {
    this._ipEndRange = value;
  }
  public resetIpEndRange() {
    this._ipEndRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndRangeInput() {
    return this._ipEndRange;
  }

  // ip_start_range - computed: false, optional: true, required: false
  private _ipStartRange?: string; 
  public get ipStartRange() {
    return this.getStringAttribute('ip_start_range');
  }
  public set ipStartRange(value: string) {
    this._ipStartRange = value;
  }
  public resetIpStartRange() {
    this._ipStartRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipStartRangeInput() {
    return this._ipStartRange;
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

  // nameserver_addresses - computed: false, optional: true, required: false
  private _nameserverAddresses?: string[]; 
  public get nameserverAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('nameserver_addresses'));
  }
  public set nameserverAddresses(value: string[]) {
    this._nameserverAddresses = value;
  }
  public resetNameserverAddresses() {
    this._nameserverAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverAddressesInput() {
    return this._nameserverAddresses;
  }

  // nameserver_search_suffix - computed: false, optional: true, required: false
  private _nameserverSearchSuffix?: string[]; 
  public get nameserverSearchSuffix() {
    return cdktf.Fn.tolist(this.getListAttribute('nameserver_search_suffix'));
  }
  public set nameserverSearchSuffix(value: string[]) {
    this._nameserverSearchSuffix = value;
  }
  public resetNameserverSearchSuffix() {
    this._nameserverSearchSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverSearchSuffixInput() {
    return this._nameserverSearchSuffix;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // private_cloud_gateway_id - computed: false, optional: false, required: true
  private _privateCloudGatewayId?: string; 
  public get privateCloudGatewayId() {
    return this.getStringAttribute('private_cloud_gateway_id');
  }
  public set privateCloudGatewayId(value: string) {
    this._privateCloudGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudGatewayIdInput() {
    return this._privateCloudGatewayId;
  }

  // restrict_to_single_cluster - computed: false, optional: true, required: false
  private _restrictToSingleCluster?: boolean | cdktf.IResolvable; 
  public get restrictToSingleCluster() {
    return this.getBooleanAttribute('restrict_to_single_cluster');
  }
  public set restrictToSingleCluster(value: boolean | cdktf.IResolvable) {
    this._restrictToSingleCluster = value;
  }
  public resetRestrictToSingleCluster() {
    this._restrictToSingleCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToSingleClusterInput() {
    return this._restrictToSingleCluster;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatecloudgatewayIppoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatecloudgatewayIppoolTimeouts) {
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
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ip_end_range: cdktf.stringToTerraform(this._ipEndRange),
      ip_start_range: cdktf.stringToTerraform(this._ipStartRange),
      name: cdktf.stringToTerraform(this._name),
      nameserver_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameserverAddresses),
      nameserver_search_suffix: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameserverSearchSuffix),
      network_type: cdktf.stringToTerraform(this._networkType),
      prefix: cdktf.numberToTerraform(this._prefix),
      private_cloud_gateway_id: cdktf.stringToTerraform(this._privateCloudGatewayId),
      restrict_to_single_cluster: cdktf.booleanToTerraform(this._restrictToSingleCluster),
      subnet_cidr: cdktf.stringToTerraform(this._subnetCidr),
      timeouts: privatecloudgatewayIppoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      ip_end_range: {
        value: cdktf.stringToHclTerraform(this._ipEndRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_start_range: {
        value: cdktf.stringToHclTerraform(this._ipStartRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameserverAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nameserver_search_suffix: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameserverSearchSuffix),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.numberToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_cloud_gateway_id: {
        value: cdktf.stringToHclTerraform(this._privateCloudGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_to_single_cluster: {
        value: cdktf.booleanToHclTerraform(this._restrictToSingleCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._subnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: privatecloudgatewayIppoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivatecloudgatewayIppoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
