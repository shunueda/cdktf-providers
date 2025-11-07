// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BmServerVdcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin account for this bare-metal server OS. For linux, this must be 'root'. For Windows, this must not be 'administrator'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#admin_account BmServerVdc#admin_account}
  */
  readonly adminAccount?: string;
  /**
  * Admin account password for this bare-metal server OS. (CAUTION) The actual plain-text password will be sent to your email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#admin_password BmServerVdc#admin_password}
  */
  readonly adminPassword: string;
  /**
  * BLOCK ID of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#block_id BmServerVdc#block_id}
  */
  readonly blockId: string;
  /**
  * Contract : None, 1 Year, 3 Year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#contract_discount BmServerVdc#contract_discount}
  */
  readonly contractDiscount: string;
  /**
  * CPU core count(8, 16, ..)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#cpu_count BmServerVdc#cpu_count}
  */
  readonly cpuCount: number;
  /**
  * Enable delete protection for this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#delete_protection BmServerVdc#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#id BmServerVdc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image name of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#image_name BmServerVdc#image_name}
  */
  readonly imageName: string;
  /**
  * Initialization script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#initial_script BmServerVdc#initial_script}
  */
  readonly initialScript?: string;
  /**
  * Memory size in gigabytes(16, 32,..)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#memory_size BmServerVdc#memory_size}
  */
  readonly memorySize: number;
  /**
  * SERVICE ZONE ID of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#service_zone_id BmServerVdc#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Subnet id of this bare-metal server. Subnet must be a valid subnet resource which is attached to the VDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#subnet_id BmServerVdc#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#tags BmServerVdc#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * VDC ID of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#vdc_id BmServerVdc#vdc_id}
  */
  readonly vdcId: string;
  /**
  * block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#block_storages BmServerVdc#block_storages}
  */
  readonly blockStorages?: BmServerVdcBlockStorages[] | cdktf.IResolvable;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#servers BmServerVdc#servers}
  */
  readonly servers: BmServerVdcServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#timeouts BmServerVdc#timeouts}
  */
  readonly timeouts?: BmServerVdcTimeouts;
}
export interface BmServerVdcBlockStorages {
  /**
  * Use encryption for this storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#encrypted BmServerVdc#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Block storage name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#name BmServerVdc#name}
  */
  readonly name: string;
  /**
  * Storage product name : SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#product_name BmServerVdc#product_name}
  */
  readonly productName?: string;
  /**
  * Storage size in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#storage_size_gb BmServerVdc#storage_size_gb}
  */
  readonly storageSizeGb: number;
}

