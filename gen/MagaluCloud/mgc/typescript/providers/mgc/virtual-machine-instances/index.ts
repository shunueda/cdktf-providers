// https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualMachineInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the primary network interface will be created with a public IPv4 address.
  * A Public IPv4 address resource will be created and associated with you tenant, when deleting the instance the Public IPv4 will not be deleted and charges may apply.
  * If false, the primary network interface will be created without a public IPv4 address.
  * Default is false.
  * This attribute can only be used when "network_interface_id" is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#allocate_public_ipv4 VirtualMachineInstances#allocate_public_ipv4}
  */
  readonly allocatePublicIpv4?: boolean | cdktf.IResolvable;
  /**
  * The availability zone of the virtual machine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#availability_zone VirtualMachineInstances#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * List of security group IDs to be associated with the primary network interface on creation.
  * If not specified, the default security group of the VPC will be used.
  * For manage security groups after the instance creation, use the network resources.
  * Find out more in the documentation guides.
  * This attribute can only be used when "network_interface_id" is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#creation_security_groups VirtualMachineInstances#creation_security_groups}
  */
  readonly creationSecurityGroups?: string[];
  /**
  * The image name used for the virtual machine instance.
  * 			 This attribute is required when not creating the instance from a snapshot (i.e., when "snapshot_id" is not set).
  * 			 If "snapshot_id" is provided, the snapshot will be used instead of an image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#image VirtualMachineInstances#image}
  */
  readonly image?: string;
  /**
  * The machine type name of the virtual machine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#machine_type VirtualMachineInstances#machine_type}
  */
  readonly machineType: string;
  /**
  * The name of the virtual machine instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#name VirtualMachineInstances#name}
  */
  readonly name: string;
  /**
  * The snapshot ID used to create the virtual machine instance. If set, the snapshot will be used instead of an image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#snapshot_id VirtualMachineInstances#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The name of the SSH key associated with the virtual machine instance. Not required for Windows instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#ssh_key_name VirtualMachineInstances#ssh_key_name}
  */
  readonly sshKeyName?: string;
  /**
  * User data for instance initialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#user_data VirtualMachineInstances#user_data}
  */
  readonly userData?: string;
  /**
  * The VPC ID where the primary network interface will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#vpc_id VirtualMachineInstances#vpc_id}
  */
  readonly vpcId?: string;
}
export interface VirtualMachineInstancesNetworkInterfaces {
}

export function virtualMachineInstancesNetworkInterfacesToTerraform(struct?: VirtualMachineInstancesNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualMachineInstancesNetworkInterfacesToHclTerraform(struct?: VirtualMachineInstancesNetworkInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualMachineInstancesNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualMachineInstancesNetworkInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualMachineInstancesNetworkInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // local_ipv4 - computed: true, optional: false, required: false
  public get localIpv4() {
    return this.getStringAttribute('local_ipv4');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
}

export class VirtualMachineInstancesNetworkInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): VirtualMachineInstancesNetworkInterfacesOutputReference {
    return new VirtualMachineInstancesNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances mgc_virtual_machine_instances}
*/
export class VirtualMachineInstances extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_virtual_machine_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualMachineInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualMachineInstances to import
  * @param importFromId The id of the existing VirtualMachineInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualMachineInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_virtual_machine_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/virtual_machine_instances mgc_virtual_machine_instances} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualMachineInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualMachineInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_virtual_machine_instances',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatePublicIpv4 = config.allocatePublicIpv4;
    this._availabilityZone = config.availabilityZone;
    this._creationSecurityGroups = config.creationSecurityGroups;
    this._image = config.image;
    this._machineType = config.machineType;
    this._name = config.name;
    this._snapshotId = config.snapshotId;
    this._sshKeyName = config.sshKeyName;
    this._userData = config.userData;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_public_ipv4 - computed: false, optional: true, required: false
  private _allocatePublicIpv4?: boolean | cdktf.IResolvable; 
  public get allocatePublicIpv4() {
    return this.getBooleanAttribute('allocate_public_ipv4');
  }
  public set allocatePublicIpv4(value: boolean | cdktf.IResolvable) {
    this._allocatePublicIpv4 = value;
  }
  public resetAllocatePublicIpv4() {
    this._allocatePublicIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePublicIpv4Input() {
    return this._allocatePublicIpv4;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creation_security_groups - computed: false, optional: true, required: false
  private _creationSecurityGroups?: string[]; 
  public get creationSecurityGroups() {
    return this.getListAttribute('creation_security_groups');
  }
  public set creationSecurityGroups(value: string[]) {
    this._creationSecurityGroups = value;
  }
  public resetCreationSecurityGroups() {
    this._creationSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationSecurityGroupsInput() {
    return this._creationSecurityGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // local_ipv4 - computed: true, optional: false, required: false
  public get localIpv4() {
    return this.getStringAttribute('local_ipv4');
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // network_interfaces - computed: true, optional: false, required: false
  private _networkInterfaces = new VirtualMachineInstancesNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // ssh_key_name - computed: false, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_public_ipv4: cdktf.booleanToTerraform(this._allocatePublicIpv4),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      creation_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._creationSecurityGroups),
      image: cdktf.stringToTerraform(this._image),
      machine_type: cdktf.stringToTerraform(this._machineType),
      name: cdktf.stringToTerraform(this._name),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      ssh_key_name: cdktf.stringToTerraform(this._sshKeyName),
      user_data: cdktf.stringToTerraform(this._userData),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_public_ipv4: {
        value: cdktf.booleanToHclTerraform(this._allocatePublicIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._creationSecurityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
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
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_name: {
        value: cdktf.stringToHclTerraform(this._sshKeyName),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
