// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#description VpcPrivateEndpoint#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#folder_id VpcPrivateEndpoint#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#id VpcPrivateEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#labels VpcPrivateEndpoint#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#name VpcPrivateEndpoint#name}
  */
  readonly name?: string;
  /**
  * ID of the network which private endpoint belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#network_id VpcPrivateEndpoint#network_id}
  */
  readonly networkId: string;
  /**
  * dns_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#dns_options VpcPrivateEndpoint#dns_options}
  */
  readonly dnsOptions?: VpcPrivateEndpointDnsOptions;
  /**
  * endpoint_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#endpoint_address VpcPrivateEndpoint#endpoint_address}
  */
  readonly endpointAddress?: VpcPrivateEndpointEndpointAddress;
  /**
  * object_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#object_storage VpcPrivateEndpoint#object_storage}
  */
  readonly objectStorage: VpcPrivateEndpointObjectStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#timeouts VpcPrivateEndpoint#timeouts}
  */
  readonly timeouts?: VpcPrivateEndpointTimeouts;
}
export interface VpcPrivateEndpointDnsOptions {
  /**
  * If enabled - additional service DNS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#private_dns_records_enabled VpcPrivateEndpoint#private_dns_records_enabled}
  */
  readonly privateDnsRecordsEnabled?: boolean | cdktf.IResolvable;
}

export function vpcPrivateEndpointDnsOptionsToTerraform(struct?: VpcPrivateEndpointDnsOptionsOutputReference | VpcPrivateEndpointDnsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_dns_records_enabled: cdktf.booleanToTerraform(struct!.privateDnsRecordsEnabled),
  }
}


export function vpcPrivateEndpointDnsOptionsToHclTerraform(struct?: VpcPrivateEndpointDnsOptionsOutputReference | VpcPrivateEndpointDnsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_dns_records_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.privateDnsRecordsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPrivateEndpointDnsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPrivateEndpointDnsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateDnsRecordsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDnsRecordsEnabled = this._privateDnsRecordsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPrivateEndpointDnsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateDnsRecordsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateDnsRecordsEnabled = value.privateDnsRecordsEnabled;
    }
  }

  // private_dns_records_enabled - computed: true, optional: true, required: false
  private _privateDnsRecordsEnabled?: boolean | cdktf.IResolvable; 
  public get privateDnsRecordsEnabled() {
    return this.getBooleanAttribute('private_dns_records_enabled');
  }
  public set privateDnsRecordsEnabled(value: boolean | cdktf.IResolvable) {
    this._privateDnsRecordsEnabled = value;
  }
  public resetPrivateDnsRecordsEnabled() {
    this._privateDnsRecordsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsRecordsEnabledInput() {
    return this._privateDnsRecordsEnabled;
  }
}
export interface VpcPrivateEndpointEndpointAddress {
  /**
  * Specifies IP address within `subnet_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#address VpcPrivateEndpoint#address}
  */
  readonly address?: string;
  /**
  * ID of the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#address_id VpcPrivateEndpoint#address_id}
  */
  readonly addressId?: string;
  /**
  * Subnet of the IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#subnet_id VpcPrivateEndpoint#subnet_id}
  */
  readonly subnetId?: string;
}

