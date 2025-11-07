// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BmServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin account for this bare-metal server OS. For linux, this must be 'root'. For Windows, this must not be 'administrator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#admin_account BmServer#admin_account}
  */
  readonly adminAccount?: string;
  /**
  * Admin account password for this bare-metal server OS. (CAUTION) The actual plain-text password will be sent to your email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#admin_password BmServer#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Contract : None, 1-year, 3-year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#contract_discount BmServer#contract_discount}
  */
  readonly contractDiscount: string;
  /**
  * CPU core count(8, 16, ..)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#cpu_count BmServer#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * Enable delete protection for this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#delete_protection BmServer#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#id BmServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image id of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#image_id BmServer#image_id}
  */
  readonly imageId: string;
  /**
  * Initialization script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#initial_script BmServer#initial_script}
  */
  readonly initialScript?: string;
  /**
  * Memory size in gigabytes(16, 32,..)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#memory_size_gb BmServer#memory_size_gb}
  */
  readonly memorySizeGb: number;
  /**
  * Subnet id of this bare-metal server. Subnet must be a valid subnet resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#subnet_id BmServer#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#tags BmServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * VPC id of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#vpc_id BmServer#vpc_id}
  */
  readonly vpcId: string;
  /**
  * block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#block_storages BmServer#block_storages}
  */
  readonly blockStorages?: BmServerBlockStorages[] | cdktf.IResolvable;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#servers BmServer#servers}
  */
  readonly servers: BmServerServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#timeouts BmServer#timeouts}
  */
  readonly timeouts?: BmServerTimeouts;
}
export interface BmServerBlockStorages {
  /**
  * Use encryption for this storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#encrypted BmServer#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Block storage name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#name BmServer#name}
  */
  readonly name: string;
  /**
  * Storage product name : SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#product_name BmServer#product_name}
  */
  readonly productName?: string;
  /**
  * Storage size in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#storage_size_gb BmServer#storage_size_gb}
  */
  readonly storageSizeGb: number;
}

export function bmServerBlockStoragesToTerraform(struct?: BmServerBlockStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    name: cdktf.stringToTerraform(struct!.name),
    product_name: cdktf.stringToTerraform(struct!.productName),
    storage_size_gb: cdktf.numberToTerraform(struct!.storageSizeGb),
  }
}


