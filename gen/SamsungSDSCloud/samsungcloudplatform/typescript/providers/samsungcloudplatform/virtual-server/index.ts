// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin account for this virtual server OS. For linux, this must be 'root'. For Windows, this must not be 'administrator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#admin_account VirtualServer#admin_account}
  */
  readonly adminAccount?: string;
  /**
  * Admin account password for this virtual server OS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#admin_password VirtualServer#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Enable anti-affinity feature for this virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#anti_affinity VirtualServer#anti_affinity}
  */
  readonly antiAffinity?: boolean | cdktf.IResolvable;
  /**
  * Availability Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#availability_zone_name VirtualServer#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Contract : None, 1 Year, 3 Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#contract_discount VirtualServer#contract_discount}
  */
  readonly contractDiscount: string;
  /**
  * CPU core count(2, 4, 8,..)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#cpu_count VirtualServer#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Enable delete protection for this virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#delete_protection VirtualServer#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#id VirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image id of this virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#image_id VirtualServer#image_id}
  */
  readonly imageId: string;
  /**
  * Initialization script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#initial_script_content VirtualServer#initial_script_content}
  */
  readonly initialScriptContent?: string;
  /**
  * IP address for internal IP assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#internal_ip_address VirtualServer#internal_ip_address}
  */
  readonly internalIpAddress?: string;
  /**
  * Key Pair Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#key_pair_id VirtualServer#key_pair_id}
  */
  readonly keyPairId?: string;
  /**
  * Memory size in gigabytes(4, 8, 16,..)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#memory_size_gb VirtualServer#memory_size_gb}
  */
  readonly memorySizeGb?: number;
  /**
  * Enable NAT IP feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#nat_enabled VirtualServer#nat_enabled}
  */
  readonly natEnabled?: boolean | cdktf.IResolvable;
  /**
  * Next Contract : None, 1 Year, 3 Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#next_contract_discount VirtualServer#next_contract_discount}
  */
  readonly nextContractDiscount?: string;
  /**
  * Enable encryption feature in OS(Boot) storage. (WARNING) This option can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#os_storage_encrypted VirtualServer#os_storage_encrypted}
  */
  readonly osStorageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * OS(Boot) storage name. 3 to 28 alpha-numeric characters with space and dash starting with alphabet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#os_storage_name VirtualServer#os_storage_name}
  */
  readonly osStorageName: string;
  /**
  * OS(Boot) storage size in gigabytes. (At least 100 GB required and size must be multiple of 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#os_storage_size_gb VirtualServer#os_storage_size_gb}
  */
  readonly osStorageSizeGb: number;
  /**
  * Placement Group Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#placement_group_id VirtualServer#placement_group_id}
  */
  readonly placementGroupId?: string;
  /**
  * Public IP id of this virtual server. Public-IP must be a valid public-ip resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#public_ip_id VirtualServer#public_ip_id}
  */
  readonly publicIpId?: string;
  /**
  * Role Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#role_id VirtualServer#role_id}
  */
  readonly roleId?: string;
  /**
  * Security-Group ids of this virtual server. Each security-group must be a valid security-group resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#security_group_ids VirtualServer#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Server Group Id for Anti-affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#server_group_id VirtualServer#server_group_id}
  */
  readonly serverGroupId?: string;
  /**
  * Server Type (s1v1m2,..)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#server_type VirtualServer#server_type}
  */
  readonly serverType?: string;
  /**
  * Virtual Server State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#state VirtualServer#state}
  */
  readonly state: string;
  /**
  * Subnet id of this virtual server. Subnet must be a valid subnet resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#subnet_id VirtualServer#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#tags VirtualServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Enable DNS feature for this virtual server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#use_dns VirtualServer#use_dns}
  */
  readonly useDns?: boolean | cdktf.IResolvable;
  /**
  * Virtual server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#virtual_server_name VirtualServer#virtual_server_name}
  */
  readonly virtualServerName: string;
  /**
  * VPC id of this virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#vpc_id VirtualServer#vpc_id}
  */
  readonly vpcId: string;
  /**
  * external_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#external_storage VirtualServer#external_storage}
  */
  readonly externalStorage?: VirtualServerExternalStorage[] | cdktf.IResolvable;
  /**
  * local_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#local_subnet VirtualServer#local_subnet}
  */
  readonly localSubnet?: VirtualServerLocalSubnet[] | cdktf.IResolvable;
}
export interface VirtualServerExternalStorage {
  /**
  * Use encryption for this storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#encrypted VirtualServer#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * External storage name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#name VirtualServer#name}
  */
  readonly name: string;
  /**
  * Storage product name : SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#product_name VirtualServer#product_name}
  */
  readonly productName?: string;
  /**
  * SHARED/DEDICATED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#shared_type VirtualServer#shared_type}
  */
  readonly sharedType?: string;
  /**
  * Storage size in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#storage_size_gb VirtualServer#storage_size_gb}
  */
  readonly storageSizeGb: number;
  /**
  * Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#tags VirtualServer#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function virtualServerExternalStorageToTerraform(struct?: VirtualServerExternalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    name: cdktf.stringToTerraform(struct!.name),
    product_name: cdktf.stringToTerraform(struct!.productName),
    shared_type: cdktf.stringToTerraform(struct!.sharedType),
    storage_size_gb: cdktf.numberToTerraform(struct!.storageSizeGb),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function virtualServerExternalStorageToHclTerraform(struct?: VirtualServerExternalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_name: {
      value: cdktf.stringToHclTerraform(struct!.productName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_type: {
      value: cdktf.stringToHclTerraform(struct!.sharedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServerExternalStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualServerExternalStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._productName !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName;
    }
    if (this._sharedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedType = this._sharedType;
    }
    if (this._storageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGb = this._storageSizeGb;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerExternalStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._name = undefined;
      this._productName = undefined;
      this._sharedType = undefined;
      this._storageSizeGb = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._name = value.name;
      this._productName = value.productName;
      this._sharedType = value.sharedType;
      this._storageSizeGb = value.storageSizeGb;
      this._tags = value.tags;
    }
  }

  // block_storage_id - computed: true, optional: false, required: false
  public get blockStorageId() {
    return this.getStringAttribute('block_storage_id');
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // shared_type - computed: false, optional: true, required: false
  private _sharedType?: string; 
  public get sharedType() {
    return this.getStringAttribute('shared_type');
  }
  public set sharedType(value: string) {
    this._sharedType = value;
  }
  public resetSharedType() {
    this._sharedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedTypeInput() {
    return this._sharedType;
  }

  // storage_size_gb - computed: false, optional: false, required: true
  private _storageSizeGb?: number; 
  public get storageSizeGb() {
    return this.getNumberAttribute('storage_size_gb');
  }
  public set storageSizeGb(value: number) {
    this._storageSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeGbInput() {
    return this._storageSizeGb;
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
}

export class VirtualServerExternalStorageList extends cdktf.ComplexList {
  public internalValue? : VirtualServerExternalStorage[] | cdktf.IResolvable

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
  public get(index: number): VirtualServerExternalStorageOutputReference {
    return new VirtualServerExternalStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServerLocalSubnet {
  /**
  * Subnet ip address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#ipv4 VirtualServer#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Subnet Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#subnet_id VirtualServer#subnet_id}
  */
  readonly subnetId: string;
}

