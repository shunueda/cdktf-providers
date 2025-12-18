// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#deletion_protection VpcAddress#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#description VpcAddress#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#folder_id VpcAddress#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#id VpcAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#labels VpcAddress#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#name VpcAddress#name}
  */
  readonly name?: string;
  /**
  * dns_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#dns_record VpcAddress#dns_record}
  */
  readonly dnsRecord?: VpcAddressDnsRecord[] | cdktf.IResolvable;
  /**
  * external_ipv4_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#external_ipv4_address VpcAddress#external_ipv4_address}
  */
  readonly externalIpv4Address?: VpcAddressExternalIpv4Address;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#timeouts VpcAddress#timeouts}
  */
  readonly timeouts?: VpcAddressTimeouts;
}
export interface VpcAddressDnsRecord {
  /**
  * DNS zone id to create record at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#dns_zone_id VpcAddress#dns_zone_id}
  */
  readonly dnsZoneId: string;
  /**
  * FQDN for record to address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#fqdn VpcAddress#fqdn}
  */
  readonly fqdn: string;
  /**
  * If PTR record is needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#ptr VpcAddress#ptr}
  */
  readonly ptr?: boolean | cdktf.IResolvable;
  /**
  * TTL of DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#ttl VpcAddress#ttl}
  */
  readonly ttl?: number;
}

