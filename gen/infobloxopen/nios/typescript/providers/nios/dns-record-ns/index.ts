// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordNsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of zone name servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#addresses DnsRecordNs#addresses}
  */
  readonly addresses: DnsRecordNsAddresses[] | cdktf.IResolvable;
  /**
  * The MS delegation point name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#ms_delegation_name DnsRecordNs#ms_delegation_name}
  */
  readonly msDelegationName?: string;
  /**
  * The name of the NS record in FQDN format. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#name DnsRecordNs#name}
  */
  readonly name: string;
  /**
  * The domain name of an authoritative server for the redirected zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#nameserver DnsRecordNs#nameserver}
  */
  readonly nameserver: string;
  /**
  * The name of the DNS view in which the record resides. Example: "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#view DnsRecordNs#view}
  */
  readonly view?: string;
}
export interface DnsRecordNsAddresses {
  /**
  * The address of the Zone Name Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#address DnsRecordNs#address}
  */
  readonly address: string;
  /**
  * Flag to indicate if ptr records need to be auto created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#auto_create_ptr DnsRecordNs#auto_create_ptr}
  */
  readonly autoCreatePtr?: boolean | cdktf.IResolvable;
}

export function dnsRecordNsAddressesToTerraform(struct?: DnsRecordNsAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    auto_create_ptr: cdktf.booleanToTerraform(struct!.autoCreatePtr),
  }
}


export function dnsRecordNsAddressesToHclTerraform(struct?: DnsRecordNsAddresses | cdktf.IResolvable): any {
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
    auto_create_ptr: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreatePtr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsRecordNsAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordNsAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._autoCreatePtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreatePtr = this._autoCreatePtr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordNsAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._autoCreatePtr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._autoCreatePtr = value.autoCreatePtr;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // auto_create_ptr - computed: true, optional: true, required: false
  private _autoCreatePtr?: boolean | cdktf.IResolvable; 
  public get autoCreatePtr() {
    return this.getBooleanAttribute('auto_create_ptr');
  }
  public set autoCreatePtr(value: boolean | cdktf.IResolvable) {
    this._autoCreatePtr = value;
  }
  public resetAutoCreatePtr() {
    this._autoCreatePtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreatePtrInput() {
    return this._autoCreatePtr;
  }
}

export class DnsRecordNsAddressesList extends cdktf.ComplexList {
  public internalValue? : DnsRecordNsAddresses[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordNsAddressesOutputReference {
    return new DnsRecordNsAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordNsCloudInfoDelegatedMember {
}

export function dnsRecordNsCloudInfoDelegatedMemberToTerraform(struct?: DnsRecordNsCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsRecordNsCloudInfoDelegatedMemberToHclTerraform(struct?: DnsRecordNsCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsRecordNsCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordNsCloudInfoDelegatedMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordNsCloudInfoDelegatedMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4addr - computed: true, optional: false, required: false
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }

  // ipv6addr - computed: true, optional: false, required: false
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DnsRecordNsCloudInfo {
}

export function dnsRecordNsCloudInfoToTerraform(struct?: DnsRecordNsCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsRecordNsCloudInfoToHclTerraform(struct?: DnsRecordNsCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsRecordNsCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordNsCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordNsCloudInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: false, required: false
  private _delegatedMember = new DnsRecordNsCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns nios_dns_record_ns}
*/
export class DnsRecordNs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_record_ns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecordNs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecordNs to import
  * @param importFromId The id of the existing DnsRecordNs that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecordNs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_record_ns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_ns nios_dns_record_ns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordNsConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordNsConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_record_ns',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses.internalValue = config.addresses;
    this._msDelegationName = config.msDelegationName;
    this._name = config.name;
    this._nameserver = config.nameserver;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: false, required: true
  private _addresses = new DnsRecordNsAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: DnsRecordNsAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new DnsRecordNsCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
  }

  // ms_delegation_name - computed: true, optional: true, required: false
  private _msDelegationName?: string; 
  public get msDelegationName() {
    return this.getStringAttribute('ms_delegation_name');
  }
  public set msDelegationName(value: string) {
    this._msDelegationName = value;
  }
  public resetMsDelegationName() {
    this._msDelegationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msDelegationNameInput() {
    return this._msDelegationName;
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

  // nameserver - computed: false, optional: false, required: true
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(dnsRecordNsAddressesToTerraform, false)(this._addresses.internalValue),
      ms_delegation_name: cdktf.stringToTerraform(this._msDelegationName),
      name: cdktf.stringToTerraform(this._name),
      nameserver: cdktf.stringToTerraform(this._nameserver),
      view: cdktf.stringToTerraform(this._view),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(dnsRecordNsAddressesToHclTerraform, false)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsRecordNsAddressesList",
      },
      ms_delegation_name: {
        value: cdktf.stringToHclTerraform(this._msDelegationName),
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
      nameserver: {
        value: cdktf.stringToHclTerraform(this._nameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
