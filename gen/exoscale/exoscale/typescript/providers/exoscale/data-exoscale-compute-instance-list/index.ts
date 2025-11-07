// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExoscaleComputeInstanceListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#created_at DataExoscaleComputeInstanceList#created_at}
  */
  readonly createdAt?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#deploy_target_id DataExoscaleComputeInstanceList#deploy_target_id}
  */
  readonly deployTargetId?: string;
  /**
  * Match against this int
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#disk_size DataExoscaleComputeInstanceList#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#enable_secure_boot DataExoscaleComputeInstanceList#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#enable_tpm DataExoscaleComputeInstanceList#enable_tpm}
  */
  readonly enableTpm?: boolean | cdktf.IResolvable;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#id DataExoscaleComputeInstanceList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Match against this bool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#ipv6 DataExoscaleComputeInstanceList#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#ipv6_address DataExoscaleComputeInstanceList#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Match against key/values. Keys are matched exactly, while values may be matched as a regex if you supply a string that begins and ends with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#labels DataExoscaleComputeInstanceList#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#manager_id DataExoscaleComputeInstanceList#manager_id}
  */
  readonly managerId?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#manager_type DataExoscaleComputeInstanceList#manager_type}
  */
  readonly managerType?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#name DataExoscaleComputeInstanceList#name}
  */
  readonly name?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#public_ip_address DataExoscaleComputeInstanceList#public_ip_address}
  */
  readonly publicIpAddress?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#reverse_dns DataExoscaleComputeInstanceList#reverse_dns}
  */
  readonly reverseDns?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#ssh_key DataExoscaleComputeInstanceList#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#state DataExoscaleComputeInstanceList#state}
  */
  readonly state?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#template_id DataExoscaleComputeInstanceList#template_id}
  */
  readonly templateId?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#type DataExoscaleComputeInstanceList#type}
  */
  readonly type?: string;
  /**
  * Match against this string. If you supply a string that begins and ends with a "/" it will be matched as a regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#user_data DataExoscaleComputeInstanceList#user_data}
  */
  readonly userData?: string;
  /**
  * The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#zone DataExoscaleComputeInstanceList#zone}
  */
  readonly zone: string;
}
export interface DataExoscaleComputeInstanceListInstances {
}