export function virtualServerLocalSubnetToTerraform(struct?: VirtualServerLocalSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function virtualServerLocalSubnetToHclTerraform(struct?: VirtualServerLocalSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServerLocalSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualServerLocalSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServerLocalSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._subnetId = value.subnetId;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class VirtualServerLocalSubnetList extends cdktf.ComplexList {
  public internalValue? : VirtualServerLocalSubnet[] | cdktf.IResolvable

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
  public get(index: number): VirtualServerLocalSubnetOutputReference {
    return new VirtualServerLocalSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server samsungcloudplatform_virtual_server}
*/
export class VirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualServer to import
  * @param importFromId The id of the existing VirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/virtual_server samsungcloudplatform_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminAccount = config.adminAccount;
    this._adminPassword = config.adminPassword;
    this._antiAffinity = config.antiAffinity;
    this._availabilityZoneName = config.availabilityZoneName;
    this._contractDiscount = config.contractDiscount;
    this._cpuCount = config.cpuCount;
    this._deleteProtection = config.deleteProtection;
    this._id = config.id;
    this._imageId = config.imageId;
    this._initialScriptContent = config.initialScriptContent;
    this._internalIpAddress = config.internalIpAddress;
    this._keyPairId = config.keyPairId;
    this._memorySizeGb = config.memorySizeGb;
    this._natEnabled = config.natEnabled;
    this._nextContractDiscount = config.nextContractDiscount;
    this._osStorageEncrypted = config.osStorageEncrypted;
    this._osStorageName = config.osStorageName;
    this._osStorageSizeGb = config.osStorageSizeGb;
    this._placementGroupId = config.placementGroupId;
    this._publicIpId = config.publicIpId;
    this._roleId = config.roleId;
    this._securityGroupIds = config.securityGroupIds;
    this._serverGroupId = config.serverGroupId;
    this._serverType = config.serverType;
    this._state = config.state;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._useDns = config.useDns;
    this._virtualServerName = config.virtualServerName;
    this._vpcId = config.vpcId;
    this._externalStorage.internalValue = config.externalStorage;
    this._localSubnet.internalValue = config.localSubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_account - computed: false, optional: true, required: false
  private _adminAccount?: string; 
  public get adminAccount() {
    return this.getStringAttribute('admin_account');
  }
  public set adminAccount(value: string) {
    this._adminAccount = value;
  }
  public resetAdminAccount() {
    this._adminAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccountInput() {
    return this._adminAccount;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // anti_affinity - computed: false, optional: true, required: false
  private _antiAffinity?: boolean | cdktf.IResolvable; 
  public get antiAffinity() {
    return this.getBooleanAttribute('anti_affinity');
  }
  public set antiAffinity(value: boolean | cdktf.IResolvable) {
    this._antiAffinity = value;
  }
  public resetAntiAffinity() {
    this._antiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityInput() {
    return this._antiAffinity;
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // contract_discount - computed: false, optional: false, required: true
  private _contractDiscount?: string; 
  public get contractDiscount() {
    return this.getStringAttribute('contract_discount');
  }
  public set contractDiscount(value: string) {
    this._contractDiscount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractDiscountInput() {
    return this._contractDiscount;
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // initial_script_content - computed: false, optional: true, required: false
  private _initialScriptContent?: string; 
  public get initialScriptContent() {
    return this.getStringAttribute('initial_script_content');
  }
  public set initialScriptContent(value: string) {
    this._initialScriptContent = value;
  }
  public resetInitialScriptContent() {
    this._initialScriptContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialScriptContentInput() {
    return this._initialScriptContent;
  }

  // internal_ip_address - computed: false, optional: true, required: false
  private _internalIpAddress?: string; 
  public get internalIpAddress() {
    return this.getStringAttribute('internal_ip_address');
  }
  public set internalIpAddress(value: string) {
    this._internalIpAddress = value;
  }
  public resetInternalIpAddress() {
    this._internalIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpAddressInput() {
    return this._internalIpAddress;
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // key_pair_id - computed: false, optional: true, required: false
  private _keyPairId?: string; 
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }
  public set keyPairId(value: string) {
    this._keyPairId = value;
  }
  public resetKeyPairId() {
    this._keyPairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId;
  }

  // memory_size_gb - computed: false, optional: true, required: false
  private _memorySizeGb?: number; 
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }
  public set memorySizeGb(value: number) {
    this._memorySizeGb = value;
  }
  public resetMemorySizeGb() {
    this._memorySizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeGbInput() {
    return this._memorySizeGb;
  }

  // nat_enabled - computed: false, optional: true, required: false
  private _natEnabled?: boolean | cdktf.IResolvable; 
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }
  public set natEnabled(value: boolean | cdktf.IResolvable) {
    this._natEnabled = value;
  }
  public resetNatEnabled() {
    this._natEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEnabledInput() {
    return this._natEnabled;
  }

  // nat_ipv4 - computed: true, optional: false, required: false
  public get natIpv4() {
    return this.getStringAttribute('nat_ipv4');
  }

  // next_contract_discount - computed: false, optional: true, required: false
  private _nextContractDiscount?: string; 
  public get nextContractDiscount() {
    return this.getStringAttribute('next_contract_discount');
  }
  public set nextContractDiscount(value: string) {
    this._nextContractDiscount = value;
  }
  public resetNextContractDiscount() {
    this._nextContractDiscount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextContractDiscountInput() {
    return this._nextContractDiscount;
  }

  // os_storage_encrypted - computed: false, optional: true, required: false
  private _osStorageEncrypted?: boolean | cdktf.IResolvable; 
  public get osStorageEncrypted() {
    return this.getBooleanAttribute('os_storage_encrypted');
  }
  public set osStorageEncrypted(value: boolean | cdktf.IResolvable) {
    this._osStorageEncrypted = value;
  }
  public resetOsStorageEncrypted() {
    this._osStorageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osStorageEncryptedInput() {
    return this._osStorageEncrypted;
  }

  // os_storage_name - computed: false, optional: false, required: true
  private _osStorageName?: string; 
  public get osStorageName() {
    return this.getStringAttribute('os_storage_name');
  }
  public set osStorageName(value: string) {
    this._osStorageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osStorageNameInput() {
    return this._osStorageName;
  }

  // os_storage_size_gb - computed: false, optional: false, required: true
  private _osStorageSizeGb?: number; 
  public get osStorageSizeGb() {
    return this.getNumberAttribute('os_storage_size_gb');
  }
  public set osStorageSizeGb(value: number) {
    this._osStorageSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osStorageSizeGbInput() {
    return this._osStorageSizeGb;
  }

  // placement_group_id - computed: false, optional: true, required: false
  private _placementGroupId?: string; 
  public get placementGroupId() {
    return this.getStringAttribute('placement_group_id');
  }
  public set placementGroupId(value: string) {
    this._placementGroupId = value;
  }
  public resetPlacementGroupId() {
    this._placementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupIdInput() {
    return this._placementGroupId;
  }

  // public_ip_id - computed: false, optional: true, required: false
  private _publicIpId?: string; 
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
  }
  public set publicIpId(value: string) {
    this._publicIpId = value;
  }
  public resetPublicIpId() {
    this._publicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpIdInput() {
    return this._publicIpId;
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // server_group_id - computed: false, optional: true, required: false
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  public resetServerGroupId() {
    this._serverGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }

  // server_type - computed: false, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // use_dns - computed: false, optional: true, required: false
  private _useDns?: boolean | cdktf.IResolvable; 
  public get useDns() {
    return this.getBooleanAttribute('use_dns');
  }
  public set useDns(value: boolean | cdktf.IResolvable) {
    this._useDns = value;
  }
  public resetUseDns() {
    this._useDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnsInput() {
    return this._useDns;
  }

  // virtual_server_name - computed: false, optional: false, required: true
  private _virtualServerName?: string; 
  public get virtualServerName() {
    return this.getStringAttribute('virtual_server_name');
  }
  public set virtualServerName(value: string) {
    this._virtualServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerNameInput() {
    return this._virtualServerName;
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

  // external_storage - computed: false, optional: true, required: false
  private _externalStorage = new VirtualServerExternalStorageList(this, "external_storage", false);
  public get externalStorage() {
    return this._externalStorage;
  }
  public putExternalStorage(value: VirtualServerExternalStorage[] | cdktf.IResolvable) {
    this._externalStorage.internalValue = value;
  }
  public resetExternalStorage() {
    this._externalStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalStorageInput() {
    return this._externalStorage.internalValue;
  }

  // local_subnet - computed: false, optional: true, required: false
  private _localSubnet = new VirtualServerLocalSubnetList(this, "local_subnet", false);
  public get localSubnet() {
    return this._localSubnet;
  }
  public putLocalSubnet(value: VirtualServerLocalSubnet[] | cdktf.IResolvable) {
    this._localSubnet.internalValue = value;
  }
  public resetLocalSubnet() {
    this._localSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_account: cdktf.stringToTerraform(this._adminAccount),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      anti_affinity: cdktf.booleanToTerraform(this._antiAffinity),
      availability_zone_name: cdktf.stringToTerraform(this._availabilityZoneName),
      contract_discount: cdktf.stringToTerraform(this._contractDiscount),
      cpu_count: cdktf.numberToTerraform(this._cpuCount),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      initial_script_content: cdktf.stringToTerraform(this._initialScriptContent),
      internal_ip_address: cdktf.stringToTerraform(this._internalIpAddress),
      key_pair_id: cdktf.stringToTerraform(this._keyPairId),
      memory_size_gb: cdktf.numberToTerraform(this._memorySizeGb),
      nat_enabled: cdktf.booleanToTerraform(this._natEnabled),
      next_contract_discount: cdktf.stringToTerraform(this._nextContractDiscount),
      os_storage_encrypted: cdktf.booleanToTerraform(this._osStorageEncrypted),
      os_storage_name: cdktf.stringToTerraform(this._osStorageName),
      os_storage_size_gb: cdktf.numberToTerraform(this._osStorageSizeGb),
      placement_group_id: cdktf.stringToTerraform(this._placementGroupId),
      public_ip_id: cdktf.stringToTerraform(this._publicIpId),
      role_id: cdktf.stringToTerraform(this._roleId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      server_group_id: cdktf.stringToTerraform(this._serverGroupId),
      server_type: cdktf.stringToTerraform(this._serverType),
      state: cdktf.stringToTerraform(this._state),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_dns: cdktf.booleanToTerraform(this._useDns),
      virtual_server_name: cdktf.stringToTerraform(this._virtualServerName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      external_storage: cdktf.listMapper(virtualServerExternalStorageToTerraform, true)(this._externalStorage.internalValue),
      local_subnet: cdktf.listMapper(virtualServerLocalSubnetToTerraform, true)(this._localSubnet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_account: {
        value: cdktf.stringToHclTerraform(this._adminAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_affinity: {
        value: cdktf.booleanToHclTerraform(this._antiAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone_name: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_discount: {
        value: cdktf.stringToHclTerraform(this._contractDiscount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_count: {
        value: cdktf.numberToHclTerraform(this._cpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_script_content: {
        value: cdktf.stringToHclTerraform(this._initialScriptContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_ip_address: {
        value: cdktf.stringToHclTerraform(this._internalIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair_id: {
        value: cdktf.stringToHclTerraform(this._keyPairId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size_gb: {
        value: cdktf.numberToHclTerraform(this._memorySizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_enabled: {
        value: cdktf.booleanToHclTerraform(this._natEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      next_contract_discount: {
        value: cdktf.stringToHclTerraform(this._nextContractDiscount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_storage_encrypted: {
        value: cdktf.booleanToHclTerraform(this._osStorageEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os_storage_name: {
        value: cdktf.stringToHclTerraform(this._osStorageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_storage_size_gb: {
        value: cdktf.numberToHclTerraform(this._osStorageSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      placement_group_id: {
        value: cdktf.stringToHclTerraform(this._placementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_id: {
        value: cdktf.stringToHclTerraform(this._publicIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_group_id: {
        value: cdktf.stringToHclTerraform(this._serverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
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
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      use_dns: {
        value: cdktf.booleanToHclTerraform(this._useDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_server_name: {
        value: cdktf.stringToHclTerraform(this._virtualServerName),
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
      external_storage: {
        value: cdktf.listMapperHcl(virtualServerExternalStorageToHclTerraform, true)(this._externalStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualServerExternalStorageList",
      },
      local_subnet: {
        value: cdktf.listMapperHcl(virtualServerLocalSubnetToHclTerraform, true)(this._localSubnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualServerLocalSubnetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
