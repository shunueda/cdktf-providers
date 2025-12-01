// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEcsNetworkInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#id DataAlicloudEcsNetworkInterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#ids DataAlicloudEcsNetworkInterfaces#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#instance_id DataAlicloudEcsNetworkInterfaces#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#name DataAlicloudEcsNetworkInterfaces#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#name_regex DataAlicloudEcsNetworkInterfaces#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#network_interface_name DataAlicloudEcsNetworkInterfaces#network_interface_name}
  */
  readonly networkInterfaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#output_file DataAlicloudEcsNetworkInterfaces#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#primary_ip_address DataAlicloudEcsNetworkInterfaces#primary_ip_address}
  */
  readonly primaryIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#private_ip DataAlicloudEcsNetworkInterfaces#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#resource_group_id DataAlicloudEcsNetworkInterfaces#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#security_group_id DataAlicloudEcsNetworkInterfaces#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#service_managed DataAlicloudEcsNetworkInterfaces#service_managed}
  */
  readonly serviceManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#status DataAlicloudEcsNetworkInterfaces#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#tags DataAlicloudEcsNetworkInterfaces#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#type DataAlicloudEcsNetworkInterfaces#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#vpc_id DataAlicloudEcsNetworkInterfaces#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#vswitch_id DataAlicloudEcsNetworkInterfaces#vswitch_id}
  */
  readonly vswitchId?: string;
}
export interface DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIp {
}

export function dataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIpToTerraform(struct?: DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIpToHclTerraform(struct?: DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
}

export class DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIpOutputReference {
    return new DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudEcsNetworkInterfacesInterfaces {
}

export function dataAlicloudEcsNetworkInterfacesInterfacesToTerraform(struct?: DataAlicloudEcsNetworkInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEcsNetworkInterfacesInterfacesToHclTerraform(struct?: DataAlicloudEcsNetworkInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEcsNetworkInterfacesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEcsNetworkInterfacesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEcsNetworkInterfacesInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_public_ip - computed: true, optional: false, required: false
  private _associatedPublicIp = new DataAlicloudEcsNetworkInterfacesInterfacesAssociatedPublicIpList(this, "associated_public_ip", false);
  public get associatedPublicIp() {
    return this._associatedPublicIp;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ipv6_sets - computed: true, optional: false, required: false
  public get ipv6Sets() {
    return this.getListAttribute('ipv6_sets');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // network_interface_name - computed: true, optional: false, required: false
  public get networkInterfaceName() {
    return this.getStringAttribute('network_interface_name');
  }

  // network_interface_traffic_mode - computed: true, optional: false, required: false
  public get networkInterfaceTrafficMode() {
    return this.getStringAttribute('network_interface_traffic_mode');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // primary_ip_address - computed: true, optional: false, required: false
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }

  // queue_number - computed: true, optional: false, required: false
  public get queueNumber() {
    return this.getNumberAttribute('queue_number');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // service_managed - computed: true, optional: false, required: false
  public get serviceManaged() {
    return this.getBooleanAttribute('service_managed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudEcsNetworkInterfacesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEcsNetworkInterfacesInterfacesOutputReference {
    return new DataAlicloudEcsNetworkInterfacesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces alicloud_ecs_network_interfaces}
*/
export class DataAlicloudEcsNetworkInterfaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_network_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEcsNetworkInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEcsNetworkInterfaces to import
  * @param importFromId The id of the existing DataAlicloudEcsNetworkInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEcsNetworkInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_network_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ecs_network_interfaces alicloud_ecs_network_interfaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEcsNetworkInterfacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEcsNetworkInterfacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_network_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._ids = config.ids;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._networkInterfaceName = config.networkInterfaceName;
    this._outputFile = config.outputFile;
    this._primaryIpAddress = config.primaryIpAddress;
    this._privateIp = config.privateIp;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupId = config.securityGroupId;
    this._serviceManaged = config.serviceManaged;
    this._status = config.status;
    this._tags = config.tags;
    this._type = config.type;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataAlicloudEcsNetworkInterfacesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // name - computed: false, optional: true, required: false
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // network_interface_name - computed: false, optional: true, required: false
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // primary_ip_address - computed: false, optional: true, required: false
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

  // private_ip - computed: false, optional: true, required: false
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

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // service_managed - computed: false, optional: true, required: false
  private _serviceManaged?: boolean | cdktf.IResolvable; 
  public get serviceManaged() {
    return this.getBooleanAttribute('service_managed');
  }
  public set serviceManaged(value: boolean | cdktf.IResolvable) {
    this._serviceManaged = value;
  }
  public resetServiceManaged() {
    this._serviceManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagedInput() {
    return this._serviceManaged;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_id - computed: false, optional: true, required: false
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

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      network_interface_name: cdktf.stringToTerraform(this._networkInterfaceName),
      output_file: cdktf.stringToTerraform(this._outputFile),
      primary_ip_address: cdktf.stringToTerraform(this._primaryIpAddress),
      private_ip: cdktf.stringToTerraform(this._privateIp),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      service_managed: cdktf.booleanToTerraform(this._serviceManaged),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_managed: {
        value: cdktf.booleanToHclTerraform(this._serviceManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