export function dataExoscaleComputeInstanceListInstancesToTerraform(struct?: DataExoscaleComputeInstanceListInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataExoscaleComputeInstanceListInstancesToHclTerraform(struct?: DataExoscaleComputeInstanceListInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataExoscaleComputeInstanceListInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataExoscaleComputeInstanceListInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleComputeInstanceListInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_affinity_group_ids - computed: true, optional: false, required: false
  public get antiAffinityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('anti_affinity_group_ids'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deploy_target_id - computed: true, optional: false, required: false
  public get deployTargetId() {
    return this.getStringAttribute('deploy_target_id');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // elastic_ip_ids - computed: true, optional: false, required: false
  public get elasticIpIds() {
    return cdktf.Fn.tolist(this.getListAttribute('elastic_ip_ids'));
  }

  // enable_secure_boot - computed: true, optional: false, required: false
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }

  // enable_tpm - computed: true, optional: false, required: false
  public get enableTpm() {
    return this.getBooleanAttribute('enable_tpm');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }

  // manager_type - computed: true, optional: false, required: false
  public get managerType() {
    return this.getStringAttribute('manager_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_network_ids - computed: true, optional: false, required: false
  public get privateNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('private_network_ids'));
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // reverse_dns - computed: true, optional: false, required: false
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }

  // ssh_keys - computed: true, optional: false, required: false
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_data - computed: true, optional: false, required: false
  public get userData() {
    return this.getStringAttribute('user_data');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataExoscaleComputeInstanceListInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataExoscaleComputeInstanceListInstancesOutputReference {
    return new DataExoscaleComputeInstanceListInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list exoscale_compute_instance_list}
*/
export class DataExoscaleComputeInstanceList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_compute_instance_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataExoscaleComputeInstanceList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataExoscaleComputeInstanceList to import
  * @param importFromId The id of the existing DataExoscaleComputeInstanceList that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataExoscaleComputeInstanceList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_compute_instance_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/compute_instance_list exoscale_compute_instance_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExoscaleComputeInstanceListConfig
  */
  public constructor(scope: Construct, id: string, config: DataExoscaleComputeInstanceListConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_compute_instance_list',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.66.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._deployTargetId = config.deployTargetId;
    this._diskSize = config.diskSize;
    this._enableSecureBoot = config.enableSecureBoot;
    this._enableTpm = config.enableTpm;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._ipv6Address = config.ipv6Address;
    this._labels = config.labels;
    this._managerId = config.managerId;
    this._managerType = config.managerType;
    this._name = config.name;
    this._publicIpAddress = config.publicIpAddress;
    this._reverseDns = config.reverseDns;
    this._sshKey = config.sshKey;
    this._state = config.state;
    this._templateId = config.templateId;
    this._type = config.type;
    this._userData = config.userData;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // deploy_target_id - computed: false, optional: true, required: false
  private _deployTargetId?: string; 
  public get deployTargetId() {
    return this.getStringAttribute('deploy_target_id');
  }
  public set deployTargetId(value: string) {
    this._deployTargetId = value;
  }
  public resetDeployTargetId() {
    this._deployTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTargetIdInput() {
    return this._deployTargetId;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_tpm - computed: false, optional: true, required: false
  private _enableTpm?: boolean | cdktf.IResolvable; 
  public get enableTpm() {
    return this.getBooleanAttribute('enable_tpm');
  }
  public set enableTpm(value: boolean | cdktf.IResolvable) {
    this._enableTpm = value;
  }
  public resetEnableTpm() {
    this._enableTpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTpmInput() {
    return this._enableTpm;
  }

  // id - computed: false, optional: true, required: false
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

  // instances - computed: true, optional: false, required: false
  private _instances = new DataExoscaleComputeInstanceListInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: string; 
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }
  public set managerId(value: string) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // manager_type - computed: false, optional: true, required: false
  private _managerType?: string; 
  public get managerType() {
    return this.getStringAttribute('manager_type');
  }
  public set managerType(value: string) {
    this._managerType = value;
  }
  public resetManagerType() {
    this._managerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerTypeInput() {
    return this._managerType;
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

  // public_ip_address - computed: false, optional: true, required: false
  private _publicIpAddress?: string; 
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
  public set publicIpAddress(value: string) {
    this._publicIpAddress = value;
  }
  public resetPublicIpAddress() {
    this._publicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress;
  }

  // reverse_dns - computed: false, optional: true, required: false
  private _reverseDns?: string; 
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }
  public set reverseDns(value: string) {
    this._reverseDns = value;
  }
  public resetReverseDns() {
    this._reverseDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDnsInput() {
    return this._reverseDns;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      deploy_target_id: cdktf.stringToTerraform(this._deployTargetId),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      enable_secure_boot: cdktf.booleanToTerraform(this._enableSecureBoot),
      enable_tpm: cdktf.booleanToTerraform(this._enableTpm),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      manager_id: cdktf.stringToTerraform(this._managerId),
      manager_type: cdktf.stringToTerraform(this._managerType),
      name: cdktf.stringToTerraform(this._name),
      public_ip_address: cdktf.stringToTerraform(this._publicIpAddress),
      reverse_dns: cdktf.stringToTerraform(this._reverseDns),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      state: cdktf.stringToTerraform(this._state),
      template_id: cdktf.stringToTerraform(this._templateId),
      type: cdktf.stringToTerraform(this._type),
      user_data: cdktf.stringToTerraform(this._userData),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_target_id: {
        value: cdktf.stringToHclTerraform(this._deployTargetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_secure_boot: {
        value: cdktf.booleanToHclTerraform(this._enableSecureBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tpm: {
        value: cdktf.booleanToHclTerraform(this._enableTpm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      manager_id: {
        value: cdktf.stringToHclTerraform(this._managerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_type: {
        value: cdktf.stringToHclTerraform(this._managerType),
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
      public_ip_address: {
        value: cdktf.stringToHclTerraform(this._publicIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_dns: {
        value: cdktf.stringToHclTerraform(this._reverseDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