export function vpcAddressDnsRecordToTerraform(struct?: VpcAddressDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_zone_id: cdktf.stringToTerraform(struct!.dnsZoneId),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ptr: cdktf.booleanToTerraform(struct!.ptr),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function vpcAddressDnsRecordToHclTerraform(struct?: VpcAddressDnsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.dnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptr: {
      value: cdktf.booleanToHclTerraform(struct!.ptr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcAddressDnsRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcAddressDnsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneId = this._dnsZoneId;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptr = this._ptr;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcAddressDnsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsZoneId = undefined;
      this._fqdn = undefined;
      this._ptr = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsZoneId = value.dnsZoneId;
      this._fqdn = value.fqdn;
      this._ptr = value.ptr;
      this._ttl = value.ttl;
    }
  }

  // dns_zone_id - computed: false, optional: false, required: true
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ptr - computed: false, optional: true, required: false
  private _ptr?: boolean | cdktf.IResolvable; 
  public get ptr() {
    return this.getBooleanAttribute('ptr');
  }
  public set ptr(value: boolean | cdktf.IResolvable) {
    this._ptr = value;
  }
  public resetPtr() {
    this._ptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrInput() {
    return this._ptr;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class VpcAddressDnsRecordList extends cdktf.ComplexList {
  public internalValue? : VpcAddressDnsRecord[] | cdktf.IResolvable

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
  public get(index: number): VpcAddressDnsRecordOutputReference {
    return new VpcAddressDnsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcAddressExternalIpv4Address {
  /**
  * Enable DDOS protection. Possible values are: `qrator`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#ddos_protection_provider VpcAddress#ddos_protection_provider}
  */
  readonly ddosProtectionProvider?: string;
  /**
  * Wanted outgoing smtp capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#outgoing_smtp_capability VpcAddress#outgoing_smtp_capability}
  */
  readonly outgoingSmtpCapability?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#zone_id VpcAddress#zone_id}
  */
  readonly zoneId?: string;
}

export function vpcAddressExternalIpv4AddressToTerraform(struct?: VpcAddressExternalIpv4AddressOutputReference | VpcAddressExternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddos_protection_provider: cdktf.stringToTerraform(struct!.ddosProtectionProvider),
    outgoing_smtp_capability: cdktf.stringToTerraform(struct!.outgoingSmtpCapability),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function vpcAddressExternalIpv4AddressToHclTerraform(struct?: VpcAddressExternalIpv4AddressOutputReference | VpcAddressExternalIpv4Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddos_protection_provider: {
      value: cdktf.stringToHclTerraform(struct!.ddosProtectionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outgoing_smtp_capability: {
      value: cdktf.stringToHclTerraform(struct!.outgoingSmtpCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcAddressExternalIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcAddressExternalIpv4Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddosProtectionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosProtectionProvider = this._ddosProtectionProvider;
    }
    if (this._outgoingSmtpCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.outgoingSmtpCapability = this._outgoingSmtpCapability;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcAddressExternalIpv4Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddosProtectionProvider = undefined;
      this._outgoingSmtpCapability = undefined;
      this._zoneId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddosProtectionProvider = value.ddosProtectionProvider;
      this._outgoingSmtpCapability = value.outgoingSmtpCapability;
      this._zoneId = value.zoneId;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // ddos_protection_provider - computed: true, optional: true, required: false
  private _ddosProtectionProvider?: string; 
  public get ddosProtectionProvider() {
    return this.getStringAttribute('ddos_protection_provider');
  }
  public set ddosProtectionProvider(value: string) {
    this._ddosProtectionProvider = value;
  }
  public resetDdosProtectionProvider() {
    this._ddosProtectionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionProviderInput() {
    return this._ddosProtectionProvider;
  }

  // outgoing_smtp_capability - computed: true, optional: true, required: false
  private _outgoingSmtpCapability?: string; 
  public get outgoingSmtpCapability() {
    return this.getStringAttribute('outgoing_smtp_capability');
  }
  public set outgoingSmtpCapability(value: string) {
    this._outgoingSmtpCapability = value;
  }
  public resetOutgoingSmtpCapability() {
    this._outgoingSmtpCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingSmtpCapabilityInput() {
    return this._outgoingSmtpCapability;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface VpcAddressTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#create VpcAddress#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#delete VpcAddress#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#update VpcAddress#update}
  */
  readonly update?: string;
}

export function vpcAddressTimeoutsToTerraform(struct?: VpcAddressTimeouts | cdktf.IResolvable): any {
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


export function vpcAddressTimeoutsToHclTerraform(struct?: VpcAddressTimeouts | cdktf.IResolvable): any {
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

export class VpcAddressTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcAddressTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcAddressTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address yandex_vpc_address}
*/
export class VpcAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_vpc_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcAddress to import
  * @param importFromId The id of the existing VpcAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_vpc_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/vpc_address yandex_vpc_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcAddressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpcAddressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_vpc_address',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._dnsRecord.internalValue = config.dnsRecord;
    this._externalIpv4Address.internalValue = config.externalIpv4Address;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getBooleanAttribute('used');
  }

  // dns_record - computed: false, optional: true, required: false
  private _dnsRecord = new VpcAddressDnsRecordList(this, "dns_record", false);
  public get dnsRecord() {
    return this._dnsRecord;
  }
  public putDnsRecord(value: VpcAddressDnsRecord[] | cdktf.IResolvable) {
    this._dnsRecord.internalValue = value;
  }
  public resetDnsRecord() {
    this._dnsRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordInput() {
    return this._dnsRecord.internalValue;
  }

  // external_ipv4_address - computed: false, optional: true, required: false
  private _externalIpv4Address = new VpcAddressExternalIpv4AddressOutputReference(this, "external_ipv4_address");
  public get externalIpv4Address() {
    return this._externalIpv4Address;
  }
  public putExternalIpv4Address(value: VpcAddressExternalIpv4Address) {
    this._externalIpv4Address.internalValue = value;
  }
  public resetExternalIpv4Address() {
    this._externalIpv4Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv4AddressInput() {
    return this._externalIpv4Address.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcAddressTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcAddressTimeouts) {
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
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      dns_record: cdktf.listMapper(vpcAddressDnsRecordToTerraform, true)(this._dnsRecord.internalValue),
      external_ipv4_address: vpcAddressExternalIpv4AddressToTerraform(this._externalIpv4Address.internalValue),
      timeouts: vpcAddressTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      dns_record: {
        value: cdktf.listMapperHcl(vpcAddressDnsRecordToHclTerraform, true)(this._dnsRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcAddressDnsRecordList",
      },
      external_ipv4_address: {
        value: vpcAddressExternalIpv4AddressToHclTerraform(this._externalIpv4Address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcAddressExternalIpv4AddressList",
      },
      timeouts: {
        value: vpcAddressTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcAddressTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