export function bmServerVdcBlockStoragesToTerraform(struct?: BmServerVdcBlockStorages | cdktf.IResolvable): any {
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


export function bmServerVdcBlockStoragesToHclTerraform(struct?: BmServerVdcBlockStorages | cdktf.IResolvable): any {
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

export class BmServerVdcBlockStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BmServerVdcBlockStorages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BmServerVdcBlockStorages | cdktf.IResolvable | undefined) {
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

export class BmServerVdcBlockStoragesList extends cdktf.ComplexList {
  public internalValue? : BmServerVdcBlockStorages[] | cdktf.IResolvable

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
  public get(index: number): BmServerVdcBlockStoragesOutputReference {
    return new BmServerVdcBlockStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BmServerVdcServers {
  /**
  * Enable DNS feature for this bare-metal server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#dns_enabled BmServerVdc#dns_enabled}
  */
  readonly dnsEnabled?: boolean | cdktf.IResolvable;
  /**
  * IP address of this bare-metal server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#ip_address BmServerVdc#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#name BmServerVdc#name}
  */
  readonly name: string;
  /**
  * Enable hyper-threading feature for this bare-metal server.(ex Y, N)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#use_hyper_threading BmServerVdc#use_hyper_threading}
  */
  readonly useHyperThreading?: string;
}

export function bmServerVdcServersToTerraform(struct?: BmServerVdcServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_enabled: cdktf.booleanToTerraform(struct!.dnsEnabled),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    use_hyper_threading: cdktf.stringToTerraform(struct!.useHyperThreading),
  }
}


export function bmServerVdcServersToHclTerraform(struct?: BmServerVdcServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dnsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class BmServerVdcServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BmServerVdcServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsEnabled = this._dnsEnabled;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useHyperThreading !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHyperThreading = this._useHyperThreading;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BmServerVdcServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsEnabled = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._useHyperThreading = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsEnabled = value.dnsEnabled;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._useHyperThreading = value.useHyperThreading;
    }
  }

  // dns_enabled - computed: false, optional: true, required: false
  private _dnsEnabled?: boolean | cdktf.IResolvable; 
  public get dnsEnabled() {
    return this.getBooleanAttribute('dns_enabled');
  }
  public set dnsEnabled(value: boolean | cdktf.IResolvable) {
    this._dnsEnabled = value;
  }
  public resetDnsEnabled() {
    this._dnsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsEnabledInput() {
    return this._dnsEnabled;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

export class BmServerVdcServersList extends cdktf.ComplexList {
  public internalValue? : BmServerVdcServers[] | cdktf.IResolvable

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
  public get(index: number): BmServerVdcServersOutputReference {
    return new BmServerVdcServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BmServerVdcTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#create BmServerVdc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#delete BmServerVdc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#update BmServerVdc#update}
  */
  readonly update?: string;
}

export function bmServerVdcTimeoutsToTerraform(struct?: BmServerVdcTimeouts | cdktf.IResolvable): any {
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


export function bmServerVdcTimeoutsToHclTerraform(struct?: BmServerVdcTimeouts | cdktf.IResolvable): any {
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

export class BmServerVdcTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BmServerVdcTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BmServerVdcTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc samsungcloudplatform_bm_server_vdc}
*/
export class BmServerVdc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_bm_server_vdc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BmServerVdc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BmServerVdc to import
  * @param importFromId The id of the existing BmServerVdc that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BmServerVdc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_bm_server_vdc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/bm_server_vdc samsungcloudplatform_bm_server_vdc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BmServerVdcConfig
  */
  public constructor(scope: Construct, id: string, config: BmServerVdcConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_bm_server_vdc',
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
    this._blockId = config.blockId;
    this._contractDiscount = config.contractDiscount;
    this._cpuCount = config.cpuCount;
    this._deleteProtection = config.deleteProtection;
    this._id = config.id;
    this._imageName = config.imageName;
    this._initialScript = config.initialScript;
    this._memorySize = config.memorySize;
    this._serviceZoneId = config.serviceZoneId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vdcId = config.vdcId;
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

  // block_id - computed: false, optional: false, required: true
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
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

  // memory_size - computed: false, optional: false, required: true
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
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

  // vdc_id - computed: false, optional: false, required: true
  private _vdcId?: string; 
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }
  public set vdcId(value: string) {
    this._vdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcIdInput() {
    return this._vdcId;
  }

  // block_storages - computed: false, optional: true, required: false
  private _blockStorages = new BmServerVdcBlockStoragesList(this, "block_storages", false);
  public get blockStorages() {
    return this._blockStorages;
  }
  public putBlockStorages(value: BmServerVdcBlockStorages[] | cdktf.IResolvable) {
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
  private _servers = new BmServerVdcServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
  public putServers(value: BmServerVdcServers[] | cdktf.IResolvable) {
    this._servers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BmServerVdcTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BmServerVdcTimeouts) {
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
      block_id: cdktf.stringToTerraform(this._blockId),
      contract_discount: cdktf.stringToTerraform(this._contractDiscount),
      cpu_count: cdktf.numberToTerraform(this._cpuCount),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      initial_script: cdktf.stringToTerraform(this._initialScript),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vdc_id: cdktf.stringToTerraform(this._vdcId),
      block_storages: cdktf.listMapper(bmServerVdcBlockStoragesToTerraform, true)(this._blockStorages.internalValue),
      servers: cdktf.listMapper(bmServerVdcServersToTerraform, true)(this._servers.internalValue),
      timeouts: bmServerVdcTimeoutsToTerraform(this._timeouts.internalValue),
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
      block_id: {
        value: cdktf.stringToHclTerraform(this._blockId),
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
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
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
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
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
      vdc_id: {
        value: cdktf.stringToHclTerraform(this._vdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_storages: {
        value: cdktf.listMapperHcl(bmServerVdcBlockStoragesToHclTerraform, true)(this._blockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BmServerVdcBlockStoragesList",
      },
      servers: {
        value: cdktf.listMapperHcl(bmServerVdcServersToHclTerraform, true)(this._servers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BmServerVdcServersList",
      },
      timeouts: {
        value: bmServerVdcTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BmServerVdcTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