export function vpcPrivateEndpointEndpointAddressToTerraform(struct?: VpcPrivateEndpointEndpointAddressOutputReference | VpcPrivateEndpointEndpointAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_id: cdktf.stringToTerraform(struct!.addressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function vpcPrivateEndpointEndpointAddressToHclTerraform(struct?: VpcPrivateEndpointEndpointAddressOutputReference | VpcPrivateEndpointEndpointAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_id: {
      value: cdktf.stringToHclTerraform(struct!.addressId),
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

export class VpcPrivateEndpointEndpointAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPrivateEndpointEndpointAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressId = this._addressId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPrivateEndpointEndpointAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._addressId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._addressId = value.addressId;
      this._subnetId = value.subnetId;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_id - computed: true, optional: true, required: false
  private _addressId?: string; 
  public get addressId() {
    return this.getStringAttribute('address_id');
  }
  public set addressId(value: string) {
    this._addressId = value;
  }
  public resetAddressId() {
    this._addressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIdInput() {
    return this._addressId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface VpcPrivateEndpointObjectStorage {
}

export function vpcPrivateEndpointObjectStorageToTerraform(struct?: VpcPrivateEndpointObjectStorageOutputReference | VpcPrivateEndpointObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcPrivateEndpointObjectStorageToHclTerraform(struct?: VpcPrivateEndpointObjectStorageOutputReference | VpcPrivateEndpointObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcPrivateEndpointObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPrivateEndpointObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPrivateEndpointObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VpcPrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#create VpcPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#delete VpcPrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#update VpcPrivateEndpoint#update}
  */
  readonly update?: string;
}

export function vpcPrivateEndpointTimeoutsToTerraform(struct?: VpcPrivateEndpointTimeouts | cdktf.IResolvable): any {
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


export function vpcPrivateEndpointTimeoutsToHclTerraform(struct?: VpcPrivateEndpointTimeouts | cdktf.IResolvable): any {
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

export class VpcPrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcPrivateEndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcPrivateEndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint yandex_vpc_private_endpoint}
*/
export class VpcPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_vpc_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPrivateEndpoint to import
  * @param importFromId The id of the existing VpcPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_vpc_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/vpc_private_endpoint yandex_vpc_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_vpc_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
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
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._dnsOptions.internalValue = config.dnsOptions;
    this._endpointAddress.internalValue = config.endpointAddress;
    this._objectStorage.internalValue = config.objectStorage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // dns_options - computed: false, optional: true, required: false
  private _dnsOptions = new VpcPrivateEndpointDnsOptionsOutputReference(this, "dns_options");
  public get dnsOptions() {
    return this._dnsOptions;
  }
  public putDnsOptions(value: VpcPrivateEndpointDnsOptions) {
    this._dnsOptions.internalValue = value;
  }
  public resetDnsOptions() {
    this._dnsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOptionsInput() {
    return this._dnsOptions.internalValue;
  }

  // endpoint_address - computed: false, optional: true, required: false
  private _endpointAddress = new VpcPrivateEndpointEndpointAddressOutputReference(this, "endpoint_address");
  public get endpointAddress() {
    return this._endpointAddress;
  }
  public putEndpointAddress(value: VpcPrivateEndpointEndpointAddress) {
    this._endpointAddress.internalValue = value;
  }
  public resetEndpointAddress() {
    this._endpointAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAddressInput() {
    return this._endpointAddress.internalValue;
  }

  // object_storage - computed: false, optional: false, required: true
  private _objectStorage = new VpcPrivateEndpointObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: VpcPrivateEndpointObjectStorage) {
    this._objectStorage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcPrivateEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcPrivateEndpointTimeouts) {
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
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      dns_options: vpcPrivateEndpointDnsOptionsToTerraform(this._dnsOptions.internalValue),
      endpoint_address: vpcPrivateEndpointEndpointAddressToTerraform(this._endpointAddress.internalValue),
      object_storage: vpcPrivateEndpointObjectStorageToTerraform(this._objectStorage.internalValue),
      timeouts: vpcPrivateEndpointTimeoutsToTerraform(this._timeouts.internalValue),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_options: {
        value: vpcPrivateEndpointDnsOptionsToHclTerraform(this._dnsOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcPrivateEndpointDnsOptionsList",
      },
      endpoint_address: {
        value: vpcPrivateEndpointEndpointAddressToHclTerraform(this._endpointAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcPrivateEndpointEndpointAddressList",
      },
      object_storage: {
        value: vpcPrivateEndpointObjectStorageToHclTerraform(this._objectStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcPrivateEndpointObjectStorageList",
      },
      timeouts: {
        value: vpcPrivateEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcPrivateEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
