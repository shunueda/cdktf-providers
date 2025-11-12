// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#description Server#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#fee_system_type_code Server#fee_system_type_code}
  */
  readonly feeSystemTypeCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#init_script_no Server#init_script_no}
  */
  readonly initScriptNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#is_encrypted_base_block_storage_volume Server#is_encrypted_base_block_storage_volume}
  */
  readonly isEncryptedBaseBlockStorageVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#is_protect_server_termination Server#is_protect_server_termination}
  */
  readonly isProtectServerTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#login_key_name Server#login_key_name}
  */
  readonly loginKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#member_server_image_no Server#member_server_image_no}
  */
  readonly memberServerImageNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#name Server#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#placement_group_no Server#placement_group_no}
  */
  readonly placementGroupNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#raid_type_name Server#raid_type_name}
  */
  readonly raidTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#server_image_number Server#server_image_number}
  */
  readonly serverImageNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#server_image_product_code Server#server_image_product_code}
  */
  readonly serverImageProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#server_product_code Server#server_product_code}
  */
  readonly serverProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#server_spec_code Server#server_spec_code}
  */
  readonly serverSpecCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#subnet_no Server#subnet_no}
  */
  readonly subnetNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#zone Server#zone}
  */
  readonly zone?: string;
  /**
  * block_device_partition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#block_device_partition_list Server#block_device_partition_list}
  */
  readonly blockDevicePartitionList?: ServerBlockDevicePartitionListStruct[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#network_interface Server#network_interface}
  */
  readonly networkInterface?: ServerNetworkInterface[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#timeouts Server#timeouts}
  */
  readonly timeouts?: ServerTimeouts;
}
export interface ServerBlockDevicePartitionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#mount_point Server#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#partition_size Server#partition_size}
  */
  readonly partitionSize: string;
}

export function serverBlockDevicePartitionListStructToTerraform(struct?: ServerBlockDevicePartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    partition_size: cdktf.stringToTerraform(struct!.partitionSize),
  }
}


