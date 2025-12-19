// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#description EcsNetworkInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#id EcsNetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#instance_type EcsNetworkInterface#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#ipv4_prefix_count EcsNetworkInterface#ipv4_prefix_count}
  */
  readonly ipv4PrefixCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#ipv4_prefixes EcsNetworkInterface#ipv4_prefixes}
  */
  readonly ipv4Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#ipv6_address_count EcsNetworkInterface#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#ipv6_addresses EcsNetworkInterface#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#name EcsNetworkInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#network_interface_name EcsNetworkInterface#network_interface_name}
  */
  readonly networkInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#network_interface_traffic_mode EcsNetworkInterface#network_interface_traffic_mode}
  */
  readonly networkInterfaceTrafficMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#primary_ip_address EcsNetworkInterface#primary_ip_address}
  */
  readonly primaryIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#private_ip EcsNetworkInterface#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#private_ip_addresses EcsNetworkInterface#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#private_ips EcsNetworkInterface#private_ips}
  */
  readonly privateIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#private_ips_count EcsNetworkInterface#private_ips_count}
  */
  readonly privateIpsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#queue_number EcsNetworkInterface#queue_number}
  */
  readonly queueNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#resource_group_id EcsNetworkInterface#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#secondary_private_ip_address_count EcsNetworkInterface#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#security_group_ids EcsNetworkInterface#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#security_groups EcsNetworkInterface#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#source_dest_check EcsNetworkInterface#source_dest_check}
  */
  readonly sourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#tags EcsNetworkInterface#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#vswitch_id EcsNetworkInterface#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#timeouts EcsNetworkInterface#timeouts}
  */
  readonly timeouts?: EcsNetworkInterfaceTimeouts;
}
export interface EcsNetworkInterfaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#create EcsNetworkInterface#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#delete EcsNetworkInterface#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#update EcsNetworkInterface#update}
  */
  readonly update?: string;
}