export function bmServerBlockStoragesToHclTerraform(struct?: BmServerBlockStorages | cdktf.IResolvable): any {
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
    storage_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BmServerBlockStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BmServerBlockStorages | cdktf.IResolvable | undefined {
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
    if (this._storageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeGb = this._storageSizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BmServerBlockStorages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._name = undefined;
      this._productName = undefined;
      this._storageSizeGb = undefined;
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
      this._storageSizeGb = value.storageSizeGb;
    }
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
}

export class BmServerBlockStoragesList extends cdktf.ComplexList {
  public internalValue? : BmServerBlockStorages[] | cdktf.IResolvable

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
  public get(index: number): BmServerBlockStoragesOutputReference {
    return new BmServerBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BmServerServers {
  /**
  * Bare-metal server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#bm_server_name BmServer#bm_server_name}
  */
  readonly bmServerName: string;
  /**
  * IP address of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#ipv4 BmServer#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Enable local subnet for this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#local_subnet_enabled BmServer#local_subnet_enabled}
  */
  readonly localSubnetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Local Subnet id of this bare-metal server. Subnet must be a valid subnet resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#local_subnet_id BmServer#local_subnet_id}
  */
  readonly localSubnetId?: string;
  /**
  * Local IP address of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#local_subnet_ipv4 BmServer#local_subnet_ipv4}
  */
  readonly localSubnetIpv4?: string;
  /**
  * Enable NAT feature for this bare-metal server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#nat_enabled BmServer#nat_enabled}
  */
  readonly natEnabled?: boolean | cdktf.IResolvable;
  /**
  * Public IP id of this bare-metal server. Public-IP must be a valid public-ip resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#public_ip_id BmServer#public_ip_id}
  */
  readonly publicIpId?: string;
  /**
  * Baremetal Server State(ex. RUNNING, STOPPED)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#state BmServer#state}
  */
  readonly state: string;
  /**
  * Enable DNS feature for this bare-metal server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#use_dns BmServer#use_dns}
  */
  readonly useDns?: boolean | cdktf.IResolvable;
  /**
  * Enable hyper-threading feature for this bare-metal server.(ex. Y, N)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#use_hyper_threading BmServer#use_hyper_threading}
  */
  readonly useHyperThreading?: string;
}

export function bmServerServersToTerraform(struct?: BmServerServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bm_server_name: cdktf.stringToTerraform(struct!.bmServerName),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    local_subnet_enabled: cdktf.booleanToTerraform(struct!.localSubnetEnabled),
    local_subnet_id: cdktf.stringToTerraform(struct!.localSubnetId),
    local_subnet_ipv4: cdktf.stringToTerraform(struct!.localSubnetIpv4),
    nat_enabled: cdktf.booleanToTerraform(struct!.natEnabled),
    public_ip_id: cdktf.stringToTerraform(struct!.publicIpId),
    state: cdktf.stringToTerraform(struct!.state),
    use_dns: cdktf.booleanToTerraform(struct!.useDns),
    use_hyper_threading: cdktf.stringToTerraform(struct!.useHyperThreading),
  }
}


export function bmServerServersToHclTerraform(struct?: BmServerServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bm_server_name: {
      value: cdktf.stringToHclTerraform(struct!.bmServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_subnet_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.localSubnetEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.localSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_subnet_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.localSubnetIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.natEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.publicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_dns: {
      value: cdktf.booleanToHclTerraform(struct!.useDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_hyper_threading: {
      value: cdktf.stringToHclTerraform(struct!.useHyperThreading),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BmServerServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BmServerServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bmServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmServerName = this._bmServerName;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._localSubnetEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetEnabled = this._localSubnetEnabled;
    }
    if (this._localSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetId = this._localSubnetId;
    }
    if (this._localSubnetIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnetIpv4 = this._localSubnetIpv4;
    }
    if (this._natEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.natEnabled = this._natEnabled;
    }
    if (this._publicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpId = this._publicIpId;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._useDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDns = this._useDns;
    }
    if (this._useHyperThreading !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHyperThreading = this._useHyperThreading;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BmServerServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bmServerName = undefined;
      this._ipv4 = undefined;
      this._localSubnetEnabled = undefined;
      this._localSubnetId = undefined;
      this._localSubnetIpv4 = undefined;
      this._natEnabled = undefined;
      this._publicIpId = undefined;
      this._state = undefined;
      this._useDns = undefined;
      this._useHyperThreading = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bmServerName = value.bmServerName;
      this._ipv4 = value.ipv4;
      this._localSubnetEnabled = value.localSubnetEnabled;
      this._localSubnetId = value.localSubnetId;
      this._localSubnetIpv4 = value.localSubnetIpv4;
      this._natEnabled = value.natEnabled;
      this._publicIpId = value.publicIpId;
      this._state = value.state;
      this._useDns = value.useDns;
      this._useHyperThreading = value.useHyperThreading;
    }
  }

  // bm_server_name - computed: false, optional: false, required: true
  private _bmServerName?: string; 
  public get bmServerName() {
    return this.getStringAttribute('bm_server_name');
  }
  public set bmServerName(value: string) {
    this._bmServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bmServerNameInput() {
    return this._bmServerName;
  }

  // ipv4 - computed: false, optional: true, required: false
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

  // local_subnet_enabled - computed: false, optional: true, required: false
  private _localSubnetEnabled?: boolean | cdktf.IResolvable; 
  public get localSubnetEnabled() {
    return this.getBooleanAttribute('local_subnet_enabled');
  }
  public set localSubnetEnabled(value: boolean | cdktf.IResolvable) {
    this._localSubnetEnabled = value;
  }
  public resetLocalSubnetEnabled() {
    this._localSubnetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetEnabledInput() {
    return this._localSubnetEnabled;
  }

  // local_subnet_id - computed: false, optional: true, required: false
  private _localSubnetId?: string; 
  public get localSubnetId() {
    return this.getStringAttribute('local_subnet_id');
  }
  public set localSubnetId(value: string) {
    this._localSubnetId = value;
  }
  public resetLocalSubnetId() {
    this._localSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetIdInput() {
    return this._localSubnetId;
  }

  // local_subnet_ipv4 - computed: false, optional: true, required: false
  private _localSubnetIpv4?: string; 
  public get localSubnetIpv4() {
    return this.getStringAttribute('local_subnet_ipv4');
  }
  public set localSubnetIpv4(value: string) {
    this._localSubnetIpv4 = value;
  }
  public resetLocalSubnetIpv4() {
    this._localSubnetIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetIpv4Input() {
    return this._localSubnetIpv4;
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

  // use_hyper_threading - computed: false, optional: true, required: false
  private _useHyperThreading?: string; 
  public get useHyperThreading() {
    return this.getStringAttribute('use_hyper_threading');
  }
  public set useHyperThreading(value: string) {
    this._useHyperThreading = value;
  }
  public resetUseHyperThreading() {
    this._useHyperThreading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHyperThreadingInput() {
    return this._useHyperThreading;
  }
}

export class BmServerServersList extends cdktf.ComplexList {
  public internalValue? : BmServerServers[] | cdktf.IResolvable

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
  public get(index: number): BmServerServersOutputReference {
    return new BmServerServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BmServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#create BmServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#delete BmServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#update BmServer#update}
  */
  readonly update?: string;
}

export function bmServerTimeoutsToTerraform(struct?: BmServerTimeouts | cdktf.IResolvable): any {
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


export function bmServerTimeoutsToHclTerraform(struct?: BmServerTimeouts | cdktf.IResolvable): any {
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

export class BmServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BmServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BmServerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server samsungcloudplatform_bm_server}
*/
export class BmServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_bm_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BmServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BmServer to import
  * @param importFromId The id of the existing BmServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BmServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_bm_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server samsungcloudplatform_bm_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BmServerConfig
  */
  public constructor(scope: Construct, id: string, config: BmServerConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_bm_server',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._contractDiscount = config.contractDiscount;
    this._cpuCount = config.cpuCount;
    this._deleteProtection = config.deleteProtection;
    this._id = config.id;
    this._imageId = config.imageId;
    this._initialScript = config.initialScript;
    this._memorySizeGb = config.memorySizeGb;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._blockStorages.internalValue = config.blockStorages;
    this._servers.internalValue = config.servers;
    this._timeouts.internalValue = config.timeouts;
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

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
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

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
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

  // initial_script - computed: false, optional: true, required: false
  private _initialScript?: string; 
  public get initialScript() {
    return this.getStringAttribute('initial_script');
  }
  public set initialScript(value: string) {
    this._initialScript = value;
  }
  public resetInitialScript() {
    this._initialScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialScriptInput() {
    return this._initialScript;
  }

  // memory_size_gb - computed: false, optional: false, required: true
  private _memorySizeGb?: number; 
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }
  public set memorySizeGb(value: number) {
    this._memorySizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeGbInput() {
    return this._memorySizeGb;
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

  // block_storages - computed: false, optional: true, required: false
  private _blockStorages = new BmServerBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }
  public putBlockStorages(value: BmServerBlockStorages[] | cdktf.IResolvable) {
    this._blockStorages.internalValue = value;
  }
  public resetBlockStorages() {
    this._blockStorages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStoragesInput() {
    return this._blockStorages.internalValue;
  }

  // servers - computed: false, optional: false, required: true
  private _servers = new BmServerServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: BmServerServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BmServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BmServerTimeouts) {
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
      admin_account: cdktf.stringToTerraform(this._adminAccount),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      contract_discount: cdktf.stringToTerraform(this._contractDiscount),
      cpu_count: cdktf.numberToTerraform(this._cpuCount),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      initial_script: cdktf.stringToTerraform(this._initialScript),
      memory_size_gb: cdktf.numberToTerraform(this._memorySizeGb),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      block_storages: cdktf.listMapper(bmServerBlockStoragesToTerraform, true)(this._blockStorages.internalValue),
      servers: cdktf.listMapper(bmServerServersToTerraform, true)(this._servers.internalValue),
      timeouts: bmServerTimeoutsToTerraform(this._timeouts.internalValue),
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
      initial_script: {
        value: cdktf.stringToHclTerraform(this._initialScript),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_storages: {
        value: cdktf.listMapperHcl(bmServerBlockStoragesToHclTerraform, true)(this._blockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BmServerBlockStoragesList",
      },
      servers: {
        value: cdktf.listMapperHcl(bmServerServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BmServerServersList",
      },
      timeouts: {
        value: bmServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BmServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