export function serverBlockDevicePartitionListStructToHclTerraform(struct?: ServerBlockDevicePartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_size: {
      value: cdktf.stringToHclTerraform(struct!.partitionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerBlockDevicePartitionListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerBlockDevicePartitionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._partitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionSize = this._partitionSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerBlockDevicePartitionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPoint = undefined;
      this._partitionSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPoint = value.mountPoint;
      this._partitionSize = value.partitionSize;
    }
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // partition_size - computed: false, optional: false, required: true
  private _partitionSize?: string; 
  public get partitionSize() {
    return this.getStringAttribute('partition_size');
  }
  public set partitionSize(value: string) {
    this._partitionSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSizeInput() {
    return this._partitionSize;
  }
}

export class ServerBlockDevicePartitionListStructList extends cdktf.ComplexList {
  public internalValue? : ServerBlockDevicePartitionListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServerBlockDevicePartitionListStructOutputReference {
    return new ServerBlockDevicePartitionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#network_interface_no Server#network_interface_no}
  */
  readonly networkInterfaceNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#order Server#order}
  */
  readonly order: number;
}

export function serverNetworkInterfaceToTerraform(struct?: ServerNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_interface_no: cdktf.stringToTerraform(struct!.networkInterfaceNo),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function serverNetworkInterfaceToHclTerraform(struct?: ServerNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_interface_no: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ServerNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkInterfaceNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceNo = this._networkInterfaceNo;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkInterfaceNo = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkInterfaceNo = value.networkInterfaceNo;
      this._order = value.order;
    }
  }

  // network_interface_no - computed: false, optional: false, required: true
  private _networkInterfaceNo?: string; 
  public get networkInterfaceNo() {
    return this.getStringAttribute('network_interface_no');
  }
  public set networkInterfaceNo(value: string) {
    this._networkInterfaceNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceNoInput() {
    return this._networkInterfaceNo;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // subnet_no - computed: true, optional: false, required: false
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
}

export class ServerNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkInterfaceOutputReference {
    return new ServerNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#create Server#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#delete Server#delete}
  */
  readonly delete?: string;
}

export function serverTimeoutsToTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function serverTimeoutsToHclTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server ncloud_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/server ncloud_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_server',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
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
    this._feeSystemTypeCode = config.feeSystemTypeCode;
    this._id = config.id;
    this._initScriptNo = config.initScriptNo;
    this._isEncryptedBaseBlockStorageVolume = config.isEncryptedBaseBlockStorageVolume;
    this._isProtectServerTermination = config.isProtectServerTermination;
    this._loginKeyName = config.loginKeyName;
    this._memberServerImageNo = config.memberServerImageNo;
    this._name = config.name;
    this._placementGroupNo = config.placementGroupNo;
    this._raidTypeName = config.raidTypeName;
    this._serverImageNumber = config.serverImageNumber;
    this._serverImageProductCode = config.serverImageProductCode;
    this._serverProductCode = config.serverProductCode;
    this._serverSpecCode = config.serverSpecCode;
    this._subnetNo = config.subnetNo;
    this._zone = config.zone;
    this._blockDevicePartitionList.internalValue = config.blockDevicePartitionList;
    this._networkInterface.internalValue = config.networkInterface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_block_storage_disk_detail_type - computed: true, optional: false, required: false
  public get baseBlockStorageDiskDetailType() {
    return this.getStringAttribute('base_block_storage_disk_detail_type');
  }

  // base_block_storage_disk_type - computed: true, optional: false, required: false
  public get baseBlockStorageDiskType() {
    return this.getStringAttribute('base_block_storage_disk_type');
  }

  // base_block_storage_size - computed: true, optional: false, required: false
  public get baseBlockStorageSize() {
    return this.getNumberAttribute('base_block_storage_size');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
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

  // fee_system_type_code - computed: false, optional: true, required: false
  private _feeSystemTypeCode?: string; 
  public get feeSystemTypeCode() {
    return this.getStringAttribute('fee_system_type_code');
  }
  public set feeSystemTypeCode(value: string) {
    this._feeSystemTypeCode = value;
  }
  public resetFeeSystemTypeCode() {
    this._feeSystemTypeCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feeSystemTypeCodeInput() {
    return this._feeSystemTypeCode;
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
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

  // init_script_no - computed: true, optional: true, required: false
  private _initScriptNo?: string; 
  public get initScriptNo() {
    return this.getStringAttribute('init_script_no');
  }
  public set initScriptNo(value: string) {
    this._initScriptNo = value;
  }
  public resetInitScriptNo() {
    this._initScriptNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptNoInput() {
    return this._initScriptNo;
  }

  // instance_no - computed: true, optional: false, required: false
  public get instanceNo() {
    return this.getStringAttribute('instance_no');
  }

  // is_encrypted_base_block_storage_volume - computed: true, optional: true, required: false
  private _isEncryptedBaseBlockStorageVolume?: boolean | cdktf.IResolvable; 
  public get isEncryptedBaseBlockStorageVolume() {
    return this.getBooleanAttribute('is_encrypted_base_block_storage_volume');
  }
  public set isEncryptedBaseBlockStorageVolume(value: boolean | cdktf.IResolvable) {
    this._isEncryptedBaseBlockStorageVolume = value;
  }
  public resetIsEncryptedBaseBlockStorageVolume() {
    this._isEncryptedBaseBlockStorageVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncryptedBaseBlockStorageVolumeInput() {
    return this._isEncryptedBaseBlockStorageVolume;
  }

  // is_fee_charging_monitoring - computed: true, optional: false, required: false
  public get isFeeChargingMonitoring() {
    return this.getBooleanAttribute('is_fee_charging_monitoring');
  }

  // is_protect_server_termination - computed: true, optional: true, required: false
  private _isProtectServerTermination?: boolean | cdktf.IResolvable; 
  public get isProtectServerTermination() {
    return this.getBooleanAttribute('is_protect_server_termination');
  }
  public set isProtectServerTermination(value: boolean | cdktf.IResolvable) {
    this._isProtectServerTermination = value;
  }
  public resetIsProtectServerTermination() {
    this._isProtectServerTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProtectServerTerminationInput() {
    return this._isProtectServerTermination;
  }

  // login_key_name - computed: true, optional: true, required: false
  private _loginKeyName?: string; 
  public get loginKeyName() {
    return this.getStringAttribute('login_key_name');
  }
  public set loginKeyName(value: string) {
    this._loginKeyName = value;
  }
  public resetLoginKeyName() {
    this._loginKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginKeyNameInput() {
    return this._loginKeyName;
  }

  // member_server_image_no - computed: false, optional: true, required: false
  private _memberServerImageNo?: string; 
  public get memberServerImageNo() {
    return this.getStringAttribute('member_server_image_no');
  }
  public set memberServerImageNo(value: string) {
    this._memberServerImageNo = value;
  }
  public resetMemberServerImageNo() {
    this._memberServerImageNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberServerImageNoInput() {
    return this._memberServerImageNo;
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
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

  // placement_group_no - computed: true, optional: true, required: false
  private _placementGroupNo?: string; 
  public get placementGroupNo() {
    return this.getStringAttribute('placement_group_no');
  }
  public set placementGroupNo(value: string) {
    this._placementGroupNo = value;
  }
  public resetPlacementGroupNo() {
    this._placementGroupNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupNoInput() {
    return this._placementGroupNo;
  }

  // platform_type - computed: true, optional: false, required: false
  public get platformType() {
    return this.getStringAttribute('platform_type');
  }

  // port_forwarding_external_port - computed: true, optional: false, required: false
  public get portForwardingExternalPort() {
    return this.getNumberAttribute('port_forwarding_external_port');
  }

  // port_forwarding_internal_port - computed: true, optional: false, required: false
  public get portForwardingInternalPort() {
    return this.getNumberAttribute('port_forwarding_internal_port');
  }

  // port_forwarding_public_ip - computed: true, optional: false, required: false
  public get portForwardingPublicIp() {
    return this.getStringAttribute('port_forwarding_public_ip');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // raid_type_name - computed: false, optional: true, required: false
  private _raidTypeName?: string; 
  public get raidTypeName() {
    return this.getStringAttribute('raid_type_name');
  }
  public set raidTypeName(value: string) {
    this._raidTypeName = value;
  }
  public resetRaidTypeName() {
    this._raidTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidTypeNameInput() {
    return this._raidTypeName;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // server_image_name - computed: true, optional: false, required: false
  public get serverImageName() {
    return this.getStringAttribute('server_image_name');
  }

  // server_image_number - computed: true, optional: true, required: false
  private _serverImageNumber?: string; 
  public get serverImageNumber() {
    return this.getStringAttribute('server_image_number');
  }
  public set serverImageNumber(value: string) {
    this._serverImageNumber = value;
  }
  public resetServerImageNumber() {
    this._serverImageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverImageNumberInput() {
    return this._serverImageNumber;
  }

  // server_image_product_code - computed: true, optional: true, required: false
  private _serverImageProductCode?: string; 
  public get serverImageProductCode() {
    return this.getStringAttribute('server_image_product_code');
  }
  public set serverImageProductCode(value: string) {
    this._serverImageProductCode = value;
  }
  public resetServerImageProductCode() {
    this._serverImageProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverImageProductCodeInput() {
    return this._serverImageProductCode;
  }

  // server_product_code - computed: true, optional: true, required: false
  private _serverProductCode?: string; 
  public get serverProductCode() {
    return this.getStringAttribute('server_product_code');
  }
  public set serverProductCode(value: string) {
    this._serverProductCode = value;
  }
  public resetServerProductCode() {
    this._serverProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProductCodeInput() {
    return this._serverProductCode;
  }

  // server_spec_code - computed: true, optional: true, required: false
  private _serverSpecCode?: string; 
  public get serverSpecCode() {
    return this.getStringAttribute('server_spec_code');
  }
  public set serverSpecCode(value: string) {
    this._serverSpecCode = value;
  }
  public resetServerSpecCode() {
    this._serverSpecCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSpecCodeInput() {
    return this._serverSpecCode;
  }

  // subnet_no - computed: true, optional: true, required: false
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  public resetSubnetNo() {
    this._subnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }

  // vpc_no - computed: true, optional: false, required: false
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // block_device_partition_list - computed: false, optional: true, required: false
  private _blockDevicePartitionList = new ServerBlockDevicePartitionListStructList(this, "block_device_partition_list", false);
  public get blockDevicePartitionList() {
    return this._blockDevicePartitionList;
  }
  public putBlockDevicePartitionList(value: ServerBlockDevicePartitionListStruct[] | cdktf.IResolvable) {
    this._blockDevicePartitionList.internalValue = value;
  }
  public resetBlockDevicePartitionList() {
    this._blockDevicePartitionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDevicePartitionListInput() {
    return this._blockDevicePartitionList.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new ServerNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: ServerNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerTimeouts) {
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
      fee_system_type_code: cdktf.stringToTerraform(this._feeSystemTypeCode),
      id: cdktf.stringToTerraform(this._id),
      init_script_no: cdktf.stringToTerraform(this._initScriptNo),
      is_encrypted_base_block_storage_volume: cdktf.booleanToTerraform(this._isEncryptedBaseBlockStorageVolume),
      is_protect_server_termination: cdktf.booleanToTerraform(this._isProtectServerTermination),
      login_key_name: cdktf.stringToTerraform(this._loginKeyName),
      member_server_image_no: cdktf.stringToTerraform(this._memberServerImageNo),
      name: cdktf.stringToTerraform(this._name),
      placement_group_no: cdktf.stringToTerraform(this._placementGroupNo),
      raid_type_name: cdktf.stringToTerraform(this._raidTypeName),
      server_image_number: cdktf.stringToTerraform(this._serverImageNumber),
      server_image_product_code: cdktf.stringToTerraform(this._serverImageProductCode),
      server_product_code: cdktf.stringToTerraform(this._serverProductCode),
      server_spec_code: cdktf.stringToTerraform(this._serverSpecCode),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
      zone: cdktf.stringToTerraform(this._zone),
      block_device_partition_list: cdktf.listMapper(serverBlockDevicePartitionListStructToTerraform, true)(this._blockDevicePartitionList.internalValue),
      network_interface: cdktf.listMapper(serverNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      timeouts: serverTimeoutsToTerraform(this._timeouts.internalValue),
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
      fee_system_type_code: {
        value: cdktf.stringToHclTerraform(this._feeSystemTypeCode),
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
      init_script_no: {
        value: cdktf.stringToHclTerraform(this._initScriptNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_encrypted_base_block_storage_volume: {
        value: cdktf.booleanToHclTerraform(this._isEncryptedBaseBlockStorageVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_protect_server_termination: {
        value: cdktf.booleanToHclTerraform(this._isProtectServerTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_key_name: {
        value: cdktf.stringToHclTerraform(this._loginKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_server_image_no: {
        value: cdktf.stringToHclTerraform(this._memberServerImageNo),
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
      placement_group_no: {
        value: cdktf.stringToHclTerraform(this._placementGroupNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      raid_type_name: {
        value: cdktf.stringToHclTerraform(this._raidTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_image_number: {
        value: cdktf.stringToHclTerraform(this._serverImageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_image_product_code: {
        value: cdktf.stringToHclTerraform(this._serverImageProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_product_code: {
        value: cdktf.stringToHclTerraform(this._serverProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_spec_code: {
        value: cdktf.stringToHclTerraform(this._serverSpecCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_no: {
        value: cdktf.stringToHclTerraform(this._subnetNo),
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
      block_device_partition_list: {
        value: cdktf.listMapperHcl(serverBlockDevicePartitionListStructToHclTerraform, true)(this._blockDevicePartitionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerBlockDevicePartitionListStructList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(serverNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerNetworkInterfaceList",
      },
      timeouts: {
        value: serverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