export function ecsNetworkInterfaceTimeoutsToTerraform(struct?: EcsNetworkInterfaceTimeouts | cdktf.IResolvable): any {
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


export function ecsNetworkInterfaceTimeoutsToHclTerraform(struct?: EcsNetworkInterfaceTimeouts | cdktf.IResolvable): any {
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

export class EcsNetworkInterfaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsNetworkInterfaceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcsNetworkInterfaceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface alicloud_ecs_network_interface}
*/
export class EcsNetworkInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsNetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsNetworkInterface to import
  * @param importFromId The id of the existing EcsNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsNetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ecs_network_interface alicloud_ecs_network_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: EcsNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_network_interface',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._ipv4PrefixCount = config.ipv4PrefixCount;
    this._ipv4Prefixes = config.ipv4Prefixes;
    this._ipv6AddressCount = config.ipv6AddressCount;
    this._ipv6Addresses = config.ipv6Addresses;
    this._name = config.name;
    this._networkInterfaceName = config.networkInterfaceName;
    this._networkInterfaceTrafficMode = config.networkInterfaceTrafficMode;
    this._primaryIpAddress = config.primaryIpAddress;
    this._privateIp = config.privateIp;
    this._privateIpAddresses = config.privateIpAddresses;
    this._privateIps = config.privateIps;
    this._privateIpsCount = config.privateIpsCount;
    this._queueNumber = config.queueNumber;
    this._resourceGroupId = config.resourceGroupId;
    this._secondaryPrivateIpAddressCount = config.secondaryPrivateIpAddressCount;
    this._securityGroupIds = config.securityGroupIds;
    this._securityGroups = config.securityGroups;
    this._sourceDestCheck = config.sourceDestCheck;
    this._tags = config.tags;
    this._vswitchId = config.vswitchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // ipv4_prefix_count - computed: true, optional: true, required: false
  private _ipv4PrefixCount?: number; 
  public get ipv4PrefixCount() {
    return this.getNumberAttribute('ipv4_prefix_count');
  }
  public set ipv4PrefixCount(value: number) {
    this._ipv4PrefixCount = value;
  }
  public resetIpv4PrefixCount() {
    this._ipv4PrefixCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixCountInput() {
    return this._ipv4PrefixCount;
  }

  // ipv4_prefixes - computed: true, optional: true, required: false
  private _ipv4Prefixes?: string[]; 
  public get ipv4Prefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_prefixes'));
  }
  public set ipv4Prefixes(value: string[]) {
    this._ipv4Prefixes = value;
  }
  public resetIpv4Prefixes() {
    this._ipv4Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixesInput() {
    return this._ipv4Prefixes;
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // ipv6_addresses - computed: true, optional: true, required: false
  private _ipv6Addresses?: string[]; 
  public get ipv6Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_addresses'));
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_interface_name - computed: true, optional: true, required: false
  private _networkInterfaceName?: string; 
  public get networkInterfaceName() {
    return this.getStringAttribute('network_interface_name');
  }
  public set networkInterfaceName(value: string) {
    this._networkInterfaceName = value;
  }
  public resetNetworkInterfaceName() {
    this._networkInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNameInput() {
    return this._networkInterfaceName;
  }

  // network_interface_traffic_mode - computed: true, optional: true, required: false
  private _networkInterfaceTrafficMode?: string; 
  public get networkInterfaceTrafficMode() {
    return this.getStringAttribute('network_interface_traffic_mode');
  }
  public set networkInterfaceTrafficMode(value: string) {
    this._networkInterfaceTrafficMode = value;
  }
  public resetNetworkInterfaceTrafficMode() {
    this._networkInterfaceTrafficMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceTrafficModeInput() {
    return this._networkInterfaceTrafficMode;
  }

  // primary_ip_address - computed: true, optional: true, required: false
  private _primaryIpAddress?: string; 
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }
  public set primaryIpAddress(value: string) {
    this._primaryIpAddress = value;
  }
  public resetPrimaryIpAddress() {
    this._primaryIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpAddressInput() {
    return this._primaryIpAddress;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // private_ip_addresses - computed: true, optional: true, required: false
  private _privateIpAddresses?: string[]; 
  public get privateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_addresses'));
  }
  public set privateIpAddresses(value: string[]) {
    this._privateIpAddresses = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses;
  }

  // private_ips - computed: true, optional: true, required: false
  private _privateIps?: string[]; 
  public get privateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ips'));
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  public resetPrivateIps() {
    this._privateIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
  }

  // private_ips_count - computed: true, optional: true, required: false
  private _privateIpsCount?: number; 
  public get privateIpsCount() {
    return this.getNumberAttribute('private_ips_count');
  }
  public set privateIpsCount(value: number) {
    this._privateIpsCount = value;
  }
  public resetPrivateIpsCount() {
    this._privateIpsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsCountInput() {
    return this._privateIpsCount;
  }

  // queue_number - computed: true, optional: true, required: false
  private _queueNumber?: number; 
  public get queueNumber() {
    return this.getNumberAttribute('queue_number');
  }
  public set queueNumber(value: number) {
    this._queueNumber = value;
  }
  public resetQueueNumber() {
    this._queueNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNumberInput() {
    return this._queueNumber;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // secondary_private_ip_address_count - computed: true, optional: true, required: false
  private _secondaryPrivateIpAddressCount?: number; 
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }
  public set secondaryPrivateIpAddressCount(value: number) {
    this._secondaryPrivateIpAddressCount = value;
  }
  public resetSecondaryPrivateIpAddressCount() {
    this._secondaryPrivateIpAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressCountInput() {
    return this._secondaryPrivateIpAddressCount;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // source_dest_check - computed: false, optional: true, required: false
  private _sourceDestCheck?: boolean | cdktf.IResolvable; 
  public get sourceDestCheck() {
    return this.getBooleanAttribute('source_dest_check');
  }
  public set sourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._sourceDestCheck = value;
  }
  public resetSourceDestCheck() {
    this._sourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDestCheckInput() {
    return this._sourceDestCheck;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsNetworkInterfaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsNetworkInterfaceTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      ipv4_prefix_count: cdktf.numberToTerraform(this._ipv4PrefixCount),
      ipv4_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Prefixes),
      ipv6_address_count: cdktf.numberToTerraform(this._ipv6AddressCount),
      ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Addresses),
      name: cdktf.stringToTerraform(this._name),
      network_interface_name: cdktf.stringToTerraform(this._networkInterfaceName),
      network_interface_traffic_mode: cdktf.stringToTerraform(this._networkInterfaceTrafficMode),
      primary_ip_address: cdktf.stringToTerraform(this._primaryIpAddress),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIpAddresses),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIps),
      private_ips_count: cdktf.numberToTerraform(this._privateIpsCount),
      queue_number: cdktf.numberToTerraform(this._queueNumber),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      secondary_private_ip_address_count: cdktf.numberToTerraform(this._secondaryPrivateIpAddressCount),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      source_dest_check: cdktf.booleanToTerraform(this._sourceDestCheck),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      timeouts: ecsNetworkInterfaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_prefix_count: {
        value: cdktf.numberToHclTerraform(this._ipv4PrefixCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Prefixes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv6_address_count: {
        value: cdktf.numberToHclTerraform(this._ipv6AddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Addresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_name: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_traffic_mode: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceTrafficMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ip_address: {
        value: cdktf.stringToHclTerraform(this._primaryIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.stringToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIpAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_ips_count: {
        value: cdktf.numberToHclTerraform(this._privateIpsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_number: {
        value: cdktf.numberToHclTerraform(this._queueNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_private_ip_address_count: {
        value: cdktf.numberToHclTerraform(this._secondaryPrivateIpAddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_dest_check: {
        value: cdktf.booleanToHclTerraform(this._sourceDestCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ecsNetworkInterfaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsNetworkInterfaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
